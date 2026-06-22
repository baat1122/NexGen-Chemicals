# NexGen Chemicals - Pakistani Agricultural Web Application

Welcome to the official codebase for the **NexGen Chemicals** web application. This platform is a high-performance, SEO-optimized static multi-page site customized for the agricultural sector in Pakistan (focusing on Punjab, Sindh, and other regional farming hubs). It features fluid micro-interactions, responsive grids, a dual-mode theme engine, a localized WhatsApp consultation widget, and a dynamic nested product catalogue.

---

## 1. Directory Structure

The project has been organized for ease of maintenance, speed of page loads, and direct compatibility with static hosting (such as GitHub Pages, Netlify, Vercel, or standard enterprise servers):

```
/
├── index.html                  # Homepage (Hero, Marquee, Scroller, Crop Portfolio, Testimonials, Blogs)
├── products.html               # Products Catalog (Real-time search, category filters)
├── product-detail.html         # Dynamic Product Overview (Dosage tables, safety checklists, 3D float)
├── about.html                  # About Us Page (Vision, manufacturing plants, research values)
├── crops.html                  # Crops Advisor Page (Gandum, Basmati Dhaan, Sugarcane, Mango/Citrus)
├── seeds.html                  # Seeds Page (Seed protection guidelines, Beej Upchaar workflows)
├── careers.html                # Careers Page (Open positions in sales, QC labs, and agronomy)
├── contact.html                # Contact Us Page (Factory address, helpline click-to-call, contact form)
├── README.md                   # System configuration and user instructions
├── vite.config.js              # Vite configuration (For modular ES bundling)
├── package.json                # Project dependencies (Vite dev server scripts)
├── serve.py                    # Python development server utility
└── assets/
    ├── css/
    │   ├── style.css           # Global theme variables, reset, header navigation, mega-menu, footer
    │   ├── home.css            # Home-specific section animations, scrollers, grids, and marquees
    │   └── products.css        # Product grid card layouts, dosage tables, safety lists
    ├── js/
    │   ├── main.js             # Theme engine toggle, WhatsApp popup bubble timers
    │   ├── home.js             # Sticky index indicators, expanding grids, reviews carousel slider
    │   ├── inventory.js        # Detailed data array for all 7 pesticide categories
    │   └── products.js         # Real-time search query matching and dynamic details page parsing
    └── images/
        # 15 High-definition visual assets (Farmer, sprouts, crops, avatars, blog cards)
```

---

## 2. Key Features & Implementations

### A. Global Theme Engine (Day/Night Mode)
- **Contrast Control**: Toggled instantly via the persistent floating action button in the viewport.
- **Light Theme**: Off-White (`#FFFFFF`/`#F9F9F9`) background, Jet Black (`#000000`) text, Forest Green accents.
- **Dark Theme**: Agrochemical Deep-Slate (`#121814`) background, Pure White (`#FFFFFF`) text, Sage Green accents.
- **Persistence**: Remembers preference across pages via `localStorage`.

### B. WhatsApp Communication Widget
- Fixed action phone: `+923008990026`.
- Embedded widget link next to the main navigation menu.
- timed pop-up notification window triggers exactly **4 seconds after page load** with a welcoming message in Roman Urdu for regional client trust:
  > *"Assalam-o-Alaikum! NexGen Chemicals me khushamdeed. Aaj hum aapki fasal ke liye kis tarah behtareen solution faraham kar sakte hain?"*

### C. Services Scroll Spy (01 - 07)
- Located on the homepage. As the user scrolls vertically through the product categories, the left-hand static index list (`01` to `07`) automatically detects the active section using `IntersectionObserver` and highlights it, accompanied by a smooth image cross-slide animation.

### D. Crops Grid Expansion
- Replicates the Framer-style staggered transitions. The crops grid (Wheat, Rice, Sugarcane, Orchards) begins in a 2-column layout and expands into a full 4-block grid once scrolled into view.

### E. Products Catalog & Specifications Page
- Dynamic catalog matching category tag buttons (Herbicide, Insecticide, Fungicide, Seedcare, Biologicals, Bio-Stimulants, Specialty Nutrition) and real-time text input matching.
- Details page uses URL query string parsing (`product-detail.html?product=weedout-pro`) to display active chemical ingredients, dosage rate charts for specific local crops, and safety checklists.
- Packshot image features a floating 3D micro-hover loop animation.

---

## 3. High-Definition Visual Assets

The project utilizes 15 high-quality, customized agricultural assets loaded under `/assets/images/`:
- `hero_farmer.png`: Smiling Pakistani grower in a basmati field holding a branded NexGen bottle.
- `micro_sprouts.png`, `micro_lab.png`, `micro_leaf.png`: Ticker slider foreground images.
- `crop_wheat.png`, `crop_rice.png`, `crop_sugarcane.png`, `crop_orchard.png`: Local crop portfolio assets.
- `avatar_asif.png`, `avatar_tariq.png`, `avatar_nabeel.png`: Grower testimonial faces.
- `blog_wheat.png`, `blog_cotton.png`, `blog_biologicals.png`: Knowledge hub article thumbnails.
- `product_packshot.png`: White minimal studio render for pesticide container mockup packs.

---

## 4. Local Testing & Deployment

### Direct File Execution (Zero Setup)
All scripts and styles use relative directories. To review the website, simply double-click **`index.html`** in your file manager. The catalog search, details views, and theme engines are configured to bypass browser CORS checks.

### Production Build (Optional)
If you have Node.js installed, you can build an optimized bundle:
1. Open terminal in the directory and run:
   ```bash
   npm install
   npm run build
   ```
2. The compiled assets will be outputted to `/dist`, ready to copy directly to a web host.
