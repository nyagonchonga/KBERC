'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export default function DefinitionsView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLetter, setActiveLetter] = useState<string>("ALL");

  const definitions = [
    {
      category: "Licensing & Practice",
      term: "Architect",
      definition: "A person registered under Part IV to practice architecture, spatial masterplanning, structural aesthetics, and building design, holding a valid annual Digital QR Practice Seal issued under Section 57.",
      usedIn: ["Section 2", "Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Governance & Institutions",
      term: "Apex Council (KBERC)",
      definition: "The Kenya Built Environment Regulatory Council established under Section 6 of this Act as the supreme regulatory authority over all built environment professions in Kenya.",
      usedIn: ["Section 2", "Section 6", "Section 7", "Part II"]
    },
    {
      category: "Fees & Procurement",
      term: "Baseline Scale of Fees",
      definition: "The statutory minimum fee tariffs gazetted under Section 70 and Schedule 12 defining percentage design fees (5.0%-6.5%) and advisory hourly rates (KES 10,000-15,000/hr).",
      usedIn: ["Section 70", "Schedule 12", "Part VII"]
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
      term: "Built Environment Appeals Tribunal",
      definition: "The specialized statutory judicial tribunal established under Section 141 and Schedule 2 to hear appeals regarding licensing, registration, disciplinary sanctions, or fee disputes.",
      usedIn: ["Section 141", "Schedule 2", "Part XIII"]
    },
    {
      category: "Governance & Institutions",
      term: "Cabinet Secretary",
      definition: "The Cabinet Secretary for the time being responsible for matters relating to the built environment, housing, and public works.",
      usedIn: ["Section 2", "Section 1", "Section 197", "Throughout the Act"]
    },
    {
      category: "Licensing & Practice",
      term: "Candidate Practitioner",
      definition: "A university or TVET graduate registered under Part IV undergoing 2 years of mandatory supervised internship logbook training before sitting Professional Practice Examinations (PPE).",
      usedIn: ["Section 25", "Part IV"]
    },
    {
      category: "Risk & Safety",
      term: "Certificate of Occupancy",
      definition: "A statutory certificate issued by a County Building Control Desk upon completion of Stage 6 site inspections certifying that a building is safe for human occupancy.",
      usedIn: ["Section 112", "Part X"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Construction Project Manager (CPM)",
      definition: "A professional registered under Part IV responsible for directing site operations, quality assurance, safety coordination, project timelines, and contractual delivery.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Governance & Institutions",
      term: "County Building Control Desk",
      definition: "The technical unit established within each of the 47 County Governments under Section 188 responsible for receiving development applications, conducting site audits, and issuing permits.",
      usedIn: ["Section 2", "Section 98", "Section 188", "Part XVII"]
    },
    {
      category: "Licensing & Practice",
      term: "Digital QR Seal",
      definition: "A cryptographically secure, machine-readable digital stamp issued annually under Section 57 to verified lead practitioners possessing valid Professional Indemnity Insurance (PII) cover.",
      usedIn: ["Section 2", "Section 57", "Section 58", "Part VI"]
    },
    {
      category: "Governance & Institutions",
      term: "Disciplinary Committee",
      definition: "The statutory committee established under Section 117 to hear complaints of professional misconduct, conduct formal hearings, and impose statutory sanctions.",
      usedIn: ["Section 117", "Part XI"]
    },
    {
      category: "Risk & Safety",
      term: "Disaster Emergency Fund",
      definition: "A statutory fund established under Section 135 earmarking 5% of KBERC revenue for immediate 6-hour emergency collapse forensic audits and evidence shoring.",
      usedIn: ["Section 135", "Section 168", "Part XII", "Part XV"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Engineer",
      definition: "A professional registered under Part IV to design, analyze, and inspect civil, structural, mechanical, or electrical systems for buildings and infrastructure works.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Risk & Safety",
      term: "Eurocodes & Consequence Classes (CC1-CC3)",
      definition: "Structural design reliability classifications integrated into the Part VIII 5-Tier Building Risk Matrix matching building height, storeys, and occupancy to peer-review rules.",
      usedIn: ["Section 82", "Section 89", "Schedule 4"]
    },
    {
      category: "Licensing & Practice",
      term: "Foreign Practitioner",
      definition: "A non-citizen consultant granted a temporary 12-month practice license under Section 32 paired with a registered local Lead Professional.",
      usedIn: ["Section 32", "Part IV"]
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
      category: "Disciplines & Cadres",
      term: "Interior Designer",
      definition: "A professional registered under Part IV specializing in interior spatial ergonomics, acoustic performance, interior specifications, and fire safety egress layouts.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Landscape Architect",
      definition: "A professional registered under Part IV specializing in outdoor site ecology, environmental spatial planning, urban parks, and landscape design.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
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
      definition: "A corporate consultancy licensed under Section 45 where at least 51% of voting shares are held by registered local lead practitioners across multiple disciplines.",
      usedIn: ["Section 45", "Part V"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Physical & Land Use Planner",
      definition: "A professional registered under Part IV specializing in regional spatial zoning, land use policy frameworks, urban planning, and County physical development plans.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Risk & Safety",
      term: "Practical Completion",
      definition: "The stage where a project is structurally sound, safe for its intended use, and free from known material defects, notwithstanding minor aesthetic snags.",
      usedIn: ["Section 2", "Section 112"]
    },
    {
      category: "Licensing & Practice",
      term: "Practising Certificate",
      definition: "A certificate issued annually under Part VI authorizing a registered professional to practice, linked to an active Digital QR Seal and PII cover.",
      usedIn: ["Section 2", "Section 57", "Part VI"]
    },
    {
      category: "Risk & Safety",
      term: "Professional Indemnity Insurance (PII)",
      definition: "Mandatory insurance cover required under Section 58 ranging from KES 20 Million to KES 200 Million based on project risk class to protect building owners against design negligence.",
      usedIn: ["Section 58", "Part VI"]
    },
    {
      category: "Fees & Procurement",
      term: "Prohibition of Under-cutting",
      definition: "Statutory restriction under Section 75 forbidding practitioners from bidding below gazetted minimum fee scales to prevent predatory price cutting that compromises site supervision.",
      usedIn: ["Section 75", "Part VII"]
    },
    {
      category: "Governance & Institutions",
      term: "Quantity Surveyor Board (QSRB)",
      definition: "An independent discipline board established under Part XIX to manage quantity surveying professional exams, registration, and technical standards.",
      usedIn: ["Section 201", "Part XIX"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Quantity Surveyor",
      definition: "A professional registered under Part IV specializing in building measurement, cost planning, preparation of bills of quantities, financial valuation, and contract administration.",
      usedIn: ["Section 14", "Part IV", "Schedule 3"]
    },
    {
      category: "Governance & Institutions",
      term: "Registrar / Chief Executive Officer",
      definition: "The Chief Executive Officer of the Council appointed under Section 12 responsible for maintaining the National Register, issuing digital QR seals, and directing Council staff.",
      usedIn: ["Section 12", "Part II"]
    },
    {
      category: "Licensing & Practice",
      term: "Reserved Professional Work",
      definition: "Categories of technical design, measurement, and site supervision work restricted under Section 43 exclusively to registered lead professionals.",
      usedIn: ["Section 43", "Part V"]
    },
    {
      category: "Licensing & Practice",
      term: "Specialist Professional",
      definition: "A practitioner with advanced post-graduate accreditation under Section 36 in complex domains such as deep basement geotechnical engineering, seismic dynamics, or high-consequence towers.",
      usedIn: ["Section 36", "Part IV", "Part VIII"]
    },
    {
      category: "Disciplines & Cadres",
      term: "Technologist",
      definition: "A practitioner holding a Bachelor of Technology degree registered under Part IV to execute technical design support and site supervision within defined statutory scopes.",
      usedIn: ["Section 2", "Section 14", "Part IV"]
    },
    {
      category: "Licensing & Practice",
      term: "Unauthorized Affixation of a Professional Seal",
      definition: "The stamping, signing, or digital authorization of built environment documents by a registered professional on behalf of a person who is not legally authorized to produce such documents ('seal lending').",
      usedIn: ["Section 2", "Section 57", "Section 157", "Part XIV"]
    },
    {
      category: "Licensing & Practice",
      term: "Unlawful Practice",
      definition: "The practice of a built environment profession by a person who is not registered under Part IV, or the masquerading as a registered professional by any means.",
      usedIn: ["Section 2", "Section 25", "Section 155", "Part XIV"]
    },
    {
      category: "Risk & Safety",
      term: "6-Hour Emergency Collapse Audit Protocol",
      definition: "The statutory emergency procedure under Section 168 requiring independent forensic engineering teams to deploy to structural collapse sites within 6 hours of notification.",
      usedIn: ["Section 168", "Part XV"]
    }
  ];

  const categories = [
    { id: "all", label: "⚡ All Statutory Terms (37)" },
    { id: "Licensing & Practice", label: "🎓 Licensing & Practice (12)" },
    { id: "Disciplines & Cadres", label: "📐 Disciplines & Cadres (8)" },
    { id: "Governance & Institutions", label: "🏛️ Governance & Tribunal (9)" },
    { id: "Risk & Safety", label: "⚠️ Risk, Safety & QR Seals (6)" },
    { id: "Fees & Procurement", label: "💰 Scale of Fees & Procurement (2)" }
  ];

  const alphabet = ["ALL", "A", "B", "C", "D", "E", "F", "H", "I", "L", "M", "P", "Q", "R", "S", "T", "U", "6"];

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: '#475569' }}>
          <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
          <span>›</span>
          <span style={{ color: '#ef4444', fontWeight: 600 }}>Statutory Legal Dictionary (100% Bill Coverage)</span>
        </div>

        {/* Hero Header */}
        <header style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '6px 16px', borderRadius: 0, marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              100% STATUTORY COVERAGE • SECTION 2 &amp; ALL PARTS
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
            Authoritative Statutory Legal Dictionary
          </h1>
          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '900px', lineHeight: 1.7, margin: 0 }}>
            Complete 100% coverage of all 37 statutory terms, legal concepts, and regulatory definitions enacted across Section 2 and all 20 Parts of the Built Environment Professions &amp; Practice Bill 2026.
          </p>
        </header>

        {/* Search Bar & Alphabet Filter */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 0, border: '1px solid #CBD5E1', marginBottom: '32px' }}>
          <input 
            type="text" 
            placeholder="Search for any legal term, statutory concept, or section (e.g. Lead Professional, QR Seal, Peer Review, Section 57)..." 
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
                  background: activeLetter === letter ? '#ef4444' : 'rgba(255,255,255,0.05)',
                  color: activeLetter === letter ? '#FFF' : 'rgba(255,255,255,0.6)',
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
            Showing <strong style={{ color: '#ef4444' }}>{filteredDefs.length}</strong> of 37 Enacted Statutory Definitions
          </span>
        </div>

        {/* Definitions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredDefs.map((def, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 0, padding: '24px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ef4444', margin: 0 }}>{def.term}</h2>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#60A5FA', background: 'rgba(59,130,246,0.15)', padding: '4px 10px', borderRadius: 0, border: '1px solid rgba(59,130,246,0.25)', textTransform: 'uppercase' }}>
                  {def.category}
                </span>
              </div>
              
              <p style={{ fontSize: '14px', color: '#1E293B', lineHeight: 1.7, margin: '0 0 16px 0' }}>{def.definition}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '11px', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Statutory Cross-References:</span>
                {def.usedIn.map(loc => (
                  <span key={loc} style={{ background: '#FFFFFF', color: '#ef4444', border: '1px solid rgba(16,185,129,0.25)', padding: '4px 10px', borderRadius: 0, fontSize: '11px', fontWeight: 700 }}>
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {filteredDefs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 24px', background: '#FFFFFF', borderRadius: 0, border: '1px dashed rgba(255,255,255,0.15)', color: '#64748B' }}>
              No statutory definitions found matching "{searchTerm}". Try clearing search filters or selecting "ALL" in the alphabet index.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
