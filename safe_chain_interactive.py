import pathlib

p = pathlib.Path("src/app/viewer/interactive/page.tsx")
content = p.read_text(encoding="utf-8")

old_desc = "const description = part.sections[0]?.analysis.what_it_does.slice(0, 100) + '…';"
new_desc = "const description = ((part.sections[0]?.analysis?.what_it_does || part.sections[0]?.bill_text) || '').slice(0, 100) + '…';"

if old_desc in content:
    content = content.replace(old_desc, new_desc)
    p.write_text(content, encoding="utf-8")
    print("Safely guarded optional chaining in interactive/page.tsx!")
else:
    print("WARNING: old_desc pattern not found")
