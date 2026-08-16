import pathlib, re

# Let's inspect read/page.tsx block creation and pagination
read_path = pathlib.Path("src/app/viewer/read/page.tsx")
text = read_path.read_text(encoding="utf-8")

# Let's find how section_chunk blocks are pushed and paginated
print("Searching for block processing in read/page.tsx...")

lines = text.splitlines()
for i, l in enumerate(lines):
    if "section_chunk" in l:
        print(f"Line {i+1}: {l[:100]}")