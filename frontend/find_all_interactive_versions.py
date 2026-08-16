import pathlib
import json

log_file = pathlib.Path(r"C:\Users\nyago\.gemini\antigravity-ide\brain\bb5e8d6d-823a-4b6e-833b-dcfc183deaac\.system_generated\logs\transcript_full.jsonl")

versions = []

with log_file.open("r", encoding="utf-8") as f:
    for line_idx, line in enumerate(f):
        if "src/app/viewer/interactive" in line and "CodeContent" in line:
            try:
                data = json.loads(line)
                tool_calls = data.get("tool_calls", [])
                for call in tool_calls:
                    args = call.get("args", {})
                    target = args.get("TargetFile", "")
                    content = args.get("CodeContent", "")
                    if "interactive" in target and content:
                        versions.append((line_idx, target, len(content), content[:150]))
            except Exception:
                pass

print(f"Total interactive file versions found in transcript: {len(versions)}")
for idx, target, length, snippet in versions:
    print(f"Line {idx}: {target} (Len: {length}) -> Snippet: {snippet[:80]}...")
