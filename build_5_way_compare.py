import pathlib

code = """'use client';

import { useState } from "react";
import Link from "next/link";

interface ComparisonRow {
  category: string;
  topic: string;
  cap525: string;
  architectsBill: string;
  qsBill: string;
  aqsBill: string;
  kberc2026: string;
  proviso: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    category: "Regulatory Model",
    topic: "Institutional Scope & Structure",
    cap525: "Single 1934 joint Board (BORAQS) regulating only Architects & Quantity Surveyors.",
    architectsBill: "Standalone Board for Architects only. Excludes QS, Engineers, Planners, and TVET technicians.",
    qsBill: "Standalone Board for Quantity Surveyors only. Excludes Architects, Engineers, and Project Managers.",
    aqsBill: "Re-branded joint A&QS Board preserving legacy 1934 two-profession silo structure.",
    kberc2026: "Unified Apex Regulatory Council (KBERC) regulating all built environment professions under public safety.",
    proviso: "Section 6 establishes comprehensive multi-disciplinary Council representation."
  },
  {
    category: "Regulatory Model",
    topic: "BORAQS Winding-Down & Transition",
    cap525: "Active legacy board operating since 1934.",
    architectsBill: "Splits BORAQS assets to create a separate Architects Registration Board.",
    qsBill: "Splits BORAQS assets to create a separate Quantity Surveyors Board.",
    aqsBill: "Retains BORAQS structure with minor administrative re-naming.",
    kberc2026: "Cap 525 fully repealed (Sec 212). BORAQS 100% subsumed; all financial assets, registers, and records transfer to KBERC (Sec 211).",
    proviso: "12-month grace period for legacy practitioner migration (Sec 211)."
  },
  {
    category: "Federated Relations",
    topic: "Engineers (EBK Cap 530) Relationship",
    cap525: "Zero statutory coordination with Engineers Board of Kenya (EBK).",
    architectsBill: "No statutory coordination mechanism with EBK or engineering disciplines.",
    qsBill: "No statutory coordination mechanism with EBK or engineering disciplines.",
    aqsBill: "Adversarial supremacy claims attempting to subordinate engineering design scopes.",
    kberc2026: "Federated Autonomy: Cap 530 preserved. EBK coordinates via statutory Joint Co-ordination Forum (Sec 23-24).",
    proviso: "Sec 5(2) Proviso saving EBK statutory accreditation & disciplinary autonomy under Cap 530."
  },
  {
    category: "Registration Pathways",
    topic: "Technicians, TVET & Candidate Registration",
    cap525: "Binary registration (Registered vs Unregistered). Zero legal recognition for Technologists or Technicians.",
    architectsBill: "Binary registration for professional Architects only; excludes TVET diploma holders.",
    qsBill: "Binary registration for professional Quantity Surveyors only; excludes TVET diploma holders.",
    aqsBill: "Limited candidate registration without formal TVET technician recognition.",
    kberc2026: "4-Stage Pipeline: Student Indexing → Candidate Practitioner → Lead Professional → Specialist. Full TVET Technologist & Technician recognition (Sec 27-28).",
    proviso: "Mandatory Student Indexing within 90 days of admission (Sec 27(1))."
  },
  {
    category: "Public Protection",
    topic: "Risk-Based Building Classification",
    cap525: "Title protection only. Zero connection between project structural risk and staffing rules.",
    cap530: "Architectural title protection and design copyright focus.",
    architectsBill: "Architectural design title protection; no risk-based staffing rules.",
    qsBill: "Cost estimation title protection; no risk-based staffing rules.",
    aqsBill: "Title protection for A&QS without risk-based project stratification.",
    kberc2026: "Project Risk Classes 1 to 5 (Low to High-Consequence). Mandatory Lead Professional staffing schedules matching structural risk (Part VII).",
    proviso: "Risk Classes 4 & 5 require mandatory Lead Professional digital seals (Part VII & XIII)."
  },
  {
    category: "Digital Seals & Compliance",
    topic: "Plan Sign-Off & Seal Lending Safeguards",
    cap525: "Physical rubber stamps only. Rampant unauthorized rubber-stamping ('seal lending').",
    architectsBill: "Physical architectural stamps without cryptographic authentication.",
    qsBill: "Physical QS stamps without cryptographic authentication.",
    aqsBill: "Physical stamps without digital cryptographic authentication.",
    kberc2026: "Cryptographic Digital Seals & serialized stamps. Criminalization of seal lending with fines up to KES 5M (Part XIII & XIV).",
    proviso: "Prohibition on Seal Lending with personal practitioner liability (Sec 148)."
  },
  {
    category: "Discipline & Inquiries",
    topic: "Disciplinary Oversight & Referral Protocols",
    cap525: "BORAQS sits as investigator, prosecutor, judge, and jury.",
    architectsBill: "Internal Architects Board disciplinary committee.",
    qsBill: "Internal QS Board disciplinary committee.",
    aqsBill: "Internal A&QS Disciplinary Committee.",
    kberc2026: "Disciplinary Referral Protocol: KBERC investigates built-environment defaults but refers technical engineering breaches to EBK under Sec 102 to prevent Article 50(2)(o) Double Jeopardy.",
    proviso: "Joint Disciplinary Panel for multi-disciplinary site collapses (Sec 102)."
  },
  {
    category: "Remuneration",
    topic: "Professional Scale of Fees",
    cap525: "Statutory mandatory scale of fees for Architects & QS.",
    architectsBill: "Architect-only scale of fees gazetted by Minister.",
    qsBill: "QS-only scale of fees gazetted by Minister.",
    aqsBill: "Joint A&QS scale of fees.",
    kberc2026: "Co-Gazetted Professional Fee Scales: CS gazettes fee scales only after mandatory joint consultation with EBK under Cap 530 (Sec 185).",
    proviso: "Joint Fee Scale Committee consultation required prior to gazettement (Sec 185)."
  },
  {
    category: "Appellate Remedies",
    topic: "Appellate Tribunal vs Ministerial Appeals",
    cap525: "Appeals directed to the Minister or High Court directly without a specialized tribunal.",
    architectsBill: "Appeals to High Court directly.",
    qsBill: "Appeals to High Court directly.",
    aqsBill: "Appeals heard internally by Board members.",
    kberc2026: "Independent Built Environment Appeals Tribunal chaired by an Advocate of the High Court of Kenya of at least 15 years standing (Part XI).",
    proviso: "Tribunal decisions hold legal force of a binding High Court decree (Sec 130)."
  }
];

export default function CompareMode() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"matrix" | "cards">("matrix");

  const categories = ["All", "Regulatory Model", "Federated Relations", "Registration Pathways", "Public Protection", "Digital Seals & Compliance", "Discipline & Inquiries", "Remuneration", "Appellate Remedies"];

  const filteredData = COMPARISON_DATA.filter(item => selectedCategory === "All" || item.category === selectedCategory);

  return (
    <div style={{
      minHeight: "100vh", background: "#020617", color: "#fff",
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", padding: "40px 28px 80px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;} a{text-decoration:none;}
        .card-hover:hover{border-color:rgba(16,185,129,0.3)!important;transform:translateY(-2px);}
        .fu{animation:fu 0.4s ease-out both;}
        @keyframes fu{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}
        th, td { padding: 12px 14px; text-align: left; vertical-align: top; border-bottom: 1px solid rgba(255,255,255,0.06); }
      `}</style>

      <div style={{ maxWidth: "1450px", margin: "0 auto" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
          <Link href="/viewer" style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>Viewer Hub</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>›</span>
          <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>5-Way Statutory Legislative Comparison</span>
        </nav>

        <header className="fu" style={{ marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 14px", borderRadius: "999px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", marginBottom: "16px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
            <span style={{ fontSize: "10px", fontWeight: 900, color: "#10B981", letterSpacing: "0.2em", textTransform: "uppercase" }}>5-Instrument Legal Analysis</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Comparative Analysis: Cap 525, Architects Bill, QS Bill, A&amp;QS Bill vs KBERC 2026
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.48)", maxWidth: "900px", lineHeight: 1.7 }}>
            Complete 5-way statutory comparison evaluating legacy Cap 525 (1934 Act), the proposed Architects Bill, the proposed Quantity Surveyors Bill, the draft A&amp;QS Professionals Bill, and the enacted KBERC Bill 2026.
          </p>
        </header>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "16px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => setActiveTab("matrix")}
              style={{
                display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "12px",
                background: activeTab === "matrix" ? "#10B981" : "rgba(255,255,255,0.03)",
                color: activeTab === "matrix" ? "#fff" : "rgba(255,255,255,0.5)",
                fontSize: "13px", fontWeight: 800, border: activeTab === "matrix" ? "none" : "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer", transition: "all 0.2s"
              }}
            >
              📊 5-Way Statutory Matrix
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              style={{
                display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "12px",
                background: activeTab === "cards" ? "#10B981" : "rgba(255,255,255,0.03)",
                color: activeTab === "cards" ? "#fff" : "rgba(255,255,255,0.5)",
                fontSize: "13px", fontWeight: 800, border: activeTab === "cards" ? "none" : "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer", transition: "all 0.2s"
              }}
            >
              🎴 Side-by-Side Cards View
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Filter Domain:</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{ padding: "8px 14px", borderRadius: "10px", background: "rgba(2,6,23,0.8)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: "12px", outline: "none" }}
            >
              {categories.map(c => <option key={c} value={c} style={{ background: "#020617" }}>{c}</option>)}
            </select>
          </div>
        </div>

        {activeTab === "matrix" && (
          <div className="fu" style={{ overflowX: "auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1250px", fontSize: "11px" }}>
              <thead>
                <tr style={{ background: "rgba(2,6,23,0.9)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ width: "14%", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Statutory Topic</th>
                  <th style={{ width: "17%", color: "#EF4444" }}>Cap 525 (1934 Act)</th>
                  <th style={{ width: "17%", color: "#F59E0B" }}>Architects Bill</th>
                  <th style={{ width: "17%", color: "#EC4899" }}>Quantity Surveyors Bill</th>
                  <th style={{ width: "17%", color: "#60A5FA" }}>A&amp;QS Professionals Bill</th>
                  <th style={{ width: "18%", color: "#10B981" }}>KBERC Bill 2026 (Enacted)</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                    <td>
                      <div style={{ fontWeight: 800, color: "#fff", fontSize: "12px", marginBottom: "4px" }}>{row.topic}</div>
                      <span style={{ fontSize: "9px", fontFamily: "monospace", color: "#10B981", background: "rgba(16,185,129,0.1)", padding: "2px 6px", borderRadius: "4px" }}>{row.category}</span>
                    </td>
                    <td style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{row.cap525}</td>
                    <td style={{ color: "rgba(245,158,11,0.8)", lineHeight: 1.5 }}>{row.architectsBill}</td>
                    <td style={{ color: "rgba(236,72,153,0.8)", lineHeight: 1.5 }}>{row.qsBill}</td>
                    <td style={{ color: "rgba(96,165,250,0.8)", lineHeight: 1.5 }}>{row.aqsBill}</td>
                    <td style={{ background: "rgba(16,185,129,0.02)" }}>
                      <div style={{ color: "#fff", fontWeight: 600, lineHeight: 1.5, marginBottom: "6px" }}>{row.kberc2026}</div>
                      <div style={{ fontSize: "10px", color: "#10B981", border: "1px solid rgba(16,185,129,0.3)", padding: "3px 6px", borderRadius: "6px", background: "rgba(16,185,129,0.05)" }}>
                        💡 {row.proviso}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "cards" && (
          <div className="fu" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
            {filteredData.map((row, idx) => (
              <div key={idx} className="card-hover fu" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "9px", fontFamily: "monospace", color: "#10B981", background: "rgba(16,185,129,0.1)", padding: "3px 8px", borderRadius: "6px" }}>{row.category}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>{row.topic}</h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                    <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "10px", padding: "8px 10px" }}>
                      <div style={{ fontSize: "9px", fontWeight: 900, color: "#EF4444", textTransform: "uppercase", marginBottom: "2px" }}>Cap 525 (1934 Legacy Act)</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{row.cap525}</div>
                    </div>
                    <div style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "10px", padding: "8px 10px" }}>
                      <div style={{ fontSize: "9px", fontWeight: 900, color: "#F59E0B", textTransform: "uppercase", marginBottom: "2px" }}>Proposed Architects Bill</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{row.architectsBill}</div>
                    </div>
                    <div style={{ background: "rgba(236,72,153,0.04)", border: "1px solid rgba(236,72,153,0.2)", borderRadius: "10px", padding: "8px 10px" }}>
                      <div style={{ fontSize: "9px", fontWeight 900, color: "#EC4899", textTransform: "uppercase", marginBottom: "2px" }}>Proposed Quantity Surveyors Bill</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{row.qsBill}</div>
                    </div>
                    <div style={{ background: "rgba(96,165,250,0.04)", border: "1px solid rgba(96,165,250,0.2)", borderRadius: "10px", padding: "8px 10px" }}>
                      <div style={{ fontSize: "9px", fontWeight 900, color: "#60A5FA", textTransform: "uppercase", marginBottom: "2px" }}>A&amp;QS Professionals Bill Draft</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{row.aqsBill}</div>
                    </div>
                    <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "10px", padding: "10px 12px" }}>
                      <div style={{ fontSize: "9px", fontWeight 900, color: "#10B981", textTransform: "uppercase", marginBottom: "2px" }}>KBERC Bill 2026 (Enacted Public-Safety Model)</div>
                      <div style={{ fontSize: "11px", color: "#fff", fontWeight: 600, lineHeight: 1.5 }}>{row.kberc2026}</div>
                    </div>
                  </div>

                  <div style={{ fontSize: "10px", color: "#10B981", background: "rgba(16,185,129,0.08)", padding: "6px 10px", borderRadius: "8px" }}>
                    ⚖️ <strong>Legal Proviso:</strong> {row.proviso}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
"""

path = pathlib.Path('src/app/viewer/compare/page.tsx')
path.write_text(code, encoding='utf-8')
print("Successfully generated 5-way comparison page.tsx!")