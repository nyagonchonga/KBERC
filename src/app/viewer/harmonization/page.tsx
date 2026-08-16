'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function StatutoryHarmonizationPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('zoning');

  const harmonizationData: Record<string, {
    topic: string;
    sections: string;
    kbercRole: string;
    otherAct: string;
    otherRole: string;
    harmonization: string;
    color: string;
  }> = {
    zoning: {
      topic: "County Land Use Zoning & Devolved Building Control",
      sections: "Part XVII & Schedule 4",
      kbercRole: "KBERC regulates practitioner licensing, digital QR seals, structural risk classes (Class A–E), and 6-stage site inspection certificates (Forms KBERC-1 to 6).",
      otherAct: "Physical & Land Use Planning Act 2019 / County Governments Act 2012",
      otherRole: "47 County Executive Planning Desks enforce plot coverage ratios, zoning density caps, setbacks, and land use change approvals.",
      harmonization: "County Building Control Desks cannot approve development applications unless designed by KBERC-registered lead professionals with active Cryptographic QR Practice Seals.",
      color: "#b91c1c"
    },
    contractor: {
      topic: "Building Construction & Contractor Licensing Bounds",
      sections: "Part III (Sec 20) & Part IV",
      kbercRole: "KBERC exclusively regulates Design Consultants (Architects, Engineers, QSs, Planners, CPMs, Landscape Architects, Interior Designers, Technologists).",
      otherAct: "National Construction Authority (NCA) Act 2011",
      otherRole: "NCA exclusively regulates Building Contractors (NCA 1 to NCA 8), site safety gear, site artisan registration, and contractor registration classes.",
      harmonization: "Strict legal boundary separation: KBERC governs professional design integrity & QR seals; NCA governs physical contractor execution and site safety compliance.",
      color: "#0284C7"
    },
    environment: {
      topic: "Environmental Impact & Green Building Eco-Audits",
      sections: "Part VIII (Sec 65-80)",
      kbercRole: "KBERC lead designers mandate eco-efficiency standards, rain-harvesting calculations, acoustic controls, and energy performance codes.",
      otherAct: "Environmental Management & Coordination Act (EMCA Cap 387 / NEMA)",
      otherRole: "NEMA conducts Strategic Environmental Assessments (SEA), issues EIA licenses, and monitors effluent disposal.",
      harmonization: "NEMA EIA Licenses must be attached alongside KBERC-sealed structural calculation reports before County Building Permits are activated.",
      color: "#D97706"
    },
    finance: {
      topic: "Public Finance Management & Disaster Relief Fund",
      sections: "Part XVIII (Sec 165-180)",
      kbercRole: "KBERC collects practitioner registration fees, multidisciplinary firm licenses, and the Built Environment Safety Levy.",
      otherAct: "Public Finance Management Act 2012 (PFM Act)",
      otherRole: "National Treasury & Auditor-General audit KBERC annual financial statements and parliamentary appropriations.",
      harmonization: "5% of all KBERC levy revenue is legally ring-fenced into an independently audited Disaster Emergency Relief Fund under PFM Act guidelines.",
      color: "#7C3AED"
    },
    fees: {
      topic: "Statutory Fee Scale Tariffs & Anti-Undercutting",
      sections: "Part XII & First Schedule 12",
      kbercRole: "Enforces the gazetted First Schedule Baseline Scale of Minimum Fees (5.0%–6.5% design fees; KES 10,000–15,000/hr advisory rates).",
      otherAct: "Competition Act Cap 504 & Public Procurement and Asset Disposal Act (PPADA)",
      otherRole: "Competition Authority of Kenya (CAK) & Public Procurement Regulatory Authority (PPRA) oversee public tender awards.",
      harmonization: "Gazetted under statutory public safety exemption, protecting public procurement against predatory fee undercutting that leads to structural compromises.",
      color: "#B45309"
    },
    eurocodes: {
      topic: "Structural Design Codes & Eurocode Risk Classes (A–E)",
      sections: "Part VIII & Fourth Schedule",
      kbercRole: "Classifies building structures into Eurocode Risk Classes A to E and enforces mandatory independent peer reviews for Class D (10+ storeys) & Class E (20+ storeys).",
      otherAct: "Kenya Bureau of Standards (KEBS) & BS EN Eurocode Framework",
      otherRole: "KEBS promulgates national building material testing standards and Eurocode adoption guidelines.",
      harmonization: "KBERC structural engineers must certify Eurocode compliance (BS EN 1990 to 1999) using KEBS accredited testing laboratories.",
      color: "#0D9488"
    },
    appeals: {
      topic: "Judicial Review & Appellate Rights Protections",
      sections: "Part XIII (Sec 115-140)",
      kbercRole: "Establishes the Built Environment Appeals Tribunal as an independent appellate body to resolve licensing disputes within 60 days.",
      otherAct: "Fair Administrative Action Act 2015 & Consumer Protection Act 2012",
      otherRole: "High Court of Kenya maintains judicial review jurisdiction over questions of law.",
      harmonization: "Practitioners and developers have a statutory 60-day right of appeal to the Tribunal against any KBERC Council licensing rejection or County Desk refusal.",
      color: "#E11D48"
    },
    repeal: {
      topic: "Cap 525 Repeal & 12-Month Governance Transition",
      sections: "Part XX (Sec 200-208)",
      kbercRole: "Formally repeals the legacy Architects and Quantity Surveyors Act (Cap 525), establishing separate ARB and QSRB boards.",
      otherAct: "Engineers Act 2011 & Physical and Land Use Planning Act 2019",
      otherRole: "Preserves acquired practitioner rights, existing registrations, and pending disciplinary proceedings during transition.",
      harmonization: "12-month statutory savings window ensures seamless migration of registered BORAQS practitioners into independent ARB and QSRB registers without re-examination.",
      color: "#475569"
    },
    corporate: {
      topic: "51% Local Corporate Ownership & Foreign JV Regulation",
      sections: "Part VII (Sec 55-64)",
      kbercRole: "Mandates that licensed professional corporate consultancies and joint ventures must have at least 51% voting equity held by registered local practitioners.",
      otherAct: "Companies Act 2015 & Investment Promotion Act",
      otherRole: "Registrar of Companies incorporates local and foreign business entities.",
      harmonization: "Foreign consultancies bidding on Kenyan building projects must execute 51% local joint-venture equity agreements registered with KBERC before practicing.",
      color: "#2563EB"
    },
    collapse: {
      topic: "6-Hour Emergency Collapse Audits & Site Cordoning",
      sections: "Part XVI (Sec 168-175)",
      kbercRole: "Deploys 6-Hour Emergency Forensic Audit Teams upon structural failure, cordoning evidence and issuing public audit reports within 14 days.",
      otherAct: "National Disaster Management Authority (NDMA) & Penal Code",
      otherRole: "Police Service and Disaster Management agencies coordinate search-and-rescue operations.",
      harmonization: "KBERC forensic findings are legally admissible in criminal prosecution against unaccredited developers, seal-lenders, or negligent site supervisors.",
      color: "#DC2626"
    }
  };

  const currentData = harmonizationData[selectedTopic] || harmonizationData.zoning;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F8FAFC",
      color: "#0F172A",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "40px 32px 96px"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; border-radius: 0px !important; }
        a { text-decoration: none; }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Navigation Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748B" }}>
            <Link href="/" style={{ color: "#64748B" }}>Home</Link>
            <span>›</span>
            <Link href="/viewer" style={{ color: "#64748B" }}>Viewer Portal</Link>
            <span>›</span>
            <span style={{ color: "#b91c1c", fontWeight: 700 }}>100% Statutory Harmonization Matrix</span>
          </div>
          <Link href="/viewer/read" style={{
            padding: "8px 16px", borderRadius: "0px", fontSize: "12px", fontWeight: 800,
            background: "#b91c1c", color: "#FFFFFF", letterSpacing: "0.05em", textTransform: "uppercase"
          }}>
            📖 Read Unabridged Bill
          </Link>
        </nav>

        {/* Hero Section */}
        <header style={{ marginBottom: "40px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(4,120,87,0.1)", border: "1px solid rgba(4,120,87,0.25)", padding: "6px 18px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              100% EXHAUSTIVE STATUTORY HARMONIZATION • BILL 2026
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", margin: "0 0 14px 0", lineHeight: 1.15 }}>
            Statutory Cross-Referencing &amp; Legal Harmonization Matrix
          </h1>

          <p style={{ fontSize: "16px", color: "#334155", maxWidth: "920px", margin: "0 auto", lineHeight: 1.7 }}>
            Comprehensive 10-dimension legal matrix detailing how <strong>The Built Environment Professions &amp; Practice Bill 2026</strong> harmonizes with County Laws, NCA Act, NEMA (EMCA), PFM Act 2012, Competition Law, and Eurocode Standards.
          </p>
        </header>

        {/* Topic Selector Tabs Grid */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ fontSize: "11px", fontWeight: 900, color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px", textAlign: "center" }}>
            SELECT STATUTORY HARMONIZATION DIMENSION (10 OF 10 DIMENSIONS COVERED)
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
            {[
              { id: "zoning", label: "1. County Zoning & Building Desks", icon: "🏛️" },
              { id: "contractor", label: "2. NCA Contractor Bounds", icon: "🏗️" },
              { id: "environment", label: "3. NEMA Environmental Audits", icon: "🌿" },
              { id: "finance", label: "4. PFM Act Financial Oversight", icon: "💰" },
              { id: "fees", label: "5. Mandatory Minimum Fee Scales", icon: "⚖️" },
              { id: "eurocodes", label: "6. Eurocode Risk Classes (A–E)", icon: "📐" },
              { id: "appeals", label: "7. Judicial Appeals Tribunal", icon: "⚖️" },
              { id: "repeal", label: "8. Cap 525 Repeal & Transition", icon: "🔄" },
              { id: "corporate", label: "9. 51% Local Firm Equity", icon: "💼" },
              { id: "collapse", label: "10. 6-Hour Collapse Audits", icon: "🚨" }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTopic(t.id)}
                style={{
                  padding: "12px 14px",
                  fontSize: "12px",
                  fontWeight: 800,
                  textAlign: "left",
                  background: selectedTopic === t.id ? "#b91c1c" : "#FFFFFF",
                  color: selectedTopic === t.id ? "#FFFFFF" : "#0F172A",
                  border: selectedTopic === t.id ? "2px solid #b91c1c" : "1px solid #CBD5E1",
                  borderLeft: selectedTopic === t.id ? "6px solid #022C22" : "4px solid #CBD5E1",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                <span style={{ marginRight: "6px" }}>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Harmonization Display Panel */}
        <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: `6px solid ${currentData.color}`, padding: "36px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 900, color: currentData.color, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "4px" }}>
                STATUTORY HARMONIZATION DIMENSION • {currentData.sections}
              </span>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#0F172A", margin: 0 }}>{currentData.topic}</h2>
            </div>
            
            <span style={{ fontSize: "12px", fontWeight: 800, color: currentData.color, background: `${currentData.color}15`, padding: "6px 16px", border: `1px solid ${currentData.color}30` }}>
              {currentData.sections} Enactment
            </span>
          </div>

          {/* Comparative Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "28px" }}>
            
            {/* KBERC Mandate */}
            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderTop: "4px solid #b91c1c", padding: "24px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "6px" }}>
                KBERC BILL 2026 STATUTORY MANDATE
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#0F172A", margin: "0 0 12px 0" }}>Design &amp; Professional Practice Scope</h3>
              <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{currentData.kbercRole}</p>
            </div>

            {/* External Legislation Mandate */}
            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderTop: `4px solid ${currentData.color}`, padding: "24px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: currentData.color, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "6px" }}>
                {currentData.otherAct.toUpperCase()}
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#0F172A", margin: "0 0 12px 0" }}>External Agency &amp; Devolved Scope</h3>
              <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{currentData.otherRole}</p>
            </div>

          </div>

          {/* Statutory Harmonization Synthesis Card */}
          <div style={{ background: "rgba(4,120,87,0.06)", border: "1px solid rgba(4,120,87,0.25)", borderLeft: "6px solid #b91c1c", padding: "24px 28px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "6px" }}>
              💡 LEGAL HARMONIZATION SYNTHESIS &amp; OPERATIONAL PROTOCOL
            </span>
            <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#0F172A", margin: "0 0 8px 0" }}>{currentData.topic}</h3>
            <p style={{ fontSize: "14px", color: "#0F172A", lineHeight: 1.8, margin: 0, fontWeight: 600 }}>{currentData.harmonization}</p>
          </div>

        </div>

      </div>
    </div>
  );
}
