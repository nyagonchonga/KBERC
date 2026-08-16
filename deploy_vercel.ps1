# K-BELIR Platform - Vercel Automated Pre-Flight & Live Deployment Script
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " K-BELIR PLATFORM - VERCEL PRE-FLIGHT CHECK & DEPLOYMENT  " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Type Checking Gate
Write-Host "`n[1/3] Running TypeScript compilation check (npx tsc --noEmit)..." -ForegroundColor Yellow
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[ERROR] TypeScript validation failed! Aborting deployment." -ForegroundColor Red
    exit 1
}
Write-Host "[SUCCESS] TypeScript type check passed cleanly!" -ForegroundColor Green

# 2. Production Build Gate
Write-Host "`n[2/3] Executing production build (npm run build)..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[ERROR] Production build failed! Aborting deployment." -ForegroundColor Red
    exit 1
}
Write-Host "[SUCCESS] Production Next.js build completed successfully!" -ForegroundColor Green

# 3. Vercel Live Deployment Trigger
Write-Host "`n[3/3] Deploying to Vercel Live Production (npx vercel --prod)..." -ForegroundColor Yellow
npx vercel --prod

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " DEPLOYMENT COMPLETE! K-BELIR Platform is now live.       " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
