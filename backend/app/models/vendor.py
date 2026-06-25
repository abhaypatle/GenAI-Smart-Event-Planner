from sqlalchemy import Column, Integer, String, Float, Boolean
from backend.app.database import Base


class Vendor(Base):
    __tablename__ = "vendors"

    id = Column(Integer, primary_key=True, index=True)
    vendor_name = Column(String(120), nullable=False)
    vendor_type = Column(String(80), nullable=False)
    phone = Column(String(20), nullable=False)
    city = Column(String(80), nullable=False)
    address = Column(String(255), nullable=True)
    rating = Column(Float, default=0.0)
    min_price = Column(Integer, nullable=False)
    max_price = Column(Integer, nullable=False)
    is_available = Column(Boolean, default=True)