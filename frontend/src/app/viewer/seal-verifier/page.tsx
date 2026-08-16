'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SealVerifierSimulatorPage() {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleScan = () => {
    setIsVerifying(true);
    setTimeout(() => setIsVerifying(false), 1500);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', system-ui, sans-serif", padding: 'clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px) 64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', color: '#64748B', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#64748B' }}>Home</Link>
          <span>›</span>
          <Link href="/viewer" style={{ color: '#64748B' }}>Viewer Hub</Link>
          <span>›</span>
          <span style={{ color: '#b91c1c', fontWeight: 700 }}>Digital Practice QR Seal Verifier</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#ef4444', background: 'rgba(16,185,129,0.1)', padding: '6px 16px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            CREATIVE TOOL 5 • DIGITAL QR SEAL VERIFIER
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#0F172A', margin: '16px 0 12px' }}>
            Cryptographic Digital QR Seal Verification Simulator
          </h1>
          <p style={{ fontSize: '15px', color: '#475569', maxWidth: '750px', margin: '0 auto' }}>
            Simulate how County Building Officers and Financial Institutions scan a practitioner's plan QR seal to verify statutory compliance under Section 57.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: 0, border: '1px solid rgba(16,185,129,0.3)', textAlign: 'center' }}>
          <div style={{ width: '120px', height: '120px', background: '#FFF', margin: '0 auto 20px', borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '48px', fontWeight: 900 }}>
            📱
          </div>

          <button
            onClick={handleScan}
            disabled={isVerifying}
            style={{
              padding: '14px 32px', borderRadius: 0, background: '#ef4444', color: '#0F172A', fontSize: '14px', fontWeight: 900,
              border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em'
            }}
          >
            {isVerifying ? 'Scanning KBERC Database...' : '🔍 Scan Building Plan QR Seal'}
          </button>

          <div style={{ marginTop: '32px', background: '#F8FAFC', padding: '24px', borderRadius: 0, border: '1px solid #CBD5E1', textAlign: 'left' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
              VERIFICATION RESULT • KBERC-QR-2026-88492
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13px' }}>
              <div><strong style={{ color: '#64748B' }}>Lead Architect:</strong> <span style={{ color: '#0F172A' }}>Arch. David N. Kamau (A/1482)</span></div>
              <div><strong style={{ color: '#64748B' }}>Lead Structural Eng:</strong> <span style={{ color: '#0F172A' }}>Eng. Sarah M. Omondi (PE/3921)</span></div>
              <div><strong style={{ color: '#64748B' }}>PII Insurance Cover:</strong> <span style={{ color: '#ef4444', fontWeight: 700 }}>KES 100,000,000 (Active)</span></div>
              <div><strong style={{ color: '#64748B' }}>Risk Classification:</strong> <span style={{ color: '#F97316', fontWeight: 700 }}>Class D (High Risk 8-Storey)</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
