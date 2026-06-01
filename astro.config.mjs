// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Astro compiles every page to plain HTML with no
// framework runtime — preserving the original site's zero-JS-runtime profile.
// The site URL is used for canonical links and absolute OG/sitemap URLs.
export default defineConfig({
  site: 'https://yousef-salman.com',
  output: 'static',
  build: {
    // Inline small stylesheets/scripts into the HTML the way the original
    // single-file site did, avoiding extra render-blocking requests.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
