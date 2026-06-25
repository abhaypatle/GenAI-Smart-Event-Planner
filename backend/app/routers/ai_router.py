from fastapi import APIRouter

from ai_engine.agents.ai_planner import AIPlanner
from backend.app.schemas.ai_schema import EventPlanRequest, EventPlanResponse

router = APIRouter()


@router.post("/plan", response_model=EventPlanResponse)
def generate_ai_event_plan(payload: EventPlanRequest):
    return AIPlanner.generate_plan(
        event_type=payload.event_type,
        city=payload.city,
        guest_count=payload.guest_count,
        budget=payload.budget,
    )