/**
 * Cinematic "Prime Portfolio" carousel.
 *
 * Lazy-loads GSAP core + Draggable from the CDN only when the user scrolls
 * within 500px of the section (saves ~40KB+ on initial load). On desktop it
 * renders a 3D coverflow carousel; on smaller screens a draggable card stack.
 *
 * Logic is preserved verbatim from the original inline implementation; the
 * project data now comes from the typed `carouselProjects` module.
 */
import { carouselProjects } from '../data/projects';
import type { CarouselProject } from '../types';

// GSAP is loaded at runtime from the CDN, so it is untyped here.
type Gsap = any;
type DraggableStatic = any;
declare global {
  interface Window {
    gsap?: Gsap;
    Draggable?: DraggableStatic;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export function initCarousel(): void {
  const portfolioSection = document.getElementById('cinematic-portfolio');
  if (!portfolioSection) return;

  let loaderTriggered = false;

  function load(): void {
    if (loaderTriggered) return;
    loaderTriggered = true;
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js')
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js'))
      .then(() => runPortfolio())
      .catch(() => {
        /* CDN unavailable — leave the static markup in place. */
      });
  }

  if ('IntersectionObserver' in window) {
    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          load();
          loadObserver.disconnect();
        }
      },
      { rootMargin: '500px' },
    );
    loadObserver.observe(portfolioSection);
  } else {
    load();
  }

  function runPortfolio(): void {
    const gsap = window.gsap as Gsap;
    const Draggable = window.Draggable as DraggableStatic;
    const projectData: CarouselProject[] = carouselProjects;

    const viewport = document.getElementById('portfolio-viewport');
    const dotsContainer = document.getElementById('portfolio-dots');
    const hintText = document.getElementById('portfolio-hint');
    if (!viewport || !dotsContainer || !hintText) return;

    let cards: HTMLElement[] = [];
    let currentIndex = 0;
    let isDesktop = window.innerWidth >= 1024;
    let draggableInstance: any = null;

    function createCards(): void {
      viewport!.innerHTML = '';
      dotsContainer!.innerHTML = '';
      cards = [];

      projectData.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'card glass-card';
        const titleStyle = project.titleStyle ? ' style="' + project.titleStyle + '"' : '';
        card.innerHTML =
          '<div class="inner-glow"></div>' +
          '<div class="image-wrapper relative z-10">' +
          '<img src="' +
          project.img +
          '" alt="' +
          project.title +
          '" loading="lazy" decoding="async" width="420" height="308">' +
          '</div>' +
          '<div class="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">' +
          '<div>' +
          '<span class="pill inline-block mb-3">' +
          project.role +
          '</span>' +
          '<h2 class="text-xl sm:text-2xl mb-2 ' +
          project.titleClass +
          '"' +
          titleStyle +
          '>' +
          project.title +
          '</h2>' +
          '<p class="text-white/40 text-xs sm:text-sm leading-relaxed font-light line-clamp-2">' +
          project.desc +
          '</p>' +
          '</div>' +
          '<div class="flex items-center gap-2 group cursor-pointer w-fit mt-4">' +
          '<span class="text-[9px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors">Case Study</span>' +
          '<svg class="w-3 h-3 text-white/40 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>' +
          '</div>' +
          '</div>';
        viewport!.appendChild(card);
        cards.push(card);

        const dot = document.createElement('div');
        dot.className = 'dot';
        dotsContainer!.appendChild(dot);
      });
    }

    function updateLayout(): void {
      isDesktop = window.innerWidth >= 1024;
      if (draggableInstance) {
        if (Array.isArray(draggableInstance)) draggableInstance[0].kill();
        else draggableInstance.kill();
      }
      gsap.set(cards, { clearProps: 'all' });

      if (isDesktop) {
        initCarouselLayout();
        hintText!.textContent = '';
      } else {
        initStack();
        hintText!.textContent = '';
      }
      updateDots();
    }

    function initStack(): void {
      const total = cards.length;
      cards.forEach((card, i) => {
        const depth = (i - currentIndex + total) % total;
        if (depth > 3) {
          gsap.set(card, { opacity: 0, pointerEvents: 'none', y: 100 });
        } else {
          gsap.set(card, {
            zIndex: 100 - depth,
            opacity: 1 - depth * 0.3,
            scale: 1 - depth * 0.05,
            y: depth * 25,
            x: 0,
            rotation: 0,
            filter: 'blur(' + depth * 2 + 'px)',
            pointerEvents: depth === 0 ? 'auto' : 'none',
          });
        }
      });

      const topCard = cards[currentIndex];
      if (!topCard) return;

      draggableInstance = Draggable.create(topCard, {
        type: 'x,y',
        onDrag: function (this: any) {
          gsap.set(this.target, { rotation: this.x * 0.05 });
        },
        onRelease: function (this: any) {
          if (Math.abs(this.y) > 120 || Math.abs(this.x) > 120) {
            dismissCard(this.target, this.x, this.y);
          } else {
            gsap.to(this.target, { x: 0, y: 0, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' });
          }
        },
      });
    }

    function dismissCard(card: HTMLElement, x: number, y: number): void {
      const angle = Math.atan2(y, x);
      const dist = window.innerHeight;
      gsap.to(card, {
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        rotation: 45,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: function () {
          currentIndex = (currentIndex + 1) % cards.length;
          initStack();
          updateDots();
        },
      });
    }

    function initCarouselLayout(): void {
      const total = cards.length;
      const spacing = window.innerWidth > 1400 ? 380 : 320;

      function render(): void {
        cards.forEach((card, i) => {
          let offset = i - currentIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const absOffset = Math.abs(offset);
          gsap.to(card, {
            x: offset * spacing,
            z: absOffset * -300,
            rotationY: offset * -35,
            opacity: Math.max(0, 1 - absOffset * 0.45),
            scale: 1 - absOffset * 0.12,
            filter: 'blur(' + absOffset * 5 + 'px)',
            zIndex: 100 - Math.floor(absOffset * 10),
            duration: 0.8,
            ease: 'power3.out',
            overwrite: true,
            pointerEvents: absOffset < 0.5 ? 'auto' : 'none',
          });
        });
      }

      render();

      draggableInstance = Draggable.create(document.createElement('div'), {
        trigger: viewport,
        type: 'x',
        onDrag: function (this: any) {
          if (Math.abs(this.deltaX) > 15) {
            if (this.deltaX < 0) currentIndex = (currentIndex + 1) % total;
            else currentIndex = (currentIndex - 1 + total) % total;
            this.endDrag();
            render();
            updateDots();
          }
        },
      });
    }

    function updateDots(): void {
      const dots = dotsContainer!.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    let resizeTimeout: ReturnType<typeof setTimeout>;
    window.addEventListener(
      'resize',
      () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateLayout, 200);
      },
      { passive: true },
    );

    gsap.registerPlugin(Draggable);
    createCards();
    updateLayout();
  }
}
