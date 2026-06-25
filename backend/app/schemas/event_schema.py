from datetime import date
from pydantic import BaseModel


class EventCreate(BaseModel):
    customer_id: int
    event_type: str
    city: str
    location: str
    event_date: date
    guest_count: int
    budget: int


class EventResponse(EventCreate):
    id: int
    status: str

    class Config:
        from_attributes = True