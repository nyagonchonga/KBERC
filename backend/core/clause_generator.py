from core.models import Clause, PolicyOption
from core.red_team import RedTeamEngine
from core.impact_engine import ImpactEngine
from core.conflict_detector import ConflictDetector

class ClauseGenerator:
    """
    Drafts legislative clauses by synthesizing policy intent and running it 
    through the Red Team, Impact, and Conflict engines.
    """
    def __init__(self):
        self.red_team = RedTeamEngine()
        self.impact = ImpactEngine()
        self.conflict = ConflictDetector()

    def generate_policy_options(self, topic: str) -> list[PolicyOption]:
        # Generates Option A (Conservative), B (Modern), C (Transformational)
        return [
            PolicyOption(name="Option A", description="Conservative", purpose="Minimal disruption"),
            PolicyOption(name="Option B", description="Modern", purpose="Preferred practical reform"),
            PolicyOption(name="Option C", description="Transformational", purpose="Comprehensive architecture")
        ]

    def draft_clause(self, intent: str, option: PolicyOption) -> Clause:
        """
        Drafts a clause based on the policy option and refines it via the Red Team.
        """
        # 1. Generate initial draft
        draft = Clause(
            id=f"CLAUSE_{hash(intent)}",
            text=f"A person shall not engage in {intent} unless registered...",
            rationale=f"Alignment with {option.name}"
        )
        
        # 2. Red team the draft
        report = self.red_team.attack_clause(draft)
        
        # 3. Refine draft based on mitigations
        if report.mitigations:
            draft.text += " Provided that this shall not apply to minor works."
            
        return draft
