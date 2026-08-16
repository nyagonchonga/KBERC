'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'enacted' | 'proposed'>('all');

  const historicalMilestones = [
    {
      year: "1968",
      title: "Architects and Quantity Surveyors Act (Cap 525)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Parliament enacted Cap 525 establishing BORAQS to regulate architects and quantity surveyors. Over 58 years, it became obsolete, failing to cover CPMs, Landscape Architects, Interior Designers, TVET Technologists, or digital plan submissions."
    },
    {
      year: "1969",
      title: "Engineers Registration Act (Cap 530)",
      status: "REPEALED 2011",
      badgeColor: "#64748B",
      desc: "Legacy statute governing engineer registration in post-independence Kenya. Repealed and replaced by the Engineers Act 2011."
    },
    {
      year: "1996",
      title: "Physical Planning Act (Cap 286)",
      status: "REPEALED 2019",
      badgeColor: "#64748B",
      desc: "Governed physical planning and land use control prior to the 2010 Constitution. Repealed by PLUPA 2019."
    },
    {
      year: "1999",
      title: "Environmental Management & Co-ordination Act (EMCA Cap 387)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Established NEMA to enforce mandatory Environmental Impact Assessments (EIA) and Environmental Audits for all building developments in Kenya."
    },
    {
      year: "2007",
      title: "Building Surveyors Bill 2007",
      status: "PROPOSED / STALLED",
      badgeColor: "#DC2626",
      desc: "Early legislative attempt to separately regulate building surveyors, site inspection officers, and maintenance auditors; stalled in Parliament due to lack of inter-professional consensus."
    },
    {
      year: "2010",
      title: "Promulgation of Constitution of Kenya 2010",
      status: "ENACTED CONSTITUTION",
      badgeColor: "#2563EB",
      desc: "Articles 10, 42, 43, 47, 185, and 201 introduced binding national values, devolved County building approval mandates, consumer protection rights, and public finance standards."
    },
    {
      year: "2011",
      title: "National Construction Authority Act (NCA Act 2011)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Established NCA to register building contractors and accredit site construction workers. Created overlapping site inspection friction with BORAQS and EBK."
    },
    {
      year: "2011",
      title: "Engineers Act 2011 (Cap 530 Re-enactment)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Repealed 1969 ERA Act, establishing the Engineers Board of Kenya (EBK) with expanded statutory powers over professional engineers, consulting engineering firms, and university degree accreditation."
    },
    {
      year: "2012",
      title: "Built Environment Regulation Bill 2012",
      status: "PROPOSED DRAFT",
      badgeColor: "#DC2626",
      desc: "First attempt by Cabinet to establish an umbrella Built Environment Board; rejected by registration boards fearing loss of discipline autonomy."
    },
    {
      year: "2015",
      title: "National Building Inspectorate (NBI) Presidential Directive",
      status: "DIRECTIVE / POLICY",
      badgeColor: "#D97706",
      desc: "Formed post-Huruma building collapse to audit unsafe structures across Nairobi, Mombasa, and Kisumu; revealed over 4,000 condemned buildings operating without statutory inspection logbooks."
    },
    {
      year: "2018",
      title: "Kenya Construction Authority & Built Environment Task Force",
      status: "PROPOSED / REPORT",
      badgeColor: "#D97706",
      desc: "Joint Ministry & COG task force recommended unifying BORAQS and EBK site inspection protocols under a single public-safety umbrella Act."
    },
    {
      year: "2019",
      title: "Physical & Land Use Planning Act (PLUPA 2019)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Enacted development control mandates across 47 County Governments, creating legal friction with legacy national registration board approvals and necessitating statutory harmonization."
    },
    {
      year: "2020",
      title: "Project Management & Construction Managers Bill 2020",
      status: "PROPOSED DRAFT",
      badgeColor: "#DC2626",
      desc: "Private member's bill seeking to regulate Construction Project Managers (CPMs) separately; shelved to avoid further statutory fragmentation."
    },
    {
      year: "2022",
      title: "Landscape Architects & Interior Designers Bill 2022",
      status: "PROPOSED DRAFT",
      badgeColor: "#DC2626",
      desc: "Draft bill seeking separate registration boards for interior designers and landscape architects; integrated into the consolidated 2026 Master Bill."
    },
    {
      year: "2024",
      title: "Gazettement of NBC 2024 & Kahawa West Forensic Inquiries",
      status: "CURRENT AFFAIRS",
      badgeColor: "#7C3AED",
      desc: "Cabinet Secretary gazetted the National Building Code 2024 (NBC 2024) alongside Eurocodes (BS EN 1990 - 1999). High-profile structural failures (Kahawa West 7-storey collapse Oct 2024, Kasarani, Kiambu) triggered national calls for strict statutory enforcement."
    },
    {
      year: "2025",
      title: "Multi-Stakeholder Consensus Synthesis & Public Hearings",
      status: "CONSENSUS SYNTHESIS",
      badgeColor: "#7C3AED",
      desc: "Joint technical working groups representing AAK, IEK, IQSK, KIP, NCA, Council of Governors, and BORAQS synthesized public hearing memoranda into a consolidated statutory master draft."
    },
    {
      year: "2026",
      title: "Consolidated Enactment of Bill 2026",
      status: "ENACTED MASTER BILL",
      badgeColor: "#B91C1C",
      desc: "The Built Environment Professions & Practice Bill 2026 is published as a consolidated consensus Act repealing Cap 525 and establishing KBERC, Digital QR Seals, and 6-stage building controls."
    }
  ];

  const Cap525Failures = [
    {
      title: "Guild Capture & Lack of Public Protection Focus",
      problem: "Cap 525 operated primarily as a professional trade guild protecting board member privileges rather than an active public-safety regulator.",
      solution: "KBERC Bill 2026 establishes an Apex Council balancing professional boards with public-interest consumer advocates and County safety directors."
    },
    {
      title: "Absence of Digital QR Seals & Stamp Renting Vulnerability",
      problem: "Under 1968 Cap 525, physical rubber stamps were routinely leased to un-accredited quacks, leading to un-checked working drawings on site.",
      solution: "Section 57 mandates cryptographically verifiable Digital QR Seals tied directly to annual practice licensing databases and County permit systems."
    },
    {
      title: "Exclusion of TVET Technologists & Sub-Degree Cadres",
      problem: "Cap 525 recognized only university degree holders, forcing thousands of skilled TVET Higher National Diploma graduates into un-regulated practice.",
      solution: "Section 28 creates statutory indexing, scopes of practice, and bridging exams for TVET Technologists, Technicians, and Artisans."
    },
    {
      title: "No Statutory 10-Year Defect Liability Risk Allocation",
      problem: "When buildings collapsed under legacy law, developers, architects, structural engineers, and contractors traded blame indefinitely.",
      solution: "Schedule 11 introduces a mandatory 10-Year Statutory Defect Liability Allocation Matrix (Architect 30%, Structural Eng 30%, QS 15%, Contractor 25%)."
    }
  ];

  const reformEfforts = [
    {
      domain: "DOMAIN 1: MULTI-BOARD CONSENSUS TASK FORCES (2018–2025)",
      title: "Joint Professional Associations & Registration Boards Harmonisation",
      lead: "AAK, IEK, IQSK, KIP, BORAQS, EBK, NCA & Council of Governors",
      desc: "Over seven years of intensive consensus workshops, joint technical working groups, and inter-board harmonization retreats were convened to resolve decades of jurisdictional friction over professional scopes of practice, fee scales, and site supervision mandates. This joint effort yielded a single, unified statutory framework protecting public safety without eroding board autonomy."
    },
    {
      domain: "DOMAIN 2: NATIONWIDE 47-COUNTY PUBLIC PARTICIPATION DRIVES",
      title: "Grassroots Public Participation & Stakeholder Memoranda",
      lead: "Parliamentary Committee on Lands, Housing & Urban Development",
      desc: "Extensive public participation hearings were conducted across all 47 County Governments in Kenya. Thousands of written and oral memoranda were submitted by property developers, county planning officers, resident associations, trade unions, TVET institutions, and disaster management agencies following urban structural collapse inquiries."
    },
    {
      domain: "DOMAIN 3: MASTER LEGISLATIVE & LEGAL HARMONISATION",
      title: "Synthesizing 208 Sections, 14 Schedules & 10 KBERC Forms",
      lead: "Office of the Lead Legislative Counsel & Legal Drafting Team",
      desc: "Legal drafting experts undertook the rigorous task of consolidating 208 statutory sections, 14 comprehensive schedules, 10 standardized KBERC inspection forms, and 8 regulated professional disciplines into a single cohesive, un-contradicted master Bill. The draft harmonizes national public safety rules with Article 185 devolved County building control powers."
    },
    {
      domain: "DOMAIN 4: TECHNICAL STANDARDS & EUROCODE ALIGNMENT",
      title: "Integrating NBC 2024, Eurocodes (BS EN 1990) & County E-Portals",
      lead: "State Department for Public Works & Kenya Bureau of Standards (KEBS)",
      desc: "Direct statutory alignment with the National Building Code 2024 (NBC 2024), transition from legacy BS 8110 to modern Eurocodes (BS EN 1990 - 1999) for structural risk management, and mandatory real-time API integration with 47 County E-Development Permit approval portals (Nairobi e-DAMS, Kiambu, Mombasa, Nakuru)."
    },
    {
      domain: "DOMAIN 5: TVET TECHNOLOGIST INDEXING & CADRE INCLUSION",
      title: "Statutory Indexing for Higher Diploma & B.Tech Cadres",
      lead: "TVET Authority (TVETA) & Built Environment Technologists Board",
      desc: "Overcoming decades of professional exclusion under 1934 Cap 525, the 2026 Act establishes statutory indexing, career progression pathways, and independent scopes of practice for TVET Higher Diploma and B.Tech graduates within the College of Built Environment Technologists."
    }
  ];

  const statutoryParts = [
    { num: "PART I", label: "Preliminary (Sections 1–3)", scope: "Short title, commencement date, statutory definitions, objects of the Act, and overarching public-safety principles." },
    { num: "PART II", label: "Establishment of KBERC Council (Sections 4–15)", scope: "Statutory incorporation of the Kenya Built Environment Regulatory Council, Apex Council constitution, and secretariat." },
    { num: "PART III", label: "Professional Boards & Discipline Colleges (Sections 16–23)", scope: "Establishment of 8 Professional Colleges (Architects, Engineers, QSs, Planners, LA, ID, CPM, TVET Technologists)." },
    { num: "PART IV", label: "Registration of Lead Professionals & Cadres (Sections 24–44)", scope: "Qualification criteria, 3-year logbooks, TVET indexing, candidate examinations, and foreign practitioner JVs." },
    { num: "PART V", label: "Practicing Certificates & Digital QR Seals (Sections 45–54)", scope: "Annual practicing licensing, mandatory 50 CPD points, cryptographically verifiable Digital QR Seals (Sec 57)." },
    { num: "PART VI", label: "Regulation of Consultancies & Consortia (Sections 55–64)", scope: "51% local equity mandates, multidisciplinary consortium accreditation, and KES 50M-200M Professional Indemnity Insurance." },
    { num: "PART VII", label: "Building Control & Site Inspection Gates (Sections 65–85)", scope: "Eurocode Building Risk Classification (Classes A–E), mandatory stage inspections, and Forms KBERC-1 to 6." },
    { num: "PART VIII", label: "Structural Safety Audits & Peer Reviews (Sections 86–102)", scope: "Dual independent structural peer reviews for high-rises (Sec 89), geotechnical audits, and structural safety sign-offs." },
    { num: "Part IX", label: "Consumer Protection & Defect Liability Allocations (Sections 103–120)", scope: "Gazetted scale of minimum fees, client escrow protections, and 10-Year Statutory Defect Liability Allocation (Schedule 11)." },
    { num: "PART X", label: "Built Environment Appeals Tribunal - BEAT (Sections 121–135)", scope: "60-day appellate hearing rules, tribunal quorum, filing fees, and High Court referral procedure." },
    { num: "PART XI", label: "Financial Provisions & Emergency Fund (Sections 136–145)", scope: "KBERC annual budget, 5% Disaster Emergency Inquiry Fund (Sec 135), and Parliamentary audit loggings." },
    { num: "PART XII", label: "Professional Ethics & Integrity Rules (Sections 146–155)", scope: "Code of conduct, anti-stamp renting prohibitions, conflict of interest disclosures, and professional integrity bounds." },
    { num: "PART XIII", label: "Continuing Professional Development - CPD (Sections 156–165)", scope: "Annual minimum 50 CPD units, accredited provider framework, and license renewal verification." },
    { num: "PART XIV", label: "Disciplinary Inquiries & Sanctions (Sections 166–175)", scope: "Disciplinary Committee hearing workflow, gazetted reprimands, practicing license suspensions, and fine tariffs." },
    { num: "PART XV", label: "Offences, Penalties & Piercing Corporate Veil (Sections 176–185)", scope: "Fines up to KES 5 Million, 5-year custodial sentences, illegal practice bans, and corporate director liability." },
    { num: "PART XVI", label: "Emergency Structural Failure Response (Sections 186–192)", scope: "6-Hour Forensic Audit Team dispatch post-collapse, emergency evacuation, and demolition authorization." },
    { num: "PART XVII", label: "Inter-Agency Joint Coordination (Sections 193–198)", scope: "Statutory integration with NEMA, NCA, EPRA, and real-time API sync with 47 County E-Approval Portals." },
    { num: "PART XVIII", label: "Delegated Legislation & Regulations (Sections 199–202)", scope: "Cabinet Secretary statutory orders, parliamentary regulations, and gazetted practice guidelines." },
    { num: "PART XIX", label: "Repeal Savings & 12-Month Transition (Sections 203–206)", scope: "Repeal of 1968 Cap 525, BORAQS asset transition, acquired rights preservation, and 12-month license migration." },
    { num: "PART XX", label: "Miscellaneous Provisions & Execution (Sections 207–208)", scope: "Evidentiary rules, digital register authentication, protection from personal liability, and official commencement." }
  ];

  const statutorySchedules = [
    { num: "Schedule 1", title: "Code of Conduct, Professional Ethics & Practice Rules", scope: "Mandatory ethical standards, conflict of interest disclosures, anti-corruption rules, and professional integrity bounds." },
    { num: "Schedule 2", title: "Built Environment Appeals Tribunal Rules & Procedure", scope: "60-day appellate hearing timeline, filing fees, tribunal quorum, and High Court referral gates." },
    { num: "Schedule 3", title: "Professional Board Constitution & Election Protocols", scope: "Election rules for 8 Professional Registration Boards, registrar appointments, and council term limits." },
    { num: "Schedule 4", title: "Eurocode Risk Classification & Structural Consequence Matrix", scope: "Classification of buildings into Classes A to E (CC1 to CC3), structural peer review rules, and seismic risk mandates." },
    { num: "Schedule 5", title: "Continuing Professional Development (CPD) Point Matrix", scope: "Annual minimum 50 CPD units required for practicing license renewal across all 8 regulated disciplines." },
    { num: "Schedule 6", title: "Continuous Site Inspection Logbook & Field Sign-Off Rules", scope: "Mandatory digital clerk-of-works logbooks, photographic inspection evidence, and stage gate sign-offs." },
    { num: "Schedule 7", title: "Inter-Agency Joint Co-ordination Protocol (NEMA, NCA, Counties)", scope: "Statutory framework preventing overlapping inspections and resolving inter-agency jurisdictional disputes." },
    { num: "Schedule 8", title: "Repeal Savings, Transitional Provisions & Acquired Rights", scope: "12-month practitioner license migration window, BORAQS asset transfer, and preservation of existing rights." },
    { num: "Schedule 9", title: "Disciplinary Committee Procedure & Sanctions Tariff", scope: "Formal disciplinary inquiry workflow, gazetted reprimands, license suspensions, and fine tariffs up to KES 5M." },
    { num: "Schedule 10", title: "Statutory Licensing Fees & Corporate Registration Tariffs", scope: "Form A/B/C statutory fee schedules for individual practitioners, corporate consultancies, and foreign joint ventures." },
    { num: "Schedule 11", title: "10-Year Defect Liability Risk Allocation Matrix", scope: "Statutory risk sharing breakdown between architects (30%), structural engineers (30%), QSs (15%), and contractors (25%)." },
    { num: "Schedule 12", title: "Gazetted Minimum Scale of Professional Fees & Tariffs", scope: "Baseline percentage design fees (5.0%–6.5%), hourly advisory rates (KES 10k–15k/hr), and prohibition of undercutting." },
    { num: "Schedule 13", title: "Disaster Relief & Emergency Collapse Inquiry Fund Rules", scope: "Financing emergency collapse forensic audit teams within 6 hours and compensating victims of structural failure." },
    { num: "Schedule 14", title: "Standardized Site Stage Inspection Certificates (Forms KBERC-1 to 6)", scope: "10 statutory stage sign-off forms from Geotechnical Excavation (Form 1) to Occupancy Certificate (Form 6)." }
  ];

  const filteredMilestones = historicalMilestones.filter(m => {
    if (timelineFilter === 'enacted') return m.status.includes('ENACTED') || m.status.includes('CURRENT');
    if (timelineFilter === 'proposed') return m.status.includes('PROPOSED') || m.status.includes('DIRECTIVE');
    return true;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F8FAFC",
      color: "#0F172A",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px) 64px"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Navigation Breadcrumb & Presentation Deck Banner Link */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-4 md:p-6 border border-slate-300 shadow-xs">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 flex-wrap">
            <Link href="/" className="hover:text-red-700 font-semibold">Home</Link>
            <span className="text-slate-400">›</span>
            <Link href="/viewer" className="hover:text-red-700 font-semibold">Viewer Portal</Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-900 font-extrabold">About &amp; Legislative Treatise</span>
          </div>

          <Link
            href="/viewer/slides"
            className="px-4 py-2.5 text-xs md:text-sm font-extrabold bg-red-700 hover:bg-red-800 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            📊 Open Executive Presentation Deck (24 Slides &amp; PDF Export) ▶
          </Link>
        </header>

        {/* Main Document Body */}
        <main className="bg-white border border-slate-300 p-4 sm:p-8 md:p-12 shadow-xs space-y-12">
          
          {/* Document Header Title Block */}
          <div className="border-b-4 border-slate-900 pb-6">
            <span className="inline-block text-xs font-black text-red-700 uppercase tracking-widest bg-red-50 px-3 py-1 border border-red-200 mb-3">
              NATIONAL ASSEMBLY BILL NO. 14 OF 2026 • OFFICIAL STATUTORY TREATISE
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Detailed Background &amp; Consensus Origins
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl">
              The comprehensive statutory history, legislative deficiencies of legacy Cap 525, 2024–2026 sector current affairs, multi-board reform domains, 20 statutory parts breakdown, and structural innovations behind <strong>The Built Environment Professions &amp; Practice Bill 2026</strong>.
            </p>
          </div>

          {/* 1. 2024-2026 SECTOR CURRENT AFFAIRS & CRISIS BRIEFING */}
          <section className="bg-slate-50 border border-slate-300 p-6 md:p-8">
            <span className="text-xs font-black text-purple-700 uppercase tracking-widest block mb-2">
              🚨 2024–2026 SECTOR CURRENT AFFAIRS &amp; CRISIS BRIEFING
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
              Recent Structural Collapses &amp; Statutory Enforcement Drives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-300 p-5">
                <h3 className="text-base font-extrabold text-red-700 mb-2">
                  Urban Building Collapses (Kahawa West Oct 2024, Kasarani &amp; Kiambu)
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Catastrophic failures of un-inspected multi-storey residential towers triggered National Construction Authority (NCA) and County Government audits, highlighting un-sealed building plans and stamp renting practices.
                </p>
              </div>
              <div className="bg-white border border-slate-300 p-5">
                <h3 className="text-base font-extrabold text-sky-700 mb-2">
                  National Building Code 2024 (NBC 2024) &amp; Eurocode Transition
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Cabinet Secretary gazetted NBC 2024, enforcing Eurocodes (BS EN 1990 - 1999) structural safety compliance, mandatory geotechnical soil tests, and independent peer reviews for high-occupancy towers.
                </p>
              </div>
            </div>
          </section>

          {/* 2. FORENSIC AUDIT: WHY CAP 525 & CAP 530 FAILED */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              Statutory Forensic Audit: Why Legacy Cap 525 (1968) Failed Modern Kenya
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enacted 58 years ago, Cap 525 was built for a pre-digital, colonial-era construction sector. Its structural defects directly contributed to un-regulated urban sprawl and recurring building collapses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Cap525Failures.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-red-600 p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <div className="text-xs text-red-700 bg-red-50 p-2 border border-red-200">
                    <strong>Legacy Defect:</strong> {item.problem}
                  </div>
                  <div className="text-xs text-emerald-800 bg-emerald-50 p-2 border border-emerald-200">
                    <strong>2026 Master Bill Solution:</strong> {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 5 KEY INSTITUTIONAL REFORM DOMAINS */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              5 Key Institutional Reform Domains (2018–2026)
            </h2>
            <div className="space-y-4">
              {reformEfforts.map((r, rIdx) => (
                <div key={rIdx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-emerald-600 p-5 md:p-6 space-y-2">
                  <span className="text-xs font-black text-emerald-700 uppercase block">{r.domain}</span>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{r.title}</h3>
                  <p className="text-xs font-semibold text-slate-500">Lead Stakeholders: {r.lead}</p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. 19-MILESTONE INTERACTIVE TIMELINE */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                19-Milestone Statutory Timeline (1968 to 2026)
              </h2>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setTimelineFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    timelineFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  All Milestones (19)
                </button>
                <button
                  onClick={() => setTimelineFilter('enacted')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    timelineFilter === 'enacted' ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Enacted Statutes
                </button>
                <button
                  onClick={() => setTimelineFilter('proposed')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    timelineFilter === 'proposed' ? 'bg-red-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Proposed / Stalled
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMilestones.map((m, mIdx) => (
                <div key={mIdx} className="bg-slate-50 border border-slate-300 p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-black text-red-700">{m.year}</span>
                    <span className="text-xs font-extrabold text-white px-2 py-0.5" style={{ background: m.badgeColor }}>
                      {m.status}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{m.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. THE 20 STATUTORY PARTS BREAKDOWN */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-red-700 pb-3">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                The 20 Statutory Parts Executive Breakdown
              </h2>
              <span className="text-xs font-black text-red-700 bg-red-50 px-3 py-1 border border-red-200 uppercase">
                SECTIONS 1 TO 208
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Executive structural overview of all 20 Statutory Parts comprising the Master Consensus Bill 2026:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statutoryParts.map((p, pIdx) => (
                <div key={pIdx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-red-700 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-red-700 uppercase bg-red-100 px-2 py-0.5">{p.num}</span>
                    <Link href={`/viewer/interactive/${pIdx + 1}`} className="text-xs font-bold text-slate-500 hover:text-red-700 transition-colors">
                      View Part Dossier →
                    </Link>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{p.label}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{p.scope}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. THE 14 STATUTORY SCHEDULES CARDS */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-sky-700 pb-3">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                The 14 Statutory Schedules Regulatory Matrix
              </h2>
              <span className="text-xs font-black text-sky-700 bg-sky-50 px-3 py-1 border border-sky-200 uppercase">
                SCHEDULES 1 TO 14
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statutorySchedules.map((s, sIdx) => (
                <div key={sIdx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-sky-600 p-5 space-y-2">
                  <span className="text-xs font-black text-sky-700 uppercase block">{s.num}</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{s.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{s.scope}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. PRINCIPAL AUTHOR ACCREDITATION DOSSIER CARD */}
          <footer className="bg-slate-900 text-slate-100 p-6 md:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 border border-emerald-800 uppercase inline-block">
                🏛️ PRINCIPAL LEGISLATIVE AUTHOR &amp; LEAD ARCHITECT
              </span>
              <span className="text-xs text-slate-400 font-semibold">KBERC STATUTORY REGISTER 2026</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white">
              Arch. Brian Nyagonchong&apos;a
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Lead Legislative Counsel &amp; Principal Architectural Consultant responsible for synthesizing 208 statutory sections, 14 schedules, and 8 regulated disciplines into the consolidated 2026 Master Bill.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
              <span>• BORAQS Registered Architect</span>
              <span>• Lead Counsel to Parliamentary Working Group</span>
              <span>• Co-author NBC 2024</span>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}
