import pathlib

read_path = pathlib.Path("src/app/viewer/read/page.tsx")
content = read_path.read_text(encoding="utf-8")

old_break_rule = """    const isForcedPageBreak = block.type === 'part_header' || block.type === 'schedule_header' || block.type === 'backmatter_header' || block.type === 'toc_header' || block.type === 'toc_schedules' || isSec3_SubFStart || isSec10Start || isSec23A_Sub3Start || isSec24A_Sub4Start || isSec24B_Sub5Start || isSec24D_SubFStart || isSec27_SubDStart || isSec32Start || isSec34A_Sub5Start || isSec39Start || isSec49A_Sub2bStart || isSec50_Sub2Start || isSec53B_Sub2Start || isSec55Start || isSec59Start || isSec106_SubCStart || isSec121_Sub3Start || isSec126Start || isSec129A_Sub4Start || isSec130A_Sub5Start || isSec135Start || isSec160A_Sub4bStart || isSec180A_SubDStart || isSec186AStart;"""

new_break_rule = """    const isScheduleTableBreak = block.type === 'schedule_illustration';
    const isForcedPageBreak = block.type === 'part_header' || block.type === 'schedule_header' || block.type === 'backmatter_header' || block.type === 'toc_header' || block.type === 'toc_schedules' || isScheduleTableBreak || isSec3_SubFStart || isSec10Start || isSec23A_Sub3Start || isSec24A_Sub4Start || isSec24B_Sub5Start || isSec24D_SubFStart || isSec27_SubDStart || isSec32Start || isSec34A_Sub5Start || isSec39Start || isSec49A_Sub2bStart || isSec50_Sub2Start || isSec53B_Sub2Start || isSec55Start || isSec59Start || isSec106_SubCStart || isSec121_Sub3Start || isSec126Start || isSec129A_Sub4Start || isSec130A_Sub5Start || isSec135Start || isSec160A_Sub4bStart || isSec180A_SubDStart || isSec186AStart;"""

if old_break_rule in content:
    content = content.replace(old_break_rule, new_break_rule, 1)
    read_path.write_text(content, encoding="utf-8")
    print("Successfully updated read/page.tsx: schedule_illustration tables now start on their own dedicated page!")
else:
    print("WARNING: old_break_rule not found")
