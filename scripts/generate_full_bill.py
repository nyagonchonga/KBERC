import json
import os
from data_batch_1 import batch_1_sections
from data_batch_2 import batch_2_sections
from data_batch_3 import batch_3_sections
from data_batch_4 import batch_4_sections
from data_batch_5 import batch_5_sections
from data_batch_6 import batch_6_sections
from data_batch_7_schedules import schedules_data

bill_structure_input = [
    {
        "part": "PART I",
        "title": "PRELIMINARY",
        "sections": [
            "Short title",
            "Interpretation",
            "Objects of the Act",
            "Guiding principles",
            "Application and relationship with other written laws"
        ]
    },
    {
        "part": "PART II",
        "title": "KENYA BUILT ENVIRONMENT REGULATORY COUNCIL",
        "sections": [
            "Establishment of the Council",
            "Legal status",
            "Functions",
            "Independence",
            "Composition",
            "Appointment and tenure",
            "Qualifications and disqualifications",
            "Committees",
            "Chief Executive/Registrar",
            "Staff of the Council",
            "Protection from personal liability",
            "Conflict of interest",
            "Public accountability",
            "Annual reporting"
        ]
    },
    {
        "part": "PART III",
        "title": "REGULATED BUILT ENVIRONMENT PROFESSIONS",
        "sections": [
            "Designation of professions",
            "Recognition of existing statutory professional regulators",
            "Profession-specific regulatory autonomy",
            "Recognition of new professions",
            "Relationship between umbrella Council and profession regulators"
        ]
    },
    {
        "part": "PART IV",
        "title": "REGISTRATION AND PROFESSIONAL CATEGORIES",
        "sections": [
            "Requirement for registration",
            "Categories of registration",
            "Student registration",
            "Graduate/Candidate registration",
            "Technician registration",
            "Technologist registration",
            "Professional registration",
            "Specialist registration",
            "Temporary and foreign registration",
            "Mutual recognition agreements",
            "Regional integration",
            "Competency-based registration",
            "Education and qualification requirements",
            "Practical experience",
            "Professional examinations",
            "Recognition of prior learning",
            "Recognition of foreign qualifications",
            "Application for registration",
            "Registration decisions",
            "Suspension and cancellation of registration",
            "Restoration of registration"
        ]
    },
    {
        "part": "PART V",
        "title": "PROFESSIONAL REGISTER AND DIGITAL INFRASTRUCTURE",
        "sections": [
            "Establishment of national professional register",
            "Information contained in register",
            "Public access",
            "National built environment project database",
            "Golden thread of information",
            "Linking professionals to projects",
            "Digital verification",
            "Digital certificates",
            "Data protection",
            "Correction of information",
            "Audit trails"
        ]
    },
    {
        "part": "PART VI",
        "title": "PRACTISING CERTIFICATES AND CONTINUING PROFESSIONAL DEVELOPMENT",
        "sections": [
            "Requirement for practising certificate",
            "Application",
            "Conditions",
            "Validity",
            "Renewal",
            "Continuing professional development",
            "CPD compliance",
            "Professional indemnity insurance",
            "Run-off insurance cover",
            "Suspension and non-renewal"
        ]
    },
    {
        "part": "PART VII",
        "title": "REGISTRATION AND REGULATION OF PROFESSIONAL FIRMS",
        "sections": [
            "Requirement for firm registration",
            "Eligibility of firms",
            "Responsible professional",
            "Multidisciplinary firms",
            "Foreign firms",
            "Joint ventures",
            "Professional independence",
            "Quality management",
            "Professional records",
            "Professional indemnity insurance"
        ]
    },
    {
        "part": "PART VIII",
        "title": "COMPETENCY AND SCOPE OF PROFESSIONAL WORK",
        "sections": [
            "Competency framework",
            "Risk-based regulation",
            "Risk classification",
            "Reserved professional work",
            "Technician and technologist scope",
            "Professional scope",
            "Specialist scope",
            "Supervision",
            "Delegation",
            "Independent checking",
            "Peer review",
            "Practical completion and handover",
            "Decennial liability and latent defects",
            "Statutory duty of care to subsequent owners",
            "Statutory compliance declarations",
            "Multidisciplinary projects",
            "Digital and BIM practice"
        ]
    },
    {
        "part": "PART IX",
        "title": "PROFESSIONAL CONDUCT AND ETHICS",
        "sections": [
            "Code of professional conduct",
            "Public interest",
            "Competence",
            "Professional independence",
            "Conflicts of interest",
            "Confidentiality",
            "Client duties",
            "Advertising",
            "Misrepresentation",
            "Environmental responsibility",
            "Accessibility",
            "Professional records",
            "Duty concerning serious public safety risks",
            "Whistleblower protection"
        ]
    },
    {
        "part": "PART X",
        "title": "CONSUMER PROTECTION AND PROFESSIONAL SERVICES",
        "sections": [
            "Written terms of engagement",
            "Minimum client information",
            "Scope of services",
            "Statutory scales of fees",
            "Public procurement guidelines",
            "Fees and payment terms",
            "Client documents",
            "Complaints",
            "Alternative dispute resolution",
            "Statutory adjudication",
            "Professional insurance information",
            "Consumer awareness"
        ]
    },
    {
        "part": "PART XI",
        "title": "COMPLAINTS, INVESTIGATION AND DISCIPLINE",
        "sections": [
            "Right to complain",
            "Receipt and assessment of complaints",
            "Investigation",
            "Investigatory powers",
            "Notice of allegations",
            "Disciplinary Committee",
            "Fair hearing",
            "Evidence",
            "Decisions",
            "Sanctions",
            "Interim measures",
            "Restoration and reinstatement"
        ]
    },
    {
        "part": "PART XII",
        "title": "BUILT ENVIRONMENT APPEALS TRIBUNAL",
        "sections": [
            "Establishment of the Tribunal",
            "Jurisdiction",
            "Composition and appointment",
            "Qualifications of members",
            "Conduct of hearings",
            "Powers of the Tribunal",
            "Decisions and awards",
            "Appeals to the High Court"
        ]
    },
    {
        "part": "PART XIII",
        "title": "COMPLIANCE, INSPECTIONS AND ENFORCEMENT",
        "sections": [
            "Establishment of the Inspectorate",
            "Powers of entry and inspection",
            "Production of documents",
            "Site stop orders",
            "Seizure of equipment",
            "Enforcement notices",
            "Collaboration with police and county inspectorates"
        ]
    },
    {
        "part": "PART XIV",
        "title": "OFFENCES AND PENALTIES",
        "sections": [
            "Unlawful practice and quackery",
            "Masquerading",
            "False representation",
            "False registration documents",
            "Unauthorised use of professional titles",
            "False certification",
            "Corporate offences",
            "Obstruction of inspectors",
            "General penalties",
            "Continuing offences"
        ]
    },
    {
        "part": "PART XV",
        "title": "EDUCATION, TRAINING, COMPETENCE AND RESEARCH",
        "sections": [
            "Accreditation",
            "Competency standards",
            "Professional education",
            "Practical training",
            "Professional examinations",
            "Continuing professional development",
            "Research",
            "Innovation",
            "Indigenous knowledge",
            "Emerging technologies"
        ]
    },
    {
        "part": "PART XVI",
        "title": "BUILT ENVIRONMENT, SAFETY, ACCESSIBILITY AND SUSTAINABILITY",
        "sections": [
            "Public safety",
            "Building and life safety",
            "Accessibility",
            "Universal design",
            "Environmental responsibility",
            "Climate resilience",
            "Sustainable development",
            "Disaster resilience",
            "Energy and resource efficiency"
        ]
    },
    {
        "part": "PART XVII",
        "title": "RELATIONSHIP WITH NATIONAL AND COUNTY GOVERNMENT",
        "sections": [
            "National professional regulation",
            "County development control",
            "Information sharing",
            "Professional verification for approvals",
            "Coordination mechanisms",
            "Avoidance of duplication",
            "Intergovernmental cooperation"
        ]
    },
    {
        "part": "PART XVIII",
        "title": "GOVERNANCE, FINANCE AND ACCOUNTABILITY",
        "sections": [
            "Funds",
            "Built environment safety levy",
            "Fees",
            "Annual estimates",
            "Financial management",
            "Audit",
            "Annual reports",
            "Performance reporting",
            "Public accountability",
            "Parliamentary oversight"
        ]
    },
    {
        "part": "PART XIX",
        "title": "REGULATIONS, STANDARDS AND DELEGATED LEGISLATION",
        "sections": [
            "Power to make regulations",
            "Standards",
            "Consultation",
            "Public participation",
            "Publication",
            "Review",
            "Limits on delegated powers"
        ]
    },
    {
        "part": "PART XX",
        "title": "TRANSITIONAL AND CONSEQUENTIAL PROVISIONS",
        "sections": [
            "Existing registrations",
            "Existing practising certificates",
            "Existing professionals",
            "Existing technicians and technologists",
            "Existing firms",
            "Existing examinations",
            "Existing disciplinary matters",
            "Existing regulations",
            "Transitional licences",
            "Repeal of Cap. 525",
            "Consequential amendments",
            "Savings provisions",
            "Review of Act"
        ]
    }
]

schedules = [
    "First Schedule — Governance and composition",
    "Second Schedule — Registration categories",
    "Third Schedule — Competency framework",
    "Fourth Schedule — Risk classification",
    "Fifth Schedule — Code of professional conduct",
    "Sixth Schedule — Transitional arrangements",
    "Seventh Schedule — Consequential amendments",
    "Eighth Schedule — Repeals"
]

# --- HAND-CRAFTED HIGH-FIDELITY CORE LEGISLATION ---
manual_sections = {
    # PART I
    "Short title": "This Act may be cited as the Built Environment Professions and Practice Act, 2026, and shall come into operation on such date as the Cabinet Secretary may, by notice in the Gazette, appoint.",
    "Interpretation": "(1) In this Act, unless the context otherwise requires—\n\n\"Cabinet Secretary\" means the Cabinet Secretary for the time being responsible for matters relating to the built environment;\n\n\"Council\" means the Kenya Built Environment Regulatory Council established under section 6;\n\n\"practical completion\" means the stage where a project is structurally sound, safe for its intended use, and free from known material defects, notwithstanding minor aesthetic snags;\n\n\"practising certificate\" means a certificate issued under Part VI authorising a registered professional to practice;\n\n\"professional\" means a person registered under Part IV in any of the professional categories recognized by this Act;\n\n\"unauthorized affixation of a professional seal\" means the stamping, signing, or digital authorization of built environment documents by a registered professional on behalf of a person who is not legally authorized to produce such documents;\n\n\"unlawful practice\" means the practice of a built environment profession by a person who is not registered, or the masquerading as a registered professional by any means.\n\n(2) For the purposes of this Act, the built environment encompasses the planning, design, construction, alteration, and maintenance of human settlements, infrastructure, and the natural environment affected thereby.",
    "Objects of the Act": "The primary objects of this Act are to—\n(a) establish a comprehensive, coordinated regulatory framework for all built environment professions in Kenya;\n(b) protect the public interest, particularly concerning life, health, safety, property, public resources, and the environment;\n(c) ensure that professional regulation focuses on competency and safety rather than the protection of professional monopolies;\n(d) establish an independent, accountable, and effective regulatory Council;\n(e) provide for robust, competency-based registration and continuous professional development;\n(f) mandate stringent ethical standards and severe penalties for professional misconduct and unlawful practice.",
    "Guiding principles": "Every person performing a function or exercising a power under this Act shall be guided by the following principles—\n(a) the national values and principles of governance set out in Article 10 of the Constitution;\n(b) the paramountcy of public safety and environmental sustainability in all built environment interventions;\n(c) transparency, accountability, and fairness in regulatory decision-making;\n(d) the promotion of innovation, universal design, and indigenous knowledge;\n(e) the facilitation of seamless intergovernmental cooperation between the national and county governments.",
    "Application and relationship with other written laws": "(1) This Act applies to all persons and entities engaged in the practice of a built environment profession within the Republic of Kenya, whether in the public or private sector.\n(2) In the event of any conflict between the provisions of this Act and any other written law concerning the regulation of built environment professionals, the provisions of this Act shall prevail to the extent of the inconsistency.",

    # PART II
    "Establishment of the Council": "(1) There is established a body to be known as the Kenya Built Environment Regulatory Council.\n(2) The Council shall be a body corporate with perpetual succession and a common seal and shall, in its corporate name, be capable of—\n(a) suing and being sued;\n(b) taking, purchasing, or otherwise acquiring, holding, charging, or disposing of movable and immovable property;\n(c) borrowing and lending money;\n(d) entering into contracts; and\n(e) doing or performing all other things or acts for the proper discharge of its functions under this Act, which may lawfully be done or performed by a body corporate.",
    "Legal status": "The Council is an independent statutory body and, subject to the provisions of this Act and the Constitution, is not subject to the direction or control of any person or authority in the exercise of its technical regulatory functions.",
    "Functions": "The functions of the Council shall be to—\n(a) regulate and coordinate the practice of all built environment professions in Kenya;\n(b) establish and maintain the national professional register and the national built environment project database;\n(c) set, review, and enforce standards of professional competence, conduct, and ethics;\n(d) accredit academic programs, practical training, and continuous professional development courses;\n(e) issue, suspend, or revoke practicing certificates and firm registrations;\n(f) investigate complaints of professional misconduct and take disciplinary action;\n(g) conduct proactive site inspections to enforce compliance and eliminate unlawful practice;\n(h) advise the Cabinet Secretary on policy matters relating to the built environment.",
    "Independence": "Except as otherwise expressly provided in this Act, the Council shall, in the performance of its functions and the exercise of its powers, remain independent and shall not be subject to the direction or control of any person or authority.",
    "Composition": "(1) The Council shall consist of—\n(a) a Chairperson appointed by the President;\n(b) the Principal Secretary in the Ministry responsible for matters relating to the built environment or their designated representative;\n(c) the Attorney General or their designated representative;\n(d) four members appointed by the Cabinet Secretary from nominees submitted by the recognized professional associations of architects, engineers, quantity surveyors, and physical planners; and\n(e) two independent members representing consumer protection organizations.\n(2) The Council shall be gender-balanced and represent the regional diversity of Kenya.",
    "Appointment and tenure": "(1) The Chairperson and members of the Council, other than ex-officio members, shall hold office for a term of three years and shall be eligible for re-appointment for one further term.\n(2) The names of all appointed members shall be published in the Gazette.",
    "Qualifications and disqualifications": "(1) A person is qualified for appointment as Chairperson if they hold a master's degree, have at least fifteen years of experience in the built environment, and meet the requirements of Chapter Six of the Constitution.\n(2) A person shall be disqualified from appointment if they are an undischarged bankrupt, have been convicted of a criminal offence carrying a sentence of more than six months, or have been found guilty of gross professional misconduct.",
    "Committees": "(1) The Council may establish such committees as it considers necessary for the better performance of its functions, including a Registration Committee, a Disciplinary Committee, and an Education and Training Committee.\n(2) The Council may co-opt external experts to serve on its committees, provided that the chairperson of every committee must be a member of the Council.",
    "Chief Executive/Registrar": "(1) There shall be a Chief Executive Officer of the Council who shall also serve as the Registrar of Built Environment Professionals.\n(2) The Chief Executive shall be appointed by the Council through a competitive recruitment process and shall hold office for a term of four years, renewable once.\n(3) The Chief Executive shall be the accounting officer of the Council and shall be responsible for its day-to-day administration.",
    "Staff of the Council": "The Council may appoint such professional, technical, and administrative staff as it considers necessary for the proper discharge of its functions, upon such terms and conditions of service as the Council may determine in consultation with the Salaries and Remuneration Commission.",
    "Protection from personal liability": "No matter or thing done by a member of the Council, a member of a committee, the Chief Executive, or any staff or agent of the Council shall, if the matter or thing is done bona fide for executing the functions, powers, or duties of the Council under this Act, render the member, Chief Executive, staff, or agent personally liable to any action, claim, or demand whatsoever.",
    "Conflict of interest": "A member of the Council or a committee who has a direct or indirect personal interest in a matter being considered by the Council must immediately disclose the nature of their interest and recuse themselves from any deliberation or decision on the matter.",
    "Public accountability": "The Council must ensure transparency in all its operations, maintaining a publicly accessible digital portal containing the national register, scheduled disciplinary hearings, and approved policy documents.",
    "Annual reporting": "Within three months after the end of each financial year, the Council shall submit a comprehensive annual report to the Cabinet Secretary detailing its financial performance, regulatory interventions, and the state of compliance in the built environment sector.",
    
    
    # PART IV
    "Requirement for registration": "(1) A person shall not practice, or offer to practice, any built environment profession in Kenya unless that person is registered under this Act.\n(2) A person shall not use any title, description, or designation prescribed under this Act that implies the person is registered unless they hold a valid registration certificate.\n(3) Any person who contravenes the provisions of this section commits an offence and shall be liable upon conviction to the penalties prescribed in Part XIV of this Act.",
    "Categories of registration": "The Council shall register eligible persons in the following categories—\n(a) Student;\n(b) Technician;\n(c) Technologist;\n(d) Professional;\n(e) Specialist;\n(f) Temporary or Foreign Practitioner.\n(2) The specific scope of practice, reserved work, and limitations associated with each category shall be prescribed in the Regulations and detailed in the national professional register."
}

# Merge all manually crafted batches
manual_sections.update(batch_1_sections)
manual_sections.update(batch_2_sections)
manual_sections.update(batch_3_sections)
manual_sections.update(batch_4_sections)
manual_sections.update(batch_5_sections)
manual_sections.update(batch_6_sections)

# --- LEXICAL TEMPLATE ENGINE (Fallback) ---
def generate_lexical_text(section_title, part_title):
    title_lower = section_title.lower()
    
    # 1. Enforcement / Inspections Template
    if any(word in title_lower for word in ["inspect", "enforc", "investigat", "stop order", "seizure", "offence", "penalt", "quack"]):
        return f"""(1) The Council is hereby empowered to enforce compliance with the provisions regarding {section_title.lower()}.
(2) For the purposes of {section_title.lower()}, an authorized officer or inspector appointed by the Council may, at any reasonable time and upon production of official identification, enter any premises, construction site, or office where built environment activities are being undertaken.
(3) The authorized officer may demand the production of practicing certificates, structural drawings, project approvals, or any other document necessary to ascertain compliance with this Act.
(4) Any person who obstructs, hinders, or provides false information to an authorized officer executing duties under this section commits an offence and is liable, on conviction, to a fine not exceeding five million shillings or to imprisonment for a term not exceeding three years, or to both.
(5) The Cabinet Secretary may, in consultation with the Council, make regulations detailing the specific procedures for {section_title.lower()}."""

    # 2. Financial / Fees Template
    elif any(word in title_lower for word in ["fee", "fund", "financ", "audit", "procurement", "payment"]):
        return f"""(1) The Council shall establish guidelines and frameworks for the administration of {section_title.lower()}.
(2) In determining matters related to {section_title.lower()}, the Council must ensure transparency, equity, and alignment with the Public Finance Management Act.
(3) Where {section_title.lower()} relates to the remuneration of professionals, the Council shall publish statutory minimum scales of fees to prevent undercutting and ensure the quality and safety of professional services.
(4) All public procuring entities shall adhere to the guidelines established under this section when engaging built environment professionals.
(5) Failure to comply with the statutory provisions of {section_title.lower()} constitutes professional misconduct and renders the offending party liable to disciplinary action under Part XI."""

    # 3. Judicial / Disciplinary / Tribunal Template
    elif any(word in title_lower for word in ["appeal", "tribunal", "hearing", "jurisdiction", "sanction", "complaint", "discipline"]):
        return f"""(1) This section provides for the statutory mechanisms governing {section_title.lower()} within the built environment sector.
(2) Any process concerning {section_title.lower()} must strictly adhere to the principles of fair administrative action as enshrined in Article 47 of the Constitution.
(3) The adjudicating body handling {section_title.lower()} shall have the power to summon witnesses, take evidence on oath, and demand the production of relevant documents.
(4) Any party aggrieved by a decision rendered in relation to {section_title.lower()} may appeal to the High Court within thirty days of the decision being communicated.
(5) The detailed rules of procedure for {section_title.lower()} shall be prescribed in the Regulations."""

    # 4. Education / Training / Registration Template
    elif any(word in title_lower for word in ["educat", "train", "cpd", "accredit", "register", "certificat", "competenc"]):
        return f"""(1) The Council shall have the exclusive mandate to regulate and oversee {section_title.lower()} for all built environment professionals.
(2) To satisfy the requirements of {section_title.lower()}, an applicant or institution must meet the minimum standards prescribed by the Council.
(3) The Council shall maintain a digital, publicly accessible database recording all decisions and statuses related to {section_title.lower()}.
(4) Any certificate or accreditation granted under this section may be suspended or revoked if the holder breaches the conditions of issuance or is found guilty of professional misconduct.
(5) The specific criteria, syllabi, and administrative procedures for {section_title.lower()} shall be published annually by the Council."""

    # 5. Default Generic Administrative Template (Rich)
    else:
        return f"""(1) The provisions of this section govern the statutory implementation of {section_title.lower()} within the context of {part_title.title()}.
(2) The Council, in collaboration with relevant county governments and state agencies, shall ensure the effective execution of {section_title.lower()}.
(3) Any person or corporate entity subject to this Act must strictly comply with the guidelines, standards, and directives established herein regarding {section_title.lower()}.
(4) A failure to adhere to the requirements of {section_title.lower()} may result in the suspension of a practicing certificate or the halting of associated built environment projects.
(5) The Cabinet Secretary may, on the recommendation of the Council, make comprehensive regulations to operationalize {section_title.lower()}."""


def generate_section_data(section_num, section_title, part_title):
    # Check if we have a hand-crafted version first
    if section_title in manual_sections:
        bill_text = manual_sections[section_title]
    else:
        bill_text = generate_lexical_text(section_title, part_title)
    
    # Generate analysis mapping
    analysis = {
        "what_it_does": f"Establishes the statutory framework and requirements for {section_title.lower()}.",
        "why_it_exists": "To ensure standardized, enforceable, and accountable practices across the Kenyan built environment sector.",
        "plain_english": f"This section sets the legally binding rules for {section_title.lower()}.",
        "policy_objective": f"To align {section_title.lower()} with modern constitutional principles and prioritize public safety over professional protectionism.",
        "who_is_affected": ["Registered Professionals", "Regulatory Council", "Public Consumers", "County Governments"],
        "related_sections": ["Section 2 (Interpretation)", "Part XIX (Regulations)", "Part XIV (Offences)"],
        "constitutional_context": "Aligns with Article 46 (Consumer protection), Article 42 (Right to a clean environment), and Article 47 (Fair administrative action).",
        "implementation": "Operationalized via delegated regulations and immediate Council directives.",
        "potential_issues": [f"Stakeholders may dispute the practical implementation and parameters of {section_title.lower()}."],
        "red_team": [
            f"Vulnerability: The wording around {section_title.lower()} could be interpreted ambiguously by county governments, leading to regulatory overlap.",
            "Abuse: Corrupt regulators could leverage this clause to extort professionals or delay approvals."
        ]
    }
    
    return {
        "section": str(section_num),
        "title": section_title,
        "bill_text": bill_text,
        "analysis": analysis
    }

def build_data_ts():
    ts_content = """export interface SectionData {
  section: string;
  title: string;
  bill_text: string;
  analysis: {
    what_it_does: string;
    why_it_exists: string;
    plain_english: string;
    policy_objective: string;
    who_is_affected: string[];
    related_sections: string[];
    constitutional_context: string;
    implementation: string;
    potential_issues: string[];
    red_team: string[];
  };
}

export interface PartData {
  part: string;
  title: string;
  sections: SectionData[];
}

export const billData = {
  title: "THE BUILT ENVIRONMENT PROFESSIONS AND PRACTICE BILL, 2026",
  long_title: "A Bill for an Act of Parliament to provide for the regulation, registration and practice of built environment professions; to establish a framework for coordination of built environment professional regulators; to protect the public interest in the planning, design, construction, alteration, operation and maintenance of the built environment; to provide for competency-based registration, professional practice, continuing professional development, professional indemnity insurance, professional conduct and discipline; to promote safety, accessibility, sustainability, innovation and accountability in the built environment; and for connected purposes.",
  status: "Proposed Bill",
  structure: """

    structure = []
    section_counter = 1
    
    for part in bill_structure_input:
        part_obj = {
            "part": part["part"],
            "title": part["title"],
            "sections": []
        }
        for sec_title in part["sections"]:
            sec_data = generate_section_data(section_counter, sec_title, part["title"])
            part_obj["sections"].append(sec_data)
            section_counter += 1
            
        structure.append(part_obj)
        
    ts_content += json.dumps(structure, indent=4) + ",\n  schedules: " + json.dumps(schedules_data, indent=4) + "\n};\n"
    
    target_path = os.path.join("frontend", "src", "app", "viewer", "data.ts")
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(ts_content)
        
    print(f"Successfully generated {section_counter - 1} sections with Lexical Engine and wrote to {target_path}")

if __name__ == "__main__":
    build_data_ts()
