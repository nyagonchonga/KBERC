from core.models import RegulatoryImpactScore, Clause
import random

class ImpactEngine:
    """
    Scores clauses against the 16 regulatory impact criteria.
    """
    def __init__(self):
        self.criteria = [
            "public_safety", "consumer_protection", "professional_competence",
            "competition", "cost_to_practitioners", "cost_to_consumers",
            "cost_to_government", "administrative_burden", "ease_of_enforcement",
            "corruption_risk", "constitutional_compatibility",
            "county_government_implications", "small_business_impact",
            "innovation_impact", "environmental_impact", "accessibility_impact"
        ]

    def evaluate_clause(self, clause: Clause) -> RegulatoryImpactScore:
        """
        In production, this calls an LLM or deterministic ruleset to evaluate 
        the proposed clause text against the 16 criteria, scoring 1-10.
        Here we generate a mock evaluation for the architecture.
        """
        # Mock evaluation: 1 is terrible, 10 is perfect alignment
        scores = {criterion: random.randint(5, 10) for criterion in self.criteria}
        
        score_obj = RegulatoryImpactScore(**scores)
        score_obj.total_score = sum(scores.values())
        return score_obj
