import pathlib

p = pathlib.Path("src/app/viewer/about/page.tsx")
content = p.read_text(encoding="utf-8")

content = content.replace("fontWeight 900", "fontWeight: 900")
p.write_text(content, encoding="utf-8")
print("Fixed syntax error in about/page.tsx!")
