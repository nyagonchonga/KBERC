import pathlib, re

# Let's inspect data/part1.ts first
part1_path = pathlib.Path("src/app/viewer/data/part1.ts")
part1_text = part1_path.read_text(encoding="utf-8")

print("Sections in part1.ts:")
matches = re.findall(r'\"section\":\s*\"(\d+)\"', part1_text)
print("Found sections:", matches)

# Check index.ts
idx_path = pathlib.Path("src/app/viewer/data/index.ts")
idx_text = idx_path.read_text(encoding="utf-8")
print("\nindex.ts structure list:")
print(idx_text)