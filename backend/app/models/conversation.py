from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy.orm import relationship

from app.database import Base

class Conversation(Base):
    __tablename__ = "conversations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id", ondelete="CASCADE"), nullable=False)
    customer_phone = Column(String(20), nullable=False)
    customer_name = Column(String(255))
    status = Column(String(20), default="active")
    escalated_to = Column(String(255))
    message_count = Column(Integer, default=0)
    last_message_at = Column(DateTime(timezone=True))
    metadata_ = Column("metadata", JSON, default={})
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    tenant = relationship("Tenant")
