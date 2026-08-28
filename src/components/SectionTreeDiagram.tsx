'use client';

import React from 'react';
import MermaidDiagram from './MermaidDiagram';

interface Props {
  sectionNumber: string;
}

export default function SectionTreeDiagram({ sectionNumber }: Props) {
  let chart: string | null = null;
  let title = '';
  let description = '';

  switch (sectionNumber) {
    case '10':
      title = 'SECTION 10 • APEX COUNCIL MULTI-DISCIPLINARY ROTATIONAL COMPOSITION';
      description = 'Statutory 9-member Council balance with 3-year rotational representation across all 8 regulated professions and TVET cadres.';
      chart = `
graph TD
    A[KBERC Apex Council: 9 Voting Seats] --> B[State & Legal Oversight: 3 Seats / 33.3%]
    A --> C[Multi-Disciplinary Guilds: 4 Seats / 44.4%]
    A --> D[Consumer Protection Bodies: 2 Seats / 22.2%]
    
    B --> B1[Presidential Chair: 15+ Yrs Experience]
    B --> B2[Principal Secretary: Ministry of Housing]
    B --> B3[Attorney General / AG Representative]

    C --> C1[Rotational Group A: Architecture, Engineering, QS, Planning]
    C --> C2[Rotational Group B: CPM, Landscape, Interior Design, EDC, TVET]

    D --> D1[2 Independent Consumer Representatives]

    style A fill:#b91c1c,stroke:#991b1b,color:#fff
    style C fill:#7c3aed,stroke:#6d28d9,color:#fff
    style D fill:#059669,stroke:#047857,color:#fff
      `;
      break;

    case '13':
      title = 'SECTION 13 • 8-DISCIPLINE TECHNICAL COMMITTEES & TVET CADRES';
      description = 'Mandatory standing Technical Committees providing peer oversight for every regulated profession.';
      chart = `
graph TD
    A[KBERC Apex Council] --> B[Registration & Disciplinary Committees]
    A --> C[8 Discipline Technical Committees]
    A --> D[TVET Technical Education Committee]

    C --> C1[Architectural Technical Committee]
    C --> C2[Engineering Technical Committee - Joint EBK]
    C --> C3[Quantity Surveying Technical Committee]
    C --> C4[Physical Planning Technical Committee]
    C --> C5[Construction Project Management Committee]
    C --> C6[Landscape Architecture Committee]
    C --> C7[Interior Design Committee]
    C --> C8[Environmental Design Committee]

    D --> D1[Technologists, Technicians & Craftsmen Cadres]

    style A fill:#7c3aed,stroke:#6d28d9,color:#fff
    style C fill:#0284c7,stroke:#0369a1,color:#fff
      `;
      break;

    case '14':
      title = 'SECTION 14 • REGULATED DISCIPLINES DELEGATION TREE';
      description = 'Statutory breakdown of the 8 regulated built environment professions and technical cadres.';
      chart = `
graph TD
    A[KBERC Apex Council] --> B[College 1: Design & Spatial]
    A --> C[College 2: Engineering & Tech]
    A --> D[College 3: Economics & Management]
    
    B --> B1[Architecture]
    B --> B2[Landscape Architecture]
    B --> B3[Interior Design]
    B --> B4[Physical & Land Use Planning]

    C --> C1[Civil & Structural Engineering]
    C --> C2[Mechanical & Electrical Services]
    C --> C3[TVET Technical Cadres]

    D --> D1[Quantity Surveying]
    D --> D2[Construction Project Management]
    D --> D3[Environmental Design & Auditing]

    style A fill:#b91c1c,stroke:#991b1b,color:#fff
    style B1 fill:#0284c7,stroke:#0369a1,color:#fff
    style C1 fill:#0284c7,stroke:#0369a1,color:#fff
    style D1 fill:#0284c7,stroke:#0369a1,color:#fff
      `;
      break;

    case '21':
      title = 'SECTION 21 • FEDERATED BOARD AUTONOMY TREE (CAP 530 / CAP 525)';
      description = 'Asymmetric Hybrid Model preserving EBK Cap 530 autonomy while absorbing Cap 525.';
      chart = `
graph TD
    A[KBERC Apex Council] -->|Federated Coordination| B[Engineers Board of Kenya - EBK]
    A -->|Federated Coordination| C[Physical Planners Registration Board - PPRB]
    A -->|100% Statutory Absorption| D[Cap 525 Repealed - BORAQS Disbanded]

    B -->|Cap 530 Autonomy Saved| B1[Independent Accreditation & Discipline]
    C -->|PLUPA Autonomy Saved| C1[Independent Planner Regulation]
    D -->|Direct Regulation| D1[KBERC Architectural & QS Board Committees]

    style A fill:#7c3aed,stroke:#6d28d9,color:#fff
    style B fill:#059669,stroke:#047857,color:#fff
    style D fill:#dc2626,stroke:#b91c1c,color:#fff
      `;
      break;

    case '26':
      title = 'SECTION 26 • 6-TIER QUALIFICATION & REGISTRATION HIERARCHY';
      description = 'Statutory career progression pathways from TVET Craftsman to Specialist Professional.';
      chart = `
graph TD
    A[Applicant Qualification] --> B{Education Level}
    B -->|TVET Certificate| C[Tier 6: Craftsman / Artisan]
    B -->|TVET Diploma| D[Tier 5: Technician]
    B -->|B.Tech Degree| E[Tier 4: Technologist]
    B -->|B.Arch / B.Sc / B.QS| F[Tier 3: Candidate Intern]
    F -->|2-Yr Logbook + PPE| G[Tier 2: Lead Professional]
    G -->|Post-Grad Accreditation| H[Tier 1: Specialist Professional]

    style G fill:#059669,stroke:#047857,color:#fff
    style H fill:#7c3aed,stroke:#6d28d9,color:#fff
      `;
      break;

    case '32':
      title = 'SECTION 32 • STATUTORY JOINT VENTURE GOVERNANCE TREE';
      description = 'Mandatory 51%+ local equity partnership structure for temporary foreign licenses.';
      chart = `
graph TD
    A[Foreign Consultant Application] --> B{Local Joint Venture Test}
    B -->|Equity < 51% Local| C[Application Rejected]
    B -->|Equity ≥ 51% Local| D[Temporary 12-Month License Issued]
    D --> E[Mandatory Local Lead Professional Co-Signer]
    D --> F[Statutory Skills Transfer Logbook Audit]
    F -->|Satisfactory| G[Annual License Renewal Granted]

    style C fill:#dc2626,stroke:#b91c1c,color:#fff
    style D fill:#0284c7,stroke:#0369a1,color:#fff
    style G fill:#16a34a,stroke:#15803d,color:#fff
      `;
      break;

    case '42':
    case '43':
      title = 'SECTION 42/43 • DISCIPLINE BOARD (ARB/QRB/ERB) 3-STAGE VETTING WORKFLOW';
      description = 'Statutory 3-stage peer registration workflow for ARB, QRB, ERB, CPMRB, and allied boards.';
      chart = `
graph TD
    A[Applicant Portal Submission] --> B[Registrar Pre-Verification: Degrees & IDs]
    B -->|Verified Authenticity| C[Forward to Relevant Discipline Board]
    
    C --> C1[Architects Board - ARB]
    C --> C2[Quantity Surveyors Board - QRB]
    C --> C3[Engineers Board - ERB / EBK]
    C --> C4[Project Managers Board - CPMRB]

    C1 --> D{Peer Logbook & Exam Review}
    C2 --> D
    C3 --> D
    C4 --> D

    D -->|Approved| E[National Register Enrollment + Digital QR Seal Issued]
    D -->|Rejected| F[Written Statutory Reasons Issued within 14 Days]
    F --> G[Appeal to BEAT Tribunal - Sec 141]

    style E fill:#16a34a,stroke:#15803d,color:#fff
    style F fill:#dc2626,stroke:#b91c1c,color:#fff
      `;
      break;

    case '57':
      title = 'SECTION 57 • CRYPTOGRAPHIC DIGITAL QR SEAL VERIFICATION PIPELINE';
      description = 'Machine-readable plan approval verification and PII verification pipeline.';
      chart = `
graph TD
    A[Drawing / Document Submitted] --> B[Digital QR Seal Scanned]
    B --> C{KBERC Live API Check}
    C -->|License Expired / Suspended| D[Permit Automatically Rejected]
    C -->|Active License| E{Section 58 PII Cover Verified?}
    E -->|No Valid PII| D
    E -->|Valid PII Cover| F[County e-DAMS Clearance Approved]

    style D fill:#dc2626,stroke:#b91c1c,color:#fff
    style F fill:#16a34a,stroke:#15803d,color:#fff
      `;
      break;

    case '89':
      title = 'SECTION 89 • BUILDING RISK CLASSIFICATION & PEER REVIEW DECISION TREE';
      description = 'Statutory consequence class matrix (Classes A–D) determining peer review mandates.';
      chart = `
graph TD
    A[Project Parameters] --> B{Building Height & Basement Depth?}
    B -->|≤ 2 Stories / No Basement| C[Class A: Low Risk]
    B -->|3–4 Stories / 1 Basement| D[Class B: Medium Risk]
    B -->|≥ 5 Stories OR ≥ 2 Basements| E[Class C/D: High Consequence]

    C --> F[Designed by Technologist or Lead Professional]
    D --> G[Designed & Signed off by Registered Lead Professional]
    E --> H[Lead Sign-Off + MANDATORY Independent 3rd-Party Peer Review by Specialist Engineer]

    style H fill:#dc2626,stroke:#b91c1c,color:#fff
    style G fill:#0284c7,stroke:#0369a1,color:#fff
      `;
      break;

    case '117':
      title = 'SECTION 117 • DISCIPLINARY MISCONDUCT ESCALATION TREE';
      description = 'Statutory investigation and sanction procedure for professional misconduct.';
      chart = `
graph TD
    A[Public / County Complaint] --> B[KBERC Preliminary Investigation]
    B -->|Prima Facie Case| C[Disciplinary Committee Hearing]
    C -->|Misconduct Proven| D{Sanction Severity?}
    D -->|Minor Violation| E[Formal Reprimand & Fine]
    D -->|Gross Misconduct / Collapse| F[License Revocation + Section 150 Penalty]
    F --> G[Built Environment Appeals Tribunal - BEAT]

    style F fill:#dc2626,stroke:#b91c1c,color:#fff
      `;
      break;

    case '125':
      title = 'SECTION 125 • DISCIPLINARY HEARING PANEL & PEER REPRESENTATION PROVISO';
      description = 'Mandatory same-discipline peer inclusion on every disciplinary hearing panel under Article 47.';
      chart = `
graph TD
    A[Investigation Committee Prima Facie Finding] --> B[Disciplinary Committee Hearing Panel Convened]
    B --> C[Advocate of High Court: Legal Chair]
    B --> D[Senior Profession Peers]
    B --> E[MANDATORY SAME-DISCIPLINE PEER PROVISO]

    E -->|Accused is Architect| E1[Senior Architect Panelist]
    E -->|Accused is Structural Eng| E2[Senior Structural Engineer Panelist]
    E -->|Accused is Interior Designer| E3[Senior Interior Designer Panelist]
    E -->|Accused is Technologist| E4[Senior TVET Technologist Panelist]

    D --> F{Fair Hearing & Evidence Review}
    E1 --> F
    E2 --> F
    E3 --> F
    E4 --> F

    F -->|Decision within 30 Days| G[Binding Sanction or Exoneration]

    style E fill:#7c3aed,stroke:#6d28d9,color:#fff
    style G fill:#0284c7,stroke:#0369a1,color:#fff
      `;
      break;

    case '141':
      title = 'SECTION 141 • BEAT TRIBUNAL 60-DAY APPELLATE TREE';
      description = 'Expedited 60-day judicial arbitration tree replacing High Court delays.';
      chart = `
graph TD
    A[Aggrieved Decision by Council/Board] --> B[File Notice of Appeal within 14 Days]
    B --> C{Apply for Interim Stay?}
    C -->|Yes| D[BEAT Grants Statutory Stay of Execution]
    C -->|No| E[Proceedings Continue]
    D --> F[BEAT Hearing within 30 Days]
    E --> F
    F --> G[Binding Judgment Issued within 60 Days]
    G -->|Point of Law Only| H[Appeal to High Court of Kenya]

    style G fill:#0284c7,stroke:#0369a1,color:#fff
      `;
      break;

    case '188':
      title = 'SECTION 188 • 6-STAGE COUNTY BUILDING INSPECTION MILESTONE TREE';
      description = 'Mandatory County Building Control Desk site inspection hold points.';
      chart = `
graph TD
    A[Development Permit Issued] --> B[Stage 1: Excavation & Setting Out]
    B -->|County Sign-off| C[Stage 2: Foundation & Footings]
    C -->|County Sign-off| D[Stage 3: Suspended Slab & Frame]
    D -->|County Sign-off| E[Stage 4: Roof Envelope & Trusses]
    E -->|County Sign-off| F[Stage 5: M&E Services & Egress]
    F -->|Final Audit| G[Stage 6: Statutory Certificate of Occupancy]

    style G fill:#16a34a,stroke:#15803d,color:#fff
      `;
      break;

    default:
      return null;
  }

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '16px', margin: '16px 0', borderLeft: '4px solid #b91c1c' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h4 style={{ margin: 0, fontWeight: 900, color: '#b91c1c', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          🌴 {title}
        </h4>
        <span style={{ fontSize: '9px', fontWeight: 800, background: '#b91c1c15', color: '#b91c1c', padding: '2px 6px', borderRadius: '2px' }}>
          SECTION-SPECIFIC STATUTORY DIAGRAM
        </span>
      </div>
      <p style={{ margin: '0 0 12px', fontSize: '11px', color: '#64748B', lineHeight: 1.5 }}>
        {description}
      </p>
      <MermaidDiagram chart={chart} />
    </div>
  );
}
