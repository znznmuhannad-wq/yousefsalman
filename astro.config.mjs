// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Astro compiles every page to plain HTML with no
// framework runtime — preserving the original site's zero-JS-runtime profile.
// The site URL is used for canonical links and absolute OG/sitemap URLs.
export default defineConfig({
  site: 'https://yousef-salman.com',
  output: 'static',
  build: {
    // Single-page site: inline ALL CSS into the HTML so there is no
    // render-blocking external stylesheet request — improves mobile FCP/LCP.
    // (Mirrors the original single-file site, which had its CSS inline.)
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
