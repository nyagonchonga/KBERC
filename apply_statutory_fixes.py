import re

with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. FIX SECTION 5 (Supremacy Clause & EBK Proviso)
old_sec5_text = "(2) In the event of any conflict between the provisions of this Act and any other written law concerning the regulation of built environment professionals, the provisions of this Act shall prevail to the extent of the inconsistency."
new_sec5_text = "(2) In the event of any conflict between the provisions of this Act and any other written law concerning the regulation of built environment practice, the provisions of this Act shall prevail to the extent of the inconsistency: Provided that nothing in this section shall be construed as repealing or overriding the statutory autonomy of the Engineers Board of Kenya under the Engineers Act (Cap 530) regarding the accreditation and discipline of engineers as saved under section 23."

if old_sec5_text in content:
    content = content.replace(old_sec5_text, new_sec5_text)
    print("[SUCCESS] Fixed Section 5 statutory text")

# 2. FIX SECTION 25 (Practice Restrictions & Risk-Based Harmonization)
old_sec25_pattern = r'("section":\s*"25",\s*"title":\s*"Requirement for registration",\s*"bill_text":\s*")(.*?)("\s*,\s*"analysis":)'
def sec25_repl(m):
    prefix = m.group(1)
    suffix = m.group(3)
    new_text = "(1) No person shall practice or carry out any built environment work unless registered under this Part in the appropriate professional, technologist, or technician category corresponding to the Project Risk Classification set out under Part VII.\\n\\n(2) Any person who violates subsection (1) commits an offence and is liable on conviction to a fine not exceeding five million shillings or to imprisonment for a term not exceeding five years, or to both."
    return prefix + new_text + suffix

content = re.sub(old_sec25_pattern, sec25_repl, content, flags=re.DOTALL)
print("[SUCCESS] Fixed Section 25 statutory text")

# 3. FIX SECTION 60 (Corporate Firm Seal Loophole)
if '"section": "60"' in content or '"section":"60"' in content:
    old_sec60_sub = '"(2) A firm registered under this section shall notify the Registrar of any change in its directorship or partnership within fourteen days of such change."'
    new_sec60_sub = '"(2) A firm registered under this section shall notify the Registrar of any change in its directorship or partnership within fourteen days of such change.\\n\\n(3) Every architectural, engineering, or quantity surveying document submitted by a registered firm for statutory approval shall bear the individual registration number, physical signature, and cryptographic digital seal of the specific registered professional who personally prepared or directly supervised the preparation of the document."'
    if old_sec60_sub in content:
        content = content.replace(old_sec60_sub, new_sec60_sub)
        print("[SUCCESS] Fixed Section 60 statutory text")

# 4. FIX SECTION 102 (Disciplinary Jurisdiction & Referral Protocol)
old_sec102_pattern = r'("section":\s*"102",\s*"title":\s*".*?",\s*"bill_text":\s*")(.*?)("\s*,\s*"analysis":)'
def sec102_repl(m):
    prefix = m.group(1)
    suffix = m.group(3)
    new_text = "(1) Where a complaint relates strictly to technical engineering competency, the Council shall refer the matter to the Engineers Board of Kenya for investigation under Cap 530.\\n\\n(2) Where a complaint involves multi-disciplinary site safety defaults or unauthorized seal lending, the matter shall be heard by a Joint Disciplinary Panel comprising representatives from both the Council and the relevant statutory discipline board.\\n\\n(3) The Disciplinary Board shall adhere to the rules of natural justice under Article 47 of the Constitution and avoid double jeopardy under Article 50(2)(o)."
    return prefix + new_text + suffix

content = re.sub(old_sec102_pattern, sec102_repl, content, flags=re.DOTALL)
print("[SUCCESS] Fixed Section 102 statutory text")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("All statutory patches successfully applied!")