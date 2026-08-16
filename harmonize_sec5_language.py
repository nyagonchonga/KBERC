import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    ('"policy_objective": "To establish KBERC\'s supremacy in the built environment regulatory hierarchy, preventing the fragmentation of authority that occurs when multiple Acts (Cap 525, Cap 530, the Physical and Land Use Planning Act) apply to the same activities."',
     '"policy_objective": "To establish a harmonized multi-disciplinary coordination framework for the built environment, preventing the fragmentation of authority that occurs when multiple Acts apply to the same construction projects."'),

    ('"Engineers Board of Kenya (EBK) - its autonomy under Cap 530 is now subject to this Act\'s supremacy clause"',
     '"Engineers Board of Kenya (EBK) — collaborates within the harmonized statutory coordination framework under Cap 530 and Sections 23-24"'),

    ('"Engineers Board of Kenya (EBK) – its autonomy under Cap 530 is now subject to this Act\'s supremacy clause"',
     '"Engineers Board of Kenya (EBK) — collaborates within the harmonized statutory coordination framework under Cap 530 and Sections 23-24"'),

    ('Section 24 (Supremacy clause for KBERC on cross-disciplinary disputes)',
     'Section 24 (Joint Co-ordination Forum framework for cross-disciplinary projects)'),

    ('Section 5 (Supremacy clause - Act prevails over other written laws)',
     'Section 5 (Harmonized Application clause - Act coordinates built environment practice)')
]

for old_str, new_str in replacements:
    if old_str in content:
        content = content.replace(old_str, new_str)
        print(f"[SUCCESS] Replaced: '{old_str[:40]}...'")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Section 5 language harmonization completed!")