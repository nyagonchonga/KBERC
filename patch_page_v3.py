import sys

file_path = r'C:\Users\nyago\.gemini\antigravity-ide\scratch\k-belir-platform\frontend\src\app\viewer\read\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace Pagination Engine
engine_start = '''  // --- Pagination Engine for Active View ---'''
engine_end = '''  // -----------------------------------------'''

new_engine = '''  // --- Pagination Engine for Active View ---
  const blocks: any[] = [];
  
  // 1. Title Page Block
  blocks.push({ type: 'title_page', id: 'front-matter' });

  // 2. Table of Contents Blocks
  blocks.push({ type: 'toc_header' });
  billData.structure.forEach(part => {
    blocks.push({ type: 'toc_part', data: part });
  });
  blocks.push({ type: 'toc_schedules' });

  // 3. Main Bill Blocks
  billData.structure.forEach((part, pIndex) => {
    blocks.push({
      type: 'part_header',
      data: part,
      showMainTitle: pIndex === 0
    });
    
    part.sections.forEach(sec => {
      blocks.push({ type: 'section', data: sec, id: `section-${sec.section}` });
    });
  });

  // 4. Schedules
  billData.schedules.forEach((schedule, sIndex) => {
    blocks.push({
      type: 'schedule_header',
      data: schedule,
      id: `schedule-${sIndex}`
    });
    
    const paragraphs = schedule.content.split('\\n\\n');
    paragraphs.forEach(p => {
      if (p.trim()) blocks.push({ type: 'schedule_text', text: p });
    });
  });

  const MM_TO_PX = 3.779527559; 
  const MAX_HEIGHT_PER_PAGE_MM = 245; 
  const MAX_HEIGHT_PER_PAGE = MAX_HEIGHT_PER_PAGE_MM * MM_TO_PX; 
  
  const pages: any[] = [];
  let currentPage: any[] = [];
  let currentHeightScore = 0;
  let currentPagePart = 'Preliminary';

  blocks.forEach(block => {
    let blockHeight = 0;
    if (block.type === 'title_page') blockHeight = MAX_HEIGHT_PER_PAGE;
    else if (block.type === 'toc_header') blockHeight = 100;
    else if (block.type === 'toc_part') blockHeight = 40 + (block.data.sections.length * 25);
    else if (block.type === 'toc_schedules') blockHeight = 40 + (billData.schedules.length * 25);
    else if (block.type === 'read_header') blockHeight = 250;
    else if (block.type === 'part_header') blockHeight = 100;
    else if (block.type === 'section') {
       let secHeight = 0;
       const paragraphs = block.data.bill_text.split('\\n');
       paragraphs.forEach((p: string) => {
           secHeight += Math.ceil(p.length / 70) * 23 + 8;
       });
       blockHeight = secHeight + 28; 
    }
    else if (block.type === 'schedule_header') blockHeight = 80;
    else if (block.type === 'schedule_text') {
       blockHeight = Math.ceil(block.text.length / 90) * 23 + 24;
    }

    if (currentHeightScore + blockHeight > MAX_HEIGHT_PER_PAGE && currentPage.length > 0) {
      pages.push({ blocks: currentPage, part: currentPagePart });
      currentPage = [];
      currentHeightScore = 0;
    }
    
    if (block.type === 'part_header') currentPagePart = block.data.part;
    if (block.type === 'schedule_header') currentPagePart = block.data.title.split('—')[0];
    
    currentPage.push(block);
    currentHeightScore += blockHeight;
  });
  
  if (currentPage.length > 0) pages.push({ blocks: currentPage, part: currentPagePart });'''

part1 = content.split(engine_start)[0]
part2 = content.split(engine_end)[1]
content = part1 + new_engine + part2

# 2. Fix the onClick handlers in Sidebar
# Front Matter
old_fm_click = '''onClick={() => {
                  setShowFrontMatter(true);
                  setSelectedSection(null);
                  setActiveSchedule(null);
                }}'''
new_fm_click = '''onClick={() => {
                  setSelectedSection(null);
                  setActiveSchedule(null);
                  document.getElementById('front-matter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}'''
content = content.replace(old_fm_click, new_fm_click)

# Remove showFrontMatter state from Front Matter active class since it's now just scroll based.
# Wait, actually let's just leave it or use selectedSection === null. 
old_fm_class = '''${
                  showFrontMatter ? 'bg-emerald-900/20 border border-emerald-900/50' : 'hover:bg-slate-800'
                }'''
new_fm_class = '''${
                  !selectedSection && !activeSchedule ? 'bg-emerald-900/20 border border-emerald-900/50' : 'hover:bg-slate-800'
                }'''
content = content.replace(old_fm_class, new_fm_class)

old_fm_text1 = '''${showFrontMatter ? 'text-emerald-400' : 'text-slate-300 group-hover:text-emerald-400'}'''
new_fm_text1 = '''${!selectedSection && !activeSchedule ? 'text-emerald-400' : 'text-slate-300 group-hover:text-emerald-400'}'''
content = content.replace(old_fm_text1, new_fm_text1)

old_fm_text2 = '''${showFrontMatter ? 'text-emerald-600' : 'text-slate-500 group-hover:text-slate-400'}'''
new_fm_text2 = '''${!selectedSection && !activeSchedule ? 'text-emerald-600' : 'text-slate-500 group-hover:text-slate-400'}'''
content = content.replace(old_fm_text2, new_fm_text2)

# Sections
old_sec_click = '''onClick={() => {
                          setShowFrontMatter(false);
                          setSelectedSection(section);
                          setActiveSchedule(null);
                        }}'''
new_sec_click = '''onClick={() => {
                          setSelectedSection(section);
                          setActiveSchedule(null);
                          document.getElementById(`section-${section.section}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}'''
content = content.replace(old_sec_click, new_sec_click)

# Schedules
old_sched_click = '''onClick={() => {
                     setShowFrontMatter(false);
                     setSelectedSection(null);
                     setActiveSchedule(schedule);
                   }}'''
new_sched_click = '''onClick={() => {
                     setSelectedSection(null);
                     setActiveSchedule(schedule);
                     document.getElementById(`schedule-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                   }}'''
content = content.replace(old_sched_click, new_sched_click)


# 3. Update Render of Pages and Footer
render_start = '''          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="a4-page">'''
render_end = '''          {/* Floating Actions */}'''

new_render = '''          {pages.map((pageData, pageIndex) => (
            <div key={pageIndex} className="a4-page">
              <div className="page-header">
                 <span>Draft Document</span>
                 <span>The Kenya Built Environment Regulatory Council Bill, 2026</span>
              </div>
              
              <div className="page-content">
                {pageData.blocks.map((block: any, blockIndex: number) => {
                  if (block.type === 'title_page') {
                    return (
                      <div id={block.id} key={blockIndex} className="h-[247mm] flex flex-col items-center justify-center text-center">
                        <h2 className="text-xl font-bold tracking-widest text-slate-500 uppercase mb-8">Republic of Kenya</h2>
                        <h1 className="text-4xl font-serif font-bold text-slate-900 uppercase tracking-tight mb-12 leading-snug max-w-2xl">
                          {billData.title}
                        </h1>
                        <p className="text-lg font-serif italic text-slate-700 max-w-3xl leading-relaxed">
                          {billData.long_title}
                        </p>
                        <div className="mt-16 text-sm font-bold text-slate-400 uppercase tracking-widest">
                          Proposed Bill
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'toc_header') {
                    return (
                      <div key={blockIndex} className="mb-12 mt-8 text-center">
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-900">Arrangement of Clauses</h2>
                      </div>
                    );
                  }
                  if (block.type === 'toc_part') {
                    return (
                      <div key={blockIndex} className="mb-8">
                        <h3 className="font-bold uppercase text-slate-900 mb-4">{block.data.part}—{block.data.title}</h3>
                        <div className="pl-4 space-y-2">
                          {block.data.sections.map((sec: any) => (
                            <div key={sec.section} className="flex text-sm">
                              <span className="w-8 shrink-0 text-slate-500">{sec.section}.</span>
                              <span className="text-slate-800">{sec.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'toc_schedules') {
                    return (
                      <div key={blockIndex} className="mb-8 mt-12">
                        <h3 className="font-bold uppercase text-slate-900 mb-4">Schedules</h3>
                        <div className="pl-4 space-y-2">
                          {billData.schedules.map((sch, i) => (
                            <div key={i} className="flex text-sm">
                              <span className="w-24 shrink-0 text-slate-500">{sch.title.split('—')[0]}</span>
                              <span className="text-slate-800">{sch.title.split('—')[1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'read_header') {
                    return (
                      <div key={blockIndex} className="border-b-2 border-slate-800 pb-8 mb-8 text-center">
                        <h2 className="text-lg font-bold tracking-widest text-slate-500 uppercase mb-4">Republic of Kenya</h2>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 uppercase tracking-tight mb-6 leading-snug">
                          {billData.title}
                        </h1>
                        <p className="text-sm font-serif italic text-slate-700 text-justify leading-relaxed">
                          {billData.long_title}
                        </p>
                      </div>
                    );
                  }
                  if (block.type === 'part_header') {
                    return (
                      <div key={blockIndex} className="mb-8 mt-8">
                        {block.showMainTitle && (
                          <div className="border-b-2 border-slate-200 pb-8 mb-8 text-center">
                            <h2 className="text-lg font-bold tracking-widest text-slate-500 uppercase mb-4">Republic of Kenya</h2>
                            <h1 className="text-3xl font-serif font-bold text-slate-900 uppercase tracking-tight mb-6 leading-snug">
                              {billData.title}
                            </h1>
                            <p className="text-sm font-serif italic text-slate-700 text-justify leading-relaxed">
                              {billData.long_title}
                            </p>
                          </div>
                        )}
                        <h3 className="text-center font-bold uppercase">
                          {block.data.part}<br/>{block.data.title}
                        </h3>
                      </div>
                    );
                  }
                  if (block.type === 'section') {
                    const sec = block.data;
                    return (
                      <div id={block.id} key={blockIndex} className="mb-6 flex">
                        <div className="w-28 pr-4 shrink-0 text-xs text-right font-bold italic pt-1 text-gray-600">
                          {sec.title}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold mb-2">{sec.section}.</div>
                          {sec.bill_text.split('\\n').map((p: string, i: number) => (
                            <p key={i} className="mb-2 text-justify text-sm">{p}</p>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'schedule_header') {
                    return (
                      <div id={block.id} key={blockIndex} className="mb-8 text-center font-bold uppercase">
                        <h3>{block.data.title.split('—')[0]}</h3>
                        <h4 className="mt-2">{block.data.title.split('—')[1]}</h4>
                      </div>
                    );
                  }
                  if (block.type === 'schedule_text') {
                    return (
                      <p key={blockIndex} className="mb-6 text-justify text-sm whitespace-pre-wrap">
                        {block.text}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="page-footer">
                <div>{pageData.part}</div>
                <div>Page {pageIndex + 1}</div>
              </div>
            </div>
          ))}
          
          '''

part1 = content.split(render_start)[0]
part2 = content.split(render_end)[1]
content = part1 + new_render + part2

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully applied V3 patch")
