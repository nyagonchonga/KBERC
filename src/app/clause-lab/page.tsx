"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ClauseLab() {
  const [intent, setIntent] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call to the backend ClauseGenerator
    setTimeout(() => {
      setResult({
        clause: "A person shall not engage in complex building works unless registered as a category B professional.",
        impact_score: 85,
        vulnerabilities: ["Could unfairly exclude experienced technicians."],
        mitigations: ["Add explicit pathways for technician upgrading."]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 p-8">
      <header className="mb-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Clause Lab</h1>
        <p className="text-slate-600">Generate, Red-Team, and Score Legislative Clauses</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-300">
          <h2 className="text-xl font-semibold mb-4">Policy Intent</h2>
          <textarea 
            className="w-full h-32 bg-white border border-slate-300 rounded-xl p-4 text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Describe the regulatory intent (e.g., Only registered professionals should sign off on high-rise buildings...)"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
          />
          <button 
            onClick={handleGenerate}
            disabled={!intent || loading}
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-900 font-medium rounded-xl transition-colors w-full"
          >
            {loading ? 'Running Intelligence Engines...' : 'Generate & Red-Team Clause'}
          </button>
        </div>

        {/* Output Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-slate-100/50 p-6 rounded-2xl border border-blue-900/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <h3 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2">Generated Clause</h3>
              <p className="text-lg text-slate-800">{result.clause}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100/50 p-6 rounded-2xl border border-red-900/50 text-center">
                <h3 className="text-sm uppercase tracking-wider text-red-700 font-semibold mb-2">Impact Score</h3>
                <span className="text-4xl font-black text-red-800">{result.impact_score}<span className="text-xl text-red-500">/100</span></span>
              </div>
              
              <div className="bg-slate-100/50 p-6 rounded-2xl border border-red-900/50">
                <h3 className="text-sm uppercase tracking-wider text-red-700 font-semibold mb-2">Red Team Alert</h3>
                <ul className="list-disc pl-4 text-slate-700 space-y-1 text-sm">
                  {result.vulnerabilities.map((v: string, i: number) => <li key={i}>{v}</li>)}
                </ul>
                <div className="mt-4 pt-4 border-t border-red-900/30">
                  <h4 className="text-xs uppercase text-slate-500 font-bold mb-1">Mitigation</h4>
                  <p className="text-sm text-red-700">{result.mitigations[0]}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
