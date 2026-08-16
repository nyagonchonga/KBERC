import pathlib

file_path = pathlib.Path("src/app/viewer/building-navigator/page.tsx")
content = file_path.read_text(encoding="utf-8")

# Let's add the Master Schedule of KBERC Sign-Offs Table under the Split Grid Layout!
target_str = "      </div>\n    </div>\n  );\n}"

master_schedule_table_code = """        {/* MASTER STATUTORY SCHEDULE OF KBERC SIGN-OFFS AT ALL BUILDING LEVELS */}
        <div style={{ background: '#FFFFFF', border: '2px solid #047857', borderTop: '8px solid #047857', padding: '32px', marginTop: '48px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '2px solid #E2E8F0', paddingBottom: '14px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                📜 ENFORCEABLE STATUTORY REGISTER • SECTIONS 106–115 &amp; SCHEDULE 4
              </span>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '4px 0 0' }}>
                Master Schedule of KBERC Statutory Sign-Offs at All Building Levels
              </h2>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', background: '#047857', padding: '6px 16px', textTransform: 'uppercase' }}>
              Forms KBERC-1 to KBERC-6
            </span>
          </div>

          <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
            Comprehensive statutory matrix detailing mandatory KBERC inspection forms, lead discipline sign-off authorities, Eurocode Risk Class applicability (Classes A to E), required laboratory test certificates, and legal penalties for skipping sign-offs across all construction stages.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', color: '#0F172A', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#047857', color: '#FFFFFF' }}>
                  <th style={{ padding: '12px 14px', fontWeight: 900 }}>KBERC Form &amp; Stage</th>
                  <th style={{ padding: '12px 14px', fontWeight: 900 }}>Building Stage Level</th>
                  <th style={{ padding: '12px 14px', fontWeight 900 }}>Authorized Sign-Off Discipline</th>
                  <th style={{ padding: '12px 14px', fontWeight 900 }}>Risk Class Applicability</th>
                  <th style={{ padding: '12px 14px', fontWeight 900 }}>Required Laboratory &amp; Site Tests</th>
                  <th style={{ padding: '12px 14px', fontWeight 900 }}>Part XIV Penalty Scale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { form: "Form KBERC-1", level: "Stage 0: Sub-grade Soil (-12m)", disc: "Geotechnical Specialist & Planner", risk: "Classes A to E (Peer review for D & E)", tests: "Borehole sampling, SPT N-values, water table audit", penalty: "Fines up to KES 5M / Section 154" },
                  { form: "Form KBERC-1A", level: "Stage 1: Piling & Retaining Walls", disc: "Structural Specialist (Sec 36) & CPM", risk: "Classes C, D & E", tests: "Concrete cube crush test, sonic PIT pile test, anchor pull test", penalty: "Immediate Stop-Work Order" },
                  { form: "Form KBERC-2", level: "Stage 2: Ground Slab & Tanking", disc: "Lead Architect, Civil Eng & Landscape", risk: "Classes A to E", tests: "Hydrostatic membrane test, 95% MDD soil compaction, termite audit", penalty: "KES 1,000,000 fine / Section 158" },
                  { form: "Form KBERC-3", level: "Stage 3: Superstructure RC Frame", disc: "Structural Eng, Architect, QS & CPM", risk: "Classes B, C, D & E", tests: "28-day cube strength (C25/30), rebar tensile test, plumb laser check", penalty: "Deregistration & Prosecution" },
                  { form: "Form KBERC-3A", level: "Stage 4: Steel Trusses & PT Slabs", disc: "Structural Specialist & Technologist", risk: "Classes D & E", tests: "Ultrasonic NDT weld test, PT cable tension log, intumescent firepaint", penalty: "KES 3,000,000 fine / Section 159" },
                  { form: "Form KBERC-4", level: "Stage 5: Facade & Roof Deck", disc: "Architect, Facade Specialist & QS", risk: "Classes B to E", tests: "ASTM E1105 water jet test, 48-hr roof flood test, wind anchor pull test", penalty: "KES 2,500,000 fine / Section 156" },
                  { form: "Form KBERC-5", level: "Stage 6: MEP Shafts & Electrical", disc: "Electrical Eng, Mechanical Eng & QS", risk: "Classes A to E", tests: "Megger 1000V insulation test, 10-bar pipe pressure test, HVAC CFM audit", penalty: "License Suspension / Section 62" },
                  { form: "Form KBERC-5A", level: "Stage 7: Fire Safety & Sprinklers", disc: "Fire Safety Specialist & Interior Designer", risk: "Classes C, D & E", tests: "1000 GPM fire pump flow test, 50 Pa smoke extraction, 2-hr fire door seal", penalty: "5 Yrs Prison / Section 160" },
                  { form: "Form KBERC-5B", level: "Stage 8: PWD Access & Lifts", disc: "Lead Architect & Interior Designer", risk: "Classes B to E", tests: "1:12 ramp slope clinometer audit, lift 125% load brake drop test", penalty: "KES 50,000 daily fine / Sec 113" },
                  { form: "Form KBERC-6", level: "Stage 9: Certificate of Occupancy", disc: "County Desk Officer & Lead Architect", risk: "Classes A to E (100% Mandatory)", tests: "Verification across Forms KBERC-1 to 5B, QR Seal audit, PII policy check", penalty: "Building Seizure & Prosecution" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #CBD5E1', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 900, color: '#047857' }}>{row.form}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: '#0F172A' }}>{row.level}</td>
                    <td style={{ padding: '12px 14px', color: '#1E293B', fontWeight: 600 }}>{row.disc}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#7C3AED' }}>{row.risk}</td>
                    <td style={{ padding: '12px 14px', color: '#334155' }}>{row.tests}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#DC2626' }}>{row.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}"""

if target_str in content:
    new_content = content.replace(target_str, master_schedule_table_code)
    file_path.write_text(new_content, encoding="utf-8")
    print("SUCCESSFULLY ADDED MASTER SCHEDULE OF KBERC SIGN-OFFS TABLE TO src/app/viewer/building-navigator/page.tsx!")
else:
    print("Could not find target_str in page.tsx")
