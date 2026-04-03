from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import engine, Base

app = FastAPI(
    title="NusaOps API",
    description="Backend for NusaOps WhatsApp AI Chatbot Platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        # Create tables, if they do not exist (useful for dev, normally use alembic)
        # We will use alembic for actual migrations
        pass

@app.get("/health")
async def health_check():
    return {"status": "ok", "environment": settings.ENVIRONMENT}

# TODO: Include routers for tenants, webhooks, auth, etc.
