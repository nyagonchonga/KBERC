from typing import List, Dict, Any

class BenchmarkEngine:
    """
    Handles comparative analysis against international benchmarks.
    """
    def __init__(self):
        self.benchmarks = {
            "South Africa": "Umbrella regulatory model (Council for the Built Environment)",
            "Australia": "Competency-based registration, risk-based approaches",
            "United Kingdom": "Public-protection approach, post-Grenfell regulation",
            "Rwanda": "Regional African comparator, modernized regulation",
            "Singapore": "Strong professional registration, building control",
            "Canada": "Provincial professional regulation"
        }

    def compare_provision(self, problem: str, kenyan_proposal: str) -> List[Dict[str, Any]]:
        """
        Analyzes a regulatory problem against international benchmarks 
        and evaluates transferability to Kenya.
        """
        results = []
        for country, context in self.benchmarks.items():
            results.append({
                "country": country,
                "problem": problem,
                "current_proposal": kenyan_proposal,
                "foreign_solution": f"Modeled solution based on {context}",
                "transferability": "High" if country in ["South Africa", "Rwanda"] else "Medium",
                "recommended_kenyan_solution": f"Adapted {country} model for Kenyan context.",
                "risks": "Requires institutional capacity building."
            })
        return results
