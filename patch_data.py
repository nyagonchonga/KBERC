import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Update Section 5 analysis to highlight statutory reconciliation
old_sec5_analysis = '"Engineers Board of Kenya (EBK) – its autonomy under Cap 530 is now subject to this Act\'s supremacy clause"'
new_sec5_analysis = '"Engineers Board of Kenya (EBK) – its statutory autonomy under Cap 530 is preserved under Sections 23 & 24 via the Federated Autonomy model, while KBERC holds supremacy on multi-disciplinary built environment practice standards"'

if old_sec5_analysis in content:
    content = content.replace(old_sec5_analysis, new_sec5_analysis)
    print("Patched Section 5 analysis")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Data update complete.")