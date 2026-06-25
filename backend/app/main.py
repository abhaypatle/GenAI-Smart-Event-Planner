from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.core.config import settings
from backend.app.database import Base, engine

from backend.app.models import User, Vendor, Event

from backend.app.routers import (
    auth_router,
    health_router,
    vendor_router,
    event_router,
    ai_router,
)

# Create tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    description="GenAI Smart Event Planner",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health
app.include_router(
    health_router.router,
    prefix=settings.API_PREFIX,
    tags=["Health"],
)

# Authentication
app.include_router(
    auth_router.router,
    prefix=f"{settings.API_PREFIX}/auth",
    tags=["Authentication"],
)

# Vendors
app.include_router(
    vendor_router.router,
    prefix=f"{settings.API_PREFIX}/vendors",
    tags=["Vendors"],
)

# Events
app.include_router(
    event_router.router,
    prefix=f"{settings.API_PREFIX}/events",
    tags=["Events"],
)

# AI Planner
app.include_router(
    ai_router.router,
    prefix=f"{settings.API_PREFIX}/ai",
    tags=["AI Planner"],
)


@app.get("/")
def root():
    return {
        "message": "GenAI Smart Event Planner API Running 🚀",
        "version": "1.0.0",
        "docs": "/docs",
    }