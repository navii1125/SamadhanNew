# # 
# from fastapi import APIRouter, HTTPException, Form, File, UploadFile
# from app.models import Complaint
# from app.database import db
# from bson import ObjectId
# import datetime
# import random
# import string
# import os

# router = APIRouter()

# UPLOAD_DIR = "uploads"
# os.makedirs(UPLOAD_DIR, exist_ok=True)

# def generate_tracking_id():
#     return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

# def serialize_doc(doc):
#     doc["id"] = str(doc.get("_id", ""))
#     doc.pop("_id", None)
#     doc.setdefault("title", None)
#     doc.setdefault("description", None)
#     doc.setdefault("name", None)
#     doc.setdefault("email", None)
#     doc.setdefault("phone", None)
#     doc.setdefault("location", None)
#     doc.setdefault("latitude", None)
#     doc.setdefault("longitude", None)
#     doc.setdefault("tracking_id", None)
#     doc.setdefault("status", None)
#     doc.setdefault("created_at", None)
#     doc.setdefault("image_path", None)
#     return doc

# @router.post("/", response_model=Complaint)
# async def create_complaint(
#     title: str = Form(...),
#     description: str = Form(...),
#     name: str = Form(...),
#     email: str = Form(...),
#     phone: str = Form(...),
#     location: str = Form(...),
#     latitude: float = Form(...),
#     longitude: float = Form(...),
#     image: UploadFile = File(None)   # image is optional
# ):
#     tracking_id = generate_tracking_id()

#     # Save image if uploaded
#     image_path = None
#     if image:
#         image_filename = f"{tracking_id}_{image.filename}"
#         image_path = os.path.join(UPLOAD_DIR, image_filename)
#         with open(image_path, "wb") as buffer:
#             buffer.write(await image.read())

#     complaint_dict = {
#         "title": title,
#         "description": description,
#         "name": name,
#         "email": email,
#         "phone": phone,
#         "location": location,
#         "latitude": latitude,
#         "longitude": longitude,
#         "tracking_id": tracking_id,
#         "status": "Open",
#         "created_at": datetime.datetime.utcnow(),
#         "image_path": image_path,
#     }

#     result = db.complaints.insert_one(complaint_dict)
#     new_complaint = db.complaints.find_one({"_id": result.inserted_id})
#     return serialize_doc(new_complaint)
# filepath: Backend/app/complaints.py
from fastapi import APIRouter, HTTPException, Form, File, UploadFile
from app.models import Complaint
from app.database import db
from bson import ObjectId
import datetime
import random
import string
import os

# NEW: import the mock AI helpers
from app.services.mock_ai import (
    predict_text_label,
    predict_image_label,
    verify_labels,
    assign_department,
)

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def generate_tracking_id():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))


def serialize_doc(doc):
    doc["id"] = str(doc.get("_id", ""))
    doc.pop("_id", None)

    # Base fields
    doc.setdefault("title", None)
    doc.setdefault("description", None)
    doc.setdefault("name", None)
    doc.setdefault("email", None)
    doc.setdefault("phone", None)
    doc.setdefault("location", None)
    doc.setdefault("latitude", None)
    doc.setdefault("longitude", None)
    doc.setdefault("tracking_id", None)
    doc.setdefault("status", None)
    doc.setdefault("created_at", None)
    doc.setdefault("image_path", None)

    # NEW: AI & assignment fields
    doc.setdefault("model_text_label", None)
    doc.setdefault("model_text_confidence", None)
    doc.setdefault("model_image_label", None)
    doc.setdefault("model_image_confidence", None)
    doc.setdefault("model_verification", None)
    doc.setdefault("assigned_department", None)
    doc.setdefault("assigned_email", None)
    doc.setdefault("assigned_phone", None)
    doc.setdefault("assigned_sla_days", None)
    doc.setdefault("assigned_due_date", None)

    return doc


@router.post("/", response_model=Complaint)
async def create_complaint(
    title: str = Form(...),
    description: str = Form(...),
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    location: str = Form(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    image: UploadFile = File(None)   # image is optional
):
    tracking_id = generate_tracking_id()
    created_at = datetime.datetime.utcnow()

    # Save image if uploaded
    image_path = None
    image_filename = None
    if image:
        image_filename = f"{tracking_id}_{image.filename}"
        image_path = os.path.join(UPLOAD_DIR, image_filename)
        with open(image_path, "wb") as buffer:
            buffer.write(await image.read())

    # --- MOCK AI PIPELINE ---
    # 1) text prediction
    text_label, text_conf = predict_text_label(description or title)

    # 2) image prediction (based on filename only, for demo)
    image_label, image_conf = predict_image_label(image_filename)

    # 3) verification
    verification = verify_labels(text_label, image_label)

    # 4) auto-assignment based on final category (prefer text_label)
    assignment = assign_department(text_label, created_at)

    complaint_dict = {
        "title": title,
        "description": description,
        "name": name,
        "email": email.strip().lower(),  # normalize for consistent filtering
        "phone": phone,
        "location": location,
        "latitude": latitude,
        "longitude": longitude,
        "tracking_id": tracking_id,
        "status": "Open",
        "created_at": created_at,
        "image_path": image_path,

        # NEW: stored AI signals
        "model_text_label": text_label,
        "model_text_confidence": text_conf,
        "model_image_label": image_label,
        "model_image_confidence": image_conf,
        "model_verification": verification,

        # NEW: routing
        **assignment,
    }

    result = db.complaints.insert_one(complaint_dict)
    new_complaint = db.complaints.find_one({"_id": result.inserted_id})
    return serialize_doc(new_complaint)


@router.get("/", response_model=list[Complaint])
def get_complaints():
    return [serialize_doc(c) for c in db.complaints.find()]


@router.get("/tracking/{tracking_id}", response_model=Complaint)
def get_complaint_by_tracking_id(tracking_id: str):
    complaint = db.complaints.find_one({"tracking_id": tracking_id})
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    return serialize_doc(complaint)


@router.get("/{complaint_id}", response_model=Complaint)
def get_complaint_by_id(complaint_id: str):
    try:
        complaint = db.complaints.find_one({"_id": ObjectId(complaint_id)})
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid complaint ID")
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    return serialize_doc(complaint)
