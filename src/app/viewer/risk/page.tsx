'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DeepenedRiskFrameworkPage() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'calculator' | 'peer_review' | 'insurance'>('matrix');

  // Interactive Calculator State
  const [storeys, setStoreys] = useState<number>(6);
  const [occupancy, setOccupancy] = useState<number>(200);
  const [hasDeepBasement, setHasDeepBasement] = useState<boolean>(false);
  const [structuralType, setStructuralType] = useState<'masonry' | 'rc_frame' | 'steel' | 'shear_core'>('rc_frame');

  // 5 Statutory Risk Classes Data (Part VIII Sec 65)
  const riskClasses = [
    {
      id: "class_a",
      class: "Class A: Minor Low-Risk Structure",
      badge: "CC1 Low Consequence",
      color: "#ef4444",
      ref: "Section 65(1)(a)",
      occupancy: "Under 20 Occupants",
      storeys: "Single Storey (<300 sq.m)",
      examples: "Single-family rural homes, minor boundary walls, small farm structures, detached carports.",
      competency: "Built Environment Technician / Lead Professional Self-Certification",
      peerReview: "No Peer Review Required",
      pii: "Standard Basic Practice Insurance",
      inspections: "Final Completion & Safety Inspection"
    },
    {
      id: "class_b",
      class: "Class B: Medium-Low Risk Development",
      badge: "CC1/CC2 Consequence",
      color: "#3B82F6",
      ref: "Section 65(1)(b)",
      occupancy: "20 to 100 Occupants",
      storeys: "1 to 3 Storeys (<1,000 sq.m)",
      examples: "Low-rise residential townhouses, small retail shops, light commercial offices, petrol stations.",
      competency: "Registered Lead Architect & Registered Lead Structural Engineer",
      peerReview: "Optional Council Peer Review",
      pii: "KES 20 Million Minimum PII Cover",
      inspections: "2 Mandatory Stage Inspections (Foundation & Ground Slab)"
    },
    {
      id: "class_c",
      class: "Class C: Medium Risk Development",
      badge: "CC2 Consequence",
      color: "#F59E0B",
      ref: "Section 65(1)(c)",
      occupancy: "100 to 500 Occupants",
      storeys: "4 to 6 Storeys (1,000 - 5,000 sq.m)",
      examples: "Mid-rise apartment blocks, secondary schools, commercial office parks, light industrial warehouses.",
      competency: "Full Multidisciplinary Team (Architect, QS, Structural Eng, MEP Eng, PM)",
      peerReview: "Council Stage Inspection Gate & Soil Geotechnical Audit",
      pii: "KES 50 Million Minimum PII Cover",
      inspections: "4 Mandatory Stage Inspections (Foundation, Slab, Ring Beam, Completion)"
    },
    {
      id: "class_d",
      class: "Class D: High Risk Development",
      badge: "CC2/CC3 Consequence",
      color: "#F97316",
      ref: "Section 65(1)(d)",
      occupancy: "500 to 2,000 Occupants",
      storeys: "7 to 15 Storeys",
      examples: "High-rise residential towers, regional shopping malls, referral hospitals, university complexes, auditoriums.",
      competency: "Registered Senior Lead Professionals + Certified Principal Agent",
      peerReview: "Mandatory Independent Third-Party Structural Peer Review",
      pii: "KES 100 Million Minimum PII Cover",
      inspections: "5 Mandatory Stage Inspections + Geotechnical Testing Report"
    },
    {
      id: "class_e",
      class: "Class E: High-Consequence Extreme Risk",
      badge: "CC3 High Consequence",
      color: "#EF4444",
      ref: "Section 65(1)(e)",
      occupancy: "Exceeding 2,000 Occupants",
      storeys: "Mega Towers (>15 Storeys) & Deep Basements",
      examples: "Skyscrapers (>15 storeys), deep basement structures (2+ levels), international airports, dams, chemical plants, stadiums.",
      competency: "Specialist Professional Accreditation (Sec 36) in Structural Dynamics / Geotechnical",
      peerReview: "Mandatory Dual Independent Structural Dynamics & Geotechnical Peer Review",
      pii: "KES 200 Million Minimum PII Cover + Structural Guarantee",
      inspections: "Resident Site Structural Engineer + 6 Stage Inspections"
    }
  ];

  // Dynamic Risk Calculator Logic
  const calculateRisk = () => {
    if (storeys > 15 || occupancy > 2000 || hasDeepBasement || structuralType === 'shear_core') {
      return {
        class: "Class E: High-Consequence Extreme Risk Development",
        color: "#EF4444",
        ref: "Section 65(1)(e)",
        peerReview: "Mandatory Dual Independent Structural Dynamics & Geotechnical Peer Review",
        accreditation: "Specialist Professional Accreditation Required (Sec 36)",
        piiCover: "KES 200 Million Minimum PII Cover",
        eurocode: "BS EN 1990 Consequence Class CC3 (High Consequence)",
        inspections: "Resident Site Structural Engineer + 6 Stage Inspections"
      };
    } else if (storeys >= 7 || occupancy >= 500) {
      return {
        class: "Class D: High Risk Development",
        color: "#F97316",
        ref: "Section 65(1)(d)",
        peerReview: "Mandatory Independent Third-Party Structural Peer Review",
        accreditation: "Senior Lead Professionals & Certified Principal Agent",
        piiCover: "KES 100 Million Minimum PII Cover",
        eurocode: "BS EN 1990 Consequence Class CC2/CC3",
        inspections: "5 Mandatory Stage Inspections + Soil Geotechnical Testing"
      };
    } else if (storeys >= 4 || occupancy >= 100) {
      return {
        class: "Class C: Medium Risk Development",
        color: "#F59E0B",
        ref: "Section 65(1)(c)",
        peerReview: "Council Stage Inspection Gate & Geotechnical Audit",
        accreditation: "Full Multidisciplinary Team (Architect, QS, Engineer, PM)",
        piiCover: "KES 50 Million Minimum PII Cover",
        eurocode: "BS EN 1990 Consequence Class CC2",
        inspections: "4 Mandatory Stage Inspections (Foundation, Slab, Ring Beam, Final)"
      };
    } else if (storeys >= 2 || occupancy >= 20) {
      return {
        class: "Class B: Medium-Low Risk Development",
        color: "#3B82F6",
        ref: "Section 65(1)(b)",
        peerReview: "Optional Council Peer Review",
        accreditation: "Registered Lead Architect & Registered Lead Structural Engineer",
        piiCover: "KES 20 Million Minimum PII Cover",
        eurocode: "BS EN 1990 Consequence Class CC1/CC2",
        inspections: "2 Mandatory Stage Inspections (Foundation & Ground Slab)"
      };
    } else {
      return {
        class: "Class A: Minor Low Risk Structure",
        color: "#ef4444",
        ref: "Section 65(1)(a)",
        peerReview: "No Peer Review Required",
        accreditation: "Built Environment Technician / Lead Professional Self-Certification",
        piiCover: "Standard Practice Insurance",
        eurocode: "BS EN 1990 Consequence Class CC1",
        inspections: "Final Completion & Safety Inspection"
      };
    }
  };

  const calcResult = calculateRisk();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      color: '#0F172A',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      padding: 'clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px) 64px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .glass-card { background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; backdrop-filter: blur(16px); }
        .tab-btn { padding: 10px 22px; border-radius: 12px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; transition: all 0.2s; border: none; }
      `}</style>

      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Top Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: '#475569' }}>
          <Link href="/viewer" style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>🏠</span>
            <span>Viewer Hub</span>
          </Link>
          <span>›</span>
          <span style={{ color: '#ef4444', fontWeight: 600 }}>Part VIII: Risk-Based Building Regulation</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
            <Link href="/viewer/interactive/8" style={{ padding: '8px 16px', borderRadius: 0, background: '#ef4444', color: '#0F172A', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              📜 Interactive Part 8 Viewer
            </Link>
            <Link href="/viewer/read" style={{ padding: '8px 16px', borderRadius: 0, background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#475569', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              📖 Read Official Bill
            </Link>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#ef4444', letterSpacing: '0.25em', textTransform: 'uppercase', background: 'rgba(16,185,129,0.1)', padding: '6px 18px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.2)' }}>
            PART VIII (SECTIONS 65–80) • KBERC BILL 2026
          </span>

          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', margin: '20px 0 16px 0', lineHeight: 1.15 }}>
            Risk-Based Building Classification &amp; Safety Control Hub
          </h1>

          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '940px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Under the Built Environment Bill 2026, building safety controls are dynamically matched to actual project risk profiles (Class A to Class E), establishing statutory thresholds for mandatory peer reviews, specialist accreditation, and PII cover.
          </p>

          {/* Navigation Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'matrix', label: '🏗️ 5 Statutory Risk Classes (Class A-E)' },
              { id: 'calculator', label: '🧮 Interactive Risk Calculator & Simulator' },
              { id: 'peer_review', label: '🔍 Peer-Review & Audit Protocol (Sec 68)' },
              { id: 'insurance', label: '🛡️ PII Cover & Structural Indemnity' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="tab-btn"
                style={{
                  background: activeTab === tab.id ? '#ef4444' : 'rgba(255,255,255,0.04)',
                  color: activeTab === tab.id ? '#FFF' : 'rgba(255,255,255,0.5)',
                  border: activeTab === tab.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: 5 Statutory Risk Classes Matrix */}
        {activeTab === 'matrix' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {riskClasses.map((rk) => (
              <div key={rk.id} className="glass-card" style={{ borderLeft: `6px solid ${rk.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: rk.color, background: `${rk.color}20`, padding: '4px 10px', borderRadius: 0, border: `1px solid ${rk.color}40` }}>
                      {rk.ref}
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#0F172A', background: '#F8FAFC', padding: '4px 10px', borderRadius: 0, }}>
                      {rk.badge}
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>
                    {rk.storeys} • {rk.occupancy}
                  </span>
                </div>

                <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: '0 0 14px 0' }}>{rk.class}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: 0, border: '1px solid #CBD5E1' }}>
                    <strong style={{ display: 'block', color: '#475569', fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>🏢 Project Examples:</strong>
                    <span style={{ fontSize: '12px', color: '#1E293B', lineHeight: 1.5 }}>{rk.examples}</span>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: 0, border: '1px solid #CBD5E1' }}>
                    <strong style={{ display: 'block', color: rk.color, fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>🔍 Peer Review Requirement:</strong>
                    <span style={{ fontSize: '12px', color: '#1E293B', lineHeight: 1.5 }}>{rk.peerReview}</span>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: 0, border: '1px solid #CBD5E1' }}>
                    <strong style={{ display: 'block', color: '#60A5FA', fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>📜 Competency Required:</strong>
                    <span style={{ fontSize: '12px', color: '#1E293B', lineHeight: 1.5 }}>{rk.competency}</span>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: 0, border: '1px solid #CBD5E1' }}>
                    <strong style={{ display: 'block', color: '#ef4444', fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>🛡️ Mandatory PII Cover:</strong>
                    <span style={{ fontSize: '12px', color: '#1E293B', lineHeight: 1.5 }}>{rk.pii}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive Risk Calculator */}
        {activeTab === 'calculator' && (
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#ef4444', marginBottom: '8px', textAlign: 'center' }}>
              🧮 Interactive Risk Classification &amp; Safety Control Simulator
            </h2>
            <p style={{ fontSize: '13px', color: '#64748B', textAlign: 'center', marginBottom: '32px' }}>
              Adjust building parameters to dynamically calculate statutory Building Risk Class (Class A-E), peer review gates, PII cover thresholds, and Eurocode consequence class.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Building Height ({storeys} Storeys):
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={storeys}
                  onChange={(e) => setStoreys(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#ef4444', cursor: 'pointer', height: '24px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Occupancy Capacity ({occupancy} People):
                </label>
                <input
                  type="range"
                  min="10"
                  max="3000"
                  step="50"
                  value={occupancy}
                  onChange={(e) => setOccupancy(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#ef4444', cursor: 'pointer', height: '24px' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Structural Framing System:
                </label>
                <select
                  value={structuralType}
                  onChange={(e) => setStructuralType(e.target.value as any)}
                  style={{ width: '100%', padding: '12px', borderRadius: 0, background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#0F172A', fontSize: '13px', outline: 'none' }}
                >
                  <option value="masonry">Load-Bearing Masonry (Up to 3 Storeys)</option>
                  <option value="rc_frame">Reinforced Concrete Frame (Medium-Rise)</option>
                  <option value="steel">Structural Steel Portal / High Bay Frame</option>
                  <option value="shear_core">Reinforced Concrete Shear Core (High-Rise Tower)</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#0F172A', cursor: 'pointer', background: '#F8FAFC', padding: '14px', borderRadius: 0, border: '1px solid #CBD5E1', width: '100%' }}>
                  <input
                    type="checkbox"
                    checked={hasDeepBasement}
                    onChange={(e) => setHasDeepBasement(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#EF4444' }}
                  />
                  <span>Includes Deep Basement Structure (2+ Sub-ground Levels)</span>
                </label>
              </div>
            </div>

            {/* Calculated Risk Output Card */}
            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: 0, border: `2px solid ${calcResult.color}` }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: calcResult.color, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>
                CALCULATED STATUTORY RISK PROFILE • {calcResult.ref}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', marginBottom: '20px' }}>{calcResult.class}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: 0, fontSize: '13px', color: '#0F172A' }}>
                  <strong style={{ color: calcResult.color }}>🔍 Mandatory Peer Review Gate:</strong> {calcResult.peerReview}
                </div>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: 0, fontSize: '13px', color: '#0F172A' }}>
                  <strong style={{ color: calcResult.color }}>📜 Practitioner Accreditation:</strong> {calcResult.accreditation}
                </div>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: 0, fontSize: '13px', color: '#0F172A' }}>
                  <strong style={{ color: calcResult.color }}>🛡️ Professional Indemnity (PII):</strong> {calcResult.piiCover}
                </div>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: 0, fontSize: '13px', color: '#0F172A' }}>
                  <strong style={{ color: calcResult.color }}>📐 Eurocode Structural Basis:</strong> {calcResult.eurocode}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Peer-Review Protocol */}
        {activeTab === 'peer_review' && (
          <div className="glass-card">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#F97316', marginBottom: '12px' }}>
              🔍 Independent Third-Party Structural Peer Review Protocol (Section 68)
            </h2>
            <p style={{ fontSize: '14px', color: '#0F172A', lineHeight: 1.8, marginBottom: '24px' }}>
              For Class D (7-15 storeys) and Class E (&gt;15 storeys / deep basements) developments, Section 68 mandates that the structural calculations and foundation design must undergo independent peer-review by a Senior KBERC Structural Peer Reviewer before County approval can be granted.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: 0, border: '1px solid rgba(249,115,34,0.3)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F97316', marginBottom: '8px' }}>Class D Peer Review Gate</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Single independent structural peer reviewer audits gravity load paths, wind load resistance, foundation bearing pressures, and column axial capacities.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: 0, border: '1px solid rgba(239,68,68,0.3)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#EF4444', marginBottom: '8px' }}>Class E Dual Peer Review Gate</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Dual independent peer reviewers audit dynamic seismic response, wind tunnel boundary layer testing, deep basement soil shoring stability, and progressive collapse resistance.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Insurance & PII Cover */}
        {activeTab === 'insurance' && (
          <div className="glass-card">
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ef4444', marginBottom: '12px' }}>
              🛡️ Professional Indemnity Insurance &amp; Structural Warranties (Section 58)
            </h2>
            <p style={{ fontSize: '14px', color: '#0F172A', lineHeight: 1.8, marginBottom: '24px' }}>
              Section 58 enforces mandatory Professional Indemnity (PII) Insurance cover for all Lead Professionals and Multidisciplinary Consultancies before issuing annual digital QR seals.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.3)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#ef4444', marginBottom: '6px' }}>KES 50M Cover (Class C)</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>Mandatory minimum for medium-risk developments (4-6 storeys).</p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: 0, border: '1px solid rgba(249,115,34,0.3)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#F97316', marginBottom: '6px' }}>KES 100M Cover (Class D)</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>Mandatory minimum for high-risk developments (7-15 storeys).</p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: 0, border: '1px solid rgba(239,68,68,0.3)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#EF4444', marginBottom: '6px' }}>KES 200M Cover (Class E)</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>Mandatory minimum for mega towers (&gt;15 storeys) + Structural Guarantee.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
