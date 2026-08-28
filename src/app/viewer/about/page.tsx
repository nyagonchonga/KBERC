'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { billData } from '../data';

interface ProblemSolutionPillar {
  id: string;
  category: 'safety' | 'professions' | 'governance' | 'fees';
  categoryLabel: string;
  categoryColor: string;
  title: string;
  legacyDefectTitle: string;
  legacyDefectDesc: string;
  legacyStatute: string;
  statutorySolutionTitle: string;
  statutorySolutionDesc: string;
  primarySectionNumber: string;
  sectionsCiting: string;
  verbatimQuoteTitle: string;
  verbatimQuoteText: string;
  partLink: string;
  partLinkLabel: string;
  scheduleCiting?: string;
  keyMetricBadge: string;
}

export default function AboutPage() {
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'enacted' | 'proposed'>('all');
  const [pillarCategory, setPillarCategory] = useState<'all' | 'safety' | 'professions' | 'governance' | 'fees'>('all');
  const [selectedSectionNum, setSelectedSectionNum] = useState<string | null>(null);

  // Flatten and index all sections across the 20 statutory parts for instantaneous lookup
  const allSectionsMap = useMemo(() => {
    const map = new Map<string, { section: string; title: string; bill_text: string; partName: string; partTitle: string; analysis?: any }>();
    if (billData && billData.structure) {
      billData.structure.forEach((p: any) => {
        if (p.sections && Array.isArray(p.sections)) {
          p.sections.forEach((s: any) => {
            map.set(String(s.section).trim(), {
              section: String(s.section),
              title: s.title,
              bill_text: s.bill_text,
              partName: p.part || 'PART',
              partTitle: p.title || '',
              analysis: s.analysis
            });
          });
        }
      });
    }
    return map;
  }, []);

  const activeSectionData = selectedSectionNum ? allSectionsMap.get(selectedSectionNum) : null;

  const problemSolutionPillars: ProblemSolutionPillar[] = [
    {
      id: "p1",
      category: "governance",
      categoryLabel: "Constitutional & Devolution Void",
      categoryColor: "#2563EB",
      title: "Colonial Obsolescence & Constitutional Misalignment",
      legacyDefectTitle: "1934 Cap 525 is Pre-Devolution & Outdated by 92 Years",
      legacyDefectDesc: "Enacted in 1934 and last revised in 1968, Cap 525 was structured for a centralized colonial Public Works Department. It lacks statutory recognition of Kenya's 2010 Constitution, ignoring devolved County building approval mandates (Article 185), consumer protection guarantees (Article 46), and public finance standards (Article 201).",
      legacyStatute: "Cap 525 (1934/1968) • Pre-Devolution Centralized Framework",
      statutorySolutionTitle: "Harmonized Apex Regulatory Council & County Co-Regulation",
      statutorySolutionDesc: "Establishes the Kenya Built Environment Regulatory Council (KBERC) as an Apex Body. Section 4 creates direct statutory linkage with all 47 County Governments, aligning site development controls, physical planning approvals, and real-time electronic register synchronization.",
      primarySectionNumber: "4",
      sectionsCiting: "Sections 1–15 (Parts I & II) • Sections 193–198 (Part XVII)",
      verbatimQuoteTitle: "Section 4: Establishment and Functions of the Council",
      verbatimQuoteText: "(1) There is established the Kenya Built Environment Regulatory Council (KBERC) as a body corporate with perpetual succession.\n(2) The Council shall coordinate development control standards with County Governments under Article 185, maintain a unified central electronic register of professionals, and oversee the implementation of the National Building Code across all 47 Counties.",
      partLink: "/viewer/interactive/2",
      partLinkLabel: "Part II (KBERC Apex Council)",
      scheduleCiting: "Schedule 7 (Inter-Agency Coordination)",
      keyMetricBadge: "47 Counties Synchronized"
    },
    {
      id: "p2",
      category: "safety",
      categoryLabel: "Public Safety & Criminal Sanctions",
      categoryColor: "#DC2626",
      title: "Building Collapses, Quackery & 'Rent-a-Seal' Fraud",
      legacyDefectTitle: "Title-Only Protection Allows Quacks & Stamp Renting",
      legacyDefectDesc: "Cap 525 protected only the title ('Architect' or 'Quantity Surveyor'), not the actual professional function or scope of work. Unqualified draftsmen operated under titles like 'Design Consultant'. Meanwhile, registered professionals routinely leased physical rubber stamps to unlicensed developers for a nominal fee without inspecting sites.",
      legacyStatute: "Cap 525 Sec 19 • Title Protection Only (No Scope Reservation)",
      statutorySolutionTitle: "Function Protection, Scope Reservation & Heavy Criminal Sanctions",
      statutorySolutionDesc: "Statutorily reserves the exclusive right to execute architectural design, structural review, and site supervision to licensed practitioners. Criminalizes proxy stamping, quackery, and un-sealed submissions with fines up to KES 5,000,000 and 5-year custodial sentences, with piercing of corporate veil.",
      primarySectionNumber: "178",
      sectionsCiting: "Sections 24–44 (Part IV) • Sections 176–185 (Part XV)",
      verbatimQuoteTitle: "Section 178: Offence of Unauthorized Practice and Seal Loaning",
      verbatimQuoteText: "(1) A person who, not being a registered professional in good standing, practices, performs any reserved function, or submits building drawings for approval commits an offence.\n(2) Any registered professional who loans, rents, leases, or permits their digital seal or signature to be affixed to documents not prepared under their direct supervision commits a felony and shall be liable on conviction to a fine not exceeding five million shillings or imprisonment for a term not exceeding five years, or both.",
      partLink: "/viewer/interactive/4",
      partLinkLabel: "Part IV (Registration) & Part XV (Penalties)",
      scheduleCiting: "Schedule 1 (Code of Ethics) & Schedule 9 (Sanctions)",
      keyMetricBadge: "KES 5M Fine & 5-Yr Jail"
    },
    {
      id: "p3",
      category: "professions",
      categoryLabel: "Allied Disciplines & TVET Inclusion",
      categoryColor: "#059669",
      title: "Statutory Exclusion of Allied Disciplines & TVET Cadres",
      legacyDefectTitle: "6 Critical Disciplines Excluded from Statutory Regulation",
      legacyDefectDesc: "Cap 525 exclusively recognized only Architects and Quantity Surveyors. Interior Architects, Landscape Architects, Urban Designers, Construction Project Managers (CPMs), Building Surveyors, and TVET Technologists/Technicians operated in a complete legal vacuum with no title protection, standard scales of fees, or statutory registries.",
      legacyStatute: "Cap 525 Sec 2 • Limited Solely to Architects & Quantity Surveyors",
      statutorySolutionTitle: "8 Dedicated Professional Colleges & TVET Indexing Framework",
      statutorySolutionDesc: "Incorporates 8 specialized Professional Colleges under KBERC. Section 28 introduces statutory indexing, logbook examination regimes, and formal career progression pathways for TVET Higher National Diploma and B.Tech graduates into the College of Built Environment Technologists.",
      primarySectionNumber: "28",
      sectionsCiting: "Sections 16–23 (Part III) • Section 28 (Part IV)",
      verbatimQuoteTitle: "Section 28: Registration and Scopes of Built Environment Technologists",
      verbatimQuoteText: "(1) The Board shall register as a Built Environment Technologist any person holding a recognized Higher National Diploma or Bachelor of Technology degree in a built environment discipline.\n(2) Registered technologists shall have defined statutory scopes of practice, site inspection authority, and bridging access to full professional registration upon completing prescribed logbooks and competency examinations.",
      partLink: "/viewer/interactive/3",
      partLinkLabel: "Part III (8 Professional Colleges)",
      scheduleCiting: "Schedule 3 (College Constitution)",
      keyMetricBadge: "8 Disciplines Unified"
    },
    {
      id: "p4",
      category: "safety",
      categoryLabel: "Digital Verification & E-Approvals",
      categoryColor: "#7C3AED",
      title: "Counterfeit Approvals & Physical Rubber Stamp Forgeries",
      legacyDefectTitle: "Manual Rubber Stamps Forged Daily on Site Drawings",
      legacyDefectDesc: "Physical rubber stamps are easily duplicated and forged across municipal planning desks and site signboards. Building inspectors and developers have had no instant digital method to verify whether drawings submitted to Nairobi e-DAMS, Kiambu, or Mombasa portals were genuinely signed by an active, insured practitioner.",
      legacyStatute: "Cap 525 By-laws • Physical Ink Rubber Stamp Regime",
      statutorySolutionTitle: "Cryptographic Digital QR Seals & Real-Time E-Portal Sync",
      statutorySolutionDesc: "Section 57 mandates cryptographically signed Digital Practice Credentials (QR Seals) embedded on all drawing sheets, tender bills, and structural calculation reports. County permit portals must validate the QR token against the KBERC national register before issuing development permits.",
      primarySectionNumber: "57",
      sectionsCiting: "Section 57 (Part V) • Section 65–85 (Part VII)",
      verbatimQuoteTitle: "Section 57: Mandatory Cryptographic Digital Practice Seals",
      verbatimQuoteText: "(1) Every registered professional issued with an annual practicing certificate shall be assigned a unique, cryptographically verifiable Digital Practice Seal embedded with a scannable dynamic QR code.\n(2) No County Government, statutory authority, or financial institution shall accept, evaluate, or approve any architectural, structural, or engineering plan unless it bears an active, verified Digital QR Seal authenticated through the Council's national gateway.",
      partLink: "/viewer/interactive/5",
      partLinkLabel: "Part V (Practicing & QR Seals)",
      scheduleCiting: "Schedule 6 (Site Logbooks) & Schedule 14 (Stage Forms)",
      keyMetricBadge: "Cryptographic QR Verifier"
    },
    {
      id: "p5",
      category: "governance",
      categoryLabel: "Appeals & Disciplinary Enforcement",
      categoryColor: "#D97706",
      title: "Toothless Disciplinary Oversight & Meager Statutory Fines",
      legacyDefectTitle: "BORAQS Disciplinary Inquiries Stalled by High Court Injunctions",
      legacyDefectDesc: "Under Cap 525, BORAQS disciplinary fines were capped at an obsolete KES 5,000 ($38). Disciplinary decisions were frequently bogged down in prolonged High Court litigation, preventing swift suspension of negligent practitioners whose designs collapsed.",
      legacyStatute: "Cap 525 Sec 13 • KES 5,000 Maximum Statutory Penalty",
      statutorySolutionTitle: "Quasi-Judicial Built Environment Appeals Tribunal (BEAT)",
      statutorySolutionDesc: "Establishes the Built Environment Appeals Tribunal (BEAT) under Part X with powers of a Subordinate Court. BEAT enforces 60-day appellate resolution timelines, with direct authority to freeze licenses, order financial restitution, and enforce gazetted fine tariffs up to KES 5M.",
      primarySectionNumber: "121",
      sectionsCiting: "Sections 121–135 (Part X - BEAT) • Sections 166–175 (Part XIV)",
      verbatimQuoteTitle: "Section 121: Establishment of Built Environment Appeals Tribunal",
      verbatimQuoteText: "(1) There is established the Built Environment Appeals Tribunal (BEAT) which shall have the jurisdiction to hear and determine appeals arising from decisions of the Council, Professional Registration Boards, and County building permit authorities.\n(2) The Tribunal shall have the powers of a Subordinate Court to summon witnesses, administer oaths, compel document discovery, order financial restitution, and freeze practicing licenses pending inquiry.",
      partLink: "/viewer/interactive/10",
      partLinkLabel: "Part X (Appeals Tribunal)",
      scheduleCiting: "Schedule 2 (Tribunal Rules) & Schedule 9 (Sanctions)",
      keyMetricBadge: "60-Day Fast-Track Tribunal"
    },
    {
      id: "p6",
      category: "fees",
      categoryLabel: "Remuneration & Fair Competition",
      categoryColor: "#059669",
      title: "Predatory Fee Undercutting & Supervision Corner-Cutting",
      legacyDefectTitle: "80%–90% Fee Discounts Lead to Zero Site Supervision",
      legacyDefectDesc: "Rampant fee undercutting in public procurement and private commercial developments forced consultants to cut corners on site inspections, soil investigations, and structural reviews. Consultants were hired on paper but never visited construction sites, directly leading to structural collapses.",
      legacyStatute: "Cap 525 Fourth Schedule • Non-Enforceable Fee Scale Guidelines",
      statutorySolutionTitle: "Statutory Minimum Scale of Fees & Anti-Undercutting Offence",
      statutorySolutionDesc: "Part IX and Schedule 12 establish gazetted minimum fee scales (5.0%–6.5% base project cost; KES 10,000–15,000/hr advisory tariffs). Outlaws predatory undercutting as statutory professional misconduct and mandates standard form appointment contracts.",
      primarySectionNumber: "103",
      sectionsCiting: "Sections 103–120 (Part IX) • Sections 146–155 (Part XII)",
      verbatimQuoteTitle: "Section 103: Mandatory Minimum Scale of Professional Fees",
      verbatimQuoteText: "(1) The Cabinet Secretary shall, in consultation with the Council, gazette mandatory scales of minimum fees payable for professional services rendered under this Act.\n(2) Any professional or firm that charges, offers, or accepts fees below the prescribed statutory minimum, or any procuring entity that solicits predatory discount bids, commits professional misconduct and is liable to disciplinary sanctions under Schedule 9.",
      partLink: "/viewer/interactive/9",
      partLinkLabel: "Part IX (Fees & Escrow)",
      scheduleCiting: "Schedule 12 (Scale of Fees) & Schedule 1 (Ethics)",
      keyMetricBadge: "Statutory Fee Scale Protection"
    },
    {
      id: "p7",
      category: "safety",
      categoryLabel: "Liability & Defect Allocations",
      categoryColor: "#DC2626",
      title: "Defect Liability Vacuum & Endless Blame-Shifting",
      legacyDefectTitle: "Post-Collapse Disclaimers Leave Victims & Owners With Zero Recourse",
      legacyDefectDesc: "When multi-storey buildings collapsed in Huruma, Kasarani, and Kiambu, architects, structural engineers, developers, and contractors traded blame indefinitely in court. No statutory formula existed to apportion liability, and consultants had no mandatory Professional Indemnity Insurance.",
      legacyStatute: "Common Law Tort • Un-allocated Structural Defect Liabilities",
      statutorySolutionTitle: "Mandatory 10-Year Defect Allocation & Compulsory PII Covers",
      statutorySolutionDesc: "Schedule 11 enacts a statutory 10-Year Decennial Defect Liability Formula (Architect 30%, Structural Engineer 30%, Quantity Surveyor 15%, General Contractor 25%). Section 58 mandates KES 50M to KES 200M Professional Indemnity Insurance (PII) for all registered firms.",
      primarySectionNumber: "58",
      sectionsCiting: "Section 58 (Part VI) • Sections 103–120 (Part IX)",
      verbatimQuoteTitle: "Section 58: Mandatory Professional Indemnity Insurance",
      verbatimQuoteText: "(1) Every registered professional practice, partnership, or consulting corporate entity shall maintain a valid policy of Professional Indemnity Insurance (PII) of not less than fifty million shillings for Class B buildings, and not less than two hundred million shillings for Class C, D, and E buildings.\n(2) Schedule 11 shall govern the joint and several liability apportionment among building consultants and contractors for a statutory decennial period of ten years following completion.",
      partLink: "/viewer/interactive/6",
      partLinkLabel: "Part VI (Consultancies & PII)",
      scheduleCiting: "Schedule 11 (10-Yr Defect Matrix) & Schedule 4 (Eurocode)",
      keyMetricBadge: "10-Yr Decennial Liability"
    },
    {
      id: "p8",
      category: "safety",
      categoryLabel: "Disaster Response & Forensic Audits",
      categoryColor: "#7C3AED",
      title: "Post-Collapse Forensic Inertia & Uncompensated Victims",
      legacyDefectTitle: "Forensic Inquiries Drag for Years With Zero Emergency Fund",
      legacyDefectDesc: "Post-disaster structural inquiries take months to mobilize while compromised ruins endanger adjacent plots. Injuried tenants, bereaved families, and emergency responders receive zero statutory relief while developers hide behind dormant shell companies.",
      legacyStatute: "Ad-hoc Ministerial Committees • No Standing Forensic Fund",
      statutorySolutionTitle: "6-Hour Forensic Audit Dispatch & Standing Disaster Inquiry Fund",
      statutorySolutionDesc: "Part XVI empowers KBERC to dispatch a rapid Forensic Structural Audit Team within 6 hours of any structural failure, with legal power to evacuate adjacent structures. Schedule 13 operationalizes the 5% Disaster Emergency Inquiry Fund to finance investigations and immediate victim relief.",
      primarySectionNumber: "186",
      sectionsCiting: "Sections 186–192 (Part XVI) • Section 135 (Part XI)",
      verbatimQuoteTitle: "Section 186: Emergency Structural Failure and Collapse Response",
      verbatimQuoteText: "(1) Upon the occurrence of any building collapse, structural distress, or serious life safety incident, the Registrar shall immediately dispatch a certified Forensic Audit Team within six hours.\n(2) The Forensic Audit Team shall have the statutory authority to cordon off the site, impound building plans and site logbooks, order the immediate evacuation of adjacent endangered properties, and draw upon the Disaster Emergency Fund established under Section 135.",
      partLink: "/viewer/interactive/16",
      partLinkLabel: "Part XVI (Emergency Response)",
      scheduleCiting: "Schedule 13 (Disaster Inquiry Fund)",
      keyMetricBadge: "6-Hour Rapid Response"
    }
  ];

  const countyCadres = [
    {
      title: "1. County Director of Built Environment Control (CDBEC)",
      qualifications: "Registered Architect or Professional Structural Engineer (10+ Years Post-Registration Experience)",
      badgeColor: "#B91C1C",
      role: "Apex technical authority in the County. Serves as lead signatory on Development Permits and Final Occupancy Certificates (Form KBERC-6). Holds ultimate statutory accountability for County building safety.",
      statuteSection: "65",
      statuteLabel: "Section 65 (Part VII)"
    },
    {
      title: "2. Architectural & Spatial Review Officers",
      qualifications: "Registered Architects & Registered Physical Planners (AAK / KIP / KBERC Indexed)",
      badgeColor: "#2563EB",
      role: "Evaluates zoning density, Floor Area Ratio (FAR), setback compliance, barrier-free accessibility, natural ventilation, and fire compartmentation on County e-Permit portals.",
      statuteSection: "71",
      statuteLabel: "Section 71 (Part VII)"
    },
    {
      title: "3. Structural & Geotechnical Audit Engineers",
      qualifications: "Registered Structural / Civil Engineers (EBK / KBERC Indexed)",
      badgeColor: "#DC2626",
      role: "Audits Eurocode structural calculation reports, foundation soil investigation logs, and enforces mandatory Independent Dual Structural Peer Reviews for Class D & E towers (Sec 89).",
      statuteSection: "89",
      statuteLabel: "Section 89 (Part VIII)"
    },
    {
      title: "4. MEP & Life Safety Review Specialists",
      qualifications: "Registered Mechanical & Electrical Engineers (EBK / EPRA Certified)",
      badgeColor: "#7C3AED",
      role: "Reviews active fire suppression installations, wet riser layouts, electrical sub-station safety, lift shaft engineering, ventilation shafts, and energy compliance standards (NBC 2024).",
      statuteSection: "76",
      statuteLabel: "Section 76 (Part VII)"
    },
    {
      title: "5. Certified Field Building Inspectors (TVET Cadres)",
      qualifications: "TVET Higher National Diploma / B.Tech in Construction / Civil Engineering (KBERC Indexed)",
      badgeColor: "#059669",
      role: "Executes mandatory on-site physical stage gate testing using Non-Destructive Testing (NDT) rebound hammers, core drills, concrete slump checks, and maintains digital site inspection logbooks.",
      statuteSection: "28",
      statuteLabel: "Section 28 (Part IV) & Schedule 6"
    }
  ];

  const practiceComparisons = [
    {
      dimension: "1. Inspection Personnel",
      legacy: "Unqualified 'enforcement askaris', general revenue clerks, and administrative ward officers looking to issue spot-fines or collect bribes.",
      reformed: "Certified Engineers, Architects, and Indexed TVET Technologists equipped with standardized NDT diagnostic tools and digital tablets.",
      sectionRef: "28"
    },
    {
      dimension: "2. Drawing Seal Verification",
      legacy: "Zero digital check. Physical ink stamps are forged at cyber cafés and stamped on un-inspected drawings without practitioner knowledge.",
      reformed: "Cryptographic QR Digital Seals. County portals automatically reject un-sealed plans via direct real-time KBERC national register API authentication.",
      sectionRef: "57"
    },
    {
      dimension: "3. Approval Turnaround Time",
      legacy: "Fragmented, serial process taking 6 to 18 months across siloed County, NEMA, NCA, Fire, and Public Health departments.",
      reformed: "Single-Window JTAC with 30-Day Mandatory Statutory Clock. Concurrent multi-agency review with automatic escalation to Tribunal upon delay.",
      sectionRef: "194"
    },
    {
      dimension: "4. Site Testing & Quality Audits",
      legacy: "Visual 'drive-by' inspections. Structural concrete is poured without verified batch ratios, core tests, or soil testing logs.",
      reformed: "Evidence-Based NDT Stage Gate Testing. Subsidized ultrasonic testers, rebound hammers, and rebar cover-meters log real-time test data.",
      sectionRef: "68"
    },
    {
      dimension: "5. Building Occupation Rules",
      legacy: "Developers move tenants into un-plastered, un-inspected buildings while construction continues overhead; utilities connect freely.",
      reformed: "Criminalized Premature Occupation (Sec 84). Strict criminal offense to connect power/water or occupy without Form KBERC-6 Occupancy Certificate.",
      sectionRef: "84"
    },
    {
      dimension: "6. Corrupt Officer Liability",
      legacy: "County officers hide behind institutional anonymity with zero personal civil or criminal consequences when a building collapses.",
      reformed: "Pierced Officer Immunity (Sec 178 & PFM Act). County officers issuing fraudulent approvals face personal criminal charges (up to KES 5M fine, 5 years jail).",
      sectionRef: "178"
    }
  ];

  const jtacQuorum = [
    { num: "1", title: "County Director of Built Environment Control", role: "Committee Chairperson & Lead Signatory", entity: "County Directorate (CDBECI)", sec: "65" },
    { num: "2", title: "County Director of Physical Planning", role: "Zoning, Density, Land Use & PPA Compliance", entity: "County Planning Dept", sec: "71" },
    { num: "3", title: "County Structural & Geotechnical Engineer", role: "Eurocode Calculations & Soil Audit", entity: "County Engineering Dept", sec: "89" },
    { num: "4", title: "County Chief Fire Officer", role: "Life Safety, Egress & Suppression Systems", entity: "County Fire Directorate", sec: "76" },
    { num: "5", title: "County Director of Public Health", role: "Sanitation, Ventilation & Environmental Health", entity: "County Health Dept", sec: "77" },
    { num: "6", title: "Designated NEMA Environmental Liaison", role: "EIA / Summary Project Report Clearance", entity: "NEMA Regional Office", sec: "193" },
    { num: "7", title: "Designated NCA Quality Assurance Officer", role: "Contractor Accreditation & Site Quality", entity: "NCA Regional Directorate", sec: "194" }
  ];

  const riskClassTeams = [
    {
      classCode: "CLASS A",
      label: "Low Risk (Single Dwellings <2 Storeys)",
      scope: "Single residential houses, minor boundary walls, single-storey storage sheds.",
      teamMandate: "Registered Architect OR Indexed TVET Technologist + NCA Category 7/8 Contractor.",
      peerReview: "Standard County Desk Check",
      sec: "28"
    },
    {
      classCode: "CLASS B",
      label: "Medium Risk (3 to 5 Storeys Residential/Commercial)",
      scope: "Multi-family residential blocks, standard commercial retail units, light warehouses.",
      teamMandate: "Lead Architect + Registered Structural Engineer + Quantity Surveyor + NCA Category 4–6 Contractor + Certified Site Clerk-of-Works.",
      peerReview: "Internal County Engineering Audit",
      sec: "66"
    },
    {
      classCode: "CLASS C",
      label: "High Risk (6 to 10 Storeys / Public Assembly)",
      scope: "Medium-rise residential towers, educational institutions, hospitals, shopping malls.",
      teamMandate: "Full Lead Multi-Disciplinary Team (Lead Architect, Structural Eng, MEP Engineers, Lead QS, NEMA Lead Expert, NCA 1–3 Contractor, Full-Time Resident Clerk-of-Works).",
      peerReview: "Mandatory Geotechnical Core Review",
      sec: "88"
    },
    {
      classCode: "CLASS D & E",
      label: "Critical & Super-High Rise (>10 Storeys / Deep Basements)",
      scope: "High-rise towers >10 storeys, basements >2 levels, major transport hubs, stadiums.",
      teamMandate: "Full Lead Team + Mandatory Independent Dual Structural Peer Reviewer (Sec 89) + Geotechnical Specialist + Certified Construction Project Manager (CPM) + Fire Specialist + NCA 1 Contractor.",
      peerReview: "Mandatory Independent Dual Peer Review (Sec 89)",
      sec: "89"
    }
  ];

  const forensicDisasterTeam = [
    { title: "1. Senior Forensic Structural Investigator", role: "Team Lead; conducts structural failure mode analysis and beam-column collapse modeling.", cadre: "Registered Consulting Structural Engineer (15+ Yrs Exp)", sec: "186" },
    { title: "2. Geotechnical Soil & Core Drilling Specialist", role: "Extracts immediate core samples from rubble, tests soil bearing capacity, and checks groundwater heave.", cadre: "Senior Geotechnical Engineer", sec: "187" },
    { title: "3. NDT Materials Laboratory Engineer", role: "Deploys on-site ultrasonic pulse testers, carbonation test kits, and rebar yield strength gauges.", cadre: "Materials Laboratory Specialist", sec: "188" },
    { title: "4. KBERC Legal Enforcement Officer", role: "Secures search warrants, seizes on-site logbooks, approved drawings, and issues eviction orders for endangered adjacent plots.", cadre: "Advocate of High Court of Kenya", sec: "189" },
    { title: "5. NDOC Emergency Response Liaison", role: "Coordinates search and rescue logistics, emergency victim relief, and site security cordons.", cadre: "National Disaster Operations Centre", sec: "190" }
  ];

  const appealsTribunalQuorum = [
    { position: "Tribunal Chairperson", requirement: "Qualified to be appointed as a Judge of the High Court of Kenya (10+ Yrs Legal Experience)", role: "Presides over appellate hearings and signs enforceable court decrees.", sec: "121" },
    { position: "Senior Architectural Member", requirement: "Registered Architect with minimum 15 years active practice", role: "Technical judge on design, spatial standards, and professional conduct disputes.", sec: "122" },
    { position: "Senior Structural Engineering Member", requirement: "Registered Consulting Structural Engineer with minimum 15 years active practice", role: "Technical judge on structural safety, Eurocode compliance, and building collapses.", sec: "123" },
    { position: "Senior Quantity Surveying Member", requirement: "Registered Quantity Surveyor with minimum 15 years active practice", role: "Technical judge on fee undercutting, BOQ valuations, and contract payment disputes.", sec: "124" },
    { position: "Senior Legal Practitioner Member", requirement: "Advocate of the High Court of Kenya with minimum 10 years active practice", role: "Technical judge on administrative justice, constitutional rights, and evidence law.", sec: "125" }
  ];

  const historicalMilestones = [
    {
      year: "1968",
      title: "Architects and Quantity Surveyors Act (Cap 525)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Parliament enacted Cap 525 establishing BORAQS to regulate architects and quantity surveyors. Over 58 years, it became obsolete, failing to cover CPMs, Landscape Architects, Interior Designers, TVET Technologists, or digital plan submissions."
    },
    {
      year: "1969",
      title: "Engineers Registration Act (Cap 530)",
      status: "REPEALED 2011",
      badgeColor: "#64748B",
      desc: "Legacy statute governing engineer registration in post-independence Kenya. Repealed and replaced by the Engineers Act 2011."
    },
    {
      year: "1996",
      title: "Physical Planning Act (Cap 286)",
      status: "REPEALED 2019",
      badgeColor: "#64748B",
      desc: "Governed physical planning and land use control prior to the 2010 Constitution. Repealed by PLUPA 2019."
    },
    {
      year: "1999",
      title: "Environmental Management & Co-ordination Act (EMCA Cap 387)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Established NEMA to enforce mandatory Environmental Impact Assessments (EIA) and Environmental Audits for all building developments in Kenya."
    },
    {
      year: "2007",
      title: "Building Surveyors Bill 2007",
      status: "PROPOSED / STALLED",
      badgeColor: "#DC2626",
      desc: "Early legislative attempt to separately regulate building surveyors, site inspection officers, and maintenance auditors; stalled in Parliament due to lack of inter-professional consensus."
    },
    {
      year: "2010",
      title: "Promulgation of Constitution of Kenya 2010",
      status: "ENACTED CONSTITUTION",
      badgeColor: "#2563EB",
      desc: "Articles 10, 42, 43, 47, 185, and 201 introduced binding national values, devolved County building approval mandates, consumer protection rights, and public finance standards."
    },
    {
      year: "2011",
      title: "National Construction Authority Act (NCA Act 2011)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Established NCA to register building contractors and accredit site construction workers. Created overlapping site inspection friction with BORAQS and EBK."
    },
    {
      year: "2011",
      title: "Engineers Act 2011 (Cap 530 Re-enactment)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Repealed 1969 ERA Act, establishing the Engineers Board of Kenya (EBK) with expanded statutory powers over professional engineers, consulting engineering firms, and university degree accreditation."
    },
    {
      year: "2012",
      title: "Built Environment Regulation Bill 2012",
      status: "PROPOSED DRAFT",
      badgeColor: "#DC2626",
      desc: "First attempt by Cabinet to establish an umbrella Built Environment Board; rejected by registration boards fearing loss of discipline autonomy."
    },
    {
      year: "2015",
      title: "National Building Inspectorate (NBI) Presidential Directive",
      status: "DIRECTIVE / POLICY",
      badgeColor: "#D97706",
      desc: "Formed post-Huruma building collapse to audit unsafe structures across Nairobi, Mombasa, and Kisumu; revealed over 4,000 condemned buildings operating without statutory inspection logbooks."
    },
    {
      year: "2018",
      title: "Kenya Construction Authority & Built Environment Task Force",
      status: "PROPOSED / REPORT",
      badgeColor: "#D97706",
      desc: "Joint Ministry & COG task force recommended unifying BORAQS and EBK site inspection protocols under a single public-safety umbrella Act."
    },
    {
      year: "2019",
      title: "Physical & Land Use Planning Act (PLUPA 2019)",
      status: "ENACTED",
      badgeColor: "#059669",
      desc: "Enacted development control mandates across 47 County Governments, creating legal friction with legacy national registration board approvals and necessitating statutory harmonization."
    },
    {
      year: "2020",
      title: "Project Management & Construction Managers Bill 2020",
      status: "PROPOSED DRAFT",
      badgeColor: "#DC2626",
      desc: "Private member's bill seeking to regulate Construction Project Managers (CPMs) separately; shelved to avoid further statutory fragmentation."
    },
    {
      year: "2022",
      title: "Landscape Architects & Interior Designers Bill 2022",
      status: "PROPOSED DRAFT",
      badgeColor: "#DC2626",
      desc: "Draft bill seeking separate registration boards for interior designers and landscape architects; integrated into the consolidated 2026 Master Bill."
    },
    {
      year: "2024",
      title: "Gazettement of NBC 2024 & Kahawa West Forensic Inquiries",
      status: "CURRENT AFFAIRS",
      badgeColor: "#7C3AED",
      desc: "Cabinet Secretary gazetted the National Building Code 2024 (NBC 2024) alongside Eurocodes (BS EN 1990 - 1999). High-profile structural failures (Kahawa West 7-storey collapse Oct 2024, Kasarani, Kiambu) triggered national calls for strict statutory enforcement."
    },
    {
      year: "2025",
      title: "Multi-Stakeholder Consensus Synthesis & Public Hearings",
      status: "CONSENSUS SYNTHESIS",
      badgeColor: "#7C3AED",
      desc: "Joint technical working groups representing AAK, IEK, IQSK, KIP, NCA, Council of Governors, and BORAQS synthesized public hearing memoranda into a consolidated statutory master draft."
    },
    {
      year: "2026",
      title: "Consolidated Enactment of Bill 2026",
      status: "ENACTED MASTER BILL",
      badgeColor: "#B91C1C",
      desc: "The Built Environment Professions & Practice Bill 2026 is published as a consolidated consensus Act repealing Cap 525 and establishing KBERC, Digital QR Seals, and 6-stage building controls."
    }
  ];

  const reformEfforts = [
    {
      domain: "DOMAIN 1: MULTI-BOARD CONSENSUS TASK FORCES (2018–2025)",
      title: "Joint Professional Associations & Registration Boards Harmonisation",
      lead: "AAK, IEK, IQSK, KIP, BORAQS, EBK, NCA & Council of Governors",
      desc: "Over seven years of intensive consensus workshops, joint technical working groups, and inter-board harmonization retreats were convened to resolve decades of jurisdictional friction over professional scopes of practice, fee scales, and site supervision mandates. This joint effort yielded a single, unified statutory framework protecting public safety without eroding board autonomy."
    },
    {
      domain: "DOMAIN 2: NATIONWIDE 47-COUNTY PUBLIC PARTICIPATION DRIVES",
      title: "Grassroots Public Participation & Stakeholder Memoranda",
      lead: "Parliamentary Committee on Lands, Housing & Urban Development",
      desc: "Extensive public participation hearings were conducted across all 47 County Governments in Kenya. Thousands of written and oral memoranda were submitted by property developers, county planning officers, resident associations, trade unions, TVET institutions, and disaster management agencies following urban structural collapse inquiries."
    },
    {
      domain: "DOMAIN 3: MASTER LEGISLATIVE & LEGAL HARMONISATION",
      title: "Synthesizing 208 Sections, 14 Schedules & 10 KBERC Forms",
      lead: "Office of the Lead Legislative Counsel & Legal Drafting Team",
      desc: "Legal drafting experts undertook the rigorous task of consolidating 208 statutory sections, 14 comprehensive schedules, 10 standardized KBERC inspection forms, and 8 regulated professional disciplines into a single cohesive, un-contradicted master Bill. The draft harmonizes national public safety rules with Article 185 devolved County building control powers."
    },
    {
      domain: "DOMAIN 4: TECHNICAL STANDARDS & EUROCODE ALIGNMENT",
      title: "Integrating NBC 2024, Eurocodes (BS EN 1990) & County E-Portals",
      lead: "State Department for Public Works & Kenya Bureau of Standards (KEBS)",
      desc: "Direct statutory alignment with the National Building Code 2024 (NBC 2024), transition from legacy BS 8110 to modern Eurocodes (BS EN 1990 - 1999) for structural risk management, and mandatory real-time API integration with 47 County E-Development Permit approval portals (Nairobi e-DAMS, Kiambu, Mombasa, Nakuru)."
    },
    {
      domain: "DOMAIN 5: TVET TECHNOLOGIST INDEXING & CADRE INCLUSION",
      title: "Statutory Indexing for Higher Diploma & B.Tech Cadres",
      lead: "TVET Authority (TVETA) & Built Environment Technologists Board",
      desc: "Overcoming decades of professional exclusion under 1934 Cap 525, the 2026 Act establishes statutory indexing, career progression pathways, and independent scopes of practice for TVET Higher Diploma and B.Tech graduates within the College of Built Environment Technologists."
    }
  ];

  const statutoryParts = [
    { num: "PART I", label: "Preliminary (Sections 1–3)", scope: "Short title, commencement date, statutory definitions, objects of the Act, and overarching public-safety principles." },
    { num: "PART II", label: "Establishment of KBERC Council (Sections 4–15)", scope: "Statutory incorporation of the Kenya Built Environment Regulatory Council, Apex Council constitution, and secretariat." },
    { num: "PART III", label: "Professional Boards & Discipline Colleges (Sections 16–23)", scope: "Establishment of 8 Professional Colleges (Architects, Engineers, QSs, Planners, LA, ID, CPM, TVET Technologists)." },
    { num: "PART IV", label: "Registration of Lead Professionals & Cadres (Sections 24–44)", scope: "Qualification criteria, 3-year logbooks, TVET indexing, candidate examinations, and foreign practitioner JVs." },
    { num: "PART V", label: "Practicing Certificates & Digital QR Seals (Sections 45–54)", scope: "Annual practicing licensing, mandatory 50 CPD points, cryptographically verifiable Digital QR Seals (Sec 57)." },
    { num: "PART VI", label: "Regulation of Consultancies & Consortia (Sections 55–64)", scope: "51% local equity mandates, multidisciplinary consortium accreditation, and KES 50M-200M Professional Indemnity Insurance." },
    { num: "PART VII", label: "Building Control & Site Inspection Gates (Sections 65–85)", scope: "Eurocode Building Risk Classification (Classes A–E), mandatory stage inspections, and Forms KBERC-1 to 6." },
    { num: "PART VIII", label: "Structural Safety Audits & Peer Reviews (Sections 86–102)", scope: "Dual independent structural peer reviews for high-rises (Sec 89), geotechnical audits, and structural safety sign-offs." },
    { num: "PART IX", label: "Consumer Protection & Defect Liability Allocations (Sections 103–120)", scope: "Gazetted scale of minimum fees, client escrow protections, and 10-Year Statutory Defect Liability Allocation (Schedule 11)." },
    { num: "PART X", label: "Built Environment Appeals Tribunal - BEAT (Sections 121–135)", scope: "60-day appellate hearing rules, tribunal quorum, filing fees, and High Court referral procedure." },
    { num: "PART XI", label: "Financial Provisions & Emergency Fund (Sections 136–145)", scope: "KBERC annual budget, 0.1% Development Levy, 5% Disaster Emergency Inquiry Fund (Sec 135), and Parliamentary audit loggings." },
    { num: "PART XII", label: "Professional Ethics & Integrity Rules (Sections 146–155)", scope: "Code of conduct, anti-stamp renting prohibitions, conflict of interest disclosures, and professional integrity bounds." },
    { num: "PART XIII", label: "Continuing Professional Development - CPD (Sections 156–165)", scope: "Annual minimum 50 CPD units, accredited provider framework, and license renewal verification." },
    { num: "PART XIV", label: "Disciplinary Inquiries & Sanctions (Sections 166–175)", scope: "Disciplinary Committee hearing workflow, gazetted reprimands, practicing license suspensions, and fine tariffs." },
    { num: "PART XV", label: "Offences, Penalties & Piercing Corporate Veil (Sections 176–185)", scope: "Fines up to KES 5 Million, 5-year custodial sentences, illegal practice bans, and corporate director liability." },
    { num: "PART XVI", label: "Emergency Structural Failure Response (Sections 186–192)", scope: "6-Hour Forensic Audit Team dispatch post-collapse, emergency evacuation, and demolition authorization." },
    { num: "PART XVII", label: "Inter-Agency Joint Coordination (Sections 193–198)", scope: "Statutory integration with NEMA, NCA, EPRA, and real-time API sync with 47 County E-Approval Portals." },
    { num: "PART XVIII", label: "Delegated Legislation & Regulations (Sections 199–202)", scope: "Cabinet Secretary statutory orders, parliamentary regulations, and gazetted practice guidelines." },
    { num: "PART XIX", label: "Repeal Savings & 12-Month Transition (Sections 203–206)", scope: "Repeal of 1968 Cap 525, BORAQS asset transition, acquired rights preservation, and 12-month license migration." },
    { num: "PART XX", label: "Miscellaneous Provisions & Execution (Sections 207–208)", scope: "Evidentiary rules, digital register authentication, protection from personal liability, and official commencement." }
  ];

  const statutorySchedules = [
    { num: "Schedule 1", title: "Code of Conduct, Professional Ethics & Practice Rules", scope: "Mandatory ethical standards, conflict of interest disclosures, anti-corruption rules, and professional integrity bounds." },
    { num: "Schedule 2", title: "Built Environment Appeals Tribunal Rules & Procedure", scope: "60-day appellate hearing timeline, filing fees, tribunal quorum, and High Court referral gates." },
    { num: "Schedule 3", title: "Professional Board Constitution & Election Protocols", scope: "Election rules for 8 Professional Registration Boards, registrar appointments, and council term limits." },
    { num: "Schedule 4", title: "Eurocode Risk Classification & Structural Consequence Matrix", scope: "Classification of buildings into Classes A to E (CC1 to CC3), structural peer review rules, and seismic risk mandates." },
    { num: "Schedule 5", title: "Continuing Professional Development (CPD) Point Matrix", scope: "Annual minimum 50 CPD units required for practicing license renewal across all 8 regulated disciplines." },
    { num: "Schedule 6", title: "Continuous Site Inspection Logbook & Field Sign-Off Rules", scope: "Mandatory digital clerk-of-works logbooks, photographic inspection evidence, and stage gate sign-offs." },
    { num: "Schedule 7", title: "Inter-Agency Joint Co-ordination Protocol (NEMA, NCA, Counties)", scope: "Statutory framework preventing overlapping inspections and resolving inter-agency jurisdictional disputes." },
    { num: "Schedule 8", title: "Repeal Savings, Transitional Provisions & Acquired Rights", scope: "12-month practitioner license migration window, BORAQS asset transfer, and preservation of existing rights." },
    { num: "Schedule 9", title: "Disciplinary Committee Procedure & Sanctions Tariff", scope: "Formal disciplinary inquiry workflow, gazetted reprimands, license suspensions, and fine tariffs up to KES 5M." },
    { num: "Schedule 10", title: "Statutory Licensing Fees & Corporate Registration Tariffs", scope: "Form A/B/C statutory fee schedules for individual practitioners, corporate consultancies, and foreign joint ventures." },
    { num: "Schedule 11", title: "10-Year Defect Liability Risk Allocation Matrix", scope: "Statutory risk sharing breakdown between architects (30%), structural engineers (30%), QSs (15%), and contractors (25%)." },
    { num: "Schedule 12", title: "Gazetted Minimum Scale of Professional Fees & Tariffs", scope: "Baseline percentage design fees (5.0%–6.5%), hourly advisory rates (KES 10k–15k/hr), and prohibition of undercutting." },
    { num: "Schedule 13", title: "Disaster Relief & Emergency Collapse Inquiry Fund Rules", scope: "Financing emergency collapse forensic audit teams within 6 hours and compensating victims of structural failure." },
    { num: "Schedule 14", title: "Standardized Site Stage Inspection Certificates (Forms KBERC-1 to 6)", scope: "10 statutory stage sign-off forms from Geotechnical Excavation (Form 1) to Occupancy Certificate (Form 6)." }
  ];

  const filteredPillars = problemSolutionPillars.filter(p => {
    if (pillarCategory === 'all') return true;
    return p.category === pillarCategory;
  });

  const filteredMilestones = historicalMilestones.filter(m => {
    if (timelineFilter === 'enacted') return m.status.includes('ENACTED') || m.status.includes('CURRENT');
    if (timelineFilter === 'proposed') return m.status.includes('PROPOSED') || m.status.includes('DIRECTIVE');
    return true;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F8FAFC",
      color: "#0F172A",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px) 64px"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Navigation Breadcrumb & Presentation Deck Banner Link */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-4 md:p-6 border border-slate-300 shadow-xs">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 flex-wrap">
            <Link href="/" className="hover:text-red-700 font-semibold">Home</Link>
            <span className="text-slate-400">›</span>
            <Link href="/viewer" className="hover:text-red-700 font-semibold">Viewer Portal</Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-900 font-extrabold">About &amp; Legislative Treatise</span>
          </div>

          <Link
            href="/viewer/slides"
            className="px-4 py-2.5 text-xs md:text-sm font-extrabold bg-red-700 hover:bg-red-800 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            📊 Open Executive Presentation Deck (24 Slides &amp; PDF Export) ▶
          </Link>
        </header>

        {/* Main Document Body */}
        <main className="bg-white border border-slate-300 p-4 sm:p-8 md:p-12 shadow-xs space-y-16">
          
          {/* ─── Promotional Hero Banner & Key Metrics Bar ─────────────────────── */}
          <div style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #7F1D1D 100%)',
            color: '#FFFFFF',
            padding: 'clamp(24px, 5vw, 48px)',
            border: '1px solid #334155',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#FCA5A5', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 12px', border: '1px solid rgba(239, 68, 68, 0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  🇰🇪 National Assembly Bill No. 14 of 2026 • Executive Master Treatise
                </span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', padding: '4px 12px', border: '1px solid rgba(56, 189, 248, 0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Repeal of Colonial Cap 525 (1934)
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px', color: '#FFFFFF' }}>
                Unifying Kenya&apos;s Built Environment Under One Modern Apex Regulator
              </h1>

              <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '960px', marginBottom: '28px' }}>
                Replacing 92 years of colonial legal fragmentation with <strong>20 Statutory Parts</strong>, <strong>218 Enacted Sections</strong>, <strong>14 Schedules</strong>, <strong>8 Unified Regulated Professions</strong>, Cryptographic Digital QR Seals, and 60-Day Fast-Track Judicial Appeals.
              </p>

              {/* Key Performance Metrics Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                {[
                  { label: 'Statutory Parts', val: '20 Parts', sub: 'Enacted Structure' },
                  { label: 'Enacted Sections', val: '218 Sections', sub: 'Statutory Clauses' },
                  { label: 'Statutory Schedules', val: '14 Schedules', sub: 'Fee Tariffs & Rules' },
                  { label: 'Regulated Disciplines', val: '8 Professions', sub: '+ TVET Cadres' },
                  { label: 'Devolution Sync', val: '47 Counties', sub: 'County Desks' },
                  { label: 'Anti-Quackery Penalty', val: 'KES 50M Fine', sub: '& 5-Yr Jail' }
                ].map((m, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.06)', padding: '14px 16px', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: '#F8FAFC', margin: '3px 0' }}>{m.val}</div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#38BDF8' }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── 8 Regulated Professions & TVET Showcase ─────────────────────────── */}
          <section className="space-y-6">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block mb-1">
                🤝 UNIFIED REGULATORY FRAMEWORK
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                The 8 Regulated Built Environment Professions &amp; TVET Inclusion
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Section 14 &amp; Part III formally unify all eight technical built environment disciplines alongside TVET Technologists and Craftsmen into dedicated statutory Colleges under KBERC:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Architecture", society: "AAK / BORAQS Legacy", code: "College 1", desc: "Spatial masterplanning, structural aesthetics, building envelope design & statutory plan sign-offs.", color: "#B91C1C", sec: "/viewer/interactive/3" },
                { title: "Civil & Structural Engineering", society: "IEK / EBK Cap 530", code: "College 2", desc: "Eurocode structural design (BS EN 1990), foundation engineering & high-consequence risk audits.", color: "#2563EB", sec: "/viewer/interactive/3" },
                { title: "Quantity Surveying", society: "IQSK / BORAQS Legacy", code: "College 3", desc: "Building cost planning, Bills of Quantities (BOQ), financial valuation & contract administration.", color: "#D97706", sec: "/viewer/interactive/3" },
                { title: "Physical & Land Use Planning", society: "KIP / PPRB (PLUPA)", code: "College 4", desc: "Regional spatial masterplanning, zoning density control, FAR calculations & urban policy framework.", color: "#059669", sec: "/viewer/interactive/3" },
                { title: "Construction Project Management", society: "ACMK / CPMRB", code: "College 5", desc: "Directing site construction execution, quality assurance, safety coordination & project timelines.", color: "#7C3AED", sec: "/viewer/interactive/3" },
                { title: "Landscape Architecture", society: "KSELA / LARB", code: "College 6", desc: "Outdoor site ecology, urban park design, environmental spatial planning & site drainage integration.", color: "#0D9488", sec: "/viewer/interactive/3" },
                { title: "Interior Design", society: "IDAK / IDRB", code: "College 7", desc: "Interior spatial ergonomics, acoustic performance, interior specifications & fire egress layouts.", color: "#C026D3", sec: "/viewer/interactive/3" },
                { title: "Built Environment Technologists", society: "TVETA / KBERC Indexed", code: "College 8", desc: "Technical design execution, site inspection sign-offs, NDT testing & bridging pathways to lead registration.", color: "#16A34A", sec: "/viewer/interactive/4" }
              ].map((prof, pIdx) => (
                <Link key={pIdx} href={prof.sec} className="bg-white border border-slate-300 p-5 hover:border-red-700 transition-all shadow-xs flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black px-2 py-0.5 text-white uppercase" style={{ backgroundColor: prof.color }}>
                        {prof.code}
                      </span>
                      <span className="text-[10px] font-extrabold text-slate-500">{prof.society}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-700 transition-colors mb-2">
                      {prof.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prof.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-extrabold text-red-700 uppercase flex items-center gap-1">
                    <span>Inspect College Charter</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* TVET Inclusion Banner */}
            <div className="bg-emerald-50 border border-emerald-300 p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-widest block mb-1">
                  🎓 HISTORIC TVET CADRE INCLUSION (SECTION 28)
                </span>
                <h3 className="text-base md:text-lg font-black text-slate-900">
                  College of Built Environment Technologists &amp; TVET Craftsmen
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed max-w-3xl mt-1">
                  Overcomes 92 years of exclusion by statutorily indexing Higher National Diploma and B.Tech graduates, establishing defined site inspection scopes and bridging pathways to full professional registration.
                </p>
              </div>
              <Link href="/viewer/interactive/4" className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold whitespace-nowrap self-start md:self-auto shadow-xs">
                Explore Section 28 TVET Rules →
              </Link>
            </div>
          </section>

          {/* ─── 4 Game-Changer Statutory Feature Spotlights ──────────────────────── */}
          <section className="space-y-6">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-black text-purple-700 uppercase tracking-widest block mb-1">
                ⚡ STATUTORY BREAKTHROUGHS &amp; INNOVATIONS
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                4 Core Game-Changers of the KBERC 2026 Reform
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-purple-200 p-6 space-y-3 relative overflow-hidden">
                <span className="text-xs font-black text-purple-700 bg-purple-100 px-3 py-1 uppercase border border-purple-300">
                  Section 57 • Digital QR Verification
                </span>
                <h3 className="text-lg font-black text-slate-900">1. Mandatory Cryptographic Digital QR Practice Seals</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Replaces forged rubber stamps with dynamic, machine-readable digital practice seals embedded on all drawing sheets and BOQs. County planning desks automatically validate QR seals against the KBERC national registry before issuing development permits.
                </p>
                <Link href="/viewer/interactive/5" className="text-xs font-bold text-purple-700 hover:underline block pt-2">Read Section 57 Statutory Clause →</Link>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 space-y-3 relative overflow-hidden">
                <span className="text-xs font-black text-blue-700 bg-blue-100 px-3 py-1 uppercase border border-blue-300">
                  Section 45 &amp; Sec 32 • Local Equity Rule
                </span>
                <h3 className="text-lg font-black text-slate-900">2. 51%+ Local Equity Rule for Corporate Practices</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Requires foreign consultancy firms and joint ventures operating in Kenya to maintain at least 51% local practitioner voting equity and contractually mandated skills transfer to local lead professionals.
                </p>
                <Link href="/viewer/interactive/5" className="text-xs font-bold text-blue-700 hover:underline block pt-2">Read Section 45 Corporate Rules →</Link>
              </div>

              <div className="bg-white border-2 border-red-200 p-6 space-y-3 relative overflow-hidden">
                <span className="text-xs font-black text-red-700 bg-red-100 px-3 py-1 uppercase border border-red-300">
                  Section 89 &amp; Schedule 4 • Building Risk
                </span>
                <h3 className="text-lg font-black text-slate-900">3. Eurocode Consequence &amp; Independent Dual Peer Review</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Classifies buildings into Risk Classes A to E based on Eurocodes (BS EN 1990). High-consequence structures (Classes C, D &amp; E) mandate independent 3rd-party specialist engineering peer audits before site excavation.
                </p>
                <Link href="/viewer/building-navigator" className="text-xs font-bold text-red-700 hover:underline block pt-2">Open Building Risk Navigator →</Link>
              </div>

              <div className="bg-white border-2 border-emerald-200 p-6 space-y-3 relative overflow-hidden">
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 uppercase border border-emerald-300">
                  Section 135 &amp; Sec 168 • Forensic Fund
                </span>
                <h3 className="text-lg font-black text-slate-900">4. 6-Hour Emergency Collapse Forensic Audit Protocol</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Empowers KBERC to immediately dispatch a certified Forensic Structural Audit Team within 6 hours of any structural failure, backed by a standing 5% Disaster Emergency Inquiry Fund.
                </p>
                <Link href="/viewer/interactive/16" className="text-xs font-bold text-emerald-700 hover:underline block pt-2">Inspect Forensic Protocol →</Link>
              </div>
            </div>
          </section>

          {/* Document Header Title Block */}
          <div className="border-b-4 border-slate-900 pb-6 pt-4">
            <span className="inline-block text-xs font-black text-red-700 uppercase tracking-widest bg-red-50 px-3 py-1 border border-red-200 mb-3">
              NATIONAL ASSEMBLY BILL NO. 14 OF 2026 • OFFICIAL STATUTORY TREATISE
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Comprehensive Legislative Problem Statement &amp; Statutory Solutions
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl">
              An authoritative forensic analysis of why colonial-era <strong>Cap 525 (1934/1968)</strong> failed Kenya, how recurring structural collapses and quackery proliferated, and how <strong>The Built Environment Professions &amp; Practice Bill 2026</strong> provides exact, enforceable statutory remedies across its <strong>20 Parts, 208 Sections, and 14 Schedules</strong>. Every referenced statutory clause is quoted verbatim below.
            </p>
          </div>

          {/* 1. 2024-2026 SECTOR CURRENT AFFAIRS & CRISIS BRIEFING */}
          <section className="bg-slate-50 border border-slate-300 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs font-black text-purple-700 uppercase tracking-widest">
                🚨 2024–2026 SECTOR CURRENT AFFAIRS &amp; FORENSIC CRISIS BRIEFING
              </span>
              <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 border border-slate-200">
                National Building Audit Data
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
              Urban Structural Failures &amp; The Urgent Case for Statutory Repeal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-red-700 uppercase bg-red-50 px-2 py-0.5 border border-red-200">
                  Forensic Inquiries
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  Kahawa West, Kasarani &amp; Kiambu Collapses
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Catastrophic failures of un-inspected multi-storey residential towers exposed widespread stamp-renting, un-approved extra storeys, and total absence of mandatory clerk-of-works site logbooks.
                </p>
              </div>

              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-sky-700 uppercase bg-sky-50 px-2 py-0.5 border border-sky-200">
                  Technical Standard Shift
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  National Building Code 2024 &amp; Eurocodes
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  The gazettement of NBC 2024 and mandatory transition to Eurocodes (BS EN 1990–1999) created an urgent statutory need for dual structural peer reviews and certified geotechnical investigations.
                </p>
              </div>

              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  County E-Permit Sync
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  47-County Devolution &amp; E-DAMS Integration
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  County planning portals (Nairobi e-DAMS, Kiambu, Mombasa, Nakuru) require direct API authentication against national registers to block fraudulent permit submissions.
                </p>
              </div>
            </div>
          </section>

          {/* 2. THE 8 CORE STATUTORY PROBLEM & SOLUTION PILLARS */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-slate-900 pb-4">
              <div>
                <span className="text-xs font-black text-red-700 uppercase tracking-widest block mb-1">
                  🏛️ STATUTORY MATRIX: DEFICIENCIES VS. 2026 REMEDIES
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  The 8 Structural Crisis Pillars &amp; Exact Statutory Solutions
                </h2>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setPillarCategory('all')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    pillarCategory === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  All 8 Pillars
                </button>
                <button
                  onClick={() => setPillarCategory('safety')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    pillarCategory === 'safety' ? 'bg-red-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Public Safety &amp; Quackery
                </button>
                <button
                  onClick={() => setPillarCategory('professions')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    pillarCategory === 'professions' ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Allied &amp; TVET Cadres
                </button>
                <button
                  onClick={() => setPillarCategory('governance')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    pillarCategory === 'governance' ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Governance &amp; Tribunal
                </button>
                <button
                  onClick={() => setPillarCategory('fees')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    pillarCategory === 'fees' ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Fee Scales &amp; Undercutting
                </button>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Every structural failure and regulatory defect in Kenya&apos;s construction ecosystem is paired below with its exact statutory remedy and <strong>verbatim legal text</strong>. Click any section badge to inspect the full unabridged statutory clause:
            </p>

            <div className="space-y-6">
              {filteredPillars.map((p, idx) => (
                <div key={p.id} className="bg-slate-50 border border-slate-300 shadow-xs overflow-hidden">
                  
                  {/* Pillar Header Bar */}
                  <div className="bg-slate-900 text-white p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-black px-2.5 py-1 text-white uppercase" style={{ backgroundColor: p.categoryColor }}>
                        {p.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        {idx + 1}. {p.title}
                      </h3>
                    </div>

                    <span className="text-xs font-extrabold bg-white/10 text-emerald-300 px-3 py-1 border border-white/20 whitespace-nowrap self-start sm:self-auto">
                      ⚡ {p.keyMetricBadge}
                    </span>
                  </div>

                  {/* Problem vs Solution Split Body */}
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300">
                    
                    {/* Left: The Legacy Problem (Cap 525 Failure) */}
                    <div className="p-5 sm:p-6 bg-red-50/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-red-700 uppercase tracking-wide bg-red-100 px-2 py-0.5 border border-red-300">
                          ⚠️ THE LEGACY DEFECT (CAP 525)
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{p.legacyStatute}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-red-900">
                        {p.legacyDefectTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {p.legacyDefectDesc}
                      </p>
                    </div>

                    {/* Right: The 2026 Master Bill Solution */}
                    <div className="p-5 sm:p-6 bg-emerald-50/40 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-black text-emerald-800 uppercase tracking-wide bg-emerald-100 px-2 py-0.5 border border-emerald-300">
                          ✓ 2026 STATUTORY REMEDY
                        </span>
                        <Link 
                          href={p.partLink}
                          className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950 underline flex items-center gap-1"
                        >
                          Explore {p.partLinkLabel} →
                        </Link>
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-emerald-950">
                        {p.statutorySolutionTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {p.statutorySolutionDesc}
                      </p>

                      {/* Verbatim Statutory Quote Box */}
                      <div className="bg-white border-l-4 border-l-emerald-600 border border-slate-300 p-3.5 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-emerald-900 uppercase tracking-wider text-[11px]">
                            📜 Verbatim Statutory Text ({p.verbatimQuoteTitle})
                          </span>
                          <button
                            onClick={() => setSelectedSectionNum(p.primarySectionNumber)}
                            className="text-[11px] font-extrabold text-blue-700 hover:text-blue-900 underline cursor-pointer"
                          >
                            Open Full Clause Reader 🔍
                          </button>
                        </div>
                        <p className="font-serif italic text-slate-800 leading-relaxed whitespace-pre-line text-[11px]">
                          &ldquo;{p.verbatimQuoteText}&rdquo;
                        </p>
                      </div>

                      {/* Statutory Citing Badges */}
                      <div className="pt-2 border-t border-emerald-200 flex flex-wrap gap-2 text-xs">
                        <button
                          onClick={() => setSelectedSectionNum(p.primarySectionNumber)}
                          className="font-bold text-slate-800 bg-white hover:bg-slate-100 px-2.5 py-1 border border-slate-300 cursor-pointer transition-colors"
                        >
                          📖 <strong>Sections:</strong> {p.sectionsCiting} 🔍
                        </button>
                        {p.scheduleCiting && (
                          <span className="font-bold text-emerald-900 bg-emerald-100 px-2.5 py-1 border border-emerald-300">
                            📋 <strong>Schedule:</strong> {p.scheduleCiting}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 47-COUNTY DEVOLVED BUILDING APPROVALS ARCHITECTURE & CADRES */}
          <section className="space-y-8 bg-slate-50 border border-slate-300 p-6 md:p-8">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-black text-blue-700 uppercase tracking-widest block mb-1">
                🌐 DEVOLUTION &amp; CONSTITUTIONAL HARMONIZATION (PART XVII &amp; SCHEDULE 14)
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                The 47-County Devolved Building Approvals Architecture
              </h2>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              Under Article 185 and the Fourth Schedule of Kenya&apos;s 2010 Constitution, development control is an exclusively devolved County function. The 2026 Master Bill replaces fragmented, corruptible manual stamping counters with a unified national-county digital gateway:
            </p>

            {/* 4 Pillars of County Approvals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200 uppercase">
                  Pillar 1
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Universal Central API Gateway
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time bi-directional API connecting KBERC with Nairobi e-DAMS, Kiambu, Mombasa, Nakuru, and all 47 County e-permits.
                </p>
                <button
                  onClick={() => setSelectedSectionNum("194")}
                  className="text-[11px] font-extrabold text-blue-700 underline cursor-pointer block"
                >
                  Quote Sec 194 (API Sync) 🔍
                </button>
              </div>

              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-purple-700 bg-purple-50 px-2 py-0.5 border border-purple-200 uppercase">
                  Pillar 2
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Cryptographic QR Seal Gate
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero permit issuance without automated cryptographic validation of practitioner status, active KES 50M–200M PII cover, and project caps.
                </p>
                <button
                  onClick={() => setSelectedSectionNum("57")}
                  className="text-[11px] font-extrabold text-purple-700 underline cursor-pointer block"
                >
                  Quote Sec 57 (QR Seals) 🔍
                </button>
              </div>

              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 uppercase">
                  Pillar 3
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Single-Window JTAC Desks
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Joint Technical Assessment Committees uniting County Planning, NEMA, NCA, and Fire units to enforce mandatory 30-day statutory approvals.
                </p>
                <button
                  onClick={() => setSelectedSectionNum("193")}
                  className="text-[11px] font-extrabold text-emerald-800 underline cursor-pointer block"
                >
                  Quote Sec 193 (JTAC) 🔍
                </button>
              </div>

              <div className="bg-white border border-slate-300 p-5 space-y-2">
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-200 uppercase">
                  Pillar 4
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  6-Stage Gate Certificates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mandatory sign-offs on Forms KBERC-1 to 6 (Geotechnical Foundation to Occupancy), barring occupation of un-certified buildings.
                </p>
                <button
                  onClick={() => setSelectedSectionNum("84")}
                  className="text-[11px] font-extrabold text-amber-800 underline cursor-pointer block"
                >
                  Quote Sec 84 (Occupancy) 🔍
                </button>
              </div>
            </div>

            {/* Subsection: 5 Standardized County Directorate Cadres */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block">
                    👥 STATUTORY PERSONNEL CADRES (CDBECI)
                  </span>
                  <h3 className="text-lg font-black text-slate-900">
                    Who Will Be Employed Across All 47 County Directorates?
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 border border-slate-200">
                  Funded via 35% County Grant
                </span>
              </div>

              <div className="space-y-3">
                {countyCadres.map((c, cIdx) => (
                  <div key={cIdx} className="bg-white border border-slate-300 border-l-4 p-5 space-y-1.5" style={{ borderLeftColor: c.badgeColor }}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm sm:text-base font-black text-slate-900">{c.title}</h4>
                      <button
                        onClick={() => setSelectedSectionNum(c.statuteSection)}
                        className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 border border-blue-200 cursor-pointer self-start sm:self-auto"
                      >
                        📖 {c.statuteLabel} 🔍
                      </button>
                    </div>
                    <p className="text-xs font-extrabold text-blue-800">
                      🎓 Mandatory Qualifications: {c.qualifications}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {c.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection: 3-Tier Approval Pipeline Walkthrough */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-black text-purple-700 uppercase tracking-widest block">
                ⚡ 3-TIER APPROVAL &amp; STAGE-GATE INSPECTION PIPELINE
              </span>
              <h3 className="text-lg font-black text-slate-900">
                End-to-End Approval &amp; Site Gate Verification Workflow
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-300 p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200">
                      STAGE 1
                    </span>
                    <span className="text-xs font-bold text-slate-500">Instant</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">Cryptographic API Pre-Screening</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    County portal auto-authenticates the Digital QR Seals of lead architect, structural engineer, and QS, verifying active status, valid KES 50M–200M PII cover, and project caps.
                  </p>
                  <button onClick={() => setSelectedSectionNum("57")} className="text-[11px] font-extrabold text-blue-700 underline cursor-pointer">
                    Quote Sec 57 (QR Gate) 🔍
                  </button>
                </div>

                <div className="bg-white border border-slate-300 p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-purple-700 bg-purple-50 px-2 py-0.5 border border-purple-200">
                      STAGE 2
                    </span>
                    <span className="text-xs font-bold text-purple-700">Max 30 Days</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">Concurrent Single-Window JTAC</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Architectural, structural, environmental, and fire safety officers evaluate plans concurrently in a unified workspace. If no response in 30 days, the applicant escalates directly to the Tribunal.
                  </p>
                  <button onClick={() => setSelectedSectionNum("193")} className="text-[11px] font-extrabold text-purple-700 underline cursor-pointer">
                    Quote Sec 193 (30-Day JTAC) 🔍
                  </button>
                </div>

                <div className="bg-white border border-slate-300 p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                      STAGE 3
                    </span>
                    <span className="text-xs font-bold text-emerald-700">Forms 1 to 6</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">6-Stage Field NDT Gates</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified TVET inspectors physically verify soil bearing, concrete slump/curing, structural frames, and MEP services before issuing Form KBERC-6 (Occupancy Certificate).
                  </p>
                  <button onClick={() => setSelectedSectionNum("84")} className="text-[11px] font-extrabold text-emerald-700 underline cursor-pointer">
                    Quote Sec 84 (Forms 1–6) 🔍
                  </button>
                </div>
              </div>
            </div>

            {/* Subsection: Current Practice vs. 2026 Overhaul Matrix */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-black text-red-700 uppercase tracking-widest block">
                ⚖️ FORENSIC COMPARATIVE MATRIX
              </span>
              <h3 className="text-lg font-black text-slate-900">
                How the 2026 Master Bill Radically Transforms Daily Practice
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-300 text-xs sm:text-sm bg-white">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 border border-slate-700 font-black w-1/4">Operational Dimension</th>
                      <th className="p-3 border border-slate-700 font-black w-3/8 text-red-300">Legacy Regime (Cap 525 Failures)</th>
                      <th className="p-3 border border-slate-700 font-black w-3/8 text-emerald-300">2026 Master Bill Practice (K-BELIR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {practiceComparisons.map((c, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="p-3 border border-slate-300 font-bold text-slate-900">
                          {c.dimension}
                          <button
                            onClick={() => setSelectedSectionNum(c.sectionRef)}
                            className="text-[10px] font-extrabold text-blue-700 underline block mt-0.5 cursor-pointer"
                          >
                            Sec {c.sectionRef} 🔍
                          </button>
                        </td>
                        <td className="p-3 border border-slate-300 text-slate-700 bg-red-50/20">{c.legacy}</td>
                        <td className="p-3 border border-slate-300 text-slate-800 bg-emerald-50/20 font-medium">{c.reformed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </section>

          {/* 4. 0.1% REGULATORY LEVY & PFM ACT 2012 FUND GOVERNANCE */}
          <section className="space-y-8 bg-slate-900 text-slate-100 p-6 md:p-10 border border-slate-800">
            <div className="border-b border-slate-700 pb-4">
              <span className="text-xs font-black text-emerald-400 bg-emerald-950 px-3 py-1 border border-emerald-700 uppercase tracking-widest inline-block mb-2">
                💰 STATUTORY FINANCING &amp; GOVERNANCE (PART XI &amp; PFM ACT 2012)
              </span>
              <h2 className="text-xl md:text-3xl font-black text-white">
                The 0.1% Built Environment Regulatory Levy &amp; Multi-Stakeholder Fund Governance
              </h2>
              <p className="text-xs md:text-sm text-slate-300 mt-2 max-w-4xl leading-relaxed">
                To solve the historic collapse of regulatory oversight caused by shoestring board budgets, Section 136 establishes a dedicated <strong>0.1% Statutory Built Environment Development &amp; Safety Levy</strong> on capital construction value, governed under strict <strong>Public Finance Management (PFM) Act 2012</strong> standards.
              </p>
            </div>

            {/* Allocation Grid */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider">
                5 Ring-Fenced Statutory Allocation Channels (% of 0.1% Pool)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-slate-800/90 border border-slate-700 p-4 space-y-1">
                  <span className="text-2xl font-black text-emerald-400">35%</span>
                  <h4 className="text-xs font-bold text-white uppercase">County NDT Grants</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Equipping 47 County inspectorates with Non-Destructive Testing rebound hammers &amp; digital tablets.
                  </p>
                  <button onClick={() => setSelectedSectionNum("136")} className="text-[10px] font-bold text-emerald-300 underline cursor-pointer">
                    Quote Sec 136 🔍
                  </button>
                </div>

                <div className="bg-slate-800/90 border border-slate-700 p-4 space-y-1">
                  <span className="text-2xl font-black text-red-400">25%</span>
                  <h4 className="text-xs font-bold text-white uppercase">6-Hour Forensic Fund</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Schedule 13 Emergency Collapse Inquiry Fund for rapid forensic audits &amp; victim relief.
                  </p>
                  <button onClick={() => setSelectedSectionNum("135")} className="text-[10px] font-bold text-red-300 underline cursor-pointer">
                    Quote Sec 135 🔍
                  </button>
                </div>

                <div className="bg-slate-800/90 border border-slate-700 p-4 space-y-1">
                  <span className="text-2xl font-black text-sky-400">20%</span>
                  <h4 className="text-xs font-bold text-white uppercase">Digital QR Gateway</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    24/7 cloud infrastructure, biometric registries &amp; 47-county e-Permit API sync.
                  </p>
                  <button onClick={() => setSelectedSectionNum("57")} className="text-[10px] font-bold text-sky-300 underline cursor-pointer">
                    Quote Sec 57 🔍
                  </button>
                </div>

                <div className="bg-slate-800/90 border border-slate-700 p-4 space-y-1">
                  <span className="text-2xl font-black text-amber-400">15%</span>
                  <h4 className="text-xs font-bold text-white uppercase">TVET Training Grants</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Subsidizing continuous professional development for TVET technologists &amp; site clerks-of-works.
                  </p>
                  <button onClick={() => setSelectedSectionNum("28")} className="text-[10px] font-bold text-amber-300 underline cursor-pointer">
                    Quote Sec 28 🔍
                  </button>
                </div>

                <div className="bg-slate-800/90 border border-slate-700 p-4 space-y-1">
                  <span className="text-2xl font-black text-purple-400">5%</span>
                  <h4 className="text-xs font-bold text-white uppercase">Parliamentary Audit</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Mandatory annual audit by the Auditor-General tabled before the National Assembly.
                  </p>
                  <button onClick={() => setSelectedSectionNum("142")} className="text-[10px] font-bold text-purple-300 underline cursor-pointer">
                    Quote Sec 142 🔍
                  </button>
                </div>
              </div>
            </div>

            {/* Governance & Safeguards Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="bg-slate-800/60 border border-slate-700 p-5 space-y-2">
                <h4 className="text-xs font-black text-white uppercase tracking-wider">
                  🏛️ 7-Member Multi-Stakeholder Board of Trustees (Part XI)
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <li>• <strong>Principal Secretary, National Treasury</strong> (Enforces PFM Act 2012 compliance)</li>
                  <li>• <strong>Principal Secretary, State Dept. for Public Works / Housing</strong></li>
                  <li>• <strong>Council of Governors (CoG) Representative</strong> (47 County Equity)</li>
                  <li>• <strong>Chairperson &amp; CEO of KBERC</strong> (Fund Administration &amp; Secretary)</li>
                  <li>• <strong>National Construction Authority (NCA) Representative</strong></li>
                  <li>• <strong>Elected Representative from the 8 Professional Colleges</strong> (Rotational)</li>
                  <li>• <strong>Independent Consumer Protection Advocate</strong> (Public appointment)</li>
                </ul>
              </div>

              <div className="bg-slate-800/60 border border-slate-700 p-5 space-y-2">
                <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                  🛡️ PFM Act 2012 Anti-Corruption &amp; Public Safeguards
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <li>• <strong>5.0% Administrative Overhead Ceiling:</strong> Sec 139 legally caps operational expenses, ensuring 95% goes directly to field programs.</li>
                  <li>• <strong>Treasury Single Account (TSA) Escrow:</strong> Paid via e-Citizen into Central Bank escrow; zero manual cash handling.</li>
                  <li>• <strong>Single-Family Housing Exemption:</strong> Low-cost residential buildings (Class A) are 100% exempt from the levy.</li>
                  <li>• <strong>Personal Criminal Liability:</strong> Accounting officers face mandatory jail &amp; asset recovery under PFM Act 2012 for any unauthorized diversion.</li>
                </ul>
              </div>
            </div>

            {/* Subsection: Actuarial Determination & Amendment Rules */}
            <div className="bg-slate-800/40 border border-slate-700 p-6 space-y-3">
              <span className="text-xs font-black text-sky-400 uppercase tracking-widest block">
                📊 ACTUARIAL MODELING &amp; STATUTORY AMENDMENT MECHANISMS
              </span>
              <h4 className="text-sm md:text-base font-bold text-white">
                How is the Allocation Matrix Determined and Can It Change?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The 0.1% fund shares and the 10-Year Defect Liability Matrix (Schedule 11: Architect 30%, Structural Eng 30%, QS 15%, Contractor 25%) are calculated on <strong>Eurocode Consequence Modeling (BS EN 1990)</strong> and empirical county tooling costs. They can be amended dynamically through three formal statutory channels:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-slate-900 p-3 border border-slate-700 space-y-1">
                  <span className="font-extrabold text-emerald-400 block">1. Triennial Actuarial Review</span>
                  <p className="text-slate-400 text-[11px]">
                    Section 144 mandates independent actuarial review every 3–5 years based on county absorption rates and disaster reserves.
                  </p>
                  <button onClick={() => setSelectedSectionNum("144")} className="text-[10px] font-bold text-emerald-300 underline cursor-pointer">
                    Quote Sec 144 🔍
                  </button>
                </div>
                <div className="bg-slate-900 p-3 border border-slate-700 space-y-1">
                  <span className="font-extrabold text-sky-400 block">2. Statutory Instruments Act 2013</span>
                  <p className="text-slate-400 text-[11px]">
                    The Cabinet Secretary gazettes revised regulations subject to public participation and Parliamentary Delegated Legislation vetting.
                  </p>
                  <button onClick={() => setSelectedSectionNum("199")} className="text-[10px] font-bold text-sky-300 underline cursor-pointer">
                    Quote Sec 199 🔍
                  </button>
                </div>
                <div className="bg-slate-900 p-3 border border-slate-700 space-y-1">
                  <span className="font-extrabold text-amber-400 block">3. Contractual EPC Variations</span>
                  <p className="text-slate-400 text-[11px]">
                    Schedule 11 provides the statutory default. Turnkey EPC/PPP projects may reallocate risk backed by KBERC-approved Project PII.
                  </p>
                  <button onClick={() => setSelectedSectionNum("58")} className="text-[10px] font-bold text-amber-300 underline cursor-pointer">
                    Quote Sec 58 (PII) 🔍
                  </button>
                </div>
              </div>
            </div>

          </section>

          {/* 5. INSTITUTIONAL & FIELD TEAM COMPOSITIONS ARCHITECTURE */}
          <section className="space-y-8 bg-white border border-slate-300 p-6 md:p-8">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-black text-red-700 uppercase tracking-widest block mb-1">
                🏛️ TEAM COMPOSITIONS &amp; STATUTORY QUORUMS
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                Institutional &amp; Field Project Delivery Team Compositions
              </h2>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Under the 2026 Master Bill, every statutory function—from municipal plan evaluation to high-rise construction and disaster forensics—has an explicit, legally mandated team composition and quorum:
            </p>

            {/* A. 7-Member JTAC Approval Quorum */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest block">
                    1. COUNTY PERMIT EVALUATION
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    The 7-Member Single-Window JTAC Committee Quorum (Part XVII)
                  </h3>
                </div>
                <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 border border-blue-200">
                  Mandatory 30-Day Clock
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {jtacQuorum.map(j => (
                  <div key={j.num} className="bg-slate-50 border border-slate-300 p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-900 bg-slate-200 px-2 py-0.5">{j.num}</span>
                      <button onClick={() => setSelectedSectionNum(j.sec)} className="text-[11px] font-bold text-blue-700 underline cursor-pointer">
                        Sec {j.sec} 🔍
                      </button>
                    </div>
                    <h4 className="text-xs font-black text-slate-900">{j.title}</h4>
                    <p className="text-[11px] text-slate-600">{j.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* B. Mandatory Site Project Teams by Consequence Category */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xs font-black text-purple-700 uppercase tracking-widest block">
                  2. ON-SITE PROJECT DELIVERY MANDATES
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Mandatory Consultant &amp; Contractor Team by Building Consequence Class (Schedule 4 &amp; 14)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {riskClassTeams.map(r => (
                  <div key={r.classCode} className="bg-slate-50 border border-slate-300 border-l-4 border-l-purple-700 p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-white bg-purple-700 px-2.5 py-1 uppercase">{r.classCode}</span>
                      <button onClick={() => setSelectedSectionNum(r.sec)} className="text-xs font-bold text-purple-700 bg-white px-2 py-0.5 border border-purple-200 cursor-pointer">
                        Sec {r.sec} 🔍
                      </button>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900">{r.label}</h4>
                    <p className="text-xs text-slate-500 font-semibold">{r.scope}</p>
                    <div className="text-xs text-slate-800 bg-purple-50 p-2.5 border border-purple-200 leading-relaxed">
                      <strong>Mandatory Team:</strong> {r.teamMandate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* C. 6-Hour Rapid Response Forensic Audit Team & Appeals Tribunal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              
              {/* FAT Team */}
              <div className="bg-red-50/50 border border-red-200 p-5 space-y-3">
                <span className="text-xs font-black text-red-700 uppercase tracking-widest block">
                  3. DISASTER RESPONSE SQUAD (PART XVI)
                </span>
                <h4 className="text-base font-black text-red-950">
                  The 5-Member 6-Hour Forensic Disaster Team (FAT)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dispatched within 6 hours of any structural failure with statutory authority to impound drawings, seize logbooks, and order evacuations:
                </p>
                <div className="space-y-2 pt-1">
                  {forensicDisasterTeam.map((f, fIdx) => (
                    <div key={fIdx} className="bg-white border border-red-200 p-3 space-y-0.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-extrabold text-slate-900">{f.title}</span>
                        <button onClick={() => setSelectedSectionNum(f.sec)} className="text-[10px] font-bold text-red-700 underline cursor-pointer">
                          Sec {f.sec} 🔍
                        </button>
                      </div>
                      <span className="text-[11px] font-bold text-red-700 block">{f.cadre}</span>
                      <p className="text-[11px] text-slate-600">{f.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BEAT Judicial Quorum */}
              <div className="bg-blue-50/50 border border-blue-200 p-5 space-y-3">
                <span className="text-xs font-black text-blue-700 uppercase tracking-widest block">
                  4. APPEALS JUDICIARY (PART X)
                </span>
                <h4 className="text-base font-black text-blue-950">
                  The 5-Member Built Environment Appeals Tribunal (BEAT)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quasi-judicial appellate body with powers of a Subordinate Court to resolve permit rejections, fee disputes, and disciplinary appeals within 60 days:
                </p>
                <div className="space-y-2 pt-1">
                  {appealsTribunalQuorum.map((a, aIdx) => (
                    <div key={aIdx} className="bg-white border border-blue-200 p-3 space-y-0.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-extrabold text-slate-900">{a.position}</span>
                        <button onClick={() => setSelectedSectionNum(a.sec)} className="text-[10px] font-bold text-blue-700 underline cursor-pointer">
                          Sec {a.sec} 🔍
                        </button>
                      </div>
                      <span className="text-[11px] font-bold text-blue-700 block">{a.requirement}</span>
                      <p className="text-[11px] text-slate-600">{a.role}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </section>

          {/* 6. 5 KEY INSTITUTIONAL REFORM DOMAINS */}
          <section className="space-y-4">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-black text-emerald-700 uppercase tracking-widest block mb-1">
                🤝 CONSENSUS ARCHITECTURE (2018–2026)
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                5 Multi-Stakeholder Institutional Reform Domains
              </h2>
            </div>
            <div className="space-y-4">
              {reformEfforts.map((r, rIdx) => (
                <div key={rIdx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-emerald-600 p-5 md:p-6 space-y-2">
                  <span className="text-xs font-black text-emerald-700 uppercase block">{r.domain}</span>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{r.title}</h3>
                  <p className="text-xs font-semibold text-slate-500">Lead Stakeholders: {r.lead}</p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. 19-MILESTONE INTERACTIVE TIMELINE */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-900 pb-3">
              <div>
                <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-1">
                  ⏳ 58-YEAR LEGISLATIVE EVOLUTION
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  19-Milestone Statutory Timeline (1968 to 2026)
                </h2>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setTimelineFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    timelineFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  All Milestones (19)
                </button>
                <button
                  onClick={() => setTimelineFilter('enacted')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    timelineFilter === 'enacted' ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Enacted Statutes
                </button>
                <button
                  onClick={() => setTimelineFilter('proposed')}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors ${
                    timelineFilter === 'proposed' ? 'bg-red-700 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  Proposed / Stalled
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMilestones.map((m, mIdx) => (
                <div key={mIdx} className="bg-slate-50 border border-slate-300 p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-black text-red-700">{m.year}</span>
                    <span className="text-xs font-extrabold text-white px-2 py-0.5" style={{ background: m.badgeColor }}>
                      {m.status}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{m.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. THE 20 STATUTORY PARTS BREAKDOWN */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-red-700 pb-3">
              <div>
                <span className="text-xs font-black text-red-700 uppercase tracking-widest block mb-1">
                  📚 STATUTORY STRUCTURE (SECTIONS 1 TO 208)
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  The 20 Statutory Parts Executive Breakdown
                </h2>
              </div>
              <span className="text-xs font-black text-red-700 bg-red-50 px-3 py-1 border border-red-200 uppercase">
                208 SECTIONS
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Executive structural overview of all 20 Statutory Parts comprising the Master Consensus Bill 2026:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statutoryParts.map((p, pIdx) => (
                <div key={pIdx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-red-700 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-red-700 uppercase bg-red-100 px-2 py-0.5">{p.num}</span>
                    <Link href={`/viewer/interactive/${pIdx + 1}`} className="text-xs font-bold text-slate-500 hover:text-red-700 transition-colors">
                      View Part Dossier →
                    </Link>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{p.label}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{p.scope}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. THE 14 STATUTORY SCHEDULES CARDS */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-sky-700 pb-3">
              <div>
                <span className="text-xs font-black text-sky-700 uppercase tracking-widest block mb-1">
                  📑 ENFORCEABLE SCHEDULES &amp; TARIFFS
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                  The 14 Statutory Schedules Regulatory Matrix
                </h2>
              </div>
              <span className="text-xs font-black text-sky-700 bg-sky-50 px-3 py-1 border border-sky-200 uppercase">
                SCHEDULES 1 TO 14
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statutorySchedules.map((s, sIdx) => (
                <div key={sIdx} className="bg-slate-50 border border-slate-300 border-l-4 border-l-sky-600 p-5 space-y-2">
                  <span className="text-xs font-black text-sky-700 uppercase block">{s.num}</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{s.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{s.scope}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── PROMOTIONAL CALL-TO-ACTION (CTA) CONVERSION HUB ───────────────────── */}
          <section style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #831843 100%)',
            color: '#FFFFFF',
            padding: 'clamp(24px, 4vw, 48px)',
            border: '2px solid #334155',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 32px' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#F472B6', background: 'rgba(244, 114, 182, 0.15)', padding: '4px 14px', border: '1px solid rgba(244, 114, 182, 0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px' }}>
                🚀 Explore the Complete KBERC Platform
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '12px' }}>
                Ready to Deep-Dive Into Kenya&apos;s 2026 Built Environment Act?
              </h2>
              <p style={{ fontSize: '14px', color: '#E2E8F0', lineHeight: 1.6 }}>
                Access the full unabridged statutory reader, explore the interactive 20-Part directory, or analyze building risk classifications under Eurocodes.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <Link href="/viewer/read" style={{ background: '#B91C1C', padding: '20px', textDecoration: 'none', border: '1px solid #EF4444', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 900, color: '#FCA5A5', textTransform: 'uppercase' }}>Full Statutory Text</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', margin: '6px 0' }}>📖 Launch A4 Document Reader</h3>
                  <p style={{ fontSize: '12px', color: '#FEE2E2', lineHeight: 1.5 }}>Read all 208 unabridged legal sections in high-resolution A4 document reader format.</p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase' }}>Open Document Reader →</div>
              </Link>

              <Link href="/viewer/interactive" style={{ background: '#1E293B', padding: '20px', textDecoration: 'none', border: '1px solid #475569', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 900, color: '#38BDF8', textTransform: 'uppercase' }}>Interactive Directory</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', margin: '6px 0' }}>🗺️ Explore Interactive Framework</h3>
                  <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: 1.5 }}>Search sections, inspect Plain-English summaries, and explore flowcharts for every Part.</p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase' }}>Launch Interactive Explorer →</div>
              </Link>

              <Link href="/viewer/building-navigator" style={{ background: '#1E293B', padding: '20px', textDecoration: 'none', border: '1px solid #475569', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 900, color: '#F59E0B', textTransform: 'uppercase' }}>Eurocode Risk Matrix</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', margin: '6px 0' }}>📊 Building Risk Navigator</h3>
                  <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: 1.5 }}>Determine building Risk Classes A–E and inspect mandatory dual peer review rules.</p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase' }}>Open Risk Navigator →</div>
              </Link>
            </div>
          </section>

          {/* 10. PRINCIPAL AUTHOR ACCREDITATION DOSSIER CARD */}
          <footer className="bg-slate-900 text-slate-100 p-6 md:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 border border-emerald-800 uppercase inline-block">
                🏛️ PRINCIPAL LEGISLATIVE AUTHOR &amp; LEAD ARCHITECT
              </span>
              <span className="text-xs text-slate-400 font-semibold">KBERC STATUTORY REGISTER 2026</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white">
              Arch. Brian Nyagonchong&apos;a
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Lead Legislative Counsel &amp; Principal Architectural Consultant responsible for synthesizing 208 statutory sections, 14 schedules, and 8 regulated disciplines into the consolidated 2026 Master Bill.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
              <span>• BORAQS Registered Architect</span>
              <span>• Lead Counsel to Parliamentary Working Group</span>
              <span>• Co-author NBC 2024</span>
            </div>
          </footer>

        </main>
      </div>

      {/* 🔍 ON-PAGE VERBATIM STATUTORY QUICK-READER SLIDE-OVER DRAWER */}
      {activeSectionData && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-300 overflow-hidden">
            
            {/* Drawer Header */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black text-emerald-400 bg-emerald-950 px-2 py-0.5 border border-emerald-700 uppercase">
                    {activeSectionData.partName}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{activeSectionData.partTitle}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  Section {activeSectionData.section}: {activeSectionData.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedSectionNum(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xs text-xl font-black transition-colors cursor-pointer"
                title="Close Quick-Reader"
              >
                ✕
              </button>
            </div>

            {/* Drawer Body: Verbatim Text & Analysis */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-50">
              
              {/* Verbatim Statutory Text */}
              <div className="bg-white border border-slate-300 p-5 space-y-3 shadow-xs">
                <span className="text-xs font-black text-red-700 uppercase tracking-widest block">
                  📜 OFFICIAL UNABRIDGED STATUTORY TEXT
                </span>
                <div className="font-serif text-sm sm:text-base text-slate-900 leading-relaxed whitespace-pre-line p-4 bg-slate-50 border-l-4 border-l-slate-900">
                  {activeSectionData.bill_text || "Statutory text clause active under National Assembly Bill No. 14 of 2026."}
                </div>
              </div>

              {/* Analysis & Legal Context (if present in billData) */}
              {activeSectionData.analysis && (
                <div className="bg-white border border-slate-300 p-5 space-y-4 shadow-xs">
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest block">
                    ⚖️ STATUTORY COMMENTARY &amp; ENFORCEMENT INTENT
                  </span>

                  {activeSectionData.analysis.plain_english && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase">Plain-English Meaning</h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/50 p-3 border border-blue-100">
                        {activeSectionData.analysis.plain_english}
                      </p>
                    </div>
                  )}

                  {activeSectionData.analysis.what_it_does && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase">What It Enforces</h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activeSectionData.analysis.what_it_does}
                      </p>
                    </div>
                  )}

                  {activeSectionData.analysis.constitutional_context && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase">Constitutional Alignment</h4>
                      <p className="text-xs text-slate-600 leading-relaxed bg-emerald-50/50 p-2.5 border border-emerald-100">
                        {activeSectionData.analysis.constitutional_context}
                      </p>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-white border-t border-slate-300 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                National Assembly Bill No. 14 of 2026 • Verified Register
              </span>
              <button
                onClick={() => setSelectedSectionNum(null)}
                className="px-4 py-2 text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
              >
                Close Clause Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
