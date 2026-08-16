import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Section 21 / 22 what_it_does
old_w1 = '"Formally recognizes all existing statutory professional regulatory boards (EBK, BORAQS etc.) as Profession-Specific Boards under KBERC. They retain technical oversight of their disciplines but are now subject to KBERC\'s overarching policy framework."'
new_w1 = '"Formally recognizes existing statutory discipline boards that retain separate statutory enactments (specifically the Engineers Board of Kenya under Cap 530) as Profession-Specific Boards under KBERC\'s umbrella. In contrast, BORAQS under Cap 525 is NOT retained as a sub-board — it is fully repealed and directly absorbed into KBERC (see Section 212)."'

if old_w1 in content:
    content = content.replace(old_w1, new_w1)
    print("[SUCCESS] Clarified Section 21 what_it_does")

# 2. Update Section 21 / 22 plain_english
old_pe1 = '"Existing regulatory boards (like the Engineers Board of Kenya) are not abolished outright. They continue but are now officially sub-bodies of KBERC. However, this applies differently to engineers (who keep most autonomy under Cap 530) versus architects and QS (whose old board – BORAQS – formally ceases its independent existence)."'
old_pe1_alt = '"Existing regulatory boards (like the Engineers Board of Kenya) are not abolished outright. They continue but are now officially sub-bodies of KBERC. However, this applies differently to engineers (who keep most autonomy under Cap 530) versus architects and QS (whose old board - BORAQS - formally ceases its independent existence)."'

new_pe1 = '"Existing regulatory boards are treated differently based on the Asymmetric Hybrid Model: The Engineers Board of Kenya (EBK) is NOT abolished and continues under Cap 530 as a federated partner. Conversely, BORAQS is completely abolished upon Cap 525 repeal (Section 212), and its regulatory functions pass 100% directly to KBERC. BORAQS does NOT exist as a sub-board."'

if old_pe1 in content:
    content = content.replace(old_pe1, new_pe1)
    print("[SUCCESS] Clarified Section 21 plain_english (dash)")
elif old_pe1_alt in content:
    content = content.replace(old_pe1_alt, new_pe1)
    print("[SUCCESS] Clarified Section 21 plain_english (hyphen)")

# 3. Update who_is_affected for BORAQS
old_who = '"BORAQS – transitions out of independent operation; KBERC assumes its primary functions (see Part III and Section 212)"'
old_who_alt = '"BORAQS - transitions out of independent operation; KBERC assumes its primary functions (see Part III and Section 212)"'
new_who = '"BORAQS — Completely dissolved upon Cap 525 repeal (Section 212); KBERC directly regulates Architects & Quantity Surveyors without an intermediate sub-board."'

if old_who in content:
    content = content.replace(old_who, new_who)
    print("[SUCCESS] Clarified Section 21 who_is_affected")
elif old_who_alt in content:
    content = content.replace(old_who_alt, new_who)
    print("[SUCCESS] Clarified Section 21 who_is_affected (hyphen)")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("BORAQS status clarification patch complete.")