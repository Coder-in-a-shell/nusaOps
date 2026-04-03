from sqlalchemy import Column, String, Boolean, Float, Integer, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
import uuid

from app.database import Base

class Tenant(Base):
    __tablename__ = "tenants"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    business_name = Column(String(255), nullable=False)
    business_type = Column(String(50), nullable=False)
    owner_name = Column(String(255), nullable=False)
    owner_phone = Column(String(20), nullable=False)
    owner_email = Column(String(255))
    whatsapp_phone_number_id = Column(String(50))
    whatsapp_business_account_id = Column(String(50))
    whatsapp_access_token = Column(String)
    ai_persona_name = Column(String(100), default="Asisten AI")
    ai_system_prompt = Column(String)
    ai_language = Column(String(10), default="id")
    ai_temperature = Column(Float, default=0.3)
    max_monthly_messages = Column(Integer, default=5000)
    subscription_tier = Column(String(20), default="starter")
    subscription_status = Column(String(20), default="active")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
