# Offical Website for aKDPhi, Omicron Chapter

by web developer, riri :)

## Deployment Instructions

### Using Vercel CI/CD
This repository is linked to Vercel. Every time a new commit is pushed to the `main` branch, Vercel automatically deploys the changes. However, the actual app is located inside the `slo-akdphi` directory.

1. **Vercel Configuration:**
   - Ensure the **Root Directory** in the Vercel settings is set to `slo-akdphi`. (enabled)

2. **Automatic Deployment:**
   - Push changes to the `main` branch.
   - Vercel will build and deploy from the `slo-akdphi` directory.

3. **Verify Deployment:**
   - Visit the deployment URL in the Vercel dashboard to check your changes.

---

### Manual Deployment (Using Vercel CLI)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
2. **Navigate to Project Directory**
    ```bash
   cd slo-akdphi

3. **Deploy the App**
    ```bash
    vercel

4. **Production Deployment:**
    ```bash
    vercel --prod