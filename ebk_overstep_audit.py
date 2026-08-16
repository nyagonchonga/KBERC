import json
import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Parse sections
section_blocks = re.findall(r'\{\s*"section":\s*"([^"]+)",\s*"title":\s*"([^"]+)",.*?"bill_text":\s*"(.*?)",\s*"analysis":\s*\{(.*?)\}\s*\}', content, re.DOTALL)

print(f"Loaded {len(section_blocks)} sections for EBK Overstep Audit.")

oversteps = []

for sec_num, sec_title, bill_text, analysis_str in section_blocks:
    sec_id = f"Section {sec_num}: {sec_title}"
    text_lower = bill_text.lower()
    analysis_lower = analysis_str.lower()
    
    # Check 1: Accreditation Overstep
    if "accredit" in text_lower or "university" in text_lower or "curriculum" in text_lower:
        if "engineer" in text_lower or "engineering" in text_lower or "profession" in text_lower:
            if "provided that" not in text_lower and "cap 530" not in text_lower and "ebk" not in text_lower:
                oversteps.append({
                    "section": sec_id,
                    "type": "Accreditation Overstep",
                    "clause": bill_text[:150] + "...",
                    "risk": "Purports to accredit engineering university programs, trespassing on EBK Cap 530 Sec 16.",
                    "fix": "Add proviso recognizing EBK's exclusive statutory role for engineering degree accreditation."
                })

    # Check 2: Firm Regulation & Ownership Overstep
    if "firm" in text_lower or "corporate" in text_lower:
        if "ownership" in text_lower or "directors" in text_lower or "shareholding" in text_lower:
            if "engineer" in text_lower or "profession" in text_lower:
                if "cap 530" not in text_lower and "ebk" not in text_lower:
                    oversteps.append({
                        "section": sec_id,
                        "type": "Engineering Firm Ownership Overstep",
                        "clause": bill_text[:150] + "...",
                        "risk": "Imposes corporate firm ownership rules that could conflict with EBK Cap 530 Sec 22 (which requires 51%+ engineering ownership).",
                        "fix": "Exempt EBK-registered engineering consulting firms from duplicate equity structure vetting."
                    })

    # Check 3: Disciplinary / Striking Off Overstep
    if "deregister" in text_lower or "strike" in text_lower or "suspend" in text_lower or "disciplinary" in text_lower:
        if "engineer" in text_lower or "professional" in text_lower:
            if "referral" not in text_lower and "cap 530" not in text_lower and "ebk" not in text_lower:
                if sec_num not in ["102"]: # 102 was already patched
                    oversteps.append({
                        "section": sec_id,
                        "type": "Disciplinary Overstep",
                        "clause": bill_text[:150] + "...",
                        "risk": "Claims power to revoke professional licenses of engineers without statutory referral to EBK, causing Article 50(2)(o) Double Jeopardy.",
                        "fix": "Cross-reference Section 102 referral protocol to EBK for technical engineering breaches."
                    })

    # Check 4: Scale of Fees Overstep
    if "scale of fees" in text_lower or "remuneration" in text_lower:
        if "consult" not in text_lower and "ebk" not in text_lower:
            oversteps.append({
                "section": sec_id,
                "type": "Scale of Fees Overstep",
                "clause": bill_text[:150] + "...",
                "risk": "Empowers KBERC to fix professional fees unilaterally, overriding gazetted EBK fee scales under Cap 530 Sec 58.",
                "fix": "Mandate mandatory joint consultation with EBK prior to gazetting engineering fee scales."
            })

print(f"\nTotal potential EBK oversteps identified: {len(oversteps)}")
for o in oversteps[:10]:
    print(f"\n[{o['section']}] ({o['type']})")
    print(f"Risk: {o['risk']}")
    print(f"Proposed Fix: {o['fix']}")