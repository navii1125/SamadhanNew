# # filepath: c:\Users\athar\Desktop\SamadhanX\Backend\app\models.py
# from pydantic import BaseModel, Field
# from typing import Optional
# from datetime import datetime

# class ComplaintIn(BaseModel):
#     title: str
#     description: str
#     name: str
#     email: str
#     phone: str
#     location: str
#     latitude: float
#     longitude: float

# class Complaint(BaseModel):
#     id: str = Field(..., alias="id")
#     title: str
#     description: str
#     name: str
#     email: str
#     phone: str
#     location: str
#     latitude: float
#     longitude: float
#     tracking_id: Optional[str] = None
#     status: Optional[str] = None
#     created_at: Optional[datetime] = None

#     class Config:
#         allow_population_by_field_name = True
#         orm_mode = True
# filepath: c:\Users\athar\Desktop\SamadhanX\Backend\app\models.py
# from pydantic import BaseModel, Field
# from typing import Optional
# from datetime import datetime


# class ComplaintIn(BaseModel):
#     title: str
#     description: str
#     name: str
#     email: str
#     phone: str
#     location: str
#     latitude: float
#     longitude: float


# class Complaint(BaseModel):
#     id: str = Field(..., alias="id")
#     title: str
#     description: str
#     name: str
#     email: str
#     phone: str
#     location: str
#     latitude: float
#     longitude: float
#     tracking_id: Optional[str] = None
#     status: Optional[str] = None
#     created_at: Optional[datetime] = None

#     # NEW – Mock AI predictions
#     model_text_label: Optional[str] = None
#     model_text_confidence: Optional[float] = None
#     model_image_label: Optional[str] = None
#     model_image_confidence: Optional[float] = None
#     model_verification: Optional[str] = None

#     # NEW – Department assignment
#     assigned_department: Optional[str] = None
#     assigned_email: Optional[str] = None
#     assigned_phone: Optional[str] = None
#     assigned_sla_days: Optional[int] = None
#     assigned_due_date: Optional[str] = None

#     class Config:
#         allow_population_by_field_name = True
#         orm_mode = True
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ComplaintIn(BaseModel):
    title: str
    description: str
    name: str
    email: str
    phone: str
    location: str
    latitude: float
    longitude: float

class Complaint(BaseModel):
    id: str = Field(..., alias="id")
    title: str
    description: str
    name: str
    email: str
    phone: str
    location: str
    latitude: float
    longitude: float
    tracking_id: Optional[str] = None
    status: Optional[str] = None
    created_at: Optional[datetime] = None

    # file saved by your /complaints route
    image_path: Optional[str] = None

    # Mock AI predictions (ok to be None)
    model_text_label: Optional[str] = None
    model_text_confidence: Optional[float] = None
    model_image_label: Optional[str] = None
    model_image_confidence: Optional[float] = None
    model_verification: Optional[str] = None

    # Department assignment (demo / optional)
    assigned_department: Optional[str] = None
    assigned_email: Optional[str] = None
    assigned_phone: Optional[str] = None
    assigned_sla_days: Optional[int] = None
    assigned_due_date: Optional[str] = None

    class Config:
        # Pydantic v2 names:
        validate_by_name = True
        from_attributes = True
