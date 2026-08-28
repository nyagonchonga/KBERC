'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { billData } from '../data';

/* ─── Preset Statutory Keyword Search Chips ───────────────────────────── */
const STATUTORY_KEYWORD_CHIPS = [
  { label: 'EBK Cap 530', query: 'Cap 530' },
  { label: 'Digital QR Seal', query: 'Digital QR Seal' },
  { label: 'BEAT Tribunal', query: 'Tribunal' },
  { label: '51%+ Local Equity', query: 'equity' },
  { label: 'Risk Class C/D', query: 'Risk Class' },
  { label: 'Stamp Renting', query: 'Stamp Renting' },
  { label: '6-Stage Inspection', query: 'Stage Inspection' },
  { label: 'Disciplinary Hearing', query: 'Disciplinary' },
  { label: 'Peer Review', query: 'Peer Review' },
  { label: 'Escrow Account', query: 'Escrow' }
];

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

/* ─── Part Card Component ─────────────────────────────────────────────── */
function PartCard({ part, index }: { part: typeof billData.structure[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', background: 'rgba(185,28,28,0.1)', padding: '4px 10px', borderRadius: '0px', border: '1px solid rgba(185,28,28,0.2)' }}>
          PART {['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'][index]}
        </span>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B' }}>
          {part.sections.length} Sections Enacted
        </span>
      </div>

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener for Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const query = searchQuery.trim().toLowerCase();
  const normalizedQuery = query.replace(/[^\w\s]/gi, ' ').trim();
  const queryTokens = (normalizedQuery || query).split(/\s+/).filter(t => t.length > 0);

  // Deep Section Matches
  const deepSectionMatches: Array<{
    partNum: number;
    partTitle: string;
    sectionNumber: string;
    sectionTitle: string;
    snippet: string;
  }> = [];

  if (query) {
    billData.structure.forEach((part, partIdx) => {
      part.sections.forEach(sec => {
        const fullContent = `
          ${sec.section} 
          ${sec.title} 
          ${part.title} 
          ${part.part} 
          ${sec.bill_text || ''} 
          ${sec.analysis?.what_it_does || ''} 
          ${sec.analysis?.plain_english || ''} 
          ${sec.analysis?.policy_objective || ''}
        `.toLowerCase();

        const directMatch = fullContent.includes(query);
        const tokensMatch = queryTokens.length > 0 && queryTokens.every(token => fullContent.includes(token));
        const anyTokenMatch = queryTokens.length > 0 && queryTokens.some(token => token.length > 3 && fullContent.includes(token));

        if (directMatch || tokensMatch || anyTokenMatch) {
          let snippet = sec.analysis?.plain_english || sec.analysis?.what_it_does || sec.bill_text || '';
          if (snippet.length > 120) snippet = snippet.slice(0, 120) + '...';

          deepSectionMatches.push({
            partNum: partIdx + 1,
            partTitle: part.title,
            sectionNumber: sec.section,
            sectionTitle: sec.title,
            snippet
          });
        }
      });
    });
  }

  const filteredParts = billData.structure.filter((p, pIdx) => {
    if (!query) return true;
    const partNum = pIdx + 1;
    const partContent = `${p.part} ${p.title} ${RICH_PART_DESCRIPTIONS[partNum] || ''}`.toLowerCase();
    const matchesTitle = partContent.includes(query);
    const matchesTokens = queryTokens.length > 0 && queryTokens.some(t => t.length > 2 && partContent.includes(t));
    const matchesSection = deepSectionMatches.some(m => m.partNum === partNum);
    return matchesTitle || matchesTokens || matchesSection;
  });

  const filteredSchedules = billData.schedules.filter((s, idx) => {
    if (!query) return true;
    const schNum = idx + 1;
    const schContent = `schedule ${schNum} ${s.title} ${s.content} ${RICH_SCHEDULE_DESCRIPTIONS[schNum] || ''}`.toLowerCase();
    const matchesDirect = schContent.includes(query);
    const matchesTokens = queryTokens.length > 0 && queryTokens.some(t => t.length > 2 && schContent.includes(t));
    return matchesDirect || matchesTokens;
  });

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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px', background: 'rgba(185,28,28,0.1)', padding: '6px 16px', border: '1px solid rgba(185,28,28,0.2)' }}>
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

          {/* Search & Filter Controls Container */}
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
            
            {/* Input with Search Icon, Clear Button, and Keyboard Badge */}
            <div style={{ position: 'relative', width: '100%' }}>
              <span style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: '#64748B' }}>
                🔍
              </span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search Parts, Sections, Schedules, keywords, or titles... (Press Ctrl+K or /)"
                value={searchQuery}
                onFocus={() => setDropdownOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDropdownOpen(true);
                }}
                style={{
                  width: '100%', padding: '16px 48px 16px 48px', borderRadius: '0px',
                  background: '#FFFFFF', border: '2px solid #CBD5E1',
                  color: '#0F172A', fontSize: '14px', outline: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
                }}
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: '#64748B', fontSize: '16px', cursor: 'pointer', padding: '4px'
                  }}
                  title="Clear Search"
                >
                  ✕
                </button>
              ) : (
                <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', fontWeight: 800, background: '#E2E8F0', color: '#475569', padding: '3px 7px', border: '1px solid #CBD5E1' }}>
                  Ctrl + K
                </span>
              )}
            </div>

            {/* Curated Preset Statutory Keyword Chips */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '10px', fontWeight: 900, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Tags:
              </span>
              {STATUTORY_KEYWORD_CHIPS.map(chip => (
                <button
                  key={chip.label}
                  onClick={() => {
                    setSearchQuery(chip.query);
                    setDropdownOpen(true);
                  }}
                  style={{
                    padding: '4px 10px', fontSize: '11px', fontWeight: 700,
                    background: searchQuery === chip.query ? '#b91c1c' : '#FFFFFF',
                    color: searchQuery === chip.query ? '#FFFFFF' : '#334155',
                    border: '1px solid #CBD5E1', cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Tab Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
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

            {/* Live Search Results Dropdown Overlay */}
            {query && dropdownOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
                background: '#FFFFFF', border: '2px solid #b91c1c',
                boxShadow: '0 12px 28px rgba(0,0,0,0.15)', marginTop: '8px',
                maxHeight: '380px', overflowY: 'auto', textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Found {deepSectionMatches.length} Section Matches &amp; {filteredSchedules.length} Schedules
                  </span>
                  <button
                    onClick={() => setDropdownOpen(false)}
                    style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '12px', cursor: 'pointer', fontWeight: 800 }}
                  >
                    Close [Esc]
                  </button>
                </div>

                {deepSectionMatches.length === 0 && filteredSchedules.length === 0 ? (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#64748B', fontSize: '13px' }}>
                    No statutory sections found matching &quot;<strong>{searchQuery}</strong>&quot;.
                  </div>
                ) : (
                  <div>
                    {deepSectionMatches.slice(0, 10).map((match, idx) => (
                      <Link
                        key={idx}
                        href={`/viewer/read#section-${match.sectionNumber.replace(/[^0-9a-zA-Z]/g, '')}`}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: 'block', padding: '12px 16px', borderBottom: '1px solid #F1F5F9',
                          transition: 'background 0.15s'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontSize: '10px', fontWeight: 900, background: '#b91c1c', color: '#FFFFFF', padding: '2px 6px' }}>
                            SECTION {match.sectionNumber}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A' }}>
                            {match.sectionTitle}
                          </span>
                          <span style={{ fontSize: '10px', color: '#64748B', marginLeft: 'auto' }}>
                            Part {match.partNum}
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: 1.4 }}>
                          {match.snippet}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* 20 Statutory Parts Section */}
        {(activeTab === 'all' || activeTab === 'parts') && (
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '2px solid #CBD5E1', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>🏛️</span> 20 Statutory Parts
              </h2>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#b91c1c', background: 'rgba(185,28,28,0.1)', padding: '4px 12px', border: '1px solid rgba(185,28,28,0.3)' }}>
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
