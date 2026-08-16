# K-BELIR Platform

Comprehensive regulatory, statutory, and architectural analysis platform built with Next.js, React, TailwindCSS, and Recharts.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/k-belir-platform)

---

## 🚀 Quick Start

First, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Vercel Live Deployment

This platform is pre-configured with production-ready Vercel settings (`vercel.json`, `.vercelignore`, and `.env.example`).

### Option 1: Automated Pre-Flight & Deploy Script (Recommended)
Run the automated PowerShell deployment script which validates TypeScript types, executes a production build, and deploys directly to Vercel:

```powershell
npm run deploy
```

### Option 2: Vercel CLI
Deploy directly via Vercel CLI from your terminal:

```bash
# Preview Deployment
npx vercel

# Production Live Deployment
npx vercel --prod
```

### Option 3: Git Integration
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect the **Next.js** framework and deploy on every `main` push.

---

## ⚡ Deployment Configuration Files

- [`vercel.json`](./vercel.json): Custom security headers (`X-Frame-Options`, `CORS`, `CSP`), Next.js routing, and static asset caching.
- [`.vercelignore`](./.vercelignore): Excludes development scripts, local data logs, and non-production files to minimize deploy payload size.
- [`.env.example`](./.env.example): Environment variable keys required for Vercel production environments.
- [`deploy_vercel.ps1`](./deploy_vercel.ps1): Automated pre-flight validation gate and Vercel CLI runner.

---

## 🧪 Verification & Build Checks

Before pushing to production, run pre-flight type checks locally:

```bash
npx tsc --noEmit
npm run build
```
