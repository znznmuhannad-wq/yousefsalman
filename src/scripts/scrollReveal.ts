/**
 * Native scroll-reveal using a single IntersectionObserver — replaces the
 * 30+ GSAP ScrollTriggers of the original. The reveal classes' initial
 * (hidden) and revealed states live in the stylesheet; this only toggles
 * `.reveal-visible` once each element enters the viewport (one-shot).
 *
 * Without IntersectionObserver support, every element is revealed immediately.
 */
const SELECTOR = '.gsap-reveal-left,.gsap-reveal-right,.gsap-fade-up,.gsap-scale-in';

export function initScrollReveal(): void {
  const els = document.querySelectorAll<HTMLElement>(SELECTOR);

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );

  els.forEach((el) => observer.observe(el));
}
