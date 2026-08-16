import pathlib

file_path = pathlib.Path("src/app/viewer/interactive/[part]/page.tsx")
lines = file_path.read_text(encoding="utf-8").splitlines()

# Find 'use client' or starting imports
start_idx = 0
for idx, line in enumerate(lines):
    if line.strip().startswith("'use client'") or line.strip().startswith("import React"):
        start_idx = idx
        break

cleaned_lines = lines[start_idx:]
file_path.write_text("\n".join(cleaned_lines), encoding="utf-8")
print("Cleaned src/app/viewer/interactive/[part]/page.tsx!")
