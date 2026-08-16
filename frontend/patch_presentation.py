import pathlib, re

read_path = pathlib.Path("src/app/viewer/read/page.tsx")
content = read_path.read_text(encoding="utf-8")

# 1. Update .a4-page margin-bottom for distinct page break separation
old_page_css = """        .a4-page {
          width: 210mm;
          height: 297mm;
          max-height: 297mm;
          box-sizing: border-box;
          padding: 25mm 20mm;
          margin: 0 auto;
          background: white;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
          position: relative;
          font-family: 'Merriweather', serif;
          line-height: 1.65;
          overflow: hidden;
          color: #0f172a;
          flex-shrink: 0;
        }"""

new_page_css = """        .a4-page {
          width: 210mm;
          height: 297mm;
          max-height: 297mm;
          box-sizing: border-box;
          padding: 24mm 20mm;
          margin: 0 auto 36px auto;
          background: white;
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
          border: 1px solid #cbd5e1;
          border-radius: 2px;
          position: relative;
          font-family: 'Merriweather', serif;
          line-height: 1.7;
          overflow: hidden;
          color: #0f172a;
          flex-shrink: 0;
        }"""

if old_page_css in content:
    content = content.replace(old_page_css, new_page_css, 1)
    print("Updated .a4-page margin and shadow for distinct page breaks")
else:
    print("WARNING: old_page_css not found")

# 2. Update font sizes and spacing in CSS
old_styles_end = """        .a4-section-body { flex: 1; display: flex; font-size: 11px; line-height: 1.65; color: #1e293b; text-align: justify; }
        .a4-section-number { font-family: sans-serif; font-weight: 900; width: 24px; shrink-0; color: #0f172a; }
        .a4-section-text { flex: 1; margin: 0; }
        
        .a4-schedule-header { text-align: center; margin: 14px 0 8px; border-top: 2px solid #e2e8f0; padding-top: 12px; }
        .a4-schedule-label { font-family: sans-serif; font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.15em; color: #10b981; margin-bottom: 2px; }
        .a4-schedule-title { font-family: 'Merriweather', serif; font-size: 11px; font-weight: 900; color: #0f172a; }
        .a4-schedule-text { font-size: 10.5px; line-height: 1.6; color: #334155; text-align: justify; }
        .viewer-sidebar-group-label { font-family: sans-serif; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; padding: 6px 10px 2px; }"""

new_styles_end = """        .a4-section-body { flex: 1; display: flex; font-size: 12px; line-height: 1.7; color: #1e293b; text-align: justify; }
        .a4-section-number { font-family: sans-serif; font-weight: 900; font-size: 12.5px; width: 28px; shrink-0; color: #0f172a; }
        .a4-section-text { flex: 1; margin: 0; font-size: 12px; line-height: 1.7; }
        .a4-section-margin-title { font-family: sans-serif; font-size: 9px; font-weight: 700; color: #475569; line-height: 1.35; display: block; }
        
        .a4-schedule-header { text-align: center; margin: 18px 0 10px; border-top: 2px solid #cbd5e1; padding-top: 14px; }
        .a4-schedule-label { font-family: sans-serif; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.15em; color: #059669; margin-bottom: 3px; }
        .a4-schedule-title { font-family: 'Merriweather', serif; font-size: 12.5px; font-weight: 900; color: #0f172a; }
        .a4-schedule-text { font-size: 11.5px; line-height: 1.7; color: #334155; text-align: justify; }
        .viewer-sidebar-group-label { font-family: sans-serif; font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; padding: 10px 12px 4px; }"""

if old_styles_end in content:
    content = content.replace(old_styles_end, new_styles_end, 1)
    print("Updated font sizes and marginal note typography")
else:
    print("WARNING: old_styles_end not found")

# 3. Increase sidebar width from w-72 to w-80 and improve sidebar item layout
content = content.replace("<aside className={`${sidebarCollapsed ? 'w-0' : 'w-72'}", "<aside className={`${sidebarCollapsed ? 'w-0' : 'w-80'}")

read_path.write_text(content, encoding="utf-8")
print("Saved read/page.tsx with presentation patches!")
