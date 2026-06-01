/**
 * Dropdown navigation menu — vanilla open/close with outside-click dismissal
 * and arrow rotation. Behaviour is identical to the original inline script.
 */
export function initMenu(): void {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const menuArrow = document.getElementById('menu-arrow');
  if (!menuToggle || !dropdownMenu) return;

  function openMenu(): void {
    dropdownMenu!.style.opacity = '1';
    dropdownMenu!.style.pointerEvents = 'auto';
    dropdownMenu!.style.transform = 'translateY(0)';
    if (menuArrow) menuArrow.style.transform = 'rotate(180deg)';
    menuToggle!.setAttribute('aria-expanded', 'true');
  }
  function closeMenu(): void {
    dropdownMenu!.style.opacity = '0';
    dropdownMenu!.style.pointerEvents = 'none';
    dropdownMenu!.style.transform = 'translateY(-1rem)';
    if (menuArrow) menuArrow.style.transform = 'rotate(0deg)';
    menuToggle!.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdownMenu.style.opacity === '1') closeMenu();
    else openMenu();
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!menuToggle.contains(target) && !dropdownMenu.contains(target)) closeMenu();
  });

  dropdownMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
