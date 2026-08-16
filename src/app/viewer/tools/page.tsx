'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveToolsHubPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'creative' | 'calculators' | 'maps'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tools = [
    // Creative Visual Tools
    {
      category: 'creative',
      title: "Building Stage Navigator",
      badge: "Interactive Cutaway",
      desc: "Interactive 5-stage architectural cutaway mapping lead disciplines, test logs, and statutory forms (Forms KBERC-1 to 6).",
      href: "/viewer/building-navigator",
      icon: "🏢",
      color: "from-red-500 to-teal-600"
    },
    {
      category: 'creative',
      title: "Statutory Harmonization Matrix",
      badge: "Legal Harmonization",
      desc: "Cross-referencing KBERC Bill 2026 with County Land Use Laws, NCA Contractor Act, NEMA (EMCA), and PFM Act 2012.",
      href: "/viewer/harmonization",
      icon: "⚖️",
      color: "from-blue-500 to-indigo-600"
    },
    {
      category: 'creative',
      title: "\"Before vs After\" Reform Showcase",
      badge: "Legislative Reform",
      desc: "Side-by-side comparison demonstrating how KBERC Bill 2026 resolves Cap 525 loopholes and unregulated practice.",
      href: "/viewer/reform",
      icon: "🔄",
      color: "from-purple-500 to-violet-600"
    },
    {
      category: 'creative',
      title: "Career & Practice Licensing Roadmap",
      badge: "Student Pathfinder",
      desc: "5-year career progression pathfinder for Degree & TVET Diploma graduates to acquiring a Digital QR Seal.",
      href: "/viewer/career",
      icon: "🎓",
      color: "from-amber-500 to-orange-600"
    },
    {
      category: 'creative',
      title: "Digital QR Seal Verifier Simulator",
      badge: "Plan Security",
      desc: "Simulate plan QR verification by County Building Officers to validate practitioner licensing & PII cover.",
      href: "/viewer/seal-verifier",
      icon: "🔒",
      color: "from-rose-500 to-red-600"
    },

    // Calculators & Simulators
    {
      category: 'calculators',
      title: "Baseline Scale of Fees Estimator",
      badge: "Schedule 12 Tariff",
      desc: "Calculate minimum statutory design fee benchmarks (5.0%-6.5%) and hourly rates based on construction cost.",
      href: "/viewer/interactive/7",
      icon: "💰",
      color: "from-red-600 to-teal-700"
    },
    {
      category: 'calculators',
      title: "Corporate Firm 51% Local Shareholding Checker",
      badge: "Section 45 Audit",
      desc: "Verify corporate firm 51% local voting equity compliance before issuing multidisciplinary practice licenses.",
      href: "/viewer/interactive/5",
      icon: "🏢",
      color: "from-amber-600 to-yellow-700"
    },
    {
      category: 'calculators',
      title: "Building Risk Classification Hub",
      badge: "Part VIII Safety",
      desc: "Determine statutory risk class (Class A to E), mandatory peer-review gates, and PII insurance thresholds.",
      href: "/viewer/risk",
      icon: "⚠️",
      color: "from-orange-600 to-amber-700"
    },
    {
      category: 'calculators',
      title: "Registration Pathways & Eligibility Checker",
      badge: "Part IV Licensing",
      desc: "Eligibility checker mapping academic degrees/diplomas to Student ➔ Candidate ➔ Lead ➔ Specialist titles.",
      href: "/viewer/registration",
      icon: "🎓",
      color: "from-teal-600 to-cyan-700"
    },

    // Maps & Structure
    {
      category: 'maps',
      title: "KBERC Apex Council & County Organogram",
      badge: "Governance Hierarchy",
      desc: "Interactive 5-tier organogram showing authority flow from Cabinet Secretary to 47 County Desks.",
      href: "/viewer/interactive/2",
      icon: "🏛️",
      color: "from-indigo-600 to-blue-700"
    },
    {
      category: 'maps',
      title: "8 Regulated Disciplines Technical Matrix",
      badge: "Part III Scopes",
      desc: "Detailed technical design scopes for Architecture, Engineering, QS, Planning, Landscape, Interior, CPM & Technologists.",
      href: "/viewer/interactive/3",
      icon: "📐",
      color: "from-violet-600 to-purple-700"
    },
    {
      category: 'maps',
      title: "Visual Bill Architecture Map",
      badge: "System Map",
      desc: "Interactive map connecting all statutory institutions, enforcement bodies, and devolved desks.",
      href: "/viewer/map",
      icon: "🗺️",
      color: "from-fuchsia-600 to-pink-700"
    },
    {
      category: 'maps',
      title: "Enactment Tasks & Implementation Roadmap",
      badge: "Enactment Tasks",
      desc: "Implementation task manager for statutory orders, gazettements, and transitional timelines.",
      href: "/viewer/enactment-tasks",
      icon: "📋",
      color: "from-red-600 to-green-700"
    },
    {
      category: 'maps',
      title: "5-Bill Comparative Study",
      badge: "Comparative Analysis",
      desc: "Radar charts and in-depth statutory comparisons across Cap 525, Engineers Act, and new draft Bills.",
      href: "/viewer/comparative-study",
      icon: "📊",
      color: "from-blue-600 to-indigo-700"
    },
    {
      category: 'creative',
      title: "Statutory Visual Audit & Master Graphical Hub",
      badge: "10 Visual Tools",
      desc: "Comprehensive suite of Eurocode decision trees, fee stacked bar graphs, collapse timelines, and inter-agency matrices.",
      href: "/viewer/visual-audit",
      icon: "📊",
      color: "from-teal-500 to-red-600"
    }
  ];

  const filteredTools = tools.filter(t => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.desc.toLowerCase().includes(searchTerm.toLowerCase()) || t.badge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: '#475569' }}>
          <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
          <span>›</span>
          <span style={{ color: '#ef4444', fontWeight: 600 }}>Interactive Tools Hub</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#ef4444', background: 'rgba(16,185,129,0.1)', padding: '6px 18px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            ALL INTERACTIVE STATUTORY &amp; CREATIVE TOOLS
          </span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 900, color: '#0F172A', margin: '16px 0 12px', letterSpacing: '-0.02em' }}>
            ✨ All Interactive Statutory &amp; Creative Tools Hub
          </h1>
          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
            Explore all 14 interactive reference tools, calculators, visual building navigators, legal harmonization matrices, and career pathfinders for the Built Environment Professions &amp; Practice Bill 2026.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: '⚡ All Tools (14)' },
              { id: 'creative', label: '🎨 Creative Visual Tools (5)' },
              { id: 'calculators', label: '🧮 Calculators & Simulators (4)' },
              { id: 'maps', label: '🗺️ Practice & Governance Maps (5)' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                style={{
                  padding: '10px 20px', borderRadius: 0, fontSize: '11px', fontWeight: 800,
                  textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s',
                  background: activeCategory === cat.id ? '#b91c1c' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#0F172A',
                  border: activeCategory === cat.id ? '1px solid #b91c1c' : '1px solid #CBD5E1',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: '260px' }}>
            <input
              type="text"
              placeholder="Search tools by name, category, or keyword..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%', padding: '12px 18px', borderRadius: 0,
                background: '#FFFFFF', border: '1px solid #CBD5E1',
                color: '#0F172A', fontSize: '13px', outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filteredTools.map((t, idx) => (
            <Link key={idx} href={t.href} style={{ textDecoration: 'none' }}>
              <div style={{
                height: '100%', padding: '24px', borderRadius: 0,
                background: '#FFFFFF', border: '1px solid #CBD5E1',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '28px' }}>{t.icon}</span>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#ef4444', background: 'rgba(16,185,129,0.15)', padding: '4px 10px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.2)', textTransform: 'uppercase' }}>
                      {t.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 10px 0', lineHeight: 1.3 }}>{t.title}</h3>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span>Launch Tool</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
