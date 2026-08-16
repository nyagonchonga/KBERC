import pathlib

read_path = pathlib.Path("src/app/viewer/read/page.tsx")
content = read_path.read_text(encoding="utf-8")

old_snippet = """        .viewer-sidebar-group-label { font-family: sans-serif; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; padding: 6px 10px 2px; }`
    </div>
  );
}"""

new_snippet = """        .viewer-sidebar-group-label { font-family: sans-serif; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; padding: 6px 10px 2px; }
      `}</style>
    </div>
  );
}"""

if old_snippet in content:
    content = content.replace(old_snippet, new_snippet, 1)
    read_path.write_text(content, encoding="utf-8")
    print("Fixed style tag closing in read/page.tsx!")
else:
    print("WARNING: old_snippet not found")
