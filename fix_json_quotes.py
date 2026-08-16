with open("src/app/viewer/data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Fix unquoted array string
old_bad = 'EBK and KBERC will operationalize joint consultation protocols under the Joint Co-ordination Forum to ensure seamless alignment between Cap 530 and this Act.'
new_good = '"EBK and KBERC will operationalize joint consultation protocols under the Joint Co-ordination Forum to ensure seamless alignment between Cap 530 and this Act."'

if old_bad in content and not ('"' + old_bad + '"') in content:
    content = content.replace(old_bad, new_good)
    print("Fixed json string quotes")

with open("src/app/viewer/data.ts", "w", encoding="utf-8") as f:
    f.write(content)