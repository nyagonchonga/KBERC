'use client';

import { useState } from "react";
import Link from "next/link";

interface EnactmentTask {
  id: string;
  partNo: string;
  title: string;
  sectionRef: string;
  phase: "Phase 1: Immediate (Day 0–30)" | "Phase 2: Institution Setup (Months 1–3)" | "Phase 3: Regulations & Registers (Months 3–6)" | "Phase 4: Operationalization (Months 6–12)" | "Phase 5: Full Repeal & Transition (Month 12+)";
  category: "Institutional Creation" | "Registration & Licensing" | "Risk & Compliance" | "Enforcement & Discipline" | "Legacy Transition";
  responsibleAuthority: "Cabinet Secretary" | "KBERC Council" | "Registrar & Secretariat" | "Professional Regulators" | "Appeals Tribunal" | "Compliance Inspectors" | "County Building Desks";
  priority: "Critical Path" | "High" | "Medium";
  deliverable: string;
  details: string;
}

const ENACTMENT_TASKS: EnactmentTask[] = [
  // Phase 1: Immediate (Day 0–30)
  {
    id: "TASK-01",
    partNo: "Part I",
    title: "Issue Commencement Gazette Notice",
    sectionRef: "Section 1",
    phase: "Phase 1: Immediate (Day 0–30)",
    category: "Institutional Creation",
    responsibleAuthority: "Cabinet Secretary",
    priority: "Critical Path",
    deliverable: "Kenya Gazette Legal Notice specifying official Commencement Date",
    details: "Draft and publish formal Kenya Gazette notice putting the Act into operation across all 47 Counties. Enables staged or unified statutory commencement."
  },
  {
    id: "TASK-02",
    partNo: "Part I",
    title: "Promulgate 37 Statutory Legal Definitions",
    sectionRef: "Section 2",
    phase: "Phase 1: Immediate (Day 0–30)",
    category: "Institutional Creation",
    responsibleAuthority: "Cabinet Secretary",
    priority: "High",
    deliverable: "Statutory Practice Guidelines & Definitions Manual",
    details: "Formally issue legal definitions for Lead Professional, Candidate Practitioner, Digital QR Seal, Eurocode Risk Class, and Stamp Renting to prevent ambiguity."
  },
  {
    id: "TASK-03",
    partNo: "Part II",
    title: "Appoint Inaugural KBERC Apex Council Members",
    sectionRef: "Sections 6, 7 & 11",
    phase: "Phase 1: Immediate (Day 0–30)",
    category: "Institutional Creation",
    responsibleAuthority: "Cabinet Secretary",
    priority: "Critical Path",
    deliverable: "Gazette Notice of Apex Council appointments (Chairperson & 11 Members)",
    details: "Nominate and gazette qualified representatives from architecture, quantity surveying, engineering, urban planning, and state departments."
  },
  {
    id: "TASK-04",
    partNo: "Part III",
    title: "Constitute Interim Regulatory Secretariat",
    sectionRef: "Section 17",
    phase: "Phase 1: Immediate (Day 0–30)",
    category: "Institutional Creation",
    responsibleAuthority: "Cabinet Secretary",
    priority: "High",
    deliverable: "Interim Secretariat operational structure & secondment orders",
    details: "Second key administrative staff from the State Department of Public Works to manage initial administrative setup before permanent Registrar recruitment."
  },

  // Phase 2: Institution Setup (Months 1–3)
  {
    id: "TASK-05",
    partNo: "Part III",
    title: "Recruit Chief Executive Officer / Registrar",
    sectionRef: "Section 16",
    phase: "Phase 2: Institution Setup (Months 1–3)",
    category: "Institutional Creation",
    responsibleAuthority: "KBERC Council",
    priority: "Critical Path",
    deliverable: "Competitive recruitment report & Gazette appointment of the Registrar",
    details: "Conduct competitive public recruitment for the KBERC Chief Executive Officer/Registrar as official custodian of the national professional register."
  },
  {
    id: "TASK-06",
    partNo: "Part II",
    title: "Establish 5 Mandatory Standing Committees",
    sectionRef: "Section 15",
    phase: "Phase 2: Institution Setup (Months 1–3)",
    category: "Institutional Creation",
    responsibleAuthority: "KBERC Council",
    priority: "High",
    deliverable: "Committee Charters for Registration, Disciplinary, Standards, Finance & CPD Committees",
    details: "Formally appoint Council members and independent experts to statutory standing committees required for core regulatory functions."
  },
  {
    id: "TASK-07",
    partNo: "Part IV",
    title: "Establish Joint Co-ordination Forum with EBK",
    sectionRef: "Sections 23 & 24",
    phase: "Phase 2: Institution Setup (Months 1–3)",
    category: "Institutional Creation",
    responsibleAuthority: "KBERC Council",
    priority: "Critical Path",
    deliverable: "Signed Inter-Board Coordination Protocol between KBERC, BORAQS & EBK (Cap 530)",
    details: "Operationalize the Federated Autonomy model to harmonize professional scopes without usurping profession-specific statutory mandates under Cap 530."
  },
  {
    id: "TASK-08",
    partNo: "Part V",
    title: "Enact Mandatory Student Indexing Rules",
    sectionRef: "Section 27(1)",
    phase: "Phase 2: Institution Setup (Months 1–3)",
    category: "Registration & Licensing",
    responsibleAuthority: "Registrar & Secretariat",
    priority: "High",
    deliverable: "National Student Indexing Portal & 90-Day University Reporting Protocol",
    details: "Mandate all universities and TVET institutions to index undergraduate students within 90 days of admission to track industrial attachment."
  },

  // Phase 3: Regulations & Registers (Months 3–6)
  {
    id: "TASK-09",
    partNo: "Part V",
    title: "Gazette 4-Stage Professional Registration Regulations",
    sectionRef: "Part V (Sections 25–45)",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Registration & Licensing",
    responsibleAuthority: "KBERC Council",
    priority: "Critical Path",
    deliverable: "Built Environment Professions Registration Regulations 2026",
    details: "Publish rules for qualification recognition, candidate practitioner assessments, foreign professional licensing, and technologist pathways."
  },
  {
    id: "TASK-10",
    partNo: "Part VI",
    title: "Accredit Built Environment Technologists & TVET Pathways",
    sectionRef: "Section 28 & Schedule 3",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Registration & Licensing",
    responsibleAuthority: "Professional Regulators",
    priority: "High",
    deliverable: "TVET Higher Diploma & B.Tech Professional Practice Examination (PPE) Guidelines",
    details: "Establish statutory practice scopes and professional examination progression pathways for TVET Higher Diploma and B.Tech graduates."
  },
  {
    id: "TASK-11",
    partNo: "Part VII",
    title: "Launch National Digital Professional Master Register",
    sectionRef: "Section 32 & 46",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Registration & Licensing",
    responsibleAuthority: "Registrar & Secretariat",
    priority: "Critical Path",
    deliverable: "Public online searchable API database of all registered practitioners & firms",
    details: "Deploy secure digital registry integrated with eCitizen and 47 County Building Approval Portals for real-time verification of practising licenses."
  },
  {
    id: "TASK-12",
    partNo: "Part VIII",
    title: "Enforce 51% Local Ownership for Corporate Consultancies",
    sectionRef: "Section 45 & Part VIII",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Registration & Licensing",
    responsibleAuthority: "Registrar & Secretariat",
    priority: "High",
    deliverable: "Corporate Consulting Firm Practice Certificates & Shareholding Verification Audit",
    details: "Mandate that licensed corporate consultancies & joint ventures must have at least 51% voting equity held by registered local Lead Professionals."
  },
  {
    id: "TASK-13",
    partNo: "Part IX",
    title: "Publish Eurocode Building Risk Classification Rules",
    sectionRef: "Part IX (Sections 75–89) & Schedule 4",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Risk & Compliance",
    responsibleAuthority: "KBERC Council",
    priority: "Critical Path",
    deliverable: "Eurocode Risk Classes 1 to 5 & Independent Structural Peer Review Guidelines",
    details: "Promulgate rules categorizing projects by structural complexity (Classes A to E) to dictate mandatory single (Class D) and dual (Class E) peer reviews."
  },
  {
    id: "TASK-14",
    partNo: "Part X",
    title: "Formulate Professional Indemnity Insurance (PII) Schedule",
    sectionRef: "Part X (Sections 60–74)",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Risk & Compliance",
    responsibleAuthority: "KBERC Council",
    priority: "High",
    deliverable: "Mandatory Minimum Professional Indemnity Cover Schedule (Class A: KES 20M to E: 200M+)",
    details: "Collaborate with Insurance Regulatory Authority (IRA) to set minimum PII thresholds required before annual practising certificates are issued."
  },
  {
    id: "TASK-15",
    partNo: "Part X",
    title: "Establish 1:1 CPD Credit Transfer w/ EBK",
    sectionRef: "Part X & Schedule 5",
    phase: "Phase 3: Regulations & Registers (Months 3–6)",
    category: "Risk & Compliance",
    responsibleAuthority: "Professional Regulators",
    priority: "Medium",
    deliverable: "CPD Accreditation Framework & 50-Unit Credit Audit System",
    details: "Enforce mandatory 50 annual CPD units with automatic 1:1 credit recognition for EBK-approved engineering workshops under Cap 530."
  },

  // Phase 4: Operationalization (Months 6–12)
  {
    id: "TASK-16",
    partNo: "Part XI",
    title: "Gazette Authorized Built Environment Inspectors",
    sectionRef: "Section 95",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Enforcement & Discipline",
    responsibleAuthority: "Cabinet Secretary",
    priority: "Critical Path",
    deliverable: "Gazette Notice of Authorized Built Environment Compliance Officers",
    details: "Appoint and gazette inspectors across all 47 Counties with powers of site entry, structural audits, Work-Stop orders, and evidence seizure."
  },
  {
    id: "TASK-17",
    partNo: "Part XII",
    title: "Operationalize Disciplinary Board & Joint Panel w/ EBK",
    sectionRef: "Part XII (Sections 100–119) & Schedule 9",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Enforcement & Discipline",
    responsibleAuthority: "KBERC Council",
    priority: "High",
    deliverable: "Disciplinary Board Rules of Procedure & Joint Engineering Panel Charter",
    details: "Establish formal procedures for investigating professional misconduct, site collapses, stamp renting, and joint disciplinary hearings with EBK (Sec 102)."
  },
  {
    id: "TASK-18",
    partNo: "Part XIII",
    title: "Constitute Built Environment Appeals Tribunal",
    sectionRef: "Part XIII (Sections 120–135) & Schedule 2",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Enforcement & Discipline",
    responsibleAuthority: "Appeals Tribunal",
    priority: "High",
    deliverable: "Appeals Tribunal Registry & 60-Day Hearing Calendar",
    details: "Swear in Tribunal members (Chaired by a High Court Advocate) to hear appeals from Council registration rejections or disciplinary sanctions."
  },
  {
    id: "TASK-19",
    partNo: "Part XIV",
    title: "Deploy Cryptographic Digital QR Seals & Anti-Stamp Renting",
    sectionRef: "Section 148 & Schedule 6",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Enforcement & Discipline",
    responsibleAuthority: "Registrar & Secretariat",
    priority: "Critical Path",
    deliverable: "Cryptographic Digital QR Seal System & Serialized Physical Stamp Register",
    details: "Roll out serialized digital stamps to render un-sealed building plans legally void and enforce KES 2.5M fines for stamp renting."
  },
  {
    id: "TASK-20",
    partNo: "Part XV",
    title: "Integrate 10-Form Site Inspection Workflow in 47 Counties",
    sectionRef: "Sections 156–170 & Schedule 14",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Risk & Compliance",
    responsibleAuthority: "County Building Desks",
    priority: "Critical Path",
    deliverable: "47 County e-Permit API Integration for Forms KBERC-1 to 6 Sign-Offs",
    details: "Deploy 10 statutory site inspection sign-off certificates through County Building Control Desks prior to issuing a Certificate of Occupancy."
  },
  {
    id: "TASK-21",
    partNo: "Part XVI",
    title: "Operationalize 6-Hour Emergency Collapse Audit Protocol",
    sectionRef: "Section 168 & Schedule 13",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Enforcement & Discipline",
    responsibleAuthority: "Compliance Inspectors",
    priority: "High",
    deliverable: "Disaster Relief Fund & 6-Hour Collapse Evidence Impoundment Protocol",
    details: "Establish rapid forensic audit team dispatched within 6 hours of building collapse to impound site evidence, audit logbooks, and report to ODPP."
  },
  {
    id: "TASK-22",
    partNo: "Part XVII",
    title: "Enforce 10-Year Statutory Design Defect Liability",
    sectionRef: "Sections 175–183 & Schedule 11",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Risk & Compliance",
    responsibleAuthority: "Professional Regulators",
    priority: "High",
    deliverable: "10-Year Defect Liability Register & Joint Contractor-Consultant Contracts",
    details: "Enforce statutory 10-year defect liability allocation between architects, structural engineers, QSs, and main contractors for structural failures."
  },
  {
    id: "TASK-23",
    partNo: "Part XVIII",
    title: "Gazette Scale of Minimum Professional Fees & Tariffs",
    sectionRef: "Section 185 & Schedule 12",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Risk & Compliance",
    responsibleAuthority: "Cabinet Secretary",
    priority: "High",
    deliverable: "Co-Gazetted Professional Scale of Fees (5.0%–6.5% Baseline Tariffs)",
    details: "Cabinet Secretary gazettes minimum professional fee scales and KES 10,000–15,000/hr advisory rates in joint consultation with EBK under Cap 530."
  },
  {
    id: "TASK-24",
    partNo: "Part XIX",
    title: "Publish Annual Parliamentary Performance Report",
    sectionRef: "Section 184",
    phase: "Phase 4: Operationalization (Months 6–12)",
    category: "Institutional Creation",
    responsibleAuthority: "Cabinet Secretary",
    priority: "Medium",
    deliverable: "KBERC Annual Performance & PFM Act Financial Report before Parliament",
    details: "Table KBERC annual performance, audited accounts, and disaster fund expenditures before the National Assembly and Senate."
  },

  // Phase 5: Full Repeal & Transition (Month 12+)
  {
    id: "TASK-25",
    partNo: "Part XX",
    title: "Execute Legacy Practitioners 12-Month Grace Migration",
    sectionRef: "Section 211",
    phase: "Phase 5: Full Repeal & Transition (Month 12+)",
    category: "Legacy Transition",
    responsibleAuthority: "Professional Regulators",
    priority: "Critical Path",
    deliverable: "100% Migrated Practitioner Register under KBERC Unified Master Register",
    details: "Manage 12-month grace period for existing Cap 525 (BORAQS) and Cap 530 registered professionals to transition seamlessly without re-examination."
  },
  {
    id: "TASK-26",
    partNo: "Part XX",
    title: "Transfer Assets & Records from BORAQS to KBERC",
    sectionRef: "Section 211(4)",
    phase: "Phase 5: Full Repeal & Transition (Month 12+)",
    category: "Legacy Transition",
    responsibleAuthority: "KBERC Council",
    priority: "Medium",
    deliverable: "Audited Asset, Financial & Register Transfer Report",
    details: "Transfer physical assets, digital records, and active register archives from legacy BORAQS secretariat to KBERC Apex Council."
  },
  {
    id: "TASK-27",
    partNo: "Part XX",
    title: "Formally Repeal Cap 525 (Architects & QS Act)",
    sectionRef: "Section 212",
    phase: "Phase 5: Full Repeal & Transition (Month 12+)",
    category: "Legacy Transition",
    responsibleAuthority: "Cabinet Secretary",
    priority: "Critical Path",
    deliverable: "Effective Gazette Legal Notice for 100% Repeal of Cap 525",
    details: "Formally repeal legacy colonial-era 1934 Architects and Quantity Surveyors Act (Cap 525) upon completion of full KBERC operationalization."
  }
];

const ANNUAL_CALENDAR = [
  {
    quarter: "Q1: January – March",
    theme: "Licensing, Register Publication & University Audits",
    badge: "Q1 Regulatory Cycle",
    color: "#0284C7",
    activities: [
      { date: "Jan 1", title: "Publish National Digital Register", desc: "Official Kenya Gazette notice of all active lead professionals, technologists, and registered firms (Sec 32 & 46)." },
      { date: "Jan 15 – Feb 28", title: "APC Late Renewal & PII Audit", desc: "Verification of Professional Indemnity Insurance cover and mandatory CPD credit accumulation (Parts V & VIII)." },
      { date: "Feb 15", title: "Submit Q3 Financial Statements", desc: "Submission of PFM Act financial reports to National Treasury and Auditor-General (Part XIX)." },
      { date: "Mar 1 – 31", title: "University Degree Accreditation Audits", desc: "Statutory visitation by Registration & Accreditation Committee to audit university Bachelor degree programs (Sec 8(e))." },
      { date: "Mar 15", title: "Joint Forum Meeting w/ EBK", desc: "Quarterly statutory consultation under Cap 530 to harmonize inter-board scopes (Sec 23–24)." },
      { date: "Mar 31", title: "Competency Exams & Student Logbook Review 1", desc: "Conducting professional exams and auditing candidate/student industrial attachment logbooks (Part IV & Sec 27)." }
    ]
  },
  {
    quarter: "Q2: April – June",
    theme: "County Inspections, Attachment Audits & Financial Year Close",
    badge: "Q2 Regulatory Cycle",
    color: "#b91c1c",
    activities: [
      { date: "Apr 1 – 30", title: "Nationwide Field Compliance Drive", desc: "Gazetted Compliance Inspectors audit sites across 47 counties for Risk Class 1-5 staffing (Part XI)." },
      { date: "May 15 – 30", title: "Student Attachment & Internship Review", desc: "Verification of 24–48 week practical attachment logbooks submitted by undergraduate & TVET students (Sec 27(3))." },
      { date: "May 30", title: "Disciplinary Board Session 1", desc: "Hearing complaints, negligence claims, site failures, and joint engineering panels w/ EBK (Part XII)." },
      { date: "Jun 1 – 15", title: "Finalize Annual Budget Estimates", desc: "Finance Committee prepares upcoming FY budget for Ministerial & Parliamentary approval (Part XIX)." },
      { date: "Jun 30", title: "Financial Year Close & Audit", desc: "Closing KBERC accounting books and submitting financial statements to Auditor-General." }
    ]
  },
  {
    quarter: "Q3: July – September",
    theme: "Student Indexing, Graduate Transition & TVET Audits",
    badge: "Q3 Regulatory Cycle",
    color: "#B45309",
    activities: [
      { date: "Jul 1", title: "Start of New Financial Year", desc: "Commencement of new annual operational budget & statutory fee schedules (Part XIX)." },
      { date: "Jul 15 – 31", title: "Student Indexing & Graduate Registration", desc: "Receiving university/TVET matriculation lists for Student Indexing & registering fresh graduates into Candidate Register (Sec 27 & 28)." },
      { date: "Aug 1 – 31", title: "TVET & Student Chapter Audits", desc: "Accrediting polytechnics, TVET diploma courses, and university student chapters (Sec 28 & Part VI)." },
      { date: "Sep 15", title: "Joint Forum Meeting w/ EBK", desc: "Quarterly meeting with EBK on joint fee scale consultation and CPD 1:1 credit transfers (Sec 185)." },
      { date: "Sep 30", title: "Competency Exams & Candidate Admissions", desc: "Second annual professional examination diet and graduate registration interviews (Part V)." }
    ]
  },
  {
    quarter: "Q4: October – December",
    theme: "Student Expo, APC Renewals, Appeals & Annual Report",
    badge: "Q4 Regulatory Cycle",
    color: "#059669",
    activities: [
      { date: "Oct 15 – 30", title: "National Student Built-Environment Expo", desc: "KBERC annual student design competitions, green building awards, and university mentorship symposium." },
      { date: "Oct 31", title: "Submit Parliamentary Annual Report", desc: "CS tables KBERC Annual Performance & Financial Report before Parliament (Sec 184)." },
      { date: "Nov 1", title: "Open APC Renewal Portal", desc: "Launch annual online portal for practising certificate renewals for the upcoming year (Part VII)." },
      { date: "Nov 30", title: "Disciplinary Board Session 2", desc: "Final annual hearing session for resolving consumer complaints and practitioner sanctions (Part XII)." },
      { date: "Dec 15", title: "Appeals Tribunal Session", desc: "Independent Tribunal hears appeals against Council decisions (High Court Advocate Chair) (Part XIII)." },
      { date: "Dec 31", title: "APC Renewal Deadline", desc: "Deadline for practitioners & firms to submit APC renewals, PII cover, and digital seal re-certifications." }
    ]
  }
];

export default function EnactmentTasksPage() {
  const [selectedPhase, setSelectedPhase] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedAuthority, setSelectedAuthority] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"timeline" | "grid" | "roles">("timeline");
  const [taskStatuses, setTaskStatuses] = useState<Record<string, "To Do" | "In Progress" | "Completed">>({});
  const [searchQuery, setSearchQuery] = useState("");

  const phases = [
    "All",
    "Phase 1: Immediate (Day 0–30)",
    "Phase 2: Institution Setup (Months 1–3)",
    "Phase 3: Regulations & Registers (Months 3–6)",
    "Phase 4: Operationalization (Months 6–12)",
    "Phase 5: Full Repeal & Transition (Month 12+)"
  ];

  const categories = [
    "All",
    "Institutional Creation",
    "Registration & Licensing",
    "Risk & Compliance",
    "Enforcement & Discipline",
    "Legacy Transition"
  ];

  const authorities = [
    "All",
    "Cabinet Secretary",
    "KBERC Council",
    "Registrar & Secretariat",
    "Professional Regulators",
    "Appeals Tribunal",
    "Compliance Inspectors",
    "County Building Desks"
  ];

  const filteredTasks = ENACTMENT_TASKS.filter(task => {
    const matchPhase = selectedPhase === "All" || task.phase === selectedPhase;
    const matchCategory = selectedCategory === "All" || task.category === selectedCategory;
    const matchAuth = selectedAuthority === "All" || task.responsibleAuthority === selectedAuthority;
    const matchSearch = !searchQuery || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.partNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.sectionRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.deliverable.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPhase && matchCategory && matchAuth && matchSearch;
  });

  const toggleStatus = (taskId: string) => {
    setTaskStatuses(prev => {
      const current = prev[taskId] || "To Do";
      const next = current === "To Do" ? "In Progress" : current === "In Progress" ? "Completed" : "To Do";
      return { ...prev, [taskId]: next };
    });
  };

  const completedCount = Object.values(taskStatuses).filter(s => s === "Completed").length;
  const inProgressCount = Object.values(taskStatuses).filter(s => s === "In Progress").length;

  return (
    <div style={{
      minHeight: "100vh", background: "#F8FAFC", color: "#0F172A",
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", padding: "40px 28px 80px"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Navigation Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748B" }}>
            <Link href="/" style={{ color: "#64748B" }}>Home</Link>
            <span>›</span>
            <Link href="/viewer" style={{ color: "#64748B" }}>Viewer Portal</Link>
            <span>›</span>
            <span style={{ color: "#b91c1c", fontWeight: 700 }}>Statutory Enactment Roadmap &amp; Implementation Matrix</span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/viewer/about" style={{ padding: "8px 16px", fontSize: "12px", fontWeight: 800, background: "#0284C7", color: "#FFFFFF", textTransform: "uppercase" }}>
              📜 About Dossier
            </Link>
            <Link href="/viewer/read" style={{ padding: "8px 16px", fontSize: "12px", fontWeight: 800, background: "#b91c1c", color: "#FFFFFF", textTransform: "uppercase" }}>
              📖 Read Bill
            </Link>
          </div>
        </nav>

        {/* Header Hero Banner */}
        <header style={{ marginBottom: "36px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 18px", background: "rgba(185,28,28,0.08)", border: "1px solid rgba(185,28,28,0.25)", marginBottom: "16px" }}>
            <span style={{ width: "8px", height: "8px", background: "#b91c1c", display: "inline-block" }} />
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              100% STATUTORY COVERAGE • ALL 20 PARTS &amp; 14 SCHEDULES ENACTMENT ROADMAP
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1.15 }}>
            Master Statutory Enactment Roadmap &amp; Implementation Action Plan
          </h1>
          <p style={{ fontSize: "16px", color: "#334155", maxWidth: "900px", margin: "0 auto", lineHeight: 1.7 }}>
            An exhaustive, phase-by-phase implementation roadmap detailing all 27 statutory enactment milestones across all 20 Parts of <strong>The Built Environment Professions &amp; Practice Bill 2026</strong> upon Presidential Assent.
          </p>
        </header>

        {/* Interactive Progress Tracker Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "36px" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #0F172A", padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "10px", fontWeight: 900, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>Total Enactment Tasks</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#0F172A" }}>{ENACTMENT_TASKS.length}</div>
            <div style={{ fontSize: "11px", color: "#475569", marginTop: "2px" }}>100% Coverage of Parts I to XX</div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #b91c1c", padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>Critical Path Actions</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#b91c1c" }}>
              {ENACTMENT_TASKS.filter(t => t.priority === "Critical Path").length}
            </div>
            <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>Mandatory sequential gates</div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #0284C7", padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "10px", fontWeight: 900, color: "#0284C7", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>Enactment Status</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#0284C7" }}>
              {completedCount} / {ENACTMENT_TASKS.length}
            </div>
            <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>{inProgressCount} tasks currently in progress</div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #059669", padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "10px", fontWeight: 900, color: "#059669", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>Implementation Completion</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#059669" }}>
              {Math.round((completedCount / ENACTMENT_TASKS.length) * 100)}%
            </div>
            <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>Target: 100% within 12 Months</div>
          </div>
        </div>

        {/* View Mode & Filter Controls Header */}
        <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #b91c1c", padding: "24px", marginBottom: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          
          {/* View Mode Toggles */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "20px", borderBottom: "1px solid #CBD5E1", paddingBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", textTransform: "uppercase", letterSpacing: "0.1em" }}>SELECT ROADMAP VIEW MODE:</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setViewMode("timeline")}
                style={{
                  padding: "8px 16px", fontSize: "11px", fontWeight: 800,
                  background: viewMode === "timeline" ? "#b91c1c" : "#FFFFFF",
                  color: viewMode === "timeline" ? "#FFFFFF" : "#0F172A",
                  border: viewMode === "timeline" ? "1px solid #b91c1c" : "1px solid #CBD5E1",
                  cursor: "pointer"
                }}
              >
                🛣️ Visual Timeline Roadmap
              </button>
              <button
                onClick={() => setViewMode("grid")}
                style={{
                  padding: "8px 16px", fontSize: "11px", fontWeight: 800,
                  background: viewMode === "grid" ? "#b91c1c" : "#FFFFFF",
                  color: viewMode === "grid" ? "#FFFFFF" : "#0F172A",
                  border: viewMode === "grid" ? "1px solid #b91c1c" : "1px solid #CBD5E1",
                  cursor: "pointer"
                }}
              >
                🏛️ 20-Part Detailed Statutory Grid
              </button>
              <button
                onClick={() => setViewMode("roles")}
                style={{
                  padding: "8px 16px", fontSize: "11px", fontWeight: 800,
                  background: viewMode === "roles" ? "#b91c1c" : "#FFFFFF",
                  color: viewMode === "roles" ? "#FFFFFF" : "#0F172A",
                  border: viewMode === "roles" ? "1px solid #b91c1c" : "1px solid #CBD5E1",
                  cursor: "pointer"
                }}
              >
                👥 Role-Based Implementation Matrix
              </button>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
            
            {/* Search */}
            <div>
              <label style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "6px" }}>Search Provisions &amp; Deliverables</label>
              <input
                type="text"
                placeholder="Search Part, Section, deliverable..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", background: "#F8FAFC", border: "1px solid #CBD5E1", color: "#0F172A", fontSize: "13px", outline: "none" }}
              />
            </div>

            {/* Category Filter */}
            <div>
              <label style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "6px" }}>Statutory Category</label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", background: "#F8FAFC", border: "1px solid #CBD5E1", color: "#0F172A", fontSize: "13px", outline: "none" }}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Responsible Authority */}
            <div>
              <label style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "6px" }}>Responsible Body</label>
              <select
                value={selectedAuthority}
                onChange={e => setSelectedAuthority(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", background: "#F8FAFC", border: "1px solid #CBD5E1", color: "#0F172A", fontSize: "13px", outline: "none" }}
              >
                {authorities.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>

          {/* Timeline Phase Pills */}
          <div>
            <label style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "8px" }}>Timeline Phase</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {phases.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPhase(p)}
                  style={{
                    padding: "6px 14px", fontSize: "11px", fontWeight: 800,
                    background: selectedPhase === p ? "#b91c1c" : "#F1F5F9",
                    color: selectedPhase === p ? "#FFFFFF" : "#0F172A",
                    border: selectedPhase === p ? "1px solid #b91c1c" : "1px solid #CBD5E1",
                    cursor: "pointer"
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: VISUAL TIMELINE ROADMAP FLOWCHART */}
        {viewMode === "timeline" && (
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {phases.filter(p => p !== "All").map((phaseName, phaseIdx) => {
                const phaseTasks = filteredTasks.filter(t => t.phase === phaseName);
                if (phaseTasks.length === 0) return null;

                const phaseColors = ["#0284C7", "#7C3AED", "#B45309", "#DC2626", "#059669"];
                const phaseColor = phaseColors[phaseIdx % phaseColors.length];

                return (
                  <div key={phaseName} style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderLeft: `8px solid ${phaseColor}`, padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "20px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
                      <h2 style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ background: phaseColor, color: "#FFFFFF", padding: "4px 12px", fontSize: "12px", fontWeight: 900 }}>PHASE {phaseIdx + 1}</span>
                        <span>{phaseName}</span>
                      </h2>
                      <span style={{ fontSize: "12px", fontWeight: 800, color: phaseColor }}>
                        {phaseTasks.length} Statutory Milestones Enacted
                      </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "18px" }}>
                      {phaseTasks.map(task => {
                        const status = taskStatuses[task.id] || "To Do";
                        const priorityColor = task.priority === "Critical Path" ? "#DC2626" : task.priority === "High" ? "#B45309" : "#0284C7";

                        return (
                          <div key={task.id} style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderTop: `4px solid ${priorityColor}`, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", background: "rgba(185,28,28,0.08)", padding: "2px 8px" }}>
                                  {task.partNo} • {task.sectionRef}
                                </span>
                                <span style={{ fontSize: "9px", fontWeight: 900, color: "#FFFFFF", background: priorityColor, padding: "2px 8px", textTransform: "uppercase" }}>
                                  {task.priority}
                                </span>
                              </div>

                              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>{task.title}</h3>
                              <div style={{ fontSize: "11px", fontWeight: 700, color: "#0284C7", marginBottom: "10px" }}>
                                🏛️ {task.responsibleAuthority}
                              </div>
                              <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6, margin: "0 0 12px 0" }}>{task.details}</p>
                              
                              <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", padding: "10px", marginBottom: "14px" }}>
                                <strong style={{ fontSize: "9px", color: "#b91c1c", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>Mandatory Output:</strong>
                                <span style={{ fontSize: "11px", color: "#0F172A", fontWeight: 600 }}>{task.deliverable}</span>
                              </div>
                            </div>

                            <div style={{ borderTop: "1px solid #CBD5E1", paddingTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748B" }}>ENACTMENT STATE</span>
                              <button
                                onClick={() => toggleStatus(task.id)}
                                style={{
                                  padding: "4px 12px", fontSize: "10px", fontWeight: 800,
                                  background: status === "Completed" ? "#059669" : status === "In Progress" ? "#B45309" : "#64748B",
                                  color: "#FFFFFF", border: "none", cursor: "pointer"
                                }}
                              >
                                {status === "Completed" ? "✓ COMPLETED" : status === "In Progress" ? "⏳ IN PROGRESS" : "◯ TO DO"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW MODE 2: 20-PART DETAILED STATUTORY GRID */}
        {viewMode === "grid" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px", marginBottom: "48px" }}>
            {filteredTasks.map(task => {
              const status = taskStatuses[task.id] || "To Do";
              const priorityColor = task.priority === "Critical Path" ? "#DC2626" : task.priority === "High" ? "#B45309" : "#0284C7";

              return (
                <div key={task.id} style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: `5px solid ${priorityColor}`, padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 900, color: "#b91c1c", background: "rgba(185,28,28,0.08)", padding: "2px 8px" }}>
                        {task.partNo} • {task.sectionRef}
                      </span>
                      <span style={{ fontSize: "9px", fontWeight: 900, color: "#FFFFFF", background: priorityColor, padding: "2px 8px", textTransform: "uppercase" }}>
                        {task.priority}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>{task.title}</h3>
                    
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "10px", color: "#475569", background: "#F1F5F9", padding: "2px 6px" }}>
                        ⏱️ {task.phase.split(":")[0]}
                      </span>
                      <span style={{ fontSize: "10px", color: "#0284C7", background: "rgba(2,132,199,0.08)", padding: "2px 6px" }}>
                        🏛️ {task.responsibleAuthority}
                      </span>
                    </div>

                    <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6, margin: "0 0 14px 0" }}>{task.details}</p>

                    <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "12px", marginBottom: "16px" }}>
                      <strong style={{ fontSize: "9px", color: "#b91c1c", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>Required Output:</strong>
                      <span style={{ fontSize: "11px", color: "#0F172A", fontWeight: 600 }}>{task.deliverable}</span>
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid #CBD5E1", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748B" }}>STATE</span>
                    <button
                      onClick={() => toggleStatus(task.id)}
                      style={{
                        padding: "6px 14px", fontSize: "10px", fontWeight: 800,
                        background: status === "Completed" ? "#059669" : status === "In Progress" ? "#B45309" : "#64748B",
                        color: "#FFFFFF", border: "none", cursor: "pointer"
                      }}
                    >
                      {status === "Completed" ? "✓ COMPLETED" : status === "In Progress" ? "⏳ IN PROGRESS" : "◯ TO DO"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 3: ROLE-BASED IMPLEMENTATION MATRIX */}
        {viewMode === "roles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
            {authorities.filter(a => a !== "All").map((authName, authIdx) => {
              const authTasks = filteredTasks.filter(t => t.responsibleAuthority === authName);
              if (authTasks.length === 0) return null;

              return (
                <div key={authName} style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderLeft: "8px solid #0284C7", padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "2px solid #CBD5E1", paddingBottom: "10px" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>🏛️</span> {authName} Implementation Mandate
                    </h2>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#0284C7", background: "rgba(2,132,199,0.08)", padding: "4px 12px" }}>
                      {authTasks.length} Assigned Statutory Actions
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                    {authTasks.map(t => (
                      <div key={t.id} style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "16px" }}>
                        <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c" }}>{t.partNo} • {t.sectionRef}</span>
                        <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A", margin: "4px 0 6px" }}>{t.title}</h4>
                        <p style={{ fontSize: "12px", color: "#475569", margin: "0 0 10px", lineHeight: 1.5 }}>{t.details}</p>
                        <div style={{ fontSize: "10px", fontWeight: 700, color: "#059669" }}>Deliverable: {t.deliverable}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ANNUAL STATUTORY REGULATORY CALENDAR */}
        <section style={{ marginTop: "48px" }}>
          <div style={{ marginBottom: "24px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: "0 0 4px 0", display: "flex", alignItems: "center", gap: "10px" }}>
              <span>📅</span> Typical Statutory Annual Regulatory Calendar (Q1–Q4)
            </h2>
            <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
              Standard operational cycle for KBERC Council, Registrar, Standing Committees &amp; Inspectors following full enactment.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {ANNUAL_CALENDAR.map((cycle, idx) => (
              <div key={idx} style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: `5px solid ${cycle.color}`, padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "16px", fontWeight: 900, color: cycle.color }}>{cycle.quarter}</span>
                  <span style={{ fontSize: "9px", fontWeight: 900, color: "#FFFFFF", background: cycle.color, padding: "3px 8px", textTransform: "uppercase" }}>
                    {cycle.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A", margin: "0 0 16px 0", lineHeight: 1.4 }}>{cycle.theme}</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {cycle.activities.map((act, i) => (
                    <div key={i} style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                        <span style={{ fontSize: "10px", fontWeight: 900, color: "#b91c1c" }}>{act.date}</span>
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A" }}>{act.title}</span>
                      </div>
                      <p style={{ fontSize: "11px", color: "#475569", lineHeight: 1.5, margin: 0 }}>{act.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
