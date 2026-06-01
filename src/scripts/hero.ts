/**
 * Hero text reveal + background slow-zoom via CSS transitions.
 * Runs immediately on load with no animation-library dependency, exactly as
 * the original inline bootstrap did: staggered fade-in + slide-up for the
 * `.hero-anim` elements and a 15s scale(1.05 → 1) on the hero background.
 */
export function initHero(): void {
  const heroEls = document.querySelectorAll<HTMLElement>('.hero-anim');
  heroEls.forEach((el, i) => {
    el.style.transition =
      'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)';
    el.style.transitionDelay = i * 0.3 + 's';
  });

  // Two RAFs to ensure styles apply before transitioning.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroEls.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });

  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    heroBg.style.transition = 'transform 15s linear';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroBg.style.transform = 'scale(1)';
      });
    });
  }
}
