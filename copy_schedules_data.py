import pathlib

source = pathlib.Path(r"C:\Users\nyago\.gemini\antigravity\scratch\New folder\build-kenya-interactive\src\data\schedules-data.ts")
dest = pathlib.Path("src/app/viewer/schedules-data.ts")

if source.exists():
    text = source.read_text(encoding="utf-8")
    dest.write_text(text, encoding="utf-8")
    print(f"Successfully copied schedules-data.ts ({len(text)} bytes) to {dest}")
else:
    print("Source schedules-data.ts not found!")
