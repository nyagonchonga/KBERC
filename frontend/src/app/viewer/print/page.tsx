'use client';

import React from 'react';
import Link from 'next/link';
import { billData } from '../data';

type PrintBlock =
  | { type: 'title_page'; charCount: number }
  | { type: 'toc_header' }
  | { type: 'toc_part_chunk'; data: any; sec: any; isFirstChunk: boolean; isLastChunk: boolean }
  | { type: 'toc_schedules'; charCount: number }
  | { type: 'part_header'; data: any; showMainTitle: boolean }
  | { type: 'section_chunk'; data: any; text: string; isFirstChunk: boolean; isLastChunk: boolean }
  | { type: 'schedule_header'; data: any }
  | { type: 'schedule_chunk'; text: string; isFirstChunk: boolean; isLastChunk: boolean }
  | { type: 'kberc_master_schedule' };

export default function PrintViewer() {
  // Flatten the entire bill into renderable blocks
  const blocks: PrintBlock[] = [];
  
  // 1. Title Page Block
  blocks.push({
    type: 'title_page',
    charCount: 2000
  });

  // 2. Table of Contents
  blocks.push({ type: 'toc_header' });
  billData.structure.forEach(part => {
    part.sections.forEach((sec, i) => {
      blocks.push({ 
        type: 'toc_part_chunk', 
        data: part, 
        sec: sec,
        isFirstChunk: i === 0,
        isLastChunk: i === part.sections.length - 1
      });
    });
  });
  blocks.push({
    type: 'toc_schedules',
    charCount: 50 + (billData.schedules.length * 30)
  });

  // 3. Main Bill Blocks
  billData.structure.forEach((part, pIndex) => {
    blocks.push({
      type: 'part_header',
      data: part,
      showMainTitle: pIndex === 0
    });
    
    part.sections.forEach(sec => {
      const paragraphs = sec.bill_text.split('\n').filter(p => p.trim().length > 0);
      paragraphs.forEach((p, i) => {
        blocks.push({ 
            type: 'section_chunk', 
            data: sec, 
            text: p, 
            isFirstChunk: i === 0, 
            isLastChunk: i === paragraphs.length - 1
        });
      });
    });
  });

  // 4. Schedules
  billData.schedules.forEach(schedule => {
    blocks.push({ type: 'schedule_header', data: schedule });
    
    const paragraphs = schedule.content.split('\n').filter(p => p.trim().length > 0);
    paragraphs.forEach((p, i) => {
        blocks.push({ 
            type: 'schedule_chunk', 
            text: p, 
            isFirstChunk: i === 0, 
            isLastChunk: i === paragraphs.length - 1 
        });
    });
  });

  // 5. KBERC Master Statutory Sign-Offs Schedule (A4 Printable)
  blocks.push({ type: 'kberc_master_schedule' });

  // Pagination Engine (Height-based heuristic)
  const MM_TO_PX = 3.779527559; 
  const MAX_HEIGHT_PER_PAGE_MM = 245; 
  const MAX_HEIGHT_PER_PAGE = MAX_HEIGHT_PER_PAGE_MM * MM_TO_PX; 
  
  const pages: PrintBlock[][] = [];
  let currentPage: PrintBlock[] = [];
  let currentHeightScore = 0;

  blocks.forEach(block => {
    const isForcedBreak = block.type === 'title_page' || block.type === 'toc_header' || block.type === 'part_header' || block.type === 'schedule_header' || block.type === 'kberc_master_schedule';
    
    let blockHeight = 0;
    if (block.type === 'title_page') blockHeight = 1000;
    else if (block.type === 'toc_header') blockHeight = 60;
    else if (block.type === 'toc_part_chunk') {
       const lines = Math.max(1, Math.ceil(block.sec.title.length / 90));
       blockHeight = (lines * 20) + 8;
       if (block.isFirstChunk) {
           const titleStr = block.data.part + "—" + block.data.title;
           const titleLines = Math.max(1, Math.ceil(titleStr.length / 105));
           blockHeight += (titleLines * 20) + 16;
       }
       if (block.isLastChunk) blockHeight += 24;
    }
    else if (block.type === 'toc_schedules') blockHeight = 60 + (billData.schedules.length * 20);
    else if (block.type === 'part_header') blockHeight = block.showMainTitle ? 200 : 100;
    else if (block.type === 'section_chunk') {
       const lines = Math.max(1, Math.ceil(block.text.length / 85));
       blockHeight = (lines * 20) + 8;
       if (block.isFirstChunk) blockHeight += 32; 
       if (block.isLastChunk) blockHeight += 24; 
    }
    else if (block.type === 'schedule_header') blockHeight = 80;
    else if (block.type === 'schedule_chunk') {
       const lines = Math.max(1, Math.ceil(block.text.length / 105));
       blockHeight = (lines * 20) + 8;
       if (block.isLastChunk) blockHeight += 16;
    }
    else if (block.type === 'kberc_master_schedule') blockHeight = 1000;

    if ((currentHeightScore + blockHeight > MAX_HEIGHT_PER_PAGE && currentPage.length > 0) || isForcedBreak) {
      if (currentPage.length > 0) {
        pages.push(currentPage);
        currentPage = [];
        currentHeightScore = 0;
      }
    }
    
    currentPage.push(block);
    currentHeightScore += blockHeight;
  });
  
  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  const kbercScheduleRows = [
    { form: "Form KBERC-1", level: "Stage 0: Sub-grade Soil (-12m)", disc: "Geotechnical Specialist & Planner", risk: "Classes A to E (Peer review for D & E)", tests: "Borehole sampling, SPT N-values, water table audit", penalty: "Fines up to KES 5M / Section 154" },
    { form: "Form KBERC-1A", level: "Stage 1: Piling & Retaining Walls", disc: "Structural Specialist (Sec 36) & CPM", risk: "Classes C, D & E", tests: "Concrete cube crush test, sonic PIT pile test, anchor pull test", penalty: "Immediate Stop-Work Order" },
    { form: "Form KBERC-2", level: "Stage 2: Ground Slab & Tanking", disc: "Lead Architect, Civil Eng & Landscape", risk: "Classes A to E", tests: "Hydrostatic membrane test, 95% MDD soil compaction, termite audit", penalty: "KES 1,000,000 fine / Section 158" },
    { form: "Form KBERC-3", level: "Stage 3: Superstructure RC Frame", disc: "Structural Eng, Architect, QS & CPM", risk: "Classes B, C, D & E", tests: "28-day cube strength (C25/30), rebar tensile test, plumb laser check", penalty: "Deregistration & Prosecution" },
    { form: "Form KBERC-3A", level: "Stage 4: Steel Trusses & PT Slabs", disc: "Structural Specialist & Technologist", risk: "Classes D & E", tests: "Ultrasonic NDT weld test, PT cable tension log, intumescent firepaint", penalty: "KES 3,000,000 fine / Section 159" },
    { form: "Form KBERC-4", level: "Stage 5: Facade & Roof Deck", disc: "Architect, Facade Specialist & QS", risk: "Classes B to E", tests: "ASTM E1105 water jet test, 48-hr roof flood test, wind anchor pull test", penalty: "KES 2,500,000 fine / Section 156" },
    { form: "Form KBERC-5", level: "Stage 6: MEP Shafts & Electrical", disc: "Electrical Eng, Mechanical Eng & QS", risk: "Classes A to E", tests: "Megger 1000V insulation test, 10-bar pipe pressure test, HVAC CFM audit", penalty: "License Suspension / Section 62" },
    { form: "Form KBERC-5A", level: "Stage 7: Fire Safety & Sprinklers", disc: "Fire Safety Specialist & Interior Designer", risk: "Classes C, D & E", tests: "1000 GPM fire pump flow test, 50 Pa smoke extraction, 2-hr fire door seal", penalty: "5 Yrs Prison / Section 160" },
    { form: "Form KBERC-5B", level: "Stage 8: PWD Access & Lifts", disc: "Lead Architect & Interior Designer", risk: "Classes B to E", tests: "1:12 ramp slope clinometer audit, lift 125% load brake drop test", penalty: "KES 50,000 daily fine / Sec 113" },
    { form: "Form KBERC-6", level: "Stage 9: Certificate of Occupancy", disc: "County Desk Officer & Lead Architect", risk: "Classes A to E (100% Mandatory)", tests: "Verification across Forms KBERC-1 to 5B, QR Seal audit, PII policy check", penalty: "Building Seizure & Prosecution" }
  ];

  return (
    <div className="bg-slate-200 min-h-screen py-8 print:bg-white print:py-0 font-serif text-black">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        
        @page {
          size: A4 portrait;
          margin: 0;
        }

        .a4-page {
          width: 210mm;
          height: 297mm;
          box-sizing: border-box;
          background: white;
          margin: 0 auto 2rem auto;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          position: relative;
          padding: 25mm 20mm 25mm 25mm; 
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        @media print {
          .no-print {
            display: none !important;
          }
          .a4-page {
            margin: 0;
            box-shadow: none;
            page-break-after: always;
            height: 297mm;
          }
          body {
            background: white;
          }
        }
      `}} />

      {/* Floating Action Controls */}
      <div className="no-print fixed top-6 right-6 z-50 flex items-center gap-3 bg-slate-900/90 text-white p-3 rounded-xl shadow-2xl backdrop-blur-md border border-slate-700">
        <div className="px-3 border-r border-slate-700 text-xs">
          <span className="text-slate-400 block text-[10px] uppercase font-mono">Document Size</span>
          <span className="font-bold text-red-700">A4 Portrait ({pages.length} Pages)</span>
        </div>
        
        <button 
          onClick={() => window.print()}
          className="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-xs transition flex items-center gap-2 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print Official Gazette Copy
        </button>

        <Link 
          href="/viewer"
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-2 rounded-lg text-xs transition"
        >
          Close Print View
        </Link>
      </div>

      {/* Render Pages */}
      {pages.map((pageBlocks, pageIndex) => (
        <div key={pageIndex} className="a4-page">
          
          {/* Header */}
          {pageIndex > 0 && (
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-slate-300 pb-2 mb-4 uppercase tracking-wider">
              <span>{billData.metadata.short_title} • National Assembly Bill No. 12 of 2026</span>
              <span>Official Print Edition</span>
            </div>
          )}

          {/* Page Content */}
          <div className="flex-1 text-[11px] leading-[1.6] text-slate-900 font-serif">
            {pageBlocks.map((block, bIdx) => {
              if (block.type === 'title_page') {
                return (
                  <div key={bIdx} className="h-full flex flex-col justify-between text-center pt-8 pb-4">
                    <div className="space-y-4">
                      <div className="font-mono text-xs tracking-widest text-slate-600 uppercase">REPUBLIC OF KENYA</div>
                      <div className="font-mono text-sm tracking-widest text-slate-900 font-bold uppercase">KENYA GAZETTE SUPPLEMENT</div>
                      <div className="text-xs italic text-slate-600">NATIONAL ASSEMBLY BILLS, 2026</div>
                      <div className="w-16 h-0.5 bg-slate-900 mx-auto my-6"></div>
                      <div className="text-xs font-mono text-slate-600">NAIROBI, 14th March, 2026</div>
                    </div>

                    <div className="my-auto py-12 space-y-6">
                      <h1 className="text-2xl font-bold font-serif leading-snug tracking-tight text-slate-950 uppercase max-w-lg mx-auto">
                        {billData.metadata.title}
                      </h1>
                      <div className="text-xs font-mono text-slate-700 tracking-wider">
                        (NATIONAL ASSEMBLY BILL NO. 12 OF 2026)
                      </div>
                      <div className="w-24 h-1 bg-slate-900 mx-auto my-6"></div>
                      <div className="text-xs italic max-w-md mx-auto text-slate-700 leading-relaxed font-sans">
                        "{billData.preamble}"
                      </div>
                    </div>

                    <div className="border-t border-slate-300 pt-6 font-mono text-[10px] text-slate-600 space-y-1">
                      <div>Sponsor: <span className="font-bold text-slate-900">{billData.metadata.sponsor}</span></div>
                      <div>Date of Publication: <span className="font-bold text-slate-900">{billData.metadata.date}</span></div>
                      <div>PRINTED AND PUBLISHED BY THE GOVERNMENT PRINTER, NAIROBI</div>
                    </div>
                  </div>
                );
              }

              if (block.type === 'toc_header') {
                return (
                  <div key={bIdx} className="mb-4">
                    <h2 className="text-base font-bold font-mono uppercase tracking-wider text-center border-b-2 border-slate-900 pb-2 mb-4">
                      ARRANGEMENT OF CLAUSES
                    </h2>
                  </div>
                );
              }

              if (block.type === 'toc_part_chunk') {
                return (
                  <div key={bIdx}>
                    {block.isFirstChunk && (
                      <div className="font-mono text-[11px] font-bold text-slate-900 uppercase tracking-wider mt-3 mb-1 border-b border-slate-200 pb-0.5">
                        {block.data.part} — {block.data.title}
                      </div>
                    )}
                    <div className="flex justify-between items-baseline text-[10px] font-mono py-0.5 border-b border-slate-100 dotted">
                      <span className="text-slate-700 font-semibold">{block.sec.sec} — {block.sec.title}</span>
                      <span className="text-slate-400">...........................................................................................</span>
                    </div>
                  </div>
                );
              }

              if (block.type === 'toc_schedules') {
                return (
                  <div key={bIdx} className="mt-4 pt-3 border-t-2 border-slate-900">
                    <div className="font-mono text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                      SCHEDULES
                    </div>
                    {billData.schedules.map((sch, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-baseline text-[10px] font-mono py-0.5">
                        <span className="text-slate-700 font-semibold">Schedule {sIdx + 1} — {sch.title}</span>
                        <span className="text-slate-400">...........................................................................................</span>
                      </div>
                    ))}
                  </div>
                );
              }

              if (block.type === 'part_header') {
                return (
                  <div key={bIdx} className="text-center my-6 pt-4 border-t border-slate-300">
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-700">
                      {block.data.part}
                    </div>
                    <h2 className="text-base font-bold uppercase tracking-wide text-slate-900 mt-1">
                      {block.data.title}
                    </h2>
                  </div>
                );
              }

              if (block.type === 'section_chunk') {
                return (
                  <div key={bIdx} className="mb-2">
                    {block.isFirstChunk && (
                      <div className="font-bold text-slate-900 font-sans text-xs mb-1">
                        {block.data.sec}. {block.data.title}
                      </div>
                    )}
                    <p className="text-justify text-[11px] leading-relaxed indent-4">
                      {block.text}
                    </p>
                  </div>
                );
              }

              if (block.type === 'schedule_header') {
                return (
                  <div key={bIdx} className="text-center my-6 pt-6 border-t-2 border-slate-900">
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-800">
                      {block.data.id}
                    </div>
                    <h2 className="text-sm font-bold uppercase text-slate-900 mt-1">
                      {block.data.title}
                    </h2>
                  </div>
                );
              }

              if (block.type === 'schedule_chunk') {
                return (
                  <div key={bIdx} className="mb-2">
                    <p className="text-justify text-[10.5px] leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                );
              }

              if (block.type === 'kberc_master_schedule') {
                return (
                  <div key={bIdx} className="pt-4 border-t-2 border-slate-900 mt-4">
                    <div className="text-center mb-4">
                      <span className="font-mono text-[10px] font-bold text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200 uppercase tracking-widest">
                        STATUTORY ENFORCEMENT REGISTER • SECTIONS 106–115 &amp; SCHEDULE 4
                      </span>
                      <h2 className="text-sm font-bold uppercase text-slate-950 mt-2 font-mono">
                        MASTER SCHEDULE OF KBERC STATUTORY SIGN-OFFS (FORMS KBERC-1 TO KBERC-6)
                      </h2>
                    </div>

                    <table className="w-full border-collapse border border-slate-400 text-[9.5px] font-sans">
                      <thead>
                        <tr className="bg-slate-800 text-white text-[9px] uppercase tracking-wider">
                          <th className="p-2 border border-slate-400 text-left">Form</th>
                          <th className="p-2 border border-slate-400 text-left">Stage Level</th>
                          <th className="p-2 border border-slate-400 text-left">Sign-Off Discipline</th>
                          <th className="p-2 border border-slate-400 text-left">Risk Class</th>
                          <th className="p-2 border border-slate-400 text-left">Required Tests</th>
                          <th className="p-2 border border-slate-400 text-left">Penalty Scale</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kbercScheduleRows.map((r, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="p-1.5 border border-slate-300 font-bold text-red-800">{r.form}</td>
                            <td className="p-1.5 border border-slate-300 font-semibold">{r.level}</td>
                            <td className="p-1.5 border border-slate-300">{r.disc}</td>
                            <td className="p-1.5 border border-slate-300 font-bold text-purple-800">{r.risk}</td>
                            <td className="p-1.5 border border-slate-300">{r.tests}</td>
                            <td className="p-1.5 border border-slate-300 font-bold text-red-700">{r.penalty}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-slate-300 pt-2 mt-4">
            <span>Official Bill Document • Parliament of Kenya</span>
            <span>Page {pageIndex + 1} of {pages.length}</span>
          </div>

        </div>
      ))}

    </div>
  );
}
