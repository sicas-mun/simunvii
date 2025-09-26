# 🌍 SIMUN VII Official Website

Welcome to the **SIMUN VII (SICAS Model United Nations 2025) website repository**.  
This project powers the official site for **SICAS Liberty Campus MUN conference, Oct 24–26, 2025**.

🔗 **Live Website:** [https://sicas-mun.github.io/simunvii/index.html](https://sicas-mun.github.io/simunvii/index.html)  
📦 **GitHub Repo:** [https://github.com/sicas-mun/simunvii](https://github.com/sicas-mun/simunvii)

---

## 📂 Project Structure

```

simunvii/
│
├── index.html          # Homepage
├── committees.html     # Committees page
├── studyguides.html    # Study Guides page
├── register.html       # Registration page
│
├── css/
│   ├── style.css       # Main styles
│   ├── committees.css  # Committees page styles
│   ├── register.css    # Registration page styles
│
├── js/
│   └── script.js       # Navbar + interactivity
│
├── images/             # Logos, backgrounds, committee banners
│
└── README.md           # Project documentation

````

---

## 🚀 Features

- 📱 **Responsive design** (mobile, tablet, desktop)  
- 🍔 **Hamburger navigation** (works on all pages)  
- 🖼️ **Parallax hero section**  
- 📑 **Dedicated pages** for Committees, Study Guides, and Registration  
- 🎨 **Custom CSS** per section for flexibility  
- 🔗 **Integration with Google Forms** for registrations  

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sicas-mun/simunvii.git
cd simunvii
````

### 2. Open Locally

You can open directly in a browser:

```bash
open index.html
```

Or serve with a lightweight dev server (recommended):

```bash
# If you have Node.js installed
npx serve
```

Then visit `http://localhost:3000`.

---

## 🌐 Deployment

The site is **static HTML + CSS + JS**, so it can be deployed easily:

* **GitHub Pages** (already set up)
  Repo → Settings → Pages → Deploy from `main` branch.
  ✅ Live at: [https://sicas-mun.github.io/simunvii/index.html](https://sicas-mun.github.io/simunvii/index.html)

* **Alternative hosting** (Netlify, Vercel, school server, etc.) — just drag the repo folder.

---

## 👩‍💻 Contribution Guidelines

1. **Branching**

   * `main` → always stable
   * Feature work → create a new branch (`feature/navbar-fix`, `feature/new-hero`)
   * Submit Pull Requests → reviewed before merge

2. **Coding Style**

   * Keep `id` and `class` names consistent (`hamburger`, `nav-links`, `hero`)
   * Follow mobile-first responsive design
   * Store **page-specific CSS** in its own file (`committees.css`, `register.css`)
   * Avoid inline styles unless absolutely necessary

3. **Assets**

   * Place all images in `/images`
   * Optimize large images before committing

---

## 📢 Sharing the Repo

* **Internal IT Team:** Share the GitHub repo link → [https://github.com/sicas-mun/simunvii](https://github.com/sicas-mun/simunvii)
* **Public Visitors:** Live site available at → [https://sicas-mun.github.io/simunvii/index.html](https://sicas-mun.github.io/simunvii/index.html)

---

## 📜 License

This project is maintained by the **SIMUN VII IT Team**.
For official use only. Not for redistribution outside SIMUN.

---
