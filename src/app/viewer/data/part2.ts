export const part2Data = {
  part: "PART II",
  title: "KENYA BUILT ENVIRONMENT REGULATORY COUNCIL",
  sections: [
    {
            "section": "6",
            "title": "Establishment of the Council",
            "bill_text": "(1) There is established a body to be known as the Kenya Built Environment Regulatory Council.\n(2) The Council shall be a body corporate with perpetual succession and a common seal and shall, in its corporate name, be capable of\u2014\n(a) suing and being sued;\n(b) taking, purchasing, or otherwise acquiring, holding, charging, or disposing of movable and immovable property;\n(c) borrowing and lending money;\n(d) entering into contracts; and\n(e) doing or performing all other things or acts for the proper discharge of its functions under this Act, which may lawfully be done or performed by a body corporate.",
            "analysis": {
                    "what_it_does": "Formally establishes the Kenya Built Environment Regulatory Council (KBERC) as a body corporate with perpetual succession, a common seal, and full legal capacity to sue, own property, borrow money, enter contracts, and perform all corporate acts.",
                    "why_it_exists": "Corporate status is a prerequisite for institutional effectiveness \u2014 it allows KBERC to hold assets, enforce contracts, and persist as an institution regardless of changes in membership or political leadership. Perpetual succession ensures regulatory continuity.",
                    "plain_english": "This section creates KBERC as a legal 'person' \u2014 it can open bank accounts, own buildings, take people to court, and sign contracts. It is not a government department that disappears when the government changes; it is a permanent institution.",
                    "policy_objective": "To create a permanent, institutionally independent regulatory body that is shielded from political interference and capable of building long-term regulatory expertise and institutional memory.",
                    "who_is_affected": [
                            "The entire built environment sector (KBERC now regulates them all)",
                            "Existing professional bodies (BORAQS transitions, EBK federated)",
                            "National Treasury (must fund KBERC's establishment)"
                    ],
                    "related_sections": [
                            "Section 7 (Legal status)",
                            "Section 10 (Composition)",
                            "Section 14 (Chief Executive/Registrar)",
                            "Section 19 (Funds of the Council)"
                    ],
                    "constitutional_context": "Consistent with Article 248 \u2014 KBERC is a statutory body established by Parliament. Must comply with public finance obligations under Articles 201-203 and the Public Finance Management Act.",
                    "implementation": "The Council's establishment requires: First Board appointment by the President, registration of common seal, opening of bank accounts, and gazette notice. Estimated lead time: 6-12 months from commencement.",
                    "potential_issues": [
                            "'Perpetual succession' means the Council survives changes in government \u2014 but it also means bad institutional cultures can persist.",
                            "The Act does not specify the start-up budget for KBERC, leaving establishment funding vulnerable to Treasury discretion."
                    ],
                    "red_team": [
                            "Financial Risk: KBERC's borrowing power, if not capped, could create public liability. The Act should limit borrowing to Council-approved thresholds.",
                            "Capture Risk: As a corporate body with assets and contracts, KBERC could be influenced by major engineering and construction firms through procurement relationships."
                    ]
            }
    },
    {
            "section": "7",
            "title": "Legal status",
            "bill_text": "The Council is an independent statutory body and, subject to the provisions of this Act and the Constitution, is not subject to the direction or control of any person or authority in the exercise of its technical regulatory functions.",
            "analysis": {
                    "what_it_does": "Declares KBERC to be an independent statutory body, shielded from direction or control by any person or authority in the exercise of its 'technical regulatory functions.'",
                    "why_it_exists": "Regulatory independence is the cornerstone of effective regulation globally. A regulator that can be directed by the Cabinet Secretary or industry players will systematically fail the public interest. The word 'technical' is crucial \u2014 it limits independence to regulatory decisions, not financial accountability.",
                    "plain_english": "No Minister or government official can tell KBERC who to register, who to discipline, or how to set standards. KBERC decides technical matters independently. However, it is still accountable to Parliament for how it spends public money.",
                    "policy_objective": "To ensure that professional discipline and registration decisions are made on merit and evidence, free from political patronage \u2014 a critical reform given Kenya's history of politically connected individuals escaping professional sanctions.",
                    "who_is_affected": [
                            "Cabinet Secretary \u2014 cannot direct KBERC's regulatory decisions",
                            "Registered professionals \u2014 disciplinary proceedings must be objective and independent",
                            "Public \u2014 benefits from credible, independent regulation"
                    ],
                    "related_sections": [
                            "Section 9 (Independence)",
                            "Section 16 (Protection from personal liability)",
                            "Section 18 (Public accountability)"
                    ],
                    "constitutional_context": "Engages Article 232 (Values and principles of public service). Independence must be balanced with accountability \u2014 Article 231 provides the model for other independent constitutional commissions.",
                    "implementation": "The Council must have its own legal personality, budget, and premises separate from the Ministry of Public Works. The CEO must report to the Council, not to the Cabinet Secretary.",
                    "potential_issues": [
                            "The qualifier 'technical regulatory functions' is undefined \u2014 the Cabinet Secretary could argue that policy matters (e.g., fee-setting) are not 'technical' and therefore within ministerial control.",
                            "True independence requires financial independence \u2014 if Treasury controls KBERC's budget, it can indirectly control the institution."
                    ],
                    "red_team": [
                            "Capture Risk: If Council members are appointed by the CS (see Section 10), the independence claim is weakened \u2014 an Executive-appointed body is inherently susceptible to political influence.",
                            "Accountability Gap: Independence without robust accountability mechanisms (like parliamentary committee oversight) can enable internal corruption within KBERC itself."
                    ]
            }
    },
    {
            "section": "8",
            "title": "Functions",
            "bill_text": "The functions of the Council shall be to\u2014\n(a) regulate and coordinate the practice of all built environment professions in Kenya;\n(b) establish and maintain the national professional register and the national built environment project database;\n(c) set, review, and enforce standards of professional competence, conduct, and ethics;\n(d) accredit academic programs, practical training, and continuous professional development courses;\n(e) issue, suspend, or revoke practicing certificates and firm registrations;\n(f) investigate complaints of professional misconduct and take disciplinary action;\n(g) conduct proactive site inspections to enforce compliance and eliminate unlawful practice;\n(h) advise the Cabinet Secretary on policy matters relating to the built environment.",
            "analysis": {
                    "what_it_does": "Lists 8 core functions of KBERC, covering: regulating all built environment professions; maintaining national registers and a project database; setting competence and ethics standards; accrediting academic programs; issuing and revoking practising certificates; conducting disciplinary hearings; conducting proactive site inspections; and advising the Cabinet Secretary on policy.",
                    "why_it_exists": "A statutory functions clause limits the Council to its legal mandate (preventing ultra vires acts) while also empowering it to act within that mandate without needing secondary legislation for every action. Function (g) \u2014 proactive site inspections \u2014 is particularly innovative, shifting regulation from reactive (complaint-based) to proactive enforcement.",
                    "plain_english": "KBERC is the national authority for everything related to built environment professionals: who gets registered, who gets their license revoked, who can teach, and whether buildings under construction are being supervised by qualified people. It doesn't just wait for complaints \u2014 it can inspect active project sites.",
                    "policy_objective": "To create a comprehensive regulatory mandate that closes the current loopholes in Kenya's built environment sector, particularly the lack of proactive enforcement that has allowed unqualified practitioners to supervise large construction projects for decades.",
                    "who_is_affected": [
                            "Universities and training institutions (accreditation power)",
                            "All registered professionals (practising certificates)",
                            "Construction sites (site inspections)",
                            "Project owners and developers (national project database)"
                    ],
                    "related_sections": [
                            "Section 9 (Independence)",
                            "Section 13 (Committees)",
                            "Part VII (National Registers)",
                            "Part IX (Inspections and enforcement)",
                            "Part XIII (Appeals Tribunal)"
                    ],
                    "constitutional_context": "Function (h) \u2014 advising the Cabinet Secretary \u2014 aligns with Article 132(4) which requires Cabinet to be informed on all matters requiring government action. The proactive inspection power in (g) must comply with Article 31 (right to privacy) and requires a proper legal framework for warrantless inspections.",
                    "implementation": "Each function requires its own operational unit: Registration Department, Inspectorate, Disciplinary Secretariat, and Academic Accreditation Unit. The Council's first strategic plan should map budgets to each function.",
                    "potential_issues": [
                            "Function (g) \u2014 site inspections \u2014 gives KBERC powers similar to a county building inspector, creating potential jurisdictional conflicts with County Governments.",
                            "The national project database (function b) requires significant IT investment and data-sharing agreements with county governments and the National Construction Authority."
                    ],
                    "red_team": [
                            "Overreach Risk: The combination of registration, discipline, inspection, and accreditation powers in one body makes KBERC a very powerful gatekeeper \u2014 without internal checks, it could stifle competition.",
                            "Political Risk: Function (h) \u2014 policy advice \u2014 creates a channel for the Council to become a lobbying arm for professionals rather than an independent regulator."
                    ]
            }
    },
    {
            "section": "9",
            "title": "Independence",
            "bill_text": "Except as otherwise expressly provided in this Act, the Council shall, in the performance of its functions and the exercise of its powers, remain independent and shall not be subject to the direction or control of any person or authority.",
            "analysis": {
                    "what_it_does": "Reiterates and reinforces the independence of KBERC \u2014 'except as otherwise expressly provided in this Act, the Council shall remain independent and shall not be subject to direction or control of any person or authority.'",
                    "why_it_exists": "Section 7 established independence; Section 9 reinforces it with absolute language. The phrase 'except as otherwise expressly provided' acknowledges that certain sections (like public accountability and Cabinet Secretary reporting) appropriately constrain the Council.",
                    "plain_english": "This is a double-lock on independence: not only is the Council independent by its nature (Section 7), but actively maintaining that independence is a legal obligation. Any attempt by a politician or pressure group to influence a Council decision is unlawful.",
                    "policy_objective": "To make regulatory capture \u2014 where a regulatory body is controlled by the industry it is supposed to regulate \u2014 constitutionally and statutorily impermissible.",
                    "who_is_affected": [
                            "Council members (duty to resist improper influence)",
                            "Cabinet Secretary (limited to express powers only)",
                            "Registered professionals (cannot lobby their way out of discipline)"
                    ],
                    "related_sections": [
                            "Section 7 (Legal status)",
                            "Section 17 (Conflict of interest)",
                            "Section 18 (Public accountability)",
                            "Section 19 (Funds of the Council)"
                    ],
                    "constitutional_context": "Models independence provisions found in Chapter Fifteen commissions (e.g., EACC, IEBC). The Supreme Court has held that independence provisions must be given their full, liberal meaning \u2014 any restriction on independence must be explicitly stated in law.",
                    "implementation": "The Council must adopt a formal Independence Protocol as a governance document, prohibiting ex parte communications on pending regulatory matters.",
                    "potential_issues": [
                            "'Expressly provided' is a high bar \u2014 but clever drafting of subsidiary regulations or gazette notices could create de facto control without expressly overriding independence."
                    ],
                    "red_team": [
                            "Vulnerability: While Section 9 protects independence from external direction, it does not prevent internal capture \u2014 a compromised Council chairperson could direct staff improperly.",
                            "Enforcement Gap: There is no criminal sanction for a person who attempts to improperly direct the Council. The Act should create a specific 'undue influence' offence."
                    ]
            }
    },
    {
            "section": "10",
            "title": "Composition",
            "bill_text": "(1) The Council shall consist of—\n(a) a Chairperson appointed by the President;\n(b) the Principal Secretary in the Ministry responsible for matters relating to the built environment or their designated representative;\n(c) the Attorney General or their designated representative;\n(d) four members appointed by the Cabinet Secretary from nominees submitted on a rotational basis by recognized professional associations representing architects, engineers, quantity surveyors, physical planners, construction project managers, landscape architects, interior designers, environmental experts, and TVET technologists; and\n(e) two independent members representing consumer protection organizations.\n(2) The Council shall be gender-balanced and represent the regional diversity of Kenya.",
            "analysis": {
                    "what_it_does": "Sets out the composition of the KBERC Council: a Chairperson appointed by the President; the Principal Secretary and Attorney General ex-officio; four members appointed by the CS from professional association nominees on a rotational basis across all 8 regulated disciplines and TVET cadres; and two consumer-protection representatives. Requires gender balance and regional diversity.",
                    "why_it_exists": "Board composition determines whose interests the regulator serves. By limiting professional associations to 4 of 9 seats (44.4%) on a rotational basis across all 8 disciplines and TVET technologists while mandating consumer, government, and legal representation, the Act prevents professional capture and eliminates discipline exclusion bias.",
                    "plain_english": "The KBERC Council has 9 members. Professional associations across all 8 regulated disciplines (Architects, Engineers, QS, Planners, CPM, Landscape, Interior Design, Environmental Experts) and TVET Technologists share 4 seats on a rotational basis — ensuring no single guild dominates. Public interest is protected by consumer representatives, government, and the Attorney General.",
                    "policy_objective": "To structurally prevent regulatory capture while ensuring all 8 regulated built environment professions and TVET cadres have equitable statutory access to the Apex Council.",
                    "who_is_affected": [
                            "Professional associations across all 8 disciplines (AAK, IQSK, ISK, IEK, KIP, ACMK, IDAK, KSELA) — share rotational representation on the Apex Council",
                            "Consumer organizations — gain statutory power to participate in professional regulation for the first time",
                            "The President — gains power to appoint the Chairperson, a significant executive influence"
                    ],
                    "related_sections": [
                            "Section 11 (Appointment and tenure)",
                            "Section 14 (8 Regulated Built Environment Disciplines & Schedule 3)",
                            "Section 26 (6 Tiered Registration Categories)"
                    ],
                    "constitutional_context": "Implements Article 27 (gender equality — 'not more than two-thirds of the same gender') and Article 10 (inclusivity and non-discrimination across all technical professions).",
                    "implementation": "Recognized professional associations must establish a Joint Nomination Committee to manage rotational nominations across all 8 disciplines prior to Council gazettement.",
                    "potential_issues": [
                            "Rotational representation requires strict inter-association coordination to ensure smooth 3-year term transitions.",
                            "Presidential appointment of the Chairperson, without parliamentary vetting, requires transparent vetting under Chapter Six."
                    ],
                    "red_team": [
                            "Inclusivity Protection: Rotational representation under Section 10(1)(d) guarantees that allied disciplines (CPM, Landscape, Interior Design, EDC) and TVET Technologists participate in Apex Council governance.",
                            "Executive Balance: Mandating association nominations on a 3-year rotational schedule prevents permanent dominance by any single professional guild."
                    ]
            },
    },
    {
            "section": "11",
            "title": "Appointment and tenure",
            "bill_text": "(1) The Chairperson and members of the Council, other than ex-officio members, shall hold office for a term of three years and shall be eligible for re-appointment for one further term.\n(2) The names of all appointed members shall be published in the Gazette.",
            "analysis": {
                    "what_it_does": "Sets terms of office for Council members at three years, renewable once (maximum 6 years total). Requires publication of appointees in the Kenya Gazette for public transparency.",
                    "why_it_exists": "Fixed, non-renewable terms prevent members from becoming overly beholden to their appointing authorities. Gazette publication creates a public record and allows interested parties to check the legitimacy of the Council's composition.",
                    "plain_english": "Council members serve a 3-year term and can be reappointed once. After 6 years maximum, they must leave. Their names are published in the Gazette so the public knows who is running their regulator.",
                    "policy_objective": "To balance continuity of expertise (via one renewal) with regular turnover (preventing institutional entrenchment), while ensuring public transparency in Council membership.",
                    "who_is_affected": [
                            "Council appointees (protected fixed terms; cannot be removed at will)",
                            "Appointing authorities (cannot extend terms beyond 6 years)",
                            "General public (can verify Council composition via Gazette)"
                    ],
                    "related_sections": [
                            "Section 10 (Composition)",
                            "Section 12 (Qualifications and disqualifications)",
                            "Section 16 (Protection from personal liability)"
                    ],
                    "constitutional_context": "Fixed tenure protects independence consistent with Article 249(2) which protects commissioners from arbitrary removal. Gazette publication aligns with Article 35 (Right of access to information).",
                    "implementation": "The Council's secretariat must maintain a public-facing membership dashboard on its website showing current members, their professional background, appointment date, and term expiry.",
                    "potential_issues": [
                            "A 3-year initial term may not be long enough to develop deep regulatory expertise before facing renewal uncertainty.",
                            "The Act does not address what happens when a term expires and no replacement has been appointed \u2014 there is a potential governance gap."
                    ],
                    "red_team": [
                            "Vulnerability: Members approaching the end of their first term may moderate their regulatory decisions to improve their chances of renewal, compromising independence.",
                            "Gap: There is no holding-over provision \u2014 if a replacement is delayed, the Council may fall below quorum."
                    ]
            }
    },
    {
            "section": "12",
            "title": "Qualifications and disqualifications",
            "bill_text": "(1) A person is qualified for appointment as Chairperson if they hold a master's degree, have at least fifteen years of experience in the built environment, and meet the requirements of Chapter Six of the Constitution.\n(2) A person shall be disqualified from appointment if they are an undischarged bankrupt, have been convicted of a criminal offence carrying a sentence of more than six months, or have been found guilty of gross professional misconduct.",
            "analysis": {
                    "what_it_does": "Sets minimum qualifications for the Chairperson (master's degree, 15 years' experience, Chapter Six compliance) and lists disqualifying conditions: bankruptcy, criminal conviction with 6+ month sentence, or gross professional misconduct.",
                    "why_it_exists": "High qualification thresholds ensure the Chairperson has deep domain expertise. Chapter Six compliance (integrity, financial probity) reflects the constitutional requirement under Articles 73-80 for all public officers. Disqualifications protect the Council's integrity.",
                    "plain_english": "To be KBERC Chairperson, you need a Master's degree, 15 years of built environment experience, and a clean record \u2014 no bankruptcy, no serious criminal convictions, and no history of professional misconduct.",
                    "policy_objective": "To ensure KBERC leadership has the technical credibility to command respect from the professional sector and the moral authority to enforce ethical standards without hypocrisy.",
                    "who_is_affected": [
                            "Presidential nominees for Chairperson",
                            "Other Council member nominees (implied similar standards)",
                            "Sitting members (must self-declare disqualifying events)"
                    ],
                    "related_sections": [
                            "Section 10 (Composition)",
                            "Section 11 (Appointment and tenure)",
                            "Chapter Six of the Constitution"
                    ],
                    "constitutional_context": "Directly implements Chapter Six (Leadership and Integrity) obligations \u2014 Article 73 requires State officers to demonstrate integrity, competence, and commitment to national values.",
                    "implementation": "A vetting panel must verify Chapter Six compliance for all nominees, including clearances from DCI, EACC, KRA, and CRB (credit reference bureaus).",
                    "potential_issues": [
                            "The 15-year experience requirement may exclude highly qualified younger professionals, potentially limiting the talent pool.",
                            "The Act applies stringent qualifications to the Chairperson but is silent on minimum qualifications for regular members."
                    ],
                    "red_team": [
                            "Loophole: 'Gross professional misconduct' is a disqualifier \u2014 but what if the misconduct occurred in another jurisdiction and was never formally adjudicated? The Act needs an evidence standard.",
                            "Enforcement Gap: A member who becomes bankrupt after appointment \u2014 who has the duty to self-declare, and what are the consequences of failing to do so?"
                    ]
            }
    },
    {
            "section": "13",
            "title": "Committees",
            "bill_text": "(1) The Council may establish such committees as it considers necessary for the better performance of its functions, including a Registration Committee, a Disciplinary Committee, and an Education and Training Committee.\n(2) The Council may co-opt external experts to serve on its committees, provided that the chairperson of every committee must be a member of the Council.",
            "analysis": {
                    "what_it_does": "Empowers KBERC to establish committees as needed, specifically naming a Registration Committee, Disciplinary Committee, and Education and Training Committee. External experts may be co-opted, but all committee chairs must be Council members.",
                    "why_it_exists": "A full Council of 9 people cannot operationally manage 212 registration files, dozens of disciplinary proceedings, and multiple accreditation reviews simultaneously. Committees allow work to be delegated while keeping accountability within the elected Council.",
                    "plain_english": "KBERC doesn't have to do everything as a full board. It can create specialized sub-committees \u2014 one for registrations, one for discipline, one for education standards. Outside experts can join these committees, but a Council member must always be in charge.",
                    "policy_objective": "To ensure regulatory efficiency through specialization, while maintaining Council accountability over all delegated functions \u2014 preventing committees from operating as independent silos.",
                    "who_is_affected": [
                            "External technical experts (e.g., professors, structural engineers) who can now formally participate in KBERC's technical work",
                            "Applicants for registration (appear before Registration Committee)",
                            "Professionals under investigation (appear before Disciplinary Committee)"
                    ],
                    "related_sections": [
                            "Section 14 (Chief Executive/Registrar)",
                            "Part X (Disciplinary proceedings)",
                            "Section 90 (Registration Committee procedures)"
                    ],
                    "constitutional_context": "Committee co-option of external experts must comply with Article 232 (public service values) and cannot grant voting rights to non-members. Co-opted members serve in advisory, not decision-making, capacity.",
                    "implementation": "Each committee needs formal terms of reference, quorum rules, conflict-of-interest policies, and decision-making protocols published by the Council. Disciplinary Committee proceedings must follow the rules of natural justice.",
                    "potential_issues": [
                            "The Act grants broad discretion in establishing committees \u2014 there is no cap on the number, potentially allowing an overly bureaucratic structure.",
                            "Co-opted external experts may create conflicts if they are active practitioners or academics with interests in accreditation decisions."
                    ],
                    "red_team": [
                            "Capture Risk: If dominated by industry-aligned co-optees, committees could be more captured than the full Council.",
                            "Procedural Risk: Committee decisions that are not properly minuted and approved by the full Council could be challenged as ultra vires."
                    ]
            }
    },
    {
            "section": "14",
            "title": "Chief Executive/Registrar",
            "bill_text": "(1) There shall be a Chief Executive Officer of the Council who shall also serve as the Registrar of Built Environment Professionals.\n(2) The Chief Executive shall be appointed by the Council through a competitive recruitment process and shall hold office for a term of four years, renewable once.\n(3) The Chief Executive shall be the accounting officer of the Council and shall be responsible for its day-to-day administration.",
            "analysis": {
                    "what_it_does": "Creates the role of Chief Executive Officer (CEO), who also serves as the Registrar of Built Environment Professionals. The CEO is appointed competitively for a 4-year, once-renewable term and is the accounting officer responsible for day-to-day administration.",
                    "why_it_exists": "The dual role of CEO and Registrar ensures that the person with executive authority over the institution is also personally accountable for the accuracy and integrity of the national professional register \u2014 Kenya's most important built environment accountability tool.",
                    "plain_english": "KBERC has a CEO who is also the Registrar \u2014 the person whose signature is on every registration certificate. They are hired through a competitive process (not political appointment), run the organisation day-to-day, and are personally responsible for the register's integrity.",
                    "policy_objective": "To professionalize KBERC's leadership with a competitive, merit-based appointment, and create a single point of administrative and fiduciary accountability.",
                    "who_is_affected": [
                            "CEO/Registrar (significant authority and accountability)",
                            "Council (employer of the CEO, sets performance targets)",
                            "National Treasury and Parliament (CEO is the accounting officer, accountable for all public funds)"
                    ],
                    "related_sections": [
                            "Section 15 (Staff of the Council)",
                            "Section 19 (Funds of the Council)",
                            "Part VII (National Registers)"
                    ],
                    "constitutional_context": "The 'accounting officer' status engages the Public Finance Management Act, 2012 and makes the CEO personally liable for financial mismanagement before the Public Accounts Committee of the National Assembly.",
                    "implementation": "The competitive recruitment process must be managed by a professional headhunter and comply with equal opportunity requirements. Position description should require a minimum of an MBA or relevant master's degree plus 10 years of executive regulatory experience.",
                    "potential_issues": [
                            "The dual role of CEO and Registrar creates a single point of failure \u2014 if the CEO is compromised, both institutional leadership and register integrity are at risk simultaneously.",
                            "A 4-year term is shorter than international best practice for regulatory CEOs (typically 5-7 years) \u2014 not enough time to implement complex institutional reform."
                    ],
                    "red_team": [
                            "Governance Risk: The Council appoints the CEO, but individual Council members may try to exercise improper influence over a CEO who needs their support for renewal.",
                            "Corruption Risk: As Registrar, the CEO has direct control over who is registered \u2014 this position must be supported by strong anti-corruption controls and independent audit."
                    ]
            }
    },
    {
            "section": "15",
            "title": "Staff of the Council",
            "bill_text": "The Council may appoint such professional, technical, and administrative staff as it considers necessary for the proper discharge of its functions, upon such terms and conditions of service as the Council may determine in consultation with the Salaries and Remuneration Commission.",
            "analysis": {
                    "what_it_does": "Grants KBERC authority to hire professional, technical, and administrative staff on terms determined by the Council in consultation with the Salaries and Remuneration Commission (SRC).",
                    "why_it_exists": "KBERC needs to attract highly skilled regulatory professionals. Requiring SRC consultation ensures staff remuneration is fiscally responsible and equitable compared to other public bodies, while giving the Council flexibility to offer competitive packages to attract technical talent.",
                    "plain_english": "KBERC can hire its own staff and set their salaries \u2014 but must consult the government body that controls public sector pay (the SRC) to make sure the pay is fair and doesn't exceed public sector norms.",
                    "policy_objective": "To balance the need for competitive technical recruitment with public sector fiscal responsibility, enabling KBERC to attract engineers, lawyers, and IT professionals to its regulatory work.",
                    "who_is_affected": [
                            "KBERC staff (employment terms)",
                            "SRC (advisory role in determining remuneration)",
                            "National Treasury (total staff costs are a charge on KBERC's budget)"
                    ],
                    "related_sections": [
                            "Section 14 (Chief Executive/Registrar)",
                            "Section 19 (Funds of the Council)"
                    ],
                    "constitutional_context": "SRC consultation is mandatory under Article 230 of the Constitution. Failure to consult the SRC on remuneration is a constitutional violation, regardless of the Council's corporate status.",
                    "implementation": "The Council should develop a staff establishment plan (grade structures, job descriptions, salary bands) in Year 1, formally submitted to SRC for concurrence.",
                    "potential_issues": [
                            "SRC consultation is advisory \u2014 the Council could ignore SRC recommendations and set its own pay, potentially breaching Article 230.",
                            "The Act is silent on the number of staff, leaving KBERC potentially under-resourced if Treasury is unsympathetic."
                    ],
                    "red_team": [
                            "Capacity Risk: If KBERC cannot pay competitive market rates for technical professionals (e.g., structural engineers to conduct inspections), it will be staffed with under-qualified personnel.",
                            "Labour Risk: The Act doesn't specify whether KBERC staff are public servants or private employees \u2014 their terms of service, collective bargaining rights, and dispute resolution mechanisms are unclear."
                    ]
            }
    },
    {
            "section": "16",
            "title": "Protection from personal liability",
            "bill_text": "No matter or thing done by a member of the Council, a member of a committee, the Chief Executive, or any staff or agent of the Council shall, if the matter or thing is done bona fide for executing the functions, powers, or duties of the Council under this Act, render the member, Chief Executive, staff, or agent personally liable to any action, claim, or demand whatsoever.",
            "analysis": {
                    "what_it_does": "Protects Council members, committee members, the CEO, and staff from personal civil liability for acts done in good faith in the course of executing their duties under the Act.",
                    "why_it_exists": "Without personal liability protection, regulators may become too risk-averse, fearing personal lawsuits from dissatisfied professionals whose registration applications were refused or licences revoked. This provision enables confident, proactive regulation.",
                    "plain_english": "If KBERC staff make a decision in good faith \u2014 for example, refusing someone's registration application because they lack the required experience \u2014 they cannot be personally sued for it, even if a court later disagrees.",
                    "policy_objective": "To encourage decisive regulatory action by removing the chilling effect of personal liability, while the 'bona fide' requirement ensures protection is not a shield for corruption or malice.",
                    "who_is_affected": [
                            "KBERC staff and Council members (protected)",
                            "Dissatisfied applicants or registrants (can only sue KBERC as an institution, not individuals)",
                            "Taxpayer (bears the cost of institutional liability)"
                    ],
                    "related_sections": [
                            "Section 6 (Corporate status)",
                            "Section 7 (Legal status)",
                            "Section 9 (Independence)"
                    ],
                    "constitutional_context": "This protection does not apply to violations of constitutional rights \u2014 under Articles 22 and 23, individuals can always seek constitutional redress against state officials for violations of fundamental rights.",
                    "implementation": "KBERC should maintain institutional professional indemnity insurance. 'Bona fide' must be defined in the Council's Code of Conduct to create an evidentiary standard in litigation.",
                    "potential_issues": [
                            "The 'bona fide' standard is fact-specific \u2014 proving good faith requires detailed documentation of the decision-making process.",
                            "The provision does not address criminal liability \u2014 a staff member who accepts bribes to approve a registration cannot claim protection under this section."
                    ],
                    "red_team": [
                            "Abuse Risk: Staff could hide corrupt decisions behind the 'bona fide' shield \u2014 internal audit functions must be robust enough to detect bad faith decisions before they become institutional liability.",
                            "Gap: The Act does not create whistleblower protections for KBERC staff who report colleagues' bad faith decisions."
                    ]
            }
    },
    {
            "section": "17",
            "title": "Conflict of interest",
            "bill_text": "A member of the Council or a committee who has a direct or indirect personal interest in a matter being considered by the Council must immediately disclose the nature of their interest and recuse themselves from any deliberation or decision on the matter.",
            "analysis": {
                    "what_it_does": "Imposes an absolute duty on Council and committee members to immediately declare any direct or indirect personal interest in a matter before the Council and to recuse themselves from all deliberations and decisions on that matter.",
                    "why_it_exists": "Conflict of interest is the primary mechanism through which professional capture of regulators occurs. By mandating immediate disclosure and recusal \u2014 not just disclosure \u2014 the Act closes the loophole of members who declare interests but remain in the room.",
                    "plain_english": "If a Council member has any personal stake in a decision (e.g., a company connected to them is being investigated, or their former firm is applying for a certification), they must immediately leave the room and have zero involvement in the decision.",
                    "policy_objective": "To prevent regulatory capture through personal financial interests and to ensure that all Council decisions are made by members who are genuinely impartial.",
                    "who_is_affected": [
                            "Council members (permanent duty)",
                            "Committee members (same duty)",
                            "Applicants and registrants (protected from biased decisions)"
                    ],
                    "related_sections": [
                            "Section 10 (Composition)",
                            "Section 12 (Qualifications and disqualifications)",
                            "Section 16 (Protection from personal liability)"
                    ],
                    "constitutional_context": "Implements Chapter Six (Leadership and Integrity) obligations \u2014 Article 75 prohibits State officers from having conflicts of interest in public duties.",
                    "implementation": "All Council members must submit an annual interests declaration to the Registrar. A conflict-of-interest register must be maintained and published on KBERC's website. Failure to declare must carry a specific disciplinary sanction.",
                    "potential_issues": [
                            "'Indirect personal interest' is not defined \u2014 a member may not recognise that a distant family connection constitutes an indirect interest.",
                            "There is no penalty specified for failure to declare and recuse \u2014 the Act needs a clear sanction (e.g., nullification of the affected decision and possible removal from the Council)."
                    ],
                    "red_team": [
                            "Enforcement Gap: Who decides whether a declared interest requires recusal? The Act is silent \u2014 this creates potential for self-serving determinations.",
                            "Capture Risk: In small professional markets like Kenya's, nearly all Council members may have professional relationships with applicants, making recusal impractical and creating constant quorum problems."
                    ]
            }
    },
    {
            "section": "18",
            "title": "Public accountability",
            "bill_text": "(1) The Council shall publish its annual report, audited financial statements, and a summary of disciplinary actions on its website for public scrutiny.\n(2) The Council must convene an Annual General Meeting open to all registered professionals to report on its stewardship.",
            "analysis": {
                    "what_it_does": "Requires KBERC to publish its annual report, audited financial statements, and a summary of disciplinary actions on its website. Also requires an Annual General Meeting (AGM) open to all registered professionals.",
                    "why_it_exists": "Public accountability mechanisms are the antidote to regulatory capture. Publishing disciplinary action summaries creates a deterrent effect: professionals know their peers can see outcomes. The mandatory AGM is particularly important \u2014 it gives the entire registered profession a formal annual platform to interrogate the regulator.",
                    "plain_english": "Every year, KBERC must publish its financial accounts, its disciplinary decisions (who was sanctioned and why), and hold a public meeting where any registered professional can attend and question Council leadership. No more closed-door regulation.",
                    "policy_objective": "To create a multi-layered accountability architecture: formal accountability to Parliament (via reports), financial accountability (audited accounts), and peer accountability (AGM open to all professionals).",
                    "who_is_affected": [
                            "All registered professionals (right to attend AGM and question Council)",
                            "General public (access to disciplinary summaries)",
                            "Parliament (receives annual reports)",
                            "Media (access to published information)"
                    ],
                    "related_sections": [
                            "Section 19 (Funds of the Council)",
                            "Section 20 (Auditor and audit)",
                            "Article 35 (Right to access to information)"
                    ],
                    "constitutional_context": "Implements Article 35 (Access to information), Article 10(2)(f) (accountability as a national value), and the Public Audit Act requirements for state corporations. The AGM requirement reflects the constitutional value of public participation in Article 10(2)(a).",
                    "implementation": "KBERC's website must be built as a primary accountability tool \u2014 real-time professional register, published disciplinary summaries, and AGM live-streaming should be standard features from Year 1.",
                    "potential_issues": [
                            "AGM resolutions are not legally binding on the Council \u2014 professionals can attend and express displeasure, but the Act gives the AGM no formal power to override Council decisions.",
                            "Publishing disciplinary summaries must be balanced against the privacy rights of professionals who have been cleared of allegations."
                    ],
                    "red_team": [
                            "Reputational Risk: Publishing all disciplinary summaries could unfairly damage professionals acquitted on appeal \u2014 there needs to be a process for removing records of overturned decisions.",
                            "Digital Exclusion: Requiring website publication creates an access barrier for registered professionals in rural Kenya without reliable internet access."
                    ]
            }
    },
    {
            "section": "19",
            "title": "Annual reporting",
            "bill_text": "Within three months after the end of each financial year, the Council shall submit a comprehensive annual report to the Cabinet Secretary detailing its financial performance, regulatory interventions, and the state of compliance in the built environment sector.",
            "analysis": {
                    "what_it_does": "Establishes KBERC's funding sources: parliamentary appropriations, fees charged to registrants and applicants, fines imposed by the Tribunal, income from property and services, grants, and donations.",
                    "why_it_exists": "A diversified funding base is essential for institutional independence \u2014 a regulator that depends entirely on parliamentary appropriations can be controlled through budget cuts. Revenue from professional fees creates a direct financial relationship between the regulated sector and the regulator.",
                    "plain_english": "KBERC is funded by several sources: government money from Parliament, fees paid by professionals for registration and practising certificates, fines collected by the Tribunal, and income from its own services and property. This mix of funding sources helps keep it financially independent.",
                    "policy_objective": "To ensure KBERC has sustainable, multi-source funding that insulates it from political control through budget manipulation, while ensuring professional fees are transparently applied to direct regulatory services.",
                    "who_is_affected": [
                            "Registered professionals (pay annual practising certificate fees)",
                            "Parliament (appropriates baseline funding)",
                            "National Treasury (manages appropriated funds)",
                            "Tribunal (fines flow into KBERC funds)"
                    ],
                    "related_sections": [
                            "Section 14 (CEO as accounting officer)",
                            "Section 20 (Audit)",
                            "Section 21 (Fees regulations)"
                    ],
                    "constitutional_context": "KBERC is a state corporation \u2014 its funds are subject to Article 201 (public finance principles: openness, accountability, public participation) and the Public Finance Management Act, 2012.",
                    "implementation": "A detailed fee schedule, approved by the Council and published by Gazette, must be in place before the first registration cycle opens. Fee increases must follow public consultation.",
                    "potential_issues": [
                            "Fee revenue creates a perverse incentive: the more professionals registered, the more KBERC earns \u2014 potentially incentivizing registration of under-qualified applicants.",
                            "The Act allows 'donations' as a funding source \u2014 this creates a channel for industry players to build financial influence over KBERC."
                    ],
                    "red_team": [
                            "Capture Risk: Large construction firms could use 'donations' to buy goodwill and influence at KBERC. This source should be prohibited or tightly regulated.",
                            "Revenue Risk: If fees are set too high, cost barriers could exclude qualified but economically disadvantaged professionals from maintaining their registration."
                    ]
            }
    }
  ]
};