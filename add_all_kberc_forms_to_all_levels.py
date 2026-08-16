import pathlib

file_path = pathlib.Path("src/app/viewer/building-navigator/page.tsx")
content = file_path.read_text(encoding="utf-8")

# Let's check how forms are defined in buildingStages and ensure EVERY level has its specific Form KBERC-1 to KBERC-6 details!
target_str = "/* 4. ACTUAL FORMAL STATUTORY SIGN-OFF CERTIFICATE & DIGITAL SEAL STRUCTURE */"

full_forms_structure = """{/* 4. EXHAUSTIVE STATUTORY KBERC FORM & DIGITAL SEAL CERTIFICATE FOR THIS LEVEL */}
            <div style={{ background: '#FFFFFF', border: '2px solid #047857', borderTop: '8px solid #047857', padding: '24px', marginBottom: '20px', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '2px solid #047857', paddingBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    REPUBLIC OF KENYA • KENYA BUILT ENVIRONMENT REGULATORY COUNCIL
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A', margin: '2px 0 0' }}>
                    STATUTORY STAGE INSPECTION CERTIFICATE • {currentStage.formRef}
                  </h3>
                </div>
                <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 900, color: '#FFFFFF', background: '#047857', padding: '4px 10px' }}>
                  QR SEAL VERIFIED
                </span>
              </div>

              {/* Form Metadata Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', fontSize: '11px', marginBottom: '16px' }}>
                <div style={{ background: '#F8FAFC', padding: '10px', border: '1px solid #CBD5E1' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B', display: 'block' }}>PROJECT NAME &amp; LR NO.</span>
                  <strong style={{ fontSize: '11px', color: '#0F172A', display: 'block', marginTop: '2px' }}>KBERC High-Rise Tower (LR 209/1882)</strong>
                </div>
                <div style={{ background: '#F8FAFC', padding: '10px', border: '1px solid #CBD5E1' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B', display: 'block' }}>COUNTY DESK PERMIT NO.</span>
                  <strong style={{ fontSize: '11px', color: '#047857', display: 'block', marginTop: '2px' }}>CBD/NBI/2026/0491-STAGE-{currentStage.id.toUpperCase()}</strong>
                </div>
                <div style={{ background: '#F8FAFC', padding: '10px', border: '1px solid #CBD5E1' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B', display: 'block' }}>EUROCODE RISK CLASS</span>
                  <strong style={{ fontSize: '11px', color: '#7C3AED', display: 'block', marginTop: '2px' }}>Risk Class C/D (Sec 89 Schedule 4)</strong>
                </div>
              </div>

              {/* Professional Sign-off & PII Box */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '11px', marginBottom: '16px' }}>
                <div style={{ background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1', borderLeft: '4px solid #047857' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#047857', display: 'block', textTransform: 'uppercase' }}>LEAD AUTHORIZED PROFESSIONAL SIGN-OFF</span>
                  <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block', marginTop: '2px' }}>{currentStage.leadDiscipline}</strong>
                  <span style={{ fontSize: '10px', color: '#475569', display: 'block', marginTop: '2px' }}>Board Reg No: KBERC/REG/2026/88492 • Firm License: FL-2026-901</span>
                </div>
                <div style={{ background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1', borderLeft: '4px solid #7C3AED' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED', display: 'block', textTransform: 'uppercase' }}>PROFESSIONAL INDEMNITY COVER (SECTION 62)</span>
                  <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block', marginTop: '2px' }}>Class C Baseline Cover: KES 50,000,000</strong>
                  <span style={{ fontSize: '10px', color: '#475569', display: 'block', marginTop: '2px' }}>Policy No: PII-2026-KE-88391 (Active &amp; Validated)</span>
                </div>
              </div>

              {/* Statutory Declaration */}
              <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '14px', marginBottom: '16px', fontSize: '11px', color: '#065F46', lineHeight: 1.6 }}>
                <strong>STATUTORY SOLEMN DECLARATION (SECTION 114):</strong> "I, the undersigned Lead Professional, hereby solemnly declare under penalty of perjury under Part XIV of the Built Environment Regulation Act 2026 that I have personally conducted site inspections at this stage level, reviewed all attached ISO 17025 laboratory test certificates, and certify that the works comply in all respects with Eurocode standards."
              </div>

              {/* Cryptographic SHA-256 Hash & QR Seal */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '12px', border: '1px solid #CBD5E1' }}>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B', display: 'block' }}>CRYPTOGRAPHIC SHA-256 VERIFICATION STAMP</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 700, color: '#0F172A' }}>9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a8b9c0d1e2f3a4b5c6d7e8f9a</span>
                </div>
                <div style={{ background: '#047857', color: '#FFFFFF', padding: '8px 16px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  COUNTY QR SEAL VALID ✓
                </div>
              </div>
            </div>"""

if target_str in content:
    # Find start of container div right before target_str
    container_start = content.rfind("<div style={{ background: '#FFFFFF', border: '2px solid #047857'", 0, content.find(target_str))
    container_end = content.find("{/* 4. Legal Consequence of Bypassing */}")
    if container_start != -1 and container_end != -1:
        new_content = content[:container_start] + full_forms_structure + "\n\n            " + content[container_end:]
        file_path.write_text(new_content, encoding="utf-8")
        print("SUCCESSFULLY ENFORCED ALL STATUTORY FORMS AT ALL LEVELS IN src/app/viewer/building-navigator/page.tsx!")
    else:
        print(f"Could not find container bounds: start={container_start}, end={container_end}")
else:
    print("Could not find target_str in page.tsx")
