import pathlib

p = pathlib.Path(r"C:\Users\nyago\.gemini\antigravity\scratch\New folder\build-kenya-interactive\src\pages\PartDetail.tsx")
content = p.read_text(encoding="utf-8", errors="ignore")
print(f"PartDetail.tsx size: {len(content)} bytes")
print(content[:3000])
