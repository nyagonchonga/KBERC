import pathlib

file_path = pathlib.Path("src/app/viewer/about/page.tsx")
content = file_path.read_text(encoding="utf-8")

illustrative_charts_jsx = """
        {/* Illustrative Visual Charts Section */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", borderBottom: "2px solid #CBD5E1", paddingBottom: "12px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0F172A", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
              <span>📊</span> Illustrative Visual Charts &amp; Structural Flowcharts
            </h2>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#047857", background: "rgba(4,120,87,0.1)", padding: "4px 12px", border: "1px solid rgba(4,120,87,0.3)" }}>
              Visual Instruments
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
            
            {/* Chart 1: Eurocode Building Risk Classification Ladder */}
            <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #B45309", padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "6px" }}>
                SECTION 89 • EUROCODE BUILDING RISK LADDER
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#0F172A", margin: "0 0 16px 0" }}>
                Building Risk Class &amp; Mandatory Peer Review Gate
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { class: "Class A", storeys: "1–2 Storeys", req: "Standard KBERC Design Sign-Off", color: "#10B981", percent: 25 },
                  { class: "Class B", storeys: "3–5 Storeys", req: "KBERC Registered Lead Architect/Engineer", color: "#3B82F6", percent: 45 },
                  { class: "Class C", storeys: "6–9 Storeys", req: "County Structural Verification Desk", color: "#F59E0B", percent: 65 },
                  { class: "Class D", storeys: "10–19 Storeys", req: "Mandatory Single Independent Peer Review", color: "#EF4444", percent: 85 },
                  { class: "Class E", storeys: "20+ Storeys / Basements ≥3", req: "Mandatory Dual Specialist Peer Review", color: "#9333EA", percent: 100 }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: "#F8FAFC", padding: "12px 14px", border: "1px solid #E2E8F0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 800, marginBottom: "4px" }}>
                      <span style={{ color: item.color }}>{item.class} ({item.storeys})</span>
                      <span style={{ color: "#0F172A" }}>{item.req}</span>
                    </div>
                    <div style={{ width: "100%", height: "8px", background: "#E2E8F0" }}>
                      <div style={{ width: `${item.percent}%`, height: "100%", background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 2: 6-Stage Site Sign-Off Inspection Flowchart */}
            <div style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", borderTop: "4px solid #047857", padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "10px", fontWeight: 900, color: "#047857", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "6px" }}>
                SECTION 107 • 6-STAGE INSPECTION FLOW
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#0F172A", margin: "0 0 16px 0" }}>
                Site Stage Sign-Off Certificate Pipeline
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { form: "Form KBERC-1", stage: "Stage 1: Excavation & Soil Bearing Audit", lead: "Geotechnical / Lead Architect" },
                  { form: "Form KBERC-2", stage: "Stage 2: Substructure & Foundation Pour", lead: "Structural Engineer" },
                  { form: "Form KBERC-3", stage: "Stage 3: Superstructure Frame & Ring Beam", lead: "Structural Engineer" },
                  { form: "Form KBERC-4", stage: "Stage 4: Roof Truss Anchor & Wall Plate", lead: "Lead Architect / Engineer" },
                  { form: "Form KBERC-5", stage: "Stage 5: MEP Services & Fire Egress Audit", lead: "MEP Engineer / Interior Designer" },
                  { form: "Form KBERC-6", stage: "Stage 6: Final Certificate of Occupancy", lead: "County Executive Desk" }
                ].map((s, idx) => (
                  <div key={idx} style={{ background: "#F8FAFC", padding: "12px 14px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 900, color: "#047857", display: "block" }}>{s.form}</span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>{s.stage}</span>
                    </div>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748B", background: "#E2E8F0", padding: "3px 8px" }}>
                      {s.lead}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
"""

marker = "{/* Section 2: 8 Regulated Disciplines */}"
if marker in content:
    content = content.replace(marker, illustrative_charts_jsx + "\n        " + marker)
    file_path.write_text(content, encoding="utf-8")
    print("Successfully added illustrative visual charts to src/app/viewer/about/page.tsx!")
else:
    print("Marker not found in about page")
