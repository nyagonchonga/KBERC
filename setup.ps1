# Setup script for K-BELIR Platform

Write-Host "Creating K-BELIR Platform Backend..."
mkdir backend -Force
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install fastapi uvicorn pydantic networkx 
cd ..

Write-Host "Creating K-BELIR Platform Frontend..."
# Run non-interactive create-next-app
npx create-next-app@latest frontend --ts --eslint --tailwind --src-dir --app --import-alias "@/*" --use-npm --yes

Write-Host "Setup complete!"
