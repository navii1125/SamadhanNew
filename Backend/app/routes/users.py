# app/routes/users.py
from fastapi import APIRouter, HTTPException, Query
from app.database import db

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/by-email")
def get_user_by_email(email: str = Query(...)):
    user = db.users.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "id": str(user.get("_id", "")),
        "name": user.get("name") or user.get("full_name") or "",
        "email": user.get("email") or "",
        "created_at": user.get("created_at"),
    }
