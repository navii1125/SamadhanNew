# filepath: Backend/app/services/mock_ai.py
from __future__ import annotations
import random
from datetime import datetime, timedelta
from typing import Tuple, Dict

DEFAULT_LABELS = [
    "Road & Transportation",
    "Street Lighting",
    "Electricity",
    "Drainage & Sewerage",
    "Water Supply",
    "Waste Management",
    "Public Safety",
    "Parks & Recreation",
    "Public Health",
    "Others",
]

# A tiny rule-based text classifier to simulate a model
def predict_text_label(text: str) -> Tuple[str, float]:
    t = (text or "").lower()
    if any(k in t for k in ["pothole", "road", "gully", "traffic", "footpath"]):
        return "Road & Transportation", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["light", "street light", "streetlight", "lamp", "led"]):
        return "Street Lighting", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["electricity", "power", "wire", "transformer", "meter"]):
        return "Electricity", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["drain", "sewer", "water logging", "sewage", "manhole"]):
        return "Drainage & Sewerage", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["water supply", "pipeline", "tap", "leak"]):
        return "Water Supply", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["garbage", "waste", "trash", "bin", "collection"]):
        return "Waste Management", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["theft", "crime", "safety", "danger", "accident"]):
        return "Public Safety", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["park", "garden", "playground", "tree", "green"]):
        return "Parks & Recreation", round(random.uniform(0.8, 0.98), 2)
    if any(k in t for k in ["clinic", "dengue", "mosquito", "hospital", "sanitation"]):
        return "Public Health", round(random.uniform(0.8, 0.98), 2)
    return random.choice(DEFAULT_LABELS), round(random.uniform(0.6, 0.9), 2)


# A filename-based “vision” label predictor (simulated)
def predict_image_label(filename: str | None) -> Tuple[str, float]:
    fname = (filename or "").lower()
    if any(k in fname for k in ["pothole", "hole", "road"]):
        return "Road & Transportation", round(random.uniform(0.7, 0.95), 2)
    if any(k in fname for k in ["light", "lamp", "streetlight"]):
        return "Street Lighting", round(random.uniform(0.7, 0.95), 2)
    if any(k in fname for k in ["electric", "wire", "transformer", "box", "meter"]):
        return "Electricity", round(random.uniform(0.7, 0.95), 2)
    if any(k in fname for k in ["drain", "sewer", "waterlogging", "manhole"]):
        return "Drainage & Sewerage", round(random.uniform(0.7, 0.95), 2)
    return random.choice(DEFAULT_LABELS), round(random.uniform(0.55, 0.85), 2)


def verify_labels(text_label: str, image_label: str) -> str:
    if not text_label and not image_label:
        return "⚠️ Missing inputs"
    if text_label == image_label:
        return "Match ✅ Complaint matches evidence."
    return "Mismatch ❌ Complaint and evidence differ."


# Department routing table with SLAs
DEPT_MAP: Dict[str, Dict] = {
    "Road & Transportation": {
        "department": "Public Works Dept (PWD)",
        "email": "pwd@city.gov",
        "phone": "+91-80000-00001",
        "sla_days": 7,
    },
    "Street Lighting": {
        "department": "Electrical & Lighting Dept",
        "email": "lighting@city.gov",
        "phone": "+91-80000-00002",
        "sla_days": 5,
    },
    "Electricity": {
        "department": "Electric Utility",
        "email": "electric@city.gov",
        "phone": "+91-80000-00003",
        "sla_days": 3,
    },
    "Drainage & Sewerage": {
        "department": "Drainage Board",
        "email": "sewer@city.gov",
        "phone": "+91-80000-00004",
        "sla_days": 4,
    },
    "Water Supply": {
        "department": "Water Works",
        "email": "water@city.gov",
        "phone": "+91-80000-00005",
        "sla_days": 5,
    },
    "Waste Management": {
        "department": "Solid Waste Mgmt",
        "email": "waste@city.gov",
        "phone": "+91-80000-00006",
        "sla_days": 2,
    },
    "Public Safety": {
        "department": "City Safety Cell",
        "email": "safety@city.gov",
        "phone": "+91-80000-00007",
        "sla_days": 2,
    },
    "Parks & Recreation": {
        "department": "Parks & Gardens",
        "email": "parks@city.gov",
        "phone": "+91-80000-00008",
        "sla_days": 10,
    },
    "Public Health": {
        "department": "Health Dept",
        "email": "health@city.gov",
        "phone": "+91-80000-00009",
        "sla_days": 3,
    },
    "Others": {
        "department": "General Support",
        "email": "support@city.gov",
        "phone": "+91-80000-00010",
        "sla_days": 7,
    },
}


def assign_department(category: str, created_at: datetime) -> Dict[str, str | int]:
    info = DEPT_MAP.get(category or "Others", DEPT_MAP["Others"])
    due_date = (created_at + timedelta(days=info["sla_days"])).strftime("%Y-%m-%d")
    return {
        "assigned_department": info["department"],
        "assigned_email": info["email"],
        "assigned_phone": info["phone"],
        "assigned_sla_days": info["sla_days"],
        "assigned_due_date": due_date,
    }
