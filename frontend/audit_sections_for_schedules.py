import pathlib, re

text = pathlib.Path("src/app/viewer/data.ts").read_text(encoding="utf-8")

# Find all section text references to Schedule, Form, Register, Code, Scale, Fee, Tribunal, etc.
sections = re.findall(r'section_number:\s*\"(\d+)\".*?title:\s*\"(.*?)\".*?bill_text:\s*\"(.*?)\"', text, re.DOTALL)

print(f"Total sections found in data.ts: {len(sections)}")

schedule_refs = []
missing_items = []

for sec_num, title, bill_text in sections:
    # Check for schedule mentions
    found_schedules = re.findall(r'(\w+\s+Schedule)', bill_text, re.IGNORECASE)
    if found_schedules:
        schedule_refs.append((sec_num, title, found_schedules))

    # Check for forms, fees, rules, registries, guidelines
    if "form" in bill_text.lower() and "schedule" not in bill_text.lower():
        missing_items.append((sec_num, title, "Prescribed Form needed"))
    if "seal" in bill_text.lower():
        missing_items.append((sec_num, title, "Digital Seal Specification needed"))

print("\n--- SCHEDULE REFERENCES IN SECTIONS ---")
for s in schedule_refs[:30]:
    print(f"Sec {s[0]} ({s[1]}): {s[2]}")
