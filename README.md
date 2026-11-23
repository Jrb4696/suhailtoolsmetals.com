# Suhail Tools and Metals — website

One-page site for a demolition, dismantling and scrap-disposal contractor in Chennai.
React components are the templates; the build pre-renders them to plain static HTML, so the live
site ships no React, loads fast and is fully readable by search engines.

## Run it

```bash
npm install
npm run dev        # live editing at http://localhost:5173
npm run build      # static site in dist/ — upload that folder to any host
npm run preview    # serve dist/ locally to check the build
```

## Where things live

```
src/content/site.js     every word, number, photo and link on the site — edit here first
src/sections/*.jsx      one file per section, in page order (see src/App.jsx)
src/components/         header, footer, the drawn arrow
src/styles/page.css     the few page-specific sizes; everything else is the design system
public/assets/          the design system (system.css, layout, motion, moments) — do not edit
public/brand/           the final logo (from Logo Final/): logo-stacked*.svg are WF_Color/White/Black,
                        favicon.svg is WF_Favicon, logo-horizontal.svg is the header lockup built from WF_Color
public/photos/          WebP photos at 240/400/640/full widths (EXIF and location data removed)
public/video/           four site clips and their poster frames
media-originals/        the untouched original photos and videos (not published)
scripts/prerender.mjs   build step that turns the components into static HTML
scripts/prepare-photos.py  makes public/photos from media-originals (run after adding a photo)
```

To add or swap a photo: put the original in `media-originals/`, add one line to the list in
`scripts/prepare-photos.py`, run `python3 scripts/prepare-photos.py`, then use
`/photos/<name>.webp` in `src/content/site.js`.

Page order: hero · services · how a job runs · current projects · milestones · safety statement ·
video · equipment · quote form · close and footer. Each section is exactly one screen tall on a
laptop (two on a phone where needed).

## Still needed from the client

Search the code for `TODO(client)` — each one is marked where it plugs in.

| # | What | Where it goes | Until then |
|---|------|---------------|------------|
| 1 | **Form service address** (Formspree, Getform, Basin or own API) | `company.formEndpoint` in `site.js` | the form opens the visitor's mail app addressed to stmmadras@gmail.com |
| 2 | **Live domain** | `company.domain` and the canonical/og:image lines in `index.html` | no canonical link; share image path is relative |
| 3 | **Horizontal logo** — the header uses a side-by-side lockup re-arranged from WF_Color (mark + SUHAIL / TOOLS & METALS); swap in the designer's own if they make one | `public/brand/logo-horizontal.svg` | the re-arranged one |
| 4 | **Confirm phone and address display** — street and district only are shown (MKN Road, Guindy; Kumaran Nagar, Thirumudivakkam) | `company` in `site.js` | no house numbers or PIN codes |
| 5 | **Photos tied to specific projects** (e.g. the Goa Museum, the wharf crane, the Boeing job) | `milestones` in `site.js` | general site photos, no project names on them |
| 6 | **Portrait of Mohamed Suhail H / the team** (optional, for an "About" section) | new section | no people section |
| 7 | **Client testimonial or quote with name and role** (optional) | new section | no quotes shown |
| 8 | **Client logos you have permission to show** (deck slide "Major clients") | new section | clients named in text only |
| 9 | **Privacy policy text** (needed once the form collects data) | new page | no Privacy link |
| 10 | **Hosting choice** | — | if old links like /services must work, set the host's 404 to `index.html` |

## Old addresses

`/about-us`, `/services`, `/infrastructure`, `/sustainability`, `/media`, `/all-projects` and
`/contact` jump to the matching section (`legacyRoutes` in `site.js`).
