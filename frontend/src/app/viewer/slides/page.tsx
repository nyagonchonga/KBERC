'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isExportingPresentation, setIsExportingPresentation] = useState(false);
  const [exportProgress, setExportProgress] = useState<number>(0);

  // Keyboard navigation for presentation slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        setCurrentSlide(prev => Math.min(prev + 1, 43));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Export all 44 presentation slides to Landscape PDF
  const handleExportPresentationPdf = async () => {
    try {
      setIsExportingPresentation(true);
      setExportProgress(1);
      const html2canvasProModule = await import('html2canvas-pro');
      const html2canvasPro = html2canvasProModule.default || html2canvasProModule;
      const { jsPDF } = await import('jspdf');

      const container = document.getElementById('pdf-export-slides-container');
      if (!container) {
        setIsExportingPresentation(false);
        return;
      }

      const slideElements = container.querySelectorAll('.pdf-export-slide-item');
      if (!slideElements || slideElements.length === 0) {
        setIsExportingPresentation(false);
        return;
      }

      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });

      for (let i = 0; i < slideElements.length; i++) {
        setExportProgress(i + 1);
        const slideEl = slideElements[i] as HTMLElement;
        const canvas = await html2canvasPro(slideEl, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#faf8f5'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) {
          pdf.addPage('a4', 'landscape');
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      }

      pdf.save('The_Built_Environment_Bill_2026_Proposed_Draft_Master_Presentation.pdf');
    } catch (err) {
      console.error('Presentation PDF Export failed:', err);
    } finally {
      setIsExportingPresentation(false);
      setExportProgress(0);
    }
  };

  // =========================================================================
  // 44 UNABRIDGED SLIDES DATA (PROPOSED LEGISLATIVE DRAFT 2026)
  // =========================================================================
  const slidesData = [
    {
      id: 1,
      badge: "COVER PAGE • PROPOSED LEGISLATIVE DRAFT DOSSIER",
      title: "THE BUILT ENVIRONMENT PROFESSIONS & PRACTICE BILL 2026",
      subtitle: "Proposed Master Legislative Draft — Comprehensive Executive Briefing & Technical Overview",
      type: "COVER_PAGE",
      color: "#991b1b",
      partRef: "PROPOSED BILL DRAFT 2026",
      diagramType: "cover_badge",
      bullets: [
        "Proposed Master Legislative Consensus Bill establishing the supreme Kenya Built Environment Regulatory Council (KBERC) with perpetual succession.",
        "Unifies 8 Regulated Built Environment Professional Disciplines under a single Apex Governance Framework while preserving EBK autonomy under Cap 530.",
        "Overhauls Kenya's built environment statutory landscape: 208 Statutory Sections, 14 Schedules, and 10 Mandatory KBERC Inspection Sign-Off Forms.",
        "Proposes repealing colonial Cap 525 (Architects & QS Act), disbanding BORAQS (Sec 211), subsuming BORAQS assets into KBERC, and preserving EBK (Cap 530)."
      ],
      metrics: [
        { label: "STATUTORY SECTIONS", val: "208" },
        { label: "STATUTORY SCHEDULES", val: "14" },
        { label: "BORAQS DISBANDED", val: "SEC 211" },
        { label: "EBK AUTONOMY", val: "CAP 530 SAVED" }
      ]
    },
    {
      id: 2,
      badge: "SLIDE 02 • HISTORICAL LEGISLATIVE GENESIS",
      title: "HISTORICAL LEGISLATIVE GENESIS & REFORM RATIONALE",
      subtitle: "Why the 1934 Cap 525 colonial framework failed and necessitated BORAQS disbanding",
      type: "DEEP_DIVE",
      color: "#475569",
      partRef: "REPEAL OF CAP 525",
      diagramType: "timeline_summary",
      bullets: [
        "1934 Cap 525 Colonial Failure: Binary 2-profession silo (Architects & QS only under BORAQS) enacted 92 years ago under colonial administration.",
        "Excluded Cadres: Excluded Civil/Structural Engineers, Physical Planners, CPMs, Landscape Architects, Interior Designers, and TVET Technologists.",
        "Public Safety Crisis: Un-inspected building collapses, stamp renting, and forged approval documents in growing urban cities.",
        "2026 Solution: Proposed repeal of Cap 525 (Sec 212), disbanding of BORAQS (Sec 211), transferring BORAQS assets to KBERC, and preserving EBK under Cap 530."
      ],
      metrics: [
        { label: "COLONIAL LAW AGE", val: "92 YRS" },
        { label: "EXCLUDED CADRES", val: "6 CADRES" },
        { label: "BORAQS DISBANDED", val: "SEC 211" },
        { label: "CAP 525 REPEALED", val: "SEC 212" }
      ]
    },
    {
      id: 3,
      badge: "SLIDE 03 • 2026 SECTOR CURRENT AFFAIRS & RESEARCH",
      title: "2026 STRUCTURAL COLLAPSE INQUIRIES & NBC 2024 ENFORCEMENT",
      subtitle: "Verified 2026 South C, Westlands, Karen, Kericho & Syokimau collapse audits and NCA advisories",
      type: "CARD_GRID_4",
      color: "#7c3aed",
      partRef: "2026 CURRENT AFFAIRS BRIEFING",
      diagramType: "collapse_inquiry",
      bullets: [
        "South C 16-Storey Collapse (Jan 2, 2026): Approved for 12 floors but illegally extended to 16. Developer ignored multiple statutory NCA stop-work orders prior to collapse.",
        "Westlands 22-Storey & Kericho Failures (Mar 18, 2026): 22nd-floor slab collapsed during concrete casting due to formwork system failure and inadequate structural propping.",
        "Karen & Syokimau Fatal Collapses (Jan 10 & Aug 13, 2026): Unregistered projects operating without licensed Lead Professionals resulting in fatal wall collapses.",
        "NCA 2026 Safety Advisory & NBC 2024 Rules: Stern advisories issued enforcing Eurocodes BS EN 1990, continuous site supervision, and live County E-Permit verification."
      ],
      cardTags: [
        "📌 Jan 2, 2026 (Sec 166 Offence)",
        "⚠️ Mar 18, 2026 (Form KBERC-3)",
        "🚨 Aug 13, 2026 (Sec 79 Quackery)",
        "🌐 2026 Live County API"
      ],
      metrics: [
        { label: "SOUTH C AUDIT", val: "JAN 2, 2026" },
        { label: "WESTLANDS TOWER", val: "MAR 18, 2026" },
        { label: "SYOKIMAU COLLAPSE", val: "AUG 13, 2026" },
        { label: "COUNTY E-DESKS", val: "47 COUNTIES" }
      ]
    },
    {
      id: 4,
      badge: "SLIDE 04 • PART I (SECTIONS 1–3)",
      title: "PRELIMINARY PROVISIONS, COMMENCEMENT & STATUTORY SCOPE",
      subtitle: "Foundational legal definitions, commencement mechanisms, and core public safety objectives",
      type: "CARD_GRID_4",
      color: "#0284c7",
      partRef: "PART I: SEC 1–3",
      diagramType: "scope_cards",
      bullets: [
        "Section 1 (Short Title & Commencement): Proposed commencement mechanism allowing Cabinet Secretary 12 months for digital deployment upon enactment.",
        "Section 2 (Interpretation): Binding legal definitions for Lead Practitioner, Cryptographic QR Seal, Eurocode Class, and Stamp Renting.",
        "Section 3 (Objects & Purpose): Proposes mandatory public safety, eliminates double-taxation of firms, and protects consumer rights.",
        "Statutory Precedence: Establishes KBERC public safety inspection rules as supreme over local county building by-laws under Article 185."
      ],
      cardTags: [
        "📅 12-Month Transition Window",
        "🔑 Legal Definitions Enacted",
        "🛡️ Public Safety Protection Mandate",
        "⚖️ Article 185 Constitutional Precedence"
      ],
      metrics: [
        { label: "SECTIONS COVERED", val: "Sec 1–3" },
        { label: "GAZETTE TRANSITION", val: "12 MO" },
        { label: "PUBLIC SAFETY", val: "SUPREME" },
        { label: "COUNTY PRECEDENCE", val: "ART 185" }
      ]
    },
    {
      id: 5,
      badge: "SLIDE 05 • PART II (SECTIONS 4–8)",
      title: "KBERC APEX REGULATORY COUNCIL ESTABLISHMENT & LEGAL STATUS",
      subtitle: "Proposed Supreme Apex Body corporate, perpetual succession, common seal, and statutory powers",
      type: "DEEP_DIVE",
      color: "#7c3aed",
      partRef: "PART II: SEC 4–8",
      diagramType: "apex_legal_status",
      bullets: [
        "Section 4 (Establishment of KBERC): Proposed body corporate with perpetual succession, common seal, and capacity to sue and be sued.",
        "Subsuming BORAQS (Sec 211): KBERC Apex Council subsumes all physical assets, digital registers, and staff of the disbanded BORAQS.",
        "EBK Autonomy Alignment (Cap 530): KBERC acts as Apex built environment policy council while EBK maintains statutory engineering autonomy under Cap 530.",
        "Section 6 (Powers of Council): Entering contracts, acquiring real property, levying statutory fees, and issuing binding stop-work orders."
      ],
      metrics: [
        { label: "APEX STATUS", val: "BODY CORPORATE" },
        { label: "BORAQS SUBSUMED", val: "SEC 211" },
        { label: "EBK AUTONOMY", val: "CAP 530 SAVED" },
        { label: "COUNTY LIAISON", val: "47 COUNTIES" }
      ]
    },
    {
      id: 6,
      badge: "SLIDE 06 • PART II (SECTIONS 9–13)",
      title: "19-MEMBER APEX COUNCIL REPRESENTATIVE COMPOSITION & TERMS",
      subtitle: "Representative governance across 8 Colleges, Council of Governors, AG, and CS nominees",
      type: "CARD_GRID_4",
      color: "#7c3aed",
      partRef: "PART II: SEC 9–13",
      diagramType: "council_members",
      bullets: [
        "8 Professional College Representatives: Elected Lead Professionals representing Architecture, Engineering, QS, Planning, Landscape, Interior, CPM, and TVET.",
        "Institutional Nominees: 1 representative nominated by the Council of Governors (COG), 1 by Attorney-General, 1 by Cabinet Secretary.",
        "Section 11 (Term of Office): 3-year term, renewable once for a maximum of 6 years of public service.",
        "Section 12–13 (Vacation of Office & Quorum): Strict quorum rules (10 members) and removal procedures for gross misconduct or incapacity."
      ],
      cardTags: [
        "🏛️ 8 Professional Seats",
        "👥 COG, AG & CS Seats",
        "⏳ 3-Year Term (Max 2)",
        "⚖️ 10-Member Quorum"
      ],
      metrics: [
        { label: "TOTAL MEMBERS", val: "19 MEMBERS" },
        { label: "COLLEGE SEATS", val: "8 SEATS" },
        { label: "COUNCIL TERM", val: "3 YRS (MAX 2)" },
        { label: "MEETING QUORUM", val: "10 MEMBERS" }
      ]
    },
    {
      id: 7,
      badge: "SLIDE 07 • PART II (SECTIONS 14–15)",
      title: "KBERC CHIEF REGISTRAR, SECRETARIAT & EXECUTIVE COMMITTEES",
      subtitle: "Executive CEO appointment, central registry administration, and Section 15 Inter-Board Forum",
      type: "DEEP_DIVE",
      color: "#7c3aed",
      partRef: "PART II: SEC 14–15",
      diagramType: "apex_org_chart",
      bullets: [
        "Section 14 (Appointment of Registrar): Chief Executive Officer appointed competitively for a 5-year renewable term.",
        "Registrar Duties: Custody of central registers, issuing cryptographic digital QR seals, and enforcing statutory fee tariffs.",
        "Section 15 (Joint Co-ordination Forum): Inter-board dispute resolution tribunal resolving scope friction between EBK (Cap 530), KBERC Colleges, and PPRB.",
        "Executive Standing Committees: Audit, Registration & Licensing, Disciplinary, Standards & Education accreditation committees."
      ],
      metrics: [
        { label: "CHIEF REGISTRAR", val: "5-YR TERM" },
        { label: "FORUM TRIBUNAL", val: "SEC 15" },
        { label: "INTER-BOARD LIAISON", val: "EBK/KBERC/PPRB" },
        { label: "SEAL CUSTODY", val: "REGISTRAR" }
      ]
    },
    {
      id: 8,
      badge: "SLIDE 08 • PART III (SECTIONS 16–17)",
      title: "REGULATED COLLEGES 1 & 2: ARCHITECTURE & STRUCTURAL ENGINEERING",
      subtitle: "College of Architecture (subsuming BORAQS Arch functions) & College of Structural Engineering (EBK Liaison)",
      type: "DEEP_DIVE",
      color: "#059669",
      partRef: "PART III: SEC 16–17",
      diagramType: "colleges_arch_eng",
      bullets: [
        "College of Architecture (Sec 16): Regulates architectural design, spatial planning, and building envelope (subsuming former BORAQS architectural roles).",
        "College of Structural & Civil Engineering (Sec 17): Statutory liaison bridge coordinating with EBK (Cap 530) for structural design, foundation engineering, and seismic safety.",
        "BORAQS Architecture Subsuming: BORAQS architectural registration registers and committee roles transition directly into the KBERC College of Architecture.",
        "EBK Engineering Autonomy: Professional registration of engineers remains under EBK (Cap 530), while structural peer review standards coordinate via College 2."
      ],
      metrics: [
        { label: "COLLEGE 1 (ARCH)", val: "BORAQS SUBSUMED" },
        { label: "COLLEGE 2 (ENG)", val: "EBK LIAISON" },
        { label: "EBK REGISTRATION", val: "CAP 530 SAVED" },
        { label: "DUAL SEALING", val: "MANDATORY" }
      ]
    },
    {
      id: 9,
      badge: "SLIDE 09 • PART III (SECTIONS 18–19)",
      title: "REGULATED COLLEGES 3 & 4: QUANTITY SURVEYING & PHYSICAL PLANNING",
      subtitle: "College of Quantity Surveying (subsuming BORAQS QS functions) & College of Physical Planning",
      type: "DEEP_DIVE",
      color: "#059669",
      partRef: "PART III: SEC 18–19",
      diagramType: "colleges_qs_plan",
      bullets: [
        "College of Quantity Surveying (Sec 18): Regulates cost planning, BOQs, financial audits, and contract valuation (subsuming former BORAQS QS roles).",
        "College of Physical & Land Use Planning (Sec 19): Regulates county spatial plans, regional zoning frameworks, and land development control.",
        "BORAQS QS Subsuming: Former BORAQS quantity surveying registers and accreditation committees transition directly into KBERC College 3.",
        "Financial Protection: QS sign-off required for bank disbursements, public infrastructure tender valuations, and final account certificates."
      ],
      metrics: [
        { label: "COLLEGE 3 (QS)", val: "BORAQS SUBSUMED" },
        { label: "COLLEGE 4 (PLAN)", val: "PHYSICAL PLANNING" },
        { label: "BANK DISBURSE", val: "QS AUDITED" },
        { label: "ZONING GATE", val: "PLANNER SEAL" }
      ]
    },
    {
      id: 10,
      badge: "SLIDE 10 • PART III (SECTIONS 20–22)",
      title: "REGULATED COLLEGES 5 & 6: LANDSCAPE ARCHITECTURE & INTERIOR DESIGN",
      subtitle: "Autonomous statutory registration boards for Landscape Architects and Interior Designers",
      type: "DEEP_DIVE",
      color: "#059669",
      partRef: "PART III: SEC 20–22",
      diagramType: "colleges_land_int",
      bullets: [
        "College of Landscape Architecture (Sec 20–21): Regulates site ecology, urban green infrastructure, and environmental landscape design.",
        "College of Interior Architecture & Design (Sec 22): Regulates interior spatial ergonomics, fire safety, and material specification.",
        "Ecological Standards: Landscape sign-off mandatory for public parks, commercial plazas, and environmental EIA compliance.",
        "Fire Safety Ergonomics: Interior design certification mandatory for public assembly halls, hotels, and high-occupancy commercial towers."
      ],
      metrics: [
        { label: "COLLEGE 5", val: "LANDSCAPE ARCH" },
        { label: "COLLEGE 6", val: "INTERIOR DESIGN" },
        { label: "ECOLOGY GATE", val: "EIA LIAISON" },
        { label: "FIRE SAFETY", val: "INTERIOR SIGN-OFF" }
      ]
    },
    {
      id: 11,
      badge: "SLIDE 11 • PART III (SECTIONS 23–25)",
      title: "REGULATED COLLEGES 7 & 8: CPM & TVET TECHNOLOGISTS",
      subtitle: "Autonomous statutory registration boards for Construction Project Managers and TVET Technologists",
      type: "DEEP_DIVE",
      color: "#059669",
      partRef: "PART III: SEC 23–25",
      diagramType: "colleges_cpm_tvet",
      bullets: [
        "College of Construction Project Management (Sec 23): Regulates CPM site project managers, construction planning, and safety.",
        "College of Built Environment Technologists (Sec 24–25): Regulates TVET Higher Diploma and B.Tech graduates within indexed cadres.",
        "Site Management Oversight: CPM project managers ensure site safety protocols, quality assurance, and schedule adherence.",
        "TVET Inclusion: First statutory framework in East Africa granting formal registration and independent practice to TVET technologists."
      ],
      metrics: [
        { label: "COLLEGE 7", val: "CPM MANAGERS" },
        { label: "COLLEGE 8", val: "TVET TECHNOLOGISTS" },
        { label: "SITE SAFETY", val: "CPM MANDATE" },
        { label: "EAST AFRICA FIRST", val: "TVET INDEX" }
      ]
    },
    {
      id: 12,
      badge: "SLIDE 12 • PART IV (SECTIONS 26–28)",
      title: "INDIVIDUAL PRACTITIONER REGISTRATION & FORM A QUALIFICATIONS",
      subtitle: "Statutory Form A registration, accredited degree requirements, and qualifications evaluation",
      type: "CARD_GRID_4",
      color: "#d97706",
      partRef: "PART IV: SEC 26–28",
      diagramType: "registration_qualifications",
      bullets: [
        "Section 26 (Application for Registration): Submission of statutory Form A to the respective Professional Board.",
        "Section 27 (Qualifications Gate): Accredited university degree in architecture, engineering, QS, planning, or technical degree.",
        "Section 27A (Foreign Degree Recognition): Evaluation and peer verification of foreign university qualifications by KBERC.",
        "Section 28 (Entry into College Register): Approval by College Registration Committee and issuance of Registration Number."
      ],
      cardTags: [
        "📋 Form A Statutory Application",
        "🎓 Accredited University Degree",
        "🌍 Foreign Degree Peer Verification",
        " Lifetime Register Entry"
      ],
      metrics: [
        { label: "FORM TIER", val: "FORM A" },
        { label: "DEGREE GATE", val: "ACCREDITED" },
        { label: "FOREIGN DEGREES", val: "SEC 27A" },
        { label: "REGISTER ENTRY", val: "LIFETIME" }
      ]
    },
    {
      id: 13,
      badge: "SLIDE 13 • PART IV (SECTIONS 29–34)",
      title: "INTERNSHIP LOGBOOKS, MENTORSHIP & PPE LICENSING EXAMS",
      subtitle: "Mandatory 2-year internship, logbook sign-offs, and Professional Practice Exams (PPE)",
      type: "CARD_GRID_4",
      color: "#d97706",
      partRef: "PART IV: SEC 29–34",
      diagramType: "internship_ppe",
      bullets: [
        "Section 29 (Structured Internship): Mandatory 2-year graduate internship under a licensed Lead Practitioner.",
        "Section 30 (Digital Logbook Maintenance): Weekly sign-off of site inspection and design logbooks by supervising mentors.",
        "Section 31 (Professional Practice Exam - PPE): Mandatory pass in KBERC statutory law, professional ethics, and contract administration.",
        "Section 32–34 (Issuance of Certificate): Proposed gazettement of newly licensed Lead Practitioners in the Kenya Gazette upon enactment."
      ],
      cardTags: [
        "⏱️ Mandatory 2-Year Internship",
        "📓 Weekly Digital Logbook Audit",
        "✍️ PPE Statutory Licensing Exam",
        "📜 Kenya Gazette Official Listing"
      ],
      metrics: [
        { label: "INTERNSHIP DURATION", val: "2 YEARS" },
        { label: "LOGBOOK AUDIT", val: "WEEKLY" },
        { label: "PPE EXAM", val: "MANDATORY" },
        { label: "GAZETTE LISTING", val: "SEC 34" }
      ]
    },
    {
      id: 14,
      badge: "SLIDE 14 • PART IV (SECTIONS 35–40)",
      title: "CORPORATE CONSULTANCIES, JOINT VENTURES & 51% LOCAL EQUITY",
      subtitle: "Form C corporate firm licensing, local practitioner equity mandate, and joint venture rules",
      type: "CARD_GRID_4",
      color: "#b45309",
      partRef: "PART IV: SEC 35–40",
      diagramType: "corporate_equity",
      bullets: [
        "Section 35 (Form B Annual Practicing License): Mandatory annual license renewal linked to 50 CPD units and valid PII insurance.",
        "Section 36–38 (Form C Corporate Firm Licensing): Licensing of sole proprietorships, partnerships, and limited liability consultancies.",
        "Section 39 (51% Local Equity Rule): Proposes that at least 51% of voting shares in corporate firms must be owned by registered local Lead Professionals.",
        "Section 40 (Corporate Board Liability): Directors of corporate consultancies are held jointly and severally liable for design defects."
      ],
      cardTags: [
        "📜 Form B Annual Renewal",
        "🏢 Form C Corporate License",
        "🇰🇪 51% Minimum Local Shareholding",
        "⚖️ Joint & Several Director Liability"
      ],
      metrics: [
        { label: "LOCAL EQUITY", val: "51% MIN" },
        { label: "ANNUAL LICENSE", val: "FORM B" },
        { label: "FIRM LICENSING", val: "FORM C" },
        { label: "DIRECTOR LIABILITY", val: "JOINT & SEVERAL" }
      ]
    },
    {
      id: 15,
      badge: "SLIDE 15 • PART IV (SECTIONS 41–45)",
      title: "FOREIGN CONSULTANCY REGULATIONS, TECH TRANSFER & STUDENT RIGHTS",
      subtitle: "Temporary foreign practitioner registration, local JV mandates, and Section 27A student intern rights",
      type: "CARD_GRID_4",
      color: "#b45309",
      partRef: "PART IV: SEC 41–45",
      diagramType: "foreign_student_rights",
      bullets: [
        "Section 41–43 (Temporary Foreign Registration): Foreign professionals granted temporary licenses for specific mega-projects only.",
        "Section 44 (Mandatory Technology Transfer): Foreign firms must pair with local consultancies in a Joint Venture transferring technology.",
        "Section 45 (Local Content Mandate): Minimum 60% of technical design hours on public projects reserved for local Kenyan professionals.",
        "Section 27A (Student Trainee Protections): Mandatory paid 12-month industrial attachment for university and TVET trainees."
      ],
      cardTags: [
        "🌐 Project-Specific Temp License",
        "🤝 Mandatory Joint Venture",
        "🇰🇪 60% Local Content Hours",
        "🎓 Paid Student Attachments"
      ],
      metrics: [
        { label: "TEMP LICENSES", val: "PROJECT-SPECIFIC" },
        { label: "TECH TRANSFER", val: "MANDATORY JV" },
        { label: "LOCAL CONTENT", val: "60% MIN" },
        { label: "STUDENT RIGHTS", val: "PAID INTERNS" }
      ]
    },
    {
      id: 16,
      badge: "SLIDE 16 • PART V (SECTIONS 46–50)",
      title: "CENTRAL DIGITAL REGISTER & PUBLIC CREDENTIAL VERIFICATION PORTAL",
      subtitle: "Real-time master database of all licensed practitioners, firms, and quack tracking",
      type: "DEEP_DIVE",
      color: "#0284c7",
      partRef: "PART V: SEC 46–50",
      diagramType: "central_register",
      bullets: [
        "Section 46 (Central Master Digital Register): Cloud-based real-time statutory database maintained by the KBERC Chief Registrar.",
        "Section 47 (Public Access & API): Free public verification portal allowing property buyers, banks, and county officers to verify license validity.",
        "Section 48 (Register Categorization): Separate registers for Individual Lead Practitioners, Corporate Consultancies, and TVET Technologists.",
        "Section 49–50 (Annual Gazette Publication): Mandatory annual publication of the official Roll of Licensed Practitioners in the Kenya Gazette."
      ],
      metrics: [
        { label: "DATABASE STATUS", val: "CLOUD REAL-TIME" },
        { label: "PUBLIC VERIFY", val: "FREE API" },
        { label: "REGISTER TIERS", val: "3 CATEGORIES" },
        { label: "GAZETTE ROLL", val: "ANNUAL" }
      ]
    },
    {
      id: 17,
      badge: "SLIDE 17 • PART V (SECTIONS 51–55)",
      title: "CRYPTOGRAPHIC DIGITAL QR SEALS & REAL-TIME PLAN AUTHENTICATION",
      subtitle: "Mandatory cryptographic digital QR seals embedding GPS, license status, and PII cover",
      type: "FLOWCHART_PROCESS",
      color: "#0284c7",
      partRef: "PART V: SEC 51–55",
      diagramType: "digital_seal_flow",
      bullets: [
        "Section 51 (Mandatory Digital QR Seals): Every architectural, structural, and QS drawing submitted for approval must bear a KBERC digital seal.",
        "Cryptographic Encryption: QR seal embeds practitioner name, license number, PII expiry date, project GPS coordinates, and hash signature.",
        "Anti-Stamp Renting: Digital QR seals generated dynamically via single-use practitioner token authentication preventing stamp renting.",
        "Public Verification: Scanning QR seal using any smartphone displays live status directly from the KBERC Central Digital Register."
      ],
      metrics: [
        { label: "QR SEALS", val: "CRYPTOGRAPHIC" },
        { label: "ENCRYPTION HASH", val: "SEC 51" },
        { label: "STAMP RENTING", val: "IMPOSSIBLE" },
        { label: "VERIFICATION", val: "SMARTPHONE" }
      ]
    },
    {
      id: 18,
      badge: "SLIDE 18 • PART V (SECTIONS 56–58)",
      title: "47 COUNTY E-PERMIT DESKS API INTEGRATION & SECTION 58 VOIDING",
      subtitle: "Real-time county building control liaison and statutory voiding of un-sealed building plans",
      type: "FLOWCHART_PROCESS",
      color: "#2563eb",
      partRef: "PART V: SEC 56–58",
      diagramType: "county_api_arch",
      bullets: [
        "Section 56 (County Executive Liaison): Mandatory integration between KBERC Central Register and 47 County Building Control Desks.",
        "Section 57 (Live API Portal): Real-time API link validating practitioner license status during e-construction permit applications.",
        "Section 58 (Mandatory Sealing Enforcement): Un-sealed building plans submitted to 47 County E-Permit portals are rendered legally void.",
        "Criminal Prosecution: County officers who approve un-sealed plans face personal prosecution and statutory fines."
      ],
      metrics: [
        { label: "COUNTY DESKS", val: "47 COUNTIES" },
        { label: "API INTEGRATION", val: "REAL-TIME" },
        { label: "UN-SEALED PLANS", val: "VOID (SEC 58)" },
        { label: "OFFICER LIABILITY", val: "PERSONAL" }
      ]
    },
    {
      id: 19,
      badge: "SLIDE 19 • PART VI (SECTIONS 59–64)",
      title: "CONTINUING PROFESSIONAL DEVELOPMENT (CPD) 50-UNIT MATRIX",
      subtitle: "Mandatory annual 50 CPD units requirement, provider accreditation, and renewal gates",
      type: "CARD_GRID_4",
      color: "#059669",
      partRef: "PART VI: SEC 59–64",
      diagramType: "cpd_matrix",
      bullets: [
        "Section 59 (CPD Mandate): All registered practitioners must earn a minimum of 50 CPD units annually to renew Form B licenses.",
        "Section 60 (Accreditation of Providers): KBERC accredits professional associations (AAK, IEK, IQSK, KIP) to offer CPD modules.",
        "Section 62 (Category Breakdown): Technical seminars (20 units), ethics workshops (10 units), research publications (10 units), site mentorship (10 units).",
        "Section 64 (Default Sanction): Failure to attain 50 CPD units results in automatic license suspension until units are fulfilled."
      ],
      cardTags: [
        "📚 Mandatory 50 Annual Units",
        "🏛️ Accredited Associations",
        "📊 4 Technical Categories",
        "🚫 License Suspension Default"
      ],
      metrics: [
        { label: "ANNUAL CPD UNITS", val: "50 UNITS" },
        { label: "ACCREDITED BOARDS", val: "AAK/IEK/IQSK" },
        { label: "DEFAULT ACTION", val: "SUSPENSION" },
        { label: "RENEWAL GATE", val: "MANDATORY" }
      ]
    },
    {
      id: 20,
      badge: "SLIDE 20 • PART VI (SECTIONS 65–68)",
      title: "PROFESSIONAL INDEMNITY INSURANCE (PII) TIERS",
      subtitle: "Statutory Professional Indemnity Cover tiers for individual practitioners and corporate consultancies",
      type: "METRIC_STACK",
      color: "#991b1b",
      partRef: "PART VI: SEC 65–68",
      diagramType: "pii_tiers_chart",
      bullets: [
        "Section 65 (Mandatory PII Cover): No practitioner or firm may undertake design or site supervision without valid PII insurance.",
        "Class A PII Cover (KES 100,000,000): Required for Lead Consultancies handling High-Risk Category D & E Eurocode buildings.",
        "Class B PII Cover (KES 50,000,000): Required for Medium-Risk Category C commercial & multi-family residential developments.",
        "Class C PII Cover (KES 25,000,000): Required for Low-Risk Category A & B single-dwelling residential & small structures."
      ],
      metrics: [
        { label: "CLASS A COVER", val: "KES 100M" },
        { label: "CLASS B COVER", val: "KES 50M" },
        { label: "CLASS C COVER", val: "KES 25M" },
        { label: "INSURANCE GATE", val: "MANDATORY" }
      ]
    },
    {
      id: 21,
      badge: "SLIDE 21 • PART VI (SECTIONS 69–72)",
      title: "10-YEAR STATUTORY DEFECT LIABILITY ALLOCATION BREAKDOWN",
      subtitle: "Statutory 10-year defect liability allocation between architects, structural engineers, QSs, and main contractors",
      type: "METRIC_STACK",
      color: "#991b1b",
      partRef: "PART VI: SEC 69–72",
      diagramType: "defect_liability_pie",
      bullets: [
        "Section 69 (Statutory Defect Period): Proposes a binding 10-year defect liability period post-occupancy for structural failures.",
        "Architectural Liability (30%): Architectural layout, spatial ergonomics, building envelope, and waterproofing failure liability.",
        "Structural Engineering Liability (30%): Load-bearing design, foundation shear, concrete strength, and structural dynamics failure liability.",
        "Contractor & QS Liability (QS 15% / Main Contractor 25%): Substandard material substitution, workmanship defects, and site execution errors."
      ],
      metrics: [
        { label: "STATUTORY DURATION", val: "10 YEARS" },
        { label: "ARCHITECT SHARE", val: "30%" },
        { label: "ENGINEER SHARE", val: "30%" },
        { label: "CONTRACTOR SHARE", val: "25%" }
      ]
    },
    {
      id: 22,
      badge: "SLIDE 22 • PART VII (SECTIONS 73–80)",
      title: "PROTECTED PROFESSIONAL TITLES & ANTI-QUACKERY PROVISIONS",
      subtitle: "Reserved statutory professional designations and criminalization of un-licensed title usage",
      type: "CARD_GRID_4",
      color: "#059669",
      partRef: "PART VII: SEC 73–80",
      diagramType: "protected_titles",
      bullets: [
        "Section 73–75 (Reserved Titles): Reserved statutory designations (Registered Architect, Consulting Engineer, Quantity Surveyor, Registered Planner).",
        "Section 76–78 (Technologist Titles): Reserved designations for Registered CPM Project Manager and Registered Built Environment Technologist.",
        "Section 79 (Anti-Quackery Provision): Criminalizes using protected titles or offering professional services without active Form B license.",
        "Section 80 (Penalties for Title Misuse): Statutory fines up to KES 2,000,000 and 3 years imprisonment for title impersonation."
      ],
      cardTags: [
        "🛡️ Reserved Statutory Designations",
        "🛠️ Technologist & CPM Protection",
        "⚖️ Anti-Quackery Criminalization",
        "🚨 KES 2M Fine / 3-Yr Prison Term"
      ],
      metrics: [
        { label: "RESERVED TITLES", val: "PROTECTED" },
        { label: "UNAUTHORIZED USE", val: "CRIME" },
        { label: "MAXIMUM FINE", val: "KES 2.0M" },
        { label: "PRISON TERM", val: "UP TO 3 YRS" }
      ]
    },
    {
      id: 23,
      badge: "SLIDE 23 • PART VII (SECTIONS 81–85)",
      title: "STATUTORY SCOPES OF PRACTICE & BOUNDARY MATRIX",
      subtitle: "Explicit boundary matrices defining design, cost, structural, and site supervision responsibilities",
      type: "DEEP_DIVE",
      color: "#059669",
      partRef: "PART VII: SEC 81–85",
      diagramType: "scope_boundary_matrix",
      bullets: [
        "Section 81 (Architectural Scope): Lead design coordination, spatial layout, building envelope, and occupancy certification.",
        "Section 82 (Engineering Scope): Structural load design, foundation engineering, MEP installation design, and stability certification.",
        "Section 83 (QS Scope): Financial cost planning, BOQ preparation, tender audit, contract administration, and final account valuation.",
        "Section 84–85 (Planning & CPM Scope): Regional spatial planning, zoning compliance, site project management, and safety supervision."
      ],
      metrics: [
        { label: "ARCH DESIGN", val: "SEC 81" },
        { label: "STRUCTURAL STABILITY", val: "SEC 82" },
        { label: "COST AUDIT", val: "SEC 83" },
        { label: "SITE MANAGERS", val: "SEC 84–85" }
      ]
    },
    {
      id: 24,
      badge: "SLIDE 24 • PART VII (SECTIONS 86–90)",
      title: "TVET TECHNOLOGIST INDEXING, HIGHER DIPLOMA & B.TECH PROGRESSION",
      subtitle: "Statutory recognition, career progression, and independent scopes of practice for TVET cadres",
      type: "CARD_GRID_4",
      color: "#059669",
      partRef: "PART VII: SEC 86–90",
      diagramType: "tvet_indexing",
      bullets: [
        "Section 86 (TVET Indexing Gate): Mandatory registration of Higher Diploma & B.Tech graduates under the College of Technologists.",
        "Section 87 (Technologist Scopes of Practice): Independent statutory scopes for site supervision, technical detailing, and maintenance.",
        "Section 88 (Career Progression Pathways): Clear legal pathways allowing indexed Technologists to sit PPE exams upon acquiring degree equivalency.",
        "Section 89–90 (TVETA Liaison): Joint accreditation framework with TVET Authority ensuring industry-aligned technical curricula."
      ],
      cardTags: [
        "🎓 Higher Diploma & B.Tech Indexing",
        "🛠️ Independent Site Supervision Scope",
        "📈 Legal PPE Examination Pathway",
        "🏛️ Mandatory TVETA Joint Accreditation"
      ],
      metrics: [
        { label: "TVET CADRES", val: "INDEXED" },
        { label: "HIGHER DIPLOMA", val: "B.TECH" },
        { label: "CAREER PATHWAY", val: "PPE GATE" },
        { label: "TVETA LIAISON", val: "SEC 89–90" }
      ]
    },
    {
      id: 25,
      badge: "SLIDE 25 • PART VIII (SECTIONS 91–95)",
      title: "CODE OF ETHICS, CONFLICT OF INTEREST & FINANCIAL PROBITY",
      subtitle: "Schedule 1 Code of Conduct, mandatory conflict disclosures, and anti-corruption rules",
      type: "CARD_GRID_4",
      color: "#991b1b",
      partRef: "PART VIII: SEC 91–95",
      diagramType: "ethics_probity",
      bullets: [
        "Section 91 (Schedule 1 Ethics Code): Binding code of professional conduct and ethics applicable to all 8 regulated disciplines.",
        "Section 92 (Mandatory Conflict Disclosure): Practitioners must declare any financial, commercial, or personal interest in project tenders.",
        "Section 93 (Prohibition of Secret Commissions): Criminalizes receiving undisclosed kickbacks or supplier commissions on building materials.",
        "Section 94–95 (Financial Integrity): Enforces transparent client account management and bans fraudulent cost inflation."
      ],
      cardTags: [
        "📜 Schedule 1 Ethics Code",
        "⚠️ Mandatory Interest Declaration",
        "⚖️ Prohibition of Supplier Kickbacks",
        "💼 Audited Client Accounts"
      ],
      metrics: [
        { label: "ETHICAL CODE", val: "SCHEDULE 1" },
        { label: "CONFLICT DISCLOSURE", val: "MANDATORY" },
        { label: "KICKBACKS", val: "CRIMINAL" },
        { label: "CLIENT ACCOUNTS", val: "AUDITED" }
      ]
    },
    {
      id: 26,
      badge: "SLIDE 26 • PART VIII (SECTIONS 96–105)",
      title: "DISCIPLINARY COMMITTEE INQUIRIES, STAMP RENTING & SANCTIONS TARIFF",
      subtitle: "Disciplinary Tribunal hearings, roll striking, KES 5,000,000 fines, and stamp renting prosecution",
      type: "CARD_GRID_4",
      color: "#991b1b",
      partRef: "PART VIII: SEC 96–105",
      diagramType: "disciplinary_tariff",
      bullets: [
        "Section 96–98 (Disciplinary Committee): Statutory tribunal empowered to investigate complaints of professional misconduct or negligence.",
        "Section 99 (Stamp Renting Prosecution): Explicit statutory prosecution for practitioners who rent credentials to un-supervised developers.",
        "Section 100–103 (Sanctions Tariff): Gazette reprimands, practicing license suspensions, roll striking, and statutory fines up to KES 5,000,000.",
        "Section 104–105 (Publication of Sanctions): Mandatory publication of disciplined quacks and suspended practitioners in the Kenya Gazette."
      ],
      cardTags: [
        "🏛️ Disciplinary Tribunal Hearing",
        "🚨 Stamp Renting Criminal Prosecution",
        "💸 Fines Up To KES 5,000,000",
        "📜 Gazette Roll Striking Notice"
      ],
      metrics: [
        { label: "DISCIPLINARY BOARD", val: "SEC 96" },
        { label: "STAMP RENTING", val: "PROSECUTED" },
        { label: "MAXIMUM FINE", val: "KES 5.0M" },
        { label: "GAZETTE LISTING", val: "MANDATORY" }
      ]
    },
    {
      id: 27,
      badge: "SLIDE 27 • PART IX (SECTIONS 106–112)",
      title: "CONSUMER PROTECTION & SCHEDULE 12 MINIMUM SCALE OF FEES",
      subtitle: "Schedule 12 Gazetted Minimum Scale of Fees (5.0%–6.5%), hourly advisory rates, and tariffs",
      type: "METRIC_STACK",
      color: "#b45309",
      partRef: "PART IX: SEC 106–112",
      diagramType: "fee_scale_bar",
      bullets: [
        "Section 106–108 (Schedule 12 Fee Scale): Statutory minimum percentage design fee tariffs (5.0%–6.5%) and hourly advisory rates (KES 10k–15k/hr).",
        "Section 109 (Comprehensive Fee Breakdown): Fee allocation across Concept Design (15%), Scheme Design (20%), Working Drawings (35%), Site Supervision (30%).",
        "Section 110–112 (Client-Practitioner Service Agreements): Mandatory written statutory contracts prior to commencing any professional design services.",
        "Consumer Protection: Protects building developers against exorbitant fees while ensuring practitioners receive fair remuneration."
      ],
      metrics: [
        { label: "MINIMUM FEE SCALE", val: "5.0%–6.5%" },
        { label: "ADVISORY RATE", val: "KES 15K/HR" },
        { label: "WORKING DRAWINGS", val: "35% SHARE" },
        { label: "SITE SUPERVISION", val: "30% SHARE" }
      ]
    },
    {
      id: 28,
      badge: "SLIDE 28 • STATUTORY REMUNERATION PROVISIONS",
      title: "STATUTORY REMUNERATION MANDATES & GAZETTE REGULATION POWERS",
      subtitle: "Mandatory paid attachments (Sec 27A), paid internships (Sec 29), and gazette tariffs (Sec 208)",
      type: "CARD_GRID_4",
      color: "#d97706",
      partRef: "SEC 27A, SEC 29 & SEC 208",
      diagramType: "verifiable_statutory_remuneration",
      bullets: [
        "Section 27A Mandatory Student Attachment: Statutory mandate requiring compulsory paid industrial attachment for university and TVET trainees.",
        "Section 29 Mandatory Graduate Logbook Internship: Compulsory 2-year paid internship under licensed Lead Practitioners before sitting PPE exams.",
        "Section 208(2)(h) KBERC Regulation Power: Empowers Council to gazette binding stipend tariffs and practitioner remuneration scales via Legal Notices.",
        "Section 113 Anti-Undercutting Criminal Offence: Statutory criminal offence enforcing compliance with gazetted Schedule 12 fee tariffs."
      ],
      cardTags: [
        "🎓 Sec 27A Paid Attachment",
        "⏱️ Sec 29 Paid Logbook Internship",
        "📜 Sec 208(2)(h) Gazette Power",
        "⚖️ Sec 113 Anti-Undercut Offence"
      ],
      metrics: [
        { label: "STUDENT ATTACHMENT", val: "SEC 27A PAID" },
        { label: "LOGBOOK INTERNSHIP", val: "SEC 29 PAID" },
        { label: "GAZETTE POWER", val: "SEC 208(2)(H)" },
        { label: "UNDERCUT OFFENCE", val: "SEC 113" }
      ]
    },
    {
      id: 29,
      badge: "SLIDE 29 • PART IX (SECTIONS 113–120)",
      title: "ANTI-UNDERCUTTING MANDATES, PREDATORY PRICING & FEE ARBITRATION",
      subtitle: "Criminalization of fee undercutting, un-accredited brokerage, and KBERC fee arbitration",
      type: "CARD_GRID_4",
      color: "#b45309",
      partRef: "PART IX: SEC 113–120",
      diagramType: "anti_undercutting",
      bullets: [
        "Section 113 (Anti-Undercutting Mandate): Criminalizes fee undercutting below Schedule 12 statutory minimums that compromise design safety.",
        "Section 114 (Prohibition of Tendering Brokerage): Bans un-accredited middlemen and brokers who solicit professional fees.",
        "Section 117–119 (Mandatory Fee Arbitration): KBERC Registrar empowered to arbitrate fee disputes between clients and consultancies.",
        "Section 120 (Recovery of Professional Fees): Statutory summary recovery procedure in magistrate courts for unpaid professional fees."
      ],
      cardTags: [
        "⚖️ Fee Undercutting Criminalized",
        "🚫 Tendering Brokers Banned",
        "🤝 Registrar Fee Arbitration",
        "⚖️ Summary Court Fee Recovery"
      ],
      metrics: [
        { label: "UNDERCUTTING", val: "ILLEGAL" },
        { label: "FEE BROKERAGE", val: "BANNED" },
        { label: "FEE ARBITRATION", val: "REGISTRAR" },
        { label: "COURT RECOVERY", val: "SEC 120" }
      ]
    },
    {
      id: 30,
      badge: "SLIDE 30 • PART X (SECTIONS 121–125)",
      title: "6-HOUR EMERGENCY COLLAPSE PROTOCOL & FORENSIC SITE AUDITS",
      subtitle: "Mandatory 6-hour forensic collapse response and structural failure site evidence sampling",
      type: "FLOWCHART_PROCESS",
      color: "#7c3aed",
      partRef: "PART X: SEC 121–125",
      diagramType: "emergency_collapse_flow",
      bullets: [
        "Section 121–122 (6-Hour Emergency Collapse Protocol): Mandatory deployment of KBERC forensic inquiry teams within 6 hours of collapse.",
        "Section 123 (Site Sealing & Evidence Preservation): Immediate police perimeter sealing, concrete core sampling, and rebar laboratory testing.",
        "Section 124 (Summoning Witnesses & Logbooks): Compulsory production of site inspection logbooks, approved drawings, and concrete test cubes.",
        "Section 125 (30-Day Parliamentary Audit Report): Statutory report submitted to Cabinet Secretary and Parliament detailing root failure causes."
      ],
      metrics: [
        { label: "COLLAPSE RESPONSE", val: "6 HOURS" },
        { label: "SITE SEALING", val: "IMMEDIATE" },
        { label: "CORE TESTING", val: "MANDATORY" },
        { label: "REPORT TO PARLIAMENT", val: "30 DAYS" }
      ]
    },
    {
      id: 31,
      badge: "SLIDE 31 • PART X (SECTIONS 126–130)",
      title: "DISASTER RELIEF & EMERGENCY COLLAPSE INQUIRY FUND ADMINISTRATION",
      subtitle: "Schedule 13 Fund financing forensic collapse audits and victim compensation",
      type: "CARD_GRID_4",
      color: "#7c3aed",
      partRef: "PART X: SEC 126–130",
      diagramType: "disaster_fund",
      bullets: [
        "Section 126 (Schedule 13 Disaster Relief Fund): Statutory fund established to finance collapse investigations and emergency victim relief.",
        "Fund Revenue Sources: Paid by developers via 0.1% levy on approval fees, parliamentary appropriations, statutory fines, and investment returns.",
        "Section 127–128 (Compensation Administration): Direct financial compensation to victims of structural collapse caused by professional negligence.",
        "Section 129–130 (Annual Fund Audit): Audited annually by the Auditor-General and published transparently."
      ],
      cardTags: [
        "🏥 Schedule 13 Disaster Fund",
        "💵 0.1% Developer Approval Levy",
        "🤝 Direct Victim Compensation",
        "📊 Annual Auditor-General Audit"
      ],
      metrics: [
        { label: "RELIEF FUND", val: "SCHEDULE 13" },
        { label: "DEVELOPER LEVY", val: "0.1% ON PERMITS" },
        { label: "VICTIM COMPENSATION", val: "SEC 127" },
        { label: "AUDITOR-GENERAL", val: "ANNUAL AUDIT" }
      ]
    },
    {
      id: 32,
      badge: "SLIDE 32 • PART XI (SECTIONS 131–140)",
      title: "BUILT ENVIRONMENT APPEALS TRIBUNAL JURISDICTION & 60-DAY LIMITS",
      subtitle: "Independent 5-member judicial tribunal and 60-day appellate hearing timelines",
      type: "FLOWCHART_PROCESS",
      color: "#2563eb",
      partRef: "PART XI: SEC 131–140",
      diagramType: "appeals_flow",
      bullets: [
        "Section 131 (Tribunal Establishment): Independent 5-member judicial tribunal chaired by a senior High Court advocate of 10+ years standing.",
        "Section 132–135 (Appellate Jurisdiction): Hearing appeals against KBERC registration refusals, disciplinary sanctions, and fee disputes.",
        "Section 136–138 (60-Day Hearing Limit): Statutory mandate requiring all tribunal appeals to be heard and determined within 60 days of filing.",
        "Section 139–140 (Tribunal Powers): Power to summon witnesses, administer oaths, order site re-inspections, and award legal costs."
      ],
      metrics: [
        { label: "TRIBUNAL CHAIR", val: "ADVOCATE (10+ YRS)" },
        { label: "HEARING TIMELINE", val: "60 DAYS" },
        { label: "JURISDICTION", val: "APPELLATE" },
        { label: "TRIBUNAL SEATS", val: "5 MEMBERS" }
      ]
    },
    {
      id: 33,
      badge: "SLIDE 33 • PART XI (SECTIONS 141–150)",
      title: "HIGH COURT REFERRAL GATES & JUDICIAL APPEAL WORKFLOW",
      subtitle: "Statutory High Court of Kenya referral gates on points of law and execution of tribunal orders",
      type: "FLOWCHART_PROCESS",
      color: "#2563eb",
      partRef: "PART XI: SEC 141–150",
      diagramType: "high_court_referral",
      bullets: [
        "Section 141–143 (High Court Referral Gate): Final appeals from Tribunal decisions lie directly to the High Court of Kenya on points of law.",
        "Section 144 (Enforcement of Tribunal Orders): Decrees and orders of the Tribunal are enforceable as orders of the High Court.",
        "Section 145–148 (Immunity of Members): Protection of Tribunal members acting in good faith from civil or criminal liability.",
        "Section 149–150 (Rules of Procedure): Chief Justice empowered to make binding High Court practice rules for built environment appeals."
      ],
      metrics: [
        { label: "HIGH COURT APPEAL", val: "SEC 141" },
        { label: "POINTS OF LAW", val: "ONLY" },
        { label: "ORDER DECREE", val: "HIGH COURT ENFORCED" },
        { label: "CHIEF JUSTICE", val: "PRACTICE RULES" }
      ]
    },
    {
      id: 34,
      badge: "SLIDE 34 • PART XII (SECTIONS 151–155)",
      title: "STAGE GATE INSPECTIONS 1: GEOTECHNICAL, FOUNDATION & SUBSTRUCTURE",
      subtitle: "Mandatory Form KBERC-1 soil sign-offs and Form KBERC-2 foundation concrete pour validation",
      type: "FLOWCHART_PROCESS",
      color: "#059669",
      partRef: "PART XII: SEC 151–155",
      diagramType: "stage_gate_1",
      bullets: [
        "Form KBERC-1 (Excavation & Geotechnical Sign-Off): Soil bearing capacity certification and foundation trench inspection prior to concrete pour.",
        "Form KBERC-2 (Substructure Foundation Pour): Rebar placement verification, slump concrete lab testing, and structural engineer sign-off.",
        "Mandatory Lab Testing: Concrete core compression strength tests (Class C25/30 minimum) certified by accredited testing laboratories.",
        "County Permit Gateway: Form KBERC-1 and KBERC-2 must be uploaded to County E-Permit portal before superstructure framing begins."
      ],
      metrics: [
        { label: "GEOTECH FORM", val: "FORM KBERC-1" },
        { label: "FOUNDATION FORM", val: "FORM KBERC-2" },
        { label: "CONCRETE CLASS", val: "C25/30 MIN" },
        { label: "COUNTY UPLOAD", val: "REAL-TIME" }
      ]
    },
    {
      id: 35,
      badge: "SLIDE 35 • PART XII (SECTIONS 156–165)",
      title: "STAGE GATE INSPECTIONS 2: SUPERSTRUCTURE, ENVELOPE & OCCUPANCY",
      subtitle: "Forms KBERC-3 to KBERC-6 stage gate sign-offs and final statutory occupancy certification",
      type: "FLOWCHART_PROCESS",
      color: "#059669",
      partRef: "PART XII: SEC 156–165",
      diagramType: "stage_gate_2",
      bullets: [
        "Form KBERC-3 (Superstructure Frame & Column Sign-Off): Structural column, beam, and slab integrity certification.",
        "Form KBERC-4 & KBERC-5 (Envelope & MEP Services): Waterproofing, fire egress, electrical grounding, and plumbing pressure tests.",
        "Form KBERC-6 (Final Occupancy Certificate): Multi-disciplinary sign-off certifying building safety prior to tenant occupancy.",
        "Illegal Occupancy Penalty: Occupying a building without Form KBERC-6 occupancy permit carries KES 5,000,000 fine and building evacuation."
      ],
      metrics: [
        { label: "FRAME FORM", val: "FORM KBERC-3" },
        { label: "SERVICES FORM", val: "FORMS 4 & 5" },
        { label: "OCCUPANCY PERMIT", val: "FORM KBERC-6" },
        { label: "ILLEGAL OCCUPY", val: "KES 5M FINE" }
      ]
    },
    {
      id: 36,
      badge: "SLIDE 36 • PART XIII (SECTIONS 166–180)",
      title: "STATUTORY OFFENCES, PENALTIES & DIGITAL SEAL FORGERY TERMS",
      subtitle: "Criminal offences, KES 5,000,000 fines, 10-year prison terms, and Section 179 Digital Seal forgery enforcement",
      type: "CARD_GRID_4",
      color: "#991b1b",
      partRef: "PART XIII: SEC 166–180",
      diagramType: "offences_tariff",
      bullets: [
        "Section 166–175 (General Statutory Offences): Criminalizes practicing without Form B license, operating un-licensed firm, or ignoring site stop orders.",
        "Section 176–178 (Statutory Sanctions Tariff): Maximum fine of KES 5,000,000 and imprisonment terms up to 10 years.",
        "Section 179 (Digital Seal Forgery): Forging cryptographic QR seals or falsifying KBERC inspection certificates carries mandatory 5-year prison term without option of a fine.",
        "Corporate Liability: Directors and Lead Professionals of corporate consultancies are held personally liable for gross structural negligence."
      ],
      cardTags: [
        "🚨 Unlicensed Practice Criminalized",
        "⚖️ Fines Up To KES 5M / 10 Yrs",
        "🔐 Digital Seal Forgery (5-Yr Prison)",
        "👔 Personal Corporate Liability"
      ],
      metrics: [
        { label: "MAXIMUM FINE", val: "KES 5.0M" },
        { label: "MAX PRISON TERM", val: "10 YEARS" },
        { label: "SEAL FORGERY", val: "SEC 179 (5 YRS)" },
        { label: "DIRECTOR LIABILITY", val: "PERSONAL" }
      ]
    },
    {
      id: 37,
      badge: "SLIDE 37 • PART XIV & XV (SECTIONS 181–200)",
      title: "DEGREE ACCREDITATION, NBC 2024 & EUROCODES BS EN 1990 MATRIX",
      subtitle: "Accreditation of university degrees, TVET curricula, and statutory alignment with Eurocodes",
      type: "EUROCODE_PYRAMID",
      color: "#0284c7",
      partRef: "PARTS XIV & XV: SEC 181–200",
      diagramType: "eurocode_risk_pyramid",
      bullets: [
        "Section 181–185 (Degree Accreditation): Mandatory KBERC accreditation for university architectural, engineering, and QS degrees.",
        "Section 186–187 (TVET Technical Curricula): Standardization of TVET technical diploma modules for Built Environment Technologists.",
        "Section 188–192 (NBC 2024 Integration): Binding legal integration with National Building Code 2024 standards.",
        "Section 193–200 (Schedule 4 Eurocodes BS EN 1990): Classification of buildings into Risk Classes A to E with mandatory peer review by EBK engineers for high-risk towers."
      ],
      metrics: [
        { label: "DEGREE ACCREDITATION", val: "MANDATORY" },
        { label: "BUILDING CODE", val: "NBC 2024" },
        { label: "EUROCODE STANDARD", val: "BS EN 1990" },
        { label: "PEER REVIEW", val: "CLASS D & E" }
      ]
    },
    {
      id: 38,
      badge: "SLIDE 38 • SCHEDULE 4 BUILDING TIER MATRIX",
      title: "MANDATORY PROFESSIONAL ROLES PER BUILDING RISK TIER",
      subtitle: "Statutory professional team composition required for Building Risk Classes A to E under NBC 2024",
      type: "CARD_GRID_4",
      color: "#0284c7",
      partRef: "SCHEDULE 4 & NBC 2024",
      diagramType: "building_tier_roles",
      bullets: [
        "Classes A & B (CC1 Low Risk): Single-family dwellings & small structures. Requires Registered Architect or TVET Technologist + Structural Engineer foundation sign-off.",
        "Class C (CC2 Medium Risk): Commercial & multi-family residential up to 4 storeys. Requires Lead Architect + Structural Engineer (EBK Cap 530) + Quantity Surveyor + CPM Project Manager.",
        "Classes D & E (CC3 High Risk): Malls, towers 5+ storeys, hospitals. Requires Lead Architect + Lead Structural Eng (EBK) + Mandatory Independent Peer Review Consulting Engineer (EBK).",
        "Full-Time Site Team (Class D & E): Mandatory full-time site CPM, MEP Electrical/Mechanical Engineers, Geotechnical Specialist (Form KBERC-1 soil report), and Landscape Architect."
      ],
      cardTags: [
        "🏠 CC1 Low Risk (Single Family)",
        "🏢 CC2 Medium Risk (Commercial)",
        "🏥 CC3 High Risk (Towers/Malls)",
        "👷 Mandatory Full-Time Site Team"
      ],
      metrics: [
        { label: "CC1 LOW RISK", val: "ARCH / TECH" },
        { label: "CC2 MEDIUM RISK", val: "ARCH + ENG + QS" },
        { label: "CC3 HIGH RISK", val: "PEER REVIEW ENG" },
        { label: "GEOTECH REPORT", val: "FORM KBERC-1" }
      ]
    },
    {
      id: 39,
      badge: "SLIDE 39 • PART XVI–XVIII (SECTIONS 201–208)",
      title: "FINANCIAL MANAGEMENT, AUDITOR-GENERAL AUDITS & KBERC REVENUE",
      subtitle: "KBERC financial management, parliamentary reporting, statutory levies, and Auditor-General oversight",
      type: "DEEP_DIVE",
      color: "#059669",
      partRef: "PARTS XVI–XVIII: SEC 201–208",
      diagramType: "financial_oversight",
      bullets: [
        "Section 201–203 (KBERC Revenue Sources): Registration fees, annual Form B/C license fees, 0.1% approval levies, and parliamentary grants.",
        "Section 204–205 (Financial Year & Estimates): Annual budget estimates submitted to Cabinet Secretary 3 months prior to financial year start.",
        "Section 206–207 (Auditor-General Audit): Mandatory annual audit of KBERC accounts by the Auditor-General under Article 229 of the Constitution.",
        "Section 208 (Annual Report to Parliament): Submission of comprehensive annual performance and financial report to the National Assembly."
      ],
      metrics: [
        { label: "REVENUE LEVY", val: "0.1% APPROVAL" },
        { label: "AUDITOR-GENERAL", val: "ANNUAL (ART 229)" },
        { label: "BUDGET CYCLE", val: "3 MONTHS PRIOR" },
        { label: "PARLIAMENT REPORT", val: "ANNUAL" }
      ]
    },
    {
      id: 40,
      badge: "SLIDE 40 • PART XVI–XVIII (SECTIONS 209–212)",
      title: "REPEAL OF CAP 525, BORAQS DISBANDING & 12-MONTH MIGRATION",
      subtitle: "Disbanding of BORAQS (Sec 211), repeal of Cap 525 (Sec 212), asset transfer, and EBK Cap 530 autonomy",
      type: "DEEP_DIVE",
      color: "#991b1b",
      partRef: "PARTS XVI–XVIII: SEC 209–212",
      diagramType: "repeal_savings_flow",
      bullets: [
        "Section 211 (Disbanding of BORAQS & Asset Transfer): BORAQS established under Cap 525 is officially disbanded; all assets, digital registers, and staff transfer to KBERC.",
        "Section 212 (Repeal of Cap 525): Official repeal of the 1934 Architects and Quantity Surveyors Act (Cap 525). Architectural and QS roles move to KBERC Colleges 1 & 3.",
        "Section 209–210 (12-Month Practitioner Migration Savings): All active BORAQS practitioners granted automatic 12-month license migration into the KBERC Central Digital Register.",
        "EBK Statutory Autonomy (Cap 530 Saved): Engineers Board of Kenya (EBK) is NOT disbanded. Cap 530 remains in full force for engineering registration."
      ],
      metrics: [
        { label: "BORAQS DISBANDED", val: "SEC 211" },
        { label: "CAP 525 REPEALED", val: "SEC 212" },
        { label: "MIGRATION SAVINGS", val: "12 MONTHS" },
        { label: "EBK AUTONOMY", val: "CAP 530 SAVED" }
      ]
    },
    {
      id: 41,
      badge: "SLIDE 41 • STATUTORY SCHEDULES (PART 1: SCH 1–7)",
      title: "STATUTORY SCHEDULES 1 TO 7 — COMPREHENSIVE IMPACT MATRIX",
      subtitle: "Code of Ethics, Tribunal Rules, Board Elections, Eurocodes, CPD, Logbooks & Inter-Agency Protocols",
      type: "CARD_GRID_4",
      color: "#059669",
      partRef: "SCHEDULES 1–7",
      diagramType: "schedules_part1",
      bullets: [
        "Schedule 1 (Ethics Code): Mandatory anti-corruption, conflict of interest, and professional integrity rules.",
        "Schedule 2 (Appeals Tribunal): 60-day appellate hearing procedure, filing fees, and High Court referral rules.",
        "Schedule 3 (Board Elections): Democratic election protocols for 8 Professional Boards and Registrar appointments.",
        "Schedules 4–7: Eurocode Consequence Matrix (Classes A–E), 50 CPD Unit Matrix, Site Logbook rules, Inter-Agency Protocols."
      ],
      cardTags: [
        "📜 Schedule 1 Ethics Code",
        "⚖️ Schedule 2 Tribunal Rules",
        "🏛️ Schedule 3 Board Elections",
        "📊 Schedules 4–7 Standards"
      ],
      metrics: [
        { label: "ETHICS CODE", val: "SCHEDULE 1" },
        { label: "APPEALS RULES", val: "SCHEDULE 2" },
        { label: "EUROCODES", val: "SCHEDULE 4" },
        { label: "CPD MATRIX", val: "SCHEDULE 5" }
      ]
    },
    {
      id: 42,
      badge: "SLIDE 42 • STATUTORY SCHEDULES (PART 2: SCH 8–14)",
      title: "STATUTORY SCHEDULES 8 TO 14 — COMPREHENSIVE IMPACT MATRIX",
      subtitle: "Repeal Savings, Sanctions Tariff, Form Fees, Defect Liability, Scale of Fees, Disaster Fund & Forms",
      type: "CARD_GRID_4",
      color: "#059669",
      partRef: "SCHEDULES 8–14",
      diagramType: "schedules_part2",
      bullets: [
        "Schedule 8 & 9: Cap 525 Repeal savings, 12-month migration window, Disciplinary Hearing Protocols & KES 5M fine tariff.",
        "Schedule 10 & 11: Form A/B/C statutory fee tariffs, 10-Year Defect Liability Risk Allocation Matrix.",
        "Schedule 12 (Minimum Fee Scale): Gazetted 5.0%–6.5% baseline design tariffs & KES 15,000/hr advisory rates.",
        "Schedules 13 & 14: Disaster Relief Fund administration, 10 Mandatory Site Stage Inspection Certificate templates (Forms KBERC-1 to 6)."
      ],
      cardTags: [
        "📜 Schedule 8 & 9 Savings",
        "💵 Schedule 10 & 11 Tariffs",
        "📊 Schedule 12 Fee Scale",
        "🏗️ Schedule 13 & 14 Forms"
      ],
      metrics: [
        { label: "SANCTIONS TARIFF", val: "SCHEDULE 9" },
        { label: "DEFECT LIABILITY", val: "SCHEDULE 11" },
        { label: "FEE SCALE", val: "SCHEDULE 12" },
        { label: "SITE TEMPLATES", val: "SCHEDULE 14" }
      ]
    },
    {
      id: 43,
      badge: "SLIDE 43 • REGULATORY IMPACT ANALYSIS",
      title: "REGULATORY IMPACT ANALYSIS & ECONOMIC COMPLIANCE DOSSIER",
      subtitle: "Macro-economic impact, cost-benefit breakdown, public safety gains, and county revenue growth",
      type: "METRIC_STACK",
      color: "#0284c7",
      partRef: "REGULATORY IMPACT ANALYSIS",
      diagramType: "ria_dossier",
      bullets: [
        "Public Safety Gain: 95% reduction in un-inspected building collapses through mandatory 10-stage inspection forms.",
        "Economic Efficiency: Eliminates double-taxation of consultancies across 47 counties through unified KBERC Form C licensing.",
        "Local Content Growth: 60% local design hours mandate injects over KES 15 Billion annually into Kenyan consultancies.",
        "Consumer Protection: Gazetted fee scales and mandatory PII cover protect developers and property buyers nationwide."
      ],
      metrics: [
        { label: "SAFETY GAIN", val: "95% REDUCTION" },
        { label: "COUNTY DUAL TAX", val: "ELIMINATED" },
        { label: "LOCAL INJECTION", val: "KES 15B/YR" },
        { label: "PII PROTECTION", val: "MANDATORY" }
      ]
    },
    {
      id: 44,
      badge: "END PAGE • PROPOSED LEGISLATIVE DRAFT ACCREDITATION",
      title: "OFFICIAL LEGISLATIVE DRAFT CLOSING & ACCREDITATION DOSSIER",
      subtitle: "Proposed Legislative Consensus Sign-Off & KBERC Public Register Contact Credentials",
      type: "END_PAGE",
      color: "#991b1b",
      partRef: "PROPOSED DRAFT 2026",
      diagramType: "end_badge",
      bullets: [
        "Proposed Legislative Status: Formulated as a new Proposed Master Legislative Reform Draft awaiting formal introduction and tabling in the National Assembly of Kenya.",
        "Lead Author & Legislative Architect: Arch. Brian Nyagonchong'a, Lead Legislative Counsel & Principal Architectural Consultant.",
        "Consensus Foundation: Developed following extensive multi-board consultations (AAK, IEK, IQSK, KIP, COG) and stakeholder engagement.",
        "Central Register Portal: Real-time public API verification at http://localhost:3000/viewer for QR seal validation."
      ],
      metrics: [
        { label: "PROPOSED STATUS", val: "NEW DRAFT 2026" },
        { label: "PARLIAMENT STATUS", val: "AWAITING TABLING" },
        { label: "PUBLIC REGISTER", val: "KBERC API" },
        { label: "LEAD ARCHITECT", val: "ARCH. BRIAN N." }
      ]
    }
  ];

  const currentSlideData = slidesData[currentSlide];

  // Helper renderer to render exact slide components identically with enlarged body text (18px-19px), statutory card footers, and compact slide footer
  const renderSlideInnerContent = (slide: typeof slidesData[0]) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "20px" }}>
        {/* Slide Header */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span style={{
                fontSize: "12px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase",
                color: slide.color, background: `${slide.color}15`, padding: "6px 16px", borderRadius: "6px",
                border: `1.5px solid ${slide.color}40`, boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                {slide.badge}
              </span>
              <span style={{
                fontSize: "12px", fontWeight: 800, color: "#404040", background: "#F5F5F5", padding: "6px 14px", borderRadius: "6px", border: "1px solid #D4D4D4"
              }}>
                {slide.partRef}
              </span>
            </div>

            <span style={{ fontSize: "11.5px", fontWeight: 900, color: "#666666", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              PROPOSED LEGISLATIVE CONSENSUS BILL • 2026 DRAFT
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(30px, 3.2vw, 42px)", fontWeight: 900, color: "#0A0A0A", margin: "0 0 8px 0",
            fontFamily: "'Georgia', 'Playfair Display', serif", letterSpacing: "-0.02em", lineHeight: 1.15
          }}>
            {slide.title}
          </h2>

          <p style={{ fontSize: "17px", color: "#404040", margin: 0, fontWeight: 600, lineHeight: 1.5, fontFamily: "'Georgia', serif" }}>
            {slide.subtitle}
          </p>
        </div>

        {/* COVER PAGE (SLIDE 1) */}
        {slide.type === 'COVER_PAGE' && (
          <div style={{
            display: "flex", flexDirection: "column", gap: "28px", margin: "12px 0", flex: 1, justifyContent: "center", position: "relative", zIndex: 1
          }}>
            <div style={{
              background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)", border: "2.5px solid #991B1B", borderRadius: "18px", padding: "40px",
              display: "flex", alignItems: "center", gap: "36px", boxShadow: "0 12px 36px rgba(153,27,27,0.08)"
            }}>
              <div style={{
                width: "120px", height: "120px", borderRadius: "50%", background: "#991B1B",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px", flexShrink: 0,
                boxShadow: "0 14px 40px rgba(153,27,27,0.3)"
              }}>
                🇰🇪
              </div>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 900, color: "#991B1B", textTransform: "uppercase", letterSpacing: "0.25em", display: "block", marginBottom: "8px" }}>
                  REPUBLIC OF KENYA • PROPOSED LEGISLATIVE CONSENSUS DRAFT 2026
                </span>
                <h3 style={{ fontSize: "28px", fontWeight: 900, color: "#0A0A0A", margin: "0 0 10px 0", fontFamily: "'Georgia', serif" }}>
                  Proposed Master Statutory Treatise &amp; Legislative Reform Dossier
                </h3>
                <p style={{ fontSize: "17px", color: "#262626", margin: 0, lineHeight: 1.75, fontFamily: "'Georgia', serif" }}>
                  Proposed Master Legislative Draft consolidating 208 statutory sections, 14 schedules, 10 stage inspection forms, and 8 regulated disciplines into the Kenya Built Environment Regulatory Council Act 2026 (Awaiting Formal Parliamentary Tabling).
                </p>
                <p style={{ fontSize: "14.5px", fontWeight: 800, color: "#525252", margin: "14px 0 0 0" }}>
                  Lead Author &amp; Legislative Architect: <strong style={{ color: "#0A0A0A" }}>Arch. Brian Nyagonchong&apos;a</strong> (Lead Counsel)
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {slide.metrics.map((m, idx) => (
                <div key={idx} style={{ background: "#FFFFFF", border: "1px solid #E5E5E5", borderLeft: "6px solid #991B1B", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.02)" }}>
                  <span style={{ fontSize: "11px", fontWeight: 900, color: "#666666", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "4px" }}>{m.label}</span>
                  <span style={{ fontSize: "28px", fontWeight: 900, color: "#991B1B", fontFamily: "'Georgia', serif" }}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* END PAGE (SLIDE 44) */}
        {slide.type === 'END_PAGE' && (
          <div style={{
            display: "flex", flexDirection: "column", gap: "28px", margin: "12px 0", flex: 1, justifyContent: "center", position: "relative", zIndex: 1
          }}>
            <div style={{
              background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)", border: "2.5px solid #991B1B", borderRadius: "18px", padding: "40px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px", boxShadow: "0 12px 36px rgba(153,27,27,0.08)"
            }}>
              <div style={{
                width: "90px", height: "90px", borderRadius: "50%", background: "#059669",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "42px", color: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(5,150,105,0.3)"
              }}>
                ✓
              </div>
              <span style={{ fontSize: "13px", fontWeight: 900, color: "#059669", textTransform: "uppercase", letterSpacing: "0.25em" }}>
                PROPOSED LEGISLATIVE CONSENSUS DRAFT SIGN-OFF
              </span>
              <h3 style={{ fontSize: "30px", fontWeight: 900, color: "#0A0A0A", margin: 0, fontFamily: "'Georgia', serif" }}>
                Proposed Master Reform Bill • 100% Statutory Draft Coverage Complete (44 Slides)
              </h3>
              <p style={{ fontSize: "17px", color: "#262626", margin: 0, maxWidth: "760px", lineHeight: 1.75, fontFamily: "'Georgia', serif" }}>
                Formulated following multi-board consensus (AAK, IEK, IQSK, KIP, COG) as a new proposed draft awaiting formal introduction and tabling in the National Assembly of Kenya.
              </p>
            </div>
          </div>
        )}

        {/* 4-COLUMN STATUTORY CARD GRID WITH 18PX BODY & CARD FOOTER BADGES */}
        {slide.type === 'CARD_GRID_4' && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", margin: "8px 0", flex: 1, alignItems: "stretch", position: "relative", zIndex: 1 }}>
            {slide.bullets.map((b, bIdx) => (
              <div key={bIdx} style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)", border: "1.5px solid #E5E5E5", borderTop: `6px solid ${slide.color}`,
                padding: "24px 22px", borderRadius: "14px", display: "flex", flexDirection: "column", justifyContent: "space-between",
                boxShadow: "0 6px 20px rgba(0,0,0,0.03)"
              }}>
                <div>
                  <div style={{ fontSize: "30px", fontWeight: 900, color: slide.color, fontFamily: "'Georgia', serif", marginBottom: "10px", lineHeight: 1 }}>
                    0{bIdx + 1}
                  </div>
                  <p style={{ fontSize: "18px", color: "#0A0A0A", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {b}
                  </p>
                </div>

                {/* Statutory Card Footer Badge to eliminate bottom whitespace */}
                <div style={{
                  marginTop: "16px", paddingTop: "12px", borderTop: "1px dashed #E5E5E5",
                  fontSize: "12px", fontWeight: 800, color: slide.color, background: `${slide.color}10`,
                  padding: "8px 12px", borderRadius: "6px", display: "inline-block"
                }}>
                  {slide.cardTags && slide.cardTags[bIdx] ? slide.cardTags[bIdx] : `📌 Statutory Key Provision 0${bIdx + 1}`}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 8-DISCIPLINE MATRIX GRID */}
        {slide.type === 'COLLEGES_GRID_8' && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", margin: "8px 0", flex: 1, alignItems: "stretch", position: "relative", zIndex: 1 }}>
            {[
              { n: "1. Architecture", desc: "Building envelope, spatial ergonomics, aesthetic specifications.", c: "#991B1B" },
              { n: "2. Structural Eng", desc: "Foundation dynamics, load-bearing design, seismic safety.", c: "#0284C7" },
              { n: "3. Quantity Surveying", desc: "Cost planning, BOQ audit, contract administration.", c: "#059669" },
              { n: "4. Physical Planning", desc: "County spatial plans, regional zoning, land use controls.", c: "#7C3AED" },
              { n: "5. Landscape Arch", desc: "Site ecology, environmental landscape planning.", c: "#B45309" },
              { n: "6. Interior Design", desc: "Interior fire ergonomics, material safety standards.", c: "#BE185D" },
              { n: "7. CPM Project Mgmt", desc: "Site project management, quality assurance.", c: "#4338CA" },
              { n: "8. TVET Technologists", desc: "Statutory indexing for Higher Diploma & B.Tech cadres.", c: "#059669" }
            ].map((col, cIdx) => (
              <div key={cIdx} style={{ background: "#FFFFFF", border: "1.5px solid #E5E5E5", borderLeft: `6px solid ${col.c}`, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.02)" }}>
                <h4 style={{ fontSize: "16.5px", fontWeight: 900, color: col.c, margin: "0 0 8px 0" }}>{col.n}</h4>
                <p style={{ fontSize: "15px", color: "#333333", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{col.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* FULL-WIDTH HORIZONTAL FLOWCHART */}
        {slide.type === 'FLOWCHART_PROCESS' && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "8px 0", flex: 1, justifyContent: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${slide.bullets.length}, 1fr)`, gap: "18px" }}>
              {slide.bullets.map((b, bIdx) => (
                <div key={bIdx} style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)", border: "1.5px solid #E5E5E5", borderTop: `6px solid ${slide.color}`,
                  padding: "24px 20px", borderRadius: "14px", position: "relative", boxShadow: "0 6px 20px rgba(0,0,0,0.03)"
                }}>
                  <span style={{ fontSize: "12px", fontWeight: 900, color: slide.color, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "8px" }}>
                    STAGE {bIdx + 1}
                  </span>
                  <p style={{ fontSize: "17.5px", color: "#0A0A0A", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* METRIC STACK & TIER COMPARISON */}
        {slide.type === 'METRIC_STACK' && (
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "28px", margin: "8px 0", flex: 1, alignItems: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {slide.bullets.map((b, bIdx) => (
                <div key={bIdx} style={{ background: "#FFFFFF", border: "1.5px solid #E5E5E5", borderLeft: `6px solid ${slide.color}`, padding: "18px 22px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.02)" }}>
                  <p style={{ fontSize: "18px", color: "#0A0A0A", margin: 0, lineHeight: 1.65, fontWeight: 500 }}>{b}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)", border: "2px solid #E5E5E5", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)" }}>
              {slide.metrics.map((m, idx) => (
                <div key={idx} style={{ background: "#FFFFFF", border: "1px solid #E5E5E5", padding: "16px 22px", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#525252" }}>{m.label}</span>
                  <span style={{ fontSize: "24px", fontWeight: 900, color: slide.color, fontFamily: "'Georgia', serif" }}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FULL-HEIGHT EUROCODE RISK PYRAMID */}
        {slide.type === 'EUROCODE_PYRAMID' && (
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "28px", margin: "8px 0", flex: 1, alignItems: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
              <div style={{ background: "#991B1B", color: "#FFFFFF", padding: "16px", borderRadius: "10px", textAlign: "center", fontWeight: 900, fontSize: "15px", boxShadow: "0 6px 18px rgba(153,27,27,0.2)" }}>
                CLASS E (CC3): Towers &amp; Hospitals — Mandatory Peer Review
              </div>
              <div style={{ background: "#B91C1C", color: "#FFFFFF", padding: "16px", borderRadius: "10px", textAlign: "center", fontWeight: 800, fontSize: "15px", boxShadow: "0 6px 18px rgba(185,28,28,0.2)" }}>
                CLASS D (CC3): Public Malls &amp; Assembly Buildings — Peer Review
              </div>
              <div style={{ background: "#0284C7", color: "#FFFFFF", padding: "16px", borderRadius: "10px", textAlign: "center", fontWeight: 700, fontSize: "15px", boxShadow: "0 6px 18px rgba(2,132,199,0.2)" }}>
                CLASS C (CC2): Commercial &amp; Multi-Family Residential
              </div>
              <div style={{ background: "#059669", color: "#FFFFFF", padding: "16px", borderRadius: "10px", textAlign: "center", fontWeight: 700, fontSize: "15px", boxShadow: "0 6px 18px rgba(5,150,105,0.2)" }}>
                CLASSES A &amp; B (CC1): Single-Family Dwellings &amp; Small Structures
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {slide.bullets.map((b, bIdx) => (
                <div key={bIdx} style={{ background: "#FFFFFF", border: "1.5px solid #E5E5E5", borderLeft: `6px solid ${slide.color}`, padding: "18px 22px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.02)" }}>
                  <p style={{ fontSize: "18px", color: "#0A0A0A", margin: 0, lineHeight: 1.65, fontWeight: 500 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2-COLUMN ASYMMETRIC DEEP DIVE (DEFAULT FOR OTHER CONTENT SLIDES) */}
        {slide.type === 'DEEP_DIVE' && (
          <div style={{
            display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "32px", margin: "8px 0", flex: 1, alignItems: "center", position: "relative", zIndex: 1
          }}>
            <div style={{
              background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)", border: "2px solid #E5E5E5", borderRadius: "16px", padding: "32px",
              height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.03)"
            }}>
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "18px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <div style={{ fontSize: "56px" }}>🏛️</div>
                <span style={{ fontSize: "14.5px", fontWeight: 900, color: slide.color, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                  {slide.partRef} STATUTORY PROVISIONS
                </span>
                <p style={{ fontSize: "16px", color: "#333333", margin: 0, lineHeight: 1.7, maxWidth: "440px", fontWeight: 500, fontFamily: "'Georgia', serif" }}>
                  Comprehensive legislative analysis under the Proposed Built Environment Professions &amp; Practice Bill 2026 covering statutory sections, mandates, and enforcement rules.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {slide.bullets.map((b, bIdx) => (
                <div key={bIdx} style={{
                  background: "#FFFFFF", border: "1.5px solid #E5E5E5", borderLeft: `6px solid ${slide.color}`,
                  padding: "18px 22px", borderRadius: "14px", display: "flex", alignItems: "flex-start", gap: "14px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.02)"
                }}>
                  <span style={{ fontSize: "18px", color: slide.color, flexShrink: 0, marginTop: "2px" }}>◆</span>
                  <p style={{ fontSize: "18px", color: "#0A0A0A", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide Metrics & SUBTLE/COMPACT Bottom Footer Toolbar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1.5px solid #E5E5E5", paddingTop: "14px", position: "relative", zIndex: 1
        }}>
          <div style={{ display: "flex", gap: "32px" }}>
            {slide.metrics.map((m, mIdx) => (
              <div key={mIdx} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "10.5px", fontWeight: 900, color: "#737373", textTransform: "uppercase", letterSpacing: "0.12em" }}>{m.label}</span>
                <span style={{ fontSize: "18px", fontWeight: 900, color: "#0A0A0A", fontFamily: "'Georgia', serif" }}>{m.val}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "10.5px", fontWeight: 800, color: "#737373", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            PROPOSED LEGISLATIVE CONSENSUS DRAFT 2026 • 208 SECTIONS • 14 SCHEDULES
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF8F5",
      color: "#0A0A0A",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "20px 28px 64px"
    }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
        
        {/* Top Header Navigation Bar */}
        <header style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          background: "#FFFFFF",
          padding: "16px 32px",
          borderRadius: "12px",
          border: "1px solid #E5E5E5",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/" style={{ color: "#666666", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#CCCCCC" }}>›</span>
            <Link href="/viewer" style={{ color: "#666666", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>Viewer Portal</Link>
            <span style={{ color: "#CCCCCC" }}>›</span>
            <Link href="/viewer/about" style={{ color: "#666666", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>About &amp; Treatise</Link>
            <span style={{ color: "#CCCCCC" }}>›</span>
            <span style={{ color: "#991B1B", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>ENCYCLOPEDIC MASTER DECK (44 SLIDES)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Link
              href="/viewer/about"
              style={{
                padding: "9px 20px", fontSize: "13px", fontWeight: 800, borderRadius: "6px",
                background: "#FAF8F5", color: "#0A0A0A", border: "1px solid #D4D4D4", textDecoration: "none"
              }}
            >
              📄 Read Original Treatise Document
            </Link>

            <button
              onClick={handleExportPresentationPdf}
              disabled={isExportingPresentation}
              style={{
                padding: "9px 22px", fontSize: "13px", fontWeight: 900, borderRadius: "6px",
                background: isExportingPresentation ? "#A3A3A3" : "#991B1B",
                color: "#FFFFFF", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
                boxShadow: "0 4px 12px rgba(153,27,27,0.2)"
              }}
            >
              {isExportingPresentation ? (
                <>⏳ Exporting PDF... (Slide {exportProgress} of 44)</>
              ) : (
                <>📥 Export Master Presentation PDF (16:9)</>
              )}
            </button>
          </div>
        </header>

        {/* 44-SLIDE EDITORIAL MAGAZINE PRESENTATION DECK */}
        <div>
          {/* Navigation & Progress Toolbar */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "12px",
            background: "#FFFFFF", padding: "16px 28px", borderRadius: "12px",
            border: "1px solid #E5E5E5", marginBottom: "20px"
          }}>
            {/* Top Editorial Progress Hairline */}
            <div style={{ width: "100%", height: "4px", background: "#F5F5F5", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{
                height: "100%", width: `${((currentSlide + 1) / 44) * 100}%`,
                background: "#991B1B", transition: "width 0.3s ease"
              }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <button
                  onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
                  disabled={currentSlide === 0}
                  style={{
                    padding: "8px 22px", fontSize: "13px", fontWeight: 800, borderRadius: "6px",
                    background: currentSlide === 0 ? "#F5F5F5" : "#991B1B", color: currentSlide === 0 ? "#A3A3A3" : "#FFFFFF",
                    border: "none", cursor: currentSlide === 0 ? "not-allowed" : "pointer"
                  }}
                >
                  ◀ Previous Slide
                </button>

                <button
                  onClick={() => setCurrentSlide(prev => Math.min(prev + 1, 43))}
                  disabled={currentSlide === 43}
                  style={{
                    padding: "8px 22px", fontSize: "13px", fontWeight: 800, borderRadius: "6px",
                    background: currentSlide === 43 ? "#F5F5F5" : "#991B1B", color: currentSlide === 43 ? "#A3A3A3" : "#FFFFFF",
                    border: "none", cursor: currentSlide === 43 ? "not-allowed" : "pointer"
                  }}
                >
                  Next Slide ▶
                </button>

                <span style={{ fontSize: "14.5px", fontWeight: 800, color: "#0A0A0A" }}>
                  Slide <strong style={{ color: "#991B1B", fontFamily: "'Georgia', serif" }}>{String(currentSlide + 1).padStart(2, '0')}</strong> of 44
                </span>
              </div>

              {/* Jump to Slide Selector */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "11.5px", fontWeight: 900, color: "#737373", textTransform: "uppercase", letterSpacing: "0.1em" }}>Jump to Slide:</span>
                <select
                  value={currentSlide}
                  onChange={(e) => setCurrentSlide(Number(e.target.value))}
                  style={{
                    background: "#FAF8F5", color: "#0A0A0A", border: "1px solid #D4D4D4",
                    padding: "7px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, outline: "none"
                  }}
                >
                  {slidesData.map((s, idx) => (
                    <option key={s.id} value={idx}>
                      {String(s.id).padStart(2, '0')}. {s.title.substring(0, 50)}...
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ACTIVE SLIDE DISPLAY */}
          <div style={{ position: "relative" }}>
            <div
              className="presentation-slide-item"
              style={{
                aspectRatio: "16 / 9",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderTop: `6px solid ${currentSlideData.color}`,
                borderRadius: "16px",
                padding: "44px 52px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 16px 48px rgba(0, 0, 0, 0.04)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Oversized Watermark Slide Number */}
              <div style={{
                position: "absolute", top: "-20px", right: "20px",
                fontSize: "240px", fontWeight: 900, color: "#F5F5F5",
                fontFamily: "'Georgia', serif", pointerEvents: "none", lineHeight: 1
              }}>
                {String(currentSlideData.id).padStart(2, '0')}
              </div>

              {renderSlideInnerContent(currentSlideData)}
            </div>
          </div>

          {/* Slide Selector Thumbnails Grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(15, 1fr)", gap: "10px", marginTop: "28px"
          }}>
            {slidesData.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  background: currentSlide === idx ? "#FFFFFF" : "#FAF8F5",
                  border: currentSlide === idx ? `2px solid ${s.color}` : "1px solid #E5E5E5",
                  boxShadow: currentSlide === idx ? `0 4px 14px ${s.color}20` : "none",
                  borderRadius: "8px", padding: "10px 8px", textAlign: "left", cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                <span style={{ fontSize: "10px", fontWeight: 900, color: s.color, display: "block", marginBottom: "3px" }}>
                  S{String(s.id).padStart(2, '0')}
                </span>
                <span style={{ fontSize: "10.5px", fontWeight: 800, color: currentSlide === idx ? "#0A0A0A" : "#525252", lineHeight: 1.25, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* OFFSCREEN EXPORT DECK CONTAINER FOR COMPLETE 44-PAGE LANDSCAPE PDF EXPORT */}
          <div
            id="pdf-export-slides-container"
            style={{
              position: "absolute", top: "-99999px", left: "-99999px",
              width: "1600px", display: "flex", flexDirection: "column", gap: "40px"
            }}
          >
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                className="pdf-export-slide-item"
                style={{
                  width: "1600px",
                  height: "900px",
                  background: "#FFFFFF",
                  borderTop: `8px solid ${slide.color}`,
                  borderRadius: "16px",
                  padding: "44px 52px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  boxSizing: "border-box",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "20px", fontSize: "240px", fontWeight: 900, color: "#F5F5F5", fontFamily: "'Georgia', serif", pointerEvents: "none" }}>
                  {String(slide.id).padStart(2, '0')}
                </div>

                {renderSlideInnerContent(slide)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
