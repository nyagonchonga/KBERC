import pathlib, re

part1_text = pathlib.Path("src/app/viewer/data/part1.ts").read_text(encoding="utf-8")

# Parse JSON array of section objects cleanly
sec_matches = re.findall(r'\{\s*\"section\":\s*\"(\d+)\",\s*\"title\":\s*\"(.*?)\",\s*\"bill_text\":\s*\"(.*?)\"\s*,\s*\"analysis\"', part1_text, re.DOTALL)

blocks = []
blocks.append({"type": "part_header", "part": "PART I", "title": "PRELIMINARY"})

for sec_num, title, bill_text in sec_matches:
    # Unescape \\n
    clean_text = bill_text.replace("\\n", "\n")
    paragraphs = [p.strip() for p in clean_text.split("\n") if p.strip()]
    for i, p in enumerate(paragraphs):
        blocks.append({
            "type": "section_chunk",
            "section": sec_num,
            "title": title,
            "text": p,
            "isFirstChunk": i == 0,
            "isLastChunk": i == len(paragraphs) - 1
        })

print(f"Total section chunks in Part I: {len(blocks)}")
for idx, b in enumerate(blocks):
    if b["type"] == "section_chunk":
        print(f"  Chunk {idx}: Sec {b['section']} (first={b['isFirstChunk']}, last={b['isLastChunk']}): {b['text'][:40]}...")

MAX_HEIGHT = 260 * 3.779527559  # 982.67 px
pages = []
current_page = []
current_height = 0

for idx, b in enumerate(blocks):
    b_height = 0
    if b["type"] == "part_header":
        b_height = 100
    elif b["type"] == "section_chunk":
        text_len = len(b["text"])
        lines = max(1, (text_len + 94) // 95)
        b_height = (lines * 16) + 4
        if b["isFirstChunk"]:
            b_height += 18
        if b["isLastChunk"]:
            b_height += 12

    if current_height + b_height > MAX_HEIGHT and len(current_page) > 0:
        pages.append(current_page)
        current_page = []
        current_height = 0

    current_page.append(b)
    current_height += b_height

if current_page:
    pages.append(current_page)

print(f"\nTotal pages generated for Part I: {len(pages)}")
for p_idx, page in enumerate(pages):
    sec_in_page = []
    for b in page:
        if b["type"] == "section_chunk" and b["section"] not in sec_in_page:
            sec_in_page.append(b["section"])
    print(f"Page {p_idx+1} (height sum): Sections {sec_in_page}")
