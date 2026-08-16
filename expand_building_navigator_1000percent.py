import pathlib

file_path = pathlib.Path("src/app/viewer/building-navigator/page.tsx")

expanded_navigator_code = """'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BuildingStageNavigatorPage() {
  const [activeFloor, setActiveFloor] = useState<string>('frame');

  const buildingStages = [
    {
      id: "geotech",
      level: "Stage 0: Pre-Construction Soil & Geotechnical Sub-grade Survey (0 - 12m Deep)",
      title: "Geotechnical Core Sampling & Sub-surface Hydrostatic Audit",
      leadDiscipline: "Lead Geotechnical Specialist & Civil/Structural Engineer",
      formRef: "Form KBERC-1 (Geotechnical Soil Survey & Sub-grade Clearance)",
      deliverables: "Borehole core log logs, Standard Penetration Test (SPT) N-values, water table hydrostatic pressure report, soil bearing capacity calculations.",
      sections: "Sections 106 & 107",
      color: "#059669",
      icon: "🔍"
    },
    {
      id: "foundation",
      level: "Stage 1: Deep Basement Foundation & Retaining Wall Piling (0 - 6m Sub-grade)",
      title: "Substructure Concrete Piling & Retaining Wall Anchor Audit",
      leadDiscipline: "Lead Structural Engineer & Structural Specialist (Sec 36)",
      formRef: "Form KBERC-1A (Foundation & Structural Piling Concreting Sign-Off)",
      deliverables: "Concrete cube 28-day compression crushing tests (C25/30), pile integrity sonic NDT test, tie-back anchor tension load test certificates.",
      sections: "Section 107(2)",
      color: "#047857",
      icon: "🏗️"
    },
    {
      id: "substructure",
      level: "Stage 2: Substructure Ground Slab & Tanking Membrane (Level 0 / Sub-grade)",
      title: "Ground Bearing Slab & Sub-grade Waterproof Tanking Audit",
      leadDiscipline: "Lead Architect & Civil Engineer",
      formRef: "Form KBERC-2 (Damp-Proofing & Foundation Tanking Sign-Off)",
      deliverables: "Moisture barrier hydrostatic pressure test, sub-base compaction density log (95% MDD), radon gas barrier seal verification.",
      sections: "Section 108",
      color: "#0284C7",
      icon: "💧"
    },
    {
      id: "frame",
      level: "Stage 3: Superstructure Reinforced Concrete Columns & Shear Core (Levels 1 to 15)",
      title: "Reinforced Concrete Frame & Axial Structural Core Audit",
      leadDiscipline: "Lead Structural Engineer, Architect & Quantity Surveyor",
      formRef: "Form KBERC-3 (Column Ring Beam & Suspended Slab Sign-Off)",
      deliverables: "28-day concrete cube compressive strength logs (BS EN 206), steel rebar tensile yield test certificates, column verticality plumb-line audit.",
      sections: "Section 109",
      color: "#1D4ED8",
      icon: "🏢"
    },
    {
      id: "steel",
      level: "Stage 4: Structural Steel Trusses & Post-Tensioned Suspended Floor Slabs",
      title: "Structural Steel Frame & Cable Post-Tensioning Tension Audit",
      leadDiscipline: "Structural Specialist (Sec 36) & MEP Engineer",
      formRef: "Form KBERC-3A (Steel & Post-Tensioned Cable Audit Certificate)",
      deliverables: "Ultrasonic weld non-destructive testing (NDT), strand elongation hydraulic tension logs, intumescent fireproofing paint thickness test.",
      sections: "Sections 36 & 109(3)",
      color: "#7C3AED",
      icon: "⚡"
    },
    {
      id: "envelope",
      level: "Stage 5: External Facade, Curtain Wall Glazing & Roof Deck Waterproofing",
      title: "Building Envelope Weatherproofing & Wind Deflection Audit",
      leadDiscipline: "Lead Architect & Facade Engineering Specialist",
      formRef: "Form KBERC-4 (Building Envelope & Roof Integrity Certificate)",
      deliverables: "Wind load deflection calculations (BS EN 1991-1-4), 48-hour roof deck water flood test certificate, acoustic glazing rating verification.",
      sections: "Section 110",
      color: "#B45309",
      icon: "📐"
    },
    {
      id: "mep",
      level: "Stage 6: Internal MEP Systems, HVAC, Electrical Load & Plumbing Risers",
      title: "Electrical, HVAC Ducting & Sanitary Engineering Audit",
      leadDiscipline: "Electrical Engineer, Mechanical Engineer & Plumbing Specialist",
      formRef: "Form KBERC-5 (MEP Services & Electrical Installation Certificate)",
      deliverables: "Megger high-voltage electrical insulation test log, 10-bar hydraulic pipe pressure drop test, HVAC air velocity & CFM balancing audit.",
      sections: "Section 111",
      color: "#CA8A04",
      icon: "🔌"
    },
    {
      id: "fire",
      level: "Stage 7: Active & Passive Fire Safety, Egress Corridors & Sprinkler Network",
      title: "Life Safety, Fire Egress & Emergency Suppression Audit",
      leadDiscipline: "Fire Safety Specialist & Lead Architect",
      formRef: "Form KBERC-5A (Fire Safety & Life Safety Systems Audit Certificate)",
      deliverables: "Smoke extraction fan differential pressure log, 2-hour fire door integrity seal check, fire pump flow rate test (1000 GPM).",
      sections: "Section 112",
      color: "#DC2626",
      icon: "🚨"
    },
    {
      id: "pwd",
      level: "Stage 8: Universal Accessibility, Lift Systems & Interior Fit-Out Audit",
      title: "Persons with Disabilities (PWD) Accessibility & Elevator Audit",
      leadDiscipline: "Lead Architect, Interior Designer & Accessibility Inspector",
      formRef: "Form KBERC-5B (PWD Accessibility & Lift Compliance Certificate)",
      deliverables: "Ramped entrance 1:12 slope audit, elevator emergency drop brake safety test, tactile paving & braille signage verification.",
      sections: "Section 113",
      color: "#9333EA",
      icon: "♿"
    },
    {
      id: "completion",
      level: "Stage 9: Practical Completion & Final Certificate of Occupancy (Entire Building)",
      title: "Statutory Certificate of Final Occupancy & Public Safety Clearance",
      leadDiscipline: "County Building Control Desk Officer, Lead Architect & Structural Lead",
      formRef: "Form KBERC-6 (Statutory Certificate of Occupancy)",
      deliverables: "100% Verification across Forms KBERC-1 to 5B, Cryptographic Digital QR Seal validation, active PII policy verification.",
      sections: "Section 114 & 188",
      color: "#047857",
      icon: "📜"
    }
  ];

  const currentStage = buildingStages.find(s => s.id === activeFloor) || buildingStages[3];

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        <Link href="/viewer" style={{ color: '#64748B', fontSize: '13px', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Viewer Hub
        </Link>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#047857', background: 'rgba(4,120,87,0.1)', padding: '6px 16px', border: '1px solid rgba(4,120,87,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            CREATIVE INSTRUMENT • 10-STAGE BUILDING LIFE-CYCLE &amp; SITE INSPECTION NAVIGATOR
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#0F172A', margin: '16px 0 12px' }}>
            10-Stage Building Cutaway &amp; Site Sign-Off Navigator
          </h1>
          <p style={{ fontSize: '15px', color: '#475569', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
            Interactive statutory inspection engine mapping every structural component, deep soil test, post-tensioned slab, MEP riser, and fire safety audit required before a County Certificate of Occupancy is issued under Sections 106–115 &amp; Section 188.
          </p>
        </div>

        {/* 2-Column Split Navigator */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '28px', alignItems: 'start' }}>
          
          {/* Left Column: 10 Building Stages Buttons */}
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderTop: '4px solid #047857', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
              🏗️ 10 STATUTORY SITE INSPECTION STAGES
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {buildingStages.map((stage) => {
                const isActive = stage.id === activeFloor;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveFloor(stage.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      background: isActive ? `${stage.color}12` : '#F8FAFC',
                      border: `1px solid ${isActive ? stage.color : '#E2E8F0'}`,
                      borderLeft: `5px solid ${stage.color}`,
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>{stage.icon}</span>
                    <div style={{ flex: 1 }}>
                      <strong style={{ fontSize: '12px', color: isActive ? stage.color : '#0F172A', display: 'block' }}>
                        {stage.level}
                      </strong>
                      <span style={{ fontSize: '10px', color: '#64748B' }}>
                        Mandated under {stage.sections}
                      </span>
                    </div>
                    {isActive && (
                      <span style={{ fontSize: '10px', fontWeight: 900, color: '#FFFFFF', background: stage.color, padding: '2px 8px' }}>
                        ACTIVE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stage Mandate & Detailed Inspection Dossier */}
          <div style={{ background: '#FFFFFF', border: `2px solid ${currentStage.color}`, borderTop: `6px solid ${currentStage.color}`, padding: '28px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: currentStage.color, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                📋 STATUTORY INSPECTION DOSSIER • {currentStage.sections}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', background: currentStage.color, padding: '4px 12px' }}>
                {currentStage.formRef.split(' ')[0]} {currentStage.formRef.split(' ')[1]}
              </span>
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '0 0 16px 0' }}>
              {currentStage.title}
            </h2>

            {/* Lead Statutory Discipline */}
            <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1', borderLeft: `5px solid ${currentStage.color}`, marginBottom: '16px' }}>
              <strong style={{ fontSize: '11px', fontWeight: 900, color: currentStage.color, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>
                👤 LEAD STATUTORY DISCIPLINE AUTHORIZED SIGN-OFF:
              </strong>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                {currentStage.leadDiscipline}
              </span>
            </div>

            {/* Mandatory Statutory Form */}
            <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1', borderLeft: '5px solid #047857', marginBottom: '16px' }}>
              <strong style={{ fontSize: '11px', fontWeight: 900, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>
                📜 MANDATORY STATUTORY FORM &amp; DIGITAL QR SEAL SIGN-OFF:
              </strong>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
                {currentStage.formRef}
              </span>
            </div>

            {/* Required Deliverables & Test Logs */}
            <div style={{ background: '#F8FAFC', padding: '16px', border: '1px solid #CBD5E1', borderLeft: '5px solid #CA8A04' }}>
              <strong style={{ fontSize: '11px', fontWeight: 900, color: '#CA8A04', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>
                🧪 STATUTORY DELIVERABLES &amp; COMPLIANCE TEST LOGS:
              </strong>
              <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
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

file_path.write_text(expanded_navigator_code, encoding="utf-8")
print("SUCCESSFULLY EXPANDED BUILDING NAVIGATOR TO 10 COMPREHENSIVE STAGES!")
