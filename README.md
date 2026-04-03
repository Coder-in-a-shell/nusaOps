# NusaOps WhatsApp AI Chatbot Platform

Production-grade, multi-tenant WhatsApp AI chatbot platform.

## Architecture
- Backend: FastAPI, PostgreSQL, Redis, pgvector, Celery
- Frontend: Next.js (Admin Dashboard)
- AI: Google Gemini, OpenAI Fallback
- Platform: Meta WhatsApp Cloud API

## Setup

1. Copy `.env.example` to `.env` in the backend folder.
2. Run `docker-compose up -d` to start the infrastructure.
3. Access backend API at `http://localhost:8000`
4. Access dashboard at `http://localhost:3000`

## Development
See backend and dashboard directories for their respective readmes.
