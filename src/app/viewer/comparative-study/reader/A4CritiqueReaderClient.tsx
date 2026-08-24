'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type UserRole = 'All' | 'Architect' | 'Lawyer' | 'Sponsor';

interface A4PageData {
  pageNumber: number;
  sectionHeader: string;
  isCover: boolean;
  content: string;
}

export default function A4CritiqueReaderClient({ content }: { content: string }) {
  const [activeRole, setActiveRole] = useState<UserRole>('All');
  const [currentSheet, setCurrentSheet] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // ─── Strict A4 Height-Based Pagination Engine ──────────────────────────────
  const pages: A4PageData[] = useMemo(() => {
    const rawBlocks = content.split(/\n\n+/).filter(b => b.trim().length > 0);
    const paginatedList: A4PageData[] = [];

    // Page 1 is always the dedicated Parliamentary Cover / Dashboard Sheet
    paginatedList.push({
      pageNumber: 1,
      sectionHeader: 'Official Parliamentary Frontispiece',
      isCover: true,
      content: ''
    });

    const MAX_PAGE_HEIGHT_PX = 820; // Exact printable vertical budget inside 297mm A4 with 16mm margins
    let currentPageChunks: string[] = [];
    let currentHeightScore = 0;
    let currentSectionTitle = 'Executive Profile & Overview';

    const estimateBlockHeight = (blockText: string): number => {
      const trimmed = blockText.trim();
      if (trimmed.startsWith('## ')) return 65;
      if (trimmed.startsWith('### ')) return 45;
      if (trimmed.startsWith('#### ')) return 35;
      if (trimmed.startsWith('```')) return 180;
      if (trimmed.includes('|') && trimmed.includes('\n')) {
        const rows = trimmed.split('\n').filter(r => r.includes('|')).length;
        return (rows * 26) + 30;
      }
      if (trimmed.startsWith('>')) {
        const lines = Math.max(1, Math.ceil(trimmed.length / 80));
        return (lines * 20) + 24;
      }
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
        const items = trimmed.split('\n').length;
        return (items * 22) + 16;
      }
      const lines = Math.max(1, Math.ceil(trimmed.length / 95));
      return (lines * 19) + 12;
    };

    rawBlocks.forEach((block) => {
      const trimmed = block.trim();
      if (trimmed === '---') return; // Skip raw horizontal rules

      if (trimmed.startsWith('## ')) {
        const headerMatch = trimmed.match(/^## (\d+\.?\s*[^#\n]+)/);
        if (headerMatch) currentSectionTitle = headerMatch[1].trim();
      }

      const blockHeight = estimateBlockHeight(trimmed);
      const isMajorHeading = trimmed.startsWith('## ');

      // Force a page break if height exceeds budget OR on major heading if page is already populated
      if ((currentHeightScore + blockHeight > MAX_PAGE_HEIGHT_PX) || (isMajorHeading && currentHeightScore > 300)) {
        if (currentPageChunks.length > 0) {
          paginatedList.push({
            pageNumber: paginatedList.length + 1,
            sectionHeader: currentSectionTitle,
            isCover: false,
            content: currentPageChunks.join('\n\n')
          });
          currentPageChunks = [];
          currentHeightScore = 0;
        }
      }

      currentPageChunks.push(trimmed);
      currentHeightScore += blockHeight;
    });

    // Push final remaining page
    if (currentPageChunks.length > 0) {
      paginatedList.push({
        pageNumber: paginatedList.length + 1,
        sectionHeader: currentSectionTitle,
        isCover: false,
        content: currentPageChunks.join('\n\n')
      });
    }

    return paginatedList;
  }, [content]);

  const totalSheets = pages.length;

  const scrollToSheet = (sheetNum: number) => {
    setCurrentSheet(sheetNum);
    const el = document.getElementById(`a4-sheet-${sheetNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      {/* ─── Top Controls Bar ─── */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/viewer/comparative-study"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold border border-slate-700 transition-colors"
          >
            <span>⬅️</span>
            <span>Back to Web View</span>
          </Link>
          <div className="h-4 w-px bg-slate-700 hidden sm:block" />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs border border-slate-700"
            title="Toggle Page Navigator"
          >
            {sidebarOpen ? '◀ Hide Index' : '▶ Show Index'}
          </button>
          <div className="flex items-center gap-2">
            <span className="bg-purple-950 text-purple-300 border border-purple-800/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
              Strict A4 Edition
            </span>
            <span className="text-xs font-bold text-slate-200 hidden md:inline truncate max-w-[280px]">
              A&QS Bill 2026 Legal Critique ({totalSheets} Pages)
            </span>
          </div>
        </div>

        {/* Center: Role Switcher & Zoom Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800 text-[11px]">
            {(['All', 'Architect', 'Lawyer', 'Sponsor'] as UserRole[]).map(r => (
              <button
                key={r}
                onClick={() => setActiveRole(r)}
                className={`px-2.5 py-1 rounded transition-all font-medium ${
                  activeRole === r
                    ? r === 'Architect' ? 'bg-amber-600 text-white font-bold'
                    : r === 'Lawyer' ? 'bg-purple-600 text-white font-bold'
                    : r === 'Sponsor' ? 'bg-red-600 text-white font-bold'
                    : 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {r === 'All' ? 'All Roles' : r === 'Architect' ? '📐 Architect / PM' : r === 'Lawyer' ? '⚖️ Counsel' : '🏛️ Sponsor'}
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
              100%
            </button>
          </div>
        </div>

        {/* Right: Export PDF & Print */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportPdf}
            disabled={isExporting}
            className="px-3.5 py-1.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-bold rounded shadow-md flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            title="Download complete multi-page A4 PDF"
          >
            <span>{isExporting ? '⏳' : '📥'}</span>
            <span className="hidden sm:inline">{isExporting ? 'Generating PDF...' : 'Export PDF'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded border border-slate-700 flex items-center gap-1.5"
            title="Open print dialog"
          >
            <span>🖨️</span>
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </header>

      {/* ─── Main Workspace ─── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Navigator */}
        {sidebarOpen && (
          <aside className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 overflow-hidden shadow-2xl">
            <div className="p-3 border-b border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                A4 Strict Page Navigator ({totalSheets} Sheets)
              </div>
              <input
                type="text"
                placeholder="Search clauses, topics, cases..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {pages
                .filter(p => searchQuery === '' || p.sectionHeader.toLowerCase().includes(searchQuery.toLowerCase()) || p.content.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((p) => (
                  <button
                    key={p.pageNumber}
                    onClick={() => scrollToSheet(p.pageNumber)}
                    className={`w-full text-left p-2 rounded text-xs flex items-start gap-2.5 transition-all ${
                      currentSheet === p.pageNumber
                        ? 'bg-purple-950/80 border border-purple-800 text-purple-200 font-semibold shadow-xs'
                        : 'hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                      currentSheet === p.pageNumber ? 'bg-purple-800 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      P.{p.pageNumber}
                    </span>
                    <div className="truncate flex-1">
                      <div className="truncate font-medium">{p.sectionHeader}</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {p.isCover ? 'Cover & Metadata' : `A4 Page ${p.pageNumber}`}
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </aside>
        )}

        {/* Center: Strict A4 Viewport */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-4 md:p-8 flex flex-col items-center gap-8">
          <div
            id="a4-critique-pages-container"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
            className="flex flex-col items-center gap-10 w-full max-w-[850px]"
          >
            {pages.map((p) => {
              if (p.isCover) {
                {/* ═══════════════════════════════════════════════════════════════════════
                    PAGE 1: OFFICIAL PARLIAMENTARY TITLE & EXECUTIVE FORENSIC DASHBOARD
                ═══════════════════════════════════════════════════════════════════════ */}
                return (
                  <div
                    key={p.pageNumber}
                    id={`a4-sheet-${p.pageNumber}`}
                    className="a4-sheet-canvas w-[210mm] h-[297mm] max-h-[297mm] bg-white text-slate-900 p-[16mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between overflow-hidden font-sans shrink-0 box-border"
                  >
                    {/* Outer Double Frame */}
                    <div className="absolute inset-3 border-2 border-slate-900 pointer-events-none" />

                    <div>
                      {/* Crest Header */}
                      <div className="text-center pt-1 mb-2">
                        <div className="text-xs font-bold tracking-[0.25em] text-slate-800 uppercase font-serif">
                          REPUBLIC OF KENYA
                        </div>
                        <div className="text-[9.5px] font-mono text-slate-600 tracking-wider uppercase">
                          THE NATIONAL ASSEMBLY • THIRTEENTH PARLIAMENT (FIFTH SESSION, 2026)
                        </div>
                        <div className="w-20 h-0.5 bg-slate-900 mx-auto my-1.5" />
                      </div>

                      {/* Metadata Badges */}
                      <div className="flex justify-center gap-2 mb-3 font-mono text-[9.5px]">
                        <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-bold">
                          FORENSIC LEGAL TREATISE
                        </span>
                        <span className="bg-red-950 text-red-200 border border-red-800 px-2 py-0.5 rounded font-bold">
                          KENYA GAZETTE SUPP. NO. 184
                        </span>
                        <span className="bg-purple-950 text-purple-200 border border-purple-800 px-2 py-0.5 rounded font-bold">
                          NA BILLS NO. 47 (2026)
                        </span>
                      </div>

                      {/* Title */}
                      <div className="text-center mb-3">
                        <h1 className="text-lg font-bold font-serif text-slate-950 uppercase tracking-tight leading-tight mb-1">
                          Comprehensive Legal Treatise &amp; Section-by-Section Forensic Critique
                        </h1>
                        <h2 className="text-xs font-serif italic text-purple-950 font-bold">
                          The Architectural and Quantity Surveying Practitioners Bill, 2026 (National Assembly Bills No. 47)
                        </h2>
                      </div>

                      <p className="text-[10px] text-slate-700 text-center max-w-xl mx-auto leading-relaxed mb-3">
                        An exhaustive, lawyer-grade section-by-section legal analysis, constitutional assessment, verbatim statutory quotes, cited Kenyan superior court case law (eKLR), practitioner frontline stress-tests, and optimal legislative redrafts across all 10 Parts, 59 Clauses, and the Schedule of National Assembly Bill No. 47.
                      </p>

                      {/* Executive 4-Stat Metric Cards */}
                      <div className="grid grid-cols-4 gap-1.5 mb-3 text-center">
                        <div className="bg-slate-100 p-1.5 border border-slate-300 rounded">
                          <div className="text-[8.5px] font-mono uppercase text-slate-600 font-bold">Sponsoring Committee</div>
                          <div className="text-[10.5px] font-bold text-slate-900 mt-0.5">Hon. Joseph K. Tonui</div>
                          <div className="text-[8px] text-slate-500">Housing &amp; Public Works</div>
                        </div>
                        <div className="bg-red-50 p-1.5 border border-red-300 rounded text-red-950">
                          <div className="text-[8.5px] font-mono uppercase text-red-800 font-bold">Voting Hegemony</div>
                          <div className="text-[10.5px] font-bold mt-0.5">63.6% (7 of 11)</div>
                          <div className="text-[8px] text-red-700">Arch / QS Dominance</div>
                        </div>
                        <div className="bg-amber-50 p-1.5 border border-amber-300 rounded text-amber-950">
                          <div className="text-[8.5px] font-mono uppercase text-amber-800 font-bold">General Fine Cap</div>
                          <div className="text-[10.5px] font-bold mt-0.5">KES 500,000</div>
                          <div className="text-[8px] text-amber-700">Insignificant Deterrence</div>
                        </div>
                        <div className="bg-slate-100 p-1.5 border border-slate-300 rounded text-slate-900">
                          <div className="text-[8.5px] font-mono uppercase text-slate-600 font-bold">Devolution Share</div>
                          <div className="text-[10.5px] font-bold mt-0.5">0% (Zero Grants)</div>
                          <div className="text-[8px] text-slate-500">Centralized in Nairobi</div>
                        </div>
                      </div>

                      {/* Forensic Audit Summary Table */}
                      <table className="w-full border-collapse border border-slate-300 text-[10px] mb-2">
                        <thead className="bg-slate-100 font-bold text-slate-800 text-[9px] uppercase">
                          <tr>
                            <th className="p-1 border text-left">Audit Focus</th>
                            <th className="p-1 border text-left">Critical Forensic Finding under Bill No. 47</th>
                            <th className="p-1 border text-left">Proposed K-BERC Statutory Remedy</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-1 border font-bold">Council Democracy</td>
                            <td className="p-1 border text-red-900">100% CS appointments; zero elections by practitioners.</td>
                            <td className="p-1 border text-emerald-900 font-medium">10 Peer-Elected College Seats (Secret Ballot).</td>
                          </tr>
                          <tr>
                            <td className="p-1 border font-bold">Civil Associations</td>
                            <td className="p-1 border text-red-900">Creates state chapters; eviscerates AAK/IQSK/IDAK.</td>
                            <td className="p-1 border text-emerald-900 font-medium">Clause 24A &amp; 80% Mandatory CPD Delegation.</td>
                          </tr>
                          <tr>
                            <td className="p-1 border font-bold">Quorum Trap</td>
                            <td className="p-1 border text-red-900">4 members (36%) can pass binding regulations.</td>
                            <td className="p-1 border text-emerald-900 font-medium">8 Members (50%+1) with 3 College reps present.</td>
                          </tr>
                          <tr>
                            <td className="p-1 border font-bold">Public Procurement</td>
                            <td className="p-1 border text-red-900">Fee scales overridden by PPADA Sec 86 lowest-bidder.</td>
                            <td className="p-1 border text-emerald-900 font-medium">Non-Obstante Override: QCBS 80/20 &amp; 70% Floor.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Running Footer */}
                    <div className="text-center font-mono text-[8.5px] text-slate-500 border-t border-slate-200 pt-1.5 flex justify-between">
                      <span>REPUBLIC OF KENYA • A&amp;QS PRACTITIONERS BILL 2026 CRITIQUE</span>
                      <span>PAGE 1 OF {totalSheets}</span>
                    </div>
                  </div>
                );
              }

              {/* ═══════════════════════════════════════════════════════════════════════
                  SUBSEQUENT STRICT A4 SHEETS (PAGES 2+)
              ═══════════════════════════════════════════════════════════════════════ */}
              return (
                <div
                  key={p.pageNumber}
                  id={`a4-sheet-${p.pageNumber}`}
                  className="a4-sheet-canvas w-[210mm] h-[297mm] max-h-[297mm] bg-white text-slate-900 p-[16mm] shadow-2xl border border-slate-300 relative flex flex-col justify-between overflow-hidden font-sans text-xs shrink-0 box-border"
                >
                  <div className="flex-1 overflow-hidden flex flex-col justify-start">
                    {/* Running Header */}
                    <div className="border-b border-slate-300 pb-1.5 mb-2.5 flex justify-between items-baseline font-mono text-[9px] text-slate-600 uppercase shrink-0">
                      <span>A&amp;QS PRACTITIONERS BILL 2026 FORENSIC AUDIT</span>
                      <span className="font-bold text-purple-900 truncate max-w-[260px]">{p.sectionHeader}</span>
                    </div>

                    {/* Markdown Rendered Content Area */}
                    <div className="a4-markdown-content space-y-2 leading-relaxed text-slate-800 overflow-hidden">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h2: ({ children }) => (
                            <h2 className="text-sm font-serif font-bold text-slate-950 uppercase border-b-2 border-slate-900 pb-1 mb-2 mt-0.5">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wide bg-slate-100 px-2 py-0.5 border-l-4 border-slate-800 mb-1.5 mt-2">
                              {children}
                            </h3>
                          ),
                          h4: ({ children }) => (
                            <h4 className="text-[10.5px] font-bold text-purple-950 font-serif mb-1 mt-1.5">
                              {children}
                            </h4>
                          ),
                          p: ({ children }) => (
                            <p className="text-[10.5px] leading-relaxed text-slate-800 mb-1.5">
                              {children}
                            </p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc list-inside space-y-0.5 text-[10px] text-slate-800 mb-1.5 pl-1.5">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal list-inside space-y-0.5 text-[10px] text-slate-800 mb-1.5 pl-1.5">
                              {children}
                            </ol>
                          ),
                          table: ({ children }) => (
                            <div className="overflow-x-auto my-1.5">
                              <table className="w-full border-collapse border border-slate-300 text-[9.5px] text-slate-900">
                                {children}
                              </table>
                            </div>
                          ),
                          thead: ({ children }) => (
                            <thead className="bg-slate-100 font-bold text-slate-900 uppercase text-[9px]">
                              {children}
                            </thead>
                          ),
                          th: ({ children }) => (
                            <th className="p-1 border border-slate-300 text-left font-bold">
                              {children}
                            </th>
                          ),
                          td: ({ children }) => (
                            <td className="p-1 border border-slate-300 text-slate-800 leading-snug">
                              {children}
                            </td>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="my-1.5 p-2 bg-purple-50/80 border-l-4 border-purple-800 text-purple-950 text-[10px] rounded-r leading-relaxed italic">
                              {children}
                            </blockquote>
                          ),
                          code: ({ inline, children }: any) => {
                            if (inline) {
                              return (
                                <code className="bg-slate-100 text-purple-900 px-1 py-0.5 rounded font-mono text-[9.5px] border border-slate-200">
                                  {children}
                                </code>
                              );
                            }
                            return (
                              <pre className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-[9px] overflow-x-auto my-1.5 border border-slate-800">
                                <code>{children}</code>
                              </pre>
                            );
                          }
                        }}
                      >
                        {p.content}
                      </ReactMarkdown>
                    </div>
                  </div>

                  {/* Running Footer */}
                  <div className="text-center font-mono text-[8.5px] text-slate-500 border-t border-slate-200 pt-1.5 mt-2 flex justify-between shrink-0">
                    <span>K-BERC COMPARATIVE LEGISLATIVE SERIES</span>
                    <span>PAGE {p.pageNumber} OF {totalSheets}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
