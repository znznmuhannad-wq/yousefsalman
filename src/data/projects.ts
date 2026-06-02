import type { CarouselProject } from '../types';

/**
 * Projects shown in the draggable "Prime Portfolio" carousel.
 * Consumed by the client-side carousel script (src/scripts/carousel.ts),
 * which is the single source of truth for this data via the JSON embedded
 * in the CinematicPortfolio component.
 */
export const carouselProjects: CarouselProject[] = [
  {
    title: 'RAWABI SCHOOL FOR GIRLS',
    titleClass: 'text-[#E50914] tracking-normal text-3xl uppercase',
    role: 'NETFLIX SERIES',
    desc: 'Camera department work on the globally distributed Netflix series filmed in Jordan.',
    img: 'https://i.ibb.co/60w7V5S8/Whats-App-Image-2025-12-05-at-12-07-19-AM-3.jpg',
    titleStyle: "font-family:'Anton',sans-serif",
  },
  {
    title: 'DIOR CAMPAIGN',
    titleClass: 'text-white font-serif font-normal tracking-[0.3em] uppercase',
    role: 'LUXURY COMMERCIAL',
    desc: 'Luxury fashion campaign production for Dior.',
    img: 'https://i.ibb.co/2Y73mD4R/Whats-App-Image-2025-12-05-at-12-56-21-AM-7.jpg',
  },
  {
    title: 'LOUIS VUITTON',
    titleClass: 'text-[#D4AF37] font-serif font-normal tracking-[0.2em] uppercase',
    role: 'GLOBAL CAMPAIGN',
    desc: 'Commercial campaign produced for Louis Vuitton international marketing.',
    img: 'https://i.ibb.co/60WSv2zH/Whats-App-Image-2025-12-05-at-12-56-21-AM-6.jpg',
  },
  {
    title: 'DE BEERS',
    titleClass: 'text-white font-serif font-light tracking-[0.25em] uppercase',
    role: 'LUXURY CAMPAIGN',
    desc: 'High-end jewelry campaign production.',
    img: 'https://i.ibb.co/twmn5thm/Whats-App-Image-2025-12-05-at-12-56-22-AM-2.jpg',
  },
  {
    title: 'S.A.S WHO DARES TO WIN',
    titleClass: 'text-[#E7A51A] font-montserrat font-bold tracking-tight uppercase',
    role: 'TV SERIES',
    desc: 'International series production filmed across multiple locations.',
    img: 'https://i.ibb.co/60w7V5S8/Whats-App-Image-2025-12-05-at-12-07-19-AM-3.jpg',
  },
  {
    title: 'RIYADH RENDEZVOUS',
    titleClass: 'text-white font-montserrat font-bold tracking-tight uppercase',
    role: 'FILM',
    desc: 'Narrative film production project filmed in Saudi Arabia.',
    img: 'https://i.ibb.co/Ps8W4cPF/Whats-App-Image-2025-12-05-at-1-11-54-AM.jpg',
  },
];
