'use client';

import { useState } from 'react';
import Link from 'next/link';
import { billData } from '../data';

/* ─── Exhaustive Authoritative Part Descriptions ────────────────────────── */
const RICH_PART_DESCRIPTIONS: Record<number, string> = {
  1: "Sections 1–5: Establishes the short title, gazetted commencement dates, 37 statutory definitions, public safety objectives, Article 185 devolution compliance, and guiding national principles.",
  2: "Sections 6–13: Formally establishes the 15-member Kenya Built Environment Regulatory Council (KBERC) Apex Council, Cabinet Secretary oversight, corporate capacity, and Registrar office.",
  3: "Sections 14–23: Defines technical design scopes for all 8 regulated disciplines: Architecture, Engineering, Quantity Surveying, Planning, Landscape Arch, Interior Design, CPM & Technology.",
  4: "Sections 24–44: Governs the 5-tier professional registration pathway (Student to Specialist), accreditation criteria, annual practicing licenses, and Digital QR Seal issuance.",
  5: "Sections 45–52: Mandates the 51% local professional voting equity rule for corporate firms (Sec 45), national register publication, and branch office compliance rules.",
  6: "Sections 53–64: Enacts mandatory annual Practicing Certificates, Professional Indemnity Insurance (PII) cover tiers (Class A–E), and Cryptographic Digital Practice Seals.",
  7: "Sections 65–76: Establishes the Gazetted Baseline Scale of Minimum Fees (Schedule 12), prohibition of fee undercutting, percentage design fees, and advisory hourly tariffs.",
  8: "Sections 77–88: Mandates discipline-specific Registration Boards (Architects Board ARB, Quantity Surveyors Board QSRB, Engineers Board EBK) for exams & peer reviews.",
  9: "Sections 89–105: Enacts Eurocode Building Risk Classification (Classes A to E), mandating single independent peer reviews for Class D and dual specialist peer reviews for Class E.",
  10: "Sections 106–117: Mandates 6-stage site inspection sign-off certificates (Forms KBERC-1 to 6) processed through 47 County Building Control Desks prior to Certificate of Occupancy.",
  11: "Sections 118–127: Governs professional misconduct inquiries, disciplinary committees, seal revocation, suspension, and statutory fines up to KES 5,000,000.",
  12: "Sections 128–137: Formally establishes the Built Environment Appeals Tribunal, High Court jurisdiction, statutory appeal procedures, and stay of execution rules.",
  13: "Sections 138–147: Manages KBERC revenue funds, annual parliamentary budgets, PFM Act 2012 audits, regulatory levies, and the Disaster Emergency Relief Fund.",
  14: "Sections 148–155: Governs post-graduate specialist accreditation under Section 36 for high-risk structural dynamics, deep foundation geotechnical, and acoustic engineering.",
  15: "Sections 156–167: Enacts statutory criminal offences for illegal un-licensed practice, seal lending, corporate director liability, and imprisonment terms up to 5 years.",
  16: "Sections 168–175: Establishes the 6-Hour Emergency Collapse Forensic Audit Protocol (Section 168), site evidence cordoning, and public failure disclosure reports.",
  17: "Sections 176–185: Governs Cabinet Secretary rulemaking powers, Gazette notices, immunity from personal liability, inter-agency matrices, and legal service of notices.",
  18: "Sections 186–195: Manages Cap 525 repeal, board register migration (BORAQS ➔ ARB & QSRB), preservation of accrued practitioner rights, and 12-month transition window.",
  19: "Sections 196–199: Governance charters and operational charters for discipline-specific registration boards, exam syllabus approval, and continuous professional development (CPD).",
  20: "Sections 200–208: Formal enactment of Schedules 1 to 13 as integral statutory instruments of the Act, defining fee tariffs, tribunal rules, and stage inspection forms."
};

const RICH_SCHEDULE_DESCRIPTIONS: Record<number, string> = {
  1: "Schedule 1: KBERC Apex Council meeting protocols, quorum rules, voting majorities, and conflict of interest disclosures.",
  2: "Schedule 2: Built Environment Appeals Tribunal rules of procedure, evidence rules, filing fees, and judgment timelines.",
  3: "Schedule 3: 8 Regulated Built Environment Disciplines technical competency matrix and design boundary allocations.",
  4: "Schedule 4: Eurocode Building Risk Classification Matrix (Classes A to E: Single-family to 20+ Storey Specialist Structures).",
  5: "Schedule 5: Professional Competency Assessment Standards & Professional Practice Examination (PPE) Syllabi.",
  6: "Schedule 6: Annual Practicing Certificate application forms, renewal criteria, and digital seal verification rules.",
  7: "Schedule 7: Professional Indemnity Insurance (PII) mandatory cover tiers (Class A: KES 20M to Class E: KES 200M+).",
  8: "Schedule 8: Multidisciplinary Corporate Firm 51% local practitioner ownership declaration and voting equity compliance forms.",
  9: "Schedule 9: Code of Professional Conduct, ethical practice guidelines, and disciplinary penalty scale tariffs.",
  10: "Schedule 10: 6-Stage Site Inspection Certificate Forms (Forms KBERC-1 to 6) for County Building Control Desk sign-offs.",
  11: "Schedule 11: 6-Hour Emergency Collapse Forensic Audit Team dispatch guidelines, evidence cordoning, and lab testing.",
  12: "Schedule 12: Baseline Scale of Minimum Fees Framework (5.0%–6.5% percentage rates & KES 10,000–15,000/hr advisory tariffs).",
  13: "Schedule 13: Discipline Registration Boards Governance Charter (ARB, QSRB, EBK) for board elections and registrar duties."
};

/* ─── Part colour palette ─────────────────────────────────────────────── */
const PALETTE = [
  { from: '#64748B', to: '#475569' },
  { from: '#b91c1c', to: '#dc2626' },
  { from: '#0284C7', to: '#0891B2' },
  { from: '#D97706', to: '#EA580C' },
  { from: '#B91C1C', to: '#DC2626' },
  { from: '#7C3AED', to: '#9333EA' },
  { from: '#1D4ED8', to: '#2563EB' },
  { from: '#B45309', to: '#CA8A04' },
  { from: '#4F46E5', to: '#4338CA' },
  { from: '#BE185D', to: '#DB2777' },
  { from: '#0D9488', to: '#0F766E' },
  { from: '#D97706', to: '#B45309' },
  { from: '#65A30D', to: '#4D7C0F' },
  { from: '#6B21A8', to: '#7C3AED' },
  { from: '#E11D48', to: '#BE123C' },
  { from: '#0284C7', to: '#0369A1' },
  { from: '#C026D3', to: '#A21CAF' },
  { from: '#57534E', to: '#44403C' },
  { from: '#4B5563', to: '#374151' },
  { from: '#b91c1c', to: '#991b1b' },
];

/* ─── Part Card Component ─────────────────────────────────────────────── */
function PartCard({ part, index }: { part: typeof billData.structure[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const palette = PALETTE[index % PALETTE.length];
  const partNum = index + 1;
  const description = RICH_PART_DESCRIPTIONS[partNum] || `Sections governing ${part.title} under the Act.`;

  return (
    <Link
      href={`/viewer/interactive/${partNum}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        borderRadius: '0px',
        background: hovered ? '#F1F5F9' : '#FFFFFF',
        border: hovered ? '1px solid #b91c1c' : '1px solid #CBD5E1',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 4px 12px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        textDecoration: 'none',
        height: '100%',
        minHeight: '210px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', background: 'rgba(4,120,87,0.1)', padding: '4px 10px', borderRadius: '0px', border: '1px solid rgba(4,120,87,0.2)' }}>
          PART {['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'][index]}
        </span>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B' }}>
          {part.sections.length} Sections Enacted
        </span>
      </div>

      {/* Body */}
      <h3 style={{
        fontSize: '15px', fontWeight: 800, color: hovered ? '#b91c1c' : '#0F172A',
        marginBottom: '10px', lineHeight: 1.3, letterSpacing: '-0.01em',
        transition: 'color 0.2s',
      }}>
        {part.title}
      </h3>
      <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
        {description}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '18px', paddingTop: '14px', borderTop: '1px solid #E2E8F0', fontSize: '11px', fontWeight: 800, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <span>Explore Part {partNum} Dossier</span>
        <span>→</span>
      </div>
    </Link>
  );
}

/* ─── Schedule Card Component ─────────────────────────────────────────── */
function ScheduleCard({ schedule, index }: { schedule: typeof billData.schedules[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const schNum = index + 1;
  const description = RICH_SCHEDULE_DESCRIPTIONS[schNum] || `Statutory Schedule #${schNum} enacted under the Act.`;

  return (
    <Link
      href={`/viewer/interactive/schedule/${schNum}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        borderRadius: '0px',
        background: hovered ? '#F1F5F9' : '#FFFFFF',
        border: hovered ? '1px solid #B45309' : '1px solid #CBD5E1',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 4px 12px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        textDecoration: 'none',
        height: '100%',
        minHeight: '210px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '11px', fontWeight: 900, color: '#B45309', background: 'rgba(180,83,9,0.1)', padding: '4px 10px', borderRadius: '0px', border: '1px solid rgba(180,83,9,0.2)' }}>
          SCHEDULE {schNum}
        </span>
        <span style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
          Statutory Instrument
        </span>
      </div>

      <h3 style={{
        fontSize: '15px', fontWeight: 800, color: hovered ? '#B45309' : '#0F172A',
        marginBottom: '10px', lineHeight: 1.3, letterSpacing: '-0.01em',
        transition: 'color 0.2s',
      }}>
        {schedule.title}
      </h3>
      <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
        {description}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '18px', paddingTop: '14px', borderTop: '1px solid #E2E8F0', fontSize: '11px', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <span>Inspect Schedule #{schNum}</span>
        <span>→</span>
      </div>
    </Link>
  );
}

/* ─── Main Interactive Framework Page Component ───────────────────────── */
export default function InteractiveViewerIndex() {
  const [activeTab, setActiveTab] = useState<'all' | 'parts' | 'schedules'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredParts = billData.structure.filter(p =>
    !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.part.toLowerCase().includes(searchQuery.toLowerCase()) || p.sections.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.section.includes(searchQuery))
  );

  const filteredSchedules = billData.schedules.filter(s =>
    !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      color: '#0F172A',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      padding: 'clamp(16px, 4vw, 40px) clamp(12px, 3vw, 32px) 64px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; border-radius: 0px !important; }
        a { text-decoration: none; }
        .part-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 20px; }
        @media (min-width: 640px)  { .part-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .part-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Navigation Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B' }}>
            <Link href="/viewer" style={{ color: '#64748B' }}>Viewer</Link>
            <span>›</span>
            <span style={{ color: '#b91c1c', fontWeight: 700 }}>NBCK Interactive Framework</span>
          </div>
          <Link href="/viewer/read" style={{
            padding: '8px 16px', borderRadius: '0px', fontSize: '12px', fontWeight: 800,
            background: '#b91c1c', border: 'none', color: '#FFFFFF',
            letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            📖 Official A4 Document Reader
          </Link>
        </nav>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px', background: 'rgba(4,120,87,0.1)', padding: '6px 16px', border: '1px solid rgba(4,120,87,0.2)' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              KBERC STATUTORY FRAMEWORK DIRECTORY
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 16px 0', lineHeight: 1.15 }}>
            20 Parts &amp; 13 Schedules Directory
          </h1>

          <p style={{ fontSize: '15px', color: '#334155', maxWidth: '780px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Interactive visual directory containing all <strong>20 Statutory Parts, 208 Enacted Sections, and 13 Schedules</strong> of the Built Environment Professions &amp; Practice Bill 2026.
          </p>

          {/* Search & Filter Controls */}
          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="text"
              placeholder="Search Parts, Sections, Schedules, keywords, or titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '16px 22px', borderRadius: '0px',
                background: '#FFFFFF', border: '1px solid #CBD5E1',
                color: '#0F172A', fontSize: '14px', outline: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {(['all', 'parts', 'schedules'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '9px 20px', borderRadius: '0px', fontSize: '11px', fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer',
                    background: activeTab === tab ? '#b91c1c' : '#FFFFFF',
                    color: activeTab === tab ? '#FFFFFF' : '#475569',
                    border: activeTab === tab ? 'none' : '1px solid #CBD5E1',
                    transition: 'all 0.15s'
                  }}
                >
                  {tab === 'all' ? 'All (20 Parts + 13 Schedules)' : tab === 'parts' ? `20 Parts (${filteredParts.length})` : `13 Schedules (${filteredSchedules.length})`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 20 Statutory Parts Section */}
        {(activeTab === 'all' || activeTab === 'parts') && (
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '2px solid #CBD5E1', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>🏛️</span> 20 Statutory Parts
              </h2>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#b91c1c', background: 'rgba(4,120,87,0.1)', padding: '4px 12px', border: '1px solid rgba(4,120,87,0.3)' }}>
                {filteredParts.length} Parts Enacted
              </span>
            </div>
            <div className="part-grid">
              {filteredParts.map((part, i) => (
                <PartCard key={part.part} part={part} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* 13 Statutory Schedules Section */}
        {(activeTab === 'all' || activeTab === 'schedules') && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '2px solid #CBD5E1', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📋</span> 13 Statutory Schedules
              </h2>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#B45309', background: 'rgba(180,83,9,0.1)', padding: '4px 12px', border: '1px solid rgba(180,83,9,0.3)' }}>
                {filteredSchedules.length} Schedules Enacted
              </span>
            </div>
            <div className="part-grid">
              {filteredSchedules.map((schedule, i) => (
                <ScheduleCard key={i} schedule={schedule} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
