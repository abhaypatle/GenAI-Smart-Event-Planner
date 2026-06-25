from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.schemas.event_schema import EventCreate, EventResponse
from backend.app.services.event_service import EventService

router = APIRouter()


@router.post("/", response_model=EventResponse)
def create_event(payload: EventCreate, db: Session = Depends(get_db)):
    return EventService.create_event(db, payload)


@router.get("/", response_model=list[EventResponse])
def get_events(db: Session = Depends(get_db)):
    return EventService.get_events(db)