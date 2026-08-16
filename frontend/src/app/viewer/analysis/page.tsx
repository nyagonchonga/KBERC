"use client";

import Link from 'next/link';

export default function AnalysisDashboard() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans p-4 sm:p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/viewer" className="text-slate-600 hover:text-red-600 transition-colors font-medium text-sm mb-8 inline-block">
          ← Back to Viewer Hub
        </Link>
        
        <header className="mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Legislative Intelligence Dashboard</h1>
          <p className="text-slate-600">Data-driven insights extracted from the Built Environment Professions and Practice Bill.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Stat Cards */}
          <div className="bg-slate-100 border border-slate-300 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Regulatory Obligations</h3>
            <p className="text-4xl font-light text-slate-800">142</p>
            <p className="text-xs text-amber-400 mt-2">↑ 34% increase vs Cap 525</p>
          </div>
          <div className="bg-slate-100 border border-slate-300 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Offences & Penalties</h3>
            <p className="text-4xl font-light text-slate-800">28</p>
            <p className="text-xs text-red-700 mt-2">Consolidated under Part IX</p>
          </div>
          <div className="bg-slate-100 border border-slate-300 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Delegated Legislation</h3>
            <p className="text-4xl font-light text-slate-800">14</p>
            <p className="text-xs text-blue-400 mt-2">Regulations to be drafted</p>
          </div>
          <div className="bg-slate-100 border border-slate-300 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Regulated Professions</h3>
            <p className="text-4xl font-light text-slate-800">12</p>
            <p className="text-xs text-purple-400 mt-2">Across 4 Registration Tiers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area (Simulated) */}
          <div className="lg:col-span-2 bg-slate-100 border border-slate-300 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Clause Distribution by Policy Objective</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Public Safety & Quality Assurance</span>
                  <span className="text-red-700 font-bold">42%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Institutional Governance & Administration</span>
                  <span className="text-blue-400 font-bold">28%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Professional Competence & Registration</span>
                  <span className="text-purple-400 font-bold">18%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Consumer Protection & Dispute Resolution</span>
                  <span className="text-amber-400 font-bold">12%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Red Team Analysis Summary */}
          <div className="bg-slate-100/50 border border-red-900/50 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-red-700 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              Red Team Vulnerabilities
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white border border-slate-300 rounded-xl p-4">
                <span className="px-2 py-1 bg-rose-900/30 text-rose-400 text-[10px] font-bold uppercase tracking-wider rounded border border-rose-800/50 mb-2 inline-block">High Severity</span>
                <p className="text-sm text-slate-700">Ambiguity in cross-county enforcement jurisdiction could lead to regulatory arbitrage.</p>
              </div>
              <div className="bg-white border border-slate-300 rounded-xl p-4">
                <span className="px-2 py-1 bg-amber-900/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded border border-amber-800/50 mb-2 inline-block">Medium Severity</span>
                <p className="text-sm text-slate-700">Risk-classification appeals process (Part VIII) lacks strict statutory timelines.</p>
              </div>
              <div className="bg-white border border-slate-300 rounded-xl p-4">
                <span className="px-2 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-300 mb-2 inline-block">Low Severity</span>
                <p className="text-sm text-slate-700">Definition of "landscape architecture" may overlap with urban planning mandates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
