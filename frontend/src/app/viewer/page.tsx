'use client';

import React from 'react';
import Link from 'next/link';
import { billData } from './data';

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
        
        {/* Top Header & Status Badge */}
        <header style={{ marginBottom: "48px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(4,120,87,0.1)", border: "1px solid rgba(4,120,87,0.25)", padding: "6px 18px", borderRadius: 0, marginBottom: "20px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: 0, background: "#b91c1c", display: "inline-block" }}></span>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              {billData?.metadata?.status || "KENYA NATIONAL ASSEMBLY • CONSOLIDATED CONSENSUS MASTER BILL 2026"}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em", margin: "0 0 16px 0", lineHeight: 1.15 }}>
            The Built Environment Professions &amp; Practice Bill 2026
          </h1>

          <p style={{ fontSize: "16px", color: "#334155", maxWidth: "900px", margin: "0 auto", lineHeight: 1.7 }}>
            A landmark consensus Bill created directly from public feedback, professional association memoranda, and institutional reviews of legacy legislation — consolidating regulation of all 8 built environment professions (Architects, Engineers, QSs, Planners, Landscape Architects, Interior Designers, CPMs &amp; Technologists) under a unified public-safety statutory framework.
          </p>

          {/* Quick Nav Action Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
            <Link href="/viewer/read" style={{ background: "#b91c1c", color: "#FFFFFF", padding: "12px 24px", borderRadius: 0, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(4,120,87,0.25)" }}>
              📖 Read Unabridged Bill
            </Link>
            <Link href="/viewer/interactive" style={{ background: "#FFFFFF", color: "#0F172A", border: "1px solid #CBD5E1", padding: "12px 24px", borderRadius: 0, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              🏛️ 20 Parts &amp; 13 Schedules Directory
            </Link>
            <Link href="/viewer/visual-audit" style={{ background: "#FFFFFF", color: "#0F172A", border: "1px solid #CBD5E1", padding: "12px 24px", borderRadius: 0, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              📊 20 Master Visual Instruments
            </Link>
            <Link href="/viewer/tools" style={{ background: "#FFFFFF", color: "#0F172A", border: "1px solid #CBD5E1", padding: "12px 24px", borderRadius: 0, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              ✨ All Interactive Tools (14)
            </Link>
            <Link href="/viewer/about" style={{ background: "#0284C7", color: "#FFFFFF", padding: "12px 24px", borderRadius: 0, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(2,132,199,0.25)" }}>
              ℹ️ About Bill &amp; Author
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
          {stats.map((st, i) => (
            <div key={i} style={{ background: "#FFFFFF", padding: "20px", borderRadius: 0, border: "1px solid #CBD5E1", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "30px", fontWeight: 900, color: "#b91c1c", marginBottom: "4px" }}>{st.value}</div>
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

        {/* TIER 4: Enactment Action Plan, Maps & Dictionary */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#6B21A8", background: "rgba(107,33,168,0.1)", padding: "4px 12px", border: "1px solid rgba(107,33,168,0.3)", textTransform: "uppercase" }}>TIER 4</span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>Enactment Action Plan, Maps &amp; Dictionary</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px" }}>
            {tier4Operations.map((m, i) => (
              <Link key={i} href={m.href} style={{ textDecoration: "none" }}>
                <div style={{ height: "100%", padding: "22px", borderRadius: 0, background: "#FFFFFF", border: "1px solid #CBD5E1", transition: "all 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px" }}>{m.icon}</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#6B21A8", background: "rgba(107,33,168,0.1)", padding: "3px 8px" }}>{m.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>{m.title}</h3>
                  <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
