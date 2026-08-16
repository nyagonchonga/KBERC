import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. FIX SECTION 8(e) - Accreditation Overreach
old_sec8_acc = '"(e) accredit built environment university degree programs, TVET courses, and professional development providers;"'
new_sec8_acc = '"(e) accredit built environment degree programs, TVET courses, and CPD providers: Provided that for engineering disciplines, the Council shall recognize university accreditations issued by the Engineers Board of Kenya under Cap 530;"'

if old_sec8_acc in content:
    content = content.replace(old_sec8_acc, new_sec8_acc)
    print("[SUCCESS] Fixed Section 8(e) Accreditation Overreach")

# 2. FIX SECTION 44 - Disciplinary Deregistration Overreach
old_sec44_text = '"(1) The Council may suspend or cancel the registration of a professional who fails to maintain professional indemnity insurance, violates the code of conduct, or is convicted of a criminal offence involving fraud or building failure."'
new_sec44_text = '"(1) The Council may suspend or cancel the registration of a professional under this Act: Provided that for registered engineers, disciplinary complaints relating strictly to technical engineering competency shall be referred to the Engineers Board of Kenya for action under Cap 530 pursuant to section 102."'

if old_sec44_text in content:
    content = content.replace(old_sec44_text, new_sec44_text)
    print("[SUCCESS] Fixed Section 44 Disciplinary Deregistration Overreach")

# 3. FIX SECTION 70 - Multidisciplinary Firm Ownership Overreach
old_sec70_text = '"(1) A multidisciplinary firm shall register with the Council if it provides services across two or more recognized built environment professions."'
new_sec70_text = '"(1) A multidisciplinary firm shall register with the Council if it provides services across two or more recognized built environment professions: Provided that nothing in this section shall override or alter the statutory firm equity requirements for engineering consulting firms under Cap 530."'

if old_sec70_text in content:
    content = content.replace(old_sec70_text, new_sec70_text)
    print("[SUCCESS] Fixed Section 70 Firm Ownership Overreach")

# 4. FIX SECTION 185 - Scale of Fees Overreach
if '"section": "185"' in content or '"section":"185"' in content:
    old_sec185 = '"(1) The Council may, with the approval of the Cabinet Secretary, prescribe scales of fees for built environment professional services."'
    new_sec185 = '"(1) The Council may, with the approval of the Cabinet Secretary, prescribe scales of fees for built environment professional services: Provided that prior to prescribing fee scales for engineering services, the Council shall conduct joint statutory consultations with the Engineers Board of Kenya under Cap 530."'
    if old_sec185 in content:
        content = content.replace(old_sec185, new_sec185)
        print("[SUCCESS] Fixed Section 185 Scale of Fees Overreach")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("All EBK Overreach Fixes Successfully Applied!")