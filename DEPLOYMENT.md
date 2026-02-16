# 🚀 Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## Option 1: Vercel (Recommended - Easiest) ⭐

Vercel is the easiest and fastest way to deploy your React portfolio.

### Method A: Using Vercel Website (No CLI needed)

1. **Create Account:**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project:**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Connect your GitHub account
   - Select your portfolio repository

3. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Method B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd portfolio-website

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? portfolio-website
# - In which directory is your code located? ./
# - Want to override settings? No

# Your site is deployed! 🎉
```

### Custom Domain on Vercel:

1. Go to your project dashboard
2. Settings → Domains
3. Add your domain
4. Update DNS records with your domain provider

---

## Option 2: Netlify

### Method A: Drag & Drop (Easiest)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to https://netlify.com
   - Sign up/Login
   - Drag and drop the `dist` folder onto the Netlify dashboard
   - Your site is live!

### Method B: Git Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Custom Domain on Netlify:

1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions

---

## Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://vashuvermamarch.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     plugins: [react()],
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: gh-pages branch
   - Your site will be at: https://vashuvermamarch.github.io/portfolio

---

## Option 4: Render

1. **Push to GitHub** (if not already)

2. **Create Render Account:**
   - Go to https://render.com
   - Sign up with GitHub

3. **New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your repository

4. **Configure:**
   - Name: portfolio-website
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run preview`
   - Advanced → Add environment variable:
     - Key: `NODE_VERSION`
     - Value: `18`

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment

---

## Option 5: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```
   - Use existing project or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - Automatic builds with GitHub: Optional

4. **Build and Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Comparison Table

| Platform | Difficulty | Speed | Free Tier | Custom Domain |
|----------|-----------|-------|-----------|---------------|
| Vercel | ⭐ Easy | ⚡ Fast | Yes | Yes (Free) |
| Netlify | ⭐ Easy | ⚡ Fast | Yes | Yes (Free) |
| GitHub Pages | ⭐⭐ Medium | ⚡ Fast | Yes | Yes (Free) |
| Render | ⭐⭐ Medium | 🐌 Slower | Yes | Yes (Paid) |
| Firebase | ⭐⭐⭐ Advanced | ⚡ Fast | Yes | Yes (Free) |

## Post-Deployment Checklist ✅

After deploying, check:

- [ ] All pages load correctly
- [ ] Images and assets load
- [ ] Links work (internal and external)
- [ ] Forms submit properly
- [ ] GitHub API integration works
- [ ] Mobile responsive
- [ ] SEO meta tags are correct
- [ ] Analytics (if added) works

## Environment Variables

If you need API keys (e.g., for EmailJS):

### Vercel:
- Settings → Environment Variables
- Add your variables
- Redeploy

### Netlify:
- Site settings → Build & deploy → Environment
- Add variables
- Trigger deploy

### In Code:
```javascript
// Access environment variables
const apiKey = import.meta.env.VITE_API_KEY;
```

## Custom Domain Setup

### General Steps:

1. **Buy a domain** (from GoDaddy, Namecheap, etc.)

2. **Add to platform:**
   - Vercel/Netlify: Add in dashboard
   - Get the DNS records

3. **Update DNS:**
   - Go to your domain registrar
   - Add A record or CNAME
   - Point to your platform's address

4. **Wait for propagation** (up to 24 hours)

## Continuous Deployment

Most platforms support automatic deployment:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. **Automatic deploy:**
   - Vercel/Netlify/Render automatically rebuild
   - Check deployment status in dashboard

## Performance Optimization

Before deploying:

1. **Optimize images:**
   ```bash
   npm install --save-dev vite-plugin-imagemin
   ```

2. **Enable compression** (usually automatic)

3. **Add analytics:**
   - Google Analytics
   - Vercel Analytics
   - Plausible

4. **Test performance:**
   - https://pagespeed.web.dev/
   - Lighthouse in Chrome DevTools

## SSL/HTTPS

All recommended platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic (for custom domains too)

## Troubleshooting Deployment Issues

### Build Fails:

```bash
# Local test
npm run build

# Check for errors
# Fix any issues in code
```

### 404 Errors on Refresh:

Add to `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Or `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Assets Not Loading:

Check `vite.config.js` base URL:
```javascript
export default defineConfig({
  base: '/', // For custom domain
  // OR
  base: '/repository-name/', // For GitHub Pages
})
```

## Monitoring

After deployment:

1. **Set up monitoring:**
   - Uptime Robot (free)
   - Pingdom
   - StatusCake

2. **Check regularly:**
   - Site loads correctly
   - Forms work
   - API integrations function

## Updating Your Site

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Platform auto-deploys (or run deploy command)

---

## Quick Deploy Commands

```bash
# Vercel
vercel

# Netlify (after setup)
netlify deploy --prod

# GitHub Pages
npm run deploy

# Firebase
firebase deploy

# Build only (for drag & drop)
npm run build
```

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

Congratulations! Your portfolio is now live! 🎉🚀
