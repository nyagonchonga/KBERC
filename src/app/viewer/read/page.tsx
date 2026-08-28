'use client';

import React, { useState } from 'react';
import { billData, SectionData } from '../data';
import SectionTreeDiagram from '@/components/SectionTreeDiagram';

type UserMode = 'Architect' | 'Lawyer' | 'Sponsor';
type AnalysisTab = 'Overview' | 'Affected' | 'Related' | 'Constitutional' | 'Implementation' | 'Issues' | 'RedTeam';

const MODE_DESCRIPTIONS: Record<UserMode, { label: string; color: string; bg: string }> = {
  Architect: { label: 'Architect / PM View', color: 'text-amber-400', bg: 'bg-amber-950/40 border-amber-800/50' },
  Lawyer:    { label: 'Legal / Counsel View', color: 'text-purple-400', bg: 'bg-purple-950/40 border-purple-800/50' },
  Sponsor:   { label: 'Sponsor / Ministry View', color: 'text-red-400', bg: 'bg-red-950/40 border-red-800/50' },
};

// ─── Schedule Visual Illustrations ───────────────────────────────────────────
// Shared style tokens for all schedule tables
const SCH_WRAP = "my-3 p-3 bg-white border border-slate-300 rounded text-xs font-sans";
const SCH_HEADER = "flex items-center justify-between border-b border-slate-200 pb-2 mb-3";
const SCH_BADGE = "bg-slate-800 text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide";
const SCH_TITLE = "font-bold text-slate-800 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2";
const SCH_TAG = "text-[10px] font-mono text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded border border-slate-200";
const SCH_TABLE = "w-full border-collapse border border-slate-200 text-slate-900 text-[11px]";
const SCH_THEAD_ROW = "bg-slate-100 text-slate-700 border-b border-slate-300 text-left font-bold text-[10px] uppercase tracking-wider";
const SCH_TH = "p-2 border-r border-slate-200 last:border-r-0";
const SCH_TD_KEY = "p-2 font-bold border-r border-slate-200 text-slate-800";
const SCH_TD = "p-2 border-r border-slate-200 last:border-r-0 text-slate-700";
const SCH_TR = "border-b border-slate-100 last:border-b-0";
const SCH_NOTE = "mt-2 p-2 bg-slate-50 text-slate-700 rounded text-[10px] font-mono leading-relaxed border border-slate-200";

function ScheduleVisualIllustration({ schIndex }: { schIndex: number }) {
  // ─── Schedule 1: Council Governance Operational Rules ───────────────────────
  if (schIndex === 0) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 1</span>COUNCIL GOVERNANCE OPERATIONAL RULES (Section 8(3))</div>
          <div className={SCH_TAG}>Council Governance</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Governance Aspect</th>
            <th className={SCH_TH}>Statutory Standard</th>
            <th className={SCH_TH}>Legal Enforcement Proviso</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Meeting Frequency</td><td className={SCH_TD}>At least 4 ordinary meetings per financial year</td><td className={SCH_TD}>Maximum 4 elapsed months allowed between consecutive meetings</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Quorum</td><td className={SCH_TD}>Half (50%) of total Council Members</td><td className={SCH_TD}>All proceedings and resolutions null and void if quorum is absent</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Voting &amp; Decisions</td><td className={SCH_TD}>Simple majority of members present and voting</td><td className={SCH_TD}>Chairperson holds a casting vote in case of vote equality</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Minutes &amp; Audit Trail</td><td className={SCH_TD}>Mandatory record in official Council Minute Book</td><td className={SCH_TD}>Signed by Chairperson at subsequent ordinary meeting</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 2: Tribunal Business & Affairs Rules ───────────────────────────
  if (schIndex === 1) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 2</span>TRIBUNAL BUSINESS &amp; AFFAIRS OPERATIONAL RULES (Section 132(4))</div>
          <div className={SCH_TAG}>Judicial Rules</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Tribunal Procedure</th>
            <th className={SCH_TH}>Statutory Standard</th>
            <th className={SCH_TH}>Procedural Safeguard</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Sittings &amp; Venues</td><td className={SCH_TD}>Appointed by Chairperson (Physical or Virtual Court)</td><td className={SCH_TD}>Notice issued to all parties at least 14 days prior</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Quorum</td><td className={SCH_TD}>3 Members (including Chairperson / Advocate)</td><td className={SCH_TD}>Ensures technical, architectural &amp; legal competence in all awards</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Evidence Formalities</td><td className={SCH_TD}>Not bound by strict Evidence Act technicalities</td><td className={SCH_TD}>Prioritizes natural justice, technical merit &amp; expedited determination</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Subpoena Authority</td><td className={SCH_TD}>Issued under hand of Tribunal Chairperson</td><td className={SCH_TD}>Full statutory force of High Court witness summons (Section 137)</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 3: Recognized Professional Categories ─────────────────────────
  if (schIndex === 2) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 3</span>RECOGNIZED BUILT ENVIRONMENT DISCIPLINES (Section 14(1))</div>
          <div className={SCH_TAG}>8 Regulated Disciplines</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>No.</th>
            <th className={SCH_TH}>Designated Discipline</th>
            <th className={SCH_TH}>Scope &amp; Core Technical Mandate</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>1</td><td className={SCH_TD}>Architecture</td><td className={SCH_TD}>Architectural design, master planning &amp; building specifications</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>2</td><td className={SCH_TD}>Engineering</td><td className={SCH_TD}>Civil, structural, mechanical, electrical, geotechnical &amp; environmental engineering</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>3</td><td className={SCH_TD}>Quantity Surveying</td><td className={SCH_TD}>Cost planning, bills of quantities, measurement &amp; financial auditing</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>4</td><td className={SCH_TD}>Physical and Land Use Planning</td><td className={SCH_TD}>Regional, county, and local land use development plans &amp; spatial frameworks</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>5</td><td className={SCH_TD}>Landscape Architecture</td><td className={SCH_TD}>Landscape master planning, environmental design &amp; site ecology specifications</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>6</td><td className={SCH_TD}>Interior Design</td><td className={SCH_TD}>Interior space planning, acoustic specs &amp; fire egress interior layouts</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>7</td><td className={SCH_TD}>Construction Project Management</td><td className={SCH_TD}>Project administration, statutory site safety management &amp; quality control supervision</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>8</td><td className={SCH_TD}>Gazette Designated Professions</td><td className={SCH_TD}>Any additional discipline declared by CS Gazette Notice on Council recommendation</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 4: Project Risk Classification Matrix ──────────────────────────
  if (schIndex === 3) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 4</span>STATUTORY PROJECT RISK CLASSIFICATION MATRIX (Section 89(2))</div>
          <div className={SCH_TAG}>Mandatory Risk Audit</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Risk Category</th>
            <th className={SCH_TH}>Building &amp; Infrastructure Criteria</th>
            <th className={SCH_TH}>Mandatory Professional Staffing &amp; Sign-Off</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>1. Low Risk</td><td className={SCH_TD}>Single-story residential ≤ 200m², boundary walls ≤ 2m, minor internal non-structural alterations.</td><td className={SCH_TD}>Registered Technologist or Candidate Lead permitted under standard scope.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>2. Medium Risk</td><td className={SCH_TD}>Multi-story residential up to 4 floors, commercial buildings ≤ 1,000m², standard warehouses.</td><td className={SCH_TD}>Registered Professional Lead mandatory; site compliance officer oversight.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>3. High Risk</td><td className={SCH_TD}>High-rise &gt; 4 floors, places of public assembly (hospitals, schools, stadiums), dams, bridges, deep excavations, hazardous storage.</td><td className={SCH_TD}>Specialist Lead Professional + Cryptographic Digital Seal sign-off mandatory (Section 91).</td></tr>
          </tbody>
        </table>
        <div className={SCH_NOTE}><span className="font-bold">ℹ️ STATUTORY RULE: </span>Projects in high-risk categories cannot be registered or approved without a verified Cryptographic Digital Seal from a Specialist Lead Professional.</div>
      </div>
    );
  }

  // ─── Schedule 5: Reserved Professional Work Scopes ───────────────────────────
  if (schIndex === 4) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 5</span>STATUTORY RESERVED PROFESSIONAL WORK SCOPES (Section 90(1))</div>
          <div className={SCH_TAG}>Protected Scope</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Discipline</th>
            <th className={SCH_TH}>Statutory Reserved Work Scope</th>
            <th className={SCH_TH}>Technologist Supervision Rule</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>1. Architecture</td><td className={SCH_TD}>Architectural designs, master plans &amp; technical specifications for Medium &amp; High-Risk projects.</td><td className={SCH_TD}>Technologists may design Low/Medium risk independently; High-risk requires Lead Professional supervision.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>2. Engineering</td><td className={SCH_TD}>Engineering designs, structural calculations, infrastructure plans &amp; technical specifications for Medium &amp; High-Risk projects.</td><td className={SCH_TD}>Technologists work independently on Low risk; Medium/High-risk requires Professional supervision.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>3. Quantity Surveying</td><td className={SCH_TD}>Bills of Quantities, cost estimates, financial statements &amp; tender documents for Medium &amp; High-Risk public and private projects.</td><td className={SCH_TD}>Technologists prepare estimates for Low/Medium risk; High-risk requires Lead QS supervision.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>4. Physical &amp; Land Use Planning</td><td className={SCH_TD}>Preparation of national, regional, county, and local land use development plans &amp; spatial zoning frameworks.</td><td className={SCH_TD}>Requires certified Lead Planner sign-off.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>5. Landscape Architecture</td><td className={SCH_TD}>Landscape master plans, environmental landscape assessments &amp; public realm designs for Medium &amp; High-Risk projects.</td><td className={SCH_TD}>Technologists undertake Low-risk independently; Medium/High-risk requires Professional supervision.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>6. Interior Design</td><td className={SCH_TD}>Interior space planning, fire egress interior layouts, acoustic designs &amp; material specs for commercial &amp; public assembly buildings.</td><td className={SCH_TD}>Technologists undertake residential/minor commercial independently; Public assembly requires Professional sign-off.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>7. Construction Project Management</td><td className={SCH_TD}>Project administration, statutory site safety management, construction programming &amp; quality audit supervision for High-Risk projects.</td><td className={SCH_TD}>Requires certified Construction Project Manager sign-off for High-Risk developments.</td></tr>
          </tbody>
        </table>
        <div className={SCH_NOTE}><span className="font-bold">ℹ️ LEGAL PROTECTION: </span>Unqualified individuals performing reserved work commit a statutory offence punishable by a fine up to KES 2,000,000 or imprisonment.</div>
      </div>
    );
  }

  // ─── Schedule 6: Statutory Compliance Declaration Form ──────────────────────
  if (schIndex === 5) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 6</span>FORM OF STATUTORY COMPLIANCE DECLARATION (Section 91(4))</div>
          <div className={SCH_TAG}>Legal Affidavit</div>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-[10.5px] space-y-2 text-slate-900 leading-relaxed">
          <p>I, <span className="font-bold">[Name of Professional]</span>, being a registered <span className="font-bold">[Discipline]</span> with Registration No. <span className="font-bold">[Reg. No.]</span>, hereby solemnly declare that:</p>
          <p>1. I was engaged as the principal lead professional for the design and/or supervision of the project known as <span className="font-bold">[Project Name]</span> located at <span className="font-bold">[LR Number / Location]</span>.</p>
          <p>2. The works have been executed in strict accordance with the approved designs, specifications, and the National Building Code.</p>
          <p>3. To the best of my professional knowledge and belief, the completed structure is structurally sound, safe for its intended use, and complies with all environmental &amp; accessibility standards.</p>
          <div className="pt-2 border-t border-slate-200 flex justify-between items-end text-[9.5px] text-slate-600 font-mono">
            <div>Digital Seal No: <span className="font-bold text-slate-800">KBERC-SEAL-2026-88942-VERIFIED</span></div>
            <div>Date: _______________</div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Schedule 7: Consequential Statutory Amendments ─────────────────────────
  if (schIndex === 6) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 7</span>CONSEQUENTIAL STATUTORY AMENDMENTS (Section 211)</div>
          <div className={SCH_TAG}>Legislative Alignment</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Written Law Amended</th>
            <th className={SCH_TH}>Section Affected</th>
            <th className={SCH_TH}>New Statutory Mandate &amp; Legal Restriction</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Physical &amp; Land Use Planning Act, 2019</td><td className={SCH_TD}>Section 58(3)</td><td className={SCH_TD}>County Planning Directors forbidden from approving any development application that does not bear the verified digital seal of a registered KBERC professional.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>National Construction Authority Act, 2011</td><td className={SCH_TD}>Section 17</td><td className={SCH_TD}>Mandatory coordination between NCA and KBERC on contractor capacity verification, site safety audits &amp; joint enforcement notices.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Environmental Management &amp; Coordination Act, 1999</td><td className={SCH_TD}>Section 58</td><td className={SCH_TD}>NEMA licensing officers required to verify KBERC Digital Seals of Environmental Engineers &amp; EIA Experts prior to issuing EIA Licenses.</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 8: Transition & Savings Provisions Matrix ─────────────────────
  if (schIndex === 7) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 8</span>TRANSITION AND SAVINGS PROVISIONS MATRIX (Section 212)</div>
          <div className={SCH_TAG}>Transition Roadmap</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Legacy Entity / Asset</th>
            <th className={SCH_TH}>Transitional Savings Mandate</th>
            <th className={SCH_TH}>KBERC Statutory Timeline &amp; Status</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Serving Board Members</td><td className={SCH_TD}>Remain in office until new Council &amp; Profession Boards are constituted.</td><td className={SCH_TD}>12-Month Hard Cap to fully constitute new Boards under s.24A.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Assets &amp; Liabilities</td><td className={SCH_TD}>All physical, financial &amp; bank assets of repealed boards automatically transfer.</td><td className={SCH_TD}>Vested in KBERC General Fund under PFM Act rules.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Staff &amp; Employees</td><td className={SCH_TD}>Staff deemed staff of KBERC subject to suitability assessment.</td><td className={SCH_TD}>Placement within new organizational structure without loss of benefits.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Board Elections</td><td className={SCH_TD}>Inaugural democratic electronic elections for all Profession Board Chairs.</td><td className={SCH_TD}>Must be completed within 18 months of commencement.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>County Liaison Desks</td><td className={SCH_TD}>County Professional Liaison Desks established under Section 180A.</td><td className={SCH_TD}>12-Month Phased Transition for API integration.</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 9: Form of Witness Summons & Oath ──────────────────────────────
  if (schIndex === 8) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 9</span>FORM OF WITNESS SUMMONS, SUBPOENA &amp; OATH (Section 122(2) &amp; 137)</div>
          <div className={SCH_TAG}>Subpoena Instrument</div>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-[10.5px] space-y-2 text-slate-900">
          <div className="font-bold text-slate-950">TO: [Name of Witness], of [Address / Institution]</div>
          <p className="leading-relaxed">You are hereby summoned to appear before the Built Environment Disciplinary Board / Appeals Tribunal on <span className="font-bold">[Date]</span> at <span className="font-bold">[Time]</span> to give evidence &amp; produce books, plans, and digital seal audit logs regarding Inquiry No. <span className="font-bold">[Inquiry ID]</span>.</p>
          <div className="p-2 bg-white border border-slate-200 rounded text-[9.5px]">
            OATH: "I do solemnly swear that the evidence I shall give before this Tribunal shall be the truth, the whole truth, and nothing but the truth."
          </div>
          <div className="p-2 bg-slate-100 text-slate-800 rounded text-[9.5px] font-bold flex items-center justify-between">
            <span>STATUTORY WARNING: Failure to attend without reasonable excuse is an offence.</span>
            <span>Penalty: Fine up to KES 500,000 or 12 months imprisonment.</span>
          </div>
        </div>
      </div>
    );
  }

  // ─── Schedule 10: Prescribed Registration Certificates & Licenses ────────────
  if (schIndex === 9) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 10</span>PRESCRIBED REGISTRATION CERTIFICATES &amp; LICENSES (Section 50)</div>
          <div className={SCH_TAG}>Registration Forms</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Prescribed Form</th>
            <th className={SCH_TH}>Statutory Purpose &amp; Recipient</th>
            <th className={SCH_TH}>Validity Period &amp; Mandatory Conditions</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>FORM A</td><td className={SCH_TD}>Certificate of Registration as Lead Professional</td><td className={SCH_TD}>Permanent registration subject to maintaining active status &amp; 30 CPD units annually.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>FORM B</td><td className={SCH_TD}>Annual Practicing License</td><td className={SCH_TD}>Valid to December 31 annually; requires active Professional Indemnity Cover &amp; Digital Seal key.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>FORM C</td><td className={SCH_TD}>Foreign Temporary Practicing Permit</td><td className={SCH_TD}>Max 12 months non-renewable per project; mandatory Joint Venture with Kenyan Lead Professional.</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 11: Code of Professional Ethics & Digital Seal Custody ─────────
  if (schIndex === 10) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 11</span>CODE OF PROFESSIONAL ETHICS &amp; DIGITAL SEAL CUSTODY (Section 105)</div>
          <div className={SCH_TAG}>Ethics Charter</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Ethical Rule</th>
            <th className={SCH_TH}>Statutory Standard &amp; Custody Duty</th>
            <th className={SCH_TH}>Enforcement Action &amp; Sanction</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>1. Paramount Safety Duty</td><td className={SCH_TD}>Paramount obligation to structural integrity, environmental resilience &amp; public safety.</td><td className={SCH_TD}>Immediate license revocation on gross negligence.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>2. Seal Lending Prohibition</td><td className={SCH_TD}>Strict prohibition on affixing digital seal to drawings not directly prepared/supervised.</td><td className={SCH_TD}>Criminal offence up to KES 5M fine / 3 yrs imprisonment.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>3. Conflict Disclosure</td><td className={SCH_TD}>Mandatory written disclosure of any financial interest in materials or contracting firms.</td><td className={SCH_TD}>Disciplinary Committee investigation &amp; reprimand.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>4. Mandatory CPD</td><td className={SCH_TD}>Must attain minimum 30 CPD units annually to maintain active practicing certificate.</td><td className={SCH_TD}>Non-renewal of practicing certificate until remedied.</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 12: Baseline Scale of Fees Framework ──────────────────────────
  if (schIndex === 11) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 12</span>BASELINE PROFESSIONAL SCALE OF FEES FRAMEWORK (Section 185)</div>
          <div className={SCH_TAG}>Co-Gazettement Protected</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Regulated Service Discipline</th>
            <th className={SCH_TH}>Standard Scale (% of Cost of Works)</th>
            <th className={SCH_TH}>Time-Based Advisory Rates (Min. Benchmark)</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>1. Architecture &amp; Master Planning</td><td className={SCH_TD}>5.0% to 6.5% of total construction cost</td><td className={SCH_TD}>Specialist: KES 15,000/hr · Lead Professional: KES 10,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>2. Structural &amp; Civil Engineering</td><td className={SCH_TD}>5.0% to 6.5% of total construction cost</td><td className={SCH_TD}>Specialist: KES 15,000/hr · Professional Engineer: KES 10,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>3. Quantity Surveying &amp; Cost Management</td><td className={SCH_TD}>2.5% to 3.5% of total construction cost</td><td className={SCH_TD}>Specialist: KES 15,000/hr · Registered QS: KES 10,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>4. Mechanical, Electrical &amp; Plumbing (MEP)</td><td className={SCH_TD}>2.0% to 3.0% of specialized works cost</td><td className={SCH_TD}>Specialist: KES 15,000/hr · Professional Engineer: KES 10,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>5. Physical &amp; Land Use Planning</td><td className={SCH_TD}>Spatial Masterplanning / Per-Hectare Rate</td><td className={SCH_TD}>Lead Planner: KES 15,000/hr · Registered Planner: KES 10,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>6. Landscape Architecture &amp; Site Ecology</td><td className={SCH_TD}>6.0% to 8.0% of fit-out / landscape cost</td><td className={SCH_TD}>Lead Architect: KES 10,000/hr · Candidate: KES 5,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>7. Interior Design &amp; Environmental Ergonomics</td><td className={SCH_TD}>6.0% to 8.0% of interior fit-out contract</td><td className={SCH_TD}>Lead Designer: KES 10,000/hr · Candidate: KES 5,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>8. Construction Project Management</td><td className={SCH_TD}>2.0% to 3.5% of total project contract value</td><td className={SCH_TD}>Lead CPM: KES 15,000/hr · Registered CPM: KES 10,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>9. Registered Technologists &amp; Technicians</td><td className={SCH_TD}>70% to 85% of Lead Professional Scale</td><td className={SCH_TD}>Technologist: KES 7,500/hr · Technician: KES 5,000/hr</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>10. Candidate Practitioners &amp; Students</td><td className={SCH_TD}>Supervised Practical Experience Scale</td><td className={SCH_TD}>Candidate Practitioner: KES 5,000/hr · Student: Minimum Wage</td></tr>
          </tbody>
        </table>
        <div className={SCH_NOTE}><span className="font-bold">ℹ️ MANDATE: </span>Section 185 Statutory Requirement: Scales of fees shall be gazetted by the Cabinet Secretary only after mandatory joint consultation with relevant Profession-Specific Boards.</div>
      </div>
    );
  }

  // ─── Schedule 13: Profession-Specific Boards Conduct of Business ─────────────
  if (schIndex === 12) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 13</span>CONDUCT OF BUSINESS OF PROFESSION-SPECIFIC BOARDS (Section 24A)</div>
          <div className={SCH_TAG}>Governance Protocol</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>Governance Pillar</th>
            <th className={SCH_TH}>Statutory Operational Rule</th>
            <th className={SCH_TH}>Enforcement &amp; Transparency Mandate</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>1. Meetings &amp; Quorum</td><td className={SCH_TD}>Min 4 meetings/yr; quorum is &gt;50% of total board membership.</td><td className={SCH_TD}>Adjourned within 14 days if quorum fails within 30 minutes.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>2. Conflict Disclosures</td><td className={SCH_TD}>Mandatory disclosure &amp; withdrawal on any agenda item with interest.</td><td className={SCH_TD}>Recused member excluded from quorum calculation.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>3. Electronic Elections</td><td className={SCH_TD}>Chairperson elected by secret ballot via KBERC portal by registered members.</td><td className={SCH_TD}>3-Year Term, renewable once. Registrar acts as Returning Officer.</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>4. Annual General Meeting</td><td className={SCH_TD}>Mandatory AGM open to all registered members; min 21 days' notice.</td><td className={SCH_TD}>Annual Report presentation &amp; election nominations under Section 24D.</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Schedule 14: KBERC Inspection Forms & PII Tariffs ───────────────────────
  if (schIndex === 13) {
    return (
      <div className={SCH_WRAP}>
        <div className={SCH_HEADER}>
          <div className={SCH_TITLE}><span className={SCH_BADGE}>SCHEDULE 14</span>MASTER SCHEDULE OF STATUTORY KBERC INSPECTION FORMS &amp; PII TARIFFS (Section 106–115)</div>
          <div className={SCH_TAG}>Statutory Enforceable Forms</div>
        </div>
        <table className={SCH_TABLE}>
          <thead><tr className={SCH_THEAD_ROW}>
            <th className={SCH_TH}>KBERC Form</th>
            <th className={SCH_TH}>Statutory Stage Description</th>
            <th className={SCH_TH}>Section Citation</th>
            <th className={SCH_TH}>Mandatory Sign-Off Lead</th>
          </tr></thead>
          <tbody>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-1</td><td className={SCH_TD}>Geotechnical Core Soil Survey &amp; Sub-grade Clearance</td><td className={SCH_TD}>Section 106</td><td className={SCH_TD}>Geotechnical Specialist Engineer</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-1A</td><td className={SCH_TD}>Substructure Piling &amp; Retaining Wall Sign-Off</td><td className={SCH_TD}>Section 107(2)</td><td className={SCH_TD}>Structural Specialist (Sec 36) &amp; CPM</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-2</td><td className={SCH_TD}>Ground Slab Damp-Proofing &amp; Tanking Sign-Off</td><td className={SCH_TD}>Section 108</td><td className={SCH_TD}>Lead Architect &amp; Civil Engineer</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-3</td><td className={SCH_TD}>Superstructure RC Frame &amp; Shear Core Sign-Off</td><td className={SCH_TD}>Section 109</td><td className={SCH_TD}>Structural Engineer, Architect &amp; QS</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-3A</td><td className={SCH_TD}>Steel Trusses &amp; Post-Tensioned Cable Audit</td><td className={SCH_TD}>Section 109(3)</td><td className={SCH_TD}>Structural Specialist &amp; Technologist</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-4</td><td className={SCH_TD}>Building Envelope, Facade Glazing &amp; Roof Deck Certificate</td><td className={SCH_TD}>Section 110</td><td className={SCH_TD}>Lead Architect &amp; Facade Specialist</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-5</td><td className={SCH_TD}>MEP Riser Shafts, Electrical &amp; Plumbing Certificate</td><td className={SCH_TD}>Section 111</td><td className={SCH_TD}>Electrical &amp; Mechanical Engineers</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-5A</td><td className={SCH_TD}>Fire Safety, Active Suppression &amp; Life Safety Certificate</td><td className={SCH_TD}>Section 112</td><td className={SCH_TD}>Fire Safety Engineer &amp; Interior Designer</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-5B</td><td className={SCH_TD}>PWD Accessibility &amp; Elevator Clearance</td><td className={SCH_TD}>Section 113</td><td className={SCH_TD}>Lead Architect &amp; Accessibility Inspector</td></tr>
            <tr className={SCH_TR}><td className={SCH_TD_KEY}>Form KBERC-6</td><td className={SCH_TD}>Final Statutory Certificate of Occupancy</td><td className={SCH_TD}>Section 114 &amp; 188</td><td className={SCH_TD}>County Desk Officer &amp; Lead Architect</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

function InlineSectionAnalysisPanel({
  sec,
  mode,
  onSectionClick
}: {
  sec: SectionData | null;
  mode: UserMode;
  onSectionClick: (sec: SectionData) => void;
}) {
  const [tab, setTab] = useState<AnalysisTab>('Overview');

  if (!sec) {
    return (
      <div style={{ padding: '32px 16px', textAlign: 'center', color: '#64748B', fontSize: '12px', background: '#F8FAFC' }}>
        Select any section or schedule from the Gazette text to open the Section-by-Section Statutory Analysis Engine.
      </div>
    );
  }

  // Generate robust, authoritative analysis for ANY of the 208 sections if custom data is partial
  const a = {
    what_it_does: sec.analysis?.what_it_does || `Section ${sec.section} ("${sec.title}") enacts binding statutory directives governing built environment practice, licensing, or enforcement within the Act.`,
    why_it_exists: sec.analysis?.why_it_exists || `Enacted to establish transparent statutory standards, eliminate unregulated practice, and enforce public safety accountability under Section ${sec.section}.`,
    plain_english: sec.analysis?.plain_english || `This section legally mandates that all operations regarding "${sec.title}" must strictly adhere to gazetted KBERC guidelines and discipline board regulations.`,
    policy_objective: sec.analysis?.policy_objective || `To harmonize statutory practice standards across Architecture, Engineering, Quantity Surveying, Planning, CPM, and Technology disciplines.`,
    who_is_affected: sec.analysis?.who_is_affected || [
      "Lead Built Environment Professionals (Architects, Engineers, QSs, Planners)",
      "Registered Built Environment Technologists & Technicians",
      "County Building Control Desks & Approving Officers",
      "Property Developers & Client Entities"
    ],
    related_sections: sec.analysis?.related_sections || [
      `Section 2 (Statutory Definitions & Interpretations)`,
      `Section 14 (8 Regulated Built Environment Disciplines)`,
      `Section 57 (Cryptographic Digital QR Seals)`,
      `Section 89 (Building Risk Classification & Peer Review)`
    ],
    constitutional_context: sec.analysis?.constitutional_context || `Grounded in Article 10 (national values & governance accountability), Article 42 (right to a safe environment), Article 43 (accessible housing), and Article 185 (devolved county functions).`,
    implementation: sec.analysis?.implementation || `Enforced through KBERC Annual Practicing Certificates, Cryptographic Digital QR Stamp audits, and 47 County Building Control Desk compliance clearance.`,
    issues: sec.analysis?.potential_issues || [
      "Potential compliance friction during 12-month transitional board migration.",
      "Requires active digital integration across 47 County e-development permit portals."
    ],
    red_team_analysis: sec.analysis?.red_team?.join("; ") || `Red Team Audit: Ensure strict cryptographic verification of Digital QR Stamps under Section ${sec.section} to prevent unauthorized plan sign-offs or seal lending.`
  };

  const modeBadgeColor = mode === 'Architect' ? '#B45309' : mode === 'Lawyer' ? '#6B21A8' : '#b91c1c';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAFC', color: '#0F172A', fontSize: '12px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid #CBD5E1', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontFamily: 'monospace', color: '#b91c1c', fontWeight: 900, fontSize: '13px' }}>
            SECTION {sec.section}
          </span>
          <span style={{ fontSize: '10px', fontWeight: 800, color: modeBadgeColor, background: `${modeBadgeColor}15`, padding: '3px 8px', border: `1px solid ${modeBadgeColor}40`, textTransform: 'uppercase' }}>
            {mode} Mode
          </span>
        </div>
        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', lineHeight: 1.3, margin: '2px 0 4px' }}>
          {sec.title}
        </div>
        <div style={{ fontSize: '10px', color: '#64748B', fontFamily: 'monospace' }}>
          STATUTORY ANALYSIS ENGINE
        </div>
      </div>

      {/* 7 Tab Navigation */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '8px 12px', background: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
        {(['Overview', 'Affected', 'Related', 'Constitutional', 'Implementation', 'Issues', 'RedTeam'] as AnalysisTab[]).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '5px 9px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em',
              background: tab === t ? '#b91c1c' : 'transparent',
              color: tab === t ? '#FFF' : '#475569',
              border: tab === t ? 'none' : '1px solid #CBD5E1',
              cursor: 'pointer', transition: 'all 0.15s'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        
        {/* OVERVIEW TAB */}
        {tab === 'Overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: '#FFFFFF', padding: '12px 14px', border: '1px solid #CBD5E1', borderLeft: '4px solid #b91c1c' }}>
              <h4 style={{ fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: '0 0 4px' }}>
                📋 WHAT IT DOES (Statutory Scope)
              </h4>
              <p style={{ margin: 0, color: '#0F172A', lineHeight: 1.6, fontSize: '12px' }}>{a.what_it_does}</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '12px 14px', border: '1px solid #CBD5E1', borderLeft: '4px solid #B45309' }}>
              <h4 style={{ fontWeight: 900, color: '#B45309', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: '0 0 4px' }}>
                🎯 WHY IT EXISTS (Legislative Intent)
              </h4>
              <p style={{ margin: 0, color: '#1E293B', lineHeight: 1.6, fontSize: '12px' }}>{a.why_it_exists}</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '12px 14px', border: '1px solid #CBD5E1', borderLeft: '4px solid #1D4ED8' }}>
              <h4 style={{ fontWeight: 900, color: '#1D4ED8', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: '0 0 4px' }}>
                💡 PLAIN ENGLISH EXPLANATION
              </h4>
              <p style={{ margin: 0, color: '#1E293B', lineHeight: 1.6, fontSize: '12px' }}>{a.plain_english}</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '12px 14px', border: '1px solid #CBD5E1', borderLeft: '4px solid #6B21A8' }}>
              <h4 style={{ fontWeight: 900, color: '#6B21A8', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: '0 0 4px' }}>
                ⚖️ POLICY OBJECTIVE
              </h4>
              <p style={{ margin: 0, color: '#1E293B', lineHeight: 1.6, fontSize: '12px' }}>{a.policy_objective}</p>
            </div>
          </div>
        )}

        {/* AFFECTED TAB */}
        {tab === 'Affected' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontWeight: 900, color: '#b91c1c', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: 0 }}>
              👥 AFFECTED STAKEHOLDERS &amp; COMPLIANCE OBLIGATIONS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {a.who_is_affected.map((item, idx) => (
                <div key={idx} style={{ background: '#FFFFFF', padding: '10px 12px', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: '#b91c1c', fontWeight: 900 }}>•</span>
                  <span style={{ color: '#0F172A', fontSize: '11px', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RELATED TAB */}
        {tab === 'Related' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontWeight: 900, color: '#1D4ED8', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: 0 }}>
              🔗 STATUTORY CROSS-REFERENCES &amp; RELATED ACTS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {a.related_sections.map((rel, idx) => (
                <div key={idx} style={{ background: '#FFFFFF', padding: '10px 12px', border: '1px solid #CBD5E1', color: '#1D4ED8', fontSize: '11px', fontWeight: 700 }}>
                  {rel}
                </div>
              ))}
              <div style={{ background: '#FFFFFF', padding: '10px 12px', border: '1px solid #E2E8F0', color: '#64748B', fontSize: '10px' }}>
                Harmonized against Cap 525 Repeal (Sec 201), National Construction Authority Act, NEMA EMCA 1999, and PFM Act 2012.
              </div>
            </div>
          </div>
        )}

        {/* CONSTITUTIONAL TAB */}
        {tab === 'Constitutional' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontWeight: 900, color: '#6B21A8', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: 0 }}>
              🏛️ CONSTITUTIONAL GROUNDING &amp; DEVOLUTION
            </h4>
            <div style={{ background: '#FFFFFF', padding: '14px', border: '1px solid #CBD5E1', borderLeft: '4px solid #6B21A8', color: '#0F172A', fontSize: '12px', lineHeight: 1.6 }}>
              {a.constitutional_context}
            </div>
          </div>
        )}

        {/* IMPLEMENTATION TAB */}
        {tab === 'Implementation' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontWeight: 900, color: '#B45309', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: 0 }}>
              ⚙️ STATUTORY ENACTMENT &amp; ENFORCEMENT PIPELINE
            </h4>
            <div style={{ background: '#FFFFFF', padding: '14px', border: '1px solid #CBD5E1', borderLeft: '4px solid #B45309', color: '#0F172A', fontSize: '12px', lineHeight: 1.6 }}>
              {a.implementation}
            </div>
          </div>
        )}

        {/* ISSUES TAB */}
        {tab === 'Issues' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontWeight: 900, color: '#B91C1C', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: 0 }}>
              ⚠️ POTENTIAL FRICTION POINTS &amp; RISK MITIGATIONS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {a.issues.map((iss, idx) => (
                <div key={idx} style={{ background: '#FFFFFF', padding: '10px 12px', border: '1px solid #FCA5A5', borderLeft: '4px solid #B91C1C', color: '#991B1B', fontSize: '11px', lineHeight: 1.5 }}>
                  <strong>Friction {idx + 1}:</strong> {iss}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REDTEAM TAB */}
        {tab === 'RedTeam' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontWeight: 900, color: '#B91C1C', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em', margin: 0 }}>
              🛡️ RED TEAM ADVERSARIAL AUDIT &amp; VULNERABILITY PATCH
            </h4>
            <div style={{ background: '#FFFFFF', padding: '14px', border: '1px solid #FCA5A5', borderLeft: '4px solid #B91C1C', color: '#0F172A', fontSize: '12px', lineHeight: 1.6 }}>
              {a.red_team_analysis}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Main Viewer Component ───────────────────────────────────────────────────

const PART_ICONS: Record<string, string> = {
  "PART I": "📋",
  "PART II": "🏛️",
  "PART III": "👥",
  "PART IV": "🎖️",
  "PART V": "🛡️",
  "PART VI": "💼",
  "PART VII": "📚",
  "PART VIII": "☂️",
  "PART IX": "⚖️",
  "PART X": "📄",
  "PART XI": "🔍",
  "PART XII": "💰",
  "PART XIII": "⚙️",
  "PART XIV": "⚠️",
  "PART XV": "✅",
  "PART XVI": "🔗",
  "PART XVII": "🕐",
  "PART XVIII": "📦",
  "PART XIX": "🗑️",
  "PART XX": "🔄",
};

const SCHEDULE_ICONS = ["📊", "⚖️", "🎓", "⚠️", "🔒", "📜", "📜", "🔄", "📜", "📑", "🛡️", "💰", "🏛️"];

export default function ReadViewer() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isNavOpen, setIsNavOpen]               = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen]     = useState(false);
  const [activeMode, setActiveMode]             = useState<UserMode>('Architect');
  const [selectedSection, setSelectedSection]   = useState<SectionData | null>(billData.structure[0].sections[0]);
  const [activeSchedule, setActiveSchedule]     = useState<any>(null);
  const [searchQuery, setSearchQuery]           = useState('');
  const [expandedParts, setExpandedParts]       = useState<string[]>([]);
  const [isExportingPdf, setIsExportingPdf]     = useState(false);

  const handleExportPdf = async () => {
    try {
      setIsExportingPdf(true);
      const html2canvasProModule = await import('html2canvas-pro');
      const html2canvasPro = html2canvasProModule.default || html2canvasProModule;
      const { jsPDF } = await import('jspdf');

      const container = document.getElementById('a4-reader-pages-container');
      if (!container) {
        setIsExportingPdf(false);
        return;
      }

      const pageElements = container.querySelectorAll('.a4-page');
      if (!pageElements || pageElements.length === 0) {
        setIsExportingPdf(false);
        return;
      }

      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

      for (let i = 0; i < pageElements.length; i++) {
        const pageEl = pageElements[i] as HTMLElement;
        const canvas = await html2canvasPro(pageEl, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      }

      pdf.save('The_Built_Environment_Professions_and_Practice_Bill_2026_Unabridged_A4.pdf');
    } catch (err) {
      console.error('PDF Export failed:', err);
    } finally {
      setIsExportingPdf(false);
    }
  };

  const togglePart = (partLabel: string) => {
    const willExpand = !expandedParts.includes(partLabel);
    setExpandedParts(prev =>
      willExpand ? [...prev, partLabel] : prev.filter(p => p !== partLabel)
    );
    if (willExpand) {
      const targetPart = billData.structure.find(p => p.part === partLabel);
      if (targetPart && targetPart.sections.length > 0) {
        const firstSec = targetPart.sections[0];
        setSelectedSection(firstSec);
        setActiveSchedule(null);
        setTimeout(() => {
          document.getElementById(`section-${firstSec.section}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      }
    }
  };

  const selectSection = (sec: SectionData) => {
    setSelectedSection(sec);
    setActiveSchedule(null);
    setIsNavOpen(false);
    const parentPart = billData.structure.find(p => p.sections.some(s => s.section === sec.section));
    if (parentPart && !expandedParts.includes(parentPart.part)) {
      setExpandedParts(prev => [...prev, parentPart.part]);
    }
    setTimeout(() => {
      document.getElementById(`section-${sec.section}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const expandAllParts = () => setExpandedParts(billData.structure.map(p => p.part));
  const collapseAllParts = () => setExpandedParts([]);

  // Build Pagination Blocks
  const blocks: any[] = [];
  blocks.push({ type: 'title_page', id: 'front-matter' });
  blocks.push({ type: 'toc_header', text: 'Arrangement of Clauses' });
  billData.structure.forEach(part => {
    part.sections.forEach((sec, i) => {
      blocks.push({ type: 'toc_part_chunk', data: part, sec, isFirstChunk: i === 0, isLastChunk: i === part.sections.length - 1 });
    });
  });
  blocks.push({ type: 'toc_schedules_header' });
  billData.schedules.forEach((sch, si) => {
    blocks.push({ type: 'toc_schedule_chunk', sch, schIndex: si });
  });

  billData.structure.forEach(part => {
    blocks.push({ type: 'part_header', data: part });
    part.sections.forEach(sec => {
      const paragraphs = sec.bill_text.split('\n').filter(p => p.trim().length > 0);
      paragraphs.forEach((p, i) => {
        blocks.push({ type: 'section_chunk', data: sec, text: p, isFirstChunk: i === 0, isLastChunk: i === paragraphs.length - 1, id: i === 0 ? `section-${sec.section}` : undefined });
      });
    });
  });

  billData.schedules.forEach((schedule, schIndex) => {
    blocks.push({ type: 'schedule_header', data: schedule, schIndex, id: `schedule-${schIndex}` });
    const paragraphs = schedule.content.split('\n').filter(p => p.trim().length > 0);
    paragraphs.forEach((p, i) => {
      blocks.push({ type: 'schedule_chunk', data: schedule, text: p, schIndex, isFirstChunk: i === 0, isLastChunk: i === paragraphs.length - 1 });
    });
    blocks.push({ type: 'schedule_illustration', schIndex });
  });

  const MM_TO_PX = 3.779527559;
  const MAX_HEIGHT_PER_PAGE_MM = 232;
  const MAX_HEIGHT_PER_PAGE = MAX_HEIGHT_PER_PAGE_MM * MM_TO_PX;
  const pages: any[] = [];
  let currentPage: any[] = [];
  let currentHeightScore = 0;
  let currentPagePart = 'Preliminary';

  blocks.forEach(block => {
    let blockHeight = 0;
    if (block.type === 'title_page') blockHeight = MAX_HEIGHT_PER_PAGE;
    else if (block.type === 'toc_header') blockHeight = 55;
    else if (block.type === 'toc_part_chunk') {
      const lines = Math.max(1, Math.ceil(block.sec.title.length / 65));
      blockHeight = (lines * 18) + 4;
      if (block.isFirstChunk) {
        const tl = Math.max(1, Math.ceil((block.data.part + block.data.title).length / 75));
        blockHeight += (tl * 18) + 16;
      }
    }
    else if (block.type === 'toc_schedules_header') blockHeight = 35;
    else if (block.type === 'toc_schedule_chunk') {
      const lines = Math.max(1, Math.ceil(block.sch.title.length / 70));
      blockHeight = (lines * 18) + 4;
    }
    else if (block.type === 'part_header') blockHeight = 88;
    else if (block.type === 'section_chunk') {
      const isSubItem = /^\([a-z0-9]+\)/i.test(block.text.trim());
      const lines = Math.max(1, Math.ceil(block.text.length / 85));
      blockHeight = isSubItem ? (lines * 15) + 2 : (lines * 18) + 4;
      if (block.isFirstChunk) blockHeight += 18;
      if (block.isLastChunk) blockHeight += 12;
      // Page 51 layout tuning: fit Section 139A(5) cleanly onto Page 51
      if (block.data?.section === '139A' && block.text.trim().startsWith('(5)')) blockHeight = 20;
      // Page 57 layout tuning: fit Section 175 back onto Page 57
      if (block.data?.section === '175') blockHeight = 20;
      // Page 62 layout tuning: fit Section 199 back onto Page 62
      if (block.data?.section === '199') blockHeight = 20;
      // Page 23 layout tuning: fit Section 50(2) cleanly back onto Page 23
      if (block.data?.section === '50' && block.text.trim().startsWith('(2)')) blockHeight = 24;
      // Page 25 layout tuning: fit Section 65(2) & (3) cleanly back onto Page 25
      if (['57', '58', '59', '60', '61', '62', '63', '64', '65'].includes(block.data?.section)) {
        if (isSubItem) blockHeight = Math.min(blockHeight, 20);
        else blockHeight = Math.min(blockHeight, 30);
      }
      // Page 26 layout tuning: fit Sections 75 & 76 cleanly back onto Page 26
      if (['67', '68', '69', '70', '71', '72', '73', '74', '75', '76'].includes(block.data?.section)) {
        if (isSubItem) blockHeight = Math.min(blockHeight, 20);
        else blockHeight = Math.min(blockHeight, 28);
      }
      // Page 36 layout tuning: fit Section 131 cleanly back onto Page 36
      if (['124', '125', '126', '127', '128', '129', '130', '131'].includes(block.data?.section)) {
        if (isSubItem) blockHeight = Math.min(blockHeight, 18);
        else blockHeight = Math.min(blockHeight, 26);
      }
      // Page 48 layout tuning: fit Section 208 onto Page 48
      if (['200', '201', '202', '203', '204', '205', '206', '207'].includes(block.data?.section)) {
        if (isSubItem) blockHeight = Math.min(blockHeight, 20);
        else blockHeight = Math.min(blockHeight, 28);
      }
    }
    else if (block.type === 'schedule_header') blockHeight = 80;
    else if (block.type === 'schedule_chunk') {
      const lines = Math.max(1, Math.ceil(block.text.length / 100));
      blockHeight = (lines * 20) + 8;
    }
    else if (block.type === 'schedule_illustration') {
      if (block.schIndex === 4) blockHeight = 400;
      else if (block.schIndex === 3) blockHeight = 300;
      else if (block.schIndex === 11) blockHeight = 520;
      else blockHeight = 240;
    }

    // Targeted Page Overrides:
    // 1. Force Section 3(f) to start at top of Page 14
    // 2. Force Section 10 to start on Page 15
    // 3. Force Section 23A(3) to start at top of Page 19
    const isSec3Start = block.type === 'section_chunk' && block.data?.section === '3' && block.isFirstChunk;
    const isDisciplinaryCommitteeStart = block.type === 'section_chunk' && block.data?.section === '2' && block.text.trim().includes('"Disciplinary Committee"');
    const isProfessionalIndemnityStart = block.type === 'section_chunk' && block.data?.section === '2' && block.text.trim().includes('"Professional Indemnity Insurance"');
    const isSec10Start = block.type === 'section_chunk' && block.data?.section === '10' && block.isFirstChunk;
    const isSec23A_Sub3Start = block.type === 'section_chunk' && block.data?.section === '23A' && block.text.trim().startsWith('(3)');
    const isSec24A_Sub4Start = block.type === 'section_chunk' && block.data?.section === '24A' && block.text.trim().startsWith('(4)');
    const isSec24B_Sub5Start = block.type === 'section_chunk' && block.data?.section === '24B' && block.text.trim().startsWith('(5)');
    const isSec24D_SubFStart = block.type === 'section_chunk' && block.data?.section === '24D' && block.text.trim().startsWith('(f)');
    const isSec27_SubDStart = block.type === 'section_chunk' && block.data?.section === '27A' && block.text.trim().startsWith('(d) not withhold');
    const isSec29Start = block.type === 'section_chunk' && block.data?.section === '29' && block.isFirstChunk;
    const isSec34A_Sub5Start = block.type === 'section_chunk' && block.data?.section === '34A' && block.text.trim().startsWith('(5)');
    const isSec43Start = block.type === 'section_chunk' && block.data?.section === '43' && block.isFirstChunk;
    const isSec49A_Sub2bStart = block.type === 'section_chunk' && block.data?.section === '49A' && block.text.trim().startsWith('(b) shall not be awarded');
    const isSec53B_Sub2Start = block.type === 'section_chunk' && block.data?.section === '53B' && block.text.trim().startsWith('(2)');
    const isSec55Start = block.type === 'section_chunk' && block.data?.section === '55' && block.isFirstChunk;
    const isSec59Start = block.type === 'section_chunk' && block.data?.section === '59' && block.isFirstChunk;
    const isSec106_SubCStart = block.type === 'section_chunk' && block.data?.section === '106' && block.text.trim().startsWith('(c) use of materials');
    const isSec124Start = block.type === 'section_chunk' && block.data?.section === '124' && block.isFirstChunk;
    const isSec135Start = block.type === 'section_chunk' && block.data?.section === '135' && block.isFirstChunk;
    const isSec160A_Sub4bStart = block.type === 'section_chunk' && block.data?.section === '160A' && block.text.trim().startsWith('(b) provide the mentee');
    const isSec180A_SubDStart = block.type === 'section_chunk' && block.data?.section === '180A' && block.text.trim().startsWith('(d) maintaining a county-level');
    const isSec186AStart = block.type === 'section_chunk' && block.data?.section === '186A' && block.isFirstChunk;
    const isSec188Start = block.type === 'section_chunk' && block.data?.section === '188' && block.isFirstChunk;
    const isSec213Start = block.type === 'section_chunk' && block.data?.section === '213' && block.isFirstChunk;
    
    // TOC Part Grouping Safeguard
    let isTocPartOverflowBreak = false;
    if (block.type === 'toc_part_chunk' && block.isFirstChunk) {
      const totalPartHeight = 26 + (block.data.sections.length * 19);
      if (currentHeightScore + totalPartHeight > MAX_HEIGHT_PER_PAGE && currentHeightScore > 120) {
        isTocPartOverflowBreak = true;
      }
    }

    const isForcedPageBreak = block.type === 'part_header' || block.type === 'schedule_header' || block.type === 'backmatter_header' || block.type === 'toc_header' || block.type === 'toc_schedules' || block.type === 'toc_schedules_header' || isTocPartOverflowBreak || isDisciplinaryCommitteeStart || isProfessionalIndemnityStart || isSec3Start || isSec10Start || isSec23A_Sub3Start || isSec24A_Sub4Start || isSec24B_Sub5Start || isSec24D_SubFStart || isSec27_SubDStart || isSec29Start || isSec34A_Sub5Start || isSec43Start || isSec49A_Sub2bStart || isSec53B_Sub2Start || isSec106_SubCStart || isSec124Start || isSec160A_Sub4bStart || isSec180A_SubDStart || isSec186AStart || isSec188Start || isSec213Start;
    if ((isForcedPageBreak || currentHeightScore + blockHeight > MAX_HEIGHT_PER_PAGE) && currentPage.length > 0) {
      pages.push({ blocks: currentPage, part: currentPagePart });
      currentPage = [];
      currentHeightScore = 0;
    }
    if (block.type === 'part_header') currentPagePart = block.data.part;
    if (block.type === 'schedule_header') currentPagePart = block.data.title.split(/\s*[\u2014\u2013\-\—]\s*/)[0];

    currentPage.push(block);
    currentHeightScore += blockHeight;
  });

  if (currentPage.length > 0) pages.push({ blocks: currentPage, part: currentPagePart });

  // Compute Page Number Lookup Maps for TOC
  const sectionPageMap: Record<string, number> = {};
  const schedulePageMap: Record<number, number> = {};
  pages.forEach((page, pageIndex) => {
    const pageNum = pageIndex + 1;
    page.blocks.forEach((b: any) => {
      if (b.type === 'section_chunk' && b.data?.section && sectionPageMap[b.data.section] === undefined) {
        sectionPageMap[b.data.section] = pageNum;
      }
      if (b.type === 'schedule_header' && b.schIndex !== undefined && schedulePageMap[b.schIndex] === undefined) {
        schedulePageMap[b.schIndex] = pageNum;
      }
    });
  });

  return (
    <div className="flex flex-col h-screen bg-white text-slate-900 font-sans overflow-hidden relative">
      {/* Mobile Drawer Overlay Backdrop */}
      {(isNavOpen || isAnalysisOpen) && (
        <div
          className="fixed inset-0 bg-slate-950/60 z-30 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => { setIsNavOpen(false); setIsAnalysisOpen(false); }}
        />
      )}

      {/* Top Bar */}
      <header className="h-14 bg-slate-100 border-b border-slate-300 flex items-center justify-between px-3 md:px-4 z-20 shrink-0 gap-2">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsNavOpen(!isNavOpen);
              } else {
                setSidebarCollapsed(!sidebarCollapsed);
              }
            }}
            className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-colors"
            title="Toggle Navigation"
          >
            ☰
          </button>
          <div className="flex items-center gap-2">
            <span className="font-mono text-red-400 font-bold text-sm tracking-wide">KBERC</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-xs text-slate-700 font-semibold hidden md:inline">A4 Reader &amp; Legislative Analysis</span>
          </div>
        </div>

        {/* Mobile Header Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-300 text-xs">
            {(['Architect', 'Lawyer', 'Sponsor'] as UserMode[]).map(m => (
              <button
                key={m}
                onClick={() => setActiveMode(m)}
                className={`px-2 sm:px-3 py-1 rounded-md transition-all font-medium text-xs ${
                  activeMode === m ? 'bg-red-600 text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportPdf}
            disabled={isExportingPdf}
            className="px-2.5 sm:px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm cursor-pointer disabled:opacity-50"
            title="Export A4 pages directly to PDF document"
          >
            <span>{isExportingPdf ? '⏳' : '📥'}</span>
            <span className="hidden sm:inline">{isExportingPdf ? 'Generating...' : 'Export PDF'}</span>
          </button>
          <a
            href="/viewer/print"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-medium border border-slate-300 transition-colors items-center gap-1.5"
            title="Open printable view in new tab"
          >
            <span>🖨️</span> Print View
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Navigation Sidebar / Mobile Drawer */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-80 bg-slate-100/95 border-r border-slate-300 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out shrink-0
          lg:static lg:z-auto lg:translate-x-0 ${sidebarCollapsed ? 'lg:w-0' : 'lg:w-80'}
          ${isNavOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-3 border-b border-slate-300 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Navigation</span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <button
                  onClick={expandAllParts}
                  className="text-red-400 hover:text-red-300 font-medium hover:underline"
                >
                  Expand All
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={collapseAllParts}
                  className="text-slate-600 hover:text-slate-700 font-medium hover:underline"
                >
                  Collapse
                </button>
                <button
                  onClick={() => setIsNavOpen(false)}
                  className="lg:hidden ml-2 px-1.5 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search clauses, terms or section numbers..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
            {/* Quick Category Badges */}
            <div className="flex flex-wrap gap-1 pt-1">
              <button
                onClick={() => {
                  setSelectedSection(null);
                  setActiveSchedule(billData.schedules[11]);
                  document.getElementById('schedule-11')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-2 py-0.5 bg-red-950 text-red-300 hover:bg-red-900 border border-red-800/80 rounded text-[9.5px] font-medium transition-colors"
              >
                💰 Fee Scale
              </button>
              <button
                onClick={() => {
                  setSelectedSection(null);
                  setActiveSchedule(billData.schedules[3]);
                  document.getElementById('schedule-3')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-2 py-0.5 bg-amber-950 text-amber-300 hover:bg-amber-900 border border-amber-800/80 rounded text-[9.5px] font-medium transition-colors"
              >
                ⚠️ Risk Matrix
              </button>
              <button
                onClick={() => {
                  const targetSec = billData.structure[3]?.sections?.find(s => s.section === '27A');
                  if (targetSec) selectSection(targetSec);
                }}
                className="px-2 py-0.5 bg-blue-950 text-blue-300 hover:bg-blue-900 border border-blue-800/80 rounded text-[9.5px] font-medium transition-colors"
              >
                🎓 Student Rights
              </button>
              <button
                onClick={() => {
                  const targetSec = billData.structure[16]?.sections?.find(s => s.section === '179');
                  if (targetSec) selectSection(targetSec);
                }}
                className="px-2 py-0.5 bg-purple-950 text-purple-300 hover:bg-purple-900 border border-purple-800/80 rounded text-[9.5px] font-medium transition-colors"
              >
                🛡️ Digital Seals
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1 text-xs">
            <div className="viewer-sidebar-group-label">Parts &amp; Sections</div>
            {billData.structure.map(part => {
              const isExpanded = expandedParts.includes(part.part);
              const icon = PART_ICONS[part.part] || "📄";
              const matchesSearch = !searchQuery || part.title.toLowerCase().includes(searchQuery.toLowerCase()) || part.sections.some(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.section.includes(searchQuery));
              if (!matchesSearch) return null;
              
              return (
                <div key={part.part} className="mb-0.5">
                  <button
                    onClick={() => togglePart(part.part)}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-200/80 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-1">
                      <span className="text-base shrink-0 select-none opacity-90">{icon}</span>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[10px] font-bold text-red-400">{part.part}</span>
                          <span className="text-[9px] text-slate-500">({part.sections.length})</span>
                        </div>
                        <span className="text-[12px] font-semibold text-slate-700 group-hover:text-red-300 transition-colors line-clamp-1">
                          {part.title}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 text-[10px] shrink-0 pl-1">{isExpanded ? '▼' : '▶'}</span>
                  </button>

                  {(isExpanded || searchQuery) && (
                    <div className="pl-6 space-y-0.5 border-l border-slate-300/80 ml-4 py-1">
                      {part.sections.map(sec => {
                        const secMatch = !searchQuery || sec.title.toLowerCase().includes(searchQuery.toLowerCase()) || sec.section.includes(searchQuery);
                        if (!secMatch) return null;
                        const isSelected = selectedSection?.section === sec.section && !activeSchedule;
                        return (
                          <button
                            key={sec.section}
                            onClick={() => selectSection(sec)}
                            className={`w-full text-left px-2 py-1.5 rounded-md transition-colors flex items-start gap-2 text-[11.5px] ${
                              isSelected
                                ? 'bg-red-950/80 text-red-300 font-semibold border border-red-800/60'
                                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-200/40'
                            }`}
                          >
                            <span className="font-mono text-[10px] text-slate-500 shrink-0">{sec.section}.</span>
                            <span className="line-clamp-1 leading-snug">{sec.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="viewer-sidebar-group-label pt-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Schedules</div>
            {billData.schedules.map((schedule, i) => {
              const isSelected = activeSchedule === schedule;
              const schIcon = SCHEDULE_ICONS[i] || "📑";
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedSection(null);
                    setActiveSchedule(schedule);
                    document.getElementById(`schedule-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg transition-colors text-[11.5px] flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-purple-950/80 text-purple-300 font-semibold border border-purple-800/60'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-200/50'
                  }`}
                >
                  <span className="text-sm shrink-0 select-none">{schIcon}</span>
                  <span className="line-clamp-1">{schedule.title}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Center Column: A4 Reader */}
        <main id="a4-reader-pages-container" className="flex-1 bg-white overflow-y-auto border-r border-slate-300 flex flex-col items-center py-10 relative shadow-inner space-y-8">
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="a4-page relative overflow-hidden">
              <div className="a4-watermark-overlay select-none pointer-events-none">
                <span className="a4-watermark-text">DRAFT</span>
              </div>
              <div className="page-header">
                <span>Draft Document</span>
                <span>The Kenya Built Environment Regulatory Council Bill, 2026</span>
              </div>

              <div className="page-content">
                {page.blocks.map((block: any, blockIndex: number) => {
                  if (block.type === 'title_page') {
                    return (
                      <div key={blockIndex} className="a4-frontmatter flex flex-col items-center justify-between h-full pt-1 pb-2 text-center">
                        {/* Top Parliamentary Gazette Header */}
                        <div className="w-full flex flex-col items-center">
                          {/* Kenyan Parliamentary Emblem SVG */}
                          <div className="mb-2 flex items-center justify-center">
                            <svg className="w-16 h-16 text-slate-900 drop-shadow-sm" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="50" cy="50" r="46" stroke="#0f172a" strokeWidth="2" fill="#f8fafc" />
                              <path d="M50 14 L62 38 L90 38 L67 54 L76 82 L50 65 L24 82 L33 54 L10 38 L38 38 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1.5" />
                              <circle cx="50" cy="50" r="15" fill="#1e3a8a" stroke="#ffffff" strokeWidth="2" />
                              <path d="M50 38 L54 46 L62 50 L54 54 L50 62 L46 54 L38 50 L46 46 Z" fill="#fbbf24" />
                            </svg>
                          </div>

                          {/* REPUBLIC OF KENYA */}
                          <div className="text-lg font-black tracking-[0.25em] uppercase text-slate-950 font-serif">
                            REPUBLIC OF KENYA
                          </div>
                          <div className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-amber-800 mt-0.5">
                            PARLIAMENT OF KENYA • CONSOLIDATED CONSENSUS DRAFT
                          </div>

                          {/* Double Rule Divider */}
                          <div className="w-full my-2 border-t-2 border-b border-slate-950 h-1"></div>

                          {/* Gazette Supplement Badge */}
                          <div className="flex items-center justify-center gap-2 my-0.5 flex-wrap">
                            <span className="px-2.5 py-0.5 bg-red-950 text-red-200 text-[9.5px] font-black uppercase tracking-widest rounded shadow-sm">
                              SPECIAL GAZETTE SUPPLEMENT NO. 42
                            </span>
                            <span className="text-[10px] font-extrabold tracking-widest text-slate-900 uppercase">
                              NATIONAL ASSEMBLY BILLS, 2026
                            </span>
                          </div>

                          <div className="text-[9.5px] font-bold tracking-widest text-slate-600 uppercase mt-1">
                            NAIROBI, 2026
                          </div>

                          {/* Single Rule Divider */}
                          <div className="w-3/4 my-2 border-t border-slate-400"></div>

                          {/* Authority Notice */}
                          <div className="text-[8.5px] font-bold tracking-widest uppercase text-slate-600">
                            PRINTED AND PUBLISHED BY THE GOVERNMENT PRINTER, NAIROBI
                          </div>

                          <div className="w-full my-2 border-t-2 border-b border-slate-950 h-1"></div>
                        </div>

                        {/* Official Bill Title Block */}
                        <div className="w-full my-auto px-4 py-4 bg-slate-50/90 rounded-xl border border-slate-300 shadow-sm flex flex-col items-center">
                          <div className="inline-block px-3 py-1 bg-red-950 text-red-100 font-mono text-xs font-black tracking-wider uppercase rounded-md mb-3 shadow-sm">
                            {billData.metadata.bill_no}
                          </div>

                          <h1 className="text-lg font-black leading-snug tracking-wide uppercase text-slate-950 font-serif max-w-xl text-center">
                            {billData.metadata.title}
                          </h1>
                        </div>

                        {/* Legislative Preamble & Enacting Formula Block */}
                        <div className="w-full flex flex-col items-center mt-auto">
                          <div className="text-[11px] leading-relaxed text-slate-800 text-justify px-3 mb-3 font-serif italic border-l-2 border-red-800 pl-3 bg-red-50/40 py-2 rounded-r-md">
                            {billData.preamble}
                          </div>

                          {/* Enacting Seal Box */}
                          <div className="w-full bg-slate-900 text-white rounded-lg p-2.5 flex items-center justify-between border border-slate-800 shadow-md">
                            <div className="flex items-center gap-2.5">
                              <span className="text-lg">🏛️</span>
                              <div className="flex flex-col text-left">
                                <span className="text-[8.5px] font-bold text-amber-400 uppercase tracking-widest">LEGISLATIVE ENACTING FORMULA</span>
                                <span className="text-[11px] font-black uppercase tracking-wider text-slate-100">
                                  ENACTED BY THE PARLIAMENT OF KENYA, AS FOLLOWS—
                                </span>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[8.5px] font-bold uppercase rounded tracking-wider shrink-0">
                              OFFICIAL BILL
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (block.type === 'toc_header') {
                    return (
                      <div key={blockIndex} className="a4-toc-header">
                        <div className="a4-toc-main-title">{block.text}</div>
                      </div>
                    );
                  }

                  if (block.type === 'toc_part_chunk') {
                    const sec = block.sec;
                    const pageNum = sectionPageMap[sec.section] || '—';
                    return (
                      <div key={blockIndex} className="a4-toc-item cursor-pointer" onClick={() => selectSection(sec)}>
                        {block.isFirstChunk && (
                          <div className="a4-toc-part-title">
                            <span>{block.data.part}</span> — <span>{block.data.title}</span>
                          </div>
                        )}
                        <div className="a4-toc-sec-row">
                          <span className="a4-toc-sec-num">{sec.section}</span>
                          <span className="a4-toc-sec-title">{sec.title}</span>
                          <span className="a4-toc-dots"></span>
                          <span className="a4-toc-page-num">{pageNum}</span>
                        </div>
                      </div>
                    );
                  }

                  if (block.type === 'toc_schedules_header') {
                    return (
                      <div key={blockIndex} className="a4-toc-part-title mt-4">
                        Schedules
                      </div>
                    );
                  }

                  if (block.type === 'toc_schedule_chunk') {
                    const sch = block.sch;
                    const si = block.schIndex;
                    const pageNum = schedulePageMap[si] || '—';
                    return (
                      <div
                        key={blockIndex}
                        className="a4-toc-sec-row cursor-pointer"
                        onClick={() => {
                          setSelectedSection(null);
                          setActiveSchedule(sch);
                          document.getElementById(`schedule-${si}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                      >
                        <span className="a4-toc-sec-title">{sch.title}</span>
                        <span className="a4-toc-dots"></span>
                        <span className="a4-toc-page-num">{pageNum}</span>
                      </div>
                    );
                  }

                  if (block.type === 'part_header') {
                    return (
                      <div key={blockIndex} className="a4-part-header">
                        <div className="a4-part-label">{block.data.part}</div>
                        <div className="a4-part-title">{block.data.title}</div>
                      </div>
                    );
                  }

                  if (block.type === 'section_chunk') {
                    const sec = block.data;
                    const isSelected = selectedSection?.section === sec.section && !activeSchedule;
                    const isSubClause = /^\([a-z0-9]+\)/i.test(block.text.trim());
                    return (
                      <div
                        id={block.id}
                        key={blockIndex}
                        className={`a4-section-block ${isSelected ? 'a4-section-selected' : ''}`}
                        onClick={() => selectSection(sec)}
                      >
                        <div className="a4-section-margin">
                          {block.isFirstChunk && <span className="a4-section-margin-title">{sec.title}</span>}
                        </div>
                        <div className="a4-section-body">
                          {block.isFirstChunk ? (
                            <div className="a4-section-number">{sec.section}.</div>
                          ) : (
                            <div className="a4-section-number-spacer" />
                          )}
                          <p className={`a4-section-text ${isSubClause ? 'a4-subclause-text' : ''}`}>
                            {sec.section === '2' && /^"[^"]+"/.test(block.text.trim()) ? (
                              (() => {
                                const parts = block.text.split(/("([^"]+)")/g);
                                return parts.map((part: string, pIdx: number) => {
                                  if (part.startsWith('"') && part.endsWith('"') && part.length > 2) {
                                    return <strong key={pIdx} className="font-bold text-slate-950">{part}</strong>;
                                  }
                                  if (part === '"' + parts[pIdx - 1] + '"') return null;
                                  return part;
                                });
                              })()
                            ) : (
                              block.text
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  if (block.type === 'schedule_header') {
                    const titleParts = block.data.title.split(/\s*[\u2014\u2013\-\—]\s*/);
                    const schLabel = titleParts[0] || block.data.title;
                    const schName = titleParts.slice(1).join(' — ') || block.data.title;
                    return (
                      <div id={block.id} key={blockIndex} className="a4-schedule-header">
                        <div className="a4-schedule-label">{schLabel}</div>
                        <div className="a4-schedule-title">{schName}</div>
                      </div>
                    );
                  }

                  if (block.type === 'schedule_chunk') {
                    return (
                      <p key={blockIndex} className={`a4-schedule-text ${block.isLastChunk ? 'mb-4' : 'mb-2'}`}>{block.text}</p>
                    );
                  }

                  if (block.type === 'schedule_illustration') {
                    return (
                      <div key={blockIndex} className="a4-schedule-illustration mb-4">
                        <ScheduleVisualIllustration schIndex={block.schIndex} />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              <div className="page-footer">
                <span>{page.part}</span>
                <span>Page {pageIndex + 1} of {pages.length}</span>
              </div>
            </div>
          ))}
        </main>

        {/* Right Analysis Panel / Mobile Drawer */}
        <aside className={`
          fixed inset-y-0 right-0 z-40 w-80 sm:w-96 bg-slate-100 border-l border-slate-300 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out shrink-0
          lg:static lg:w-96 lg:z-auto lg:translate-x-0
          ${isAnalysisOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full lg:translate-x-0'}
        `}>
          {/* Mobile Drawer Close Button Header */}
          <div className="lg:hidden p-2.5 bg-slate-200 border-b border-slate-300 flex items-center justify-between font-bold text-xs text-slate-800 shrink-0">
            <span>STATUTORY ANALYSIS ENGINE</span>
            <button
              onClick={() => setIsAnalysisOpen(false)}
              className="px-2 py-0.5 bg-slate-300 hover:bg-slate-400 rounded text-[11px]"
            >
              ✕ Close
            </button>
          </div>
          <InlineSectionAnalysisPanel
            sec={selectedSection}
            mode={activeMode}
            onSectionClick={(sec) => { selectSection(sec); setIsAnalysisOpen(false); }}
          />
        </aside>
      </div>

      {/* Floating Mobile Action Bar */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-semibold">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-950 rounded-full transition-colors"
        >
          <span>📂</span> Sections
        </button>
        <div className="w-px h-4 bg-slate-700" />
        <button
          onClick={() => setIsAnalysisOpen(!isAnalysisOpen)}
          className="flex items-center gap-1.5 px-3 py-1 bg-red-800 hover:bg-red-700 active:bg-red-950 text-red-100 rounded-full transition-colors"
        >
          <span>📊</span> Analysis Engine
        </button>
      </div>

      {/* CSS Styles */}
      <style jsx global>{`
        /* ─── Harmonized Global Typography & Spacing System ────────────────────── */
        .a4-watermark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          overflow: hidden;
        }
        .a4-watermark-text {
          display: inline-block;
          transform: rotate(-54.7deg);
          transform-origin: 50% 50%;
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 185px;
          font-weight: 900;
          letter-spacing: 0.35em;
          margin-right: -0.35em; /* CANCELS TRAILING LETTER-SPACING FOR OPTICAL CENTERING */
          color: rgba(100, 116, 139, 0.09);
          text-transform: uppercase;
          white-space: nowrap;
          line-height: 1;
          margin-top: 0;
          margin-bottom: 0;
        }
        .a4-page {
          width: 210mm;
          height: 297mm;
          max-height: 297mm;
          box-sizing: border-box;
          padding: 24mm 20mm;
          margin: 0 auto 28px auto;
          background: white;
          box-shadow: 0 12px 28px -5px rgba(0, 0, 0, 0.45);
          position: relative;
          font-family: 'Merriweather', serif;
          line-height: 1.65;
          letter-spacing: 0.01em;
          word-spacing: normal;
          overflow: hidden;
          color: #0f172a;
          flex-shrink: 0;
          -webkit-font-smoothing: antialiased;
        }
        .page-content {
          height: 249mm;
          overflow: hidden;
        }
        .page-header {
          position: absolute;
          top: 12mm;
          left: 20mm;
          right: 20mm;
          border-bottom: 2px solid #cbd5e1;
          padding-bottom: 3mm;
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          text-transform: uppercase;
          color: #64748b;
          font-family: sans-serif;
          letter-spacing: 0.08em;
          font-weight: 700;
          z-index: 10;
        }
        .page-footer {
          position: absolute;
          bottom: 14mm;
          left: 20mm;
          right: 20mm;
          border-top: 1px solid #cbd5e1;
          padding-top: 4mm;
          display: flex;
          justify-content: space-between;
          font-size: 9.5px;
          color: #64748b;
          font-family: sans-serif;
          letter-spacing: 0.04em;
        }

        /* ─── Mobile Screen-Fit Responsive Override ────────────────────────────── */
        @media (max-width: 767px) {
          .a4-page {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            max-height: none !important;
            padding: 16px 12px !important;
            margin: 0 0 16px 0 !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15) !important;
          }
          .page-content {
            height: auto !important;
            overflow: visible !important;
          }
          .page-header {
            position: static !important;
            margin-bottom: 12px !important;
            padding-bottom: 6px !important;
          }
          .page-footer {
            position: static !important;
            margin-top: 16px !important;
            padding-top: 8px !important;
          }
          .a4-watermark-text {
            font-size: 85px !important;
          }
          .a4-section-block {
            flex-direction: column !important;
            gap: 4px !important;
            margin-bottom: 12px !important;
          }
          .a4-section-margin {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            text-align: left !important;
            padding-right: 0 !important;
            margin-bottom: 2px !important;
          }
          .a4-section-margin-title {
            font-size: 10px !important;
            color: #0f172a !important;
            font-weight: 800 !important;
            background: #f1f5f9 !important;
            padding: 2px 6px !important;
            border-radius: 4px !important;
            display: inline-block !important;
            border-left: 2px solid #b91c1c !important;
          }
          .a4-section-body {
            width: 100% !important;
          }
          .a4-section-text {
            font-size: 13px !important;
            line-height: 1.65 !important;
          }
          .a4-subclause-text {
            padding-left: 10px !important;
            text-indent: 0 !important;
          }
          .a4-toc-sec-title {
            max-width: 60% !important;
          }
        }
        
        /* ─── Strict Official Parliamentary Gazette Front Matter ──────────────── */
        .a4-frontmatter { text-align: center; padding-top: 6mm; color: #000000; }
        .a4-fm-official-header { margin-bottom: 16px; }
        .a4-fm-coat { font-family: 'Merriweather', serif; font-size: 15px; font-weight: 900; letter-spacing: 0.25em; text-transform: uppercase; color: #000000; margin-bottom: 6px; }
        .a4-fm-gazette { font-family: sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #000000; margin: 4px 0; }
        .a4-fm-assembly { font-family: sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 0.16em; text-transform: uppercase; color: #000000; margin: 4px 0; }
        .a4-fm-location { font-family: sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #000000; margin: 4px 0; }
        
        .a4-fm-double-rule { height: 3px; border-top: 2px solid #000000; border-bottom: 1px solid #000000; margin: 8px 0; }
        .a4-fm-single-rule { height: 1px; background: #000000; margin: 6px auto; width: 80%; }
        
        .a4-fm-authority-notice { font-family: sans-serif; font-size: 8.5px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #334155; margin-bottom: 16px; }
        .a4-fm-billno { font-family: sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; color: #000000; margin-bottom: 20px; }
        
        .a4-fm-official-title-container { margin-bottom: 24px; padding: 0 4mm; }
        .a4-fm-title { font-family: 'Merriweather', serif; font-size: 15px; font-weight: 900; line-height: 1.6; letter-spacing: 0.02em; color: #000000; margin: 0; text-transform: uppercase; text-align: center; }
        
        .a4-fm-preamble { font-family: 'Merriweather', serif; font-size: 11.5px; font-style: normal; line-height: 1.8; letter-spacing: 0.01em; color: #000000; text-align: justify; padding: 0 4mm; margin-bottom: 26px; text-indent: 12mm; }
        
        .a4-fm-enacting { font-family: 'Merriweather', serif; font-size: 12px; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; color: #000000; text-align: left; padding-left: 4mm; margin-bottom: 20px; }
        
        /* ─── Harmonized Table of Contents (TOC) with Right-Aligned Page Numbers ─── */
        .a4-toc-header { text-align: center; margin-bottom: 16px; border-bottom: 2px solid #0f172a; padding-bottom: 8px; }
        .a4-toc-main-title { font-family: sans-serif; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.14em; color: #0f172a; }
        .a4-toc-item { margin-bottom: 4px; }
        .a4-toc-part-title { font-family: sans-serif; font-size: 11px; font-weight: 900; text-transform: uppercase; color: #b91c1c; margin-top: 14px; margin-bottom: 4px; letter-spacing: 0.04em; }
        .a4-toc-sec-row { display: flex; align-items: baseline; font-size: 11.5px; line-height: 1.5; color: #1e293b; margin-bottom: 2px; text-align: left; transition: color 0.15s; }
        .a4-toc-sec-row:hover { color: #b91c1c; }
        .a4-toc-sec-num { font-family: sans-serif; font-weight: 800; min-width: 44px; width: 44px; flex-shrink: 0; color: #0f172a; }
        .a4-toc-sec-title { font-weight: 500; padding-right: 4px; max-width: 78%; }
        .a4-toc-dots { flex: 1; border-bottom: 1px dotted #94a3b8; margin: 0 6px 3px 6px; min-width: 12px; }
        .a4-toc-page-num { font-family: sans-serif; font-weight: 800; font-size: 11px; color: #b91c1c; text-align: right; min-width: 24px; flex-shrink: 0; }
        
        /* ─── Harmonized Part & Section Headings ─────────────────────────────── */
        .a4-part-header { text-align: center; margin: 20px 0 14px; border-top: 2px solid #0f172a; border-bottom: 1px solid #0f172a; padding: 10px 0; }
        .a4-part-label { font-family: sans-serif; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.18em; color: #b91c1c; }
        .a4-part-title { font-family: 'Merriweather', serif; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.02em; color: #0f172a; margin-top: 4px; }
        
        /* ─── Harmonized Section Grid & Clause Spacing ───────────────────────── */
        .a4-section-block { display: flex; align-items: flex-start; margin-bottom: 10px; border-radius: 4px; padding: 2px 0; transition: background 0.15s; cursor: pointer; width: 100%; box-sizing: border-box; }
        .a4-section-selected { background: #f0fdf4; border-left: 3px solid #ef4444; }
        .a4-section-margin { width: 28mm; min-width: 28mm; max-width: 28mm; padding-right: 5mm; flex-shrink: 0; text-align: right; box-sizing: border-box; }
        .a4-section-margin-title { font-family: sans-serif; font-size: 8.5px; font-weight: 700; color: #475569; line-height: 1.3; letter-spacing: 0.01em; word-spacing: normal; display: block; word-break: break-word; font-style: italic; }
        .a4-section-body { flex: 1; min-width: 0; display: flex; align-items: flex-start; gap: 6px; font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; color: #1e293b; text-align: left; }
        .a4-section-number { font-family: sans-serif; font-weight: 900; font-size: 12.5px; min-width: 26px; max-width: 26px; flex-shrink: 0; color: #0f172a; }
        .a4-section-number-spacer { min-width: 26px; max-width: 26px; flex-shrink: 0; }
        .a4-section-text { flex: 1; min-width: 0; margin: 0; font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; text-align: left; word-break: break-word; }
        .a4-subclause-text { padding-left: 16px; text-indent: -16px; font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; text-align: left; margin-bottom: 4px; }
        
        /* ─── Harmonized Schedule Spacing ─────────────────────────────────────── */
        .a4-schedule-header { text-align: center; margin: 20px 0 12px; border-top: 2px solid #cbd5e1; padding-top: 14px; }
        .a4-schedule-label { font-family: sans-serif; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; color: #dc2626; margin-bottom: 4px; }
        .a4-schedule-title { font-family: 'Merriweather', serif; font-size: 13px; font-weight: 900; letter-spacing: 0.01em; color: #0f172a; }
        .a4-schedule-text { font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; color: #334155; text-align: left; margin-bottom: 6px; }
        
        .viewer-sidebar-group-label { font-family: sans-serif; font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: #64748b; padding: 10px 12px 4px; }
        
        @media print {
          header, aside, nav, button, a {
            display: none !important;
          }
          body, main {
            background: white !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
          }
          .a4-page {
            width: 210mm !important;
            height: 297mm !important;
            page-break-after: always !important;
            break-after: page !important;
            margin: 0 auto !important;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
