with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

import re

for sec in ["5", "8", "25", "44", "60", "70", "102", "185"]:
    match = re.search(r'\{\s*"section":\s*"' + sec + r'".*?"bill_text":\s*"(.*?)"', content, re.DOTALL)
    if match:
        print(f"=== SECTION {sec} STATUTORY TEXT ===")
        print(match.group(1)[:300])
        print("-" * 50)