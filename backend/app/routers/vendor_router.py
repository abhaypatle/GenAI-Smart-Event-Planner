from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.schemas.vendor_schema import VendorCreate, VendorResponse
from backend.app.services.vendor_service import VendorService

router = APIRouter()


@router.post("/", response_model=VendorResponse)
def create_vendor(payload: VendorCreate, db: Session = Depends(get_db)):
    return VendorService.create_vendor(db, payload)


@router.get("/", response_model=list[VendorResponse])
def get_vendors(
    city: str | None = None,
    vendor_type: str | None = None,
    db: Session = Depends(get_db),
):
    return VendorService.get_vendors(db, city, vendor_type)