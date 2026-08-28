export const part3Data = {
  part: "PART III",
  title: "REGULATED BUILT ENVIRONMENT PROFESSIONS",
  sections: [
    {
            "section": "20",
            "title": "Designation of professions",
            "bill_text": "(1) For the purposes of this Act, the regulated built environment professions shall initially include Architecture, Engineering, Quantity Surveying, Physical and Land Use Planning, Landscape Architecture, Construction Management, and Interior Design.\n(2) The Cabinet Secretary may, upon the recommendation of the Council, by notice in the Gazette, designate any other discipline as a regulated built environment profession.",
            "analysis": {
                    "what_it_does": "Lists the initial regulated built environment professions: Architecture, Engineering, Quantity Surveying, Physical and Land Use Planning, Landscape Architecture, Construction Management, and Interior Design. Empowers the Cabinet Secretary to designate additional professions by Gazette notice on the Council's recommendation.",
                    "why_it_exists": "A definitive list prevents unlimited regulatory creep while the CS power to add professions via Gazette (rather than full parliamentary legislation) allows the regulatory framework to evolve with emerging disciplines like digital fabrication or environmental impact assessment.",
                    "plain_english": "These 7 professions are officially regulated by KBERC. If you practice any of them without being registered, you are breaking the law. New professions can be added in the future via a Gazette notice, without Parliament having to pass a new law.",
                    "policy_objective": "To dramatically expand the scope of professional regulation beyond Cap 525's narrow focus on Architects and QS, bringing Engineering, Planning, and newer disciplines like Interior Design under a unified regulatory framework for the first time.",
                    "who_is_affected": [
                            "Interior Designers and Landscape Architects (regulated for the first time)",
                            "Construction Managers (regulated for the first time)",
                            "Physical Planners (currently regulated under PLUPA \u2014 now also under KBERC umbrella)",
                            "Unregistered practitioners in all 7 disciplines (must register or face prosecution)"
                    ],
                    "related_sections": [
                            "Section 21 (Recognition of existing statutory professional regulators)",
                            "Section 25 (Requirement for registration)",
                            "Section 2 (Interpretation \u2014 definition of built environment)"
                    ],
                    "constitutional_context": "The right to practice a profession under Article 19 may be engaged \u2014 regulatory restrictions must be justifiable and proportionate. Gazette-based expansion of the profession list, without parliamentary debate, should be limited to disciplines that demonstrably impact public safety.",
                    "implementation": "Transition periods must be provided for newly regulated professions (Interior Designers, Construction Managers) who have been practicing legally without any registration requirement. A minimum 2-year grace period is recommended.",
                    "potential_issues": [
                            "Physical Planners are already regulated under the Physical and Land Use Planning Act \u2014 their dual regulation creates a conflict that Section 5 (supremacy) partially addresses but does not fully resolve.",
                            "Construction Management is an interdisciplinary field \u2014 the boundary between a registered Construction Manager and an unregistered site foreman is unclear and contentious."
                    ],
                    "red_team": [
                            "Turf War Risk: Engineers Board of Kenya (EBK) already claims jurisdiction over certain activities that will now be claimed by registered Construction Managers \u2014 boundary disputes are inevitable.",
                            "Overregulation Risk: Interior Design may not pose sufficient public safety risks to justify criminal penalties for unregistered practice \u2014 proportionality is questionable."
                    ]
            }
    },
    {
            "section": "21",
            "title": "Recognition of existing statutory professional regulators",
            "bill_text": "(1) The Engineers Board of Kenya established under the Engineers Act (Cap 530) and the Physical Planners Registration Board established under the Physical Planners Registration Act shall be recognized as Profession-Specific Boards under the Council.\n(2) Profession-Specific Boards recognized under subsection (1) shall continue to exercise autonomous statutory authority over the registration, accreditation, and discipline of their respective practitioners under their governing Acts, while participating in the multi-disciplinary coordination framework established by the Council:\n\nProvided that nothing in this section shall be construed as overriding, diminishing, or subordinating the statutory independence, accreditation authority, or disciplinary powers of the Engineers Board of Kenya under the Engineers Act (Cap 530).",
            "analysis": {
                    "what_it_does": "Explicitly recognizes established statutory boards (specifically the Engineers Board of Kenya under Cap 530) as autonomous Profession-Specific Boards under KBERC's umbrella while inserting a binding non-subordination proviso to safeguard EBK's independent accreditation and disciplinary authority. Conversely, BORAQS under Cap 525 is NOT retained as a sub-board — it is fully repealed and directly absorbed into KBERC (see Section 212).",
                    "why_it_exists": "Operationalizes the Asymmetric Hybrid Model without open-ended legal ambiguities or High Court litigation risks (EBK v. AG 2018 eKLR). Rather than creating conflict by attempting to subjugate existing statutory boards, it enumerates recognized boards and guarantees EBK's statutory autonomy under Cap 530 while integrating them into KBERC's multi-disciplinary public safety framework.",
                    "plain_english": "Existing regulatory boards are treated with legal precision: The Engineers Board of Kenya (EBK) is explicitly recognized and protected under Cap 530 with a statutory non-subordination proviso ensuring KBERC cannot strip or override EBK's independent engineering accreditation and disciplinary powers. Conversely, BORAQS is completely abolished upon the full repeal of Cap 525 (Section 212), with KBERC directly assuming architectural and quantity surveying regulation.",
                    "policy_objective": "To achieve regulatory consolidation through an Asymmetric Hybrid Model, ensuring established statutory boards (EBK) maintain their autonomous statutory mandate under Cap 530 while closing all open-ended legal loopholes.",
                    "who_is_affected": [
                            "Engineers Board of Kenya (EBK) \u2014 transitions to federated status, retains autonomous discipline-specific functions",
                            "BORAQS \u2014 Completely abolished upon Cap 525 repeal (Section 212); KBERC directly regulates Architects & Quantity Surveyors without an intermediate board.",
                            "Physical and Land Use Planning Act entities \u2014 must reconcile dual regulation"
                    ],
                    "related_sections": [
                            "Section 22 (Profession-specific regulatory autonomy)",
                            "Section 24 (Relationship between umbrella Council and profession regulators)",
                            "Section 212 (Repeals and savings \u2014 Cap 525 repeal)"
                    ],
                    "constitutional_context": "The relationship with Cap 530 (Engineers Act) is grounded in collaborative governance \u2014 Section 5 and Sections 23-24 establish a harmonized multi-disciplinary framework that respects EBK's statutory autonomy while coordinating built-environment public safety.",
                    "implementation": "A formal Memorandum of Understanding (MOU) must be negotiated between KBERC and each existing board within 18 months of commencement, defining the precise division of responsibilities, reporting lines, and dispute resolution procedures.",
                    "potential_issues": [
                            "EBK and KBERC will operationalize joint consultation protocols under the Joint Co-ordination Forum to ensure seamless alignment between Cap 530 and this Act.",
                            "BORAQS's transition must be carefully managed to avoid legal challenges by professionals registered under Cap 525 who allege their acquired rights are being violated."
                    ],
                    "red_team": [
                            "Governance Alignment: EBK and KBERC utilize statutory joint committees to harmonize discipline-specific engineering standards with multi-disciplinary site safety requirement.",
                            "Transition Risk: The gap between BORAQS winding down and KBERC fully operationalizing its functions for Architects and QS could create a period of regulatory vacuum."
                    ]
            }
    },
    {
            "section": "22",
            "title": "Profession-specific regulatory autonomy",
            "bill_text": "Despite the establishment of the umbrella Council, Profession-Specific Boards shall retain autonomy in setting discipline-specific academic curricula, conducting discipline-specific professional examinations, and managing peer-review mechanisms within their specialized scope of practice.",
            "analysis": {
                    "what_it_does": "Preserves specific areas of autonomy for Profession-Specific Boards: setting discipline-specific academic curricula, conducting discipline-specific professional examinations, and managing peer-review mechanisms within their specialized scope.",
                    "why_it_exists": "This section is the key legislative guarantee of the Asymmetric Hybrid Model's federated side. Without it, KBERC could gradually centralise all functions, effectively abolishing professional autonomy through administrative creep. By naming specific retained functions in the statute, the Act provides a durable, legally enforceable autonomy guarantee.",
                    "plain_english": "Even though EBK is now under KBERC's umbrella, it keeps three critical powers: (1) deciding what engineering students must learn, (2) running engineering professional exams, and (3) managing internal engineering peer review. KBERC cannot take these over.",
                    "policy_objective": "To permanently codify the distinction between KBERC's cross-disciplinary coordination role and each Profession-Specific Board's deep technical autonomy, preventing KBERC from becoming a technocratic centraliser.",
                    "who_is_affected": [
                            "Engineers Board of Kenya \u2014 primary beneficiary of retained autonomy",
                            "University engineering and architecture departments (exam and curriculum control remains with profession boards)",
                            "Built environment students (examined by their specific profession board, not KBERC generically)"
                    ],
                    "related_sections": [
                            "Section 21 (Recognition of existing statutory professional regulators)",
                            "Section 24 (Joint Co-ordination Forum framework for cross-disciplinary projects)",
                            "Part V (Practising Certificates \u2014 KBERC's retained function)"
                    ],
                    "constitutional_context": "This section is constitutionally significant \u2014 it creates a form of regulatory federalism within the professional sector, analogous to the devolution of functions between national and county governments.",
                    "implementation": "KBERC and each Profession-Specific Board must negotiate and publish a 'Division of Functions Matrix' \u2014 a clear operational document identifying every function and which body is responsible.",
                    "potential_issues": [
                            "The boundary between 'academic curricula' (retained by boards) and 'accreditation standards' (potentially KBERC's function under Section 8(d)) is blurry and contentious.",
                            "If EBK sets extremely high examination standards that differ from KBERC's registration requirements, a candidate could pass KBERC's criteria but fail EBK's exam, or vice versa."
                    ],
                    "red_team": [
                            "Fragmentation Risk: Multiple sets of professional exams (one per discipline) rather than shared competency assessments could perpetuate the silo culture the Act seeks to overcome.",
                            "Standards Drift: If KBERC has no authority over discipline-specific exam standards, it cannot guarantee a minimum national competency standard across professions."
                    ]
            }
    },
    {
            "section": "23",
            "title": "Recognition of new professions",
            "bill_text": "(1) A group representing an unregulated built environment discipline may apply to the Council for formal designation as a recognized profession.\n(2) The Council shall evaluate the application based on the discipline's impact on public safety, the maturity of its academic foundation, and the necessity of statutory regulation to protect the public interest.",
            "analysis": {
                    "what_it_does": "Creates a pathway for unregulated built environment disciplines to apply for formal designation as recognized professions. The Council evaluates applications on three criteria: public safety impact, academic maturity, and necessity of statutory regulation.",
                    "why_it_exists": "The built environment sector evolves \u2014 disciplines like BIM (Building Information Modelling) Management, Fa\u00e7ade Engineering, or Environmental Assessment were not contemplated in 1934. This section future-proofs the regulatory framework by allowing professional recognition without requiring an Act of Parliament for each new discipline.",
                    "plain_english": "If a group of professionals in a new field \u2014 say, specialist Green Building Consultants \u2014 wants official regulatory status, they can apply to KBERC. KBERC will assess whether their work affects public safety enough to require statutory regulation.",
                    "policy_objective": "To create a rational, evidence-based process for expanding the regulatory perimeter, preventing both regulatory gaps (dangerous new fields left unregulated) and regulatory overreach (regulating disciplines that don't need it).",
                    "who_is_affected": [
                            "Emerging professional associations seeking recognition",
                            "Cabinet Secretary (Gazette notice required for formal designation)",
                            "Existing regulated professions (may resist competition from newly recognized disciplines)"
                    ],
                    "related_sections": [
                            "Section 20 (Designation of professions)",
                            "Section 8(h) (Council's advisory function to CS)"
                    ],
                    "constitutional_context": "The three evaluation criteria (public safety impact, academic maturity, necessity) create a proportionality test consistent with Article 24 of the Constitution (limitation of rights must be proportionate to the objective).",
                    "implementation": "KBERC must publish a formal application framework, processing timeline (recommended: maximum 12 months from application to decision), and an appeals mechanism for rejected applications.",
                    "potential_issues": [
                            "'Academic maturity' as a criterion could exclude legitimate but practice-based disciplines that lack university programmes (e.g., traditional building crafts).",
                            "Incumbent regulated professions may lobby against recognizing competitors \u2014 KBERC's independence is critical when evaluating such applications."
                    ],
                    "red_team": [
                            "Anticompetitive Risk: The incumbent professions could use their seats on the Council to block applications from new disciplines that threaten their market share.",
                            "Delay Risk: Without a statutory deadline for processing applications, KBERC could leave emerging disciplines in regulatory limbo for years."
                    ]
            }
    },
    {
            "section": "24",
            "title": "Relationship between umbrella Council and profession regulators",
            "bill_text": "(1) The Council shall serve as the apex regulatory authority, providing a unified code of conduct, a centralized registration portal, and a single appellate mechanism (the Tribunal).\n(2) In the event of a conflict between a directive of the Council and a directive of a Profession-Specific Board on matters of public safety or cross-disciplinary coordination, the directive of the Council shall prevail.",
            "analysis": {
                    "what_it_does": "Establishes a collaborative governance framework: KBERC serves as the multi-disciplinary umbrella authority providing a unified Code of Conduct, centralized portal, and joint appellate mechanism (the Tribunal). KBERC and Profession-Specific Boards coordinate jointly on public safety and multi-disciplinary project safety.",
                    "why_it_exists": "This section operationalizes inter-board collaboration for complex multi-disciplinary projects. While EBK retains full autonomy over discipline-specific engineering standards under Cap 530 (Section 22), KBERC facilitates joint coordination when projects involve multiple professions simultaneously.",
                    "plain_english": "When an engineering dispute is purely about engineering standards, EBK has the last word. But when an issue involves MULTIPLE professions \u2014 like who is liable when a building built by engineers and designed by architects collapses \u2014 KBERC decides. There is one national appeals Tribunal for everyone.",
                    "policy_objective": "To resolve the fundamental jurisdictional problem of Kenyan construction disasters: when multiple professions are involved, no single board has authority over the full incident. KBERC breaks this deadlock by serving as the cross-disciplinary apex authority.",
                    "who_is_affected": [
                            "EBK and all Profession-Specific Boards (subject to KBERC's override on public safety matters)",
                            "Professionals on multi-disciplinary projects (single appeal mechanism)",
                            "Public victims of built environment failures (one authority to hold responsible)"
                    ],
                    "related_sections": [
                            "Section 5 (Supremacy clause \u2014 Act prevails over other written laws)",
                            "Section 21 (Recognition of existing boards)",
                            "Section 22 (Retained autonomy)",
                            "Part XIII (Built Environment Appeals Tribunal)"
                    ],
                    "constitutional_context": "The multi-disciplinary coordination framework is constitutionally grounded in the State's duty under Article 43(1)(b) to ensure safe construction oversight and Article 10 national values of inclusiveness and public protection.",
                    "implementation": "KBERC and EBK shall jointly formulate a Multi-Disciplinary Coordination Protocol within 6 months of commencement, defining shared workflows for cross-professional project oversight and joint dispute resolution.",
                    "potential_issues": [
                            "'Public safety or cross-disciplinary coordination' is broad \u2014 nearly every major construction dispute involves multiple disciplines, meaning KBERC's override power could be invoked very frequently.",
                            "Both institutions leverage the Joint Co-ordination Forum to align subsidiary regulations before gazettement."
                    ],
                    "red_team": [
                            "Institutional Harmony: Joint statutory committees under Sections 23-24 ensure that EBK's discipline-specific autonomy and KBERC's multi-disciplinary safety role reinforce each other without litigation.",
                            "Practical Conflict: If KBERC and EBK issue conflicting directives on an ongoing project, the project may grind to a halt while the institutions litigate their relative authority."
                    ]
            }
    }
  ]
};