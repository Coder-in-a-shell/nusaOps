from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy.orm import relationship

from app.database import Base

class Message(Base):
    __tablename__ = "messages"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    conversation_id = Column(UUID(as_uuid=True), ForeignKey("conversations.id", ondelete="CASCADE"), nullable=False)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id", ondelete="CASCADE"), nullable=False)
    role = Column(String(10), nullable=False)
    content = Column(String, nullable=False)
    message_type = Column(String(20), default="text")
    whatsapp_message_id = Column(String(100))
    media_url = Column(String)
    tokens_used = Column(Integer, default=0)
    latency_ms = Column(Integer)
    retrieved_chunks = Column(JSON)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    conversation = relationship("Conversation")
    tenant = relationship("Tenant")
