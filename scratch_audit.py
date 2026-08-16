import json
import re

with open('src/app/viewer/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract json array from billData
json_match = re.search(r'export const billData = (\{.*\});', content, re.DOTALL)
if not json_match:
    print("Could not find billData object")
    exit(1)

# Clean javascript object to standard json format if necessary
# Let's inspect all parts and sections using regex or parsing
parts_data = []

# Search sections
section_blocks = re.findall(r'\{\s*"section":\s*"([^"]+)",\s*"title":\s*"([^"]+)",.*?"bill_text":\s*"(.*?)",\s*"analysis":\s*\{(.*?)\}\s*\}', content, re.DOTALL)

print(f"Total section blocks found: {len(section_blocks)}")

findings = []

for sec_num, sec_title, bill_text, analysis_str in section_blocks:
    sec_id = f"Section {sec_num}: {sec_title}"
    
    # Audit 1: Supremacy Clause (Sec 5) vs EBK Cap 530 Autonomy (Sec 23/24)
    if sec_num == "5":
        findings.append({
            "section": sec_id,
            "category": "Supremacy vs. EBK Autonomy",
            "issue": "Section 5(2) states KBERC prevails over 'any other written law'. Section 23 recognizes existing statutory regulators (EBK Cap 530) under federated autonomy. Potential jurisdictional tension if KBERC issues rules that conflict with EBK technical standards.",
            "recommendation": "Harmonize Section 5(2) with explicit savings for EBK's engineering accreditation standards under Cap 530."
        })
        
    # Audit 2: Section 23/24 (Federated Model) vs Legacy BORAQS/Cap 525 Language
    if "Cap 525" in bill_text or "Cap 525" in analysis_str:
        if sec_num not in ["1", "2", "211", "212"]:
            findings.append({
                "section": sec_id,
                "category": "Legacy Cap 525 Reference",
                "issue": "References Cap 525 in operational section. Post-enactment, Cap 525 is completely repealed (Sec 212).",
                "recommendation": "Replace Cap 525 references with 'the predecessor legislation (repealed Cap 525)' or reference KBERC Part IV directly."
            })
            
    # Audit 3: Section 22/25 (Designation & Monopolies) vs Competency-Based Public Safety (Sec 3)
    if sec_num in ["22", "25"]:
        findings.append({
            "section": sec_id,
            "category": "Professional Monopoly vs Public Safety Object",
            "issue": "Section 25 restricts built environment practice exclusively to registered categories. Must align with Section 3(c) which prohibits protection of professional monopolies.",
            "recommendation": "Clarify that practice restrictions apply based on project risk classification (Part VII) and certified competency rather than title exclusivity alone."
        })
        
    # Audit 4: Technologists & Technicians (Sec 201 vs Sec 25)
    if "technician" in bill_text.lower() or "technologist" in bill_text.lower():
        findings.append({
            "section": sec_id,
            "category": "Technician/Technologist Practice Scope",
            "issue": "Recognizes technicians and technologists, but Section 25 practice restrictions must explicitly accommodate their independent scope of practice for Low-Consequence projects (Class 1 & 2).",
            "recommendation": "Ensure Section 25 cross-references Section 201 technician practice scopes."
        })

print(f"Total audit findings generated: {len(findings)}")
for f in findings:
    print(f"\n--- {f['section']} ---")
    print(f"Category: {f['category']}")
    print(f"Issue: {f['issue']}")
    print(f"Recommendation: {f['recommendation']}")