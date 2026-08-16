import pathlib
import re

print("Fixing any missing colons in style objects like fontWeight 800 -> fontWeight: 800...")

src_dir = pathlib.Path("src/app")

for file_p in src_dir.glob("**/*.tsx"):
    content = file_p.read_text(encoding="utf-8")
    
    # Fix missing colons
    new_content = re.sub(r'fontWeight\s+([0-9]+)', r'fontWeight: \1', content)
    new_content = re.sub(r'fontWeight\s+([\'"][a-zA-Z0-9]+[\'"])', r'fontWeight: \1', new_content)
    
    if new_content != content:
        file_p.write_text(new_content, encoding="utf-8")
        print(f"Fixed style object syntax in {file_p}")

print("Syntax fix completed!")
