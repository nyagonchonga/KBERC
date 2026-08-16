import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Update Section 21 plain_english
old_pe = '"Existing regulatory boards (like the Engineers Board of Kenya) are not abolished outright. They continue but are now officially sub-bodies of KBERC. However, this applies differently to engineers (who keep most autonomy under Cap 530) versus architects and QS (whose old board \u2014 BORAQS \u2014 formally ceases its independent existence)."'
old_pe2 = '"Existing regulatory boards (like the Engineers Board of Kenya) are not abolished outright. They continue but are now officially sub-bodies of KBERC. However, this applies differently to engineers (who keep most autonomy under Cap 530) versus architects and QS (whose old board - BORAQS - formally ceases its independent existence)."'

new_pe = '"Existing regulatory boards are treated differently under the Asymmetric Hybrid Model: The Engineers Board of Kenya (EBK) is NOT abolished and continues under Cap 530 as a federated Profession-Specific Board under KBERC. Conversely, BORAQS is completely abolished upon the full repeal of Cap 525 (Section 212). BORAQS does NOT continue as a sub-body or sub-board under KBERC; KBERC directly assumes 100% of all architectural and quantity surveying regulatory functions."'

if old_pe in content:
    content = content.replace(old_pe, new_pe)
    print("[SUCCESS] Patched Section 21 plain_english (emdash)")
elif old_pe2 in content:
    content = content.replace(old_pe2, new_pe)
    print("[SUCCESS] Patched Section 21 plain_english (hyphen)")
else:
    # Use regex substitution
    content = re.sub(
        r'"plain_english":\s*"Existing regulatory boards \(like the Engineers Board of Kenya\) are not abolished outright\..*?"',
        f'"plain_english": {json.dumps(new_pe)}',
        content,
        flags=re.DOTALL
    )
    print("[SUCCESS] Regex patched Section 21 plain_english")

# Update Section 21 who_is_affected
old_who = '"BORAQS \u2014 transitions out of independent operation; KBERC assumes its primary functions (see Part III and Section 212)"'
new_who = '"BORAQS \u2014 Completely abolished upon Cap 525 repeal (Section 212); KBERC directly regulates Architects & Quantity Surveyors without an intermediate board."'

if old_who in content:
    content = content.replace(old_who, new_who)
    print("[SUCCESS] Patched Section 21 who_is_affected")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Section 21 BORAQS clarification completed.")