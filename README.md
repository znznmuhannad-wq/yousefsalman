# The Y.S Cut — Yousef Salman Portfolio

Portfolio site for filmmaker Yousef Salman, built with [Astro](https://astro.build/)
and TypeScript. It compiles to a fully static site with **no framework runtime**:
the page ships as plain HTML/CSS and a single small (~3 KB gzip) deferred module
for the interactive pieces (menu, hero reveal, scroll reveal, marquee pausing,
and the lazy-loaded cinematic carousel).

## Commands

| Command           | Action                                         |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start the dev server at `localhost:4321`       |
| `npm run build`   | Build the static site to `./dist/`             |
| `npm run preview` | Preview the production build locally           |
| `npm run check`   | Type-check `.astro`/`.ts` files (`astro check`)|

## Project structure

```
public/                 Static assets served at the site root (robots.txt, sitemap.xml)
src/
  data/                 Typed content (site meta, nav, skills, filmography,
                        carousel projects, memories, about, hero)
  types/                Shared TypeScript interfaces
  styles/
    global.css          Hand-built utility stylesheet + custom styles (verbatim
                        from the original single-file build)
  scripts/              Client behaviour, one concern per module
    main.ts             Entrypoint that wires up all behaviours
    hero.ts             Hero text/background reveal
    menu.ts             Dropdown navigation
    smoothScroll.ts     In-page anchor smooth scrolling
    scrollReveal.ts     IntersectionObserver scroll reveals
    marqueePause.ts     Pauses marquees when offscreen
    carousel.ts         Lazy-loaded GSAP cinematic carousel
  components/
    IconSprite.astro    Inline SVG <symbol> sprite
    Nav.astro           Fixed navigation
    ui/                 Small reusable pieces (Icon, SectionHeader, SkillCard,
                        FilmographyColumn, MemoryItem)
    sections/           One component per page section
  layouts/
    BaseLayout.astro    Document shell: head, SEO/meta, fonts, JSON-LD, sprite
  pages/
    index.astro         Assembles the single page from the section components
astro.config.mjs        Astro config (static output, site URL)
netlify.toml            Netlify build configuration
```

## Deployment (Netlify)

Configured in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

Previously Netlify served the root `index.html` with no build step. It now runs
the Astro build and publishes `dist/`. Set the same values in the Netlify UI
(Site settings → Build & deploy) if not picking up `netlify.toml` automatically.

## Notes

- All media is served from the `i.ibb.co` CDN (unchanged from the original).
  To self-host later, drop files in `public/` and update the URLs in `src/data/`.
- `global.css` is intentionally a verbatim extraction of the original stylesheet
  to guarantee identical visual output. The escaped arbitrary-value selectors
  (e.g. `.bg-\[\#050505\]`) mirror the original Tailwind-style class names used
  throughout the markup.
