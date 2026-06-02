/**
 * Client entrypoint. Astro bundles this as a single deferred ES module
 * (type="module"), so it never blocks render — matching the original's
 * defer/async script strategy. Each behaviour lives in its own module.
 */
import { initHero } from './hero';
import { initMenu } from './menu';
import { initSmoothScroll } from './smoothScroll';
import { initMarqueePause } from './marqueePause';
import { initScrollReveal } from './scrollReveal';
import { initCarousel } from './carousel';

initHero();
initMenu();
initSmoothScroll();
initMarqueePause();
initScrollReveal();
initCarousel();
