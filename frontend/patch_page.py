import sys

file_path = r'C:\Users\nyago\.gemini\antigravity-ide\scratch\k-belir-platform\frontend\src\app\viewer\read\page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update state
old_state = '''  // Default to the first section
  const [selectedSection, setSelectedSection] = useState<SectionData>(billData.structure[0].sections[0]);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<AnalysisTab>("Overview");'''
new_state = '''  // Default to the first section
  const [selectedSection, setSelectedSection] = useState<SectionData | null>(billData.structure[0].sections[0]);
  const [activeSchedule, setActiveSchedule] = useState<any>(null);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<AnalysisTab>("Overview");'''
content = content.replace(old_state, new_state)

# 2. Add pagination logic before return
old_return = '  return ('
new_return = '''  // --- Pagination Engine for Active View ---
  const blocks = [];
  
  if (selectedSection) {
    blocks.push({ type: 'read_header' });
    const partDef = billData.structure.find(p => p.sections.some(s => s.section === selectedSection.section));
    if (partDef) {
       blocks.push({ type: 'part_header', data: partDef, showMainTitle: false });
    }
    blocks.push({ type: 'section', data: selectedSection });
  } else if (activeSchedule) {
    blocks.push({ type: 'read_header' });
    blocks.push({ type: 'schedule_header', data: activeSchedule });
    const paragraphs = activeSchedule.content.split('\\n\\n');
    paragraphs.forEach(p => {
      if (p.trim()) blocks.push({ type: 'schedule_text', text: p });
    });
  }

  const MM_TO_PX = 3.779527559; 
  const MAX_HEIGHT_PER_PAGE_MM = 245; 
  const MAX_HEIGHT_PER_PAGE = MAX_HEIGHT_PER_PAGE_MM * MM_TO_PX; 
  
  const pages = [];
  let currentPage = [];
  let currentHeightScore = 0;

  blocks.forEach(block => {
    let blockHeight = 0;
    if (block.type === 'read_header') blockHeight = 250;
    else if (block.type === 'part_header') blockHeight = 100;
    else if (block.type === 'section') {
       let secHeight = 0;
       const paragraphs = block.data.bill_text.split('\\n');
       paragraphs.forEach(p => {
           secHeight += Math.ceil(p.length / 70) * 23 + 8;
       });
       blockHeight = secHeight + 28; 
    }
    else if (block.type === 'schedule_header') blockHeight = 80;
    else if (block.type === 'schedule_text') {
       blockHeight = Math.ceil(block.text.length / 90) * 23 + 24;
    }

    if (currentHeightScore + blockHeight > MAX_HEIGHT_PER_PAGE && currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [];
      currentHeightScore = 0;
    }
    
    currentPage.push(block);
    currentHeightScore += blockHeight;
  });
  
  if (currentPage.length > 0) pages.push(currentPage);
  // -----------------------------------------

  return ('''
content = content.replace(old_return, new_return)

# 3. Update onClick for section button
old_sec_click = '''onClick={() => setSelectedSection(section)}'''
new_sec_click = '''onClick={() => {
                          setSelectedSection(section);
                          setActiveSchedule(null);
                        }}'''
content = content.replace(old_sec_click, new_sec_click)

# 4. Update selectedSection comparison
old_sec_cmp = '''selectedSection.section === section.section'''
new_sec_cmp = '''selectedSection?.section === section.section'''
content = content.replace(old_sec_cmp, new_sec_cmp)

# 5. Update onClick for schedule button
old_sched_click = '''onClick={() => {
                     setActivePart(null);
                     setActiveSchedule(schedule);
                   }}'''
new_sched_click = '''onClick={() => {
                     setSelectedSection(null);
                     setActiveSchedule(schedule);
                   }}'''
content = content.replace(old_sched_click, new_sched_click)

# 6. Replace center column
center_col_start = '''{/* Center Column: Formal Bill Text */}'''
center_col_end = '''{/* Floating Actions */}'''
center_part1 = content.split(center_col_start)[0]
center_part2 = content.split(center_col_end)[1]

new_center_col = '''{/* Center Column: Formal Bill Text */}
        <section className="flex-1 bg-slate-950 overflow-y-auto border-r border-slate-800 flex flex-col items-center py-12 relative shadow-inner space-y-8">
          
          <style dangerouslySetInnerHTML={{__html: `
            .a4-page {
              width: 210mm;
              height: 297mm;
              max-height: 297mm;
              box-sizing: border-box;
              padding: 25mm 20mm;
              background: #fdfcfb;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              position: relative;
              font-family: 'Merriweather', serif;
              line-height: 1.6;
              overflow: hidden;
              color: #0f172a;
              flex-shrink: 0;
            }
            .page-content {
              height: 247mm;
              overflow: hidden;
            }
            .page-header {
              position: absolute;
              top: 12mm;
              left: 20mm;
              right: 20mm;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 4mm;
              text-align: center;
              font-size: 10px;
              text-transform: uppercase;
              color: #94a3b8;
              font-family: sans-serif;
              letter-spacing: 0.05em;
            }
            .page-footer {
              position: absolute;
              bottom: 12mm;
              left: 20mm;
              right: 20mm;
              border-top: 1px solid #e2e8f0;
              padding-top: 4mm;
              display: flex;
              justify-content: space-between;
              font-size: 10px;
              color: #94a3b8;
              font-family: sans-serif;
            }
          `}} />

          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="a4-page">
              <div className="page-header">The Kenya Built Environment Regulatory Council Bill, 2026</div>
              
              <div className="page-content">
                {page.map((block, blockIndex) => {
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
                      <div key={blockIndex} className="mb-8">
                        <h3 className="text-center font-bold uppercase">
                          {block.data.part}<br/>{block.data.title}
                        </h3>
                      </div>
                    );
                  }
                  if (block.type === 'section') {
                    const sec = block.data;
                    return (
                      <div key={blockIndex} className="mb-6 flex">
                        <div className="w-28 pr-4 shrink-0 text-xs text-right font-bold italic pt-1 text-gray-600">
                          {sec.title}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold mb-2">{sec.section}.</div>
                          {sec.bill_text.split('\\n').map((p, i) => (
                            <p key={i} className="mb-2 text-justify text-sm">{p}</p>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'schedule_header') {
                    return (
                      <div key={blockIndex} className="mb-8 text-center font-bold uppercase">
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
                <div>{selectedSection ? billData.structure.find(p => p.sections.some(s => s.section === selectedSection.section))?.part : activeSchedule?.title.split('—')[0]}</div>
                <div>Page {pageIndex + 1}</div>
              </div>
            </div>
          ))}
          
          {/* Floating Actions */}'''

content = center_part1 + new_center_col + center_part2

# 7. Update right column to handle selectedSection == null
right_col_start = '''{/* Right Column: Section Analysis */}
        <aside className="w-[450px] flex-none bg-slate-900 flex flex-col shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.2)]">'''

right_col_end = '''</aside>

      </main>'''

right_part1 = content.split(right_col_start)[0]
right_part2 = content.split(right_col_end)[1]

old_right_content = content.split(right_col_start)[1].split(right_col_end)[0]
new_right_content = f'''{right_col_start}
           {{selectedSection ? (
             <>
{old_right_content}
             </>
           ) : (
             <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
               <svg className="w-12 h-12 text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
               <h3 className="text-slate-400 font-semibold mb-2">Analysis Not Available</h3>
               <p className="text-slate-500 text-sm">Select a specific section from the Bill Structure to view detailed legal, policy, and impact analysis.</p>
             </div>
           )}}
        {right_col_end}'''

content = right_part1 + new_right_content + right_part2

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully refactored page.tsx")
