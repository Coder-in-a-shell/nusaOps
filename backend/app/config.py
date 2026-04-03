from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List

class Settings(BaseSettings):
    # Backend
    DATABASE_URL: str = "postgresql+asyncpg://nusaops:password@localhost:5432/nusaops"
    REDIS_URL: str = "redis://localhost:6379/0"

    # WhatsApp
    WHATSAPP_VERIFY_TOKEN: str = ""
    WHATSAPP_APP_SECRET: str = ""

    # AI
    GOOGLE_API_KEY: str = ""
    OPENAI_API_KEY: str = ""
    EMBEDDING_MODEL: str = "models/text-embedding-004"
    LLM_MODEL: str = "gemini-2.0-flash"
    FALLBACK_LLM_MODEL: str = "gpt-4o-mini"

    # Auth
    JWT_SECRET: str = "secret"
    ADMIN_DEFAULT_PASSWORD: str = "changeme"

    # Infrastructure
    ENVIRONMENT: str = "development"
    LOG_LEVEL: str = "INFO"
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]

    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()
