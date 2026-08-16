import pathlib

file_path = pathlib.Path("src/app/viewer/building-navigator/page.tsx")

cutaway_code = """'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BuildingStageNavigatorPage() {
  const [activeFloor, setActiveFloor] = useState<string>('frame');

  const buildingStages = [
    {
      id: "roof",
      level: "ROOF DECK & SOLAR ENVELOPE (LEVEL 16 / ROOF)",
      stageNum: "STAGE 5 • FORM KBERC-4",
      title: "Roof Truss Anchorage, Rainwater Drainage & Waterproof Deck Audit",
      leadDiscipline: "Lead Architect & Structural Engineer",
      formRef: "Form KBERC-4 (Roof Structural & Drainage Clearance)",
      deliverables: "Truss anchor tie-down checks, wind uplift resistance certification (BS EN 1991-1-4), 48-hour water flood test log.",
      sections: "Section 110",
      color: "#B45309",
      icon: "📐",
      cutawayBg: "#FEF3C7"
    },
    {
      id: "facade",
      level: "FACADE & CURTAIN WALL GLAZING (LEVELS 10-15)",
      stageNum: "STAGE 5 • FORM KBERC-4",
      title: "Building Envelope Weatherproofing & Wind Deflection Audit",
      leadDiscipline: "Lead Architect & Facade Engineering Specialist",
      formRef: "Form KBERC-4 (Building Envelope & Roof Integrity Certificate)",
      deliverables: "Curtain wall structural silicone anchor checks, wind pressure deflection test certificates, acoustic STC 45 insulation rating.",
      sections: "Section 110",
      color: "#D97706",
      icon: "🏢",
      cutawayBg: "#FFFBEB"
    },
    {
      id: "mep",
      level: "MEP RISER SHAFTS & HVAC MECHANICAL FLOOR (LEVEL 6)",
      stageNum: "STAGE 6 • FORM KBERC-5",
      title: "Electrical Load, HVAC Ducting & Sanitary Shafts Audit",
      leadDiscipline: "Electrical Engineer, Mechanical Engineer & Plumbing Specialist",
      formRef: "Form KBERC-5 (MEP Services & Electrical Installation Certificate)",
      deliverables: "Megger high-voltage insulation test, 10-bar hydro-pressure drop test on risers, HVAC CFM air velocity balancing log.",
      sections: "Section 111",
      color: "#CA8A04",
      icon: "🔌",
      cutawayBg: "#FEF9C3"
    },
    {
      id: "fire",
      level: "FIRE REFUGE FLOOR & SPRINKLER PUMP ROOM (LEVEL 5)",
      stageNum: "STAGE 7 • FORM KBERC-5A",
      title: "Active Life Safety, Fire Suppression & Egress Shaft Audit",
      leadDiscipline: "Fire Safety Engineer Specialist & Lead Architect",
      formRef: "Form KBERC-5A (Fire Safety & Life Safety Systems Audit Certificate)",
      deliverables: "Smoke extraction fan differential pressure log, 2-hour fire door integrity seal check, fire pump flow test (1000 GPM).",
      sections: "Section 112",
      color: "#DC2626",
      icon: "🚨",
      cutawayBg: "#FEE2E2"
    },
    {
      id: "pwd",
      level: "UNIVERSAL ACCESSIBILITY LIFT & RAMP WAY (LEVEL 4)",
      stageNum: "STAGE 8 • FORM KBERC-5B",
      title: "Persons with Disabilities (PWD) Accessibility & Lift Audit",
      leadDiscipline: "Lead Architect, Interior Designer & Accessibility Inspector",
      formRef: "Form KBERC-5B (PWD Accessibility & Lift Compliance Certificate)",
      deliverables: "Ramped entrance 1:12 slope audit, elevator emergency drop brake safety test, tactile paving & braille signage verification.",
      sections: "Section 113",
      color: "#9333EA",
      icon: "♿",
      cutawayBg: "#F3E8FF"
    },
    {
      id: "frame",
      level: "SUPERSTRUCTURE FRAME & SHEAR CORE (LEVELS 1-3)",
      stageNum: "STAGE 3 • FORM KBERC-3",
      title: "Reinforced Concrete Frame & Axial Structural Core Audit",
      leadDiscipline: "Lead Structural Engineer, Architect & Quantity Surveyor",
      formRef: "Form KBERC-3 (Column Ring Beam & Suspended Slab Sign-Off)",
      deliverables: "28-day concrete cube compressive strength logs (C25/30), steel rebar tensile yield test certificates, column verticality plumb-line audit.",
      sections: "Section 109",
      color: "#1D4ED8",
      icon: "🏛️",
      cutawayBg: "#DBEAFE"
    },
    {
      id: "substructure",
      level: "GROUND BEARING SLAB & TANKING MEMBRANE (LEVEL 0)",
      stageNum: "STAGE 2 • FORM KBERC-2",
      title: "Ground Slab Concrete & Sub-grade Waterproof Tanking Audit",
      leadDiscipline: "Lead Architect & Civil Engineer",
      formRef: "Form KBERC-2 (Damp-Proofing & Foundation Tanking Sign-Off)",
      deliverables: "Moisture barrier hydrostatic pressure test, sub-base compaction density log (95% MDD), radon gas barrier seal verification.",
      sections: "Section 108",
      color: "#0284C7",
      icon: "💧",
      cutawayBg: "#E0F2FE"
    },
    {
      id: "foundation",
      level: "DEEP BASEMENT & RETAINING WALL PILING (SUB-GRADE B1-B2)",
      stageNum: "STAGE 1 • FORM KBERC-1A",
      title: "Substructure Concrete Piling & Retaining Wall Anchor Audit",
      leadDiscipline: "Lead Structural Engineer & Structural Specialist (Sec 36)",
      formRef: "Form KBERC-1A (Foundation & Structural Piling Concreting Sign-Off)",
      deliverables: "Concrete cube 28-day compression crushing tests, pile integrity sonic NDT test, tie-back anchor tension load test certificates.",
      sections: "Section 107(2)",
      color: "#047857",
      icon: "🏗️",
      cutawayBg: "#D1FAE5"
    },
    {
      id: "geotech",
      level: "GEOTECHNICAL CORE BOREHOLE SOIL SURVEY (-12M DEEP)",
      stageNum: "STAGE 0 • FORM KBERC-1",
      title: "Geotechnical Core Sampling & Sub-surface Hydrostatic Audit",
      leadDiscipline: "Lead Geotechnical Specialist & Civil/Structural Engineer",
      formRef: "Form KBERC-1 (Geotechnical Soil Survey & Sub-grade Clearance)",
      deliverables: "Borehole core sampling logs, Standard Penetration Test (SPT) N-values, water table hydrostatic pressure report, soil bearing capacity calculations.",
      sections: "Sections 106 & 107",
      color: "#059669",
      icon: "🔍",
      cutawayBg: "#ECFDF5"
    }
  ];

  const currentStage = buildingStages.find(s => s.id === activeFloor) || buildingStages[5];

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <Link href="/viewer" style={{ color: '#64748B', fontSize: '13px', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Viewer Hub
        </Link>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#047857', background: 'rgba(4,120,87,0.1)', padding: '6px 16px', border: '1px solid rgba(4,120,87,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            CREATIVE INSTRUMENT 1 • INTERACTIVE ARCHITECTURAL BUILDING CUTAWAY
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#0F172A', margin: '16px 0 12px' }}>
            Interactive Architectural Building Cutaway &amp; Site Sign-Off Engine
          </h1>
          <p style={{ fontSize: '15px', color: '#475569', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
            Click any structural component in the 3D-style architectural cross-section cutaway diagram below to inspect the mandatory statutory lead discipline, KBERC inspection form, and test log required under Sections 106–115 &amp; Section 188.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr', gap: '32px', alignItems: 'start' }}>
          
          {/* LEFT PANEL: Visual Architectural Building Cross-Section Cutaway Stack */}
          <div style={{ background: '#FFFFFF', border: '2px solid #0F172A', padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '2px solid #0F172A', paddingBottom: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                🏢 ARCHITECTURAL CROSS-SECTION CUTAWAY STACK
              </span>
              <span style={{ fontSize: '10px', fontWeight: 900, color: '#047857', background: 'rgba(4,120,87,0.1)', padding: '4px 10px' }}>
                Interactive Cutaway Nodes
              </span>
            </div>

            {/* Architectural Building Cutaway Blocks Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {buildingStages.map((stage) => {
                const isActive = stage.id === activeFloor;
                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveFloor(stage.id)}
                    style={{
                      background: isActive ? stage.cutawayBg : '#F8FAFC',
                      border: `2px solid ${isActive ? stage.color : '#CBD5E1'}`,
                      borderLeft: `8px solid ${stage.color}`,
                      padding: '14px 16px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: isActive ? `0 4px 12px ${stage.color}25` : 'none',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '22px' }}>{stage.icon}</span>
                        <div>
                          <strong style={{ fontSize: '12px', fontWeight: 900, color: isActive ? stage.color : '#0F172A', display: 'block' }}>
                            {stage.level}
                          </strong>
                          <span style={{ fontSize: '10px', fontWeight: 800, color: '#475569' }}>
                            {stage.stageNum}
                          </span>
                        </div>
                      </div>

                      {isActive ? (
                        <span style={{ fontSize: '10px', fontWeight: 900, color: '#FFFFFF', background: stage.color, padding: '4px 10px', textTransform: 'uppercase' }}>
                          SELECTED
                        </span>
                      ) : (
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700 }}>
                          Select Floor ➔
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: Statutory Inspection Dossier */}
          <div style={{ background: '#FFFFFF', border: `2px solid ${currentStage.color}`, borderTop: `8px solid ${currentStage.color}`, padding: '32px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', position: 'sticky', top: '24px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '2px solid #E2E8F0', paddingBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: currentStage.color, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                📋 STATUTORY INSPECTION DOSSIER • {currentStage.sections}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', background: currentStage.color, padding: '6px 14px' }}>
                {currentStage.stageNum}
              </span>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '0 0 20px 0', lineHeight: 1.3 }}>
              {currentStage.title}
            </h2>

            {/* Lead Statutory Discipline */}
            <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: `6px solid ${currentStage.color}`, marginBottom: '18px' }}>
              <strong style={{ fontSize: '11px', fontWeight: 900, color: currentStage.color, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '6px' }}>
                👤 LEAD STATUTORY DISCIPLINE AUTHORIZED SIGN-OFF:
              </strong>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                {currentStage.leadDiscipline}
              </span>
            </div>

            {/* Mandatory Statutory Form */}
            <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: '6px solid #047857', marginBottom: '18px' }}>
              <strong style={{ fontSize: '11px', fontWeight 900, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '6px' }}>
                📜 MANDATORY STATUTORY FORM &amp; DIGITAL QR SEAL SIGN-OFF:
              </strong>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                {currentStage.formRef}
              </span>
            </div>

            {/* Required Deliverables & Test Logs */}
            <div style={{ background: '#F8FAFC', padding: '18px', border: '1px solid #CBD5E1', borderLeft: '6px solid #CA8A04' }}>
              <strong style={{ fontSize: '11px', fontWeight: 900, color: '#CA8A04', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '6px' }}>
                🧪 STATUTORY DELIVERABLES &amp; COMPLIANCE TEST LOGS:
              </strong>
              <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
                {currentStage.deliverables}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
"""

file_path.write_text(cutaway_code, encoding="utf-8")
print("SUCCESSFULLY BUILT ULTRA VISUAL ARCHITECTURAL BUILDING CUTAWAY STACK!")
