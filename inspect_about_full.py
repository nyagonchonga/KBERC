import pathlib

p = pathlib.Path(r"C:\Users\nyago\.gemini\antigravity\scratch\New folder\build-kenya-interactive\src\pages\About.tsx")
content = p.read_text(encoding="utf-8", errors="ignore")
lines = content.splitlines()

print(f"About.tsx total lines: {len(lines)}")
for idx in range(0, len(lines), 150):
    print(f"--- LINE {idx} ---")
    print("\n".join(lines[idx:idx+30]))
