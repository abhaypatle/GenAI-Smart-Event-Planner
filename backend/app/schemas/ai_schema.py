from pydantic import BaseModel


class EventPlanRequest(BaseModel):
    event_type: str
    city: str
    area: str | None = None
    guest_count: int
    budget: int


class EventPlanResponse(BaseModel):
    estimated_cost: int
    budget_status: str
    budget_breakdown: dict
    suggested_schedule: list[str]
    ai_summary: str