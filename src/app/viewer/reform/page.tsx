'use client';

import React from 'react';
import Link from 'next/link';

export default function ReformShowcasePage() {
  const comparisons = [
    {
      domain: "Regulatory Governance & Boards",
      before: "Fragmented statutory boards (Cap 525 joint BORAQS for Architects/QSs, separate Engineers Board). Lack of unified policy alignment.",
      after: "Unified KBERC Apex Council providing national policy, with standalone profession boards (ARB & QSRB) managing discipline-specific exams.",
      icon: "🏛️"
    },
    {
      domain: "Technicians & Technologists Cadre",
      before: "Diploma and Technologist graduates lacked clear statutory recognition or independent practice categories.",
      after: "Formal statutory migration into standalone Technologist and Technician categories with protected scopes.",
      icon: "🎓"
    },
    {
      domain: "Plan Verification & Digital Security",
      before: "Manual ink stamps susceptible to forgery, impersonation, and fraudulent plan approvals.",
      after: "Cryptographic Digital QR Seals tied to real-time KBERC databases and active PII insurance cover.",
      icon: "🔒"
    },
    {
      domain: "Structural Failure Investigations",
      before: "Investigations delayed for weeks due to lack of funds, allowing corrupt evidence tampering.",
      after: "Earmarked 5% Disaster Emergency Fund deploying independent forensic teams within 6 hours of structural collapse.",
      icon: "🚨"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: '32px 24px 96px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Link href="/viewer" style={{ color: '#64748B', fontSize: '13px', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Viewer Hub
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#8B5CF6', background: 'rgba(139,92,246,0.1)', padding: '6px 16px', borderRadius: 0, border: '1px solid rgba(139,92,246,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            CREATIVE TOOL 3 • LEGISLATIVE REFORM SHOWCASE
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#0F172A', margin: '16px 0 12px' }}>
            "Before vs. After" Statutory Legislative Reform Showcase
          </h1>
          <p style={{ fontSize: '15px', color: '#475569', maxWidth: '850px', margin: '0 auto' }}>
            Side-by-side comparative showcase demonstrating how KBERC Bill 2026 resolves historical regulatory loopholes and modernizes Kenya's built environment governance.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {comparisons.map((c, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', borderRadius: 0, border: '1px solid #CBD5E1', padding: '24px', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{c.icon}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>{c.domain}</h3>
              </div>

              <div style={{ background: 'rgba(239,68,68,0.06)', padding: '18px', borderRadius: 0, border: '1px solid rgba(239,68,68,0.2)' }}>
                <strong style={{ display: 'block', color: '#EF4444', fontSize: '10px', textTransform: 'uppercase', marginBottom: '6px' }}>❌ Old System (Pre-2026):</strong>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0 }}>{c.before}</p>
              </div>

              <div style={{ background: 'rgba(16,185,129,0.06)', padding: '18px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.2)' }}>
                <strong style={{ display: 'block', color: '#ef4444', fontSize: '10px', textTransform: 'uppercase', marginBottom: '6px' }}>✅ KBERC Bill 2026 Enactment:</strong>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0 }}>{c.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
