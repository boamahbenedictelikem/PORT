# Benedict Boamah Elikem | Crafting the Future of Tech

> A modern, responsive portfolio showcasing an Information Technology student's journey, practical experience, projects, and active exploration across the computing space. Built with clean HTML, CSS, and vanilla JavaScript—zero bloat, no external frameworks required.

---

## About This Portfolio

This is the personal portfolio website of **Benedict Boamah Elikem**, a Technology Explorer and Digital Problem Solver based in **Accra, Ghana**. The site demonstrates:

- **Technical Systems & IT Support** – 2+ years of hands-on IT support, hardware/software diagnostics, network troubleshooting, and systems administration
- **Software & Web Exploration** – Practical development with HTML5, CSS3, JavaScript, React, Python, Java, and applied AI workflows
- **Adaptability & Growth Mindset** – Actively exploring computing disciplines, dedicated to continuous learning, and solving real-world challenges

The portfolio highlights:
- **Hands-On Experience** in IT support, systems maintenance, and operational administration
- **Core Competencies** across operating systems, software engineering fundamentals, and digital tools
- **Education** at the University of Ghana (BSc Information Technology, expected 2028)
- **Featured Projects**:
  - **DCIT 209: E-Commerce Platform Architecture** (5-page responsive architecture modeled for University of Ghana coursework)
  - **AI Application Prototype** (Interactive conversational AI prototype engineered with Google AI Studio)
- **Verified Certifications** from Simplilearn, Sololearn, ERASEL, and OPSWAT Academy

---

## ✨ Features

✓ **Fully responsive** – Optimized across mobile, tablet, and desktop (including 1024×768 resolution without horizontal scrolling)  
✓ **Dark / Light mode switch** – Smooth theme toggling with system preference detection and `localStorage` persistence  
✓ **Interactive case study modals** – In-depth project walkthroughs without page jumps  
✓ **Accessibility-first** – WCAG 2.1 compliant, semantic HTML5 landmarks, keyboard navigation (`Escape` to close modals), screen reader support  
✓ **Fast & lightweight** – Zero external runtime dependencies, 100% vanilla HTML, CSS, and JS  
✓ **Synchronized CV page** – Styled curriculum vitae with quick "Back to Portfolio" navigation and print-to-PDF support  
✓ **One-click Copy Email** – Resilient multi-layer clipboard copy with animated toast notification feedback  
✓ **Active scroll spy** – Smooth section highlighting in navigation as you scroll  
✓ **SEO & Social Previews** – Open Graph, Twitter Cards, and custom branded SVG favicon  
✓ **Contact form** – Connected to Formspree with real-time field validation  

---

## 📁 Project Structure

```
Portofolio Website/
├── index.html          # Main portfolio landing page & interactive case study modals
├── cv.html             # Harmonized & printable Curriculum Vitae
├── styles.css          # Unified design system & responsive layout
├── script.js           # Theme switcher, scroll spy, modal controller & toast
├── server.js           # Lightweight local development server
├── favicon.svg         # Branded vector monogram favicon
├── profile-picture.png # Benedict's professional photo
├── CNAME               # Custom domain config (benedictboamah.tech)
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Option 1: Run with Node.js (Recommended)
```bash
node server.js
```
Then navigate to `http://localhost:3000/`.

### Option 2: Open Directly in Browser
Simply double-click `index.html` to open it in your default browser.

### Option 3: Using Python
```bash
python -m http.server 8000
```
python -m SimpleHTTPServer 8000
```

#### Using Node.js with `http-server`:
```bash
npx http-server
```

#### Using PHP:
```bash
php -S localhost:8000
```

Then open your browser and visit:
```
http://localhost:8000
```

---

## 🎨 Design Highlights

### Color Palette
- **Primary accent**: Warm orange/rust (`#d87854`) for CTAs and highlights
- **Background**: Warm beige (`#f4f0e8`)
- **Text**: Deep teal (`#18302e`)
- **Muted**: Soft gray (`#64716d`)
- **Surfaces**: White with subtle borders

### Typography
- **Display fonts**: Space Grotesk (modern, geometric)
- **Body text**: DM Sans (readable, clean)
- **Font sizes**: Fluid scaling with CSS `clamp()`

### Responsive Breakpoints
- **Desktop**: 1180px max container width
- **Tablet**: Adjusted 2-column grids collapse to 1-column
- **Mobile**: Full-width, hamburger menu, optimized touch targets

---

## 📄 Sections Overview

### 1. **Home / Hero**
- Large headline with accent color
- Professional photo with decorative orbit frames
- Call-to-action buttons
- Key descriptors (product thinking, visual craft, technical curiosity)

### 2. **About Me**
- Background and current role
- Highlight stats (years of experience, graduation year, location)
- Foundation for understanding Benedict's journey

### 3. **Experience**
- Two key roles:
  - **IT Support Assistant** (Dec 2023–Present) at ERASEL Digital Hub
  - **Administrative Assistant** (Sep–Dec 2023) at OLIVES Mall
- Role tags highlighting key skills learned

### 4. **Projects**
- Three projects showcasing design thinking:
  - **AI Application** (completed) – User flow testing and problem solving
  - **Mobile App Redesign** (coming soon)
  - **User Flow Study** (in progress)

### 5. **Skills & Certifications**
- **Design skills**: Graphic design, UX thinking, problem solving, AI tools
- **Technical skills**: HTML, CSS, JavaScript, React, Python, Node.js
- **Certifications**: AI literacy, prompt engineering, Python developer, critical infrastructure protection

### 6. **Education**
- Current: BSc Information Technology (University of Ghana, 2028)
- Previous: WASSCE General Science (2023)

### 7. **Contact**
- Direct contact details (email, phone, LinkedIn)
- Fully functional contact form with:
  - Real-time validation
  - Accessible form fields
  - User-friendly error messages
  - Success confirmation

### 8. **Footer**
- Copyright year (auto-updated)
- Back-to-top link

---

## 🛠️ Customization

### Update Personal Information
Edit `index.html` to replace:
- Name and headline
- Photo path: `images/profile picture.png`
- Email: `boamahbenedictelikem@gmail.com`
- Phone: `+233594630626`
- LinkedIn: `linkedin.com/in/boamahelikem/`
- About text, experience, projects, skills, education

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --bg: #f4f0e8;         /* Main background */
  --text: #18302e;       /* Text color */
  --accent: #d87854;     /* Highlight/CTA color */
  --muted: #64716d;      /* Secondary text */
  --teal: #3f8179;       /* Alternative accent */
  --max: 1180px;         /* Max container width */
}
```

### Change Fonts
Replace Google Fonts imports in `index.html` `<head>` with your preferred typeface.

### Disable Animations
For users who prefer reduced motion, the CSS already respects `prefers-reduced-motion`. To fully disable animations, remove or comment out the `@keyframes` rules.

---

## 🌐 Technologies Used

- **HTML5** – Semantic markup, accessibility attributes
- **CSS3** – CSS Grid, Flexbox, CSS custom properties, media queries
- **JavaScript (Vanilla)** – Menu toggle, form validation, year auto-update
- **Google Fonts** – Space Grotesk, DM Sans typefaces
- **No dependencies** – Works offline, no build process required

---

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✓ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✓ ARIA labels and roles for interactive elements
- ✓ Keyboard navigation support (Tab, Enter, Esc)
- ✓ Focus indicators (2px outline)
- ✓ Color contrast meets WCAG AA standards
- ✓ Respects `prefers-reduced-motion` media query
- ✓ Form validation with accessible error messages
- ✓ Image alt text for all content images

---

## 📱 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✓ Full | Modern stable |
| Firefox | ✓ Full | Modern stable |
| Safari | ✓ Full | Version 14+ |
| Edge | ✓ Full | Modern stable |
| Mobile Safari (iOS) | ✓ Full | iOS 12+ |
| Chrome Mobile | ✓ Full | Modern stable |

---

## 📝 License

This portfolio is personal work. Feel free to use it as inspiration for your own portfolio, but please don't directly copy all content and rebrand as your own.

---

## 🤝 Support & Feedback

Have suggestions for improvements? Reach out to Benedict:

- **Email**: boamahbenedictelikem@gmail.com
- **LinkedIn**: [linkedin.com/in/boamahelikem](https://www.linkedin.com/in/boamahelikem/)
- **Location**: Accra, Ghana

---

## 📊 Future Enhancements

Potential improvements:
- [ ] Add project case studies with images/mockups
- [ ] Implement blog section for design thoughts
- [ ] Add dark mode toggle
- [ ] Integrate real email backend (Formspree, EmailJS, etc.)
- [ ] Add animation library (AOS for scroll-triggered animations)
- [ ] Implement smooth page transitions
- [ ] Add project filtering by category
- [ ] Create downloadable PDF resume

---

**Built with care by Benedict Boamah Elikem** – 2024
