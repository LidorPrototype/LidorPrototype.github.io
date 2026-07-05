# Lidor Eliyahu Shelef — Online Portfolio (v3)

Live site: **https://lidorprototype.github.io/**

A data-driven personal portfolio showcasing projects across Python/ML, backend
systems, mobile apps, systems programming and games.

## Tech

- Plain **HTML + CSS + vanilla JavaScript** — no framework, no jQuery, no build step.
- Projects live in a single data file (`data/projects.js`), rendered client-side.
- Works by just opening `index.html` (no local server required).
- Hosted on **GitHub Pages** (served straight from `main`).

## Project structure

```
index.html            # page shell (hero, featured, filter, grid, footer)
data/projects.js      # ALL content lives here — edit this to update the site
assets/
  css/style.css       # styles
  js/app.js           # reads window.PORTFOLIO_DATA and renders the page
  favicon.svg
images/               # project thumbnails
robots.txt
sitemap.xml
Old Versions/         # preserved previous versions (v1, v2)
```

## Adding or editing a project

Everything is driven by `data/projects.js` — you do not touch HTML. The file is
just `window.PORTFOLIO_DATA = { ... }` wrapping a plain data object.

Add an object to the `projects` array (it's a plain JS object literal, not JSON):

```js
{
  "title": "My Project",
  "category": "Python",
  "featured": false,
  "image": "images/my-project.png",
  "stack": ["Python", "FastAPI"],
  "status": "personal",
  "description": "Short description of what it does.",
  "links": {
    "code": "https://github.com/LidorPrototype/my-project",
    "live": "",
    "playstore": "",
    "articles": [{ "label": "Blog post", "url": "https://..." }]
  }
}
```

- `category` — must match one entry in the top-level `categories` array (creates its nav panel).
- `featured: true` — also shows the project in the Featured panel (blue "Featured" badge).
- `stack` — tech tags. Render as chips **and** feed the Explore panel's search/tag filter.
- `status` — drives the corner badge:
  - `""` (empty) → no badge.
  - `shipped` → green "Shipped"; `team` → orange "Team".
  - any other non-empty value → default badge showing that text (e.g. `"open-source"` → "Open Source").
- Empty link strings are ignored (safe to leave placeholders until a URL exists).
- Drop the thumbnail in `images/` and reference it via `image`.

## Profile, backgrounds, socials

The `profile` object at the top of `data/projects.js` holds the name, tagline,
social links, and the two background images:

- `background` — front-page image; `backgroundPanels` — image behind open panels.
- Paths are relative to the site root (e.g. `images/bg-front.jpg`).

## Tuning the cursor trail

The landing-page cursor trail is configured in `assets/js/app.js` → `initTrail()`:
`STRANDS` (count), `LEN` (tail length), `stiffness`/`damping` (speed/glide),
`SPREAD` (fan width), and the tail-ease factor (lower = longer tails).

## Run locally

Just open `index.html` in a browser — no server needed. (A local server also
works: `python3 -m http.server 8000`.)

## Versions

- **v1 (2021)** — custom HTML/CSS/JS + jQuery. See `Old Versions/Version 1`.
- **v2 (2022)** — projects-only rework. See `Old Versions/Version 2`.
- **v3 (2026)** — current: data-driven (single `data/projects.js`), no framework, original hand-written HTML/CSS/JS, accessibility/SEO cleanup.

## Credits

Designed and built by Lidor Eliyahu Shelef (L-ES).
