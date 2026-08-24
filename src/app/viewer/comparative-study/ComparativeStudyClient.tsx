'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Zap, Scale, Users, ShieldAlert, Gavel, 
  FileText, CheckCircle2, AlertTriangle, ChevronRight, 
  Building2, Landmark, AlertCircle, Sparkles, Compass, BookOpen, Layers
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
  PieChart, Pie, Cell
} from 'recharts';
import MermaidDiagram from '@/components/MermaidDiagram';

interface Comparison {
  id: string;
  sidebarTitle: string;
  title: string;
  description: string;
  scores: {
    historical: { safety: number; autonomy: number; deterrence: number; modernization: number };
    draft: { safety: number; autonomy: number; deterrence: number; modernization: number };
  };
  penalties: {
    historical: number;
    draft: number;
  };
  boardComposition: {
    historical: { name: string; seats: number; fill: string }[];
    draft: { name: string; seats: number; fill: string }[];
  };
  content: string;
}

const PART_SHORTCUTS = [
  { label: 'Part I: Preliminary', target: 'part-i-preliminary-clauses-1-to-3' },
  { label: 'Part II: Board & CEO (Cl. 7 & 11)', target: 'part-ii-the-architectural-and-quantity-surveying-practitioners-board-clauses-4-to-13' },
  { label: 'Part III: Finance', target: 'part-iii-financial-provisions-clauses-14-to-19' },
  { label: 'Part IV: Registration (2-Tier/RIBA)', target: 'part-iv-registration-and-enrolment-clauses-20-to-30' },
  { label: 'Part V: Licensing', target: 'part-v-licensing-practice-clauses-31-to-36' },
  { label: 'Part VI: Inspections', target: 'part-vi-building-site-inspections-clauses-37-to-41' },
  { label: 'Part VII: Offences', target: 'part-vii-offences-penalties-clauses-42-to-50' },
  { label: 'Part VIII: Discipline', target: 'part-viii-complaints-and-discipline-clauses-51-to-55' },
  { label: 'Part IX: Regulations', target: 'part-ix-miscellaneous-provisions-clause-56' },
  { label: 'Part X: Repeals', target: 'part-x-repeals-and-transitional-provisions-clauses-57-to-59' },
  { label: 'Schedule: Quorum Trap', target: '3-the-schedule-board-proceedings-quorum-voting-dynamics' },
  { label: 'Offshoot Theory Autopsy', target: '4-the-memorandum-of-objects-and-reasons-forensic-indictment-of-the-offshoot-theory' },
  { label: 'Industry Stress-Test (Arch. Dancan)', target: '5-practitioner-forensic-stress-test-frontline-industry-inquiries-arch-dancan-submissions' },
  { label: '6 Missed Opportunities', target: '6-the-6-historic-missed-opportunities' },
  { label: '6 Unforeseen Backlashes', target: '7-the-6-unforeseen-challenges-unintended-backlashes' },
  { label: 'Parliamentary Status (Active Committee)', target: '8-official-parliamentary-status-active-stakeholder-contestation-with-legislative-citations' },
  { label: 'Master Bibliography', target: '9-master-bibliography-verification-index-primary-documents-case-law-audit-archives' },
  { label: 'Parliamentary Roadmap', target: '10-final-jurisprudential-roadmap-parliamentary-recommendations' },
  { label: 'In-Bill Structural Hardening', target: '11-in-bill-structural-hardening-deep-reflection-complete-statutory-safeguards' },
  { label: 'References & Authorities', target: '12-references-authorities-cited-endnotes' },
];

export default function ComparativeStudyClient({ comparisons }: { comparisons: Comparison[] }) {
  const [activeStudyId, setActiveStudyId] = useState(comparisons[0]?.id || '');
  const [activeSection, setActiveSection] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const activeStudy = comparisons.find(c => c.id === activeStudyId) || comparisons[0];

  const headings = useMemo(() => {
    return activeStudy?.content
      .split('\n')
      .filter(line => line.startsWith('## '))
      .map(line => line.replace('## ', '').trim()) || [];
  }, [activeStudy?.content]);

  useEffect(() => {
    if (!isClient) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -75% 0px' }
    );

    const headingElements = document.querySelectorAll('h2, h3');
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeStudyId, isClient]);

  // Transform data for charts
  const radarData = [
    { subject: 'Public Safety', historical: activeStudy?.scores.historical.safety, draft: activeStudy?.scores.draft.safety },
    { subject: 'Prof. Autonomy', historical: activeStudy?.scores.historical.autonomy, draft: activeStudy?.scores.draft.autonomy },
    { subject: 'Deterrence', historical: activeStudy?.scores.historical.deterrence, draft: activeStudy?.scores.draft.deterrence },
    { subject: 'Modernization', historical: activeStudy?.scores.historical.modernization, draft: activeStudy?.scores.draft.modernization },
  ];

  const barData = [
    { name: 'Historical Bill', Penalty: activeStudy?.penalties.historical },
    { name: '2026 KBERC Draft', Penalty: activeStudy?.penalties.draft }
  ];

  const scrollToElement = (id: string) => {
    setIsMobileDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col lg:flex-row antialiased selection:bg-indigo-500 selection:text-white relative">
      
      {/* ─── Mobile Sticky Top Bar (Visible on < lg) ─── */}
      <div className="lg:hidden sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex items-center justify-between shadow-lg">
        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-bold border border-indigo-500/30 transition-colors"
        >
          <span>☰</span>
          <span>Dossiers &amp; Sections</span>
        </button>

        <div className="flex items-center gap-2">
          <Link
            href="/viewer/comparative-study/reader"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm"
          >
            <span>📖</span>
            <span>A4 Reader</span>
          </Link>
          <Link
            href="/viewer/read"
            className="p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs border border-slate-700"
            title="Back to Bill Viewer"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ─── Mobile Backdrop Overlay ─── */}
      {isMobileDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileDrawerOpen(false)}
        />
      )}

      {/* ─── Left Sidebar Navigation (Slide-Over Drawer on Mobile / Sticky Column on Desktop) ─── */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-[300px] sm:w-84 xl:w-96 bg-slate-900/98 backdrop-blur-md border-r border-slate-800 p-5 lg:p-6 flex flex-col gap-6 flex-shrink-0 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0 lg:z-20
        ${isMobileDrawerOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Mobile Header Inside Drawer */}
        <div className="flex items-center justify-between lg:hidden pb-3 border-b border-slate-800">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-400">Navigation Menu</span>
          <button 
            onClick={() => setIsMobileDrawerOpen(false)}
            className="px-2.5 py-1 text-slate-300 hover:text-white rounded-lg bg-slate-800 text-xs font-bold border border-slate-700"
          >
            ✕ Close
          </button>
        </div>

        {/* Back Link & A4 Reader CTA */}
        <div className="flex flex-col gap-2">
          <Link href="/viewer/read" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-all text-xs font-bold uppercase tracking-wider group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
            <span>Back to Bill Viewer</span>
          </Link>

          <Link
            href="/viewer/comparative-study/reader"
            className="w-full py-2.5 px-3 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 border border-purple-500/40 transition-all group mt-1"
          >
            <BookOpen className="w-4 h-4 text-purple-200 group-hover:scale-110 transition-transform" />
            <span>📖 Open A4 Critique Reader</span>
          </Link>
        </div>
        
        {/* Comparative Dossiers Section (Vertical List) */}
        <div>
          <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
            <Landmark className="w-3.5 h-3.5 text-indigo-400" />
            <span>Comparative Dossiers</span>
          </div>
          <div className="flex flex-col gap-2">
            {comparisons.map((study) => (
              <button 
                key={study.id}
                onClick={() => {
                  setActiveStudyId(study.id);
                  setIsMobileDrawerOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left px-4 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center justify-between group ${
                  activeStudyId === study.id 
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40' 
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white bg-slate-900/50 border border-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className={`w-4 h-4 shrink-0 ${activeStudyId === study.id ? 'text-indigo-200' : 'text-slate-400'}`} />
                  <span className="leading-snug">{study.sidebarTitle}</span>
                </div>
                {activeStudyId === study.id && <ChevronRight className="w-4 h-4 shrink-0 ml-2 text-indigo-200" />}
              </button>
            ))}
          </div>
        </div>

        {/* Section / Part Navigator Tree (Vertical in Left Panel) */}
        {activeStudyId === 'problems-vs-bills' && (
          <div className="pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-black text-indigo-400 uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Part &amp; Section Navigator</span>
            </div>
            <div className="flex flex-col gap-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
              {PART_SHORTCUTS.map((shortcut, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToElement(shortcut.target)}
                  className="text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-indigo-300 transition-all flex items-center gap-2 group border border-transparent hover:border-slate-700/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-indigo-400 shrink-0" />
                  <span className="truncate">{shortcut.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Verified Status Footer */}
        <div className="mt-auto pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kenya Gazette Verified (NA-47)</span>
          </div>
          <p className="text-slate-400 text-[10px] leading-relaxed">
            All quoted clauses and legal case citations are authenticated against official Kenya Law Reports and Hansard records.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-10 lg:p-12 overflow-y-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto space-y-10" key={activeStudy?.id}>
          
          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 p-6 md:p-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
                <Gavel className="w-3.5 h-3.5 text-indigo-400" />
                <span>Forensic Legal Treatise</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Kenya Gazette Supp. No. 184
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                NA Bills No. 47 (2026)
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {activeStudy?.title}
            </h1>
            <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl font-normal">
              {activeStudy?.description}
            </p>

            {/* Executive Forensic KPI Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 pt-8 border-t border-slate-800/80">
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Landmark className="w-3 h-3 text-indigo-400" /> Sponsoring Committee
                </div>
                <div className="text-sm md:text-base font-extrabold text-white">Hon. Joseph K. Tonui</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Housing & Public Works</div>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-rose-900/30">
                <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Users className="w-3 h-3 text-rose-400" /> Voting Hegemony
                </div>
                <div className="text-sm md:text-base font-extrabold text-rose-300">63.6% (7 of 11 Seats)</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Architect/QS Majority</div>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-amber-900/30">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Scale className="w-3 h-3 text-amber-400" /> General Fine Cap
                </div>
                <div className="text-sm md:text-base font-extrabold text-amber-300">KES 500,000</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Insignificant deterrence</div>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-emerald-900/30">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Building2 className="w-3 h-3 text-emerald-400" /> Devolution Share
                </div>
                <div className="text-sm md:text-base font-extrabold text-emerald-300">0% (Zero Grants)</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Centralized in Nairobi</div>
              </div>
            </div>
          </div>

          {/* Data Visualization Section */}
          {isClient && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Radar Chart */}
              <div className="bg-slate-900/70 rounded-3xl border border-slate-800 p-6 shadow-xl flex flex-col">
                <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-400" /> Statutory Fingerprint & Regulatory Strictness
                </h2>
                <p className="text-xs text-slate-400 mb-4">Comparing public safety vs. guild autonomy focus.</p>
                <div className="flex-1 min-h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid stroke="#334155" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}/>
                      <Radar name="Historical Cap 525" dataKey="historical" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} dot={{ r: 3, fill: '#94a3b8' }} />
                      <Radar name="2026 NA Bill No. 47" dataKey="draft" stroke="#6366f1" strokeWidth={2} fill="#6366f1" fillOpacity={0.4} dot={{ r: 4, fill: '#6366f1' }} activeDot={{ r: 6, fill: '#818cf8', stroke: '#fff', strokeWidth: 2 }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Composition & Penalty Charts */}
              <div className="space-y-6 flex flex-col h-full">
                
                {/* Penalty Bar Chart */}
                <div className="bg-slate-900/70 rounded-3xl border border-slate-800 p-6 shadow-xl flex-1 flex flex-col">
                  <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-rose-400" /> Maximum Financial Penalty Comparison
                  </h2>
                  <div className="flex-1 min-h-[140px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
                        <XAxis type="number" tickFormatter={(value) => `Sh${value / 1000000}M`} stroke="#94a3b8" fontSize={11} />
                        <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} width={90} />
                        <RechartsTooltip 
                          formatter={(value: any) => `Ksh ${Number(value).toLocaleString()}`}
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                          cursor={{ fill: 'transparent' }}
                        />
                        <Bar dataKey="Penalty" fill="#ef4444" radius={[0, 6, 6, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Board Power Pie Chart */}
                <div className="bg-slate-900/70 rounded-3xl border border-slate-800 p-6 shadow-xl flex-1 flex flex-col">
                  <h2 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" /> Board Voting Power Distribution (Clause 7)
                  </h2>
                  <div className="flex flex-1 items-center">
                    <div className="w-1/2 flex flex-col items-center">
                      <span className="text-[11px] font-bold text-slate-400 mb-1">Cap 525 (1934)</span>
                      <div className="h-[110px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={activeStudy?.boardComposition.historical.filter(d => d.seats > 0)} dataKey="seats" cx="50%" cy="50%" innerRadius={22} outerRadius={40} stroke="none">
                              {activeStudy?.boardComposition.historical.filter(d => d.seats > 0).map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                            <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', fontSize: '11px', borderRadius: '8px' }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center border-l border-slate-800">
                      <span className="text-[11px] font-bold text-indigo-300 mb-1">2026 Bill No. 47</span>
                      <div className="h-[110px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={activeStudy?.boardComposition.draft.filter(d => d.seats > 0)} dataKey="seats" cx="50%" cy="50%" innerRadius={22} outerRadius={40} stroke="none">
                              {activeStudy?.boardComposition.draft.filter(d => d.seats > 0).map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                            <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', fontSize: '11px', borderRadius: '8px' }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Enhanced Markdown Content Card */}
          <div className="bg-slate-900/60 rounded-3xl border border-slate-800/90 p-6 md:p-12 shadow-2xl" id="markdown-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({node, ...props}) => {
                  const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <div className="mt-14 mb-6 pt-6 border-t border-slate-800 first:mt-0 first:pt-0 first:border-0">
                      <h2 id={id} className="text-xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3" {...props} />
                    </div>
                  );
                },
                h3: ({node, ...props}) => {
                  const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h3 id={id} className="text-lg md:text-2xl font-bold text-indigo-300 mt-10 mb-4 tracking-tight" {...props} />;
                },
                h4: ({node, ...props}) => (
                  <h4 className="text-base md:text-lg font-bold text-slate-100 mt-6 mb-2 flex items-center gap-2" {...props} />
                ),
                p: ({node, children, ...props}) => {
                  const rawText = String(node?.children?.map((c: any) => c.value || '').join('') || '');
                  const isSolution = rawText.includes('💡 Proposed Optimal Legislative Redraft') || rawText.includes('The K-BELIR Reform Angle');
                  
                  if (isSolution) {
                    return (
                      <div className="my-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-teal-950/20 border-2 border-emerald-500/40 p-5 md:p-6 shadow-xl text-emerald-100">
                        <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest mb-2.5">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          <span>Optimal Legislative Redraft & Reform Angle (K-BELIR Model)</span>
                        </div>
                        <div className="text-sm md:text-base text-slate-200 leading-relaxed space-y-2 font-normal">
                          {children}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed my-3 font-normal" {...props}>
                      {children}
                    </p>
                  );
                },
                ul: ({node, ...props}) => (
                  <ul className="space-y-2 my-4 list-disc list-inside text-sm md:text-base text-slate-300 marker:text-indigo-500" {...props} />
                ),
                ol: ({node, ...props}) => (
                  <ol className="space-y-2 my-4 list-decimal list-inside text-sm md:text-base text-slate-300 marker:text-indigo-400 font-medium" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="leading-relaxed" {...props} />
                ),
                // Custom Blockquote Renderer for Legal Clauses & Alert Cards
                blockquote: ({node, children, ...props}) => {
                  const rawText = String(node?.children?.map((c: any) => c.children?.map((cc: any) => cc.value).join('')).join('') || '');
                  
                  const isCaution = rawText.includes('[!CAUTION]') || rawText.includes('Documented Kenyan Legal Precedent') || rawText.includes('Fatal Loophole') || rawText.includes('Hegemony');
                  const isWarning = rawText.includes('[!WARNING]') || rawText.includes('Supremacy Clause') || rawText.includes('Underfunding Trap');
                  const isStatutory = rawText.includes('Verbatim Statutory Text');

                  if (isCaution) {
                    return (
                      <div className="my-6 rounded-2xl bg-gradient-to-br from-rose-950/40 via-slate-900/90 to-rose-950/20 border-2 border-rose-500/40 p-5 md:p-6 shadow-xl text-rose-100">
                        <div className="flex items-center gap-2 text-xs font-black text-rose-400 uppercase tracking-widest mb-3">
                          <Gavel className="w-4 h-4 text-rose-400 animate-pulse" />
                          <span>Constitutional Risk & Judicial Finding (eKLR CITED)</span>
                        </div>
                        <div className="text-sm md:text-base text-slate-200 leading-relaxed space-y-2">
                          {children}
                        </div>
                      </div>
                    );
                  }

                  if (isWarning) {
                    return (
                      <div className="my-6 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-amber-950/20 border-2 border-amber-500/40 p-5 md:p-6 shadow-xl text-amber-100">
                        <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-widest mb-3">
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                          <span>Statutory Conflict & Governance Warning</span>
                        </div>
                        <div className="text-sm md:text-base text-slate-200 leading-relaxed space-y-2">
                          {children}
                        </div>
                      </div>
                    );
                  }

                  if (isStatutory) {
                    return (
                      <div className="my-5 rounded-2xl bg-slate-950/90 border border-indigo-500/30 p-5 shadow-inner">
                        <div className="flex items-center justify-between gap-2 text-[11px] font-black text-indigo-400 uppercase tracking-wider mb-2.5 pb-2 border-b border-slate-800">
                          <div className="flex items-center gap-1.5">
                            <Landmark className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Kenya Gazette Official Statutory Text (Bill No. 47)</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">Gazette Supp. 184</span>
                        </div>
                        <div className="font-serif italic text-sm md:text-base text-indigo-100/90 leading-relaxed">
                          {children}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <blockquote className="my-5 border-l-4 border-indigo-500 bg-slate-800/40 px-5 py-3 rounded-r-xl text-slate-300 italic text-sm md:text-base">
                      {children}
                    </blockquote>
                  );
                },
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto w-full my-8 border border-slate-800 rounded-2xl bg-slate-950/70 shadow-xl">
                    <table className="w-full text-left text-xs md:text-sm border-collapse" {...props} />
                  </div>
                ),
                th: ({node, ...props}) => (
                  <th className="bg-slate-800/80 text-white font-bold p-3.5 border-b border-slate-700 uppercase text-[11px] tracking-wider" {...props} />
                ),
                td: ({node, ...props}) => (
                  <td className="p-3.5 border-b border-slate-800/60 text-slate-300 leading-relaxed" {...props} />
                ),
                code: ({node, inline, className, children, ...props}: any) => {
                  const match = /language-(\w+)/.exec(className || '');
                  if (!inline && match && match[1] === 'mermaid') {
                    return <MermaidDiagram chart={String(children).replace(/\n$/, '')} />;
                  }
                  return <code className={`${className} bg-slate-800 text-indigo-300 rounded px-1.5 py-0.5 text-xs md:text-sm font-mono border border-slate-700/50`} {...props}>{children}</code>;
                }
              }}
            >
              {activeStudy?.content || ''}
            </ReactMarkdown>
          </div>

        </div>
      </div>

      {/* Right Sidebar - Sticky Table of Contents */}
      <div className="hidden xl:flex w-72 bg-slate-900/90 backdrop-blur-md border-l border-slate-800 p-6 flex-col gap-4 flex-shrink-0 h-screen sticky top-0 overflow-y-auto z-10 scrollbar-thin scrollbar-thumb-slate-800">
        <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
          <FileText className="w-3.5 h-3.5 text-indigo-400" />
          <span>Table of Contents</span>
        </div>
        <nav className="flex flex-col gap-1.5 border-l-2 border-slate-800 pl-3 text-xs">
          {headings?.map((heading, idx) => {
            const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const isActive = activeSection === id;
            return (
              <a 
                key={idx}
                href={`#${id}`}
                className={`py-1.5 transition-all leading-snug rounded px-2 ${
                  isActive 
                    ? 'bg-indigo-600/20 text-indigo-300 font-bold border-l-2 -ml-[15px] pl-[13px] border-indigo-500 shadow-xs' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(id);
                }}
              >
                {heading}
              </a>
            );
          })}
        </nav>
      </div>

    </div>
  );
}
