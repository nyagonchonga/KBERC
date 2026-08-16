import pathlib

read_path = pathlib.Path("src/app/viewer/read/page.tsx")
content = read_path.read_text(encoding="utf-8")

css_start_idx = content.find("<style jsx global>{`")
css_end_idx = content.find("`}</style>", css_start_idx)

harmonized_spacing_css = """<style jsx global>{`
        /* ─── Harmonized Global Typography & Spacing System ────────────────────── */
        .a4-page {
          width: 210mm;
          height: 297mm;
          max-height: 297mm;
          box-sizing: border-box;
          padding: 24mm 20mm;
          margin: 0 auto 28px auto;
          background: white;
          box-shadow: 0 12px 28px -5px rgba(0, 0, 0, 0.45);
          position: relative;
          font-family: 'Merriweather', serif;
          line-height: 1.65;
          letter-spacing: 0.01em;
          word-spacing: normal;
          overflow: hidden;
          color: #0f172a;
          flex-shrink: 0;
          -webkit-font-smoothing: antialiased;
        }
        .page-content {
          height: 249mm;
          overflow: hidden;
        }
        .page-header {
          position: absolute;
          top: 14mm;
          left: 20mm;
          right: 20mm;
          border-bottom: 2px solid #cbd5e1;
          padding-bottom: 3mm;
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          text-transform: uppercase;
          color: #64748b;
          font-family: sans-serif;
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .page-footer {
          position: absolute;
          bottom: 14mm;
          left: 20mm;
          right: 20mm;
          border-top: 1px solid #cbd5e1;
          padding-top: 4mm;
          display: flex;
          justify-content: space-between;
          font-size: 9.5px;
          color: #64748b;
          font-family: sans-serif;
          letter-spacing: 0.04em;
        }
        
        /* ─── Harmonized Front Matter Spacing ────────────────────────────────── */
        .a4-frontmatter { text-align: center; padding-top: 16mm; }
        .a4-fm-coat { font-family: sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px; }
        .a4-fm-assembly { font-family: sans-serif; font-size: 10px; font-weight: 700; color: #64748b; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 24px; }
        .a4-fm-billno { font-family: sans-serif; font-size: 11px; font-weight: 800; color: #059669; margin-bottom: 28px; }
        .a4-fm-title { font-family: 'Merriweather', serif; font-size: 15px; font-weight: 900; line-height: 1.55; letter-spacing: 0.01em; color: #0f172a; margin-bottom: 28px; padding: 0 8mm; }
        .a4-fm-preamble { font-family: 'Merriweather', serif; font-size: 12px; font-style: italic; line-height: 1.7; letter-spacing: 0.01em; word-spacing: normal; color: #334155; text-align: left; padding: 0 8mm; }
        
        /* ─── Harmonized Table of Contents (TOC) ─────────────────────────────── */
        .a4-toc-header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #0f172a; padding-bottom: 10px; }
        .a4-toc-main-title { font-family: sans-serif; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; color: #0f172a; }
        .a4-toc-item { margin-bottom: 6px; }
        .a4-toc-part-title { font-family: sans-serif; font-size: 11px; font-weight: 900; text-transform: uppercase; color: #047857; margin-top: 14px; margin-bottom: 4px; letter-spacing: 0.04em; }
        .a4-toc-sec-row { display: flex; font-size: 12px; line-height: 1.6; letter-spacing: 0.01em; color: #1e293b; margin-bottom: 2px; text-align: left; }
        .a4-toc-sec-num { font-family: sans-serif; font-weight: 800; width: 48px; min-width: 48px; shrink-0; color: #0f172a; }
        .a4-toc-sec-title { flex: 1; font-weight: 500; }
        
        /* ─── Harmonized Part & Section Headings ─────────────────────────────── */
        .a4-part-header { text-align: center; margin: 20px 0 14px; border-top: 2px solid #0f172a; border-bottom: 1px solid #0f172a; padding: 10px 0; }
        .a4-part-label { font-family: sans-serif; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.18em; color: #047857; }
        .a4-part-title { font-family: 'Merriweather', serif; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.02em; color: #0f172a; margin-top: 4px; }
        
        /* ─── Harmonized Section Grid & Clause Spacing ───────────────────────── */
        .a4-section-block { display: flex; align-items: flex-start; margin-bottom: 10px; border-radius: 4px; padding: 2px 0; transition: background 0.15s; cursor: pointer; width: 100%; box-sizing: border-box; }
        .a4-section-selected { background: #f0fdf4; border-left: 3px solid #10b981; }
        .a4-section-margin { width: 28mm; min-width: 28mm; max-width: 28mm; padding-right: 5mm; flex-shrink: 0; text-align: right; box-sizing: border-box; }
        .a4-section-margin-title { font-family: sans-serif; font-size: 8.5px; font-weight: 700; color: #475569; line-height: 1.3; letter-spacing: 0.01em; word-spacing: normal; display: block; word-break: break-word; font-style: italic; }
        .a4-section-body { flex: 1; min-width: 0; display: flex; align-items: flex-start; gap: 6px; font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; color: #1e293b; text-align: left; }
        .a4-section-number { font-family: sans-serif; font-weight: 900; font-size: 12.5px; min-width: 26px; max-width: 26px; flex-shrink: 0; color: #0f172a; }
        .a4-section-number-spacer { min-width: 26px; max-width: 26px; flex-shrink: 0; }
        .a4-section-text { flex: 1; min-width: 0; margin: 0; font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; text-align: left; word-break: break-word; }
        .a4-subclause-text { padding-left: 16px; text-indent: -16px; font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; text-align: left; margin-bottom: 4px; }
        
        /* ─── Harmonized Schedule Spacing ─────────────────────────────────────── */
        .a4-schedule-header { text-align: center; margin: 20px 0 12px; border-top: 2px solid #cbd5e1; padding-top: 14px; }
        .a4-schedule-label { font-family: sans-serif; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.12em; color: #059669; margin-bottom: 4px; }
        .a4-schedule-title { font-family: 'Merriweather', serif; font-size: 13px; font-weight: 900; letter-spacing: 0.01em; color: #0f172a; }
        .a4-schedule-text { font-size: 12px; line-height: 1.65; letter-spacing: 0.01em; word-spacing: normal; color: #334155; text-align: left; margin-bottom: 6px; }
        
        .viewer-sidebar-group-label { font-family: sans-serif; font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: #64748b; padding: 10px 12px 4px; }`"""

content = content[:css_start_idx] + harmonized_spacing_css + content[css_end_idx + len("`}</style>"):]
read_path.write_text(content, encoding="utf-8")
print("Successfully harmonized word, sentence, and letter spacing across all text levels!")
