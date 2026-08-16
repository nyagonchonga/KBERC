'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VisualAuditMasterHubPage() {
  const [activeTool, setActiveTool] = useState<number>(1);
  
  // Tool 1: Foreign Practice Gate
  const [localEquity, setLocalEquity] = useState<number>(60);
  const [foreignDegreeOrigin, setForeignDegreeOrigin] = useState<string>('riba');
  
  // Tool 2: PII Tiers
  const [projectValue, setProjectValue] = useState<number>(100000000);
  
  // Tool 3: Schedule 12 Fee Tariff
  const [feeDiscipline, setFeeDiscipline] = useState<'arch' | 'eng' | 'qs' | 'mep' | 'cpm' | 'planning' | 'landscape' | 'interior' | 'technologist'>('arch');
  const [feeCost, setFeeCost] = useState<number>(80000000);
  
  // Tool 4: Eurocode Peer Review
  const [eurocodeHeight, setEurocodeHeight] = useState<number>(22);
  const [occupancyType, setOccupancyType] = useState<'residential' | 'assembly' | 'hospital' | 'industrial' | 'school' | 'dam' | 'bridge'>('assembly');
  const [hasComplexGeotech, setHasComplexGeotech] = useState<boolean>(true);
  const [structuralMaterial, setStructuralMaterial] = useState<'rc' | 'steel' | 'post_tensioned' | 'mass_timber'>('rc');
  
  // Tool 5: Site Inspection Stage Timeline
  const [activeInspectionStage, setActiveInspectionStage] = useState<number>(1);
  
  // Tool 6: 6-Hour Collapse Forensic Timeline
  const [activeCollapseStep, setActiveCollapseStep] = useState<number>(1);
  
  // Tool 7: Disciplinary Hearing & Sanctions
  const [offenceType, setOffenceType] = useState<string>("seal_lending");
  
  // Tool 8: Tribunal Appeals Timeline
  const [receiptDate, setReceiptDate] = useState<string>("2026-08-01");
  
  // Tool 9: Inter-Agency Matrix
  const [jurisdictionIssue, setJurisdictionIssue] = useState<string>("drawing");
  
  // Tool 10: Cap 525 Migration Flow
  const [legacyBoardCategory, setLegacyBoardCategory] = useState<'boraqs_arch' | 'boraqs_qs' | 'ebk_eng' | 'pprb_planner' | 'unreg_tech'>('boraqs_arch');
  
  // Tool 11: Risk Heatmap
  const [selectedHeatmapCell, setSelectedHeatmapCell] = useState<{ building: string; soil: string; risk: string; desc: string; freq: string; leads: string; test: string }>({
    building: "High-Rise Tower (>7 Flr)",
    soil: "Expansive Black Cotton",
    risk: "EXTREME / CLASS E",
    desc: "Mandatory 2 Independent Peer Reviewers + Weekly Geotechnical Audit Logs",
    freq: "Weekly On-Site Technical Audit",
    leads: "Lead Structural Engineer, Geotech Specialist, Lead Architect, CPM",
    test: "SPT N-value < 10, Triaxial Shear, Core Drilling to 20m Depth"
  });
  
  // Tool 12: 365-Day Enactment Clock
  const [enactmentQuarter, setEnactmentQuarter] = useState<number>(1);
  
  // Tool 13: PPE Internship Radar
  const [internshipMonths, setInternshipMonths] = useState<number>(24);
  const [cpdUnits, setCpdUnits] = useState<number>(60);
  const [ethicsScore, setEthicsScore] = useState<number>(85);
  
  // Tool 14: Corporate Equity Simulator
  const [corpType, setCorpType] = useState<'sole' | 'partner' | 'multidisc' | 'foreign_jv'>('multidisc');
  const [localEquityShare, setLocalEquityShare] = useState<number>(55);
  
  // Tool 15: Concrete Core Strength Log
  const [concreteGradeTarget, setConcreteGradeTarget] = useState<'C20' | 'C25' | 'C30' | 'C40' | 'C60'>('C30');
  const [concreteStrength, setConcreteStrength] = useState<number>(28);
  
  // Tool 16: 47 County Readiness Map
  const [selectedCounty, setSelectedCounty] = useState<string>("Nairobi");
  
  // Tool 17: Design Liability Matrix
  const [liabilityDomain, setLiabilityDomain] = useState<'foundation' | 'superstructure' | 'facade' | 'mep' | 'roof' | 'egress'>('superstructure');
  
  // Tool 18: Mega-Infrastructure Calculator
  const [megaProjectCost, setMegaProjectCost] = useState<number>(12000000000);
  
  // Tool 19: Penalty Severity Gauge
  const [selectedOffenceCode, setSelectedOffenceCode] = useState<string>("unaccredited");
  
  // Tool 20: Cap 525 Rights Converter
  const [legacyTitle, setLegacyTitle] = useState<string>("arch_cap525");

  const tools = [
    { id: 1, title: "1. Foreign Practice Gate Flowchart", tag: "Sec 32 & 33", icon: "🌍" },
    { id: 2, title: "2. PII Insurance Tiers Calculator", tag: "Sec 58 & 59", icon: "🛡️" },
    { id: 3, title: "3. Schedule 12 Fee Tariff Bar", tag: "Sec 65-75", icon: "💰" },
    { id: 4, title: "4. Eurocode Peer Review Decision Tree", tag: "Sec 89", icon: "⚠️" },
    { id: 5, title: "5. Site Inspection Stage Timeline", tag: "Sec 106-115", icon: "🔍" },
    { id: 6, title: "6. 6-Hour Collapse Forensic Timeline", tag: "Sec 168", icon: "🚨" },
    { id: 7, title: "7. Disciplinary Hearing & Sanctions", tag: "Sec 117-130", icon: "⚖️" },
    { id: 8, title: "8. Tribunal Appeals 60-Day Timeline", tag: "Sec 142", icon: "🏛️" },
    { id: 9, title: "9. 4-Way Inter-Agency Matrix", tag: "Sec 178", icon: "🤝" },
    { id: 10, title: "10. Cap 525 Board Migration Flow", tag: "Sec 200-208", icon: "🔄" },
    { id: 11, title: "11. 3D Risk & Inspection Heatmap", tag: "Sec 89 & 107", icon: "🏗️" },
    { id: 12, title: "12. 365-Day Enactment Clock", tag: "Sec 197 & 211", icon: "📜" },
    { id: 13, title: "13. PPE Internship Radar", tag: "Sec 25 & 28", icon: "🎓" },
    { id: 14, title: "14. Corporate Equity Simulator", tag: "Sec 45", icon: "💼" },
    { id: 15, title: "15. Forensic Evidence Custody Log", tag: "Sec 168", icon: "🚨" },
    { id: 16, title: "16. 47 County Desk Readiness Map", tag: "Sec 188", icon: "🗺️" },
    { id: 17, title: "17. Design Liability Matrix", tag: "Sec 52 & 148", icon: "🛡️" },
    { id: 18, title: "18. Mega-Infrastructure Calculator", tag: "Sec 70", icon: "💰" },
    { id: 19, title: "19. Statutory Penalty Severity Gauge", tag: "Sec 151-165", icon: "⚖️" },
    { id: 20, title: "20. Cap 525 Rights Converter", tag: "Sec 200", icon: "🔄" }
  ];

  // Helper calculations for Fee Tariff (Tool 3)
  const getFeePercentage = (disc: string) => {
    switch (disc) {
      case 'arch': return 6.0;
      case 'eng': return 5.5;
      case 'qs': return 3.0;
      case 'mep': return 2.5;
      case 'cpm': return 2.5;
      case 'planning': return 4.0;
      case 'landscape': return 6.0;
      case 'interior': return 7.0;
      case 'technologist': return 4.5;
      default: return 5.0;
    }
  };
  const feePct = getFeePercentage(feeDiscipline);
  const totalMinFee = Math.round(feeCost * (feePct / 100));

  // Helper calculation for Eurocode Peer Review (Tool 4)
  const getEurocodeClass = () => {
    if (eurocodeHeight > 45 || occupancyType === 'dam' || occupancyType === 'bridge') return { class: 'Class E / CC3b (Extreme Infrastructure Risk)', peerReview: 'Mandatory 3 Independent Peer Reviewers + CS Executive Briefing (Sec 89)', badgeColor: '#DC2626' };
    if (eurocodeHeight > 30 || occupancyType === 'hospital' || occupancyType === 'assembly') return { class: 'Class E / CC3a (High Consequence Risk)', peerReview: 'Mandatory 2 Independent Peer Reviewers (Section 89)', badgeColor: '#DC2626' };
    if (eurocodeHeight > 12 || hasComplexGeotech || occupancyType === 'industrial' || occupancyType === 'school') return { class: 'Class C / CC2 (Medium-High Risk)', peerReview: 'Mandatory 1 Independent Peer Reviewer (Section 89)', badgeColor: '#B45309' };
    return { class: 'Class A-B / CC1 (Standard Risk)', peerReview: 'Standard Internal Lead Sign-Off (Section 89)', badgeColor: '#059669' };
  };
  const euroRes = getEurocodeClass();

  // All 10 Statutory KBERC Forms Data (Tool 5)
  const inspectionForms = [
    {
      stage: 1,
      form: "Form KBERC-1",
      section: "Section 106",
      name: "Geotechnical Soil & Sub-Grade Clearance",
      lead: "Registered Geotechnical Specialist Engineer",
      tests: "Standard Penetration Test (SPT N-Value), Triaxial Shear Test, Atterberg Limits, Permeability Test",
      consequence: "Illegal foundation excavation; KES 1,000,000 fine per day + immediate stop-work order."
    },
    {
      stage: 2,
      form: "Form KBERC-1A",
      section: "Section 107(2)",
      name: "Substructure Piling & Retaining Wall Sign-Off",
      lead: "Structural Specialist Engineer (Sec 36) & Registered CPM",
      tests: "High-Strain Dynamic Pile Testing (PDA), Low-Strain Integrity (PIT), Concrete Slump Test",
      consequence: "Piling collapse hazard; mandatory site cordoning & KES 2,500,000 statutory fine."
    },
    {
      stage: 3,
      form: "Form KBERC-2",
      section: "Section 108",
      name: "Ground Slab Damp-Proofing & Tanking Certificate",
      lead: "Lead Architect & Registered Civil Engineer",
      tests: "Sub-grade Compaction Modified AASHTO Test, Anti-Termite Soil Treatment Certificate, DPM Gauge Test",
      consequence: "Moisture ingress violation; certificate of occupancy permanently withheld."
    },
    {
      stage: 4,
      form: "Form KBERC-3",
      section: "Section 109",
      name: "Superstructure RC Frame & Shear Core Audit",
      lead: "Lead Structural Engineer, Lead Architect & Registered QS",
      tests: "28-Day Concrete Cube Compression Strength (BS EN 12390), Rebar Tensile Test (BS 4449)",
      consequence: "Structural non-compliance; Section 168 forensic investigation & KES 5,000,000 fine."
    },
    {
      stage: 5,
      form: "Form KBERC-3A",
      section: "Section 109(3)",
      name: "Steel Trusses & Post-Tensioned Cable Audit",
      lead: "Specialist Structural Engineer & Registered Technologist",
      tests: "Post-Tensioning Strand Elongation Test, Weld Ultrasonic NDT, Torque Bolt Wrench Calibration",
      consequence: "Roof truss collapse threat; criminal prosecution under Section 168."
    },
    {
      stage: 6,
      form: "Form KBERC-4",
      section: "Section 110",
      name: "Envelope, Facade Glazing & Roof Deck Certificate",
      lead: "Lead Architect & Facade Specialist Engineer",
      tests: "Facade Wind Pressure Test (BS EN 13830), Structural Silicone Adhesion Test, Roof Flood Leak Test",
      consequence: "Facade detachment risk; license suspension for Lead Architect."
    },
    {
      stage: 7,
      form: "Form KBERC-5",
      section: "Section 111",
      name: "MEP Riser Shafts, Electrical & Plumbing Clearance",
      lead: "Lead Electrical Engineer & Lead Mechanical Engineer",
      tests: "Electrical Insulation Resistance Test, Hydrostatic Plumbing Pressure Test, Riser Fire Stop Audit",
      consequence: "Electrocution / flooding hazard; refusal of utility service connections."
    },
    {
      stage: 8,
      form: "Form KBERC-5A",
      section: "Section 112",
      name: "Active Fire Safety & Life Safety Certificate",
      lead: "Fire Safety Specialist Engineer & Registered Interior Designer",
      tests: "Fire Pump Flow Rate Test (NFPA 20), Smoke Extraction Airflow Audit, Flame Spread Rating Test",
      consequence: "Life safety failure; immediate building closure notice under Section 112."
    },
    {
      stage: 9,
      form: "Form KBERC-5B",
      section: "Section 113",
      name: "PWD Accessibility & Elevator Clearance",
      lead: "Lead Architect & Registered Accessibility Inspector",
      tests: "Ramp Gradient Audit (Max 1:12), Tactile Paving Audit, Elevator Overload Governor Safety Test",
      consequence: "Discrimination violation under Persons with Disabilities Act & Section 113 fine."
    },
    {
      stage: 10,
      form: "Form KBERC-6",
      section: "Section 114 & 188",
      name: "Final Statutory Certificate of Occupancy Sign-Off",
      lead: "County Building Control Desk Officer & Lead Architect",
      tests: "Consolidated Audit of Forms KBERC-1 through 5B, As-Built Drawing Verification, Digital QR Verification",
      consequence: "Illegal building occupation; KES 5,000,000 fine + eviction notice."
    }
  ];
  const activeFormObj = inspectionForms.find(f => f.stage === activeInspectionStage) || inspectionForms[0];

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: '#64748B' }}>
          <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
          <span>›</span>
          <Link href="/viewer/tools" style={{ color: '#64748B' }}>Interactive Tools</Link>
          <span>›</span>
          <span style={{ color: '#b91c1c', fontWeight: 700 }}>Statutory Master Visual Hub (20 Tools)</span>
        </div>

        {/* Hero Header */}
        <header style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', background: 'rgba(185,28,28,0.08)', padding: '6px 18px', border: '1px solid rgba(185,28,28,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'inline-block', marginBottom: '12px' }}>
            20 MASTER STATUTORY VISUAL INSTRUMENTS &amp; DECISION SIMULATORS
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
            Master Statutory Visual &amp; Graphical Matrix Hub
          </h1>
          <p style={{ fontSize: '15px', color: '#334155', maxWidth: '920px', margin: '0 auto', lineHeight: 1.7 }}>
            Actionable visual tools equipped with live calculation engines, decision trees, Eurocode heatmaps, penalty severity gauges, and statutory risk models.
          </p>
        </header>

        {/* Tool Selection Tabs Grid */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
          {tools.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.id)}
              style={{
                padding: '9px 15px', fontSize: '11px', fontWeight: 800,
                background: activeTool === t.id ? '#b91c1c' : '#FFFFFF',
                color: activeTool === t.id ? '#FFFFFF' : '#0F172A',
                border: activeTool === t.id ? '1px solid #b91c1c' : '1px solid #CBD5E1',
                cursor: 'pointer', transition: 'all 0.15s ease', display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              <span>{t.icon}</span>
              <span>{t.title}</span>
            </button>
          ))}
        </div>

        {/* TOOL 1: Foreign Practice Gate Flowchart */}
        {activeTool === 1 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #b91c1c', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 32, 33 &amp; 45 STATUTORY COMPLIANCE</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>1. Foreign Practice Gate Flowchart &amp; 51% JV Equity Meter</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {[
                { stage: "Stage 1", title: "Credential Audit (Sec 32)", desc: "Verification of equivalent degree (Bologna/RIBA/Washington Accord) & active home country license.", color: "#0284C7" },
                { stage: "Stage 2", title: "51% Local JV Audit (Sec 45)", desc: "Executing binding JV agreement with local Lead Professional owning min 51% voting equity.", color: "#b91c1c" },
                { stage: "Stage 3", title: "Temporary License (Sec 33)", desc: "Council review & issuance of 12-month non-renewable temporary license tied to 1 project.", color: "#B45309" },
                { stage: "Stage 4", title: "Project QR Stamp (Sec 57)", desc: "Issuance of project-specific Cryptographic QR Stamp requiring local Lead co-signature.", color: "#7C3AED" },
              ].map((s, i) => (
                <div key={i} style={{ background: '#F8FAFC', padding: '20px', border: `1px solid ${s.color}40`, borderTop: `4px solid ${s.color}` }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: s.color, textTransform: 'uppercase' }}>{s.stage}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', margin: '4px 0 8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Simulate Foreign Joint Venture Local Equity Share ({localEquity}%):
              </label>
              <input
                type="range" min="10" max="100" value={localEquity}
                onChange={e => setLocalEquity(parseInt(e.target.value, 10))}
                style={{ width: '100%', accentColor: localEquity >= 51 ? '#b91c1c' : '#DC2626', height: '24px', cursor: 'pointer', marginBottom: '16px' }}
              />
              <div style={{ padding: '16px', background: localEquity >= 51 ? 'rgba(4,120,87,0.1)' : 'rgba(220,38,38,0.1)', border: `1px solid ${localEquity >= 51 ? '#b91c1c' : '#DC2626'}`, textAlign: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: localEquity >= 51 ? '#b91c1c' : '#DC2626' }}>
                  {localEquity >= 51 ? '✅ APPROVED: Complies with Sec 45 51% Local Voting Equity Rule. Eligible for Project QR Seal.' : '❌ REJECTED: Foreign equity exceeds 49% statutory cap under Sec 45. Temporary license denied under Sec 34.'}
                </span>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #CBD5E1', fontSize: '11px' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#0F172A', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Parameter</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Statutory Requirement</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Non-Compliance Sanction</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Maximum License Duration</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>12 Months Non-Renewable (Sec 33)</td><td style={{ padding: '10px', color: '#DC2626', fontWeight: 700, border: '1px solid #CBD5E1' }}>Automatic License Lapse</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Project Limitation</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Single Gazetted Project Only</td><td style={{ padding: '10px', color: '#DC2626', fontWeight: 700, border: '1px solid #CBD5E1' }}>KES 5,000,000 Fine &amp; Deportation Notice</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Local Co-Signatory</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Mandatory Registered Kenyan Lead Professional</td><td style={{ padding: '10px', color: '#DC2626', fontWeight: 700, border: '1px solid #CBD5E1' }}>Invalid Plan Submission (Sec 91)</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {/* TOOL 2: PII Insurance Tiers Comparative Table */}
        {activeTool === 2 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #0284C7', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 58 &amp; 59 STATUTORY PII MATRIX</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>2. Professional Indemnity Insurance (PII) Statutory Tiers Matrix</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #CBD5E1', fontSize: '12px', marginBottom: '24px' }}>
              <thead>
                <tr style={{ background: '#0284C7', color: '#FFF', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0284C7' }}>Project Category</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0284C7' }}>Construction Value Range</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0284C7' }}>Min. Mandatory PII Cover</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #0284C7' }}>QR Seal Verification Gate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "Tier 1: Low Risk", range: "< KES 50 Million", cover: "KES 10,000,000", gate: "Standard Registrar Auto-Check (Sec 58)" },
                  { tier: "Tier 2: Medium Risk", range: "KES 50M - KES 250M", cover: "KES 25,000,000", gate: "Verified Policy Certificate Mandatory" },
                  { tier: "Tier 3: High-Rise / High Risk", range: "KES 250M - KES 1 Billion", cover: "KES 100,000,000", gate: "Underwriter Guarantee & Live API Audit" },
                  { tier: "Tier 4: Mega Infrastructure", range: "KES 1B - KES 10 Billion", cover: "KES 250,000,000", gate: "Council Executive Panel Clearance" },
                  { tier: "Tier 5: Class E High-Risk Towers", range: "> KES 10 Billion", cover: "KES 500,000,000+", gate: "Specialist Underwriter Consortium Sign-Off" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                    <td style={{ padding: '12px', fontWeight: 800, color: '#0F172A', border: '1px solid #CBD5E1' }}>{row.tier}</td>
                    <td style={{ padding: '12px', color: '#334155', border: '1px solid #CBD5E1' }}>{row.range}</td>
                    <td style={{ padding: '12px', fontWeight: 900, color: '#0284C7', border: '1px solid #CBD5E1' }}>{row.cover}</td>
                    <td style={{ padding: '12px', color: '#059669', fontWeight: 700, border: '1px solid #CBD5E1' }}>{row.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Select Estimated Project Value (KES {(projectValue).toLocaleString()}):
              </label>
              <input type="range" min="10000000" max="1000000000" step="10000000" value={projectValue} onChange={e => setProjectValue(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#0284C7', height: '24px', cursor: 'pointer' }} />
              <div style={{ marginTop: '16px', padding: '16px', background: '#0284C7', color: '#FFF', textAlign: 'center', fontWeight: 800 }}>
                STATUTORY REQUIRED PII COVER: KES {Math.max(20000000, projectValue * 0.2).toLocaleString()}
              </div>
            </div>
          </div>
        )}

        {/* TOOL 3: Schedule 12 Fee Tariff Engine */}
        {activeTool === 3 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #059669', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SCHEDULE 12 &amp; SECTION 65-75 TARIFF ENGINE</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>3. Schedule 12 Scale of Fees &amp; Multi-Disciplinary Tariff Breakdown</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Select Regulated Discipline:
                </label>
                <select value={feeDiscipline} onChange={e => setFeeDiscipline(e.target.value as any)} style={{ width: '100%', padding: '12px', background: '#FFFFFF', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                  <option value="arch">1. Architecture & Master Planning (6.0%)</option>
                  <option value="eng">2. Civil & Structural Engineering (5.5%)</option>
                  <option value="qs">3. Quantity Surveying & Cost Management (3.0%)</option>
                  <option value="mep">4. Mechanical & Electrical Engineering (2.5%)</option>
                  <option value="cpm">5. Construction Project Management (2.5%)</option>
                  <option value="planning">6. Physical & Land Use Planning (4.0%)</option>
                  <option value="landscape">7. Landscape Architecture & Site Ecology (6.0%)</option>
                  <option value="interior">8. Interior Design & Spatial Ergonomics (7.0%)</option>
                  <option value="technologist">9. Registered Technologists (4.5%)</option>
                </select>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Estimated Construction Cost (KES {(feeCost).toLocaleString()}):
                </label>
                <input type="range" min="10000000" max="500000000" step="5000000" value={feeCost} onChange={e => setFeeCost(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#059669', height: '24px', cursor: 'pointer' }} />
              </div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', borderLeft: '6px solid #059669', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>Statutory Fee Scale Target</span>
                <span style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>{feePct.toFixed(1)}% Scale Target</span>
              </div>
              <div style={{ background: '#E2E8F0', height: '28px', width: '100%', borderRadius: 0, overflow: 'hidden', position: 'relative', display: 'flex' }}>
                <div style={{ width: `${(feePct / 10) * 100}%`, background: '#059669', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '11px', fontWeight: 800 }}>
                  Statutory Base Fee ({feePct}%)
                </div>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#475569', fontWeight: 600 }}>Minimum Legal Fee Mandate (Sec 72 Anti-Undercutting):</span>
                <span style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A' }}>KES {totalMinFee.toLocaleString()}</span>
              </div>
            </div>

            <span style={{ fontSize: '11px', fontWeight: 900, color: '#059669', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              STATUTORY PROJECT STAGE FEE BREAKDOWN (SCHEDULE 12)
            </span>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #CBD5E1', fontSize: '11px' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#0F172A', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Project Stage</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Stage Fee Share (%)</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Stage Fee Amount (KES)</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #CBD5E1' }}>Deliverables Gate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Stage 1: Inception &amp; Feasibility</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>15%</td><td style={{ padding: '10px', fontWeight: 800, border: '1px solid #CBD5E1' }}>KES {(totalMinFee * 0.15).toLocaleString()}</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Brief &amp; Site Feasibility Report</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Stage 2: Schematic Design</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>20%</td><td style={{ padding: '10px', fontWeight: 800, border: '1px solid #CBD5E1' }}>KES {(totalMinFee * 0.20).toLocaleString()}</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Outline Drawings &amp; EIA Report</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Stage 3: Detailed Design &amp; County Approval</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>30%</td><td style={{ padding: '10px', fontWeight: 800, border: '1px solid #CBD5E1' }}>KES {(totalMinFee * 0.30).toLocaleString()}</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>County Approved Plans &amp; QR Seal</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Stage 4: Tender Procurement</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>15%</td><td style={{ padding: '10px', fontWeight: 800, border: '1px solid #CBD5E1' }}>KES {(totalMinFee * 0.15).toLocaleString()}</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Unpriced BoQ &amp; Contract Award</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Stage 5: Site Supervision &amp; Completion</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>20%</td><td style={{ padding: '10px', fontWeight: 800, border: '1px solid #CBD5E1' }}>KES {(totalMinFee * 0.20).toLocaleString()}</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Form KBERC-6 Occupancy Clearance</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {/* TOOL 4: Eurocode Peer Review Decision Tree */}
        {activeTool === 4 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #B45309', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 89 &amp; EUROCODE BS EN 1990 AUDITOR</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>4. Eurocode Structural Peer Review Decision Tree Engine</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
              <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  Building Overall Height ({eurocodeHeight} Meters):
                </label>
                <input type="range" min="3" max="100" value={eurocodeHeight} onChange={e => setEurocodeHeight(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#B45309' }} />
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  Occupancy & Use Class:
                </label>
                <select value={occupancyType} onChange={e => setOccupancyType(e.target.value as any)} style={{ width: '100%', padding: '10px', background: '#FFF', border: '1px solid #CBD5E1', fontSize: '12px', fontWeight: 700 }}>
                  <option value="residential">Residential / Commercial (Standard)</option>
                  <option value="assembly">Public Assembly / Stadium (High Crowd)</option>
                  <option value="hospital">Hospital / Emergency Services (Essential Infra)</option>
                  <option value="school">Educational Institution / School</option>
                  <option value="industrial">Industrial / Hazardous Storage</option>
                  <option value="dam">Dam / Water Reservoir (High Hazard)</option>
                  <option value="bridge">Major Highway Bridge / Flyover</option>
                </select>
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  Structural Framing Material:
                </label>
                <select value={structuralMaterial} onChange={e => setStructuralMaterial(e.target.value as any)} style={{ width: '100%', padding: '10px', background: '#FFF', border: '1px solid #CBD5E1', fontSize: '12px', fontWeight: 700 }}>
                  <option value="rc">Reinforced Concrete Frame</option>
                  <option value="post_tensioned">Post-Tensioned Cable Slab</option>
                  <option value="steel">Structural Steel Truss</option>
                  <option value="mass_timber">Mass Timber / Cross-Laminated</option>
                </select>
              </div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: `2px solid ${euroRes.badgeColor}`, borderLeft: `8px solid ${euroRes.badgeColor}` }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: euroRes.badgeColor, textTransform: 'uppercase' }}>SECTION 89 RISK EVALUATION RESULT</span>
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '6px 0 10px' }}>{euroRes.class}</h3>
              <div style={{ fontSize: '14px', fontWeight: 800, color: euroRes.badgeColor, background: `${euroRes.badgeColor}15`, padding: '10px 16px', display: 'inline-block' }}>
                {euroRes.peerReview}
              </div>
            </div>
          </div>
        )}

        {/* TOOL 5: Site Inspection Stage Timeline & Form KBERC-1 to 6 Gatekeeper */}
        {activeTool === 5 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #0284C7', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTIONS 106-115 STATUTORY INSPECTION GATES (ALL 10 FORMS)</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>5. Site Inspection Stage Timeline &amp; Form KBERC-1 to 6 Master Gatekeeper</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '24px' }}>
              {inspectionForms.map(st => (
                <button
                  key={st.stage}
                  onClick={() => setActiveInspectionStage(st.stage)}
                  style={{
                    padding: '12px 6px', textAlign: 'center', background: activeInspectionStage === st.stage ? '#0284C7' : '#F8FAFC',
                    color: activeInspectionStage === st.stage ? '#FFF' : '#0F172A', border: activeInspectionStage === st.stage ? '2px solid #0284C7' : '1px solid #CBD5E1',
                    cursor: 'pointer', transition: 'all 0.15s'
                  }}
                >
                  <span style={{ fontSize: '9px', fontWeight: 900, display: 'block', textTransform: 'uppercase' }}>STAGE {st.stage}</span>
                  <strong style={{ fontSize: '11px', display: 'block', margin: '2px 0' }}>{st.form}</strong>
                  <span style={{ fontSize: '9px', opacity: 0.9, display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{st.name}</span>
                </button>
              ))}
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', borderLeft: '6px solid #0284C7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase' }}>STATUTORY {activeFormObj.form} DETAILS</span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#FFFFFF', background: '#0284C7', padding: '3px 10px' }}>{activeFormObj.section} Citation</span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0' }}>{activeFormObj.name}</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div style={{ background: '#FFF', padding: '14px', border: '1px solid #CBD5E1' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#334155', textTransform: 'uppercase' }}>Mandatory Sign-Off Lead Professional</span>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>{activeFormObj.lead}</div>
                </div>
                <div style={{ background: '#FFF', padding: '14px', border: '1px solid #CBD5E1' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#334155', textTransform: 'uppercase' }}>Mandatory Technical Field Tests</span>
                  <div style={{ fontSize: '12px', color: '#0F172A', marginTop: '4px', fontWeight: 600 }}>{activeFormObj.tests}</div>
                </div>
              </div>

              <div style={{ background: '#FEE2E2', padding: '14px', border: '1px solid #EF4444', color: '#991B1B', fontSize: '12px', fontWeight: 700 }}>
                🚨 Legal Non-Compliance Penalty: {activeFormObj.consequence}
              </div>
            </div>
          </div>
        )}

        {/* TOOL 6: 6-Hour Collapse Forensic Timeline */}
        {activeTool === 6 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #DC2626', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 168 EMERGENCY DISASTER PROTOCOL</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>6. 6-Hour Collapse Forensic Emergency Response Timeline</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '24px' }}>
              {[
                { hour: "HOUR 0", title: "Collapse Trigger", desc: "Automatic Emergency Alert transmitted to KBERC & NGAO.", color: "#DC2626" },
                { hour: "HOUR 1", title: "Site Cordon", desc: "Multi-agency site lockdown & perimeter cordoning by Police.", color: "#B45309" },
                { hour: "HOUR 2", title: "Evidence Lock", desc: "Sealing all site logbooks, approved plans & Digital QR records.", color: "#0284C7" },
                { hour: "HOUR 3", title: "Inquiry Panel", desc: "Multi-disciplinary forensic inquiry team formally constituted.", color: "#059669" },
                { hour: "HOUR 4", title: "Core Extraction", desc: "Forensic Team extracts concrete core samples & steel rebar.", color: "#7C3AED" },
                { hour: "HOUR 6", title: "Forensic Report", desc: "Preliminary disaster cause report submitted to Cabinet Secretary.", color: "#b91c1c" }
              ].map((h, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCollapseStep(i + 1)}
                  style={{
                    padding: '16px 12px', textAlign: 'left', background: activeCollapseStep === i + 1 ? h.color : '#F8FAFC',
                    color: activeCollapseStep === i + 1 ? '#FFF' : '#0F172A', border: `1px solid ${h.color}40`, borderTop: `4px solid ${h.color}`,
                    cursor: 'pointer', transition: 'all 0.15s'
                  }}
                >
                  <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>{h.hour}</span>
                  <strong style={{ fontSize: '13px', display: 'block', margin: '2px 0' }}>{h.title}</strong>
                  <span style={{ fontSize: '11px', opacity: 0.9 }}>{h.desc}</span>
                </button>
              ))}
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', borderLeft: '6px solid #DC2626' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase' }}>LEGAL RESPONSIBILITY AT HOUR {activeCollapseStep}</span>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: '6px 0' }}>
                {activeCollapseStep === 1 && "Immediate Emergency Alert & SAR Multi-Agency Mobilization"}
                {activeCollapseStep === 2 && "Securing Structural Evidence, Site Seals & Police Perimeter Lockdown"}
                {activeCollapseStep === 3 && "Impounding Logbooks, Sub-Contractor Records & QR Timestamp Logs"}
                {activeCollapseStep === 4 && "Multi-Discipline Forensic Sampling & Independent Lab Testing"}
                {activeCollapseStep === 5 && "Metallurgical Rebar Testing & Geotechnical Failure Analysis"}
                {activeCollapseStep === 6 && "Submission of Emergency Preliminary Disaster Report to Cabinet Secretary"}
              </h3>
              <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Under Section 168, the Registrar and Forensic Audit Unit hold statutory authority to impound all project records without court warrant following a structural failure.
              </p>
            </div>
          </div>
        )}

        {/* TOOL 7: Disciplinary Hearing & Sanctions Matrix */}
        {activeTool === 7 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #DC2626', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 117-130 &amp; SCHEDULE 9 SANCTIONS</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>7. Disciplinary Hearing &amp; Statutory Sanctions Matrix</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #CBD5E1', fontSize: '11px', marginBottom: '24px' }}>
              <thead>
                <tr style={{ background: '#DC2626', color: '#FFF', textTransform: 'uppercase', fontSize: '10px' }}>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #DC2626' }}>Offence Code</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #DC2626' }}>Nature of Misconduct</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #DC2626' }}>Statutory Fine</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #DC2626' }}>License Sanction</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #DC2626' }}>Gazette Reprimand</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: "Sec 118", name: "Digital Stamp Renting / Unlawful Seal Lending", fine: "KES 2,500,000", sanction: "3-Year Suspension", gazette: "Mandatory Public Gazette Notice" },
                  { code: "Sec 72", name: "Fee Undercutting Below Schedule 12 Tariffs", fine: "KES 1,000,000", sanction: "12-Month Reprimand & Audit", gazette: "Public Registrar Warning" },
                  { code: "Sec 35", name: "Unaccredited Practice / Impersonation", fine: "KES 5,000,000", sanction: "Permanent De-registration", gazette: "Public Gazette De-registration" },
                  { code: "Sec 168", name: "Structural Negligence & Collapse", fine: "KES 5,000,000", sanction: "Criminal Prosecution + Bar", gazette: "Public Gazette De-registration" },
                  { code: "Sec 105", name: "Concealing Financial Conflict of Interest", fine: "KES 1,000,000", sanction: "Board Review & Reprimand", gazette: "Council Disciplinary Record" },
                  { code: "Sec 50", name: "Practicing Without Active PII Cover", fine: "KES 1,500,000", sanction: "License Suspension", gazette: "Public Registry Suspension" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? '#F8FAFC' : '#FFF' }}>
                    <td style={{ padding: '10px', fontWeight: 800, color: '#DC2626', border: '1px solid #CBD5E1' }}>{row.code}</td>
                    <td style={{ padding: '10px', fontWeight: 700, color: '#0F172A', border: '1px solid #CBD5E1' }}>{row.name}</td>
                    <td style={{ padding: '10px', fontWeight: 900, color: '#0F172A', border: '1px solid #CBD5E1' }}>{row.fine}</td>
                    <td style={{ padding: '10px', fontWeight: 800, color: '#DC2626', border: '1px solid #CBD5E1' }}>{row.sanction}</td>
                    <td style={{ padding: '10px', color: '#475569', border: '1px solid #CBD5E1' }}>{row.gazette}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TOOL 8: Tribunal Appeals 60-Day Timeline */}
        {activeTool === 8 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #E11D48', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#E11D48', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 142 &amp; SCHEDULE 2 APPELLATE TIMELINE</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>8. Built Environment Appeals Tribunal 60-Day Timeline Engine</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Enter Date Decision Was Received from KBERC Council / County Desk:
              </label>
              <input type="date" value={receiptDate} onChange={e => setReceiptDate(e.target.value)} style={{ padding: '12px', background: '#FFFFFF', border: '1px solid #CBD5E1', fontSize: '14px', color: '#0F172A' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: '5px solid #0284C7' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#0284C7' }}>DAY 1 TO 30</span>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>Notice of Appeal Filing Gate</h3>
                <span style={{ fontSize: '12px', color: '#475569' }}>Filing Memorandum of Appeal with Tribunal Registrar.</span>
              </div>
              <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: '5px solid #b91c1c' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c' }}>DAY 31 TO 44</span>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>KBERC Response Submission</h3>
                <span style={{ fontSize: '12px', color: '#475569' }}>Council has 14 days to submit written response.</span>
              </div>
              <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: '5px solid #E11D48' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#E11D48' }}>DAY 60 MANDATORY</span>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>Final Tribunal Determination</h3>
                <span style={{ fontSize: '12px', color: '#475569' }}>Binding determination issued within 60 days max.</span>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 9: 4-Way Inter-Agency Matrix */}
        {activeTool === 9 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #b91c1c', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 178 &amp; SCHEDULE 7 JURISDICTION MATRIX</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>9. 4-Way Inter-Agency Jurisdiction &amp; Authority Resolver</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Select Compliance Dispute Issue:
              </label>
              <select value={jurisdictionIssue} onChange={e => setJurisdictionIssue(e.target.value)} style={{ width: '100%', padding: '12px', background: '#FFFFFF', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                <option value="drawing">Unapproved Architectural Drawing &amp; Stamp Verification</option>
                <option value="scaffolding">Unsafe Site Scaffolding &amp; Contractor Helmet Violation</option>
                <option value="effluent">Effluent Disposal &amp; EIA Noise Clearance</option>
                <option value="zoning">Plot Coverage &amp; Change-of-User Density Approval</option>
              </select>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #b91c1c', borderLeft: '6px solid #b91c1c' }}>
              <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase' }}>PRIMARY STATUTORY JURISDICTION HOLDER</span>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: '6px 0' }}>
                {jurisdictionIssue === 'drawing' ? 'KBERC Apex Council & ARB Board (Sec 4)' : jurisdictionIssue === 'scaffolding' ? 'National Construction Authority (NCA Act)' : jurisdictionIssue === 'effluent' ? 'NEMA (EMCA Cap 387)' : '47 County Executive Planning Desk (PLUPA 2019)'}
              </h3>
              <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                {jurisdictionIssue === 'drawing' ? 'KBERC holds exclusive legal authority over practitioner QR seal validation and architectural design standards.' : jurisdictionIssue === 'scaffolding' ? 'NCA holds exclusive authority over contractor safety gear, site supervisor registration, and contractor grading.' : jurisdictionIssue === 'effluent' ? 'NEMA holds exclusive authority over EIA licenses and effluent disposal approvals.' : 'County Governments hold constitutional authority over land use zoning and development control approvals.'}
              </p>
            </div>
          </div>
        )}

        {/* TOOL 10: Cap 525 Board Migration Flow */}
        {activeTool === 10 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #7C3AED', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 200-208 &amp; SCHEDULE 8 MIGRATION FLOW</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>10. Cap 525 Board Migration Flow &amp; Rights Converter</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {[
                { title: "BORAQS Architects", target: "KBERC College of Architecture", time: "12-Month Cap" },
                { title: "EBK Engineers", target: "KBERC College of Engineering", time: "12-Month Cap" },
                { title: "QSRB Surveyors", target: "KBERC College of Quantity Surveying", time: "12-Month Cap" },
                { title: "PPRB Planners", target: "KBERC College of Physical Planners", time: "12-Month Cap" }
              ].map((b, idx) => (
                <div key={idx} style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderTop: '4px solid #7C3AED' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#7C3AED' }}>LEGACY BOARD</span>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{b.title}</h3>
                  <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700 }}>➔ {b.target}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TOOL 11: 3D Interactive Risk Heatmap Grid */}
        {activeTool === 11 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #DC2626', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 89, 107 &amp; SCHEDULE 4 RISK HEATMAP MATRIX</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>11. 3D Building Risk &amp; Geotechnical Inspection Heatmap Grid</h2>

            <p style={{ fontSize: '13px', color: '#475569', marginBottom: '20px' }}>
              Click any cell in the 4x4 matrix to view statutory inspection frequency, risk class, and mandatory peer review requirements:
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                <thead>
                  <tr style={{ background: '#1E293B', color: '#FFF', textTransform: 'uppercase' }}>
                    <th style={{ padding: '10px', border: '1px solid #334155' }}>Building Typology \ Soil Risk</th>
                    <th style={{ padding: '10px', border: '1px solid #334155' }}>Stable Rock</th>
                    <th style={{ padding: '10px', border: '1px solid #334155' }}>Expansive Cotton</th>
                    <th style={{ padding: '10px', border: '1px solid #334155' }}>Reclaimed Marsh</th>
                    <th style={{ padding: '10px', border: '1px solid #334155' }}>Seismic Fault</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Single Story (&le;2 Flr)", c1: "LOW / CLASS A", c2: "MED / CLASS B", c3: "HIGH / CLASS C", c4: "HIGH / CLASS C" },
                    { type: "Multi-Story (3-6 Flr)", c1: "MED / CLASS B", c2: "HIGH / CLASS C", c3: "HIGH / CLASS C", c4: "EXTREME / CLASS E" },
                    { type: "High-Rise Tower (>7 Flr)", c1: "HIGH / CLASS C", c2: "EXTREME / CLASS E", c3: "EXTREME / CLASS E", c4: "EXTREME / CLASS E" },
                    { type: "Public Assembly / Stadium", c1: "HIGH / CLASS C", c2: "EXTREME / CLASS E", c3: "EXTREME / CLASS E", c4: "EXTREME / CLASS E" }
                  ].map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td style={{ padding: '12px', fontWeight: 800, background: '#F8FAFC', border: '1px solid #CBD5E1' }}>{row.type}</td>
                      {[row.c1, row.c2, row.c3, row.c4].map((cell, cIdx) => {
                        const isExtreme = cell.includes("EXTREME");
                        const isHigh = cell.includes("HIGH");
                        const isMed = cell.includes("MED");
                        const cellBg = isExtreme ? '#FEE2E2' : isHigh ? '#FFEDD5' : isMed ? '#FEF9C3' : '#DCFCE7';
                        const cellColor = isExtreme ? '#DC2626' : isHigh ? '#C2410C' : isMed ? '#A16207' : '#15803D';

                        return (
                          <td
                            key={cIdx}
                            onClick={() => setSelectedHeatmapCell({
                              building: row.type,
                              soil: cIdx === 0 ? "Stable Rock" : cIdx === 1 ? "Expansive Cotton" : cIdx === 2 ? "Reclaimed Marsh" : "Seismic Fault",
                              risk: cell,
                              desc: isExtreme ? "Mandatory 2 Independent Peer Reviewers + Weekly Geotech Audits (Sec 89)" : isHigh ? "Mandatory 1 Independent Peer Reviewer + Form KBERC-1 Clearance" : "Standard Internal Lead Sign-Off",
                              freq: isExtreme ? "Weekly On-Site Technical Audit" : isHigh ? "Bi-Weekly Inspection Audit" : "Milestone Gate Sign-Off",
                              leads: isExtreme ? "Lead Structural Engineer, Geotech Specialist, Lead Architect, CPM" : "Lead Structural Engineer & Architect",
                              test: isExtreme ? "SPT N-value < 10, Triaxial Shear, Core Drilling to 20m Depth" : "Standard Soil Bearing Capacity Test"
                            })}
                            style={{
                              padding: '12px', textAlign: 'center', fontWeight: 900, background: cellBg, color: cellColor,
                              border: '1px solid #CBD5E1', cursor: 'pointer'
                            }}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '2px solid #b91c1c' }}>
              <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase' }}>SELECTED CELL AUDIT SUMMARY</span>
              <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A', margin: '4px 0' }}>{selectedHeatmapCell.building} on {selectedHeatmapCell.soil}</h3>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#b91c1c', marginBottom: '8px' }}>{selectedHeatmapCell.risk}: {selectedHeatmapCell.desc}</div>
              <div style={{ fontSize: '11px', color: '#475569' }}>Inspection Frequency: <strong>{selectedHeatmapCell.freq}</strong> | Mandatory Soil Test: <strong>{selectedHeatmapCell.test}</strong></div>
            </div>
          </div>
        )}

        {/* TOOL 12: 365-Day Enactment Clock */}
        {activeTool === 12 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #0284C7', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 197 &amp; 211 LEGISLATIVE TIMELINE</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>12. 365-Day Statutory Enactment &amp; Gazettement Clock</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '24px' }}>
              {[
                { q: 1, label: "Q1 (Days 1-90)", desc: "Gazette Enactment & Council Appointment" },
                { q: 2, label: "Q2 (Days 91-180)", desc: "8 Profession Boards Constitution & Elections" },
                { q: 3, label: "Q3 (Days 181-270)", desc: "Digital QR API Integration across 47 Counties" },
                { q: 4, label: "Q4 (Days 271-365)", desc: "Full Enforceable Legal Compliance & Inspection Audits" }
              ].map(q => (
                <button
                  key={q.q}
                  onClick={() => setEnactmentQuarter(q.q)}
                  style={{
                    padding: '16px 12px', textAlign: 'left', background: enactmentQuarter === q.q ? '#0284C7' : '#F8FAFC',
                    color: enactmentQuarter === q.q ? '#FFF' : '#0F172A', border: enactmentQuarter === q.q ? '2px solid #0284C7' : '1px solid #CBD5E1',
                    cursor: 'pointer', transition: 'all 0.15s'
                  }}
                >
                  <span style={{ fontSize: '10px', fontWeight: 900, display: 'block', textTransform: 'uppercase' }}>{q.label}</span>
                  <span style={{ fontSize: '11px', opacity: 0.9 }}>{q.desc}</span>
                </button>
              ))}
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', borderLeft: '6px solid #0284C7' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase' }}>ENACTMENT QUARTER {enactmentQuarter} MILESTONES</span>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: '6px 0' }}>
                {enactmentQuarter === 1 && "Presidential Assent, Gazette Publication & Apex Council Setup"}
                {enactmentQuarter === 2 && "Elections of 8 Profession Board Chairs & Registrar Appointment"}
                {enactmentQuarter === 3 && "Cryptographic QR Seal Portal Launch & 47 County API Integration"}
                {enactmentQuarter === 4 && "Complete Phase-out of Legacy Cap 525 Provisions & Statutory Fine Enforcement"}
              </h3>
            </div>
          </div>
        )}

        {/* TOOL 13: PPE Internship Competency Radar */}
        {activeTool === 13 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #0284C7', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 25 &amp; 28 GRADUATE ENDORSEMENT</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>13. PPE Internship Competency &amp; Board Endorsement Radar</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  Supervised Internship Months ({internshipMonths}/24 Months):
                </label>
                <input type="range" min="0" max="36" value={internshipMonths} onChange={e => setInternshipMonths(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#0284C7' }} />
              </div>
              <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  CPD Continuous Units Logged ({cpdUnits}/50 Units):
                </label>
                <input type="range" min="0" max="100" value={cpdUnits} onChange={e => setCpdUnits(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#b91c1c' }} />
              </div>
            </div>

            <div style={{ padding: '20px', background: internshipMonths >= 24 && cpdUnits >= 50 ? 'rgba(4,120,87,0.1)' : 'rgba(217,119,6,0.1)', border: `2px solid ${internshipMonths >= 24 && cpdUnits >= 50 ? '#b91c1c' : '#D97706'}`, textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: internshipMonths >= 24 && cpdUnits >= 50 ? '#b91c1c' : '#D97706', margin: 0 }}>
                {internshipMonths >= 24 && cpdUnits >= 50 ? '🎓 ELIGIBLE FOR NATIONAL PROFESSIONAL EXAMINATIONS (PPE) & FULL REGISTER INCLUSION' : '⏳ IN PROGRESS: Minimum 24 Months Supervised Internship & 50 CPD Units Required'}
              </h3>
            </div>
          </div>
        )}

        {/* TOOL 14: Corporate Equity Breakdown Chart */}
        {activeTool === 14 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #B45309', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 45 CORPORATE SHAREHOLDING ENGINE</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>14. Corporate Practice Firm 51% Voting Equity Breakdown</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A' }}>Local Registered Lead Professional Share ({localEquityShare}%):</label>
                <input type="range" min="10" max="100" value={localEquityShare} onChange={e => setLocalEquityShare(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#059669' }} />
              </div>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#334155', textTransform: 'uppercase' }}>VISUAL EQUITY DISTRIBUTION BAR</span>
              <div style={{ height: '32px', width: '100%', background: '#E2E8F0', display: 'flex', marginTop: '8px' }}>
                <div style={{ width: `${localEquityShare}%`, background: localEquityShare >= 51 ? '#059669' : '#DC2626', color: '#FFF', fontSize: '11px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Local Lead ({localEquityShare}%)
                </div>
                <div style={{ width: `${100 - localEquityShare}%`, background: '#64748B', color: '#FFF', fontSize: '11px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Other ({100 - localEquityShare}%)
                </div>
              </div>
            </div>

            <div style={{ padding: '20px', background: localEquityShare >= 51 ? 'rgba(5,150,105,0.1)' : 'rgba(220,38,38,0.1)', border: `2px solid ${localEquityShare >= 51 ? '#059669' : '#DC2626'}`, textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: localEquityShare >= 51 ? '#059669' : '#DC2626', margin: 0 }}>
                {localEquityShare >= 51 ? '🏢 COMPLIANT: Firm meets Section 45 requirement (Min 51% Local Professional Equity). Corporate License Granted.' : '🚨 NON-COMPLIANT: Local Lead Professional equity below 51% threshold under Section 45.'}
              </h3>
            </div>
          </div>
        )}

        {/* TOOL 15: Concrete Core Strength Log */}
        {activeTool === 15 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #DC2626', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 168 FORENSIC AUDIT</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>15. Concrete Core Cube Strength Forensic Auditor</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Lab Test Core Strength Result ({concreteStrength} N/mm²):
              </label>
              <input type="range" min="10" max="40" value={concreteStrength} onChange={e => setConcreteStrength(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: concreteStrength >= 25 ? '#b91c1c' : '#DC2626', height: '24px', cursor: 'pointer' }} />
            </div>

            <div style={{ padding: '20px', background: concreteStrength >= 25 ? 'rgba(4,120,87,0.1)' : 'rgba(220,38,38,0.1)', border: `2px solid ${concreteStrength >= 25 ? '#b91c1c' : '#DC2626'}`, textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: concreteStrength >= 25 ? '#b91c1c' : '#DC2626', margin: 0 }}>
                {concreteStrength >= 25 ? '✅ PASS: Meets Eurocode C25/30 Minimum Structural Design Strength.' : '🚨 CRITICAL FAILURE: Sub-standard concrete strength detected! Mandates immediate site cordoning under Sec 168.'}
              </h3>
            </div>
          </div>
        )}

        {/* TOOL 16: 47 County Readiness Map */}
        {activeTool === 16 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #0284C7', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 188 COUNTY DESK AUDIT</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>16. 47 County Building Control Desk Integration Readiness</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Select County Government:
              </label>
              <select value={selectedCounty} onChange={e => setSelectedCounty(e.target.value)} style={{ width: '100%', padding: '12px', background: '#FFFFFF', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                <option value="Nairobi">Nairobi City County (e-Construction Portal Active)</option>
                <option value="Mombasa">Mombasa County (KBERC API Live)</option>
                <option value="Kiambu">Kiambu County (KBERC API Live)</option>
                <option value="Nakuru">Nakuru County (Ready for API Launch)</option>
                <option value="Kisumu">Kisumu County (API Ready)</option>
                <option value="Uasin Gishu">Uasin Gishu County (API Ready)</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderTop: '4px solid #b91c1c' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c' }}>API INTEGRATION STATUS</span>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A', margin: '4px 0' }}>100% KBERC QR Live</h3>
              </div>
              <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderTop: '4px solid #0284C7' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#0284C7' }}>INSPECTION OFFICERS</span>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A', margin: '4px 0' }}>Registered Lead Inspectors Active</h3>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 17: Design Liability Matrix Table */}
        {activeTool === 17 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #7C3AED', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 52 &amp; 148 STATUTORY LIABILITY</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>17. 10-Year Statutory Design Liability Allocation Matrix</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #CBD5E1', fontSize: '11px', marginBottom: '24px' }}>
              <thead>
                <tr style={{ background: '#7C3AED', color: '#FFF', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #7C3AED' }}>Building Domain</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #7C3AED' }}>Primary Lead Responsible</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #7C3AED' }}>Statutory Limitation Term</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #7C3AED' }}>Insurance Backup</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Substructure & Piling</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Geotechnical & Structural Lead</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>10 Years Mandatory (Sec 148)</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Structural PII Policy</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Superstructure RC Frame</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Structural Engineer & CPM</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>10 Years Mandatory (Sec 148)</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Structural PII Policy</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>Building Envelope & Roof</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Lead Architect</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>6 Years Latent Defect Term</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Architectural PII Policy</td></tr>
                <tr><td style={{ padding: '10px', fontWeight: 700, border: '1px solid #CBD5E1' }}>MEP & Fire Suppression</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>Mechanical & Electrical Leads</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>6 Years Latent Defect Term</td><td style={{ padding: '10px', border: '1px solid #CBD5E1' }}>MEP PII Policy</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {/* TOOL 18: Mega-Infrastructure Calculator */}
        {activeTool === 18 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #059669', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 70 HIGH-CONSEQUENCE PROJECTS</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>18. Mega-Infrastructure Statutory Oversight &amp; Fee Calculator</h2>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Mega-Project Estimated Construction Budget (KES {(megaProjectCost).toLocaleString()}):
              </label>
              <input type="range" min="1000000000" max="50000000000" step="1000000000" value={megaProjectCost} onChange={e => setMegaProjectCost(parseInt(e.target.value, 10))} style={{ width: '100%', accentColor: '#059669', height: '24px', cursor: 'pointer' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', borderTop: '4px solid #059669' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>Consolidated Professional Fee</span>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '6px 0' }}>KES {(megaProjectCost * 0.05).toLocaleString()}</div>
                <span style={{ fontSize: '12px', color: '#475569' }}>5.0% Multi-disciplinary master consultancy fee allocation.</span>
              </div>
              <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', borderTop: '4px solid #b91c1c' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase' }}>Independent Peer Reviewers</span>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: '6px 0' }}>3 Class E Structural Reviewers</div>
                <span style={{ fontSize: '12px', color: '#475569' }}>Mandatory independent audit under Section 89.</span>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 19: Statutory Penalty Severity Gauge */}
        {activeTool === 19 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #DC2626', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTIONS 151-165 PENAL CODE</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>19. Statutory Offence &amp; Fine Severity Gauge</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Select Statutory Offence Code:
              </label>
              <select value={selectedOffenceCode} onChange={e => setSelectedOffenceCode(e.target.value)} style={{ width: '100%', padding: '12px', background: '#FFF', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 700 }}>
                <option value="unaccredited">Unaccredited Practice / Falsifying Degrees (Sec 35)</option>
                <option value="seal_renting">Seal Renting & Stamp Lending (Sec 118)</option>
                <option value="no_inspection">Failure to Conduct Stage Inspections (Sec 115)</option>
                <option value="demolition">Unauthorized Building Alteration / Demolition (Sec 160)</option>
              </select>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', border: '1px solid #CBD5E1', borderLeft: '6px solid #DC2626' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#DC2626', textTransform: 'uppercase' }}>PENALTY IMPOSITION</span>
              <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '4px 0' }}>
                {selectedOffenceCode === 'unaccredited' ? 'KES 5,000,000 Fine & 5 Years Jail' : selectedOffenceCode === 'seal_renting' ? 'KES 2,500,000 Fine & 3 Years Jail' : selectedOffenceCode === 'no_inspection' ? 'KES 1,000,000 Fine & License Suspension' : 'KES 3,000,000 Fine & Restoration Order'}
              </h3>
            </div>
          </div>
        )}

        {/* TOOL 20: Cap 525 Rights Converter */}
        {activeTool === 20 && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '5px solid #7C3AED', padding: '32px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SECTION 200 TRANSITIONAL CONVERTER</span>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '4px 0 20px' }}>20. Cap 525 Legacy Title &amp; Statutory Rights Converter</h2>

            <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                Select Legacy Cap 525 Registration Title:
              </label>
              <select value={legacyTitle} onChange={e => setLegacyTitle(e.target.value)} style={{ width: '100%', padding: '12px', background: '#FFF', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 700 }}>
                <option value="arch_cap525">Registered Architect (Cap 525)</option>
                <option value="eng_cap530">Registered Professional Engineer (Cap 530)</option>
                <option value="qs_cap525">Registered Quantity Surveyor (Cap 525)</option>
                <option value="technician_unreg">Diploma Building Technician (Previously Unregistered)</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', borderTop: '4px solid #7C3AED' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#7C3AED', textTransform: 'uppercase' }}>Converted KBERC Title</span>
                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: '6px 0' }}>
                  {legacyTitle === 'arch_cap525' ? 'Lead Architectural Practitioner' : legacyTitle === 'eng_cap530' ? 'Lead Structural Engineer' : legacyTitle === 'qs_cap525' ? 'Lead Quantity Surveyor' : 'Registered Built Environment Technologist'}
                </h3>
              </div>
              <div style={{ background: '#F8FAFC', padding: '20px', border: '1px solid #CBD5E1', borderTop: '4px solid #b91c1c' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase' }}>Digital QR Seal Eligibility</span>
                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#b91c1c', margin: '6px 0' }}>FULL QR SEAL ISSUANCE</h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
