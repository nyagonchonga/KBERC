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
