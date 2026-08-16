import pathlib, re

# Let's inspect data/index.ts and part1.ts
index_text = pathlib.Path("src/app/viewer/data/index.ts").read_text(encoding="utf-8")
part1_text = pathlib.Path("src/app/viewer/data/part1.ts").read_text(encoding="utf-8")

print("index.ts structure array:")
print(index_text)

print("\nDoes part1.ts contain section 4?")
print('"section": "4"' in part1_text)
