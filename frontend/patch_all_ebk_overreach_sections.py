import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Section 8: Add proviso to function (e)
old_sec8_b = r'(\(e\) accredit built environment.*?)(;\n|\n)'
def sec8_repl(m):
    return '(e) accredit built environment university degree programs, TVET courses, and professional development providers: Provided that for engineering disciplines, the Council shall recognize accreditations granted by the Engineers Board of Kenya under Cap 530;\n'
content = re.sub(old_sec8_b, sec8_repl, content, count=1)

# 2. Section 44: Add proviso to suspension/cancellation
old_sec44_b = r'("section":\s*"44",\s*"title":\s*".*?",\s*"bill_text":\s*")(.*?)("\s*,\s*"analysis":)'
def sec44_repl(m):
    prefix = m.group(1)
    suffix = m.group(3)
    text = "(1) The Council may suspend or cancel the registration of any person who is convicted of a serious criminal offence, is found guilty of gross professional misconduct under Part XI, or obtained registration through fraud or misrepresentation: Provided that cancellation or suspension of an engineer's registration for technical engineering default shall be referred to the Engineers Board of Kenya pursuant to section 102.\\n(2) The name of a person whose registration is cancelled shall be removed from the register."
    return prefix + text + suffix
content = re.sub(old_sec44_b, sec44_repl, content, flags=re.DOTALL)

# 3. Section 70: Add proviso to Multidisciplinary Firms
old_sec70_b = r'("section":\s*"70",\s*"title":\s*".*?",\s*"bill_text":\s*")(.*?)("\s*,\s*"analysis":)'
def sec70_repl(m):
    prefix = m.group(1)
    suffix = m.group(3)
    text = "(1) The Council shall permit and regulate the registration of multidisciplinary firms that offer a combination of built environment services (e.g., architecture, engineering, and quantity surveying): Provided that nothing in this section shall override or alter the minimum engineering equity ownership requirements for engineering consulting firms under Cap 530.\\n(2) A multidisciplinary firm must have a designated Responsible Professional for each distinct discipline offered by the firm."
    return prefix + text + suffix
content = re.sub(old_sec70_b, sec70_repl, content, flags=re.DOTALL)

# 4. Section 185: Add proviso to Fee Scales
old_sec185_b = r'("section":\s*"185",\s*"title":\s*".*?",\s*"bill_text":\s*")(.*?)("\s*,\s*"analysis":)'
def sec185_repl(m):
    prefix = m.group(1)
    suffix = m.group(3)
    text = "(1) The Council may, by notice in the Gazette, prescribe the various fees payable for registration, examinations, certificates, and professional services under this Act: Provided that prior to prescribing fee scales for engineering services, the Council shall conduct joint statutory consultations with the Engineers Board of Kenya under Cap 530.\\n(2) The fee structure must be equitable and must not be used as an exclusionary barrier to entry into the professions."
    return prefix + text + suffix
content = re.sub(old_sec185_b, sec185_repl, content, flags=re.DOTALL)

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("[SUCCESS] All 4 Overreach Sections Patched with Statutory Provisos!")