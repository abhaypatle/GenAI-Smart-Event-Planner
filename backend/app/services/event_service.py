from sqlalchemy.orm import Session

from backend.app.models.event import Event
from backend.app.schemas.event_schema import EventCreate


class EventService:
    @staticmethod
    def create_event(db: Session, payload: EventCreate):
        event = Event(**payload.model_dump())
        db.add(event)
        db.commit()
        db.refresh(event)
        return event

    @staticmethod
    def get_events(db: Session):
        return db.query(Event).all()