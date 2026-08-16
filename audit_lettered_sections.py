import pathlib
import json
import re

data_dir = pathlib.Path("src/app/viewer/data")
sections = []

for p in sorted(data_dir.glob("part*.ts")):
    content = p.read_text(encoding="utf-8")
    # find section numbers in JSON/object definitions
    matches = re.findall(r'"section":\s*"([^"]+)"', content)
    for m in matches:
        sections.append((p.name, m))

print(f"Total sections found: {len(sections)}")

# Group by numeric base
grouped = {}
for file_name, sec in sections:
    # Match number and optional trailing letter (e.g. 14A -> 14, A)
    m = re.match(r'^(\d+)([A-Z])?$', sec)
    if m:
        base_num = int(m.group(1))
        letter = m.group(2) or ""
        grouped.setdefault(base_num, []).append((sec, file_name))

# Find base numbers that have lettered insertions (e.g. 14A, 23A, etc.)
lettered_bases = {base: list_secs for base, list_secs in grouped.items() if any(s[0] != str(base) for s in list_secs)}

for base in sorted(lettered_bases.keys()):
    secs = [s[0] for s in lettered_bases[base]]
    files = set([s[1] for s in lettered_bases[base]])
    print(f"Base Section {base}: Sections present = {secs} (in {', '.join(files)})")
