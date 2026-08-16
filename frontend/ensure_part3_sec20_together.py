import pathlib

read_path = pathlib.Path("src/app/viewer/read/page.tsx")
content = read_path.read_text(encoding="utf-8")

# Let's inspect isForcedPageBreak in read/page.tsx
old_break_rule = """    // Force Section 10 to start on a fresh page (Page 15) so Section 6, 7, 8(a-h), 9 sit together on Page 14
    const isSec10Start = block.type === 'section_chunk' && block.data?.section === '10' && block.isFirstChunk;
    const isForcedPageBreak = block.type === 'part_header' || block.type === 'schedule_header' || block.type === 'backmatter_header' || block.type === 'toc_header' || block.type === 'toc_schedules' || isSec10Start;"""

new_break_rule = """    // Force Section 10 to start on Page 15, and ensure PART III + Section 20 start together cleanly on Page 18
    const isSec10Start = block.type === 'section_chunk' && block.data?.section === '10' && block.isFirstChunk;
    const isPart3Header = block.type === 'part_header' && block.data?.part === 'PART III';
    const isForcedPageBreak = block.type === 'part_header' || block.type === 'schedule_header' || block.type === 'backmatter_header' || block.type === 'toc_header' || block.type === 'toc_schedules' || isSec10Start || isPart3Header;"""

if old_break_rule in content:
    content = content.replace(old_break_rule, new_break_rule, 1)
    read_path.write_text(content, encoding="utf-8")
    print("Updated page break rules for PART III & Section 20!")
else:
    print("WARNING: old_break_rule not found")
