import pathlib

reg_file = pathlib.Path("src/app/viewer/registration/page.tsx")

code = """'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Complete100PercentRegistrationPathways() {
  const [activeTab, setActiveTab] = useState<'individual' | 'tvet' | 'firms' | 'contractors' | 'nca_interface' | 'specialized' | 'student' | 'calculator'>('nca_interface');

  // Calculator State
  const [userDiscipline, setUserDiscipline] = useState<string>('arch');
  const [userQual, setUserQual] = useState<'degree' | 'hnd' | 'diploma' | 'certificate' | 'foreign'>('degree');
  const [userExp, setUserExp] = useState<number>(3);

  const ncaInterfacePillars = [
    {
      title: "1. Institutional Apex Council Representation",
      ref: "Part II Section 4(2)(f)",
      color: "#10B981",
      icon: "🏛️",
      desc: "The Executive Director / CEO of the National Construction Authority (NCA) sits as a statutory member on the KBERC Apex Council to ensure seamless inter-agency policy alignment between design consultants and building contractors."
    },
    {
      title: "2. Clear Division of Regulatory Mandates",
      ref: "Part III Section 20 & NCA Act 2011",
      color: "#3B82F6",
      icon: "⚖️",
      desc: "KBERC regulates Professional Design Consultants (Architects, Engineers, QSs, Planners) and issues Digital QR Seals. NCA regulates Construction Contractors (NCA 1 to NCA 8), registers site foremen, and enforces site physical safety gear."
    },
    {
      title: "3. Dual-Gate Site Commencement Protocol",
      ref: "Part XVII & Fourth Schedule",
      color: "#F59E0B",
      icon: "🚪",
      desc: "Gate 1: Lead Professionals apply Cryptographic Digital QR Seals to drawings. Gate 2: The Main Contractor submits QR drawings to NCA for the mandatory NCA Project Registration Certificate before groundbreaking."
    },
    {
      title: "4. Joint Stage Site Inspections & Stop-Work Orders",
      ref: "Part XVII & Section 24",
      color: "#EF4444",
      icon: "🚨",
      desc: "County Desks, KBERC Structural Engineers, and NCA Officers conduct mandatory joint site inspections (Foundation, Slab, Ring Beam). Any deviation from QR-sealed drawings triggers an immediate Joint Stop-Work Order."
    },
    {
      title: "5. Accredited Site Supervisor Requirement",
      ref: "Section 28(3) & Part VIII",
      color: "#8B5CF6",
      icon: "👷",
      desc: "Contractors are legally required to employ KBERC-registered Built Environment Technicians or NCA-accredited Site Supervisors to oversee daily concrete pours and steel rebar placing, eliminating unqualified fundi supervision."
    },
    {
      title: "6. Building Collapse Liability Partition",
      ref: "Part X (Sec 85-110) & Sec 180",
      color: "#EC4899",
      icon: "🏚️",
      desc: "Design defects are prosecuted by KBERC against Lead Professionals (fines up to KES 5M & license revocation). Material defiance or poor concrete mix is prosecuted by NCA & ODPP against the Contractor for criminal liability."
    }
  ];

  const individualDisciplines = [
    { title: "Architects & Landscape Architects", ref: "Sec 20(1)(a) & Sec 25", badge: "ARB Regulator", color: "#F97316", req: "B.Arch / B.LA (5-6 Yrs) + 2 Yrs Logbook + ARB Professional Exam", scope: "Architectural design, space planning, building envelope & QR Seal" },
    { title: "Quantity Surveyors & Cost Engineers", ref: "Sec 20(1)(b) & Sec 25", badge: "QSRB Regulator", color: "#EAB308", req: "B.Sc QS / Building Economics + 2 Yrs Logbook + QSRB Professional APC Exam", scope: "BQs, elemental cost estimates, contract administration, First Schedule fee enforcement" },
    { title: "Structural & Civil Engineers", ref: "Sec 20(1)(c) & Fourth Sched", badge: "EBK Harmonized", color: "#0284C7", req: "B.Sc Civil/Structural Engineering + 3 Yrs Logbook + EBK Professional Exam", scope: "Eurocode structural design (BS EN 1990-1998), foundation design, structural safety audit" },
    { title: "MEP Engineers (Mechanical & Electrical)", ref: "Sec 20(1)(c) & Fourth Sched", badge: "EBK Harmonized", color: "#008080", req: "B.Sc Mechanical/Electrical Engineering + 3 Yrs Logbook + EBK Exam", scope: "HVAC, plumbing, electrical distribution, fire suppression, elevator design" },
    { title: "Interior Designers & Fit-Out Specialists", ref: "Sec 20(1)(d) & Sec 25", badge: "IDRB Regulator", color: "#EC4899", req: "B.A / B.Sc Interior Design + 2 Yrs Logbook + IDRB Professional Assessment", scope: "Commercial interior fit-out, acoustic design, interior fire resistance & materials toxicity" },
    { title: "Project & Construction Managers", ref: "Sec 20(1)(e) & Sec 25", badge: "PMRB Regulator", color: "#8B5CF6", req: "B.Sc Construction Management / PM + 3 Yrs Logbook + PMRB Exam", scope: "Site project management, quality assurance logs, site safety & program scheduling" },
    { title: "Physical & Urban Planners", ref: "Sec 20(1)(f) & PLUPA 2019", badge: "PPRB Harmonized", color: "#A855F7", req: "B.A / B.Sc Urban Planning + 2 Yrs Logbook + PPRB Exam", scope: "County master planning, spatial zoning compliance, change-of-user & density caps" },
    { title: "Land Surveyors & Geomatics Engineers", ref: "Sec 20(1)(g) & Sec 25", badge: "LSGB Harmonized", color: "#06B6D4", req: "B.Sc Surveying / Geomatics + 2 Yrs Logbook + LSGB Exam", scope: "Cadastral boundary verification, GIS mapping, site beaconing & topography" }
  ];

  const tvetPathways = [
    { title: "Built Environment Technologist", ref: "Section 28(2)", credential: "Higher National Diploma (HND) / B.Tech Degree", exp: "3 Years Supervised Practice", scope: "Technical design execution, engineering site supervision for Risk Classes A to C." },
    { title: "Built Environment Technician", ref: "Section 28(3)", credential: "TVET National Diploma (Ordinary Diploma)", exp: "2 Years Supervised Practice", scope: "Technical drafting, quantity takeoff assistance, site inspection support." },
    { title: "Artisan & Skilled Craftsman", ref: "Section 28(5)", credential: "TVET Craft Certificate / NITA Trade Test I & II", exp: "1 Year Apprenticeship", scope: "Specialized masonry, steel fixing, plumbing installation, electrical wiring." },
    { title: "Technologist Bridging to Lead Professional", ref: "Section 28(4)", credential: "HND / B.Tech + 5 Years Experience + KBERC Exam", exp: "5 Years Post-HND Experience", scope: "Full Lead Professional practice rights and QR seal authorization upon passing exam." }
  ];

  const firmRequirements = [
    { title: "Single-Discipline Professional Firm", ref: "Section 55(1)", req: "100% owned by registered Lead Professionals of that discipline", scope: "Practises within declared professional discipline" },
    { title: "Multidisciplinary Consultancy Consortium", ref: "Section 55(2)", req: "Min 51% equity owned by KBERC Lead Professionals across disciplines", scope: "Full multidisciplinary design, engineering & cost management" },
    { title: "Mandatory Professional Indemnity (PII)", ref: "Section 58", req: "KES 50 Million to KES 200 Million cover based on portfolio risk", scope: "Financial security against professional negligence & structural claims" },
    { title: "Corporate Digital QR Seal", ref: "Section 60", req: "Issued upon KBERC firm accreditation audit", scope: "Corporate certification of tender & working drawings" }
  ];

  const contractorPathways = [
    { title: "Main Building Contractor (NCA 1 to NCA 8)", ref: "NCA Harmonized (Sec 20)", req: "NCA Registration, audited financial statements, accredited technical staff", scope: "Main building construction execution based on registered category limit" },
    { title: "Specialist Sub-Contractor", ref: "NCA Harmonized", req: "Specialist license in Electrical, Plumbing, HVAC, Steel Structure, or Piling", scope: "Specialized sub-contracting works under Main Contractor supervision" },
    { title: "Accredited Site Supervisor & Foreman", ref: "NCA & KBERC (Sec 28)", req: "TVET Diploma / Certificate + KBERC Site Safety Certification", scope: "Direct on-site daily supervision of trade workers & safety enforcement" }
  ];

  const specializedPathways = [
    { title: "Foreign & Reciprocal Practitioner", ref: "Section 35", req: "Home country registration + Mandatory 50% Local Lead JV + NBC Exam", scope: "Temporary 12-month project-specific licence" },
    { title: "Specialist Professional Accreditation", ref: "Section 36", req: "Lead Professional + Post-graduate specialty (Fire, Dynamics, Conservation)", scope: "High-consequence risk projects (Class E high-rises & dams)" },
    { title: "Emergency Structural Auditor", ref: "Section 180", req: "KBERC Structural Specialist + County appointment", scope: "Emergency structural failure assessment & demolition authorization" }
  ];

  const studentSteps = [
    { num: "01", title: "Matriculation Student Indexing", ref: "Section 27(1)", badge: "Mandatory Indexing", desc: "Universities/TVETs submit student lists within 90 days of admission. KBERC issues a National Student Index Number." },
    { num: "02", title: "Industrial Attachment Logbook", ref: "Section 27(3)", badge: "24-48 Weeks Attachment", desc: "Supervised practical training recorded in KBERC logbook under a registered Lead Professional." },
    { num: "03", title: "Student Chapter Mentorship", ref: "Section 86", badge: "Professional Mentorship", desc: "Free student membership in professional associations (AAK, IQSK, IEK) with accredited CPD access." },
    { num: "04", title: "Automatic Candidate Transition", ref: "Section 28", badge: "Seamless Transition", desc: "Automatic transition into Candidate Practitioner Register upon degree/diploma graduation." }
  ];

  // Calculator Logic
  const getCalcEligibility = () => {
    if (userQual === 'degree') {
      if (userExp >= 2) {
        return {
          title: "Eligible for Lead Professional Registration & Exam",
          color: "#10B981",
          ref: "Section 29",
          seal: "Cryptographic Digital QR Seal Authorized upon passing exam",
          scope: "All Building Risk Classes (Class A to Class E)"
        };
      } else {
        return {
          title: "Registered Candidate Practitioner",
          color: "#3B82F6",
          ref: "Section 28(1)",
          seal: "Supervised Practice Only (No Digital Seal)",
          scope: "Supervised assistance under Lead Professional"
        };
      }
    } else if (userQual === 'hnd') {
      if (userExp >= 5) {
        return {
          title: "Eligible for Technologist Bridging Evaluation to Lead Professional",
          color: "#F59E0B",
          ref: "Section 28(4)",
          seal: "Digital Seal Authorized after Bridging Exam",
          scope: "Risk Class A to D Projects"
        };
      } else {
        return {
          title: "Registered Built Environment Technologist",
          color: "#06B6D4",
          ref: "Section 28(2)",
          seal: "Technologist Site License",
          scope: "Risk Class A to C Projects"
        };
      }
    } else if (userQual === 'diploma') {
      return {
        title: "Registered Built Environment Technician",
        color: "#8B5CF6",
        ref: "Section 28(3)",
        seal: "Technician Certification Badge",
        scope: "Technical Drafting & Site Inspection Assistance"
      };
    } else if (userQual === 'certificate') {
      return {
        title: "Accredited Skilled Artisan / Craftsman",
        color: "#EAB308",
        ref: "Section 28(5)",
        seal: "TVET / NCA Skills Card",
        scope: "Specialized Trade Execution under Supervision"
      };
    } else {
      return {
        title: "Foreign Practitioner Temporary JV Licensing Pathway",
        color: "#EC4899",
        ref: "Section 35",
        seal: "Temporary Project-Specific QR Seal",
        scope: "Project-Specific Joint Venture Practice"
      };
    }
  };

  const calcRes = getCalcEligibility();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#020617',
      color: '#F8FAFC',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      padding: '32px 24px 96px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .glass-panel { background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 32px; backdrop-filter: blur(16px); }
        .nav-pill { padding: 10px 20px; border-radius: 12px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; transition: all 0.2s; border: none; }
      `}</style>

      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Top Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
          <Link href="/viewer" style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>🏠</span>
            <span>Viewer Hub</span>
          </Link>
          <span>›</span>
          <span style={{ color: '#10B981', fontWeight: 600 }}>100% Comprehensive Statutory Pathways Dossier</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
            <Link href="/viewer/map" style={{ padding: '8px 16px', borderRadius: '10px', background: '#10B981', color: '#FFF', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🗺️ Visual Bill Map (18 Organs)
            </Link>
            <Link href="/viewer/read" style={{ padding: '8px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              📖 Read Official Bill
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#10B981', letterSpacing: '0.25em', textTransform: 'uppercase', background: 'rgba(16,185,129,0.1)', padding: '6px 18px', borderRadius: '9999px', border: '1px solid rgba(16,185,129,0.2)' }}>
            STATUTORY INTERFACE DOSSIER • KBERC BILL 2026
          </span>

          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', margin: '20px 0 16px 0', lineHeight: 1.15 }}>
            Statutory Interface: KBERC, NCA &amp; Building Contractors
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '960px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Detailed breakdown of how the Built Environment Bill 2026 interacts with the National Construction Authority (NCA), Main Contractors (NCA 1-8), Sub-Contractors, and Site Supervisors across site approvals, stage inspections, and liability partition.
          </p>

          {/* Navigation Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'nca_interface', label: '🏗️ NCA & Contractors Statutory Interface' },
              { id: 'individual', label: '👥 8 Regulated Disciplines' },
              { id: 'tvet', label: '🛠️ TVET & Skills Cadres' },
              { id: 'firms', label: '🏢 Corporate Consultancies (Part VII)' },
              { id: 'contractors', label: '👷 Contractors & Site Supervisors' },
              { id: 'specialized', label: '🌐 Foreign JVs & Specialists' },
              { id: 'student', label: '🎒 Student Indexing Lifecycle' },
              { id: 'calculator', label: '🧮 Eligibility Calculator' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="nav-pill"
                style={{
                  background: activeTab === tab.id ? '#10B981' : 'rgba(255,255,255,0.04)',
                  color: activeTab === tab.id ? '#FFF' : 'rgba(255,255,255,0.5)',
                  border: activeTab === tab.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: NCA & Contractors Interface Dossier */}
        {activeTab === 'nca_interface' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#10B981', marginBottom: '12px' }}>
              🏗️ 6 Core Pillars of Interaction: KBERC vs. NCA &amp; Building Contractors
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
              Under the Built Environment Bill 2026, KBERC regulates <strong>Design Consultants</strong> (Architects, Engineers, QSs, Planners) while NCA regulates <strong>Construction Execution Entities</strong> (Main Contractors, Sub-contractors, Site Foremen). Here is how the two statutory systems interface across the 20 Parts of the Bill:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {ncaInterfacePillars.map((p, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: `1px solid ${p.color}30` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '24px' }}>{p.icon}</span>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: p.color, background: `${p.color}20`, padding: '3px 8px', borderRadius: '6px' }}>{p.ref}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Disciplines */}
        {activeTab === 'individual' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#10B981', marginBottom: '16px' }}>
              👥 All 8 Regulated Individual Professional Disciplines (Section 20 &amp; Part IV)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {individualDisciplines.map((d, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: `1px solid ${d.color}30` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: d.color, background: `${d.color}20`, padding: '3px 8px', borderRadius: '6px' }}>{d.ref}</span>
                    <span style={{ fontSize: '9px', fontWeight: 900, color: '#FFF', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '999px' }}>{d.badge}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>{d.title}</h3>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}><strong>Requirements:</strong> {d.req}</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}><strong>Scope of Practice:</strong> {d.scope}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TVET Pathways */}
        {activeTab === 'tvet' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#F59E0B', marginBottom: '16px' }}>
              🛠️ TVET Technologist, Technician &amp; Skilled Artisan Pathways (Section 28)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {tvetPathways.map((tv, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: '1px solid rgba(245,158,11,0.2)' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#F59E0B', background: 'rgba(245,158,11,0.1)', padding: '3px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: '8px' }}>{tv.ref}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '6px' }}>{tv.title}</h3>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}><strong>Credential:</strong> {tv.credential}</div>
                  <div style={{ fontSize: '11px', color: '#10B981', marginBottom: '8px' }}><strong>Experience Needed:</strong> {tv.exp}</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{tv.scope}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Corporate Firms */}
        {activeTab === 'firms' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1', marginBottom: '16px' }}>
              🏢 Corporate Consultancy &amp; Multidisciplinary Firm Licensing (Part VII Sec 55–64)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {firmRequirements.map((f, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: '1px solid rgba(99,102,241,0.2)' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#818CF8', background: 'rgba(99,102,241,0.1)', padding: '3px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: '8px' }}>{f.ref}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '6px' }}>{f.title}</h3>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}><strong>Requirement:</strong> {f.req}</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{f.scope}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contractors */}
        {activeTab === 'contractors' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#EAB308', marginBottom: '16px' }}>
              🏗️ Contractors, Sub-Contractors &amp; Accredited Site Supervisors
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {contractorPathways.map((c, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: '1px solid rgba(234,179,8,0.2)' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#EAB308', background: 'rgba(234,179,8,0.1)', padding: '3px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: '8px' }}>{c.ref}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '6px' }}>{c.title}</h3>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}><strong>Requirements:</strong> {c.req}</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{c.scope}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Foreign & Specialized */}
        {activeTab === 'specialized' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#EC4899', marginBottom: '16px' }}>
              🌐 Foreign Practitioner JVs, Specialists &amp; Emergency Audits
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {specializedPathways.map((s, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: '1px solid rgba(236,72,153,0.2)' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#EC4899', background: 'rgba(236,72,153,0.1)', padding: '3px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: '8px' }}>{s.ref}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '6px' }}>{s.title}</h3>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}><strong>Requirements:</strong> {s.req}</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{s.scope}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Student Steps */}
        {activeTab === 'student' && (
          <div className="glass-panel">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#3B82F6', marginBottom: '16px' }}>
              🎒 Student Indexing &amp; Academic Lifecycle (Section 27)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {studentSteps.map((st, i) => (
                <div key={i} style={{ background: '#020617', padding: '24px', borderRadius: '16px', border: '1px solid rgba(59,130,246,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#60A5FA', background: 'rgba(59,130,246,0.1)', padding: '3px 8px', borderRadius: '6px' }}>STEP {st.num}</span>
                    <span style={{ fontSize: '9px', fontWeight: 900, color: '#10B981', border: '1px solid rgba(16,185,129,0.3)', padding: '2px 8px', borderRadius: '999px' }}>{st.badge}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '4px' }}>{st.title}</h3>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{st.ref}</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Eligibility Calculator */}
        {activeTab === 'calculator' && (
          <div className="glass-panel" style={{ maxWidth: '840px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#10B981', marginBottom: '8px', textAlign: 'center' }}>
              🧮 Interactive Registration Eligibility Calculator
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '32px' }}>
              Select your qualification and years of experience to calculate your statutory registration status under KBERC 2026.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Qualification Level:
                </label>
                <select
                  value={userQual}
                  onChange={(e) => setUserQual(e.target.value as any)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#020617', border: '1px solid rgba(255,255,255,0.15)', color: '#FFF', fontSize: '13px', outline: 'none' }}
                >
                  <option value="degree">Bachelor Degree (Architecture, QS, Engineering, CM, Planning)</option>
                  <option value="hnd">TVET Higher National Diploma (HND / B.Tech)</option>
                  <option value="diploma">TVET National Diploma (Ordinary Diploma)</option>
                  <option value="certificate">TVET Craft Certificate / Trade Test</option>
                  <option value="foreign">Foreign University Degree (Outside EAC)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Years of Supervised Experience ({userExp} Years):
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={userExp}
                  onChange={(e) => setUserExp(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer', height: '24px' }}
                />
              </div>
            </div>

            <div style={{ background: '#020617', padding: '28px', borderRadius: '16px', border: `2px solid ${calcRes.color}` }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: calcRes.color, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>
                CALCULATED STATUTORY ELIGIBILITY • {calcRes.ref}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#FFF', marginBottom: '16px' }}>{calcRes.title}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ color: calcRes.color, fontWeight: 900 }}>🔐 Digital Seal Status:</span>
                  <span>{calcRes.seal}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ color: calcRes.color, fontWeight: 900 }}>🏗️ Authorized Scope of Building Risk:</span>
                  <span>{calcRes.scope}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
"""

reg_file.write_text(code, encoding="utf-8")
print("Successfully built NCA and Contractors Statutory Interface tab in src/app/viewer/registration/page.tsx!")
