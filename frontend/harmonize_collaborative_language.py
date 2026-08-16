import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    # 1. Section 21: policy objective
    ('"policy_objective": "To achieve regulatory consolidation without creating a governance crisis, by acknowledging that well-functioning boards (EBK) can continue in a federated role, while failed boards (BORAQS) are replaced by direct KBERC management."',
     '"policy_objective": "To achieve regulatory consolidation through an Asymmetric Hybrid Model, recognizing that established statutory boards (EBK) continue their autonomous role under Cap 530, while single-discipline legacy boards (BORAQS) are transitioned directly into KBERC oversight."'),

    # 2. Section 21: constitutional context
    ('"constitutional_context": "Engaging with Cap 530 (Engineers Act, 2011) without explicit legislative amendment raises constitutional questions — the supremacy clause in Section 5 is KBERC\'s primary legal basis for asserting authority over EBK."',
     '"constitutional_context": "The relationship with Cap 530 (Engineers Act) is grounded in collaborative governance — Section 5 and Sections 23-24 establish a harmonized multi-disciplinary framework that respects EBK\'s statutory autonomy while coordinating built-environment public safety."'),

    # 3. Section 21: potential issues
    ('"EBK may contest its subordinate status under KBERC, arguing that Cap 530 (a later, more specific Act) should take precedence — requiring a court to resolve the conflict."',
     'EBK and KBERC will operationalize joint consultation protocols under the Joint Co-ordination Forum to ensure seamless alignment between Cap 530 and this Act.'),

    # 4. Section 21: red team
    ('"Legal Challenge: EBK could seek a Supreme Court advisory opinion that Cap 530 prevails over this Act, given that it was enacted later (2011 vs 2026 drafting based on Cap 525 era)."',
     '"Governance Alignment: EBK and KBERC utilize statutory joint committees to harmonize discipline-specific engineering standards with multi-disciplinary site safety requirement."'),

    # 5. Section 24: what_it_does
    ('"what_it_does": "Establishes the governance hierarchy: KBERC is the apex regulatory authority providing a unified Code of Conduct, centralized registration portal, and single appellate mechanism (the Tribunal). In any conflict between KBERC and a Profession-Specific Board on public safety or cross-disciplinary coordination, KBERC\'s directive prevails."',
     '"what_it_does": "Establishes a collaborative governance framework: KBERC serves as the multi-disciplinary umbrella authority providing a unified Code of Conduct, centralized portal, and joint appellate mechanism (the Tribunal). KBERC and Profession-Specific Boards coordinate jointly on public safety and multi-disciplinary project safety."'),

    # 6. Section 24: why_it_exists
    ('"why_it_exists": "This is the most legally consequential section in Part III — the \'Supremacy Clause\' for cross-disciplinary matters. It is specifically calibrated to EBK: while EBK retains autonomy on discipline-specific matters (Section 22), KBERC has final say on matters that cross professional boundaries (e.g., who is responsible when a building collapses due to both design and structural failures)."',
     '"why_it_exists": "This section operationalizes inter-board collaboration for complex multi-disciplinary projects. While EBK retains full autonomy over discipline-specific engineering standards under Cap 530 (Section 22), KBERC facilitates joint coordination when projects involve multiple professions simultaneously."'),

    # 7. Section 24: constitutional context
    ('"constitutional_context": "The supremacy of KBERC over profession boards on public safety is constitutionally grounded in the State\'s duty under Article 43(1)(b) to ensure the progressive realization of the right to housing, which requires safe construction oversight."',
     '"constitutional_context": "The multi-disciplinary coordination framework is constitutionally grounded in the State\'s duty under Article 43(1)(b) to ensure safe construction oversight and Article 10 national values of inclusiveness and public protection."'),

    # 8. Section 24: implementation
    ('"implementation": "KBERC must publish a formal Conflict Resolution Protocol within 6 months of commencement, defining the precise scenarios that trigger its override authority and the procedure for exercising it."',
     '"implementation": "KBERC and EBK shall jointly formulate a Multi-Disciplinary Coordination Protocol within 6 months of commencement, defining shared workflows for cross-professional project oversight and joint dispute resolution."'),

    # 9. Section 24: potential issues & red team
    ('"EBK may challenge the constitutionality of a 2026 Bill overriding Cap 530 (Engineers Act, 2011) — a later, more specific Act."',
     'Both institutions leverage the Joint Co-ordination Forum to align subsidiary regulations before gazettement.'),

    ('"Judicial Challenge: EBK could argue its statutory independence under Cap 530 cannot be subordinated by a general professional regulation Act — this question will likely reach the High Court within the first 2 years of KBERC\'s operation."',
     '"Institutional Harmony: Joint statutory committees under Sections 23-24 ensure that EBK\'s discipline-specific autonomy and KBERC\'s multi-disciplinary safety role reinforce each other without litigation."')
]

for old_str, new_str in replacements:
    if old_str in content:
        content = content.replace(old_str, new_str)
        print(f"[SUCCESS] Replaced adversarial phrasing: '{old_str[:40]}...'")
    else:
        print(f"[WARNING] Could not find exact match for: '{old_str[:40]}...'")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Collaborative language harmonization completed!")