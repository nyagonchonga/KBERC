'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Scale, Users } from 'lucide-react';
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

export default function ComparativeStudyClient({ comparisons }: { comparisons: Comparison[] }) {
  const [activeStudyId, setActiveStudyId] = useState(comparisons[0]?.id || '');
  const [activeSection, setActiveSection] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const activeStudy = comparisons.find(c => c.id === activeStudyId) || comparisons[0];

  const headings = activeStudy?.content
    .split('\n')
    .filter(line => line.startsWith('## '))
    .map(line => line.replace('## ', '').trim());

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
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const headingElements = document.querySelectorAll('h2');
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

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-300 p-4 md:p-6 flex flex-col gap-3 md:gap-6 flex-shrink-0 h-auto md:h-screen md:sticky top-0 z-10">
        <Link href="/viewer/read" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500 transition-colors text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Bill Viewer
        </Link>
        
        <div>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 md:mb-4">Legislative Lineage</h2>
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 font-medium">
            {comparisons.map((study) => (
              <button 
                key={study.id}
                onClick={() => {
                  setActiveStudyId(study.id);
                  window.scrollTo(0, 0);
                }}
                className={`text-left px-3 py-2 rounded text-xs md:text-sm font-medium transition-colors shrink-0 md:shrink ${
                  activeStudyId === study.id 
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs' 
                    : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-800 border border-slate-200 md:border-transparent'
                }`}
              >
                {study.sidebarTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500" key={activeStudy?.id}>
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{activeStudy?.title}</h1>
            <p className="text-slate-600 text-lg leading-relaxed">{activeStudy?.description}</p>
          </div>

          {/* Data Visualization Section */}
          {isClient && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Radar Chart */}
              <div className="bg-slate-200/30 rounded-2xl border border-slate-300/50 p-6 shadow-xl flex flex-col">
                <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-400" /> Bill Fingerprint
                </h2>
                <p className="text-xs text-slate-600 mb-4">Comparing regulatory focus and strictness.</p>
                <div className="flex-1 min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid stroke="#334155" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
                      <Legend wrapperStyle={{ fontSize: '12px' }}/>
                      <Radar name="Historical Bill" dataKey="historical" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} dot={{ r: 3, fill: '#94a3b8' }} />
                      <Radar name="2026 Draft" dataKey="draft" stroke="#6366f1" strokeWidth={2} fill="#6366f1" fillOpacity={0.4} dot={{ r: 4, fill: '#6366f1' }} activeDot={{ r: 6, fill: '#818cf8', stroke: '#fff', strokeWidth: 2 }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Composition & Penalty Charts */}
              <div className="space-y-6 flex flex-col h-full">
                
                {/* Penalty Bar Chart */}
                <div className="bg-slate-200/30 rounded-2xl border border-slate-300/50 p-6 shadow-xl h-1/2">
                  <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-rose-400" /> Maximum Financial Penalty
                  </h2>
                  <div className="h-[150px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
                        <XAxis type="number" tickFormatter={(value) => `Sh${value / 1000000}M`} stroke="#94a3b8" fontSize={12} />
                        <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={100} />
                        <RechartsTooltip 
                          formatter={(value: any) => `Ksh ${Number(value || 0).toLocaleString()}`}
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: 0, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5)' }}
                          cursor={{ fill: 'transparent' }}
                        />
                        <Bar dataKey="Penalty" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={24} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Board Power Bubble/Pie Chart */}
                <div className="bg-slate-200/30 rounded-2xl border border-slate-300/50 p-6 shadow-xl h-1/2">
                  <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-700" /> Board/Council Voting Power
                  </h2>
                  <div className="flex h-[150px]">
                    <div className="w-1/2 flex flex-col items-center">
                      <span className="text-xs text-slate-600 mb-2">Historical</span>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={activeStudy?.boardComposition.historical.filter(d => d.seats > 0)} dataKey="seats" cx="50%" cy="50%" innerRadius={25} outerRadius={45} stroke="none">
                            {activeStudy?.boardComposition.historical.filter(d => d.seats > 0).map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', fontSize: '12px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-1/2 flex flex-col items-center border-l border-slate-300/50">
                      <span className="text-xs text-slate-600 mb-2">2026 Draft</span>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={activeStudy?.boardComposition.draft.filter(d => d.seats > 0)} dataKey="seats" cx="50%" cy="50%" innerRadius={25} outerRadius={45} stroke="none">
                            {activeStudy?.boardComposition.draft.filter(d => d.seats > 0).map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', fontSize: '12px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Markdown Content */}
          <div className="prose prose-invert prose-indigo max-w-none prose-h2:scroll-mt-24 bg-white/50 p-8 rounded-2xl border border-slate-300" id="markdown-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto w-full my-6 border border-slate-300 rounded-xl bg-white shadow-sm p-1">
                    <table className="w-full text-left text-xs md:text-sm border-collapse" {...props} />
                  </div>
                ),
                h2: ({node, ...props}) => {
                  const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h2 id={id} className="text-xl md:text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-6 mt-12" {...props} />;
                },
                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-indigo-300 mt-8 mb-4" {...props} />,
                code: ({node, inline, className, children, ...props}: any) => {
                  const match = /language-(\w+)/.exec(className || '');
                  if (!inline && match && match[1] === 'mermaid') {
                    return <MermaidDiagram chart={String(children).replace(/\n$/, '')} />;
                  }
                  return <code className={`${className} bg-slate-200 rounded px-1.5 py-0.5 text-sm`} {...props}>{children}</code>;
                }
              }}
            >
              {activeStudy?.content || ''}
            </ReactMarkdown>
          </div>

        </div>
      </div>

      {/* Right Sidebar - Sticky Table of Contents */}
      <div className="hidden lg:flex w-64 bg-white border-l border-slate-300 p-6 flex-col gap-6 flex-shrink-0 h-screen sticky top-0 overflow-y-auto">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">On This Page</h2>
        <nav className="flex flex-col gap-3 border-l-2 border-slate-300">
          {headings?.map((heading, idx) => {
            const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const isActive = activeSection === id;
            return (
              <a 
                key={idx}
                href={`#${id}`}
                className={`text-sm -ml-[2px] pl-4 border-l-2 transition-colors leading-relaxed ${
                  isActive 
                    ? 'border-indigo-500 text-indigo-400 font-bold' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
