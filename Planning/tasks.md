# eChook Website Redesign Tasks

This document tracks progress on the front‑end redesign of www.echook.uk.

## 1. Discovery & Audit
- [x] Reviewed existing site files (`index.html`, `nav.html`, CSS, scripts).
- [x] Identified reusable components: header, footer, logo, background.
- [x] Deleted `scrapbook.html` as per note.

## 2. UX / Visual Design
- [ ] Create wireframes for new homepage (desktop & mobile).
- [ ] Draft new copy emphasising hub-and-spoke, OMNI app, buying routes, educational value.
- [ ] Establish updated style guide (colors/palette, spacing, responsive breakpoints).

## 3. Front-end Implementation
- [ ] Set up project scaffolding, consider build tool.
- [x] Completely rewrote homepage from scratch; legacy content removed (carousel, "Past and Current eChookers", etc.).
- [x] Built layout components: header (retained), hero, spokes, how-it-works, education, footer with expanded links.
- [x] Created `css/redesign.css` with fresh styles for new sections.
- [x] Added stub `greenpower.html` and `3dprinting.html`; cleaned up obsolete JS/CSS includes.
- [x] Removed Bootstrap dependency and replaced navigation with lightweight flex layout.
- [x] Modernised CSS into SCSS file (`sass/redesign.scss`) for maintainability.
- [x] Cleaned up JavaScript; removed jQuery, added vanilla loader and active-link handling.
- [x] Added keyboard-focus styles and semantic markup for accessibility; reduced dependencies for performance.

## 4. Content & SEO
- [x] Rewrite homepage copy to generic brand messaging.
- [x] Move "How it works" and "Learn by Doing" sections to greenpower page with Greenpower‑specific content.
- [x] Add purchasing guidance and product overview to greenpower page using Planning/eChook_Overview.md as source.
- [x] Restructure greenpower page into card grid with links to full kit, accessories/shop, 3D prints and documentation.
- [x] Create 3dprinting page with cards for Greenpower prints, L‑Plate holder, and Clavinova feet; homepage 3D card now links here.
- [x] Added global background image and styled subpage heroes with tagline for distinction from header.
- [ ] Update remaining meta tags and page titles for other sections.
- [ ] Configure redirects if necessary.

## 5. Testing & Validation
- [ ] Cross-browser and responsive testing.
- [ ] Link validation.
- [ ] Performance audit (Lighthouse).

## 6. Deployment
- [ ] Use feature branch for development.
- [ ] Set up live preview (gh-pages/Netlify/local server).
- [ ] Deploy and monitor.

## 7. Future-proofing
- [ ] Document component structure for future spokes.


> **Notes**
> - Scrapbook page removed.
> - Logo, font, header styles and background must be retained throughout.

