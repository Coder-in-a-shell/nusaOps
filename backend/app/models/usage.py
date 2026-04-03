from sqlalchemy import Column, Integer, DateTime, func, ForeignKey, Date, Numeric
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy.orm import relationship

from app.database import Base

class UsageLog(Base):
    __tablename__ = "usage_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id", ondelete="CASCADE"), nullable=False)
    date = Column(Date, nullable=False)
    messages_received = Column(Integer, default=0)
    messages_sent = Column(Integer, default=0)
    tokens_used = Column(Integer, default=0)
    unique_customers = Column(Integer, default=0)
    escalations = Column(Integer, default=0)
    avg_response_time_ms = Column(Integer, default=0)
    estimated_cost_usd = Column(Numeric(10, 4), default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    tenant = relationship("Tenant")
