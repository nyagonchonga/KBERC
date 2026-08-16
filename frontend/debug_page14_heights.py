import pathlib, re

read_path = pathlib.Path("src/app/viewer/read/page.tsx")
content = read_path.read_text(encoding="utf-8")

# Let's inspect block heights calculation in page.tsx
pattern = r"else if \(block\.type === 'section_chunk'\) \{(.*?)\}"
match = re.search(pattern, content, re.DOTALL)
if match:
    print("Found section_chunk height formula:")
    print(match.group(1))
