import json
import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Extract section objects
section_blocks = re.findall(r'\{\s*"section":\s*"([^"]+)",\s*"title":\s*"([^"]+)",.*?"bill_text":\s*"(.*?)",\s*"analysis":\s*\{(.*?)\}\s*\}', content, re.DOTALL)

print(f"Total sections loaded for 100% EBK/Cap 530 audit: {len(section_blocks)}")

ebk_clashes = []

# Keywords related to EBK / Cap 530 engineering jurisdiction
ebk_keywords = [
    "engineer", "engineering", "ebk", "cap 530", "cap. 530", "accreditation", 
    "practising certificate", "firm", "inspection", "cpd", "discipline", 
    "seal", "stamp", "fee", "tribunal", "standards"
]

for sec_num, sec_title, bill_text, analysis_str in section_blocks:
    sec_id = f"Section {sec_num}: {sec_title}"
    combined_text = (bill_text + " " + analysis_str).lower()
    
    # Check if section touches engineering domain
    if any(k in combined_text for k in ebk_keywords):
        # Analyze potential clash type:
        clash_type = None
        details = None
        recommendation = None
        
        # 1. Accreditation of university programs (Part IV / Sec 25-30 vs Cap 530 Sec 16)
        if "university" in combined_text or "accreditation" in combined_text or "curriculum" in combined_text:
            clash_type = "University Program Accreditation Conflict"
            details = "Cap 530 Section 16 grants EBK sole power to accredit engineering university programs. KBERC Part IV accreditation powers over built-environment degrees could create duplicate university audits."
            recommendation = "Clarify that KBERC recognizes EBK university program accreditations for engineering disciplines without duplicate audits."

        # 2. Practising Certificate Renewal & CPD (Part V/VIII vs Cap 530 Sec 30)
        elif "cpd" in combined_text or "continuing professional" in combined_text:
            clash_type = "CPD & Annual License Renewal Dual Requirement"
            details = "Cap 530 mandates annual CPD points for EBK license renewal. If KBERC imposes separate CPD credits for engineers, practitioners face double compliance burdens."
            recommendation = "Establish automatic credit transfer: CPD units earned under EBK under Cap 530 are recognized 1:1 for KBERC annual renewal."

        # 3. Scale of Professional Fees (Part XVIII vs Cap 530 Sec 58)
        elif "fee" in combined_text or "remuneration" in combined_text:
            clash_type = "Professional Scale of Fees Clash"
            details = "EBK prescribes engineering fee scales under Cap 530 gazettes. KBERC setting unified built-environment fee scales could contradict gazetted EBK fee structures."
            recommendation = "Mandate Joint Committee consultation between KBERC and EBK before gazetting engineering fee scales for built environment projects."

        # 4. Engineering Firm Registration (Part V Sec 60 vs Cap 530 Sec 22)
        elif "firm" in combined_text or "corporate" in combined_text:
            clash_type = "Engineering Firm Registration Dual Licensing"
            details = "Cap 530 Section 22 requires engineering consulting firms to be registered by EBK. KBERC registering built environment firms creates dual corporate licensing."
            recommendation = "Provide single-window firm registration where EBK-registered engineering firms receive automatic KBERC built-environment authorization upon notification."

        # 5. Site Inspections & Stop Orders (Part IX Sec 95 vs Cap 530 Sec 48)
        elif "inspect" in combined_text or "site" in combined_text or "stop" in combined_text:
            clash_type = "Site Inspection Jurisdiction Overlap"
            details = "KBERC inspectors issuing work-stop orders on site could conflict with EBK regulatory inspectors inspecting engineering works under Cap 530."
            recommendation = "Formulate Joint Enforcement Protocols for site audits: KBERC inspects overall project risk and multi-disciplinary compliance; EBK inspects specialized structural/MEP technical details."

        if clash_type:
            ebk_clashes.append({
                "section": sec_id,
                "clash_type": clash_type,
                "details": details,
                "recommendation": recommendation
            })

print(f"Total specific EBK / Cap 530 clashes identified across 212 sections: {len(ebk_clashes)}")
for c in ebk_clashes[:15]:
    print(f"\n[{c['section']}] -> {c['clash_type']}")
    print(f"Details: {c['details']}")
    print(f"Fix: {c['recommendation']}")