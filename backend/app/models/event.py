from sqlalchemy import Column, Integer, String, Date, ForeignKey
from backend.app.database import Base


class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("users.id"))
    event_type = Column(String(80), nullable=False)
    city = Column(String(80), nullable=False)
    location = Column(String(255), nullable=False)
    event_date = Column(Date, nullable=False)
    guest_count = Column(Integer, nullable=False)
    budget = Column(Integer, nullable=False)
    status = Column(String(50), default="planning")