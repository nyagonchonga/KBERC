'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CareerRoadmapPage() {
  const [selectedPathway, setSelectedPathway] = useState<'degree' | 'tvet' | 'foreign' | 'corporate' | 'fellow'>('degree');

  const degreeSteps = [
    { stage: "Year 0 - 5", title: "University Bachelor's Degree (B.Arch, B.Sc Eng, B.Qs, B.URP)", status: "Statutory KBERC Student Indexing (Sec 24)", icon: "🎓", detail: "Enrolled in accredited 5-year university program with annual student logbook audit." },
    { stage: "Year 5 - 7", title: "Professional Candidate Internship & Logbook Audit", status: "Candidate Practitioner under Lead Supervisor (Sec 25)", icon: "📋", detail: "2 years of mandatory full-time site supervision & design office internship under a licensed Lead Professional." },
    { stage: "Year 7", title: "Professional Practice Examination (PPE) & Oral Board Defense", status: "Board Licensing Gate", icon: "✍️", detail: "Passing written statutory exams, technical project submissions, and oral panel defense before the discipline board." },
    { stage: "Year 8+", title: "Full Lead Professional License & Digital QR Seal", status: "Independent Lead Practitioner (Sec 57)", icon: "🔒", detail: "Issuance of annual practicing certificate, Digital QR Seal, and mandatory Professional Indemnity Insurance cover (Sec 58)." },
    { stage: "Year 12+", title: "Specialist Professional Accreditation (Sec 36)", status: "High-Risk Class E Structural Specialist", icon: "⭐", detail: "Post-graduate accreditation in advanced geotechnical engineering, structural dynamics, or high-consequence towers." }
  ];

  const tvetSteps = [
    { stage: "Year 0 - 3", title: "TVET Diploma in Building, Civil, or Quantity Surveying", status: "Student Technician Registration", icon: "🎓", detail: "National TVET Level 6 Diploma training in technical drafting, site surveying, and materials testing." },
    { stage: "Year 3 - 5", title: "Technical Field Internship & Logbook", status: "Candidate Technician", icon: "📋", detail: "2-year practical site attachment supervised by a registered Lead Professional or Senior Technologist." },
    { stage: "Year 5", title: "Technical Registration Sign-Off & Licensing", status: "Registered Built Environment Technician", icon: "🛠️", detail: "Issuance of Technician License authorizing technical drafting, site measurement, and quality control." },
    { stage: "Year 5 - 8", title: "Technologist Progression (Higher Diploma / B.Tech Upgrade)", status: "Bachelor of Technology (B.Tech)", icon: "📜", detail: "3-year university degree bridge upgrading Technician qualification to Bachelor of Technology." },
    { stage: "Year 8+", title: "Registered Built Environment Technologist (B.Tech)", status: "Technologist Design Scope License (Sec 14)", icon: "⚙️", detail: "Independent statutory practice authorization within defined Technologist design boundaries." }
  ];

  const foreignSteps = [
    { stage: "Step 1", title: "Home Country Professional License Verification", status: "International Credential Audit (Sec 32)", icon: "🌍", detail: "Audit of foreign degree equivalency, active home country registration, and clean disciplinary record." },
    { stage: "Step 2", title: "Mandatory Joint Partnership Agreement", status: "51% Local Professional Equity Rule (Sec 45)", icon: "🤝", detail: "Execution of a legally binding joint venture agreement with a registered Kenyan Lead Professional." },
    { stage: "Step 3", title: "Temporary Practice License Application", status: "12-Month Non-Renewable Temporary License", icon: "📑", detail: "Council review and issuance of a temporary license tied specifically to one gazetted national project." },
    { stage: "Step 4", title: "Project Digital QR Stamp Issuance", status: "Project-Bound Cryptographic Seal", icon: "🔒", detail: "Issuance of project-specific QR seal authorizing plan submission under local Lead supervision." }
  ];

  const corporateSteps = [
    { stage: "Step 1", title: "Partnership Agreement of Registered Lead Professionals", status: "Multidisciplinary Principal Formation (Sec 45)", icon: "🏛️", detail: "Execution of partnership deed between 2 or more registered Lead Professionals (Architects, Engineers, QSs)." },
    { stage: "Step 2", title: "Section 45 51% Local Voting Equity Audit", status: "Local Professional Control Compliance", icon: "🏢", detail: "Statutory audit verifying that at least 51% of voting shares are held by registered local lead practitioners." },
    { stage: "Step 3", title: "Corporate Practice License & Firm QR Stamp", status: "Licensed Corporate Consultancy", icon: "🏷️", detail: "Issuance of annual KBERC Corporate Practice License and Firm Cryptographic Digital QR Stamp." },
    { stage: "Step 4", title: "Corporate Professional Indemnity Cover", status: "PII Cover Tiers (KES 50M to 200M)", icon: "🛡️", detail: "Placement of corporate PII insurance cover matching the firm's highest project risk profile." }
  ];

  const fellowSteps = [
    { stage: "Stage 1", title: "15+ Years Active Lead Practice Experience", status: "Senior Lead Professional", icon: "🏅", detail: "Minimum 15 years of uninterrupted registered practice with a clean statutory disciplinary record." },
    { stage: "Stage 2", title: "Peer-Reviewed Project Portfolio Submission", status: "Council Technical Evaluation", icon: "📊", detail: "Submission of major landmark project portfolios, research papers, or industry technical innovations." },
    { stage: "Stage 3", title: "Elevation to Fellow of Built Environment Regulatory Council", status: "Honorary Council Fellowship", icon: "👑", detail: "Formal gazettement and conferment of Council Fellowship status." },
    { stage: "Stage 4", title: "Statutory Listing as Independent Structural Peer Reviewer", status: "Class D & E Independent Peer Reviewer (Sec 89)", icon: "⚖️", detail: "Inclusion in the official Gazette roster of independent peer reviewers authorized to audit high-risk plans." }
  ];

  const pathways = [
    { id: 'degree', label: '🎓 University Degree Pathway', steps: degreeSteps, desc: '5-year university degree to Lead Professional & Specialist Accreditation.' },
    { id: 'tvet', label: '🛠️ TVET Technician & Technologist Pathway', steps: tvetSteps, desc: 'TVET Diploma to Registered Technician & B.Tech Technologist progression.' },
    { id: 'foreign', label: '🌍 Foreign Temporary Licensing (Sec 32)', steps: foreignSteps, desc: 'Statutory temporary licensing process for non-citizen foreign consultants.' },
    { id: 'corporate', label: '🏢 Corporate Firm Licensing (Sec 45)', steps: corporateSteps, desc: 'Forming a multidisciplinary firm with 51% local professional voting equity.' },
    { id: 'fellow', label: '🎖️ Fellow & Independent Peer Reviewer (Sec 89)', steps: fellowSteps, desc: 'Senior practitioner elevation to Fellow & Class D/E Structural Peer Reviewer.' }
  ];

  const currentPathwayObj = pathways.find(p => p.id === selectedPathway) || pathways[0];

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: '#475569' }}>
          <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
          <span>›</span>
          <Link href="/viewer/tools" style={{ color: '#64748B' }}>Interactive Tools</Link>
          <span>›</span>
          <span style={{ color: '#F59E0B', fontWeight: 600 }}>Statutory Career &amp; Licensing Roadmap</span>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#F59E0B', background: 'rgba(245,158,11,0.1)', padding: '6px 16px', borderRadius: 0, border: '1px solid rgba(245,158,11,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'inline-block', marginBottom: '12px' }}>
            CREATIVE TOOL 4 • 5 STATUTORY PROGRESSION PATHWAYS (PART IV)
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
            Complete Student &amp; Practitioner Statutory Career Roadmap
          </h1>
          <p style={{ fontSize: '15px', color: '#475569', maxWidth: '880px', margin: '0 auto', lineHeight: 1.7 }}>
            Explore all 5 statutory career progression pathways enacted under Part IV (Sections 24–42) of the Built Environment Professions &amp; Practice Bill 2026.
          </p>
        </div>

        {/* Pathway Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          {pathways.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPathway(p.id as any)}
              style={{
                padding: '10px 18px', borderRadius: 0, fontSize: '12px', fontWeight: 800,
                background: selectedPathway === p.id ? '#F59E0B' : '#FFFFFF',
                color: selectedPathway === p.id ? '#FFFFFF' : '#1e293b',
                border: selectedPathway === p.id ? '2px solid #F59E0B' : '2px solid #CBD5E1',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Pathway Description Banner */}
        <div style={{ background: '#FFFFFF', padding: '16px 20px', borderRadius: 0, border: '1px solid rgba(245,158,11,0.3)', borderLeft: '5px solid #F59E0B', marginBottom: '28px' }}>
          <strong style={{ fontSize: '11px', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
            PATHWAY DESCRIPTION &amp; STATUTORY SCOPE:
          </strong>
          <span style={{ fontSize: '13px', color: '#0F172A', fontWeight: 500 }}>
            {currentPathwayObj.desc}
          </span>
        </div>

        {/* Progression Steps Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {currentPathwayObj.steps.map((st, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', padding: '22px 26px', borderRadius: 0, border: '1px solid #CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '20px', transition: 'all 0.2s' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 0, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                {st.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{st.stage}</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#ef4444', background: 'rgba(16,185,129,0.15)', padding: '3px 10px', borderRadius: 0, }}>{st.status}</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '2px 0 6px' }}>{st.title}</h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>{st.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
