from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class Clause(BaseModel):
    id: str
    text: str
    rationale: Optional[str] = None
    target_statute: Optional[str] = None

class RiskCategory(BaseModel):
    category: str  # A, B, C, D
    description: str
    examples: List[str]
    regulatory_approach: str

class RegulatoryImpactScore(BaseModel):
    public_safety: int = Field(..., ge=1, le=10)
    consumer_protection: int = Field(..., ge=1, le=10)
    professional_competence: int = Field(..., ge=1, le=10)
    competition: int = Field(..., ge=1, le=10)
    cost_to_practitioners: int = Field(..., ge=1, le=10)
    cost_to_consumers: int = Field(..., ge=1, le=10)
    cost_to_government: int = Field(..., ge=1, le=10)
    administrative_burden: int = Field(..., ge=1, le=10)
    ease_of_enforcement: int = Field(..., ge=1, le=10)
    corruption_risk: int = Field(..., ge=1, le=10)
    constitutional_compatibility: int = Field(..., ge=1, le=10)
    county_government_implications: int = Field(..., ge=1, le=10)
    small_business_impact: int = Field(..., ge=1, le=10)
    innovation_impact: int = Field(..., ge=1, le=10)
    environmental_impact: int = Field(..., ge=1, le=10)
    accessibility_impact: int = Field(..., ge=1, le=10)
    
    total_score: Optional[int] = None

class PolicyOption(BaseModel):
    name: str
    description: str
    purpose: str
    impact_score: Optional[RegulatoryImpactScore] = None
    clauses: List[Clause] = []

class RedTeamReport(BaseModel):
    clause_id: str
    vulnerabilities: List[str]
    mitigations: List[str]
    constitutional_risks: List[str]
    county_conflicts: List[str]
