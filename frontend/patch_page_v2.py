import sys

file_path = r'C:\Users\nyago\.gemini\antigravity-ide\scratch\k-belir-platform\frontend\src\app\viewer\read\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update State variables
old_state = '''  // Default to the first section
  const [selectedSection, setSelectedSection] = useState<SectionData | null>(billData.structure[0].sections[0]);
  const [activeSchedule, setActiveSchedule] = useState<any>(null);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<AnalysisTab>("Overview");'''
new_state = '''  // Default to the first section
  const [showFrontMatter, setShowFrontMatter] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SectionData | null>(billData.structure[0].sections[0]);
  const [activeSchedule, setActiveSchedule] = useState<any>(null);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<AnalysisTab>("Overview");'''

if 'const [showFrontMatter' not in content:
    content = content.replace(old_state, new_state)


# 2. Update toggle logic in sidebar
old_sec_click = '''onClick={() => {
                          setSelectedSection(section);
                          setActiveSchedule(null);
                        }}'''
new_sec_click = '''onClick={() => {
                          setShowFrontMatter(false);
                          setSelectedSection(section);
                          setActiveSchedule(null);
                        }}'''
content = content.replace(old_sec_click, new_sec_click)

old_sched_click = '''onClick={() => {
                     setSelectedSection(null);
                     setActiveSchedule(schedule);
                   }}'''
new_sched_click = '''onClick={() => {
                     setShowFrontMatter(false);
                     setSelectedSection(null);
                     setActiveSchedule(schedule);
                   }}'''
content = content.replace(old_sched_click, new_sched_click)

# 3. Add Front Matter Button
nav_start = '''          <nav className="flex-1 overflow-y-auto p-4 space-y-2">'''
if 'Front Matter Button' not in content:
    nav_new = '''          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {/* Front Matter Button */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setShowFrontMatter(true);
                  setSelectedSection(null);
                  setActiveSchedule(null);
                }}
                className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                  showFrontMatter ? 'bg-emerald-900/20 border border-emerald-900/50' : 'hover:bg-slate-800'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold transition-colors ${showFrontMatter ? 'text-emerald-400' : 'text-slate-300 group-hover:text-emerald-400'}`}>Front Matter</span>
                  <span className={`text-xs font-bold ${showFrontMatter ? 'text-emerald-600' : 'text-slate-500 group-hover:text-slate-400'}`}>Title Page & Contents</span>
                </div>
              </button>
            </div>
            '''
    content = content.replace(nav_start, nav_new)


# 4. Replace Pagination logic and Center Column
center_col_start = '''  // --- Pagination Engine for Active View ---'''
center_col_end = '''          {/* Floating Actions */}'''

center_part1 = content.split(center_col_start)[0]
center_part2 = content.split(center_col_end)[1]

new_center_col = '''  // --- Pagination Engine for Active View ---
  const blocks: any[] = [];
  
  if (showFrontMatter) {
    blocks.push({ type: 'title_page' });
    blocks.push({ type: 'toc_header' });
    billData.structure.forEach(part => {
      blocks.push({ type: 'toc_part', data: part });
    });
    blocks.push({ type: 'toc_schedules' });
  } else if (selectedSection) {
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
  
  const pages: any[][] = [];
  let currentPage: any[] = [];
  let currentHeightScore = 0;

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
      pages.push(currentPage);
      currentPage = [];
      currentHeightScore = 0;
    }
    
    currentPage.push(block);
    currentHeightScore += blockHeight;
  });
  
  if (currentPage.length > 0) pages.push(currentPage);
  // -----------------------------------------

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      
      {/* Top Header */}
      <header className="absolute top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-4">
          <Link href="/viewer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Dashboard
          </Link>
          <div className="h-6 w-px bg-slate-700"></div>
          <div>
            <h1 className="font-bold text-slate-100 text-sm tracking-widest uppercase">The Built Environment Professions and Practice Bill, 2026</h1>
            <div className="text-xs text-emerald-500 font-bold tracking-widest uppercase mt-0.5">Proposed Bill</div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex mt-16 h-[calc(100vh-4rem)]">
        
        {/* Left Sidebar: Bill Structure */}
        <aside className="w-[350px] flex-none bg-slate-900 border-r border-slate-800 flex flex-col z-20 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.2)]">
          <div className="p-4 border-b border-slate-800 bg-slate-900 shrink-0">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Bill Structure</h2>
            <p className="text-xs text-slate-400">Navigate 20 Parts and 8 Schedules</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {/* Front Matter Button */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setShowFrontMatter(true);
                  setSelectedSection(null);
                  setActiveSchedule(null);
                }}
                className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                  showFrontMatter ? 'bg-emerald-900/20 border border-emerald-900/50' : 'hover:bg-slate-800'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold transition-colors ${showFrontMatter ? 'text-emerald-400' : 'text-slate-300 group-hover:text-emerald-400'}`}>Front Matter</span>
                  <span className={`text-xs font-bold ${showFrontMatter ? 'text-emerald-600' : 'text-slate-500 group-hover:text-slate-400'}`}>Title Page & Contents</span>
                </div>
              </button>
            </div>
            
            {billData.structure.map((partDef) => (
              <div key={partDef.part} className="mb-2">
                <button
                  onClick={() => togglePart(partDef.part)}
                  className="w-full text-left flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 group-hover:text-slate-400">{partDef.part}</span>
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors line-clamp-1">{partDef.title}</span>
                  </div>
                  <svg className={`w-4 h-4 text-slate-600 transition-transform ${expandedParts.includes(partDef.part) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                {expandedParts.includes(partDef.part) && (
                  <div className="mt-1 ml-4 border-l border-slate-700/50 pl-2 space-y-1 pb-2">
                    {partDef.sections.map((section) => (
                      <button
                        key={section.section}
                        onClick={() => {
                          setShowFrontMatter(false);
                          setSelectedSection(section);
                          setActiveSchedule(null);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                          selectedSection?.section === section.section 
                            ? 'bg-emerald-900/20 text-emerald-400 font-medium border border-emerald-900/50' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                        }`}
                      >
                        <span className="text-xs opacity-50 mr-2">{section.section}.</span>
                        {section.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Schedules Section */}
            <div className="mt-4 pt-4 border-t border-slate-800">
               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 px-3">Schedules</h3>
               {billData.schedules.map((schedule, index) => (
                 <button 
                   key={index} 
                   className={`w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors rounded-lg line-clamp-1 ${activeSchedule === schedule ? 'bg-slate-800 text-slate-200' : ''}`}
                   onClick={() => {
                     setShowFrontMatter(false);
                     setSelectedSection(null);
                     setActiveSchedule(schedule);
                   }}
                 >
                   {schedule.title}
                 </button>
               ))}
            </div>
          </nav>
        </aside>

        {/* Center Column: Formal Bill Text */}
        <section className="flex-1 bg-slate-950 overflow-y-auto border-r border-slate-800 flex flex-col items-center py-12 relative shadow-inner space-y-8">
          
          <style dangerouslySetInnerHTML={{__html: `
            .a4-page {
              width: 210mm;
              height: 297mm;
              max-height: 297mm;
              box-sizing: border-box;
              padding: 25mm 20mm;
              margin: 0 auto 20mm auto;
              background: white;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
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
              top: 15mm;
              left: 20mm;
              right: 20mm;
              border-bottom: 2px solid #cbd5e1;
              padding-bottom: 3mm;
              display: flex;
              justify-content: space-between;
              font-size: 9px;
              text-transform: uppercase;
              color: #64748b;
              font-family: sans-serif;
              letter-spacing: 0.1em;
              font-weight: 700;
            }
            .page-footer {
              position: absolute;
              bottom: 15mm;
              left: 20mm;
              right: 20mm;
              border-top: 1px solid #cbd5e1;
              padding-top: 4mm;
              display: flex;
              justify-content: space-between;
              font-size: 10px;
              color: #64748b;
              font-family: sans-serif;
              letter-spacing: 0.05em;
            }
          `}} />

          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="a4-page">
              <div className="page-header">
                 <span>Draft Document</span>
                 <span>The Kenya Built Environment Regulatory Council Bill, 2026</span>
              </div>
              
              <div className="page-content">
                {page.map((block, blockIndex) => {
                  if (block.type === 'title_page') {
                    return (
                      <div key={blockIndex} className="h-[247mm] flex flex-col items-center justify-center text-center">
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
                          {sec.bill_text.split('\\n').map((p: string, i: number) => (
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
                <div>
                   {showFrontMatter 
                     ? 'Preliminary' 
                     : selectedSection 
                         ? billData.structure.find(p => p.sections.some(s => s.section === selectedSection.section))?.part 
                         : activeSchedule?.title.split('—')[0]
                   }
                </div>
                <div>Page {pageIndex + 1}</div>
              </div>
            </div>
          ))}
          
          {/* Floating Actions */}'''

content = center_part1 + new_center_col + center_part2

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully applied V2 patch")
