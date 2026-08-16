"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function LawEngineViewer() {
  const [activeTab, setActiveTab] = useState<'statutes' | 'bills' | 'constitution'>('statutes');
  
  const statutes = [
    { id: "cap525", title: "Architects and Quantity Surveyors Act", citation: "Cap. 525", status: "Active (Targeted for Repeal)" },
    { id: "plupa", title: "Physical and Land Use Planning Act", citation: "No. 13 of 2019", status: "Active" },
    { id: "nca", title: "National Construction Authority Act", citation: "No. 41 of 2011", status: "Active" },
    { id: "cga", title: "County Governments Act", citation: "No. 17 of 2012", status: "Active" },
  ];

  const bills = [
    { id: "ab2026", title: "Architects Bill 2026", sponsor: "National Assembly", status: "Under Review" },
    { id: "qsb2026", title: "Quantity Surveyors Bill 2026", sponsor: "National Assembly", status: "Under Review" },
    { id: "aqspb2026", title: "Architectural and Quantity Surveying Practitioners Bill 2026", sponsor: "National Assembly", status: "Under Review" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 font-sans">
      <header className="mb-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4 transition-colors">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tight">
          Law Engine Viewer
        </h1>
        <p className="text-slate-600 mt-2">Explore ingested statutes, pending bills, and constitutional mapping.</p>
      </header>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-300 mb-8">
        {['statutes', 'bills', 'constitution'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-3 text-sm font-medium capitalize transition-all duration-200 border-b-2 ${
              activeTab === tab 
                ? 'border-blue-500 text-blue-400 bg-blue-500/10' 
                : 'border-transparent text-slate-600 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area - Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        {/* Main List */}
        <div className="space-y-4">
          {activeTab === 'statutes' && statutes.map(s => (
            <div key={s.id} className="p-6 rounded-2xl bg-slate-100/40 border border-slate-300/60 backdrop-blur-md hover:border-slate-300 transition-colors flex justify-between items-start group">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{s.citation}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
                s.status.includes('Repeal') 
                  ? 'bg-amber-950/30 text-amber-400 border-amber-900/50' 
                  : 'bg-red-950/30 text-red-700 border-red-900/50'
              }`}>
                {s.status}
              </span>
            </div>
          ))}

          {activeTab === 'bills' && bills.map(b => (
            <div key={b.id} className="p-6 rounded-2xl bg-slate-100/40 border border-slate-300/60 backdrop-blur-md hover:border-slate-300 transition-colors flex justify-between items-start group">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-300 transition-colors">{b.title}</h3>
                <p className="text-sm text-slate-500 mt-1">Sponsor: {b.sponsor}</p>
              </div>
              <span className="px-3 py-1 bg-purple-950/30 text-purple-400 border border-purple-900/50 rounded-full text-xs font-semibold tracking-wide">
                {b.status}
              </span>
            </div>
          ))}

          {activeTab === 'constitution' && (
            <div className="p-8 text-center rounded-2xl bg-slate-100/40 border border-slate-300/60 border-dashed">
              <h3 className="text-lg font-medium text-slate-700">Constitutional Matrix</h3>
              <p className="text-slate-500 mt-2">Mapped across 15 mandatory provisions (e.g., Article 10, Article 47, Schedule 4).</p>
            </div>
          )}
        </div>

        {/* Sidebar Info Panel */}
        <div className="h-full rounded-2xl bg-gradient-to-b from-blue-950/20 to-slate-950 border border-blue-900/30 p-6 flex flex-col">
          <h3 className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-4">Engine Status</h3>
          <div className="space-y-4 flex-grow">
            <div>
              <p className="text-xs text-slate-500 mb-1">Total Indexed Documents</p>
              <p className="text-3xl font-light text-slate-800">142</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Conflict Detection Vectors</p>
              <p className="text-3xl font-light text-slate-800">18</p>
            </div>
          </div>
          <button className="w-full py-3 mt-6 bg-slate-200 hover:bg-slate-700 text-slate-700 text-sm font-medium rounded-xl transition-colors border border-slate-300">
            Force Re-Index
          </button>
        </div>
      </div>
    </div>
  );
}
