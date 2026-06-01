/**
 * Smooth in-page anchor scrolling. Mirrors the original behaviour: anchors
 * pointing at "#" (e.g. the placeholder Watch Trailer button) are inert and
 * never jump to the top; real anchors smooth-scroll to their target.
 *
 * CSS `scroll-behavior:smooth` provides a no-JS fallback; this handler keeps
 * the original's preventDefault semantics when JS is available.
 */
export function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: MouseEvent) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length < 2) {
        // Placeholder links: do nothing (no scroll-to-top jump).
        e.preventDefault();
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
