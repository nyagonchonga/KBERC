import pathlib, re

# Let's inspect read/page.tsx section_chunk ID generation:
read_path = pathlib.Path("src/app/viewer/read/page.tsx")
text = read_path.read_text(encoding="utf-8")

# Search for where id is assigned to section_chunk
for i, line in enumerate(text.splitlines()):
    if "section_chunk" in line or "block.id" in line:
        print(f"Line {i+1}: {line[:100]}")