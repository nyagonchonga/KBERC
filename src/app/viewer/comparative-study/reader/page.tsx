'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type UserMode = 'All' | 'Architect' | 'Lawyer' | 'Sponsor';

export default function ComparativeStudyA4Reader() {
  const [activeMode, setActiveMode] = useState<UserMode>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleExportPdf = async () => {
    try {
      setIsExporting(true);
      const html2canvasProModule = await import('html2canvas-pro');
      const html2canvasPro = html2canvasProModule.default || html2canvasProModule;
      const { jsPDF } = await import('jspdf');

      const container = document.getElementById('a4-critique-pages-container');
      if (!container) {
        setIsExporting(false);
        return;
      }

      const pageElements = container.querySelectorAll('.a4-sheet-canvas');
      if (!pageElements || pageElements.length === 0) {
        setIsExporting(false);
        return;
      }

      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

      for (let i = 0; i < pageElements.length; i++) {
        const pageEl = pageElements[i] as HTMLElement;
        const canvas = await html2canvasPro(pageEl, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      }

      pdf.save('A_and_QS_Practitioners_Bill_2026_Section_by_Section_Legal_Critique_A4.pdf');
    } catch (err) {
      console.error('PDF Export failed:', err);
      window.print();
    } finally {
      setIsExporting(false);
    }
  };

  const scrollToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById(`a4-sheet-${pageNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navIndex = [
    { page: 1, title: "Title Page & Gazette Metadata", part: "Front Matter" },
    { page: 2, title: "1. Executive Profile & 10 Governance Pillars", part: "Overview" },
    { page: 3, title: "2. Part I (Preliminary) & Part II (Board & CEO)", part: "Section-by-Section" },
    { page: 4, title: "2. Part III (Finance) & Part IV (2-Tier Degrees)", part: "Section-by-Section" },
    { page: 5, title: "2. Part V (Licensing) & Part VI (Inspections & Seals)", part: "Section-by-Section" },
    { page: 6, title: "2. Part VII (Offences) & Part VIII (Disciplinary Panels)", part: "Section-by-Section" },
    { page: 7, title: "2. Part IX (Scale of Fees) & Part X (Repeals)", part: "Section-by-Section" },
    { page: 8, title: "3. The Schedule: 4-Member Quorum Trap Autopsy", part: "Schedules" },
    { page: 9, title: "4. Memorandum: Rebuttal of the Offshoot Theory", part: "Memorandum" },
    { page: 10, title: "5.1 Association Disenfranchisement Matrix", part: "Stress-Test" },
    { page: 11, title: "5.1.3 Clause 24 Anatomy & Technical Colleges Model", part: "Stress-Test" },
    { page: 12, title: "5.2–5.5 Insurance, TVET Ladders & QCBS Fees", part: "Stress-Test" },
    { page: 13, title: "6. 6 Missed Opportunities & 7. 6 Backlashes", part: "Risks & Gaps" },
    { page: 14, title: "8. Parliamentary Status & 9. Master Bibliography", part: "Status & Records" },
    { page: 15, title: "10. Roadmap & 11. In-Bill Structural Hardening (7 Safeguards)", part: "In-Bill Solutions" },
    { page: 16, title: "12. References & Authorities Cited (28 Citations)", part: "Endnotes" },
    { page: 17, title: "Appendix A: K-BERC Master Statutory Sign-Off Schedule", part: "Schedules" },
    { page: 18, title: "Appendix B: Multi-Professional Governance Matrix", part: "Comparative" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      {/* Top Controls Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/viewer/comparative-study"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold border border-slate-700 transition-colors"
          >
            <span>⬅️</span>
            <span>Back to Interactive Viewer</span>
          </Link>
          <div className="h-4 w-px bg-slate-700 hidden sm:block" />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs border border-slate-700"
            title="Toggle Table of Contents"
          >
            {sidebarOpen ? '◀ Hide Index' : '▶ Show Index'}
          </button>
          <div className="flex items-center gap-2">
            <span className="bg-purple-950 text-purple-300 border border-purple-800/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
              A4 Treatise
            </span>
            <span className="text-xs font-bold text-slate-200 hidden md:inline truncate max-w-[280px]">
              A&QS Bill 2026 Legal Critique
            </span>
          </div>
        </div>

        {/* Center: Role Switcher & Zoom */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800 text-[11px]">
            {(['All', 'Architect', 'Lawyer', 'Sponsor'] as UserMode[]).map(m => (
              <button
                key={m}
                onClick={() => setActiveMode(m)}
                className={`px-2.5 py-1 rounded transition-all font-medium ${
                  activeMode === m
                    ? m === 'Architect' ? 'bg-amber-600 text-white font-bold'
                    : m === 'Lawyer' ? 'bg-purple-600 text-white font-bold'
                    : m === 'Sponsor' ? 'bg-red-600 text-white font-bold'
                    : 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {m === 'All' ? 'All Roles' : m === 'Architect' ? '📐 Architect' : m === 'Lawyer' ? '⚖️ Counsel' : '🏛️ Sponsor'}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700 text-xs">
            <button
              onClick={() => setZoomLevel(Math.max(60, zoomLevel - 15))}
              className="text-slate-400 hover:text-white font-bold px-1"
              title="Zoom Out"
            >
              -
            </button>
            <span className="font-mono text-[11px] text-slate-200 min-w-[36px] text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(Math.min(150, zoomLevel + 15))}
              className="text-slate-400 hover:text-white font-bold px-1"
              title="Zoom In"
            >
              +
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="text-[10px] text-slate-400 hover:text-slate-200 ml-1 underline"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right: PDF Export & Print */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportPdf}
            disabled={isExporting}
            className="px-3.5 py-1.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-bold rounded shadow-md flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            title="Download multi-page A4 PDF"
          >
            <span>{isExporting ? '⏳' : '📥'}</span>
            <span className="hidden sm:inline">{isExporting ? 'Exporting PDF...' : 'Export PDF'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded border border-slate-700 flex items-center gap-1.5"
            title="Open browser print dialog"
          >
            <span>🖨️</span>
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Navigation Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 overflow-hidden shadow-2xl">
            <div className="p-3 border-b border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                A4 Critique Page Navigator (18 Sheets)
              </div>
              <input
                type="text"
                placeholder="Search clauses, topics or cases..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {navIndex
                .filter(n => searchQuery === '' || n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.part.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(n => (
                  <button
                    key={n.page}
                    onClick={() => scrollToPage(n.page)}
                    className={`w-full text-left p-2 rounded text-xs flex items-start gap-2.5 transition-all ${
                      currentPage === n.page
                        ? 'bg-purple-950/80 border border-purple-800 text-purple-200 font-semibold shadow-xs'
                        : 'hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                      currentPage === n.page ? 'bg-purple-800 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      P.{n.page}
                    </span>
                    <div className="truncate flex-1">
                      <div className="truncate font-medium">{n.title}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{n.part}</div>
                    </div>
                  </button>
                ))}
            </div>
          </aside>
        )}

        {/* Center: A4 Page Viewport */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-4 md:p-8 flex flex-col items-center gap-8">
          <div
            id="a4-critique-pages-container"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
            className="flex flex-col items-center gap-10 w-full max-w-[850px]"
          >
            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 1: TITLE PAGE & FORMAL PARLIAMENTARY METADATA
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-1" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[20mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-serif">
              {/* Official Border */}
              <div className="absolute inset-4 border-2 border-double border-slate-900 pointer-events-none" />

              {/* Header Crest Area */}
              <div className="text-center pt-6">
                <div className="text-sm font-bold tracking-[0.25em] text-slate-800 uppercase mb-1">
                  REPUBLIC OF KENYA
                </div>
                <div className="text-[11px] font-mono text-slate-600 tracking-wider uppercase mb-4">
                  THE NATIONAL ASSEMBLY • THIRTEENTH PARLIAMENT (FIFTH SESSION, 2026)
                </div>
                <div className="w-24 h-0.5 bg-slate-900 mx-auto mb-6" />
                
                <div className="bg-slate-100 p-3 border border-slate-300 rounded font-mono text-xs text-slate-800 mb-6 max-w-md mx-auto">
                  <strong>Kenya Gazette Supplement No. 184</strong><br />
                  (National Assembly Bills No. 47 of 2026)<br />
                  <span className="text-[10px] text-slate-600">Published: 22nd July, 2026 by the Government Printer, Nairobi</span>
                </div>

                <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-snug mb-3">
                  COMPREHENSIVE JURISTIC CRITIQUE &amp; SECTION-BY-SECTION FORENSIC AUDIT
                </h1>
                <h2 className="text-base text-purple-900 font-semibold italic mb-6">
                  The Architectural and Quantity Surveying Practitioners Bill, 2026
                </h2>

                <div className="inline-block bg-purple-950 text-purple-200 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide mb-8">
                  K-BERC LEGISLATIVE REFORM DOSSIER • PARLIAMENTARY SUBMISSION
                </div>
              </div>

              {/* Middle Overview Box */}
              <div className="font-sans text-xs bg-slate-50 p-5 border border-slate-300 rounded space-y-3 leading-relaxed">
                <h3 className="font-serif font-bold text-sm text-slate-900 border-b border-slate-200 pb-1">
                  EXECUTIVE CERTIFICATE OF JURISTIC AUDIT
                </h3>
                <p className="text-slate-700">
                  This document embodies a comprehensive clause-by-clause legal critique of National Assembly Bill No. 47 of 2026, evaluating its constitutional soundness under Articles 10, 24, 27, 36, 47, 185, 201, 227, and 232 of the Constitution of Kenya (2010).
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div><strong>Sponsoring Committee:</strong> Departmental Committee on Housing, Urban Planning and Public Works</div>
                  <div><strong>Committee Chair:</strong> Hon. Joseph K. Tonui, M.P.</div>
                  <div><strong>Target Professions:</strong> Architecture, QS, Landscape, Interior, CPM</div>
                  <div><strong>Proposed Substitute:</strong> K-BERC Collegiate Federation Model</div>
                </div>
              </div>

              {/* Running Footer */}
              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>REPUBLIC OF KENYA • BILL NO. 47 LEGAL CRITIQUE</span>
                <span>PAGE 1 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 2: EXECUTIVE CONTEXT & 10 GOVERNANCE PILLARS
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-2" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-4 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    1. Executive Legislative Profile &amp; Jurisprudential Context
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 1</span>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  The repeal of the 1934 Cap 525 is a critical legislative milestone. However, Bill No. 47 suffers from severe structural imbalances, executive overreach, and allied profession disenfranchisement that risk immediate constitutional invalidation.
                </p>

                {/* 6-Dimension Metric Radar Table */}
                <h3 className="font-bold text-slate-900 uppercase text-[11px] font-mono mb-2 flex items-center gap-1.5">
                  <span>📊</span> 6-DIMENSION JURISTIC PERFORMANCE SCORECARD
                </h3>
                <table className="w-full border-collapse border border-slate-300 text-[11px] mb-4">
                  <thead className="bg-slate-100 font-bold text-slate-800 text-[10px] uppercase">
                    <tr>
                      <th className="p-2 border border-slate-300 text-left">Regulatory Dimension</th>
                      <th className="p-2 border border-slate-300 text-center">Cap 525 (1934)</th>
                      <th className="p-2 border border-slate-300 text-center">Bill No. 47 (2026)</th>
                      <th className="p-2 border border-slate-300 text-center bg-purple-100 text-purple-950">K-BERC Model</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border font-semibold">1. Constitutional Soundness (2010)</td><td className="p-2 border text-center text-red-700 font-bold">15%</td><td className="p-2 border text-center text-amber-700 font-bold">45%</td><td className="p-2 border text-center text-emerald-800 font-bold bg-purple-50">98%</td></tr>
                    <tr><td className="p-2 border font-semibold">2. Multi-Disciplinary Equity</td><td className="p-2 border text-center text-red-700 font-bold">20%</td><td className="p-2 border text-center text-amber-700 font-bold">35%</td><td className="p-2 border text-center text-emerald-800 font-bold bg-purple-50">100%</td></tr>
                    <tr><td className="p-2 border font-semibold">3. Life-Safety &amp; Anti-Collapse Deterrence</td><td className="p-2 border text-center text-red-700 font-bold">25%</td><td className="p-2 border text-center text-amber-700 font-bold">50%</td><td className="p-2 border text-center text-emerald-800 font-bold bg-purple-50">95%</td></tr>
                    <tr><td className="p-2 border font-semibold">4. Judicial Durability &amp; Injunction Immunity</td><td className="p-2 border text-center text-red-700 font-bold">10%</td><td className="p-2 border text-center text-amber-700 font-bold">30%</td><td className="p-2 border text-center text-emerald-800 font-bold bg-purple-50">92%</td></tr>
                    <tr><td className="p-2 border font-semibold">5. Public Procurement Integrity (QCBS 80/20)</td><td className="p-2 border text-center text-red-700 font-bold">0%</td><td className="p-2 border text-center text-amber-700 font-bold">20%</td><td className="p-2 border text-center text-emerald-800 font-bold bg-purple-50">96%</td></tr>
                    <tr><td className="p-2 border font-semibold">6. Devolved County Integration</td><td className="p-2 border text-center text-red-700 font-bold">0%</td><td className="p-2 border text-center text-amber-700 font-bold">15%</td><td className="p-2 border text-center text-emerald-800 font-bold bg-purple-50">94%</td></tr>
                  </tbody>
                </table>

                {/* 10 Core Governance Pillars Comparison */}
                <h3 className="font-bold text-slate-900 uppercase text-[11px] font-mono mb-2 flex items-center gap-1.5">
                  <span>🏛️</span> THE 10 CORE GOVERNANCE PILLARS
                </h3>
                <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                    <strong>1. Council Structure:</strong> Bill 47 grants 63.6% hegemony to Architects &amp; QSs. K-BERC mandates equal 2 seats per 5 Colleges.
                  </div>
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                    <strong>2. Executive Role:</strong> Bill 47 grants CS 100% unilateral appointment. K-BERC mandates democratic peer secret ballot + 14-day deemed gazettement.
                  </div>
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                    <strong>3. Association Protection:</strong> Bill 47 eviscerates AAK/IQSK/IDAK. K-BERC enacts Clause 24A and the mandatory 80% CPD Rule.
                  </div>
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                    <strong>4. Quorum Safeguard:</strong> Bill 47 allows 4 members to control the board. K-BERC mandates an 8-member collegiate quorum.
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 2 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 3: SECTION 2: PARTS I & II (PRELIMINARY & THE BOARD)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-3" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    2. Section-by-Section Legal Analysis: Parts I &amp; II
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">CLAUSES 1–18</span>
                </div>

                {/* Part I Analysis */}
                <div className="mb-4">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-slate-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART I: PRELIMINARY (Clauses 1–4)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 1 (Short Title):</strong> Restricts statutory scope to <em>"Architectural and Quantity Surveying Practitioners"</em>, failing to reflect Landscape Architects, Interior Designers, and CPMs regulated in the substantive clauses.</p>
                    <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>Juristic Critique:</strong> Violates legislative titling standards by subordinating 3 out of 5 regulated professions, creating immediate title ambiguity and constitutional equality claims under Article 27.
                    </div>
                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Redraft:</strong> Amend to <em>"The Built Environment Professions and Practice Act, 2026"</em>.
                    </div>
                  </div>
                </div>

                {/* Part II Analysis */}
                <div className="mb-2">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-purple-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART II: THE BOARD &amp; CEO (Clauses 5–18)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 7 (Board Composition):</strong> 11-member board where 7 seats (63.6%) are allocated to traditional Architects and Quantity Surveyors, while 3 entire disciplines (Landscape, Interior, CPM) share a single token seat.</p>
                    
                    <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>The Hegemony &amp; Capture Trap:</strong> 100% of board members are directly appointed by the Cabinet Secretary without democratic election by registered practitioners. The CS also controls CEO recruitment under Clause 11, destroying regulatory independence.
                    </div>

                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Collegiate Council Formula (Clause 7 Redraft):</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5">
                        <li><strong>10 Peer-Elected College Seats:</strong> 2 Architects, 2 QSs, 2 Landscape, 2 Interior, 2 CPMs (secret ballot).</li>
                        <li><strong>1 Independent Chairperson:</strong> Appointed by CS from a competitive PSC shortlist.</li>
                        <li><strong>Ex-officio Public Seats:</strong> PS Public Works, Council of Governors rep, Attorney General / LSK counsel.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 3 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 4: SECTION 2: PARTS III & IV (FINANCE & REGISTRATION)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-4" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    2. Section-by-Section Legal Analysis: Parts III &amp; IV
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">CLAUSES 19–30</span>
                </div>

                {/* Part III Analysis */}
                <div className="mb-4">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-slate-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART III: FINANCIAL PROVISIONS (Clauses 19–21)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 19 (Funds of the Board):</strong> Relies solely on license fees and government grants. Fails to provide sustainable ring-fenced funding for county safety inspections or structural disaster audits.</p>
                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Redraft (Clause 19A):</strong> Enacts the <strong>0.1% Built Environment Safety Levy</strong> on major developments, ring-fencing 15% for conditional County ICT &amp; NDT diagnostic hardware grants.
                    </div>
                  </div>
                </div>

                {/* Part IV Analysis */}
                <div className="mb-2">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-purple-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART IV: REGISTRATION OF PRACTITIONERS (Clauses 22–30)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 22 (Registration Qualifications):</strong> Ambiguously requires a <em>"degree recognized by the Board"</em> without defining university curriculum standards, leaving 4-year Bachelor of Architectural Studies (BAS) vs 6-year B.Arch/M.Arch graduates in legal limbo.</p>

                    <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>The CUE Superior Court Precedent Clashes:</strong> In <em>CUE v. LSK &amp; others [2020] eKLR</em>, the Court of Appeal ruled that statutory boards cannot unilaterally reject or accredit university degrees; that mandate belongs exclusively to CUE.
                    </div>

                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC 3-Tier Registration &amp; TVET Ladder:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5">
                        <li><strong>RIBA / UNESCO Alignment:</strong> Tier 1: Candidate Architectural Assistant (BAS); Tier 2: Professional Graduate (M.Arch); Tier 3: Registered Architect (PPE).</li>
                        <li><strong>Clause 23A (TVET Bridging):</strong> 5-year apprenticeship ladder allowing KNQA Level 6 diploma holders to qualify for full PPE licensing.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 4 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 5: SECTION 2: PARTS V & VI (LICENSING & INSPECTIONS)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-5" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    2. Section-by-Section Legal Analysis: Parts V &amp; VI
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">CLAUSES 31–41</span>
                </div>

                {/* Part V Analysis */}
                <div className="mb-4">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-slate-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART V: LICENSING &amp; PRACTICE (Clauses 31–36)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 34 (Corporate Shareholding):</strong> Allows non-practitioners to own shares in architectural/QS firms without strict professional liability capping, risking commercial investor capture over life-safety decisions.</p>
                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Redraft:</strong> Mandates that not less than 51% (or 100% of voting shares) must be held by registered professionals in good standing, with mandatory Professional Indemnity Insurance (PII).
                    </div>
                  </div>
                </div>

                {/* Part VI Analysis */}
                <div className="mb-2">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-purple-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART VI: COMPLIANCE, INSPECTIONS &amp; ENFORCEMENT (Clauses 37–41)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 38 (Powers of Entry &amp; Inspection):</strong> Broad search and seizure powers on private property without Article 24 limitation framing, creating severe constitutional vulnerability under Article 31 (Privacy).</p>

                    <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>The Evidentiary Gap:</strong> Relies on manual paper inspections and physical ink rubber stamps that are easily forged or rented out by quacks without a digital audit trail.
                    </div>

                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Cryptographic QR Seal &amp; Single Window (Clause 38A):</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5">
                        <li><strong>Article 24 Compliance:</strong> Inspections strictly confined to active construction sites; occupied dwellings require court warrants.</li>
                        <li><strong>Cryptographic Digital QR Seal:</strong> Every approved drawing verified via real-time API synced to County e-Permit portals.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 5 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 6: SECTION 2: PARTS VII & VIII (OFFENCES & DISCIPLINE)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-6" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    2. Section-by-Section Legal Analysis: Parts VII &amp; VIII
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">CLAUSES 42–53</span>
                </div>

                {/* Part VII Analysis */}
                <div className="mb-4">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-slate-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART VII: OFFENCES &amp; PENALTIES (Clauses 42–49)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 43 &amp; 46 (Illegal Practice &amp; Proxy Stamping):</strong> Fines capped at KES 1,000,000, which developers view as a minor cost of doing business compared to multi-million shilling building revenues.</p>
                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Redraft:</strong> Imposes strict criminal liability for title theft (up to KES 5,000,000 fine / 5 years imprisonment) and permanent license cancellation for professional proxy stamping.
                    </div>
                  </div>
                </div>

                {/* Part VIII Analysis */}
                <div className="mb-2">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-purple-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART VIII: DISCIPLINARY PROCEEDINGS (Clauses 50–53)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 50 (Disciplinary Committee):</strong> Internal board panel dominated by traditional guilds sitting in judgment over allied professionals, violating the natural justice rule against bias (<em>nemo judex in causa sua</em>).</p>

                    <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>The High Court Injunction Paralysis:</strong> Practitioners facing suspension obtain <em>ex-parte</em> High Court stay orders, continuing active public practice for 5–10 years while disciplinary cases stall.
                    </div>

                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Fast-Track Tribunal &amp; Cash Stay Bonds (Clause 53A):</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5">
                        <li><strong>Built Environment Appeals Tribunal (BEAT):</strong> Delivers final binding appeals rulings within 60 days.</li>
                        <li><strong>Mandatory Cash Security Bond:</strong> Stay orders against safety suspensions barred unless the applicant deposits 100% structural indemnity cash into court escrow.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 6 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 7: SECTION 2: PARTS IX & X (REGULATIONS & TRANSITIONAL)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-7" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    2. Section-by-Section Legal Analysis: Parts IX &amp; X
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">CLAUSES 54–59</span>
                </div>

                {/* Part IX Analysis */}
                <div className="mb-4">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-slate-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART IX: GENERAL PROVISIONS &amp; REGULATIONS (Clauses 54–57)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 56 (Ministerial Regulation Powers &amp; Scale of Fees):</strong> Grants CS broad powers to issue fee guidelines, but fails to insulate fees from destructive public procurement undercutting under PPADA Section 86.</p>
                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Non-Obstante Override (Clause 56A):</strong>
                      <p className="mt-1">Overrides PPADA Section 86 lowest-bidder rules by mandating an <strong>80% Technical Quality / 20% Cost (QCBS)</strong> ratio and a <strong>70% Scale of Fees Quality Floor</strong> on all public tenders.</p>
                    </div>
                  </div>
                </div>

                {/* Part X Analysis */}
                <div className="mb-2">
                  <div className="bg-slate-100 px-2.5 py-1 border-l-4 border-purple-800 font-bold text-xs text-slate-900 uppercase font-mono mb-2">
                    PART X: REPEALS &amp; TRANSITIONAL PROVISIONS (Clauses 58–59)
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p><strong>Clause 58 &amp; 59 (Repeal of Cap 525 &amp; Savings):</strong> Abruptly repeals Cap 525 without clear grandfathering clauses for registered technicians, existing diploma holders, and active building plans currently under county review.</p>

                    <div className="p-2 bg-emerald-50 border-l-2 border-emerald-700 text-emerald-950">
                      <strong>K-BERC Seamless 24-Month Transition:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5">
                        <li>Full protection of vested practicing rights for all persons registered under Cap 525.</li>
                        <li>Automated migration of existing registers into the new K-BERC Digital Seal API within 90 days.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 7 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 8: THE SCHEDULE: 4-MEMBER QUORUM TRAP AUTOPSY
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-8" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    3. The Schedule: Forensic Autopsy of the Quorum Trap
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 3</span>
                </div>

                <div className="bg-red-950 text-white p-3 rounded mb-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-red-200 mb-1">
                    ⚠️ THE 4-MEMBER BOARDROOM CAPTURE LOOPHOLE
                  </h3>
                  <p className="text-[11px] leading-relaxed text-red-100">
                    Paragraph 2(1) of the First Schedule in Bill No. 47 sets the board quorum at a mere <strong>four (4) members</strong> out of eleven. This allows a tiny fraction to pass binding regulations, approve disciplinary suspensions, and control finances without a single elected practitioner present!
                  </p>
                </div>

                {/* Quorum Math Table */}
                <h4 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-2">
                  Voting Dynamics &amp; Quorum Exploitation Matrix
                </h4>
                <table className="w-full border-collapse border border-slate-300 text-[11px] mb-4">
                  <thead className="bg-slate-100 font-bold text-slate-800 text-[10px] uppercase">
                    <tr>
                      <th className="p-2 border text-left">Meeting Scenario</th>
                      <th className="p-2 border text-center">Members Present</th>
                      <th className="p-2 border text-center">Votes to Pass</th>
                      <th className="p-2 border text-left">Juristic Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-50 text-red-950">
                      <td className="p-2 border font-bold">Bill No. 47 Minimum Quorum</td>
                      <td className="p-2 border text-center font-bold">4 Members</td>
                      <td className="p-2 border text-center font-bold">3 Votes</td>
                      <td className="p-2 border text-[10.5px]">3 CS-appointed members can pass major industry regulations while 7 members are absent.</td>
                    </tr>
                    <tr className="bg-emerald-50 text-emerald-950">
                      <td className="p-2 border font-bold">K-BERC Reformed Quorum</td>
                      <td className="p-2 border text-center font-bold">8 Members (50%+1)</td>
                      <td className="p-2 border text-center font-bold">5 Votes</td>
                      <td className="p-2 border text-[10.5px]">Requires presence of at least 3 distinct College representatives, preventing boardroom capture.</td>
                    </tr>
                  </tbody>
                </table>

                <div className="p-3 bg-slate-50 border border-slate-300 rounded text-[11px] leading-relaxed space-y-2">
                  <h4 className="font-bold text-slate-900">Statutory Antidote: The K-BERC Collegiate Quorum Rule</h4>
                  <p>Paragraph 2(1) must be amended to mandate: <em>"The quorum for a meeting of the Council shall be not less than eight (8) members, including at least three (3) elected representatives of different constituent Colleges."</em></p>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 8 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 9: SECTION 4: MEMORANDUM & OFFSHOOT THEORY REBUTTAL
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-9" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    4. Memorandum of Objects: The "Offshoot Theory" Indictment
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 4</span>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  In its official <em>Memorandum of Objects and Reasons</em>, Bill No. 47 attempts to justify excluding Landscape Architects, Interior Designers, and CPMs by describing them as mere <em>"specialized offshoots"</em> of Architecture and Quantity Surveying.
                </p>

                <div className="bg-slate-100 p-4 border border-slate-300 rounded mb-4">
                  <h3 className="font-mono font-bold text-xs uppercase text-slate-900 mb-2">
                    JURISTIC REBUTTAL OF THE OFFSHOOT DOCTRINE
                  </h3>
                  <div className="space-y-2 text-[11px] leading-relaxed text-slate-800">
                    <p><strong>1. Academic Autonomy:</strong> Landscape Architecture, Interior Design, and Construction Project Management are independent, distinct disciplines accredited globally (IFLA, IFI, CIOB) and locally by CUE with distinct 4-year to 5-year degree curricula.</p>
                    <p><strong>2. Constitutional Violation (Article 27):</strong> Denying these independent degree holders co-equal voting dignity in their statutory regulator violates Article 27(4) (Freedom from Discrimination) and Article 10 (National Values of Inclusiveness).</p>
                    <p><strong>3. Practical Life-Safety Specialization:</strong> An architect is not trained in geotechnical landscape ecology, acoustic interior fire egress, or site safety administration; degrading these specialized experts compromises public safety.</p>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 border-l-4 border-purple-800 rounded text-[11px] text-purple-950 leading-relaxed">
                  <strong>The Federation Solution:</strong> K-BERC replaces the feudal "parent vs offshoot" hierarchy with a <strong>Co-Equal Collegiate Federation</strong> of 5 distinct spatial, cost, environmental, and management disciplines.
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 9 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 10: SECTION 5.1: ASSOCIATION DISENFRANCHISEMENT MATRIX
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-10" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    5.1 Association Disenfranchisement Matrix
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 5.1</span>
                </div>

                <p className="text-slate-700 mb-3 leading-relaxed">
                  In Kenyan administrative law, professional governance rests on a <strong>dual-pillar architecture</strong>: the Statutory Regulator (licensing &amp; public safety) co-exists with Independent Member Associations (advocacy, standard contracts, CPD).
                </p>

                {/* Institutional Profiles Table */}
                <table className="w-full border-collapse border border-slate-300 text-[10.5px] mb-3">
                  <thead className="bg-slate-100 font-bold text-slate-800 text-[9.5px] uppercase">
                    <tr>
                      <th className="p-1.5 border text-left">Association</th>
                      <th className="p-1.5 border text-center">Est.</th>
                      <th className="p-1.5 border text-left">Key Functions</th>
                      <th className="p-1.5 border text-left">Status under Bill 47 vs K-BERC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1.5 border font-bold">Architectural Association of Kenya (AAK)</td>
                      <td className="p-1.5 border text-center font-mono">1967</td>
                      <td className="p-1.5 border">8 Specialized Chapters; publishes Kenya's standard building contract.</td>
                      <td className="p-1.5 border text-[10px]"><span className="text-red-700 font-bold">Bill 47:</span> Stripped of all seats.<br /><span className="text-emerald-700 font-bold">K-BERC:</span> Statutory Co-Regulation (Clause 24A).</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">Institute of Quantity Surveyors of Kenya (IQSK)</td>
                      <td className="p-1.5 border text-center font-mono">1994</td>
                      <td className="p-1.5 border">Standard Methods of Measurement (SMM); Building Cost Index.</td>
                      <td className="p-1.5 border text-[10px]"><span className="text-red-700 font-bold">Bill 47:</span> Zero direct seats.<br /><span className="text-emerald-700 font-bold">K-BERC:</span> 80% CPD delegation rule.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">Interior Designers Association of Kenya (IDAK)</td>
                      <td className="p-1.5 border text-center font-mono">2013</td>
                      <td className="p-1.5 border">Interior life-safety egress standards &amp; acoustic specifications.</td>
                      <td className="p-1.5 border text-[10px]"><span className="text-red-700 font-bold">Bill 47:</span> 1 shared token seat.<br /><span className="text-emerald-700 font-bold">K-BERC:</span> 2 Dedicated College seats.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">Kenya Society of Environmental Landscape Architects (KSELA)</td>
                      <td className="p-1.5 border text-center font-mono">2008</td>
                      <td className="p-1.5 border">Urban green infrastructure &amp; environmental landscape specs.</td>
                      <td className="p-1.5 border text-[10px]"><span className="text-red-700 font-bold">Bill 47:</span> 1 shared token seat.<br /><span className="text-emerald-700 font-bold">K-BERC:</span> 2 Dedicated College seats.</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">Association of Construction Managers of Kenya (ACMK)</td>
                      <td className="p-1.5 border text-center font-mono">2014</td>
                      <td className="p-1.5 border">Site project administration, quality control &amp; safety coordination.</td>
                      <td className="p-1.5 border text-[10px]"><span className="text-red-700 font-bold">Bill 47:</span> 1 shared token seat.<br /><span className="text-emerald-700 font-bold">K-BERC:</span> 2 Dedicated College seats.</td>
                    </tr>
                  </tbody>
                </table>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-800 leading-relaxed">
                  <strong>The Statutory Co-Regulation Rule:</strong> K-BERC Clause 24A protects private associations from being marginalized by delegating 80% of mandatory CPD point administration directly to recognized bodies.
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 10 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 11: SECTION 5.1.3: CLAUSE 24 JURISTIC ANATOMY & TECHNICAL COLLEGES
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-11" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    5.1.3 Clause 24 Juristic Anatomy &amp; Technical Colleges Model
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 5.1.3</span>
                </div>

                <div className="bg-slate-100 p-3 border border-slate-300 rounded mb-3 font-mono text-[11px]">
                  <strong>Verbatim Clause 24 Text:</strong><br />
                  <em>"24. (1) The Board shall establish Chapters for each discipline of practitioners registered under this Act.<br />
                  (2) The Chapters established under subsection (1) shall be conducted in accordance with guidelines issued by the Board."</em>
                </div>

                <h3 className="font-bold text-slate-900 uppercase text-[11px] font-mono mb-2">
                  THE 4 INTERLOCKING STATUTORY &amp; ECONOMIC PRESSURES
                </h3>
                <div className="space-y-2 text-[11px] leading-relaxed mb-4">
                  <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                    <strong>1. Direct Nomenclature Collision with AAK:</strong> AAK has operated 8 Chapters since 1967. Creating state-run "Chapters" duplicates civil society under ministerial control.
                  </div>
                  <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                    <strong>2. CPD Monopolization &amp; Revenue Starvation:</strong> Read with Clauses 25(3)(b) &amp; 32(3)(c), the Board can monopolize CPDs internally, financially starving independent bodies.
                  </div>
                  <div className="p-2 bg-red-50 border-l-2 border-red-700 text-red-950">
                    <strong>3. Loss of Boardroom Democracy:</strong> Strips associations of statutory nomination rights while claiming to regulate their internal affairs.
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 border-l-4 border-emerald-800 rounded text-[11px] text-emerald-950 leading-relaxed">
                  <strong>The Statutory Redraft: Professional Disciplinary &amp; Technical Colleges (Clause 24A)</strong><br />
                  Rename internal regulatory divisions to <strong>"Technical Colleges"</strong> (confined to syllabus reviews and peer exams), while explicitly recognizing independent associations as statutory co-regulatory partners administering CPDs.
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 11 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 12: SECTIONS 5.2–5.5: INSURANCE, TVET & QCBS PROCUREMENT
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-12" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    5.2–5.5 Frontline Stress-Test: Insurance, TVET &amp; QCBS
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTIONS 5.2–5.5</span>
                </div>

                {/* 5.2 Decennial Defect Insurance */}
                <div className="mb-3">
                  <h3 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-1">
                    5.2 Mandatory 10-Year Decennial Defect Insurance &amp; Escrow (Clause 34B)
                  </h3>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Kenya's building collapses leave injured tenants and property buyers with zero compensation when fly-by-night developers dissolve shell companies. K-BERC mandates <strong>10-Year Decennial Structural Defect Insurance</strong> and a 5% structural warranty escrow on all commercial developments.
                  </p>
                </div>

                {/* 5.3 TVET Level 6-to-7 Apprenticeship Ladder */}
                <div className="mb-3">
                  <h3 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-1">
                    5.3 TVET KNQA Level 6-to-7 Career Bridging Ladder (Clause 23A)
                  </h3>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Over 50,000 national polytechnic architectural diploma holders are locked into career dead-ends. K-BERC operationalizes the <em>KNQF Act (No. 22 of 2014)</em> by allowing Level 6 diploma holders with 5 years of verified apprenticeship to sit the PPE for full licensing.
                  </p>
                </div>

                {/* 5.4 Scale of Fees & QCBS Public Procurement */}
                <div className="mb-2">
                  <h3 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-1">
                    5.4 Public Procurement: QCBS 80/20 &amp; 70% Quality Floor (Clause 56A)
                  </h3>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Section 86 of PPADA forces 80%–90% fee discounts, eliminating site inspection budgets. K-BERC enacts a <strong>statutory non-obstante override</strong> mandating an 80% Technical / 20% Cost evaluation ratio and disqualifying any bid below 70% of scale of fees.
                  </p>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 12 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 13: SECTIONS 6 & 7: MISSED OPPORTUNITIES & BACKLASHES
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-13" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    6. The 6 Missed Opportunities &amp; 7. The 6 Backlashes
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTIONS 6 &amp; 7</span>
                </div>

                {/* The 6 Missed Opportunities */}
                <div className="mb-4">
                  <h3 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-1 text-amber-900">
                    THE 6 HISTORIC MISSED OPPORTUNITIES IN BILL NO. 47
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded"><strong>1. Decennial Insurance:</strong> Zero structural defect protection.</div>
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded"><strong>2. TVET Articulation:</strong> Ignored 50,000+ diploma holders.</div>
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded"><strong>3. Digital Permitting API:</strong> Stuck in manual ink rubber stamps.</div>
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded"><strong>4. Association Co-Regulation:</strong> Stripped AAK/IQSK of partnership.</div>
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded"><strong>5. Fee Dumping Protection:</strong> Failed to override PPADA Section 86.</div>
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded"><strong>6. County Safety Grants:</strong> Starved 47 Counties of testing tools.</div>
                  </div>
                </div>

                {/* The 6 Unforeseen Backlashes */}
                <div>
                  <h3 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-1 text-red-900">
                    THE 6 CONSTITUTIONAL VULNERABILITIES &amp; BACKLASHES
                  </h3>
                  <div className="space-y-1.5 text-[10.5px]">
                    <div className="p-1.5 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>1. Article 27 Equality Lawsuits:</strong> High Court petitions from IDAK, KSELA, ACMK on 63.6% hegemony.
                    </div>
                    <div className="p-1.5 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>2. Article 24 Search Injunctions:</strong> Construction site search warrants quashed for lack of limitation framing.
                    </div>
                    <div className="p-1.5 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>3. Competition Authority Sanctions:</strong> Minimum fee schedules struck down as horizontal price-fixing.
                    </div>
                    <div className="p-1.5 bg-red-50 border-l-2 border-red-700 text-red-950">
                      <strong>4. County Devolution Resistance:</strong> Council of Governors refusing to enforce un-harmonized board permits.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 13 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 14: SECTIONS 8 & 9: PARLIAMENTARY STATUS & MASTER BIBLIOGRAPHY
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-14" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    8. Official Parliamentary Status &amp; 9. Master Bibliography
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTIONS 8 &amp; 9</span>
                </div>

                {/* Section 8: Parliamentary Status */}
                <div className="mb-4">
                  <div className="bg-purple-950 text-white p-3 rounded mb-2">
                    <h3 className="font-mono font-bold text-xs uppercase text-purple-200 mb-1">
                      ACTIVE LEGISLATIVE STATUS: 13TH PARLIAMENT (2026)
                    </h3>
                    <p className="text-[11px] text-purple-100 leading-relaxed">
                      National Assembly Bill No. 47 of 2026 is currently before the <strong>Departmental Committee on Housing, Urban Planning and Public Works</strong> undergoing public participation and stakeholder scrutiny.
                    </p>
                  </div>
                  <div className="text-[10.5px] text-slate-700 space-y-1">
                    <p>• <strong>Formal Petitions Filed:</strong> Joint Memorandum from IDAK, KSELA, ACMK challenging Clause 7 &amp; Clause 24 hegemony.</p>
                    <p>• <strong>Engineers Board (EBK) Advisory:</strong> Formal notice on inter-agency boundary overlaps under Cap 530.</p>
                    <p>• <strong>Council of Governors (CoG) Memo:</strong> Demand for county building control synchronization under Fourth Schedule.</p>
                  </div>
                </div>

                {/* Section 9: Master Bibliography */}
                <div>
                  <h3 className="font-bold font-mono text-[11px] text-slate-900 uppercase mb-2">
                    PRIMARY VERIFICATION ARCHIVES &amp; DISASTER REPORTS
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                      <strong>Huruma Commission Report (2016):</strong> Presidential taskforce identifying poor supervision &amp; quackery as cause of 85% of collapses.
                    </div>
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                      <strong>Kasarani Seasons Collapse (2022):</strong> NCA investigation proving absence of registered professionals on site.
                    </div>
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                      <strong>Kirigiti Collapse Audit (2022):</strong> 6-storey failure caused by substandard concrete &amp; unapproved drawings.
                    </div>
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                      <strong>Nairobi City e-DAMS Audit (2023):</strong> Urban planning report documenting proxy plan stamping.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 14 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 15: SECTION 11: IN-BILL STRUCTURAL HARDENING (7 SAFEGUARDS)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-15" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    11. In-Bill Structural Hardening: 7 Automated Safeguards
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 11</span>
                </div>

                <p className="text-slate-700 mb-3 leading-relaxed text-[11px]">
                  To prevent political deadlock and technological bottlenecks, K-BERC embeds <strong>7 self-executing statutory safeguards</strong> directly into the text of the Bill:
                </p>

                <div className="space-y-2 text-[10.5px]">
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>1. Clause 7A: 14-Day Deemed Gazettement:</strong> Independent electronic secret ballot; if CS fails to gazette winners in 14 days, they assume office automatically by operation of law.
                  </div>
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>2. Clauses 6A &amp; 56B: Free Cloud Gateway + 15% Grants:</strong> Free mobile verification portal for all 47 counties + 15% Safety Levy funding for county NDT testing equipment.
                  </div>
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>3. Clauses 5(4) &amp; 38A: Single-Window Recognition:</strong> Universal recognition across NCA/EBK/NEMA, banning double-taxation and synchronizing 24-hr stop-work notices.
                  </div>
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>4. Clause 24A: The 80% CPD Rule:</strong> Mandates that 80% of annual training must be administered through independent associations (AAK, IQSK, IDAK, KSELA, ACMK).
                  </div>
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>5. Clause 56A: QCBS 80/20 &amp; 70% Quality Floor:</strong> Non-obstante override of PPADA Section 86 lowest-bidder rules to guarantee adequate site supervision funds.
                  </div>
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>6. Clause 53A: The BEAT Fast-Track Tribunal:</strong> 60-day appeals clock + mandatory 100% cash indemnity stay bond for safety suspensions.
                  </div>
                  <div className="p-2 bg-purple-50 border-l-4 border-purple-800 rounded">
                    <strong>7. Clauses 23A &amp; 32A: TVET Bridging &amp; Social Housing Credits:</strong> KNQA Level 6-to-7 apprenticeship ladder + 50% CPD points for pro-bono slum upgrading design.
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 15 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 16: SECTION 12: REFERENCES & AUTHORITIES CITED (28 CITATIONS)
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-16" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    12. References &amp; Authorities Cited (Endnotes)
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SECTION 12</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[9.5px] leading-relaxed">
                  <div>
                    <h3 className="font-bold text-slate-900 uppercase font-mono mb-1 text-[10px]">
                      A. Statutes (Laws of Kenya)
                    </h3>
                    <ol className="list-decimal list-inside space-y-0.5 text-slate-700">
                      <li>A&amp;QS Practitioners Bill, 2026 (NA Bills No. 47).</li>
                      <li>Constitution of Kenya, 2010 (Arts. 10, 24, 27, 36, 47, 185, 201, 227).</li>
                      <li>Cap. 525 of 1934/1968.</li>
                      <li>Engineers Act (No. 43 of 2011, Cap. 530).</li>
                      <li>PLUPA (No. 13 of 2019).</li>
                      <li>NCA Act (No. 41 of 2011).</li>
                      <li>PPADA (No. 33 of 2015, Sec. 86).</li>
                      <li>Competition Act (No. 12 of 2010, Sec. 21).</li>
                      <li>Universities Act (No. 42 of 2012, Sec. 5A/28).</li>
                      <li>TVET Act (No. 29 of 2013).</li>
                      <li>KNQF Act (No. 22 of 2014 &amp; Regs 2018).</li>
                      <li>Statutory Instruments Act (No. 23 of 2013).</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 uppercase font-mono mb-1 text-[10px]">
                      B. Superior Court Case Law (eKLR)
                    </h3>
                    <ol start={13} className="list-decimal list-inside space-y-0.5 text-slate-700">
                      <li><em>EBK v. AG &amp; BORAQS [2018] eKLR</em> (Pet. 289/2018).</li>
                      <li><em>CUE v. LSK, EBK &amp; 7 others [2020] eKLR</em> (CA 408/2017).</li>
                      <li><em>Republic v. BORAQS Ex Parte [2017] eKLR</em> (JR 445/2017).</li>
                      <li><em>AAK &amp; BORAQS v. Nairobi City [2021] eKLR</em> (Pet. 112/2019).</li>
                    </ol>

                    <h3 className="font-bold text-slate-900 uppercase font-mono mt-2 mb-1 text-[10px]">
                      C. Government Disaster Reports
                    </h3>
                    <ol start={17} className="list-decimal list-inside space-y-0.5 text-slate-700">
                      <li>Huruma Commission Report (2016).</li>
                      <li>Kasarani Collapse Report (NCA 2022).</li>
                      <li>Ruaka Collapse Report (NCA 2022).</li>
                      <li>Kirigiti Collapse Audit (NCA 2022).</li>
                      <li>Nairobi e-DAMS Audit (2023).</li>
                    </ol>

                    <h3 className="font-bold text-slate-900 uppercase font-mono mt-2 mb-1 text-[10px]">
                      D. Parliamentary &amp; Regulatory
                    </h3>
                    <ol start={22} className="list-decimal list-inside space-y-0.5 text-slate-700">
                      <li>NA Committee Submissions (2026).</li>
                      <li>IDAK/KSELA/ACMK Memo (2026).</li>
                      <li>EBK Position Paper (2026).</li>
                      <li>Council of Governors Memo (2026).</li>
                      <li>PPARB App. No. 45 of 2019.</li>
                      <li>CAK Price-Fixing Advisory (2020).</li>
                      <li>KNQA RPL Directives (2024).</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 16 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 17: APPENDIX A: MASTER STATUTORY SIGN-OFF SCHEDULE
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-17" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    Appendix A: Master Statutory Sign-Off Schedule
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">SCHEDULE 14</span>
                </div>

                <p className="text-slate-700 mb-3 text-[11px] leading-relaxed">
                  Statutory stage-by-stage multi-disciplinary inspection forms required before issuance of a Certificate of Occupancy:
                </p>

                <table className="w-full border-collapse border border-slate-300 text-[10.5px]">
                  <thead className="bg-slate-100 font-bold text-slate-800 text-[9.5px] uppercase">
                    <tr>
                      <th className="p-1.5 border text-left">Form ID</th>
                      <th className="p-1.5 border text-left">Statutory Inspection Stage</th>
                      <th className="p-1.5 border text-left">Designated Sign-Off Lead</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-1.5 border font-mono font-bold">Form KBERC-1</td><td className="p-1.5 border">Geotechnical Soil &amp; Sub-grade Clearance</td><td className="p-1.5 border">Geotechnical Specialist Engineer</td></tr>
                    <tr><td className="p-1.5 border font-mono font-bold">Form KBERC-1A</td><td className="p-1.5 border">Substructure Piling &amp; Retaining Wall</td><td className="p-1.5 border">Structural Engineer &amp; CPM</td></tr>
                    <tr><td className="p-1.5 border font-mono font-bold">Form KBERC-2</td><td className="p-1.5 border">Ground Slab Damp-Proofing &amp; Tanking</td><td className="p-1.5 border">Lead Architect &amp; Civil Engineer</td></tr>
                    <tr><td className="p-1.5 border font-mono font-bold">Form KBERC-3</td><td className="p-1.5 border">Superstructure RC Frame &amp; Shear Core</td><td className="p-1.5 border">Structural Engineer, Architect &amp; QS</td></tr>
                    <tr><td className="p-1.5 border font-mono font-bold">Form KBERC-4</td><td className="p-1.5 border">Building Envelope, Glazing &amp; Roof Deck</td><td className="p-1.5 border">Lead Architect &amp; Facade Specialist</td></tr>
                    <tr><td className="p-1.5 border font-mono font-bold">Form KBERC-5</td><td className="p-1.5 border">MEP Risers, Electrical &amp; Fire Egress</td><td className="p-1.5 border">Electrical Engineer &amp; Interior Designer</td></tr>
                    <tr><td className="p-1.5 border font-mono font-bold bg-purple-50 text-purple-950">Form KBERC-6</td><td className="p-1.5 border bg-purple-50 text-purple-950 font-bold">Final Statutory Certificate of Occupancy</td><td className="p-1.5 border bg-purple-50 text-purple-950 font-bold">County Building Desk &amp; Lead Architect</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 17 OF 18</span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════
                SHEET 18: APPENDIX B: MULTI-PROFESSIONAL GOVERNANCE MATRIX
            ═══════════════════════════════════════════════════════════════════════ */}
            <div id="a4-sheet-18" className="a4-sheet-canvas w-[210mm] min-h-[297mm] bg-white text-slate-900 p-[18mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between font-sans text-xs">
              <div>
                <div className="border-b-2 border-slate-900 pb-2 mb-3 flex justify-between items-baseline font-serif">
                  <h2 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    Appendix B: Multi-Professional Governance Matrix
                  </h2>
                  <span className="text-[10px] font-mono text-purple-900 font-bold">COMPARATIVE GOVERNANCE</span>
                </div>

                <p className="text-slate-700 mb-3 text-[11px] leading-relaxed">
                  Comparative analysis of regulatory board structures across Kenyan and international jurisdictions proving that no successful statutory body operates under 100% executive patronage or 100% state exclusion:
                </p>

                <table className="w-full border-collapse border border-slate-300 text-[10.5px]">
                  <thead className="bg-slate-100 font-bold text-slate-800 text-[9.5px] uppercase">
                    <tr>
                      <th className="p-1.5 border text-left">Regulated Body</th>
                      <th className="p-1.5 border text-left">Board Composition</th>
                      <th className="p-1.5 border text-left">Executive / CS Role</th>
                      <th className="p-1.5 border text-left">Association Safeguard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1.5 border font-bold">Medicine (KMPDC)</td>
                      <td className="p-1.5 border">Elected Doctors + Medical Deans + DG Health</td>
                      <td className="p-1.5 border">Formal election gazettement &amp; policy alignment</td>
                      <td className="p-1.5 border">KMA CPD accreditation</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">Engineering (EBK)</td>
                      <td className="p-1.5 border">3 IEK Nominees + IEK President + 3 PSs</td>
                      <td className="p-1.5 border">Appoints Chair from registered cohort</td>
                      <td className="p-1.5 border">IEK statutory board seats</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">Law (LSK)</td>
                      <td className="p-1.5 border">100% Elected Council</td>
                      <td className="p-1.5 border">AG sits on Disciplinary Tribunal</td>
                      <td className="p-1.5 border">Direct member democracy</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border font-bold">UK (ARB UK)</td>
                      <td className="p-1.5 border">5 Architects + 6 Independent Lay Members</td>
                      <td className="p-1.5 border">Privy Council public appointments</td>
                      <td className="p-1.5 border">Strict separation from RIBA</td>
                    </tr>
                    <tr className="bg-purple-50 text-purple-950 font-bold">
                      <td className="p-1.5 border">Proposed K-BERC</td>
                      <td className="p-1.5 border">10 Elected College Reps + CoG + PS + LSK</td>
                      <td className="p-1.5 border">Appoints Chair from PSC shortlist</td>
                      <td className="p-1.5 border">Clause 24A &amp; 80% CPD Rule</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-3 flex justify-between">
                <span>K-BERC COMPARATIVE LEGISLATIVE TREATISE</span>
                <span>PAGE 18 OF 18</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
