# Vashu Verma - Portfolio Website 🚀

A modern, animated portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- ✨ Smooth animations using Framer Motion
- 🎨 Modern gradient design with Tailwind CSS
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔗 GitHub API integration for live repository display
- 💼 Project showcase with featured projects
- 📧 Contact form with validation
- 🌐 Multi-page navigation with React Router
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### Step 1: Clone or Download the Project

If you have the project files in a folder, navigate to it:
```bash
cd portfolio-project
```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

Or if you use yarn:
```bash
yarn install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The website will open automatically at `http://localhost:3000`

### Step 4: Build for Production

When you're ready to deploy:

```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

This creates an optimized production build in the `dist` folder.

## 📁 Project Structure

```
portfolio-project/
├── components/
│   └── Navbar.jsx          # Navigation bar component
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── About.jsx           # About page with skills & education
│   ├── Projects.jsx        # Projects showcase with GitHub API
│   └── Contact.jsx         # Contact form and information
├── App.jsx                 # Main app component with routing
├── App.css                 # Global styles
├── main.jsx                # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Customization Guide

### Update Personal Information

1. **In `pages/Home.jsx`:**
   - Update name, title, and description
   - Modify stats (years, projects, certifications)

2. **In `pages/About.jsx`:**
   - Update bio text
   - Add/remove skills in the `skills` array
   - Update certifications in the `certifications` array
   - Update education details

3. **In `pages/Projects.jsx`:**
   - Add your projects to `featuredProjects` array
   - Update GitHub username in the API call

4. **In `pages/Contact.jsx`:**
   - Update contact information in `contactInfo` array
   - Integrate with your email service (optional)

5. **In `components/Navbar.jsx`:**
   - Update social media links

### Change Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Modify Animations

Animations are handled by Framer Motion. You can customize them in each component:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 📧 Contact Form Integration

To make the contact form functional, you can integrate with:

1. **EmailJS** - Free email service
2. **FormSpree** - Simple form backend
3. **Netlify Forms** - If deployed on Netlify
4. **Your own backend API**

Example with EmailJS:

```bash
npm install @emailjs/browser
```

Update `pages/Contact.jsx` with EmailJS configuration.

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is already in use, modify `vite.config.js`:

```javascript
server: {
  port: 3001, // Change to any available port
}
```

### GitHub API Rate Limit

The GitHub API has rate limits. If you're fetching too frequently:
- Add authentication token
- Cache the results
- Reduce fetch frequency

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear cache: `npm cache clean --force`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌟 Performance Tips

1. **Lazy Loading**: Use React.lazy() for route-based code splitting
2. **Image Optimization**: Compress images before adding
3. **Bundle Analysis**: Use `vite-plugin-visualizer` to analyze bundle size
4. **CDN**: Host images on a CDN for faster loading

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Vashu Verma**
- Email: karanverma24march@gmail.com
- LinkedIn: [Vashu Verma](https://www.linkedin.com/in/vashuverma-61a70a316)
- GitHub: [@vashuvermamarch](https://github.com/vashuvermamarch/)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Vite for lightning-fast builds

---

Made with ❤️ by Vashu Verma
