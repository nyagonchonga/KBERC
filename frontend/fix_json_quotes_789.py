with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

old_bad = 'Both institutions leverage the Joint Co-ordination Forum to align subsidiary regulations before gazettement.'
new_good = '"Both institutions leverage the Joint Co-ordination Forum to align subsidiary regulations before gazettement."'

if old_bad in content and not ('"' + old_bad + '"') in content:
    content = content.replace(old_bad, new_good)
    print("Fixed json string quotes for line 789")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)