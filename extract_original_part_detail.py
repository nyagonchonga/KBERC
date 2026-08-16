import pathlib
import json

log_file = pathlib.Path(r"C:\Users\nyago\.gemini\antigravity-ide\brain\bb5e8d6d-823a-4b6e-833b-dcfc183deaac\.system_generated\logs\transcript_full.jsonl")

matches = []

with log_file.open("r", encoding="utf-8") as f:
    for line_idx, line in enumerate(f):
        if r"interactive\[part]" in line.lower() or "interactive/[part]" in line.lower():
            try:
                data = json.loads(line)
                tool_calls = data.get("tool_calls", [])
                for call in tool_calls:
                    args = call.get("args", {})
                    content = args.get("CodeContent", "")
                    target = args.get("TargetFile", "")
                    if content and len(content) > 500:
                        matches.append((line_idx, target, len(content), content))
            except Exception:
                pass

print(f"Total matching tool calls for [part]: {len(matches)}")
for idx, target, length, content in matches:
    print(f"Line {idx}: {target} (Len: {length})")

if matches:
    # Get the earliest version
    earliest_idx, earliest_target, earliest_len, earliest_code = matches[0]
    p = pathlib.Path("src/app/viewer/interactive/[part]/page.tsx")
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(earliest_code, encoding="utf-8")
    print(f"Restored earliest original [part] page from line {earliest_idx}!")
