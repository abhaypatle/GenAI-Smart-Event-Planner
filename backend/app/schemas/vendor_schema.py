from pydantic import BaseModel, Field


class VendorCreate(BaseModel):
    vendor_name: str
    vendor_type: str
    phone: str
    city: str
    address: str | None = None
    rating: float = Field(default=0.0, ge=0, le=5)
    min_price: int
    max_price: int
    is_available: bool = True


class VendorResponse(VendorCreate):
    id: int

    class Config:
        from_attributes = True