import pathlib
import os

candidate_paths = [
    r"C:\Users\nyago\.gemini\antigravity\scratch\New folder\build-kenya-interactive",
    r"C:\Users\nyago\.gemini\antigravity-ide\scratch\New folder\build-kenya-interactive",
    r"C:\Users\nyago\.gemini\scratch\New folder\build-kenya-interactive",
]

found = None
for p in candidate_paths:
    path_obj = pathlib.Path(p)
    if path_obj.exists():
        found = path_obj
        print(f"FOUND DIRECTORY AT: {p}")
        break

if not found:
    print("Checking parent directories...")
    base = pathlib.Path(r"C:\Users\nyago\.gemini")
    for root, dirs, files in os.walk(base):
        if "build-kenya-interactive" in root:
            print("Found match:", root)
            found = pathlib.Path(root)
            break

if found:
    print("\nContents of", found)
    for item in found.rglob("*"):
        if item.is_file():
            print(f"- {item.relative_to(found)} ({item.stat().st_size} bytes)")
else:
    print("Could not find build-kenya-interactive folder.")
