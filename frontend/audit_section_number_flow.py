import pathlib, re

data_dir = pathlib.Path("src/app/viewer/data")

print("=== COMPLETE SECTION NUMBER FLOW AUDIT ===")

all_sections = []

for i in range(1, 21):
    fn = f"part{i}.ts"
    p = data_dir / fn
    text = p.read_text(encoding="utf-8")
    
    # Extract all section numbers in order
    matches = re.findall(r'"section":\s*"([^"]+)"', text)
    if not matches:
        matches = re.findall(r'section:\s*"([^"]+)"', text)
    
    print(f"PART {i} ({fn}): {', '.join(matches)}")
    for m in matches:
        all_sections.append((i, fn, m))

# Check for out-of-order section numbers
print("\n--- OUT-OF-ORDER CHECK ---")
for idx in range(len(all_sections) - 1):
    part_curr, fn_curr, sec_curr = all_sections[idx]
    part_next, fn_next, sec_next = all_sections[idx+1]
    
    # Extract numeric prefix
    num_curr = re.findall(r'\d+', sec_curr)
    num_next = re.findall(r'\d+', sec_next)
    
    if num_curr and num_next:
        n1 = int(num_curr[0])
        n2 = int(num_next[0])
        if n2 < n1 or (n2 == n1 and sec_curr > sec_next):
            print(f"⚠️ DISCREPANCY: [{fn_curr}] Sec {sec_curr} is followed by [{fn_next}] Sec {sec_next}")
