/** Global site metadata, contact details and social links. */

export const site = {
  name: 'Yousef Salman',
  brand: 'THE Y.S CUT',
  title: 'The Y.S Cut | Yousef Salman Portfolio',
  description:
    'Official portfolio of filmmaker Yousef Salman. Cinematography, directing, and visual storytelling projects including films, commercials, and Netflix productions.',
  url: 'https://yousef-salman.com',
  ogTitle: 'Yousef Salman | Filmmaker Portfolio',
  ogDescription:
    'Official portfolio of filmmaker Yousef Salman. Cinematography, directing, and film projects.',
  ogImage: 'https://i.ibb.co/XxDCkS4S/Whats-App-Image-2026-03-07-at-3-45-09-AM-2.jpg',
} as const;

export const contact = {
  locationLabel: 'Dubai Based',
  availability: 'Available Worldwide',
  phone: '058 549 6699',
  phoneHref: 'tel:0585496699',
  email: 'yousef.salman971@gmail.com',
  emailHref: 'mailto:yousef.salman971@gmail.com',
} as const;

export const social = {
  instagram: {
    url: 'https://www.instagram.com/yousef_salman7',
    handle: '@YOUSEF_SALMAN7',
  },
  youtube: {
    url: 'https://www.youtube.com/playlist?list=PLqNiBrUW0UeUtYbby4F8MyHsuCU3E6PZr',
    label: 'YOUTUBE PLAYLIST',
  },
} as const;

/** schema.org Person structured data (rendered as JSON-LD in the head). */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: 'Filmmaker',
  image: site.ogImage,
  sameAs: [social.instagram.url, social.youtube.url],
} as const;
