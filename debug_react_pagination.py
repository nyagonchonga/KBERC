import pathlib, re, json

# Let's inspect read/page.tsx line by line to see how pages are created
read_path = pathlib.Path("src/app/viewer/read/page.tsx")
text = read_path.read_text(encoding="utf-8")

# Search for pages.push
lines = text.splitlines()
for i, l in enumerate(lines):
    if "pages.push" in l or "MAX_HEIGHT_PER_PAGE" in l or "blockHeight =" in l:
        print(f"Line {i+1}: {l}")
