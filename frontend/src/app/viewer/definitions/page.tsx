'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export default function DefinitionsView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLetter, setActiveLetter] = useState<string>("ALL");

  const definitions = [
    // --- LICENSING & PRACTICE (16) ---
    {
      category: "Licensing & Practice",
      term: "Architect",
      definition: "A professional registered under Part IV to practice architecture, spatial masterplanning, structural aesthetics, building envelope design, and environmental spatial integration, holding a valid annual Digital QR Practice Seal issued under Section 57.",
      usedIn: ["Section 2", "Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Licensing & Practice",
      term: "Candidate Practitioner",
      definition: "A university or TVET graduate registered under Part IV undergoing 2 years of mandatory supervised internship logbook training under a Lead Professional before sitting Professional Practice Examinations (PPE).",
      usedIn: ["Section 25", "Part IV"]
    },
    {
      category: "Licensing & Practice",
      term: "Continuous Professional Development (CPD)",
      definition: "Mandatory annual statutory training and learning unit requirements under Section 38 and Schedule 5 required for the annual renewal of a practicing certificate across all disciplines.",
      usedIn: ["Section 38", "Schedule 5", "Part IV"]
    },
    {
      category: "Licensing & Practice",
      term: "Digital QR Seal",
      definition: "A cryptographically secure, machine-readable digital stamp issued annually under Section 57 to verified lead practitioners possessing valid Professional Indemnity Insurance (PII) cover.",
      usedIn: ["Section 2", "Section 57", "Section 58", "Part VI"]
    },
    {
      category: "Licensing & Practice",
      term: "Foreign Practitioner",
      definition: "A non-citizen consultant granted a temporary 12-month practice license under Section 32 paired with a registered local Lead Professional.",
      usedIn: ["Section 32", "Part IV"]
    },
    {
      category: "Licensing & Practice",
      term: "Lead Professional",
      definition: "A registered professional architect, engineer, quantity surveyor, or planner authorized under Section 25 to sign off statutory drawings, submit plan approvals, and hold primary design liability.",
      usedIn: ["Section 2", "Section 25", "Section 57", "Part VI"]
    },
    {
      category: "Licensing & Practice",
      term: "Multidisciplinary Corporate Firm",
      definition: "A corporate consultancy licensed under Section 45 where at least 51% of voting shares are held by registered local lead practitioners across multiple built environment disciplines.",
      usedIn: ["Section 45", "Part V"]
    },
    {
      category: "Licensing & Practice",
      term: "Practising Certificate",
      definition: "A certificate issued annually under Part VI authorizing a registered professional to practice, linked to an active Digital QR Seal and PII cover.",
      usedIn: ["Section 2", "Section 57", "Part VI"]
    },
    {
      category: "Licensing & Practice",
      term: "Professional Indemnity Insurance (PII)",
      definition: "Mandatory insurance cover required under Section 58 ranging from KES 20 Million to KES 200 Million based on project risk class to protect building owners against design negligence across all disciplines.",
      usedIn: ["Section 58", "Part VI"]
    },
    {
      category: "Licensing & Practice",
      term: "Reserved Professional Work",
      definition: "Categories of technical design, cost measurement, structural calculation, spatial planning, and site supervision work restricted under Section 43 exclusively to registered lead professionals.",
      usedIn: ["Section 43", "Part V"]
    },
    {
      category: "Licensing & Practice",
      term: "Sole Practice & Partnership",
      definition: "A practice structure registered under Section 44 where practitioners operate independently or in partnership, provided all partners hold active practicing certificates.",
      usedIn: ["Section 44", "Part V"]
    },
    {
      category: "Licensing & Practice",
      term: "Specialist Professional",
      definition: "A practitioner with advanced post-graduate accreditation under Section 36 in complex domains such as deep basement geotechnical engineering, seismic dynamics, acoustic design, or high-consequence towers.",
      usedIn: ["Section 36", "Part IV", "Part VIII"]
    },
    {
      category: "Licensing & Practice",
      term: "Statutory Annual Register",
      definition: "The public digital register maintained under Part VII by the Registrar containing verified details of all active practitioners, corporate firms, and digital QR seals.",
      usedIn: ["Section 50", "Part VII"]
    },
    {
      category: "Licensing & Practice",
      term: "Temporary Practice Permit",
      definition: "A restricted statutory permit issued under Section 32 granting non-resident consultants authorization to perform specific technical advisory work for up to 12 months.",
      usedIn: ["Section 32", "Part IV"]
    },
    {
      category: "Licensing & Practice",
      term: "Unauthorized Affixation of a Professional Seal",
      definition: "The stamping, signing, or digital authorization of built environment documents by a registered professional on behalf of an unauthorized person ('seal lending').",
      usedIn: ["Section 2", "Section 57", "Section 157", "Part XIV"]
    },
    {
      category: "Licensing & Practice",
      term: "Unlawful Practice",
      definition: "The practice of a built environment profession by a person who is not registered under Part IV, or masquerading as a registered professional by any means.",
      usedIn: ["Section 2", "Section 25", "Section 155", "Part XIV"]
    },

    // --- DISCIPLINES & CADRES (17) ---
    {
      category: "Disciplines & Cadres",
      term: "Acoustic & Lighting Specialist",
      definition: "A specialist practitioner accredited under Section 36 for acoustic insulation, reverberation engineering, day-lighting optimization, and specialized illumination.",
      usedIn: ["Section 14", "Section 36", "Part IV"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Building Surveyor",
      definition: "A professional registered under Part IV specializing in building pathology forensic audits, structural compliance inspections, dilapidation reports, and maintenance engineering.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Civil & Structural Engineer",
      definition: "A professional engineer registered under Part IV and Cap 530 to analyze, design, and certify structural load paths, foundations, reinforced concrete framing, steel structures, seismic resilience, and civil works, holding a valid annual Digital QR Practice Seal.",
      usedIn: ["Section 14", "Part IV", "Cap 530", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Construction Project Manager (CPM)",
      definition: "A professional registered under Part IV authorized to direct site execution, procurement logistics, quality assurance, multi-trade safety compliance, project scheduling, and final practical completion delivery.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Engineer",
      definition: "A professional registered under Part IV and Cap 530 across civil, structural, mechanical, electrical, or geotechnical disciplines to design, analyze, and inspect building and infrastructure systems.",
      usedIn: ["Section 14", "Part IV", "Cap 530", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Environmental Assessment (EIA/EA) Expert",
      definition: "A certified environmental professional registered under Part IV and NEMA frameworks to conduct statutory environmental audits, sustainability assessments, and climate impact mitigations for building projects.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Fire Safety & Egress Engineer",
      definition: "A specialist engineer accredited under Section 36 for fire smoke modeling, automated suppression systems, compartmentation, and life-safety evacuation routes.",
      usedIn: ["Section 14", "Section 36", "Part IV"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Geotechnical & Foundation Specialist Engineer",
      definition: "A specialist professional engineer accredited under Section 36 for subsoil exploration, deep basement retaining structures, piling analysis, and foundation engineering.",
      usedIn: ["Section 14", "Section 36", "Part IV", "Part VIII"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Interior Architect & Designer",
      definition: "A professional registered under Part IV specializing in interior spatial ergonomics, acoustic engineering, interior structural adaptations, material specifications, and life-safety egress layouts.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Land Surveyor & Geomatics Engineer",
      definition: "A spatial professional registered under Part IV authorized to conduct cadastral land surveys, boundary determinations, GIS mapping, and site layout alignment.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Landscape Architect",
      definition: "A professional registered under Part IV specializing in outdoor site ecology, urban green infrastructure, environmental spatial planning, urban parks, and landscape design.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Mechanical & Electrical (MEP) Engineer",
      definition: "A professional engineer registered under Part IV and Cap 530 to design, analyze, and certify building HVAC, plumbing, vertical transportation (elevators/escalators), electrical power distribution, fire suppression, and renewable energy systems.",
      usedIn: ["Section 14", "Part IV", "Cap 530", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Physical & Land Use Planner",
      definition: "A professional registered under Part IV specializing in regional spatial zoning, land use policy frameworks, urban planning, environmental integration, and County physical development plans.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Quantity Surveyor",
      definition: "A professional registered under Part IV specializing in construction cost engineering, life-cycle financial modeling, preparation of statutory Bills of Quantities (BQ), contract administration, and project dispute valuation.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Student Practitioner",
      definition: "An enrolled student in an accredited degree or diploma program registered under Section 26 to gain logbook experience under supervised academic protocols.",
      usedIn: ["Section 26", "Part IV"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Technician & Craftsperson",
      definition: "A skilled technical practitioner holding a Diploma or TVET certification registered under Part IV to execute specialized site assembly, trade supervision, and quality control.",
      usedIn: ["Section 2", "Section 14", "Part IV"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Technologist",
      definition: "A practitioner holding a Bachelor of Technology degree registered under Part IV to execute technical design support, BIM modeling, and site supervision within defined statutory scopes across all disciplines.",
      usedIn: ["Section 2", "Section 14", "Part IV"]
    },

    // --- GOVERNANCE & INSTITUTIONS (17) ---
    {
      category: "Governance & Institutions",
      term: "Apex Council (KBERC)",
      definition: "The Kenya Built Environment Regulatory Council established under Section 6 of this Act as the supreme regulatory authority over all built environment professions in Kenya.",
      usedIn: ["Section 2", "Section 6", "Section 7", "Part II"]
    },
    {
      category: "Governance & Institutions",
      term: "Board of Registration of Architects (ARB)",
      definition: "An independent discipline board established under Part XIX following the repeal of Cap 525 to manage architectural registration exams, continuous professional development, and professional accreditation.",
      usedIn: ["Section 201", "Part XIX", "Schedule 13"]
    },
    {
      category: "Governance & Institutions",
      term: "Built Environment",
      definition: "The physical, human-made space in which people live, work, and recreate on a day-to-day basis, encompassing the planning, design, construction, alteration, and maintenance of human settlements and infrastructure.",
      usedIn: ["Section 2(2)", "Section 3", "Section 4", "Part I"]
    },
    {
      category: "Governance & Institutions",
      term: "Built Environment Appeals Tribunal (BEAT)",
      definition: "The specialized statutory judicial tribunal established under Section 141 and Schedule 2 to hear appeals regarding licensing, registration, disciplinary sanctions, or fee disputes across all disciplines.",
      usedIn: ["Section 141", "Schedule 2", "Part XIII"]
    },
    {
      category: "Governance & Institutions",
      term: "Cabinet Secretary",
      definition: "The Cabinet Secretary for the time being responsible for matters relating to the built environment, housing, and public works.",
      usedIn: ["Section 2", "Section 1", "Section 197", "Throughout the Act"]
    },
    {
      category: "Governance & Institutions",
      term: "Construction Managers & Interior Designers Board (CMIDB)",
      definition: "An independent discipline board established under Part XIX to regulate construction project managers, site safety directors, interior architects, landscape architects, and specialized project consultants.",
      usedIn: ["Section 201", "Part XIX", "Schedule 13"]
    },
    {
      category: "Governance & Institutions",
      term: "County Building Control Desk",
      definition: "The technical unit established within each of the 47 County Governments under Section 188 responsible for receiving multi-disciplinary development applications, conducting site audits, and issuing permits.",
      usedIn: ["Section 2", "Section 98", "Section 188", "Part XVII"]
    },
    {
      category: "Governance & Institutions",
      term: "Delegation of Powers",
      definition: "The statutory mechanism under Section 9 allowing KBERC to delegate specific internal technical accreditation responsibilities to existing autonomous boards such as EBK.",
      usedIn: ["Section 9", "Part II"]
    },
    {
      category: "Governance & Institutions",
      term: "Disciplinary Committee",
      definition: "The statutory committee established under Section 117 to hear complaints of professional misconduct against any registered practitioner, conduct formal hearings, and impose statutory sanctions.",
      usedIn: ["Section 117", "Part XI"]
    },
    {
      category: "Governance & Institutions",
      term: "Engineers Board of Kenya (EBK)",
      definition: "The statutory regulatory body established under the Engineers Act, 2011 (Cap 530), preserved under KBERC's Asymmetric Hybrid Model with 1 statutory ex-officio seat on the Apex Council to manage engineering university accreditation and technical registration while integrating into KBERC's National Project Database.",
      usedIn: ["Section 201", "Part XIX", "Cap 530", "Schedule 13"]
    },
    {
      category: "Governance & Institutions",
      term: "National Building Control Directorate",
      definition: "The statutory division under Part XVII responsible for harmonizing building regulations, issuing technical guidance notes, and monitoring County Building Control Desks.",
      usedIn: ["Section 180", "Part XVII"]
    },
    {
      category: "Governance & Institutions",
      term: "National Joint Inspectorate",
      definition: "The multi-agency site inspection unit created under Section 105 to conduct unannounced audits on Class C, D, and E project sites.",
      usedIn: ["Section 105", "Part X"]
    },
    {
      category: "Governance & Institutions",
      term: "National Project Database (NPD)",
      definition: "The central digital platform established under Section 85 for registering all construction projects, tracking lead professional seals, and validating building permits before commencement.",
      usedIn: ["Section 85", "Part VIII"]
    },
    {
      category: "Governance & Institutions",
      term: "Physical Planners Registration Board (PPRB)",
      definition: "An independent discipline board established under Part XIX to manage urban and regional physical planner registration, spatial planning ethics, and development plan certifications.",
      usedIn: ["Section 201", "Part XIX", "Schedule 13"]
    },
    {
      category: "Governance & Institutions",
      term: "Quantity Surveyors Registration Board (QSRB)",
      definition: "An independent discipline board established under Part XIX following Cap 525 alignment to manage quantity surveying professional examinations, cost management standards, and professional licensing.",
      usedIn: ["Section 201", "Part XIX", "Schedule 13"]
    },
    {
      category: "Governance & Institutions",
      term: "Registrar / Chief Executive Officer",
      definition: "The Chief Executive Officer of the Council appointed under Section 12 responsible for maintaining the National Register of all built environment professionals, issuing digital QR seals, and directing Council staff.",
      usedIn: ["Section 12", "Part II"]
    },
    {
      category: "Governance & Institutions",
      term: "Supremacy Clause",
      definition: "The legislative clause under Section 4 establishing that in the event of any conflict between this Act and any other written law regarding built environment regulation, the provisions of this Act shall prevail.",
      usedIn: ["Section 4", "Part I"]
    },

    // --- RISK, SAFETY & BUILDING CONTROL (14) ---
    {
      category: "Risk & Safety",
      term: "5-Tier Building Risk Matrix (Tiers 1-5)",
      definition: "The statutory risk framework under Part VIII and Schedule 4 categorizing projects from Tier 1 (low risk single-unit houses) to Tier 5 (high-consequence mega-towers) to determine mandatory peer-review and PII levels.",
      usedIn: ["Section 80", "Schedule 4", "Part VIII"]
    },
    {
      category: "Risk & Safety",
      term: "6-Hour Emergency Collapse Audit Protocol",
      definition: "The statutory emergency procedure under Section 168 requiring independent forensic engineering teams to deploy to structural collapse sites within 6 hours of notification.",
      usedIn: ["Section 168", "Part XV"]
    },
    {
      category: "Risk & Safety",
      term: "As-Built Drawing Compliance",
      definition: "The statutory submission requirement under Section 111 where lead professionals submit final measured drawings confirming that the constructed structure matches approved plans.",
      usedIn: ["Section 111", "Part X"]
    },
    {
      category: "Risk & Safety",
      term: "Certificate of Occupancy",
      definition: "A statutory certificate issued by a County Building Control Desk upon completion of Stage 6 site inspections certifying that a building is safe for human occupancy.",
      usedIn: ["Section 112", "Part X"]
    },
    {
      category: "Risk & Safety",
      term: "Demolition Permit & Safety Mitigation",
      definition: "The statutory permit required under Section 115 prior to demolishing structures, mandating environmental dust control, vibration monitoring, and safety shoring.",
      usedIn: ["Section 115", "Part X"]
    },
    {
      category: "Risk & Safety",
      term: "Disaster Emergency Fund",
      definition: "A statutory fund established under Section 135 earmarking 5% of KBERC revenue for immediate 6-hour emergency collapse forensic audits and evidence shoring.",
      usedIn: ["Section 135", "Section 168", "Part XII", "Part XV"]
    },
    {
      category: "Risk & Safety",
      term: "Eurocodes & Consequence Classes (CC1-CC3)",
      definition: "Structural design reliability classifications integrated into the Part VIII 5-Tier Building Risk Matrix matching building height, storeys, and occupancy to peer-review rules.",
      usedIn: ["Section 82", "Section 89", "Schedule 4"]
    },
    {
      category: "Risk & Safety",
      term: "High-Consequence Project (Class D & E)",
      definition: "A project classified under Section 89 and Schedule 4 whose failure would result in catastrophic loss of life, severe environmental destruction, or massive financial loss.",
      usedIn: ["Section 82", "Section 89", "Schedule 4"]
    },
    {
      category: "Risk & Safety",
      term: "Independent 3rd-Party Peer Review",
      definition: "A mandatory statutory audit mandated under Section 89 where an independent accredited Specialist Engineer reviews structural calculations prior to County permit approval.",
      usedIn: ["Section 89", "Part VIII"]
    },
    {
      category: "Risk & Safety",
      term: "Practical Completion",
      definition: "The stage where a project is structurally sound, safe for its intended use, and free from known material defects, notwithstanding minor aesthetic snags.",
      usedIn: ["Section 2", "Section 112"]
    },
    {
      category: "Risk & Safety",
      term: "Site Safety Plan & Hazard Audit",
      definition: "The statutory safety protocol required under Section 98 mandating certified site safety officers, worker PPE, edge protection, and hazard mitigation plans.",
      usedIn: ["Section 98", "Part IX"]
    },
    {
      category: "Risk & Safety",
      term: "Stage Inspection Mandate (Stages 1-6)",
      definition: "The mandatory site inspection sequence under Section 110 covering foundation, structural frame, MEP rough-in, envelope, finishes, and final occupancy sign-off.",
      usedIn: ["Section 110", "Part X"]
    },
    {
      category: "Risk & Safety",
      term: "Stop-Work Order",
      definition: "A statutory order issued by County Building Control or KBERC Inspectors under Section 108 halting all site activity due to structural hazards, missing permits, or unsealed drawings.",
      usedIn: ["Section 108", "Part X"]
    },
    {
      category: "Risk & Safety",
      term: "Structural Stability Certificate",
      definition: "A mandatory certificate issued by a registered Civil/Structural Engineer under Section 94 confirming that structural calculations match Eurocodes and soil bearing capacities.",
      usedIn: ["Section 94", "Part IX"]
    },

    // --- FEES, PROCUREMENT & PENALTIES (12) ---
    {
      category: "Fees & Procurement",
      term: "Advisory Hourly Tariff Rates",
      definition: "The gazetted hourly fee rates under Schedule 12 (KES 10,000 to KES 15,000/hr) governing specialized expert witness testimony, forensic audits, and advisory consultations.",
      usedIn: ["Section 70", "Schedule 12"]
    },
    {
      category: "Fees & Procurement",
      term: "Baseline Scale of Fees (Architectural)",
      definition: "The statutory minimum fee tariffs gazetted under Section 70 and Schedule 12 defining percentage design fees (5.0%-6.5%) and advisory hourly rates (KES 10,000-15,000/hr) for architectural services.",
      usedIn: ["Section 70", "Schedule 12", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Baseline Scale of Fees (Engineering - MEP)",
      definition: "The statutory minimum fee tariffs gazetted under Section 70 and Schedule 12 setting 2.5%-3.5% of MEP installations cost for mechanical, electrical, plumbing, and fire safety systems engineering.",
      usedIn: ["Section 70", "Schedule 12", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Baseline Scale of Fees (Engineering - Structural & Civil)",
      definition: "The statutory minimum fee tariffs gazetted under Section 70 and Schedule 12 setting 3.0%-4.5% of structural construction cost for civil/structural design, load calculation, and site supervision.",
      usedIn: ["Section 70", "Schedule 12", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Baseline Scale of Fees (Physical Planning)",
      definition: "The statutory fee tariffs gazetted under Section 70 and Schedule 12 setting fixed spatial area rates and advisory hourly tariffs for urban zoning, environmental impact integration, and land use schemes.",
      usedIn: ["Section 70", "Schedule 12", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Baseline Scale of Fees (Quantity Surveying)",
      definition: "The statutory fee tariffs gazetted under Section 70 and Schedule 12 setting 2.5%-3.5% of total project cost for Bills of Quantities (BQ) preparation, financial valuation, and contract accounting.",
      usedIn: ["Section 70", "Schedule 12", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Corporate Liability & Officer Forfeiture",
      definition: "The statutory penalty provision under Section 153 holding directors and officers personally liable for corporate offenses, including asset forfeiture and practice bans.",
      usedIn: ["Section 153", "Part XIV"]
    },
    {
      category: "Fees & Procurement",
      term: "Mandatory Fee Escrow Account",
      definition: "The financial protection mechanism under Section 78 requiring client professional fees to be deposited in an escrow account prior to project stage commencement.",
      usedIn: ["Section 78", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Maximum Financial Penalty (KES 50 Million)",
      definition: "The maximum statutory fine under Section 150 imposed on conviction for severe regulatory violations, structural negligence, or unauthorized seal lending.",
      usedIn: ["Section 150", "Part XIV"]
    },
    {
      category: "Fees & Procurement",
      term: "Prohibition of Under-cutting",
      definition: "Statutory restriction under Section 75 forbidding practitioners from bidding below gazetted minimum fee scales to prevent predatory price cutting that compromises site supervision.",
      usedIn: ["Section 75", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Public Procurement Statutory Compliance",
      definition: "The statutory rule under Section 72 requiring all public entities to mandate KBERC Digital QR Seals and gazetted fee scales in public infrastructure tenders.",
      usedIn: ["Section 72", "Part VII"]
    },
    {
      category: "Fees & Procurement",
      term: "Statutory Imprisonment (Up to 5 Years)",
      definition: "The maximum custodial penalty under Section 151 imposed for illegal practice, title fraud, or gross professional negligence causing building failure.",
      usedIn: ["Section 151", "Part XIV"]
    }
  ];

  const categories = [
    { id: "all", label: "⚡ All Statutory Terms (76)" },
    { id: "Licensing & Practice", label: "🎓 Licensing & Practice (16)" },
    { id: "Disciplines & Cadres", label: "📐 Disciplines & Cadres (17)" },
    { id: "Governance & Institutions", label: "🏛️ Governance & Tribunal (17)" },
    { id: "Risk & Safety", label: "⚠️ Risk, Safety & Building Control (14)" },
    { id: "Fees & Procurement", label: "💰 Scale of Fees & Penalties (12)" }
  ];

  const alphabet = ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "5", "6"];

  const filteredDefs = useMemo(() => {
    return definitions.filter(d => {
      const matchesCategory = activeCategory === "all" || d.category === activeCategory;
      const matchesLetter = activeLetter === "ALL" || d.term.toUpperCase().startsWith(activeLetter);
      const matchesSearch = d.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            d.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            d.usedIn.some(loc => loc.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesLetter && matchesSearch;
    });
  }, [activeCategory, activeLetter, searchTerm]);

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: '#475569' }}>
          <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
          <span>›</span>
          <span style={{ color: '#ef4444', fontWeight: 600 }}>Statutory Legal Dictionary (100% Bill Coverage)</span>
        </div>

        {/* Hero Header */}
        <header style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', padding: '6px 16px', borderRadius: 0, marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              100% STATUTORY COVERAGE • 76 ENACTED TERMS &amp; ALL 20 PARTS
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
            Authoritative Statutory Legal Dictionary
          </h1>
          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '900px', lineHeight: 1.7, margin: 0 }}>
            Complete, authoritative coverage of all 76 statutory terms, legal mechanisms, discipline registration boards, consequence classes, fee scale tariffs, and penalty clauses enacted across Section 2 and all 20 Parts of the Built Environment Professions &amp; Practice Bill 2026.
          </p>
        </header>

        {/* Search Bar & Alphabet Filter */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 0, border: '1px solid #CBD5E1', marginBottom: '32px' }}>
          <input 
            type="text" 
            placeholder="Search for any legal term, statutory concept, or section (e.g. Lead Professional, Digital QR Seal, Peer Review, Civil Engineer, EBK, Section 57)..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '16px 22px', borderRadius: 0, background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#0F172A', fontSize: '14px', outline: 'none', marginBottom: '20px' }}
          />

          {/* Alphabet Index */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginRight: '6px' }}>Alphabet Index:</span>
            {alphabet.map(letter => (
              <button
                key={letter}
                onClick={() => setActiveLetter(letter)}
                style={{
                  minWidth: '32px', height: '32px', padding: '0 8px', borderRadius: 0, fontSize: '12px', fontWeight: 800,
                  cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                  background: activeLetter === letter ? '#ef4444' : '#F1F5F9',
                  color: activeLetter === letter ? '#FFF' : '#334155',
                }}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px', borderRadius: 0, fontSize: '11px', fontWeight: 800,
                  textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.2s',
                  background: activeCategory === cat.id ? '#b91c1c' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#0F172A',
                  border: activeCategory === cat.id ? '1px solid #b91c1c' : '1px solid #CBD5E1',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
            Showing <strong style={{ color: '#ef4444' }}>{filteredDefs.length}</strong> of {definitions.length} Enacted Statutory Definitions
          </span>
        </div>

        {/* Definitions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredDefs.map((def, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 0, padding: '24px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ef4444', margin: 0 }}>{def.term}</h2>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#2563EB', background: 'rgba(37,99,235,0.1)', padding: '4px 10px', borderRadius: 0, border: '1px solid rgba(37,99,235,0.2)', textTransform: 'uppercase' }}>
                  {def.category}
                </span>
              </div>
              
              <p style={{ fontSize: '14px', color: '#1E293B', lineHeight: 1.7, margin: '0 0 16px 0' }}>{def.definition}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '11px', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Statutory Cross-References:</span>
                {def.usedIn.map(loc => (
                  <span key={loc} style={{ background: '#F8FAFC', color: '#ef4444', border: '1px solid #E2E8F0', padding: '4px 10px', borderRadius: 0, fontSize: '11px', fontWeight: 700 }}>
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {filteredDefs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 24px', background: '#FFFFFF', borderRadius: 0, border: '1px dashed #CBD5E1', color: '#64748B' }}>
              No statutory definitions found matching "{searchTerm}". Try clearing search filters or selecting "ALL" in the alphabet index.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
