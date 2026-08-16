'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Deepened18StatutoryOrgansMap() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'profession_boards' | 'apex_council' | 'committees' | 'devolved'>('all');
  const [selectedBoardId, setSelectedBoardId] = useState<string>('arb');

  const deepened18Organs = [
    {
      id: "kberc",
      name: "Kenya Built Environment Regulatory Council (KBERC)",
      category: "apex_council",
      categoryTitle: "Apex Statutory Council",
      sections: "Part II (Sec 4-15)",
      status: "Apex Body Corporate",
      color: "#b91c1c",
      desc: "Central statutory body corporate created under Section 4 with perpetual succession and a common seal. Serves as the supreme coordinating council for all built environment professions, maintaining the master digital register, enforcing fee tariffs, and issuing cryptographic digital practice seals.",
      composition: [
        "Independent Chairperson appointed by Cabinet Secretary (15+ Yrs experience)",
        "Representative from Architects Registration Board (ARB)",
        "Representative from Quantity Surveyors Registration Board (QSRB)",
        "Representative from Engineers Board of Kenya (EBK)",
        "Representative from Physical & Urban Planners Board (PPRB)",
        "Representative from National Construction Authority (NCA)",
        "Representative from Council of Governors (Devolved County Desks)",
        "Director General (Chief Executive Officer & Council Secretary)"
      ],
      powers: [
        "Custody and operational oversight of the National Digital Master Register of Practitioners & Firms (Part V)",
        "Statutory enforcement of the First Schedule 10-Tier Mandatory Scale of Professional Fees across all 47 counties",
        "Issuance and revocation of Cryptographic QR Digital Practice Seals for technical drawing certification",
        "Registration and corporate governance of Multidisciplinary Built Environment Consultancies & Firms (Part VII)",
        "Promulgation of risk-based professional competency framework and Eurocode building design guidelines (Part VIII)"
      ],
      interaction: "Acts as the central clearinghouse for all 47 County Executive Desks, enabling real-time QR verification of practitioner licenses before development permission is granted."
    },
    {
      id: "dg_sec",
      name: "Director General & Executive Secretariat",
      category: "apex_council",
      categoryTitle: "Executive Administration",
      sections: "Part II (Sec 12-15)",
      status: "Executive Administrative Organ",
      color: "#dc2626",
      desc: "Chief Executive Officer and administrative secretariat established under Section 12 responsible for day-to-day council operations, digital register infrastructure, and inter-agency enforcement coordination.",
      composition: [
        "Director General (CEO - Appointed by Council through competitive process)",
        "Registrar of Built Environment Professions",
        "Director of Legal & Compliance Services",
        "Director of Information Communication Technology & Digital Seals",
        "Director of Finance & Built Environment Safety Levy"
      ],
      powers: [
        "Manages the operational uptime of the Central Public Digital Verification Portal",
        "Executes all decisions, orders, and licensing directives of the KBERC Council",
        "Collects and manages the Built Environment Safety Levy under Part XVIII",
        "Coordinates joint site inspection tasks with County Chief Architects and NCA Officers"
      ],
      interaction: "Provides API integration to 47 County e-construction portals for automated license validation."
    },
    {
      id: "arb",
      name: "Architects Registration Board (ARB)",
      category: "profession_boards",
      categoryTitle: "Profession-Specific Board",
      sections: "Part III (Sec 20) & Part IV (Sec 25-40)",
      status: "Newly Established (Replaces Cap 525 BORAQS)",
      color: "#EA580C",
      desc: "Independent statutory board created under Section 20 of the Built Environment Bill 2026, replacing the colonial joint BORAQS board. Dedicated exclusively to the regulation, licensing, and professional standards of Architects, Landscape Architects, and Architectural Technologists across Kenya.",
      composition: [
        "Chairperson (Senior Registered Architect with 15+ years experience)",
        "4 Registered Architects nominated by Architectural Association of Kenya (AAK)",
        "1 Dean from an accredited University School of Architecture",
        "1 Representative from Ministry of Public Works (Architecture Department)",
        "Registrar of the Architects Registration Board"
      ],
      powers: [
        "Sets and conducts National Architecture Professional Examinations and Professional Interviews",
        "Accredits university undergraduate and postgraduate architectural degree programs",
        "Issues discipline-specific Architectural Practising Endorsements and CPD units",
        "Recommends qualified Architects for KBERC Master Digital Register inclusion and QR Seal issuance",
        "Establishes architectural design safety standards, building envelope performance codes, and universal accessibility guidelines"
      ],
      interaction: "Transmits verified architectural exam graduates directly to KBERC Master Register for QR seal generation."
    },
    {
      id: "qsrb",
      name: "Quantity Surveyors Registration Board (QSRB)",
      category: "profession_boards",
      categoryTitle: "Profession-Specific Board",
      sections: "Part III (Sec 20) & First Schedule",
      status: "Newly Established (Replaces Cap 525 BORAQS)",
      color: "#CA8A04",
      desc: "Independent statutory board created under Section 20, dedicated exclusively to Quantity Surveyors, Building Economists, Construction Cost Consultants, and Commercial Managers in Kenya.",
      composition: [
        "Chairperson (Senior Registered Quantity Surveyor with 15+ years experience)",
        "4 Registered Quantity Surveyors nominated by Institute of Quantity Surveyors of Kenya (IQSK)",
        "1 Head of Quantity Surveying Department from an accredited Kenyan University",
        "1 Representative from National Treasury / State Department of Public Works",
        "Registrar of the Quantity Surveyors Registration Board"
      ],
      powers: [
        "Conducts Quantity Surveying Professional Examinations and APC (Assessment of Professional Competence)",
        "Audits Bills of Quantities (BQ), elemental cost estimates, and tender documentation standards",
        "Enforces First Schedule 10-Tier Mandatory Minimum Scale of Professional Fees to prevent under-cutting",
        "Recommends Quantity Surveyors for KBERC Master Digital Seal issuance",
        "Penalizes stamp-renting, fee under-cutting, and un-vetted cost certification"
      ],
      interaction: "Directly audits public and private project Bills of Quantities submitted to County Desks to ensure fee scale compliance."
    },
    {
      id: "ebk",
      name: "Engineers Board of Kenya (EBK)",
      category: "profession_boards",
      categoryTitle: "Harmonized Regulator",
      sections: "Part III (Sec 20) & Fourth Schedule",
      status: "Harmonized (Engineers Act 2011)",
      color: "#0284C7",
      desc: "Harmonized statutory engineering regulator governing Structural Engineers, Civil Engineers, Mechanical (HVAC) Engineers, Electrical Engineers, and Geotechnical Engineering Specialists.",
      composition: [
        "Chairperson (Senior Professional Engineer appointed under Engineers Act 2011)",
        "5 Registered Professional Engineers representing Structural, Civil, Mechanical, Electrical, and Agricultural Engineering branches",
        "1 Representative from Deans of Engineering Faculties",
        "Registrar & CEO of Engineers Board of Kenya"
      ],
      powers: [
        "Accredits university engineering degree programs and professional engineering curricula",
        "Enforces Eurocode structural design standards (BS EN 1990 to 1999) under the Fourth Schedule",
        "Conducts Professional Engineering Examinations and peer interviews for Consulting Engineers",
        "Recommends Professional Engineers for KBERC Master Digital Register & Structural Inspection Seals",
        "Performs mandatory structural safety audits on high-consequence building developments (Class C to Class E)"
      ],
      interaction: "Jointly certifies structural calculation reports submitted to County Desks for Class C, D, and E buildings."
    },
    {
      id: "idrb",
      name: "Interior Designers Registration Board (IDRB)",
      category: "profession_boards",
      categoryTitle: "Profession-Specific Board",
      sections: "Part III (Sec 20) & Part IV",
      status: "Newly Established under Bill 2026",
      color: "#DB2777",
      desc: "First statutory board regulating professional Interior Designers, interior spatial architects, and commercial interior fit-out specialists in Kenya.",
      composition: [
        "Chairperson (Senior Registered Interior Designer)",
        "3 Registered Interior Design Professionals",
        "1 Interior Design School Faculty Representative",
        "1 Public Health & Safety Inspector"
      ],
      powers: [
        "Sets Interior Design Competency Standards and professional practice codes",
        "Licenses Interior Fit-out Practitioners for commercial, hospitality, and residential projects",
        "Enforces interior fire safety, acoustics, lighting lux ratios, and non-toxic materials standards",
        "Recommends Interior Designers for KBERC Master Digital Register inclusion"
      ],
      interaction: "Validates interior fit-out plans for public assembly buildings before County Occupation Certificates are signed."
    },
    {
      id: "pmrb",
      name: "Project & Construction Managers Board (PMRB)",
      category: "profession_boards",
      categoryTitle: "Profession-Specific Board",
      sections: "Part III (Sec 20) & Part VIII",
      status: "Newly Established under Bill 2026",
      color: "#7C3AED",
      desc: "Statutory board regulating professional Project Managers, Construction Managers, and multidisciplinary project directors overseeing complex building developments.",
      composition: [
        "Chairperson (Registered Project Manager)",
        "3 Certified Construction Managers",
        "1 Representative from National Construction Authority (NCA)",
        "Registrar of PMRB"
      ],
      powers: [
        "Establishes project management methodology standards and contract administration rules",
        "Audits site construction schedules, quality assurance logs, and safety compliance reports",
        "Licenses professional Project Management consultancies and project directors",
        "Recommends Project Managers for KBERC Master Digital Seal issuance"
      ],
      interaction: "Ensures site project managers submit weekly digital progress logs to County Building Control Desks."
    },
    {
      id: "larb",
      name: "Landscape Architects Registration Board (LARB)",
      category: "profession_boards",
      categoryTitle: "Profession-Specific Board",
      sections: "Part III (Sec 20)",
      status: "Newly Established under Bill 2026",
      color: "#dc2626",
      desc: "Regulates Landscape Architects, environmental spatial designers, and urban green infrastructure specialists.",
      composition: [
        "Chairperson (Senior Landscape Architect)",
        "3 Registered Landscape Professionals",
        "1 Representative from NEMA / Ministry of Environment",
        "Registrar of LARB"
      ],
      powers: [
        "Sets Landscape Design Guidelines and urban forestry canopy cover ratios",
        "Enforces environmental site drainage, soil erosion control, and bio-swale standards",
        "Licenses Landscape Architectural consultancies and urban greening firms",
        "Recommends Landscape Architects for KBERC Master Register"
      ],
      interaction: "Approves landscape master plans and environmental buffer zones for large-scale developments."
    },
    {
      id: "lsgb",
      name: "Land Surveyors & Geomatics Board (LSGB)",
      category: "profession_boards",
      categoryTitle: "Harmonized Regulator",
      sections: "Part III (Sec 20)",
      status: "Harmonized under Bill 2026",
      color: "#0891B2",
      desc: "Governs Land Surveyors, Geomatics Engineers, GIS specialists, and cadastral boundary verification professionals.",
      composition: [
        "Director of Surveys / Nominee",
        "4 Registered Land Surveyors",
        "1 Representative from Institution of Surveyors of Kenya (ISK)",
        "Registrar of LSGB"
      ],
      powers: [
        "Verifies Cadastral Survey Drawings and property boundary beacons",
        "Accredits Geomatics Engineers and GIS spatial Analysts",
        "Ensures GIS Alignment with County Spatial Plans and land registry records",
        "Recommends Land Surveyors for KBERC Register"
      ],
      interaction: "Provides boundary verification data to County Desks to prevent encroachment on road reserves and riparian land."
    },
    {
      id: "pprb",
      name: "Physical & Urban Planners Board (PPRB)",
      category: "profession_boards",
      categoryTitle: "Harmonized Regulator",
      sections: "Part III (Sec 20)",
      status: "Harmonized (PLUPA 2019)",
      color: "#9333EA",
      desc: "Governs Physical Planners, Regional Spatial Planners, and Urban Planning Consultants.",
      composition: [
        "PPRB Chairperson",
        "3 Registered Physical Planners",
        "1 Representative from County Urban Planning Departments",
        "Registrar of PPRB"
      ],
      powers: [
        "Approves County Master Plans, zoning guidelines, and density regulations",
        "Licenses Urban Planning Consultants and spatial planning firms",
        "Ensures compliance with Physical and Land Use Planning Act 2019",
        "Recommends Physical Planners for KBERC Register"
      ],
      interaction: "Sets zoning density caps and change-of-user guidelines enforced by County Executive Desks."
    },
    {
      id: "nca",
      name: "National Construction Authority (NCA)",
      category: "profession_boards",
      categoryTitle: "Contractor Regulator",
      sections: "Part III (Sec 20)",
      status: "Harmonized (NCA Act 2011)",
      color: "#D97706",
      desc: "Accredits construction contractors (NCA 1 to NCA 8), evaluates site safety protocols, and registers accredited site supervisors.",
      composition: [
        "NCA Board Chairperson",
        "Executive Director & CEO",
        "Representatives from Contractor Associations & Ministry of Works",
        "Regional Compliance Officers"
      ],
      powers: [
        "Registers and grades contractors (NCA 1 mega-projects to NCA 8 small works)",
        "Accredits site construction supervisors, foremen, and TVET skilled tradesmen",
        "Inspects construction site safety gear, scaffolding, and structural hoists",
        "Issues Site Registration Certificates required before construction commencement"
      ],
      interaction: "Jointly conducts unannounced site safety inspections with County Building Inspectors."
    },
    {
      id: "tribunal",
      name: "Built Environment Appeals Tribunal",
      category: "committees",
      categoryTitle: "Judicial Appellate Tribunal",
      sections: "Part XIII (Sec 115-140)",
      status: "Independent Judicial Organ",
      color: "#E11D48",
      desc: "Independent legal tribunal hearing appeals against KBERC Council registration rejections, firm licensing disputes, or disciplinary penalties.",
      composition: [
        "Chairperson (Advocate of High Court of Kenya of 10+ Years standing)",
        "2 Senior Registered Architects / Quantity Surveyors",
        "2 Senior Professional Engineers",
        "Registrar of the Tribunal"
      ],
      powers: [
        "Hears and determines appeals against Council decisions within 60 days",
        "Overrules unreasonable registration rejections or licensing suspensions",
        "Summons witnesses, administers oaths, and compels document discovery",
        "Decisions appealable to the High Court of Kenya on matters of law"
      ],
      interaction: "Acts as an independent safety valve protecting practitioners from administrative overreach by the Council."
    },
    {
      id: "disciplinary",
      name: "Professional Conduct & Disciplinary Inquiry Committee",
      category: "committees",
      categoryTitle: "Ethics & Discipline Committee",
      sections: "Part X (Sec 85-110)",
      status: "Statutory Discipline Body",
      color: "#DC2626",
      desc: "Investigates charges of professional misconduct, stamp-renting, fee under-cutting, negligence, and structural safety violations.",
      composition: [
        "Committee Chairperson (Senior Fellow Practitioner)",
        "Representatives from each Discipline Registration Board",
        "Legal Counsel from Attorney General's Office"
      ],
      powers: [
        "Investigates complaints submitted by County Desks, clients, or fellow practitioners",
        "Issues formal reprimands, fines up to KES 5,000,000, or license deregistrations",
        "Recommends criminal prosecution for unaccredited practice or building failure negligence"
      ],
      interaction: "Receives structural failure audit reports directly from the 6-Hour Emergency Collapse Inspection Team."
    },
    {
      id: "tariff",
      name: "Professional Practice & Tariff Board",
      category: "committees",
      categoryTitle: "Fee Scale Regulation",
      sections: "Part XII & First Schedule",
      status: "Statutory Market Regulator",
      color: "#D97706",
      desc: "Reviews and enforces the First Schedule Mandatory Baseline Scale of Professional Fees across public and private procurements.",
      composition: [
        "Chairperson",
        "2 Quantity Surveyors",
        "2 Architects",
        "2 Consulting Engineers",
        "1 Representative from Competition Authority of Kenya (CAK)"
      ],
      powers: [
        "Audits public procurement tenders for professional fee under-cutting",
        "Updates hourly advisory rates and percentage fee bands every 3 years",
        "Investigates predatory pricing complaints by licensed consultancies"
      ],
      interaction: "Coordinates with National Treasury to ensure government project fee allocations comply with statutory scales."
    },
    {
      id: "risk_board",
      name: "Competency & Building Risk Classification Board",
      category: "committees",
      categoryTitle: "Technical Risk Standards",
      sections: "Part VIII (Sec 65-80)",
      status: "Risk Standards Committee",
      color: "#0D9488",
      desc: "Categorizes building developments into Eurocode Risk Classes (Class A to Class E) and sets peer review protocols.",
      composition: [
        "Chairperson (Senior Structural Engineer / Principal Architect)",
        "Eurocode Structural Specialists",
        "Geotechnical Engineers",
        "Fire Safety Engineering Experts"
      ],
      powers: [
        "Sets building height, basement depth, and occupancy risk thresholds",
        "Maintains national register of accredited Independent Peer Review Practitioners",
        "Audits peer review reports for Class D and Class E high-rise projects"
      ],
      interaction: "Mandates that County Desks require Class D/E peer review certificates prior to structural approval."
    },
    {
      id: "cpd_comm",
      name: "Continuing Professional Development (CPD) Committee",
      category: "committees",
      categoryTitle: "Licensing Audit Committee",
      sections: "Part VI (Sec 45-54)",
      status: "Education & Licensing Audit",
      color: "#2563EB",
      desc: "Monitors annual CPD point accumulation (minimum 50 units/year) required for annual practising license renewal.",
      composition: [
        "CPD Director",
        "Academic Program Directors",
        "Professional Society Education Convenors"
      ],
      powers: [
        "Accredits professional seminars, technical workshops, and research publications for CPD units",
        "Audits annual CPD compliance declarations submitted by registered practitioners"
      ],
      interaction: "Feeds verified annual CPD scores to KBERC for digital QR seal activation."
    },
    {
      id: "firm_comm",
      name: "Multidisciplinary Firm Registration Committee",
      category: "committees",
      categoryTitle: "Corporate Licensing Committee",
      sections: "Part VII (Sec 55-64)",
      status: "Corporate Governance Organ",
      color: "#7C3AED",
      desc: "Evaluates and licenses multidisciplinary architectural, engineering, and QS consultancy firms and joint ventures.",
      composition: [
        "Committee Chairperson",
        "Legal Counsel",
        "Corporate Practice Auditors"
      ],
      powers: [
        "Enforces 51% local practitioner voting shareholding requirement for corporate practice",
        "Verifies Professional Indemnity Insurance (PII) cover for registered consultancies"
      ],
      interaction: "Transmits licensed corporate entity lists to County Desks for corporate e-permit submission."
    },
    {
      id: "county_desks",
      name: "47 County Executive Building Control Committees",
      category: "devolved",
      categoryTitle: "Devolved County Authority",
      sections: "Part XVII & Schedule 4",
      status: "Devolved Executive Authority",
      color: "#0284C7",
      desc: "Devolved county building control units operating under Article 185 and Schedule 4 of the Constitution across all 47 counties.",
      composition: [
        "County Chief Architect / County Engineer (Committee Chair)",
        "County Director of Physical Planning",
        "County Public Health Officer",
        "County NEMA Representative"
      ],
      powers: [
        "Processes architectural, structural, and services plan approval applications",
        "Conducts mandatory 6-stage site inspection sign-offs (Forms KBERC-1 to 6)",
        "Issues Certificates of Occupancy and enforces Stop-Work notices on unaccredited sites"
      ],
      interaction: "Integrates with KBERC Central Register to verify practitioner QR seals in real time."
    }
  ];

  const filteredOrgans = activeCategory === 'all'
    ? deepened18Organs
    : deepened18Organs.filter(o => o.category === activeCategory);

  const selectedData = deepened18Organs.find(o => o.id === selectedBoardId) || deepened18Organs[0];

  const selectOrgan = (id: string) => {
    setSelectedBoardId(id);
    const el = document.getElementById("details-bottom-anchor");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        .b-card { padding: 20px; border: 1px solid #CBD5E1; cursor: pointer; transition: all 0.2s; background: #FFFFFF; color: #0F172A; }
        .b-card:hover { transform: translateY(-2px); border-color: #b91c1c; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .tab-btn { padding: 10px 20px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; transition: all 0.15s; border: none; }
        .chart-node { cursor: pointer; transition: all 0.2s ease; user-select: none; }
        .chart-node:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Top Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontSize: "13px", color: "#64748B" }}>
          <Link href="/" style={{ color: "#64748B" }}>Home</Link>
          <span>›</span>
          <Link href="/viewer" style={{ color: "#64748B" }}>Viewer Portal</Link>
          <span>›</span>
          <span style={{ color: "#b91c1c", fontWeight: 700 }}>Interactive Statutory Organ Map &amp; Governance Flowchart</span>
          
          <div style={{ marginLeft: "auto", display: "flex", gap: "12px" }}>
            <Link href="/viewer/interactive" style={{ padding: "8px 16px", background: "#b91c1c", color: "#FFFFFF", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>
              🏛️ Parts Directory
            </Link>
            <Link href="/viewer/read" style={{ padding: "8px 16px", background: "#F1F5F9", border: "1px solid #CBD5E1", color: "#0F172A", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>
              📖 Read Bill
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(4,120,87,0.1)", border: "1px solid rgba(4,120,87,0.25)", padding: "6px 18px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              ALL 18 STATUTORY ORGANS INTEGRATED IN CHART • BILL 2026
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", margin: "0 0 14px 0", lineHeight: 1.15 }}>
            Interactive Statutory Governance Organogram Chart
          </h1>

          <p style={{ fontSize: "16px", color: "#334155", maxWidth: "920px", margin: "0 auto", lineHeight: 1.7 }}>
            Every single one of the <strong>All 18 Statutory Organs</strong> is individually represented as an interactive node inside the chart below! Click on any node to view its <strong>Full Deep-Dive Statutory Profile</strong> at the bottom of the page.
          </p>
        </div>

        {/* SECTION 1: ALL 18 ORGANS INTERACTIVE 4-TIER CHART */}
        <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "5px solid #b91c1c", padding: "32px", marginBottom: "48px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "24px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <div>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.15em", display: "block" }}>
                ALL 18 STATUTORY ORGANS INTEGRATED • CLICK ANY NODE
              </span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: "4px 0 0" }}>
                Interactive 4-Tier Statutory Organogram Flowchart
              </h2>
            </div>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#b91c1c", background: "rgba(4,120,87,0.1)", padding: "6px 14px", border: "1px solid rgba(4,120,87,0.3)" }}>
              Select Node ➔ View Bottom Profile
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* TIER 1: Cabinet Secretary Policy Oversight */}
            <div 
              onClick={() => selectOrgan("kberc")}
              className="chart-node"
              style={{
                background: selectedBoardId === "kberc" ? "#F1F5F9" : "#F8FAFC",
                border: selectedBoardId === "kberc" ? "2px solid #1D4ED8" : "1px solid #CBD5E1",
                padding: "16px 20px", textAlign: "center"
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#1D4ED8", textTransform: "uppercase", letterSpacing: "0.1em" }}>TIER 1 • POLICY OVERSIGHT &amp; GAZETTEMENT</span>
              <h3 style={{ fontSize: "16px", fontWeight: 900, color: "#0F172A", margin: "4px 0 2px" }}>Cabinet Secretary (Ministry of Lands, Public Works &amp; Housing)</h3>
              <span style={{ fontSize: "12px", color: "#64748B" }}>Gazettement of Subsidiary Regulations, Minimum Scale of Fees (Schedule 12) &amp; Apex Appointments</span>
            </div>

            {/* Connecting Arrow */}
            <div style={{ textAlign: "center", color: "#b91c1c", fontWeight: 900, fontSize: "16px", margin: "-12px 0" }}>↓</div>

            {/* TIER 2: Apex Council & Executive Secretariat (2 Organs) */}
            <div>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px", textAlign: "center" }}>
                TIER 2 • APEX COUNCIL &amp; EXECUTIVE SECRETARIAT (ORGANS 1 &amp; 2)
              </span>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                <div 
                  onClick={() => selectOrgan("kberc")}
                  className="chart-node"
                  style={{
                    background: selectedBoardId === "kberc" ? "#fff1f2" : "#FFFFFF",
                    border: selectedBoardId === "kberc" ? "2px solid #b91c1c" : "1px solid #CBD5E1",
                    borderLeft: "5px solid #b91c1c",
                    padding: "16px"
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase" }}>ORGAN 1 • APEX BODY</span>
                  <h4 style={{ fontSize: "15px", fontWeight: 900, color: "#0F172A", margin: "2px 0" }}>Kenya Built Environment Regulatory Council (KBERC)</h4>
                  <span style={{ fontSize: "11px", color: "#475569" }}>Master Digital Register • QR Seals • Fee Tariffs</span>
                </div>

                <div 
                  onClick={() => selectOrgan("dg_sec")}
                  className="chart-node"
                  style={{
                    background: selectedBoardId === "dg_sec" ? "#fff1f2" : "#FFFFFF",
                    border: selectedBoardId === "dg_sec" ? "2px solid #dc2626" : "1px solid #CBD5E1",
                    borderLeft: "5px solid #dc2626",
                    padding: "16px"
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 900, color: "#dc2626", textTransform: "uppercase" }}>ORGAN 2 • EXECUTIVE SECRETARIAT</span>
                  <h4 style={{ fontSize: "15px", fontWeight: 900, color: "#0F172A", margin: "2px 0" }}>Director General &amp; Executive Secretariat</h4>
                  <span style={{ fontSize: "11px", color: "#475569" }}>Digital Verification Portal • Safety Levy API</span>
                </div>
              </div>
            </div>

            {/* Connecting Split Arrow */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", textAlign: "center", color: "#b91c1c", fontWeight: 900, fontSize: "14px", margin: "-12px 0" }}>
              <div>↓ 9 Discipline &amp; Contractor Regulators</div>
              <div>↓ 7 Committees, Tribunals &amp; County Desks</div>
            </div>

            {/* TIER 3: 9 Profession & Contractor Boards (Organs 3 to 11) */}
            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderTop: "4px solid #EA580C", padding: "20px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "12px" }}>
                TIER 3 • 9 REGISTRATION BOARDS &amp; CONTRACTOR REGULATOR (ORGANS 3 TO 11)
              </span>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
                {[
                  { id: "arb", name: "3. Architects Board (ARB)", sec: "Sec 20", color: "#EA580C" },
                  { id: "qsrb", name: "4. Quantity Surveyors Board (QSRB)", sec: "Sec 20", color: "#CA8A04" },
                  { id: "ebk", name: "5. Engineers Board (EBK)", sec: "Sec 20", color: "#0284C7" },
                  { id: "idrb", name: "6. Interior Designers Board (IDRB)", sec: "Sec 20", color: "#DB2777" },
                  { id: "pmrb", name: "7. CPM Board (PMRB)", sec: "Sec 20", color: "#7C3AED" },
                  { id: "larb", name: "8. Landscape Arch Board (LARB)", sec: "Sec 20", color: "#dc2626" },
                  { id: "lsgb", name: "9. Land Surveyors Board (LSGB)", sec: "Sec 20", color: "#0891B2" },
                  { id: "pprb", name: "10. Physical Planners Board (PPRB)", sec: "Sec 20", color: "#9333EA" },
                  { id: "nca", name: "11. National Construction Authority (NCA)", sec: "Sec 20", color: "#D97706" }
                ].map((b) => (
                  <div
                    key={b.id}
                    onClick={() => selectOrgan(b.id)}
                    className="chart-node"
                    style={{
                      background: selectedBoardId === b.id ? "#F1F5F9" : "#FFFFFF",
                      border: selectedBoardId === b.id ? `2px solid ${b.color}` : "1px solid #CBD5E1",
                      borderLeft: `4px solid ${b.color}`,
                      padding: "12px", fontSize: "12px", fontWeight: 800, color: "#0F172A"
                    }}
                  >
                    <div style={{ fontSize: "10px", fontWeight: 900, color: b.color, marginBottom: "2px" }}>{b.sec}</div>
                    {b.name}
                  </div>
                ))}
              </div>
            </div>

            {/* TIER 4: 7 Committees, Judicial Tribunal & Devolved Desks (Organs 12 to 18) */}
            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderTop: "4px solid #6B21A8", padding: "20px" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#6B21A8", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "12px" }}>
                TIER 4 • 7 COMMITTEES, TRIBUNAL &amp; DEVOLVED COUNTY DESKS (ORGANS 12 TO 18)
              </span>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
                {[
                  { id: "tribunal", name: "12. Appeals Tribunal", sec: "Sec 115", type: "Judicial", color: "#E11D48" },
                  { id: "disciplinary", name: "13. Disciplinary Committee", sec: "Sec 85", type: "Ethics", color: "#DC2626" },
                  { id: "tariff", name: "14. Practice & Tariff Board", sec: "Schedule 1", type: "Fee Scale", color: "#D97706" },
                  { id: "risk_board", name: "15. Building Risk Board", sec: "Sec 65", type: "Eurocodes", color: "#0D9488" },
                  { id: "cpd_comm", name: "16. CPD Licensing Audit", sec: "Sec 45", type: "CPD Units", color: "#2563EB" },
                  { id: "firm_comm", name: "17. Multidisciplinary Firm Board", sec: "Sec 55", type: "51% Equity", color: "#7C3AED" },
                  { id: "county_desks", name: "18. 47 County Executive Desks", sec: "Schedule 4", type: "Site Sign-Offs", color: "#0284C7" }
                ].map((o) => (
                  <div
                    key={o.id}
                    onClick={() => selectOrgan(o.id)}
                    className="chart-node"
                    style={{
                      background: selectedBoardId === o.id ? "#F1F5F9" : "#FFFFFF",
                      border: selectedBoardId === o.id ? `2px solid ${o.color}` : "1px solid #CBD5E1",
                      borderLeft: `4px solid ${o.color}`,
                      padding: "12px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontWeight: 900, color: o.color, marginBottom: "2px" }}>
                      <span>{o.sec}</span>
                      <span>{o.type}</span>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A" }}>{o.name}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: CATEGORY FILTER PILLS & 18 CARDS GRID */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                SHOWING {filteredOrgans.length} OF 18 DEEPENED STATUTORY ORGANS
              </span>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: "4px 0 0" }}>
                All 18 Statutory Organ Cards Directory
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { id: "all", label: "All 18 Organs" },
                { id: "profession_boards", label: "Discipline Boards" },
                { id: "apex_council", label: "Apex Council" },
                { id: "committees", label: "Committees & Tribunals" },
                { id: "devolved", label: "Devolved Desks" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className="tab-btn"
                  style={{
                    background: activeCategory === cat.id ? "#b91c1c" : "#F1F5F9",
                    color: activeCategory === cat.id ? "#FFFFFF" : "#0F172A",
                    border: "1px solid #CBD5E1"
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {filteredOrgans.map((b) => (
              <div
                key={b.id}
                onClick={() => selectOrgan(b.id)}
                className="b-card"
                style={{
                  background: selectedBoardId === b.id ? "#F1F5F9" : "#FFFFFF",
                  borderColor: selectedBoardId === b.id ? b.color : "#CBD5E1",
                  borderLeft: `5px solid ${b.color}`
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 900, color: b.color, background: `${b.color}15`, padding: "3px 8px", border: `1px solid ${b.color}30` }}>
                    {b.sections}
                  </span>
                  <span style={{ fontSize: "9px", color: "#475569", textTransform: "uppercase" }}>
                    {b.categoryTitle}
                  </span>
                </div>

                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", margin: "0 0 4px 0" }}>{b.name}</h3>
                <span style={{ fontSize: "11px", color: "#64748B", display: "block" }}>{b.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: FULL-WIDTH SELECTED PROFILE DETAILS PANEL AT THE BOTTOM */}
        <div id="details-bottom-anchor" style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: `6px solid ${selectedData.color}`, padding: "36px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px", borderBottom: "2px solid #CBD5E1", paddingBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 900, color: selectedData.color, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "4px" }}>
                SELECTED STATUTORY ORGAN PROFILE • {selectedData.categoryTitle}
              </span>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#0F172A", margin: 0 }}>{selectedData.name}</h2>
            </div>
            
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: selectedData.color, background: `${selectedData.color}15`, padding: "6px 14px", border: `1px solid ${selectedData.color}30` }}>
                {selectedData.sections}
              </span>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A", background: "#F1F5F9", padding: "6px 14px", border: "1px solid #CBD5E1" }}>
                {selectedData.status}
              </span>
            </div>
          </div>

          <p style={{ fontSize: "15px", color: "#1E293B", lineHeight: 1.8, marginBottom: "32px", maxWidth: "1100px" }}>
            {selectedData.desc}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px", marginBottom: "32px" }}>
            
            {/* Membership Composition */}
            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 900, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px", borderBottom: "1px solid #CBD5E1", paddingBottom: "8px" }}>
                👥 DETAILED MEMBERSHIP &amp; STATUTORY COMPOSITION
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {selectedData.composition.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#1E293B", lineHeight: 1.6 }}>
                    <span style={{ color: selectedData.color, fontWeight: 900 }}>✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Mandate & Powers */}
            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 900, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px", borderBottom: "1px solid #CBD5E1", paddingBottom: "8px" }}>
                ⚡ CORE STATUTORY POWERS &amp; LEGAL DUTIES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {selectedData.powers.map((p, i) => (
                  <div key={i} style={{ background: "#FFFFFF", padding: "12px 14px", border: "1px solid #CBD5E1", fontSize: "13px", color: "#0F172A", lineHeight: 1.6 }}>
                    ⚡ {p}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Inter-agency Interaction */}
          {selectedData.interaction && (
            <div style={{ background: "rgba(4,120,87,0.06)", border: "1px solid rgba(4,120,87,0.25)", borderLeft: "5px solid #b91c1c", padding: "20px 24px", fontSize: "13px", color: "#0F172A", lineHeight: 1.7 }}>
              <strong style={{ display: "block", color: "#b91c1c", fontSize: "14px", marginBottom: "4px" }}>🔗 Inter-Agency &amp; Devolved County Desk Interaction:</strong>
              {selectedData.interaction}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
