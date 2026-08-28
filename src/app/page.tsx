'use client';

import React from 'react';
import Link from 'next/link';
import { billData } from './viewer/data';

export default function Home() {
  const stats = [
    { value: "208", label: "Sections Enacted" },
    { value: "20", label: "Parts Covered" },
    { value: "13", label: "Schedules Enacted" },
    { value: "8", label: "Regulated Disciplines" },
    { value: "47", label: "County Desks" },
    { value: "6", label: "Site Inspection Forms" },
  ];

  const tier1Viewers = [
    {
      title: "Unabridged A4 Document Reader",
      badge: "7-Tab Analysis Engine",
      desc: "Full statutory clause text viewer with 7-tab section-by-section analysis engine, mode-specific perspective filters (Architect, Lawyer, Sponsor), and A4 print export.",
      href: "/viewer/read",
      icon: "📖",
      tag: "PRIMARY READER"
    },
    {
      title: "20 Parts & 13 Schedules Directory",
      badge: "NBCK Visual Cards",
      desc: "Interactive visual directory of all 20 Statutory Parts and 13 Schedules with section cards, live search, and statutory metrics.",
      href: "/viewer/interactive",
      icon: "🏛️",
      tag: "PARTS DIRECTORY"
    },
    {
      title: "20 Master Visual Instruments Hub",
      badge: "Visual Audit Hub",
      desc: "Comprehensive suite of 20 interactive flowcharts, Eurocode risk heatmaps, gazettement clocks, PII calculators, and collapse forensic audit timelines.",
      href: "/viewer/visual-audit",
      icon: "📊",
      tag: "VISUAL INSTRUMENTS"
    }
  ];

  const tier2Simulators = [
    {
      title: "6-Stage Site Building Navigator",
      badge: "Forms KBERC-1 to 6",
      desc: "Interactive cutaway of building stages and mandatory site sign-off certificates required before Certificate of Occupancy.",
      href: "/viewer/building-navigator",
      icon: "🏢",
    },
    {
      title: "Digital Practice QR Seal Verifier",
      badge: "Cryptographic Audit",
      desc: "Simulate plan QR verification, PII insurance validity checks, and annual practicing license audits by County Officers.",
      href: "/viewer/seal-verifier",
      icon: "🔒",
    },
    {
      title: "Eurocode Building Risk Calculator",
      badge: "Risk Classes A–E",
      desc: "Calculate structural building risk profile (Classes A–E) and determine mandatory single or dual independent peer review rules (Sec 89).",
      href: "/viewer/risk",
      icon: "⚠️",
    },
    {
      title: "5-Year Career & Licensing Pathfinder",
      badge: "5 Registration Pathways",
      desc: "Interactive career progression roadmap from Student & Candidate to Registered Lead Professional and Accredited Specialist.",
      href: "/viewer/career",
      icon: "🎓",
    }
  ];

  const tier3Legal = [
    {
      title: "Statutory Harmonization Matrix",
      badge: "Cross-Act Audit",
      desc: "Cross-referencing KBERC Bill provisions with County Laws, NCA Act, NEMA EMCA 1999, and PFM Act 2012.",
      href: "/viewer/harmonization",
      icon: "⚖️",
    },
    {
      title: '"Before vs After" Cap 525 Reform Analysis',
      badge: "Legacy Comparison",
      desc: "Side-by-side reform breakdown comparing new KBERC statutory rules against legacy Cap 525 and Cap 530 frameworks.",
      href: "/viewer/reform",
      icon: "🔄",
    },
    {
      title: "5-Bill Comparative Law Study",
      badge: "Legislative Synthesis",
      desc: "Deep comparative legal study analyzing statutory shifts across historical Kenyan built environment legislation.",
      href: "/viewer/comparative-study",
      icon: "📊",
    },
    {
      title: "Multi-Bill Side-by-Side Comparison Matrix",
      badge: "Interactive Matrix",
      desc: "Dynamic side-by-side comparison tool allowing custom filtering across key statutory dimensions.",
      href: "/viewer/compare",
      icon: "⚔️",
    }
  ];

  const tier4Operations = [
    {
      title: "Master Enactment Action Plan",
      badge: "32 Statutory Tasks",
      desc: "Master implementation action plan of 32 statutory tasks assigned across 8 regulatory roles with enactment phase timelines.",
      href: "/viewer/enactment-tasks",
      icon: "📋",
    },
    {
      title: "Institutional Inter-Agency Map",
      badge: "Authority Network",
      desc: "Interactive structural map showing how KBERC, County Desks, ARB, QSRB, EBK, NCA, NEMA, and EPRA connect.",
      href: "/viewer/map",
      icon: "🗺️",
    },
    {
      title: "37-Term Statutory Glossary Dictionary",
      badge: "Legal Dictionary",
      desc: "Dedicated statutory dictionary defining all 37 legal terms enacted under Section 2 of the Bill.",
      href: "/viewer/definitions",
      icon: "📚",
    },
    {
      title: "All Interactive Tools Hub (14 Tools)",
      badge: "Unified Tools Hub",
      desc: "Centralized hub offering instant access to all 14 interactive calculators, verifiers, and stage navigators.",
      href: "/viewer/tools",
      icon: "✨",
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F8FAFC",
      color: "#0F172A",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "48px 24px 96px"
    }}>
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        
        {/* ─── Executive Dark Hero Banner ─────────────────────────────────── */}
        <header style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #7F1D1D 100%)',
          color: '#FFFFFF',
          padding: 'clamp(28px, 5vw, 56px)',
          border: '1px solid #334155',
          marginBottom: '40px',
          boxShadow: '0 10px 30px -5px rgba(0,0,0,0.15)'
        }}>
          {/* Header Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#FCA5A5', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 14px', border: '1px solid rgba(239, 68, 68, 0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              🇰🇪 PROPOSED MASTER CONSENSUS DRAFT BILL, 2026
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', padding: '4px 14px', border: '1px solid rgba(56, 189, 248, 0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              PRACTITIONER ALTERNATIVE TO NA BILL NO. 47 OF 2026
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#4ADE80', background: 'rgba(74, 222, 128, 0.15)', padding: '4px 14px', border: '1px solid rgba(74, 222, 128, 0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              PROPOSED APEX REGULATOR (KBERC)
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 16px 0', lineHeight: 1.15 }}>
            The Built Environment Professions and Practice Bill, 2026
          </h1>
          
          <h2 style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 700, color: '#FCA5A5', margin: '0 0 20px 0', lineHeight: 1.4 }}>
            A Practitioner-Led Master Consensus Alternative Resolving the Contestation Over National Assembly Bill No. 47 of 2026
          </h2>

          <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#CBD5E1', maxWidth: '1080px', margin: '0 0 32px 0', lineHeight: 1.7 }}>
            Formulated by <strong>Arch. Brian Nyagonchong&apos;a</strong> in response to industry-wide feedback and professional association memoranda (ACMK, Architects Alliance, IDAK, TVETA) rejecting BORAQS dominance in National Assembly Bill No. 47 of 2026 — this master draft proposes an <strong>equal 8-College Apex Council (KBERC)</strong>, rotational leadership, independent registration boards, <strong>51% local professional equity</strong> (Sec 45), <strong>Cryptographic Digital QR Practice Seals</strong> (Sec 57), and <strong>Eurocode Risk Peer Reviews</strong> (Sec 89).
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/viewer/read" style={{ background: "#B91C1C", color: "#FFFFFF", padding: "14px 28px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(185,28,28,0.4)", textDecoration: 'none' }}>
              📖 Read Unabridged Proposed Bill
            </Link>
            <Link href="/viewer/interactive" style={{ background: "#1E293B", color: "#FFFFFF", border: "1px solid #475569", padding: "14px 28px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: 'none' }}>
              🏛️ 20 Parts &amp; 14 Schedules Directory
            </Link>
            <Link href="/viewer/building-navigator" style={{ background: "#1E293B", color: "#FFFFFF", border: "1px solid #475569", padding: "14px 28px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: 'none' }}>
              📊 Building Risk Navigator
            </Link>
            <Link href="/viewer/about" style={{ background: "#0284C7", color: "#FFFFFF", padding: "14px 28px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(2,132,199,0.3)", textDecoration: 'none' }}>
              📜 About &amp; Consensus Reform Dossier
            </Link>
          </div>
        </header>

        {/* ─── Factual Legislative Reform Comparison Showcase Box ──────────────── */}
        <section style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #0284C7', padding: '28px', marginBottom: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '12px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '2px' }}>
                ⚖️ LEGISLATIVE REFORM &amp; PARLIAMENTARY CONTEXT
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                Synthesizing Industry Feedback &amp; Resolving Contestation Over NA Bill No. 47 of 2026
              </h2>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669', background: 'rgba(5,150,105,0.1)', padding: '6px 14px', border: '1px solid rgba(5,150,105,0.3)' }}>
              Practitioner Consensus Solution
            </span>
          </div>

          <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
            Following the First Reading of National Assembly Bill No. 47 of 2026 (August 2026), professional groups expressed grave concern over BORAQS-dominated governance and single-seat tokenism. This proposed KBERC Master Consensus Draft resolves the impasse through a balanced multi-disciplinary model:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              {
                title: "1. Colonial Cap 525 (1934)",
                status: "Outdated Legacy Statute",
                color: "#64748B",
                desc: "Limited strictly to Architects and Quantity Surveyors, lacking function protection, digital QR seals, or statutory coverage for CPMs, Landscape, Interior Design, and TVET Cadres."
              },
              {
                title: "2. NA Bill No. 47 of 2026 (Aug 2026)",
                status: "Contested Parliamentary Bill",
                color: "#B91C1C",
                desc: "Subordinates 8 distinct disciplines under a BORAQS-dominated council with 1-seat tokenism per discipline, leading to formal rejection by ACMK, Architects Alliance, and IDAK."
              },
              {
                title: "3. Proposed KBERC Consensus Draft",
                status: "Practitioner Consensus Alternative",
                color: "#059669",
                desc: "Establishes an autonomous, equal 8-College Apex Council with rotational chairing, dedicated statutory registration boards, 51% local equity, and TVET site inspection indexing."
              }
            ].map((hb, hIdx) => (
              <div key={hIdx} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderLeft: `4px solid ${hb.color}`, padding: '16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: hb.color, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  {hb.status}
                </span>
                <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0' }}>
                  {hb.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                  {hb.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {stats.map((st, i) => (
            <div key={i} style={{ background: "#FFFFFF", padding: "20px", borderRadius: 0, border: "1px solid #CBD5E1", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#b91c1c", marginBottom: "4px" }}>{st.value}</div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>{st.label}</div>
            </div>
          ))}
        </div>

        {/* TIER 1: Core Statutory Text & Visual Directory */}
        <section style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", background: "rgba(4,120,87,0.1)", padding: "4px 12px", border: "1px solid rgba(4,120,87,0.3)", textTransform: "uppercase" }}>TIER 1</span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>Core Statutory Text Readers &amp; Visual Directory</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
            {tier1Viewers.map((v, i) => (
              <Link key={i} href={v.href} style={{ textDecoration: "none" }}>
                <div style={{
                  height: "100%", padding: "28px", borderRadius: 0,
                  background: "#FFFFFF", border: "1px solid #CBD5E1",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  transition: "all 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                      <span style={{ fontSize: "32px" }}>{v.icon}</span>
                      <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", background: "rgba(4,120,87,0.1)", padding: "4px 10px", border: "1px solid rgba(4,120,87,0.2)" }}>{v.badge}</span>
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", margin: "0 0 10px 0" }}>{v.title}</h3>
                    <p style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                  </div>
                  <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 800, color: "#b91c1c", textTransform: "uppercase" }}>
                    <span>Launch Interface</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TIER 2: Interactive Practice & Compliance Simulators */}
        <section style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#B45309", background: "rgba(180,83,9,0.1)", padding: "4px 12px", border: "1px solid rgba(180,83,9,0.3)", textTransform: "uppercase" }}>TIER 2</span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>Interactive Practice &amp; Compliance Simulators</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px" }}>
            {tier2Simulators.map((ct, i) => (
              <Link key={i} href={ct.href} style={{ textDecoration: "none" }}>
                <div style={{ height: "100%", padding: "22px", borderRadius: 0, background: "#FFFFFF", border: "1px solid #CBD5E1", transition: "all 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px" }}>{ct.icon}</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#B45309", background: "rgba(180,83,9,0.1)", padding: "3px 8px" }}>{ct.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>{ct.title}</h3>
                  <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{ct.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TIER 3: Legal Harmonization & Reform Intelligence */}
        <section style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#1D4ED8", background: "rgba(29,78,216,0.1)", padding: "4px 12px", border: "1px solid rgba(29,78,216,0.3)", textTransform: "uppercase" }}>TIER 3</span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>Legal Harmonization &amp; Reform Intelligence</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px" }}>
            {tier3Legal.map((m, i) => (
              <Link key={i} href={m.href} style={{ textDecoration: "none" }}>
                <div style={{ height: "100%", padding: "22px", borderRadius: 0, background: "#FFFFFF", border: "1px solid #CBD5E1", transition: "all 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px" }}>{m.icon}</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#1D4ED8", background: "rgba(29,78,216,0.1)", padding: "3px 8px" }}>{m.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>{m.title}</h3>
                  <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TIER 4: Operations, Inter-Agency Maps & Glossary */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#059669", background: "rgba(5,150,105,0.1)", padding: "4px 12px", border: "1px solid rgba(5,150,105,0.3)", textTransform: "uppercase" }}>TIER 4</span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>Operations, Inter-Agency Maps &amp; Glossary</h2>
            </div>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748B" }}>Enactment &amp; Operations</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px" }}>
            {tier4Operations.map((m, i) => (
              <Link key={i} href={m.href} style={{ textDecoration: "none" }}>
                <div style={{ height: "100%", padding: "22px", borderRadius: 0, background: "#FFFFFF", border: "1px solid #CBD5E1", transition: "all 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px" }}>{m.icon}</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#059669", background: "rgba(5,150,105,0.1)", padding: "3px 8px" }}>{m.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>{m.title}</h3>
                  <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Footer Author Accreditation ───────────────────────────────────── */}
        <footer style={{ background: '#0F172A', color: '#F8FAFC', padding: '32px', border: '1px solid #334155', marginTop: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#34D399', background: 'rgba(52,211,153,0.15)', padding: '4px 12px', border: '1px solid rgba(52,211,153,0.3)', textTransform: 'uppercase' }}>
              🏛️ PRINCIPAL LEGISLATIVE AUTHOR &amp; LEAD ARCHITECT
            </span>
            <span style={{ fontSize: '11px', color: '#94A3B8' }}>PROPOSED MASTER CONSENSUS DRAFT 2026</span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#FFFFFF', margin: '0 0 8px 0' }}>Arch. Brian Nyagonchong&apos;a</h3>
          <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, margin: 0, maxWidth: '960px' }}>
            Principal Legislative Author responsible for formulating and drafting this consolidated master Bill from multi-disciplinary industry forum discussions — harmonizing the 3 separate competing draft bills into a single unified statutory framework for public safety, professional practice, and devolved County building regulation.
          </p>
        </footer>

      </div>
    </div>
  );
}
