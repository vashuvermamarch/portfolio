# 🚀 QUICK START GUIDE - Portfolio Website

## Prerequisites Check ✅

Before starting, make sure you have:
1. Node.js installed (version 16+)
   - Check: Open terminal and run `node --version`
   - If not installed: Download from https://nodejs.org/

2. A code editor (VS Code recommended)
   - Download from: https://code.visualstudio.com/

## Step-by-Step Setup 📝

### STEP 1: Organize Your Files

1. Create a new folder on your computer called `portfolio-website`
2. Copy ALL the following files into that folder:
   - App.jsx
   - App.css
   - main.jsx
   - index.html
   - package.json
   - vite.config.js
   - tailwind.config.js
   - postcss.config.js
   - README.md

3. Create these folders inside `portfolio-website`:
   - `components/` (put Navbar.jsx here)
   - `pages/` (put Home.jsx, About.jsx, Projects.jsx, Contact.jsx here)

### STEP 2: Open Terminal

#### On Windows:
1. Open the `portfolio-website` folder
2. Right-click in the folder
3. Select "Open in Terminal" or "Git Bash Here"

#### On Mac:
1. Open Terminal app
2. Type `cd ` (with a space)
3. Drag the `portfolio-website` folder into Terminal
4. Press Enter

### STEP 3: Install Everything

Copy and paste this command in terminal:

```bash
npm install
```

⏳ Wait 2-3 minutes for installation to complete.

You should see a `node_modules` folder appear.

### STEP 4: Start the Website

Run this command:

```bash
npm run dev
```

🎉 Your browser should automatically open with your portfolio!

If it doesn't, open your browser and go to: `http://localhost:3000`

### STEP 5: Make Changes

1. Open the project in VS Code:
   - File → Open Folder → Select `portfolio-website`

2. Edit your information:
   - `pages/Home.jsx` - Change name and description
   - `pages/About.jsx` - Update skills and education
   - `pages/Projects.jsx` - Add your projects
   - `pages/Contact.jsx` - Update contact info

3. Save the file (Ctrl+S or Cmd+S)
4. The website updates automatically! 🔄

### STEP 6: Stop the Server

When you're done:
- Press `Ctrl + C` in the terminal
- Type `y` and press Enter

## Common Commands 🔧

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `Ctrl + C` | Stop the server |

## Customization Checklist ✏️

Use this checklist to customize your portfolio:

### Personal Information
- [ ] Update name in `pages/Home.jsx`
- [ ] Update bio in `pages/About.jsx`
- [ ] Update education in `pages/About.jsx`
- [ ] Update skills in `pages/About.jsx`
- [ ] Add certifications in `pages/About.jsx`

### Links & Contact
- [ ] Update email in `pages/Contact.jsx`
- [ ] Update LinkedIn URL in `components/Navbar.jsx`
- [ ] Update GitHub username in `pages/Projects.jsx`
- [ ] Update all social links in `pages/Contact.jsx`

### Projects
- [ ] Add featured projects in `pages/Projects.jsx`
- [ ] Update GitHub username for API in `pages/Projects.jsx`

### Visual Customization
- [ ] Change colors in `tailwind.config.js` (optional)
- [ ] Update page title in `index.html`
- [ ] Add favicon/logo (optional)

## Troubleshooting 🔍

### Problem: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Problem: Port 3000 is already in use
**Solution:** 
1. Open `vite.config.js`
2. Change port: `port: 3001`
3. Save and run `npm run dev` again

### Problem: Changes not showing
**Solution:**
1. Save the file (Ctrl+S)
2. Refresh browser (F5)
3. Clear browser cache (Ctrl+Shift+Delete)

### Problem: Module errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Build fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force
npm install
npm run build
```

## Next Steps 🎯

After setting up:

1. **Test Everything:**
   - [ ] All pages load correctly
   - [ ] Links work
   - [ ] Forms work
   - [ ] Animations play smoothly
   - [ ] Responsive on mobile

2. **Deploy Online:**
   - Option 1: Vercel (easiest) - See deployment section
   - Option 2: Netlify
   - Option 3: GitHub Pages

3. **Share Your Portfolio:**
   - Add to LinkedIn
   - Add to resume
   - Share with potential employers

## Need Help? 🆘

If you're stuck:

1. Check the main README.md for detailed docs
2. Read error messages carefully - they usually tell you what's wrong
3. Google the error message
4. Check Node.js and npm versions:
   ```bash
   node --version
   npm --version
   ```

## File Structure Reference 📂

Your folder should look like this:

```
portfolio-website/
├── node_modules/        (created after npm install)
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
├── App.css
├── main.jsx
├── index.html
├── package.json
├── package-lock.json    (created after npm install)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Quick Reference Card 📋

**To start working:**
```bash
cd portfolio-website
npm run dev
```

**To stop:**
```
Ctrl + C
```

**To build for deployment:**
```bash
npm run build
```

**Files are saved in:** `dist/` folder

---

Good luck with your portfolio! 🚀✨
