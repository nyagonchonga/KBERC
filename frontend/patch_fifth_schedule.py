import pathlib, re

data_dir = pathlib.Path("src/app/viewer/data")
sched_path = data_dir / "schedules.ts"
content = sched_path.read_text(encoding="utf-8")

old_fifth = """    {
        "title": "Fifth Schedule \u2014 Reserved Professional Work",
        "content": "1. Architecture:\n   Preparation of architectural designs and specifications for medium and high-risk projects.\n2. Engineering:\n   Preparation of structural, mechanical, and electrical engineering designs and specifications for medium and high-risk projects.\n3. Quantity Surveying:\n   Preparation of bills of quantities and cost estimates for high-risk public projects.\n4. Physical Planning:\n   Preparation of regional, county, and local physical and land use development plans.\n\nNote: A registered technologist may independently undertake reserved work for low and medium-risk projects within their designated scope, but must work under the supervision of a registered professional for high-risk projects."
    }"""

new_fifth = """    {
        "title": "Fifth Schedule \u2014 Reserved Professional Work",
        "content": "1. Architecture:\n   Preparation of architectural designs, master plans, and technical specifications for medium and high-risk projects.\n2. Engineering (Civil, Structural, Mechanical, Electrical, Geotechnical, Environmental):\n   Preparation of engineering designs, structural calculations, infrastructure plans, and technical specifications for medium and high-risk projects.\n3. Quantity Surveying:\n   Preparation of bills of quantities, cost estimates, financial statements, and tender documents for medium and high-risk public and private projects.\n4. Physical and Land Use Planning:\n   Preparation of national, regional, county, and local physical and land use development plans, spatial frameworks, and zoning plans.\n5. Landscape Architecture:\n   Preparation of landscape master plans, environmental landscape impact assessments, public realm designs, and site ecology specifications for medium and high-risk projects.\n6. Interior Design:\n   Preparation of interior space planning, fire egress interior layouts, acoustic designs, and material specifications for commercial, institutional, and high-occupancy public buildings.\n7. Construction Project Management:\n   Project administration, construction program management, statutory site safety oversight, and quality audit supervision for high-risk projects.\n\nNote: A registered technologist may independently undertake reserved work for low-risk projects within their designated scope, and for medium-risk projects under guidelines established by the Council, but must work under the direct supervision of a registered lead professional for high-risk projects."
    }"""

if old_fifth in content:
    content = content.replace(old_fifth, new_fifth, 1)
    sched_path.write_text(content, encoding="utf-8")
    print("Updated Fifth Schedule in schedules.ts")
else:
    print("WARNING: Old Fifth Schedule text not found exactly in schedules.ts")
