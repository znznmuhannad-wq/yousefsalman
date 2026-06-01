/**
 * Pauses the infinite marquees (#memories rows + #b3eed BTS strip) whenever
 * their section is offscreen, freeing CPU. Toggles `.marquee-paused`, which
 * sets animation-play-state:paused in the stylesheet.
 */
export function initMarqueePause(): void {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('marquee-paused', !entry.isIntersecting);
      });
    },
    { rootMargin: '100px' },
  );

  ['memories', 'b3eed'].forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}
