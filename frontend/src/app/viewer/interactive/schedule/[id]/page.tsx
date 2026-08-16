'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { billData } from '../../../data';
import { firstScheduleTables, ScheduleTable } from '../../../schedules-data';

const SCH_PALETTE = [
  { from: '#ef4444', to: '#dc2626' },
  { from: '#06B6D4', to: '#0891B2' },
  { from: '#F59E0B', to: '#D97706' },
  { from: '#6366F1', to: '#4F46E5' },
  { from: '#EC4899', to: '#DB2777' },
  { from: '#8B5CF6', to: '#7C3AED' },
  { from: '#14B8A6', to: '#0D9488' },
  { from: '#F97316', to: '#EA580C' },
  { from: '#3B82F6', to: '#2563EB' },
  { from: '#EF4444', to: '#DC2626' },
  { from: '#84CC16', to: '#65A30D' },
  { from: '#D946EF', to: '#C026D3' },
  { from: '#0EA5E9', to: '#0284C7' },
  { from: '#b91c1c', to: '#991b1b' },
];

export default function ScheduleInteractiveViewer() {
  const params = useParams();
  const rawId = params?.id as string;
  const schIndex = Math.max(0, (parseInt(rawId, 10) || 1) - 1);
  const currentSchedule = billData.schedules[schIndex] || billData.schedules[0];

  const palette = SCH_PALETTE[schIndex % SCH_PALETTE.length];
  const schNum = schIndex + 1;
  const totalSchedulesCount = billData.schedules.length;
  const prevSchIdx = schIndex > 0 ? schIndex : null;
  const nextSchIdx = schIndex < billData.schedules.length - 1 ? schIndex + 2 : null;

  const [activeTab, setActiveTab] = useState<'tables' | 'text' | 'summary'>('tables');
  const [tableSearch, setTableSearch] = useState('');

  // 14 Custom Executive Summaries Tailored to Each Specific Schedule
  const scheduleSummaries: Record<number, { overview: string; obligations: string[] }> = {
    0: {
      overview: "Schedule 1 enacts the operational mechanics, sittings, and fiduciary duties of the Built Environment Regulation Council (KBERC) under Section 8(3). It establishes strict quorum thresholds, meeting intervals, and financial seal custody rules.",
      obligations: [
        "Mandatory minimum of 4 ordinary meetings per financial year (max 4-month gap between sittings).",
        "Strict half (50%) membership quorum required for all valid proceedings and resolutions.",
        "Chairperson holds a second or casting vote in the event of an equality of votes.",
        "Mandatory disclosure of interest and immediate member withdrawal from affected deliberations."
      ]
    },
    1: {
      overview: "Schedule 2 governs the sittings, evidence rules, and award determinations of the Built Environment Appeals Tribunal under Section 132(4). It guarantees fair, technical, and expedited dispute resolution.",
      obligations: [
        "3-member tribunal sittings including a High Court Advocate Chairperson of 10+ years standing.",
        "Proceedings conducted with minimal formality, relaxing strict Evidence Act technicalities.",
        "Subpoenas issued under hand of Chairperson carry full statutory force of High Court witness summonses.",
        "Mandatory delivery of written determinations within 60 days of hearing completion."
      ]
    },
    2: {
      overview: "Schedule 3 formally recognizes and defines the statutory technical scope of Kenya's 8 built environment disciplines and TVET technical cadres under Section 14.",
      obligations: [
        "Legal recognition of Architecture, Engineering, Quantity Surveying, Physical Planning, Landscape Architecture, Interior Design, CPM, and Technologists.",
        "Protects professional titles and technical mandates across all 8 cadres.",
        "Enforces TVET technologist integration within gazetted Council scope boundaries.",
        "Mandates multidisciplinary coordination across all public and private development projects."
      ]
    },
    3: {
      overview: "Schedule 4 enforces Eurocode-aligned structural risk categories (Classes A to E) based on building height, occupancy, and geotechnical complexity under Section 89(2).",
      obligations: [
        "Risk Class A (Low Risk ≤ 2 storeys): Single peer review waived.",
        "Risk Class B (Medium Risk 2-4 storeys): Standard County Desk sign-off.",
        "Risk Class C (High Risk 5-9 storeys): Form KBERC-3 & structural specialist sign-off mandatory.",
        "Risk Class D & E (High-Rise & Mega Towers): Mandatory single or dual 3rd-party independent specialist peer reviews."
      ]
    },
    4: {
      overview: "Schedule 5 enforces statutory work reservations and defines exact operational boundaries between Lead Professionals and Technologists under Sections 14 & 16.",
      obligations: [
        "Reserves professional work in Architecture, Engineering, QS, Planning, Landscape, Interior, and CPM.",
        "Technologists may independently execute Risk Class A & B projects under Council guidelines.",
        "Risk Class C, D, and E developments strictly require registered Lead Professional supervision.",
        "Part XIV criminal fines up to KES 2,000,000 or imprisonment for unauthorized practice."
      ]
    },
    5: {
      overview: "Schedule 6 establishes the mandatory digital legal affidavit and cryptographic SHA-256 seal stamp required for all development permits under Section 114.",
      obligations: [
        "Solemn statutory declaration of full compliance with NBC codes and Eurocode structural standards.",
        "Mandatory generation of cryptographic SHA-256 digital signature hash for every permit approval.",
        "Verification against County GIS boundary registry and active KBERC practitioner database.",
        "Perjury prosecution under Penal Code for false compliance declarations."
      ]
    },
    6: {
      overview: "Schedule 7 enacts statutory legislative amendments to harmonise existing land and construction laws with KBERC regulations under Section 211.",
      obligations: [
        "Amends PLUPA 2019 Section 58(3): Mandates KBERC Digital Seal verification prior to plan approval.",
        "Amends NCA Act 2011 Section 17(2): Enforces joint site safety coordination with KBERC.",
        "Amends EMCA 1999 Section 58(4): Requires NEMA to verify Environmental Engineer seals."
      ]
    },
    7: {
      overview: "Schedule 8 governs asset transfers, staff absorption, and County Liaison Desk API integration during the transition to KBERC.",
      obligations: [
        "Smooth handover of assets, liabilities, and contracts from repealed regulatory bodies.",
        "Absorption of existing regulatory staff into the Council subject to suitability assessment.",
        "12-month phased transition period granted to County Liaison Desks for KBERC API integration.",
        "Inaugural electronic board elections scheduled within 18 months of commencement."
      ]
    },
    8: {
      overview: "Schedule 9 prescribes legal instruments for witness summons, subpoena duces tecum, and sworn veracity oaths during disciplinary tribunal hearings under Sections 122 & 126.",
      obligations: [
        "Chairperson authority to issue binding witness summons and orders for digital seal audit logs.",
        "Sworn oath of veracity required for all witness testimony under Evidence Act standards.",
        "Refusal to attend punishable by fines up to KES 500,000 or 12 months imprisonment.",
        "Contempt of Tribunal proceedings referred directly to the High Court."
      ]
    },
    9: {
      overview: "Schedule 10 prescribes official statutory forms for lead professional certificates, annual practicing licenses, and foreign temporary permits under Sections 35 & 45.",
      obligations: [
        "Form A: Lifetime Certificate of Registration as Lead Professional.",
        "Form B: Annual Practicing License (requires active PII cover & digital seal activation).",
        "Form C: Foreign Temporary Practicing Permit (max 12 months in JV with Kenyan Lead).",
        "Mandatory public verification of license status on the online KBERC digital portal."
      ]
    },
    10: {
      overview: "Schedule 11 enforces mandatory ethical standards, anti-seal-lending prohibitions, and continuous professional development rules.",
      obligations: [
        "Paramount duty to prioritize structural safety and public welfare above commercial gain.",
        "Strict prohibition against lending or affixing digital seal to unsupervised work (min KES 1M fine).",
        "Mandatory annual earning of 30 CPD credit units to maintain practicing license validity.",
        "Immediate disciplinary action for professional misconduct or conflict concealment."
      ]
    },
    11: {
      overview: "Schedule 12 establishes statutory baseline fee scales and advisory hourly rates to prevent under-cutting and preserve quality under Sections 111 & 185.",
      obligations: [
        "Architectural & Engineering baseline scale: 5.0% to 6.5% of total construction cost.",
        "Quantity Surveying & CPM baseline scale: 2.5% to 3.5% of contract value.",
        "Landscape & Interior Design baseline scale: 6.0% to 8.0% of site/fit-out cost.",
        "Advisory hourly rates: Lead Specialist min KES 15,000/hr | Registered Professional min KES 10,000/hr."
      ]
    },
    12: {
      overview: "Schedule 13 governs operational sittings, elections, and annual reporting for the 8 profession-specific regulatory boards under Sections 24A–24D.",
      obligations: [
        "Mandatory minimum of 4 ordinary meetings per financial year (max 4-month gap).",
        "Electronic secret ballot elections conducted via KBERC portal for 3-year board terms.",
        "Quorum threshold set at more than half of total Board membership.",
        "Mandatory submission of annual performance report to Council within 3 months of year-end."
      ]
    },
    13: {
      overview: "Schedule 14 enforces the master schedule of statutory stage inspection forms (Forms KBERC-1 to KBERC-6), PII cover tariffs (KES 10M to 250M), 6-part sign-off certificate structure, and Part XIV penalty provisos.",
      obligations: [
        "9 mandatory stage clearance forms spanning from -12m sub-grade soil survey to Certificate of Occupancy.",
        "Mandatory Professional Indemnity Insurance cover tariffs ranging from KES 10M (Class A) to KES 250M (Class E).",
        "Statutory 6-part sign-off certificate template with SHA-256 digital QR seal verification.",
        "Part XIV criminal penalties up to KES 5,000,000, 5 years prison, or building seizure for un-certified construction."
      ]
    }
  };

  // Exhaustive Data Tables for Every Individual Schedule (1 to 14)
  const customScheduleTables: Record<number, ScheduleTable[]> = {
    0: [
      {
        number: "1-A",
        title: "COUNCIL ORDINARY & EXTRAORDINARY MEETINGS (SECTION 8(3))",
        references: "Section 8(3)",
        headers: ["Governance Aspect", "Statutory Standard", "Legal Enforcement Proviso"],
        rows: [
          ["Ordinary Meeting Frequency", "Not less than 4 meetings per financial year", "Max 4 elapsed months between consecutive sittings"],
          ["Notice Period", "At least 14 days written notice to all members", "Agenda & board papers dispatched with notice"],
          ["Extraordinary Meetings", "Convened by Chair or 1/3 Council requisition", "Must be convened within 7 days of requisition"],
          ["Meeting Venues", "Physical headquarters or secure virtual portal", "Virtual attendance verified by digital quorum log"]
        ]
      },
      {
        number: "1-B",
        title: "QUORUM, VOTING MAJORITY & DISCLOSURE OF INTEREST",
        references: "Section 8(3)",
        headers: ["Governance Rule", "Statutory Requirement", "Sanction / Proviso"],
        rows: [
          ["Quorum Threshold", "Half (50%) of total Council Members", "All resolutions void if quorum is absent"],
          ["Voting Majority", "Simple majority of members present & voting", "Proxy voting strictly prohibited"],
          ["Casting Vote", "Presiding Officer exercises second casting vote", "Applied only in case of equality of votes"],
          ["Disclosure of Interest", "Immediate mandatory declaration of interest", "Member must withdraw from meeting room"]
        ]
      }
    ],
    1: [
      {
        number: "2-A",
        title: "TRIBUNAL SITTINGS, VENUES & NOTICES (SECTION 132(4))",
        references: "Section 132(4)",
        headers: ["Tribunal Parameter", "Statutory Standard", "Procedural Safeguard"],
        rows: [
          ["Sittings & Venues", "Appointed by Chairperson (Physical/Virtual)", "Notice issued at least 14 days prior to hearing"],
          ["Bench Composition", "3 Members (Chairperson Advocate + 2 Technical)", "Ensures legal & built environment expertise"],
          ["60-Day Award Limit", "Written awards delivered within 60 days", "Expedited determination of all appeals"],
          ["Public Register", "Digital register of all tribunal awards", "Accessible to public on KBERC portal"]
        ]
      },
      {
        number: "2-B",
        title: "SUBPOENA AUTHORITY & EVIDENTIARY RELAXATION",
        references: "Section 137",
        headers: ["Evidentiary Rule", "Statutory Mandate", "High Court Enforcement"],
        rows: [
          ["Evidence Rules", "Not bound by strict Evidence Act technicalities", "Prioritizes natural justice & technical merit"],
          ["Subpoena Authority", "Issued under hand of Tribunal Chairperson", "Full statutory force of High Court summons"],
          ["Witness Expenses", "Paid under prescribed judicial tariff", "Taxed by Tribunal Registrar"],
          ["Contempt Penalties", "Refusal to testify punishable under law", "Referred to High Court for committal"]
        ]
      }
    ],
    2: [
      {
        number: "3-A",
        title: "RECOGNIZED 8 BUILT ENVIRONMENT PROFESSIONS & TECHNICAL CADRES",
        references: "Section 14",
        headers: ["No.", "Designated Discipline", "Core Technical Mandate & Scope"],
        rows: [
          ["1", "Architecture", "Architectural design, master planning, specifications & spatial ergonomics"],
          ["2", "Engineering", "Civil, structural, mechanical, electrical, geotechnical & fire safety"],
          ["3", "Quantity Surveying", "Cost planning, bills of quantities, measurement & financial auditing"],
          ["4", "Physical and Land Use Planning", "Regional, county, and local land use development plans & zoning"],
          ["5", "Landscape Architecture", "Landscape master planning, environmental design & site ecology"],
          ["6", "Interior Design", "Interior space planning, acoustic specs & fire egress layouts"],
          ["7", "Construction Project Management", "Project administration, statutory site safety & quality supervision"],
          ["8", "Technologists & TVET Cadres", "Technical design support, CAD detailing & site supervision"]
        ]
      }
    ],
    3: [
      {
        number: "4-A",
        title: "EUROCODE PROJECT RISK CLASSIFICATION MATRIX & PEER REVIEW RULES",
        references: "Section 89(2)",
        headers: ["Eurocode Risk Class", "Building Criteria & Storey Limits", "Mandatory Professional Staffing & Peer Review"],
        rows: [
          ["Risk Class A (Low)", "Single-storey domestic houses & minor structures (≤ 2 storeys, < 10m)", "Lead Architect / Engineer sign-off. Single peer review waived."],
          ["Risk Class B (Medium)", "2 to 4 storey low-rise commercial/residential (10m to 15m)", "Lead Architect, Engineer & QS. Standard County Desk approval."],
          ["Risk Class C (High)", "5 to 9 storey mid-rise commercial complexes (15m to 30m)", "Lead Structural Engineer, Architect, QS, MEP Engineer. Form KBERC-3 mandatory."],
          ["Risk Class D (Very High)", "10 to 19 storey high-rise towers (30m to 60m)", "Mandatory Single 3rd-Party Peer Review by a Sec 36 Specialist Engineer."],
          ["Risk Class E (Catastrophic)", "20+ storey mega towers & 2+ deep basement levels (> 60m)", "Mandatory Dual Independent Specialist Peer Reviews + 6-hr emergency collapse team."]
        ]
      }
    ],
    4: [
      {
        number: "5-A",
        title: "RESERVED PROFESSIONAL WORK SCOPES & TECHNOLOGIST BOUNDARIES",
        references: "Sections 14 & 16",
        headers: ["Profession", "Reserved Scope of Work", "Technologist Scope Boundary Rule"],
        rows: [
          ["Architecture", "Architectural designs & master plans for Risk Class B, C, D, E", "Technologists may design Low/Medium risk independently"],
          ["Engineering", "Structural calculations & engineering designs for Class B-E", "Technologists work under supervision for High-risk"],
          ["Quantity Surveying", "Bills of quantities & financial tender documents", "Technologists prepare estimates under QS guidance"],
          ["Physical Planning", "Spatial frameworks & county land use development plans", "Requires certified Lead Planner sign-off"],
          ["Landscape Architecture", "Environmental landscape impact assessments & outdoor plans", "Technologists undertake Low-risk independently"],
          ["Interior Design", "Fire egress interior fit-out & material specifications", "Public assembly requires Lead Designer sign-off"],
          ["Project Management", "Construction administration & quality supervision", "Requires certified CPM sign-off for High-risk"]
        ]
      }
    ],
    5: [
      {
        number: "6-A",
        title: "STATUTORY COMPLIANCE DECLARATION & DIGITAL SEAL PARAMETERS",
        references: "Section 114",
        headers: ["Field Name", "Statutory Data Requirement", "Verification Standard"],
        rows: [
          ["Lead Professional Name", "Full name as registered on KBERC Register", "Cross-checked against KBERC database"],
          ["Board Registration No", "Valid active registration number", "Must have current annual practicing certificate"],
          ["Project Identification", "L.R. Parcel Number & County Permit ID", "Validated against County GIS boundary registry"],
          ["Cryptographic Seal", "SHA-256 Digital Signature & QR Stamp", "Encrypted key verified on KBERC portal"]
        ]
      }
    ],
    6: [
      {
        number: "7-A",
        title: "STATUTORY LEGISLATIVE AMENDMENTS MATRIX",
        references: "Schedule 7",
        headers: ["Amended Act", "Affected Provision", "New Statutory Mandate"],
        rows: [
          ["Physical & Land Use Planning Act 2019", "Section 58", "Mandatory verification of KBERC Digital Seal before plan approval"],
          ["National Construction Authority Act 2011", "Section 17", "Mandatory coordination with KBERC on contractor site safety"],
          ["EMCA 1999 (Environmental Act)", "Section 58", "Mandatory verification of KBERC EIA Environmental Engineer registration"]
        ]
      }
    ],
    7: [
      {
        number: "8-A",
        title: "TRANSITION TIMELINE & SAVINGS FRAMEWORK",
        references: "Schedule 8",
        headers: ["Transition Phase", "Statutory Target", "Time Allowance"],
        rows: [
          ["Board Constitution", "Full establishment of Profession-Specific Boards", "Within 12 months of commencement"],
          ["Chairperson Elections", "Electronic elections for Board Chairpersons", "Within 18 months of commencement"],
          ["County Liaison Desks", "API integration with County Building Desks", "12-month phased transition period"]
        ]
      }
    ],
    8: [
      {
        number: "9-A",
        title: "DISCIPLINARY TRIBUNAL WITNESS SUMMONS STANDARDS",
        references: "Sections 122 & 126",
        headers: ["Legal Instrument", "Authority & Enforcement", "Non-Compliance Penalty"],
        rows: [
          ["Summons to Witness", "Issued under hand of Tribunal Chairperson", "Fine up to KES 500,000 / 12 months prison"],
          ["Oath of Veracity", "Mandatory sworn testimony under Evidence Act", "Prosecution for perjury under Penal Code"],
          ["Subpoena Duces Tecum", "Order to produce digital seals & audit logs", "Contempt of Tribunal proceedings"]
        ]
      }
    ],
    9: [
      {
        number: "10-A",
        title: "PRESCRIBED REGISTRATION & LICENSING FORMS",
        references: "Sections 35 & 45",
        headers: ["Form Code", "Certificate Title", "Validity & Requirements"],
        rows: [
          ["Form A", "Certificate of Registration as Lead Professional", "Lifetime validity subject to CPD units"],
          ["Form B", "Annual Practicing License", "Renewed annually; requires active PII cover"],
          ["Form C", "Foreign Temporary Practicing Permit", "Max 12 months in joint venture with Kenyan Lead"]
        ]
      }
    ],
    10: [
      {
        number: "11-A",
        title: "CODE OF ETHICS & DIGITAL SEAL CUSTODY RULES",
        references: "Schedule 11",
        headers: ["Ethical Rule", "Standard of Conduct", "Disciplinary Sanction"],
        rows: [
          ["Public Safety Duty", "Structural safety prioritised above commercial interests", "Immediate deregistration for negligence"],
          ["Anti-Seal-Lending Prohibition", "Prohibits affixing seal to un-supervised work", "Minimum KES 1M fine & 2-year suspension"],
          ["CPD Credit Maintenance", "Minimum 30 CPD units earned per calendar year", "Inactivation of practicing license"]
        ]
      }
    ],
    11: [
      {
        number: "12-A",
        title: "BASELINE SCALE OF PROFESSIONAL FEES MATRIX",
        references: "Sections 111 & 185",
        headers: ["Built Environment Discipline", "Percentage of Construction Cost", "Time-Based Hourly Rate"],
        rows: [
          ["Architecture & Master Planning", "5.0% to 6.5% of total cost", "Lead: min KES 15,000/hr"],
          ["Structural & Civil Engineering", "5.0% to 6.5% of total cost", "Lead: min KES 15,000/hr"],
          ["Quantity Surveying & Cost Management", "2.5% to 3.5% of total cost", "Registered: min KES 10,000/hr"],
          ["Mechanical & Electrical (MEP)", "2.0% to 3.0% of MEP works", "Registered: min KES 10,000/hr"],
          ["Interior Design & Ergonomics", "6.0% to 8.0% of fit-out cost", "Registered: min KES 10,000/hr"],
          ["Landscape Architecture & Site Ecology", "6.0% to 8.0% of site works", "Registered: min KES 10,000/hr"],
          ["Physical & Land Use Planning", "Spatial Per-Hectare Gazetted Scale", "Lead: min KES 15,000/hr"],
          ["Construction Project Management (CPM)", "2.0% to 3.5% of contract value", "Registered: min KES 10,000/hr"]
        ]
      }
    ],
    12: [
      {
        number: "13-A",
        title: "PROFESSION-SPECIFIC BOARDS GOVERNANCE MATRIX",
        references: "Sections 24A–24D",
        headers: ["Board Governance Element", "Statutory Rule", "Enforcement Standard"],
        rows: [
          ["Meeting Frequency", "At least 4 ordinary meetings per financial year", "Max 4 elapsed months between sittings"],
          ["Quorum", "More than half of total Board membership", "Decisions void if quorum absent"],
          ["Chairperson Election", "Elected by secret electronic ballot via KBERC portal", "3-year term, renewable once"],
          ["Annual Reporting", "Mandatory submission of annual performance report", "Submitted to Council within 3 months of year-end"]
        ]
      }
    ],
    13: [
      {
        number: "14-A",
        title: "MASTER SCHEDULE OF KBERC STATUTORY STAGE INSPECTION FORMS (FORMS KBERC-1 TO KBERC-6)",
        references: "Sections 106–115 & Section 188",
        headers: ["KBERC Form", "Building Stage Level", "Authorized Lead Sign-Off Discipline", "Risk Class", "Required Laboratory Tests", "Part XIV Penalty Scale"],
        rows: [
          ["Form KBERC-1", "Stage 0: Sub-grade Soil (-12m)", "Geotechnical Specialist & Planner", "Classes A–E", "Borehole sampling, SPT N-values, water table audit", "Fines up to KES 5M / Section 154"],
          ["Form KBERC-1A", "Stage 1: Piling & Retaining Walls", "Structural Specialist (Sec 36) & CPM", "Classes C, D, E", "Concrete cube crush test, sonic PIT pile test, anchor pull test", "Immediate Stop-Work Order"],
          ["Form KBERC-2", "Stage 2: Ground Slab & Tanking", "Lead Architect, Civil Eng & Landscape", "Classes A–E", "Hydrostatic membrane test, 95% MDD soil compaction, termite audit", "KES 1,000,000 fine / Section 158"],
          ["Form KBERC-3", "Stage 3: Superstructure RC Frame", "Structural Eng, Architect, QS & CPM", "Classes B, C, D, E", "28-day cube strength (C25/30), rebar tensile test, plumb laser check", "Deregistration & Prosecution"],
          ["Form KBERC-3A", "Stage 4: Steel Trusses & PT Slabs", "Structural Specialist & Technologist", "Classes D, E", "Ultrasonic NDT weld test, PT cable tension log, intumescent firepaint", "KES 3,000,000 fine / Section 159"],
          ["Form KBERC-4", "Stage 5: Facade & Roof Deck", "Architect, Facade Specialist & QS", "Classes B, C, D, E", "ASTM E1105 water jet test, 48-hr roof flood test, wind anchor pull test", "KES 2,500,000 fine / Section 156"],
          ["Form KBERC-5", "Stage 6: MEP Shafts & Electrical", "Electrical Eng, Mechanical Eng & QS", "Classes A–E", "Megger 1000V insulation test, 10-bar pipe pressure test, HVAC CFM audit", "License Suspension / Section 62"],
          ["Form KBERC-5A", "Stage 7: Fire Safety & Sprinklers", "Fire Safety Specialist & Interior Designer", "Classes C, D, E", "1000 GPM fire pump flow test, 50 Pa smoke extraction, 2-hr fire door seal", "5 Yrs Prison / Section 160"],
          ["Form KBERC-5B", "Stage 8: PWD Access & Lifts", "Lead Architect & Interior Designer", "Classes B, C, D, E", "1:12 ramp slope clinometer audit, lift 125% load brake drop test", "KES 50,000 daily fine / Sec 113"],
          ["Form KBERC-6", "Stage 9: Certificate of Occupancy", "County Desk Officer & Lead Architect", "Classes A–E (100%)", "Verification across Forms KBERC-1 to 5B, QR Seal audit, PII policy check", "Building Seizure & Prosecution"]
        ]
      },
      {
        number: "14-B",
        title: "MANDATORY PROFESSIONAL INDEMNITY INSURANCE (PII) BASELINE COVER TARIFFS",
        references: "Section 62 & Schedule 4",
        headers: ["Eurocode Risk Class", "Building Criteria & Storey Limits", "Minimum Mandatory PII Cover", "Peer Review Mandate"],
        rows: [
          ["Risk Class A (Low Risk)", "Single-storey domestic houses & minor structures (≤ 2 storeys, < 10m)", "KES 10,000,000", "Single peer review waived"],
          ["Risk Class B (Medium Risk)", "2 to 4 storey low-rise commercial/residential (10m to 15m)", "KES 25,000,000", "Standard County Desk sign-off"],
          ["Risk Class C (High Risk)", "5 to 9 storey mid-rise commercial complexes (15m to 30m)", "KES 50,000,000", "Form KBERC-3 mandatory"],
          ["Risk Class D (Very High Risk)", "10 to 19 storey high-rise towers (30m to 60m)", "KES 100,000,000", "Single 3rd-Party Peer Review (Sec 89)"],
          ["Risk Class E (Catastrophic Risk)", "20+ storey mega towers & 2+ deep basement levels (> 60m)", "KES 250,000,000", "Dual Independent Specialist Peer Reviews"]
        ]
      }
    ]
  };

  const currentSummary = scheduleSummaries[schIndex] || scheduleSummaries[0];
  const relatedTables: ScheduleTable[] = customScheduleTables[schIndex] || firstScheduleTables.slice(schIndex * 2, (schIndex * 2) + 3);

  const filteredTables = relatedTables.filter(t => 
    !tableSearch || t.title.toLowerCase().includes(tableSearch.toLowerCase()) ||
    t.rows.some(r => r.some(c => c.toLowerCase().includes(tableSearch.toLowerCase())))
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      color: '#0F172A',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      padding: '32px 24px 80px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .stat-table { width: 100%; border-collapse: collapse; margin-top: 16px; border-radius: 8px; overflow: hidden; border: 1px solid #CBD5E1; }
        .stat-table th { background: #b91c1c; color: #FFFFFF; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; padding: 14px 16px; text-align: left; border-bottom: 2px solid #991b1b; }
        .stat-table td { background: #FFFFFF; color: #0F172A; font-size: 12px; padding: 12px 16px; border-bottom: 1px solid #E2E8F0; font-family: inherit; }
        .stat-table tr:nth-child(even) td { background: #F8FAFC; }
        .stat-table tr:hover td { background: #F1F5F9; }
      `}</style>

      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Top Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <Link
            href="/viewer/interactive"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 700,
              background: '#FFFFFF', border: '1px solid #CBD5E1',
              color: '#475569',
            }}
          >
            ← Back to NBCK Interactive Framework
          </Link>
          <div style={{ display: 'flex', gap: '8px' }}>
            {prevSchIdx !== null && (
              <Link
                href={`/viewer/interactive/schedule/${prevSchIdx}`}
                style={{
                  padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 700,
                  background: '#FFFFFF', border: '1px solid #CBD5E1',
                  color: '#0F172A',
                }}
              >
                ← Schedule {prevSchIdx}
              </Link>
            )}
            {nextSchIdx !== null && (
              <Link
                href={`/viewer/interactive/schedule/${nextSchIdx}`}
                style={{
                  padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 700,
                  background: '#FFFFFF', border: '1px solid #CBD5E1',
                  color: '#0F172A',
                }}
              >
                Schedule {nextSchIdx} →
              </Link>
            )}
          </div>
        </div>

        {/* Schedule Hero Header */}
        <div style={{
          background: `linear-gradient(135deg, ${palette.from}, ${palette.to})`,
          padding: '36px',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          marginBottom: '32px',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{
              background: '#F8FAFC', color: '#FFFFFF', padding: '4px 12px',
              borderRadius: '20px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>
              SCHEDULE #{schNum} OF {totalSchedulesCount}
            </span>
            <span style={{ fontSize: '12px', color: '#334155', fontWeight: 700 }}>
              {relatedTables.length} Statutory Data Tables Available
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 900, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
            {currentSchedule.title}
          </h1>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/viewer/read"
              style={{
                background: '#FFFFFF', color: palette.to, padding: '8px 16px', borderRadius: '8px',
                fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em'
              }}
            >
              📖 View in Official A4 Reader
            </Link>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '2px solid #E2E8F0', marginBottom: '28px', gap: '8px' }}>
          {[
            { id: 'tables', label: `STATUTORY DATA TABLES (${relatedTables.length})` },
            { id: 'text', label: 'FULL STATUTORY LEGAL TEXT' },
            { id: 'summary', label: 'EXECUTIVE SUMMARY' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '12px 20px',
                fontSize: '12px',
                fontWeight: activeTab === tab.id ? 900 : 700,
                color: activeTab === tab.id ? palette.to : '#64748B',
                borderBottom: `3px solid ${activeTab === tab.id ? palette.to : 'transparent'}`,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: STATUTORY DATA TABLES */}
        {activeTab === 'tables' && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Search schedule tables, fields, or form codes..."
                value={tableSearch}
                onChange={e => setTableSearch(e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '8px',
                  border: '1px solid #CBD5E1', background: '#FFFFFF', color: '#0F172A',
                  fontSize: '13px', outline: 'none'
                }}
              />
            </div>

            {filteredTables.map((table, tIdx) => (
              <div key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: `4px solid ${palette.to}`, padding: '24px', borderRadius: '12px', marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                    TABLE #{table.number} — {table.title}
                  </h3>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: palette.to, background: '#F0FDF4', padding: '4px 10px', borderRadius: '6px', border: '1px solid #DCFCE7' }}>
                    {table.references}
                  </span>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table className="stat-table">
                    <thead>
                      <tr>
                        {table.headers.map((h, hIdx) => (
                          <th key={hIdx}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} style={{ fontWeight: cIdx === 0 ? 800 : 500, color: cIdx === 0 ? palette.to : '#0F172A' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: FULL STATUTORY LEGAL TEXT */}
        {activeTab === 'text' && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '32px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', marginBottom: '20px', borderBottom: '2px solid #E2E8F0', paddingBottom: '10px' }}>
              Statutory Provisions &amp; Legal Text of {currentSchedule.title}
            </h2>
            <div style={{ fontSize: '14px', color: '#1E293B', lineHeight: 1.8, whiteSpace: 'pre-line', fontWeight: 500 }}>
              {currentSchedule.content}
            </div>
          </div>
        )}

        {/* TAB 3: EXECUTIVE SUMMARY */}
        {activeTab === 'summary' && (
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '32px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', marginBottom: '16px' }}>
              Executive Compliance Overview &amp; Statutory Objectives
            </h2>
            <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              {currentSummary.overview}
            </p>
            <div style={{ background: '#F8FAFC', padding: '20px', borderLeft: `6px solid ${palette.to}`, border: '1px solid #CBD5E1', borderRadius: '8px' }}>
              <strong style={{ fontSize: '12px', fontWeight: 900, color: palette.to, textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                Key Statutory Obligations:
              </strong>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#0F172A', lineHeight: 1.8 }}>
                {currentSummary.obligations.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
