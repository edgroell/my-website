# Ed Groell — Personal Website

Live: **https://www.edgroell.com**

A lightweight static website showcasing my portfolio, advocacy work, and poetry. Built with HTML, CSS, and JavaScript—no build tools required.

---

## 📋 Table of Contents
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Local Development](#-local-development)
- [Editing Content](#-editing-content)
- [Deployment](#-deployment)
- [Credits](#-credits)

---

## 🛠 Tech Stack

- **HTML5, CSS3, JavaScript** (vanilla—no frameworks)
- **Fonts:** Google Fonts (Open Sans)
- **Icons:** Font Awesome 6
- **JavaScript Libraries:**
  - jQuery 1.8.3
  - WOW.js (scroll animations)
  - Featherlight (lightbox gallery)
  - Enllax (parallax effects)
  - Waypoints (scroll tracking)
  - StickyNavbar (fixed header)
  - ScrollUp (back-to-top)
  - jQuery Easing

---

## 📁 Project Structure

```
my-website/
├── index.html              # Homepage (single-page with anchored sections)
├── my-poetry.html          # Poetry repository (standalone, not linked in nav)
├── CNAME                   # Custom domain configuration for GitHub Pages
├── css/
│   ├── style.css           # Main stylesheet
│   ├── namari-color.css    # Color scheme
│   └── animate.css         # Animation utilities
├── images/
│   ├── logo.png            # Header logo (banner view)
│   ├── logo-2.png          # Header logo (sticky nav)
│   ├── favicon.ico
│   ├── banner-images/
│   │   └── banner-image-1.jpg
│   ├── company-images/     # Tech stack logos
│   ├── gallery-images/
│   └── user-images/
├── js/
│   ├── jquery.1.8.3.min.js
│   ├── site.js             # Custom site scripts
│   └── [other libraries]
└── fonts/                  # Font Awesome webfonts
```

---

## 📄 Pages

### Homepage (`index.html`)
Single-page layout with navigable sections:
- **#banner** — Hero section with tagline
- **#about** — About me
- **#profile** — Professional profile
- **#stack** — Core tech stack (logos)
- **#advocacy** — Advocacy initiatives
- **#contact** — Contact form/info

### Poetry Page (`my-poetry.html`)
- A standalone page showcasing my poetry collection
- **Not linked** from the homepage navigation (intentionally private/direct-access only)
- Uses a responsive 3-column CSS Grid layout
- Navigation links point back to `index.html#section` anchors

---

## 💻 Local Development

### Option 1: VS Code Live Preview (Recommended)
1. Install the **Live Preview** extension by Microsoft
2. Open this folder in VS Code
3. Right-click `index.html` → **"Open with Live Preview"**

### Option 2: Simple HTTP Server

**Python:**
```powershell
python -m http.server 5500
```

**Node.js:**
```powershell
npx serve@latest -l 5500
```

Then open: `http://localhost:5500/index.html`

---

## ✏️ Editing Content

### Update Header/Navigation
- **Logo images:** `images/logo.png` (banner), `images/logo-2.png` (sticky nav)
- **Social links:** Edit the `<ul class="social-icons">` blocks in each HTML file
- **Nav menu:** Update `<nav id="nav-main">` in `index.html`

### Banner Background
- Image: `images/banner-images/banner-image-1.jpg`
- CSS: Set in `css/style.css` under `#banner` with `background-size: cover`

### Tech Stack Icons
- Located in `images/company-images/company-logo1.png` through `company-logo9.png`
- Edit markup in the `#stack` section of `index.html`
- Icon size is controlled by CSS rule: `.col-3 img[src*="company-logo"]`

### Poetry Page Layout
The `my-poetry.html` page uses a responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile).

**Add a new poem:**
```html
<article class="poem">
    <h4><b>Poem Title —</b></h4>
    <p>
        Line one of the poem<br>
        Line two of the poem<br>
        Line three of the poem<br>
    </p>
</article>
```

- Keep all poems inside the `<div class="poems-grid">` container
- Use `<br>` for line breaks within stanzas
- Styling is defined in the inline `<style>` block of `my-poetry.html`

### Colors & Styling
- Main colors: `css/namari-color.css`
- Layout & typography: `css/style.css`
- Accent color (gold): `#d4b24a`

---

## 🚀 Deployment

### GitHub Pages (Current Setup)
1. Push changes to the `main` branch
2. GitHub Pages automatically serves from the root directory
3. Custom domain configured via `CNAME` file

### Custom Domain Setup
The site uses a custom domain (`edgroell.com`) with GitHub Pages:
1. Add `CNAME` file with your domain name
2. Configure DNS:
   - Add a `CNAME` record pointing to `edgroell.github.io`
   - Or use `A` records for apex domain pointing to GitHub Pages IPs
3. Enable HTTPS in GitHub Pages settings (automatic with custom domain)

### Manual Deployment
You can host this site on any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps

Simply upload all files as-is—no build step needed.

---

## 📝 Credits

**Design & Development:** Ed Groell  
**Template Inspiration:** Namari Landing Page (heavily customized)  
**Icons:** Font Awesome  
**Fonts:** Google Fonts (Open Sans)

### Third-Party Libraries
- jQuery: MIT License
- WOW.js: MIT License
- Featherlight: MIT License
- All other JS libraries retain their original licenses

---

## 📫 Contact

- **Website:** https://www.edgroell.com
- **LinkedIn:** https://www.linkedin.com/in/edgroell/
- **GitHub:** https://github.com/edgroell
- **Bluesky:** https://bsky.app/profile/edgroell.com

---

## 📄 License

Site content (text, images, poetry) © Ed Groell. All rights reserved.

Third-party libraries and assets are subject to their respective licenses.

---

**Made with ❤️ by Ed Groell**
