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
      padding: "24px 32px 64px"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Navigation Breadcrumb & Presentation Deck Banner Link */}
        <header style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
          background: "#FFFFFF",
          padding: "16px 24px",
          borderRadius: "12px",
          border: "1px solid #CBD5E1",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/" style={{ color: "#64748B", fontSize: "13px", fontWeight: 600 }}>Home</Link>
            <span style={{ color: "#94A3B8" }}>›</span>
            <Link href="/viewer" style={{ color: "#64748B", fontSize: "13px", fontWeight: 600 }}>Viewer Portal</Link>
            <span style={{ color: "#94A3B8" }}>›</span>
            <span style={{ color: "#0F172A", fontSize: "13px", fontWeight: 800 }}>About &amp; Legislative Treatise</span>
          </div>

          <Link
            href="/viewer/slides"
            style={{
              padding: "10px 20px", fontSize: "13px", fontWeight: 900, borderRadius: "8px",
              background: "#B91C1C", color: "#FFFFFF", textDecoration: "none",
              display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(185,28,28,0.25)"
            }}
          >
            📊 Open Executive Presentation Deck (24 Slides &amp; PDF Export) ▶
          </Link>
        </header>

        {/* Main Document Body */}
        <main style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderRadius: "16px", padding: "40px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          
          {/* Document Header Title Block */}
          <div style={{ borderBottom: "3px solid #0F172A", paddingBottom: "24px", marginBottom: "36px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#B91C1C", textTransform: "uppercase", letterSpacing: "0.15em", background: "#FEF2F2", padding: "4px 10px", borderRadius: "4px", border: "1px solid #FECACA" }}>
              NATIONAL ASSEMBLY BILL NO. 14 OF 2026 • OFFICIAL STATUTORY TREATISE
            </span>
            <h1 style={{ fontSize: "34px", fontWeight: 900, color: "#0F172A", margin: "12px 0 8px 0", letterSpacing: "-0.02em" }}>
              Detailed Background &amp; Consensus Origins
            </h1>
            <p style={{ fontSize: "15.5px", color: "#475569", margin: 0, lineHeight: 1.7, maxWidth: "1000px" }}>
              The comprehensive statutory history, legislative deficiencies of legacy Cap 525, 2024–2026 sector current affairs, multi-board reform domains, and structural innovations behind <strong>The Built Environment Professions &amp; Practice Bill 2026</strong>.
            </p>
          </div>

          {/* 1. 2024-2026 SECTOR CURRENT AFFAIRS & CRISIS BRIEFING */}
          <section style={{ marginBottom: "44px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "28px" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              🚨 2024–2026 SECTOR CURRENT AFFAIRS &amp; CRISIS BRIEFING
            </span>
            <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: "8px 0 16px 0" }}>
              Recent Structural Collapses &amp; Statutory Enforcement Drives
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", padding: "18px", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#B91C1C", margin: "0 0 6px 0" }}>
                  Urban Building Collapses (Kahawa West Oct 2024, Kasarani &amp; Kiambu)
                </h3>
                <p style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6, margin: 0 }}>
                  Catastrophic failures of un-inspected multi-storey residential towers triggered National Construction Authority (NCA) and County Government audits, highlighting un-sealed building plans and stamp renting practices.
                </p>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", padding: "18px", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#0284C7", margin: "0 0 6px 0" }}>
                  National Building Code 2024 (NBC 2024) &amp; Eurocode Transition
                </h3>
                <p style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6, margin: 0 }}>
                  Cabinet Secretary gazetted NBC 2024, enforcing Eurocodes (BS EN 1990 - 1999) structural safety compliance, mandatory geotechnical soil tests, and independent peer reviews for high-occupancy towers.
                </p>
              </div>
            </div>
          </section>

          {/* 2. 5 KEY INSTITUTIONAL REFORM DOMAINS */}
          <section style={{ marginBottom: "44px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: "0 0 18px 0" }}>
              5 Key Institutional Reform Domains (2018–2026)
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {reformEfforts.map((r, rIdx) => (
                <div key={rIdx} style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderLeft: "5px solid #059669", padding: "20px 24px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: 900, color: "#059669", textTransform: "uppercase" }}>{r.domain}</span>
                  <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", margin: "4px 0 6px 0" }}>{r.title}</h3>
                  <p style={{ fontSize: "12.5px", fontWeight: 700, color: "#64748B", marginBottom: "8px" }}>Lead Stakeholders: {r.lead}</p>
                  <p style={{ fontSize: "13.5px", color: "#334155", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 19-MILESTONE INTERACTIVE TIMELINE */}
          <section style={{ marginBottom: "44px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0 }}>
                19-Milestone Statutory Timeline (1968 to 2026)
              </h2>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => setTimelineFilter('all')}
                  style={{ padding: "6px 14px", fontSize: "12px", fontWeight: 800, borderRadius: "6px", background: timelineFilter === 'all' ? "#0F172A" : "#E2E8F0", color: timelineFilter === 'all' ? "#FFFFFF" : "#475569", border: "none", cursor: "pointer" }}
                >
                  All Milestones (19)
                </button>
                <button
                  onClick={() => setTimelineFilter('enacted')}
                  style={{ padding: "6px 14px", fontSize: "12px", fontWeight: 800, borderRadius: "6px", background: timelineFilter === 'enacted' ? "#059669" : "#E2E8F0", color: timelineFilter === 'enacted' ? "#FFFFFF" : "#475569", border: "none", cursor: "pointer" }}
                >
                  Enacted Statutes
                </button>
                <button
                  onClick={() => setTimelineFilter('proposed')}
                  style={{ padding: "6px 14px", fontSize: "12px", fontWeight: 800, borderRadius: "6px", background: timelineFilter === 'proposed' ? "#DC2626" : "#E2E8F0", color: timelineFilter === 'proposed' ? "#FFFFFF" : "#475569", border: "none", cursor: "pointer" }}
                >
                  Proposed / Stalled
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {filteredMilestones.map((m, mIdx) => (
                <div key={mIdx} style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", padding: "18px", borderRadius: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: "#B91C1C" }}>{m.year}</span>
                    <span style={{ fontSize: "10px", fontWeight: 900, color: "#FFFFFF", background: m.badgeColor, padding: "3px 8px", borderRadius: "4px" }}>{m.status}</span>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", margin: "0 0 6px 0" }}>{m.title}</h3>
                  <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.55, margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. THE 14 STATUTORY SCHEDULES CARDS */}
          <section style={{ marginBottom: "44px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: "0 0 18px 0" }}>
              The 14 Statutory Schedules Regulatory Matrix
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {statutorySchedules.map((s, sIdx) => (
                <div key={sIdx} style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderLeft: "5px solid #0284C7", padding: "18px", borderRadius: "8px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: 900, color: "#0284C7", textTransform: "uppercase" }}>{s.num}</span>
                  <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", margin: "4px 0 6px 0" }}>{s.title}</h3>
                  <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.55, margin: 0 }}>{s.scope}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. PRINCIPAL AUTHOR ACCREDITATION DOSSIER CARD */}
          <footer style={{ background: "#0F172A", color: "#F8FAFC", padding: "32px 36px", borderRadius: "12px", border: "1px solid #334155" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: 900, color: "#059669", background: "rgba(5,150,105,0.15)", padding: "4px 12px", borderRadius: "4px", textTransform: "uppercase" }}>
                🏛️ PRINCIPAL LEGISLATIVE AUTHOR &amp; LEAD ARCHITECT
              </span>
              <span style={{ fontSize: "11px", color: "#94A3B8" }}>KBERC STATUTORY REGISTER 2026</span>
            </div>
            <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", margin: "0 0 6px 0" }}>
              Arch. Brian Nyagonchong&apos;a
            </h3>
            <p style={{ fontSize: "14px", color: "#CBD5E1", margin: "0 0 14px 0", lineHeight: 1.65 }}>
              Lead Legislative Counsel &amp; Principal Architectural Consultant responsible for synthesizing 208 statutory sections, 14 schedules, and 8 regulated disciplines into the consolidated 2026 Master Bill.
            </p>
            <div style={{ display: "flex", gap: "20px", fontSize: "12px", color: "#94A3B8" }}>
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
