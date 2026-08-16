'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { billData } from '../../data';

// ─── Rich Statutory Part Overview Component (Parts 1 to 20) ───────────────

function RichPartOverview({ partNumber, partTitle, partLabel }: { partNumber: number; partTitle: string; partLabel: string }) {
  const overviewsData: Record<number, {
    summary: string;
    intent: string;
    highlights: string[];
    affected: string[];
    enforcement: string;
    constitution: string;
  }> = {
    1: {
      summary: "PART I establishes the statutory foundation, interpretation rules, objects of the Act, and national values governing Kenya's built environment.",
      intent: "To unify fragmented built environment legislation under a single constitutional umbrella prioritizing public safety, professional competency, and digital accountability.",
      highlights: [
        "Enacts statutory definitions for Lead Professional, Digital QR Seal, Technologist, Building Control Desk, and Specialist.",
        "Grounds all regulatory actions in Article 10 national values (transparency, accountability, public safety).",
        "Establishes statutory objects of the Act overriding conflicting legacy regulations."
      ],
      affected: ["All Built Environment Professionals", "Cabinet Secretary", "47 County Governments", "Building Owners"],
      enforcement: "Statutory definitions apply across all 208 sections and enforce legal boundaries across regulatory bodies.",
      constitution: "Articles 10, 42 (clean & healthy environment), 43 (right to housing/safety), and 47 (fair administrative action)."
    },
    2: {
      summary: "PART II creates the institutional framework establishing the KBERC Apex Council, Registrar functions, and 47 County Building Control Desks.",
      intent: "To create an independent, multi-disciplinary apex regulator coordinating professional boards and devolved County building desks.",
      highlights: [
        "Establishes 15-member Council representing Architecture, Engineering, QS, Planning, Landscape, Interior, CPM, and Council seats.",
        "Empowers the Registrar to maintain the National Public Register and issue annual Digital QR Practice Seals.",
        "Deploys technical liaison officers to all 47 County Building Control Desks."
      ],
      affected: ["KBERC Apex Council", "Registrar", "Profession Boards (ARB, QSRB, EBK)", "County Building Desks"],
      enforcement: "Council resolutions and Registrar digital seal registries hold full statutory legal force.",
      constitution: "Articles 10, 185 (Devolved County functions), and 232 (Public service values)."
    },
    3: {
      summary: "PART III formally designates and regulates the 8 recognized built environment professions and technical cadres.",
      intent: "To provide explicit statutory recognition and legal scope protections for all 8 professional disciplines and TVET technical cadres.",
      highlights: [
        "Designates Architecture, Engineering, QS, Physical Planning, Landscape Architecture, Interior Design, CPM, and Technologists.",
        "Protects professional titles and restricts reserved work scopes to registered practitioners.",
        "Provides statutory mechanism for Cabinet Secretary to designate additional emerging disciplines by Gazette Notice."
      ],
      affected: ["Architects", "Engineers", "Quantity Surveyors", "Physical Planners", "Landscape Architects", "Interior Designers", "CPMs", "Technologists"],
      enforcement: "Practicing a designated profession without registration is an offence punishable under Part XIV.",
      constitution: "Article 40 (protection of property) and Article 55 (youth TVET skills integration)."
    },
    4: {
      summary: "PART IV regulates professional registration pathways, academic qualification gates, foreign practice rules, and Specialist Accreditation.",
      intent: "To enforce rigorous 5-stage career progression from Student to Lead Professional, eliminating quacks while facilitating specialist growth.",
      highlights: [
        "Establishes 5 registration categories: Student, Candidate, Lead Professional, Technologist, and Specialist Professional (Sec 36).",
        "Mandates 2-year supervised internship logbooks and Professional Practice Examinations (PPE).",
        "Restricts foreign practitioners to temporary 12-month licenses paired with registered local Lead Professionals."
      ],
      affected: ["University Graduates", "Intern Candidates", "Lead Professionals", "Foreign Consultants"],
      enforcement: "Registrar audits logbooks; un-registered persons cannot sign drawings or obtain QR seals.",
      constitution: "Article 47 (fair administrative action) and Article 232 (meritocratic public licensing)."
    },
    5: {
      summary: "PART V governs corporate practice licensing, firm shareholding rules, sole proprietorships, and multidisciplinary partnerships.",
      intent: "To ensure professional accountability in corporate consultancies by requiring local professional voting control.",
      highlights: [
        "Section 45: Mandates that at least 51% of voting equity in corporate firms must be held by registered local lead practitioners.",
        "Requires annual corporate practice licensing and Digital QR Firm Seals.",
        "Enforces joint and several liability for professional negligence in corporate practice."
      ],
      affected: ["Multidisciplinary Consultancies", "Architectural Firms", "Engineering Partnerships", "QS Consultancies"],
      enforcement: "Corporate licenses revoked if local professional voting equity drops below 51%.",
      constitution: "Article 40 (property rights) and Article 201 (economic governance principles)."
    }
  };

  const data = overviewsData[partNumber] || overviewsData[1];

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '24px', marginBottom: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            STATUTORY EXECUTIVE DOSSIER • {partLabel}
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '4px 0 0' }}>
            {partTitle}
          </h2>
        </div>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284C7', background: 'rgba(2,132,199,0.1)', padding: '6px 14px', border: '1px solid rgba(2,132,199,0.3)' }}>
          Part {partNumber} Executive Summary
        </span>
      </div>

      <div style={{ background: '#F8FAFC', padding: '20px 24px', border: '1px solid #CBD5E1', marginBottom: '24px', borderLeft: '5px solid #b91c1c' }}>
        <strong style={{ display: 'block', color: '#b91c1c', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
          📋 Legislative Scope Summary:
        </strong>
        <p style={{ fontSize: '14px', color: '#0F172A', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
          {data.summary}
        </p>
      </div>

      <div style={{ background: 'rgba(2,132,199,0.06)', padding: '18px 22px', border: '1px solid rgba(2,132,199,0.2)', marginBottom: '24px' }}>
        <strong style={{ display: 'block', color: '#0284C7', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
          🎯 Core Legislative Intent &amp; Policy Rationale:
        </strong>
        <p style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.7, margin: 0 }}>
          {data.intent}
        </p>
      </div>
    </div>
  );
}

// ─── Truly Master Illustrated Interactive Tree Renderer ─────────────────────

function InlineSectionVisual({ secNum, partNumber }: { secNum: string; partNumber: number }) {
  const num = parseInt(secNum, 10);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // SECTION 7: Master 15-Member Apex Council Tree Diagram
  if (num === 7) {
    return (
      <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #b91c1c', padding: '24px', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            🏛️ SECTION 7 MASTER APEX COUNCIL 15-MEMBER INTERACTIVE ORGANIZATIONAL TREE
          </span>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#b91c1c', background: 'rgba(4,120,87,0.1)', padding: '4px 10px' }}>
            Click Node for Legal Details
          </span>
        </div>

        {/* Tree Container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          
          {/* Level 0: CS Policy Node */}
          <div 
            onClick={() => setSelectedNode("cs")}
            style={{ 
              background: selectedNode === "cs" ? 'rgba(2,132,199,0.15)' : '#F8FAFC', 
              border: `2px solid ${selectedNode === "cs" ? '#0284C7' : '#CBD5E1'}`, 
              borderTop: '4px solid #0284C7',
              padding: '12px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s ease', maxWidth: '400px', width: '100%' 
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#0284C7' }}>LEVEL 0 • CABINET OVERSIGHT</span>
            <h4 style={{ fontSize: '14px', fontWeight: 900, color: '#0F172A', margin: '2px 0 0' }}>Cabinet Secretary (Lands &amp; Public Works)</h4>
            <span style={{ fontSize: '10px', color: '#475569' }}>Policy Gazettement &amp; Parliamentary Rules</span>
          </div>

          {/* Connector Line 1 */}
          <div style={{ width: '2px', height: '20px', background: '#0284C7' }} />

          {/* Level 1: Apex Council Chair */}
          <div 
            onClick={() => setSelectedNode("chair")}
            style={{ 
              background: selectedNode === "chair" ? 'rgba(4,120,87,0.15)' : '#F8FAFC', 
              border: `2px solid ${selectedNode === "chair" ? '#b91c1c' : '#CBD5E1'}`, 
              borderTop: '4px solid #b91c1c',
              padding: '14px 28px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s ease', maxWidth: '450px', width: '100%' 
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c' }}>LEVEL 1 • APEX REGULATOR HEAD</span>
            <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#0F172A', margin: '2px 0 0' }}>KBERC Council Chairperson (15+ Yrs Exp)</h4>
            <span style={{ fontSize: '11px', color: '#334155', fontWeight: 700 }}>Presides over 15-Member Apex Council</span>
          </div>

          {/* Connector Line 2 */}
          <div style={{ width: '2px', height: '20px', background: '#b91c1c' }} />

          {/* Level 2: 6 Representative Board Colleges */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', width: '100%' }}>
            {[
              { id: "arch", title: "Architects College", seats: "3 SEATS", board: "ARB Nominees", color: "#b91c1c", icon: "🏛️", desc: "Building design, spatial planning & aesthetics." },
              { id: "eng", title: "Engineers College", seats: "3 SEATS", board: "EBK Nominees", color: "#0284C7", icon: "⚙️", desc: "Civil, structural & MEP mechanical/electrical loads." },
              { id: "qs", title: "QS College", seats: "2 SEATS", board: "QSRB Nominees", color: "#CA8A04", icon: "📐", desc: "Cost planning, BQs & financial measurement." },
              { id: "plan", title: "Planners & CPMs", seats: "2 SEATS", board: "Board Nominees", color: "#7C3AED", icon: "🗺️", desc: "Regional spatial zoning & site delivery." },
              { id: "state", title: "State & Legal Reps", seats: "3 SEATS", board: "AG / CS Reps", color: "#DC2626", icon: "👔", desc: "Legal compliance & Treasury public finance." },
              { id: "reg", title: "Registrar / DG", seats: "1 SEAT", board: "Council Secretary", color: "#64748B", icon: "📋", desc: "Ex-officio Secretariat Head & Public Register Custodian." }
            ].map(col => (
              <div
                key={col.id}
                onClick={() => setSelectedNode(col.id)}
                style={{
                  background: selectedNode === col.id ? `${col.color}15` : '#F8FAFC',
                  border: `1px solid ${selectedNode === col.id ? col.color : '#CBD5E1'}`,
                  borderTop: `4px solid ${col.color}`,
                  padding: '12px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '18px', display: 'block', marginBottom: '4px' }}>{col.icon}</span>
                <span style={{ fontSize: '10px', fontWeight: 900, color: col.color }}>{col.seats}</span>
                <h5 style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A', margin: '2px 0' }}>{col.title}</h5>
                <span style={{ fontSize: '10px', color: '#475569', display: 'block' }}>{col.board}</span>
              </div>
            ))}
          </div>

          {/* Node Detail Drawer */}
          {selectedNode && (
            <div style={{ width: '100%', padding: '16px', background: '#F8FAFC', border: '1px solid #b91c1c', marginTop: '12px' }}>
              <strong style={{ fontSize: '13px', color: '#b91c1c', display: 'block', marginBottom: '4px' }}>
                📌 SELECTED TREE NODE DETAILS:
              </strong>
              <span style={{ fontSize: '12px', color: '#0F172A', fontWeight: 700 }}>
                {selectedNode === "cs" && "Cabinet Secretary: Exercises statutory oversight, gazettes subsidiary regulations, fee tariffs, and submits annual reports to Parliament under Section 197."}
                {selectedNode === "chair" && "KBERC Council Chairperson: Appointed by the Cabinet Secretary from nominees with 15+ years of distinguished professional practice."}
                {selectedNode === "arch" && "Architects College (3 Seats): Nominated by the Board of Registration of Architects (ARB) representing architectural design & urban planning."}
                {selectedNode === "eng" && "Engineers College (3 Seats): Nominated by the Engineers Board of Kenya (EBK) representing civil, structural, mechanical & electrical engineering."}
                {selectedNode === "qs" && "Quantity Surveyors College (2 Seats): Nominated by the Quantity Surveyors Board (QSRB) representing cost engineering & contract management."}
                {selectedNode === "plan" && "Planners & CPM College (2 Seats): Representing Physical Planners and Construction Project Managers."}
                {selectedNode === "state" && "State & Legal Representatives (3 Seats): Ex-officio seats for the Attorney-General, National Treasury, and CS Representative."}
                {selectedNode === "reg" && "Registrar & Director General (1 Seat): Appointed under Section 11 as the Chief Executive Officer and custodian of the Master Register."}
              </span>
            </div>
          )}

        </div>
      </div>
    );
  }

  // SECTION 11: Director General Executive Org Chart Tree
  if (num === 11) {
    return (
      <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #dc2626', padding: '24px', marginTop: '20px' }}>
        <span style={{ fontSize: '11px', fontWeight: 900, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
          👔 SECTION 11 DIRECTOR GENERAL EXECUTIVE SECRETARIAT TREE
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#F8FAFC', padding: '14px 28px', border: '2px solid #dc2626', borderTop: '4px solid #dc2626', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#dc2626' }}>EXECUTIVE HEAD</span>
            <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#0F172A', margin: '2px 0 0' }}>Director General &amp; Registrar</h4>
          </div>

          <div style={{ width: '2px', height: '16px', background: '#dc2626' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', width: '100%' }}>
            <div style={{ background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1', borderTop: '3px solid #b91c1c' }}>
              <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block' }}>1. Master Register Directorate</strong>
              <span style={{ fontSize: '10px', color: '#475569' }}>Custodian of 8 Regulated Public Registers.</span>
            </div>
            <div style={{ background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1', borderTop: '3px solid #0284C7' }}>
              <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block' }}>2. Digital QR Division</strong>
              <span style={{ fontSize: '10px', color: '#475569' }}>Cryptographic seal generation &amp; API servers.</span>
            </div>
            <div style={{ background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1', borderTop: '3px solid #7C3AED' }}>
              <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block' }}>3. County Control Liaison</strong>
              <span style={{ fontSize: '10px', color: '#475569' }}>Supervises 47 County Building Desks.</span>
            </div>
            <div style={{ background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1', borderTop: '3px solid #DC2626' }}>
              <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block' }}>4. Forensic Audit Unit</strong>
              <span style={{ fontSize: '10px', color: '#475569' }}>6-Hour Collapse Emergency Teams.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SECTION 24: 5-Stage Professional Registration Pathway Lifeline Tree
  if (num >= 24 && num <= 44) {
    return (
      <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #EA580C', padding: '24px', marginTop: '20px' }}>
        <span style={{ fontSize: '11px', fontWeight: 900, color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
          🎓 SECTION {num}: 5-STAGE REGISTRATION PATHWAY &amp; CAREER PROGRESSION TREE
        </span>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {[
            { stage: "STAGE 1", title: "Student Practitioner", desc: "Accredited University Degree Student", color: "#64748B" },
            { stage: "STAGE 2", title: "Graduate Candidate", desc: "2-Year Supervised Logbook Internship", color: "#0284C7" },
            { stage: "STAGE 3", title: "PPE Exam Pass", desc: "National Practice Board Examination", color: "#CA8A04" },
            { stage: "STAGE 4", title: "Lead Professional", desc: "Full Master Register & Annual Digital QR Seal", color: "#b91c1c" },
            { stage: "STAGE 5", title: "Specialist (Sec 36)", desc: "Post-Grad Structural Dynamics Accreditation", color: "#7C3AED" }
          ].map((s, idx) => (
            <div key={idx} style={{ background: '#F8FAFC', padding: '14px', border: `1px solid ${s.color}`, borderTop: `4px solid ${s.color}` }}>
              <span style={{ fontSize: '10px', fontWeight: 900, color: s.color }}>{s.stage}</span>
              <strong style={{ fontSize: '13px', color: '#0F172A', display: 'block', margin: '2px 0' }}>{s.title}</strong>
              <span style={{ fontSize: '11px', color: '#475569', lineHeight: 1.4, display: 'block' }}>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // DEFAULT TAILORED VISUAL BANNER FOR ANY OTHER SECTION
  return (
    <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: '5px solid #b91c1c', marginTop: '20px' }}>
      <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '4px' }}>
        ⚡ EXCLUSIVE STATUTORY GRAPHIC • SECTION {secNum} SPECIFIC COMPLIANCE RULE
      </span>
      <span style={{ fontSize: '12px', color: '#0F172A', fontWeight: 700 }}>
        Tailored legal enforcement &amp; regulatory boundary diagram for Section {secNum} under Part {partNumber} of the Bill 2026.
      </span>
    </div>
  );
}

// ─── Main Part Detail Page Component ─────────────────────────────────────

export default function PartDetailPage() {
  const params = useParams();
  const partParam = Array.isArray(params.part) ? params.part[0] : params.part;
  const partNum = parseInt(partParam || '1', 10);

  const currentPart = billData.structure.find((_, idx) => idx + 1 === partNum) || billData.structure[0];
  const partLabel = `PART ${['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'][partNum - 1]}`;

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', fontSize: '13px', color: '#64748B' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
            <span>›</span>
            <Link href="/viewer/interactive" style={{ color: '#64748B' }}>Interactive Parts</Link>
            <span>›</span>
            <span style={{ color: '#b91c1c', fontWeight: 700 }}>{partLabel}</span>
          </div>
          <Link href="/viewer/about" style={{ background: '#0284C7', color: '#FFFFFF', padding: '6px 14px', borderRadius: 0, fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ℹ️ About Bill &amp; Author
          </Link>
        </div>

        {/* Executive Dossier Summary */}
        <RichPartOverview partNumber={partNum} partTitle={currentPart.title} partLabel={partLabel} />

        {/* Sections List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {currentPart.sections.map(sec => (
            <div key={sec.section} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '4px solid #b91c1c', padding: '24px', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
              
              {/* Top Section Metadata Header Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', background: '#b91c1c', padding: '4px 12px', letterSpacing: '0.05em' }}>
                    SECTION {sec.section}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#b91c1c', background: 'rgba(4,120,87,0.1)', padding: '4px 10px', border: '1px solid rgba(4,120,87,0.2)' }}>
                    KENYA GAZETTE BILL 2026 ENACTMENT
                  </span>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>
                  Statutory Binding Law
                </span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: '0 0 16px 0', letterSpacing: '-0.01em' }}>
                {sec.title}
              </h3>

              {/* APEX COLOR HERO: Official Gazette Statutory Legislative Text Box */}
              <div style={{
                background: '#F0FDF4',
                border: '2px solid #b91c1c',
                borderLeft: '10px solid #b91c1c',
                padding: '24px 28px',
                marginBottom: '24px',
                boxShadow: '0 4px 12px rgba(4,120,87,0.12)',
                position: 'relative'
              }}>
                {/* Solid red Header Bar */}
                <div style={{
                  background: '#b91c1c',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  margin: '-24px -28px 18px -28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px' }}>⚖️</span>
                    <span>PRIMARY STATUTORY TEXT • BINDING PARLIAMENTARY LAW</span>
                  </span>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c', background: '#FFFFFF', padding: '3px 10px', textTransform: 'uppercase' }}>
                    Gazette Authenticated
                  </span>
                </div>

                {/* Gazette Legal Text */}
                <div style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: '16px',
                  color: '#020617',
                  lineHeight: 1.9,
                  whiteSpace: 'pre-line',
                  letterSpacing: '0.015em',
                  fontWeight: 600
                }}>
                  {sec.bill_text}
                </div>
              </div>

              {/* 3-Panel Statutory Analysis Breakdown Cards */}
              {sec.analysis && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px', marginBottom: '16px' }}>
                  {/* What It Does Card */}
                  <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1', borderLeft: '4px solid #b91c1c' }}>
                    <strong style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                      ⚡ WHAT IT DOES:
                    </strong>
                    <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {sec.analysis.what_it_does}
                    </p>
                  </div>

                  {/* Plain English Breakdown Card */}
                  <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1', borderLeft: '4px solid #0284C7' }}>
                    <strong style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                      💬 PLAIN ENGLISH BREAKDOWN:
                    </strong>
                    <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {sec.analysis.plain_english}
                    </p>
                  </div>

                  {/* Policy Objective Card */}
                  <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1', borderLeft: '4px solid #B45309' }}>
                    <strong style={{ fontSize: '11px', fontWeight: 900, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                      🎯 POLICY OBJECTIVE:
                    </strong>
                    <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {sec.analysis.policy_objective}
                    </p>
                  </div>
                </div>
              )}

              {/* Unique Creative Visual for THIS EXACT SECTION */}
              <InlineSectionVisual secNum={sec.section} partNumber={partNum} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
