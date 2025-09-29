# app/routes/feedback.py
from fastapi import APIRouter, Form
from pydantic import BaseModel
from app.database import db
from datetime import datetime

router = APIRouter(prefix="/feedback", tags=["feedback"])

@router.post("/")
async def submit_feedback(
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)
):
    feedback = {
        "name": name,
        "email": email,
        "message": message,
        "created_at": datetime.utcnow()
    }
    result = db.feedback.insert_one(feedback)
    return {"id": str(result.inserted_id), "message": "Feedback saved successfully"}

@router.post("/contact")
async def submit_contact(
    name: str = Form(...),
    email: str = Form(...),
    subject: str = Form(...),
    message: str = Form(...)
):
    contact = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message,
        "created_at": datetime.utcnow()
    }
    result = db.contacts.insert_one(contact)
    return {"id": str(result.inserted_id), "message": "Contact saved successfully"}
