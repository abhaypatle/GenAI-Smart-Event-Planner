from sqlalchemy.orm import Session

from backend.app.models.vendor import Vendor
from backend.app.schemas.vendor_schema import VendorCreate


class VendorService:
    @staticmethod
    def create_vendor(db: Session, payload: VendorCreate):
        vendor = Vendor(**payload.model_dump())
        db.add(vendor)
        db.commit()
        db.refresh(vendor)
        return vendor

    @staticmethod
    def get_vendors(
        db: Session,
        city: str | None = None,
        vendor_type: str | None = None,
    ):
        query = db.query(Vendor)

        if city:
            query = query.filter(Vendor.city == city)

        if vendor_type:
            query = query.filter(Vendor.vendor_type == vendor_type)

        return query.all()