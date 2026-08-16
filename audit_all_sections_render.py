import pathlib, re

data_dir = pathlib.Path("src/app/viewer/data")
part_files = sorted(list(data_dir.glob("part*.ts")), key=lambda p: int(re.search(r'part(\d+)', p.name).group(1)))

all_sections = []
part_section_map = {}

for pf in part_files:
    part_num = re.search(r'part(\d+)', pf.name).group(1)
    text = pf.read_text(encoding="utf-8")
    secs = re.findall(r'"section":\s*"([^"]+)"', text)
    part_section_map[f"Part {part_num}"] = secs
    all_sections.extend(secs)

print(f"Total Sections Registered Across All {len(part_files)} Parts: {len(all_sections)}")

# Check natural sorting and missing gaps
def sort_key(s):
    m = re.match(r'^(\d+)([A-Z]*)$', s)
    if m:
        num = int(m.group(1))
        let = m.group(2)
        return (num, 1 if let else 0, let)
    return (9999, 0, s)

sorted_secs = sorted(all_sections, key=sort_key)

print("\n--- Sequence Gap & Discrepancy Check ---")
seen = set()
duplicates = [s for s in sorted_secs if s in seen or seen.add(s)]
if duplicates:
    print(f"DUPLICATE SECTIONS FOUND: {duplicates}")
else:
    print("SUCCESS: No duplicate section numbers found.")

# Check numeric continuity from 1 to max_sec
num_only = [int(re.match(r'^(\d+)', s).group(1)) for s in sorted_secs]
max_sec = max(num_only)
min_sec = min(num_only)

missing_base_nums = []
for n in range(min_sec, max_sec + 1):
    if not any(re.match(rf'^{n}[A-Z]*$', s) for s in sorted_secs):
        missing_base_nums.append(n)

if missing_base_nums:
    print(f"MISSING BASE SECTION NUMBERS IN SEQUENCE (Gaps): {missing_base_nums}")
else:
    print(f"SUCCESS: Baseline sequence 1 to {max_sec} is 100% continuous with zero missing base numbers!")

# List all gap/letter sections
letter_secs = [s for s in sorted_secs if re.search(r'[A-Z]', s)]
print(f"\nRegistered Deepening / Letter-Suffix Sections ({len(letter_secs)} total):")
print(letter_secs)
