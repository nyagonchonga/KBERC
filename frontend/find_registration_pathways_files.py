import os

print("=== SEARCHING FOR REGISTRATION PATHWAYS FILES ===")
for root, dirs, files in os.walk("src"):
    for file in files:
        if "registration" in file.lower() or "register" in file.lower() or "pathway" in file.lower():
            path = os.path.join(root, file)
            print(f"- {path}")
