from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "GenAI Smart Event Planner API",
        "version": "1.0.0",
    }