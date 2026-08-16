import urllib.request
import re

res = urllib.request.urlopen("http://localhost:3000/viewer/read")
html = res.read().decode("utf-8")

print("Length of HTML:", len(html))
# Find all a4-section-number in HTML
sec_matches = re.findall(r'a4-section-number.*?(\d+)\.', html)
print("Section numbers found in HTML:", sec_matches[:20])

# Check for Guiding principles
print("Does HTML contain 'Guiding principles'?", "Guiding principles" in html)