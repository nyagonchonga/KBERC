"use client";

import Link from 'next/link';

export default function DeliverablesExporter() {
  const deliverables = [
    { id: 1, title: "Full Proposed Bill", type: "Legislative", status: "Drafting" },
    { id: 2, title: "Explanatory Memorandum", type: "Policy", status: "Pending" },
    { id: 3, title: "Regulatory Impact Assessment", type: "Analysis", status: "Ready" },
    { id: 4, title: "Constitutional Compliance Matrix", type: "Legal", status: "Ready" },
    { id: 5, title: "Kenyan Legal Harmonisation Matrix", type: "Legal", status: "Ready" },
    { id: 6, title: "Cap. 525 Gap Analysis", type: "Analysis", status: "Ready" },
    { id: 7, title: "2026 Bills Comparison", type: "Analysis", status: "Ready" },
    { id: 8, title: "International Comparative Matrix", type: "Research", status: "Ready" },
    { id: 9, title: "Red-Team Report", type: "Security", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 font-sans">
      <header className="mb-10">
        <Link href="/" className="text-red-700 hover:text-red-600 flex items-center gap-2 mb-4 transition-colors">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400 tracking-tight">
          Deliverables Exporter
        </h1>
        <p className="text-slate-600 mt-2">Generate and export the 25 required final documents for the reform platform.</p>
      </header>

      {/* Stats/Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-100/60 border border-slate-300 p-4 rounded-2xl mb-8 backdrop-blur-sm">
        <div className="flex gap-6 mb-4 md:mb-0">
          <div>
            <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">Total</span>
            <span className="text-xl font-medium text-slate-800">25</span>
          </div>
          <div>
            <span className="block text-xs text-red-500 uppercase font-bold tracking-wider">Ready</span>
            <span className="text-xl font-medium text-red-700">6</span>
          </div>
        </div>
        
        <button className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-slate-900 font-medium rounded-xl transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          Export All Ready (ZIP)
        </button>
      </div>

      {/* Grid of Deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {deliverables.map((item) => (
          <div key={item.id} className="bg-slate-100/40 border border-slate-300/80 rounded-2xl p-5 hover:border-red-500/50 transition-colors flex flex-col justify-between group h-40">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.type}
                </span>
                <span className={`w-2 h-2 rounded-full ${
                  item.status === 'Ready' ? 'bg-red-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 
                  item.status === 'Drafting' ? 'bg-blue-500 animate-pulse' : 'bg-slate-600'
                }`}></span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className={`text-xs font-medium px-2 py-1 rounded-md ${
                item.status === 'Ready' ? 'bg-red-500/10 text-red-700' :
                item.status === 'Drafting' ? 'bg-blue-500/10 text-blue-400' :
                'bg-slate-200 text-slate-600'
              }`}>
                {item.status}
              </span>
              
              <button disabled={item.status !== 'Ready'} className="text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        ))}
        
        {/* Placeholder for remaining 16 items */}
        <div className="bg-white border border-slate-300 border-dashed rounded-2xl p-5 flex items-center justify-center h-40">
          <span className="text-slate-600 text-sm font-medium">+ 16 more pending</span>
        </div>
      </div>
    </div>
  );
}
