// One place for the details that appear across the site.
// Change a value here and every page picks it up.

export const site = {
  name: 'Prince Samuvel',
  domain: 'princesamuvel.com',
  tagline: 'Writing what God puts on my heart, and building things for the web.',
  description:
    'Personal site of Prince Samuvel: reflections on faith, and a showcase of websites, apps and data work.',
  location: 'Pune, India',
  links: {
    linkedin: 'https://www.linkedin.com/in/prince-samuvel/',
    github: 'https://github.com/Prince6112',
  },
};

export type Project = {
  title: string;
  kind: string;
  summary: string;
  points: string[];
  url?: string;
  linkLabel?: string;
  status?: string;
  featured?: boolean;
};

export const websites: Project[] = [
  {
    title: 'A2H Badminton & Indoor Sports',
    kind: 'Website',
    summary:
      'Site for an indoor badminton and table tennis court in Dharmapuri, Tamil Nadu. Players book a slot by the hour straight from the page.',
    points: [
      'Booking form that sends the details to WhatsApp',
      'Gallery, FAQ, map and directions',
      'Deployed from GitHub to Cloudflare',
    ],
    url: 'https://a2h-badminton.prince-sam-ss.workers.dev/',
    linkLabel: 'Visit site',
    featured: true,
  },
  {
    title: 'Gospel Supplies by Shekinah',
    kind: 'Website',
    summary:
      'Storefront for a handmade, faith-inspired resin art brand in Pune: pendants, bookmarks, magnets and keepsakes, plus online workshops.',
    points: [
      'Product catalogue with categories and prices',
      'Ordering through Instagram DM, no checkout to maintain',
      'Workshops, about and contact pages',
    ],
    url: 'https://gospel-supplies.vercel.app/',
    linkLabel: 'Visit site',
    featured: true,
  },
  {
    title: 'Zyan Events',
    kind: 'Website',
    summary:
      'One-page site for an event planning team in Pune and PCMC covering birthdays, corporate events and community gatherings.',
    points: [
      'Event-type picker that opens WhatsApp with a pre-filled message',
      'Enquiry form, process walkthrough and FAQ',
    ],
    url: 'https://endearing-sundae-d57af2.netlify.app',
    linkLabel: 'Visit site',
  },
];

export const marketing: Project[] = [
  {
    title: 'Local ads for a dental clinic',
    kind: 'Marketing',
    summary:
      'Running Google ads for a dental clinic in Pune, focused on its Google Business Profile and Google Maps so nearby patients find it first.',
    points: ['Google Business Profile and Maps campaigns', 'Aimed at people searching nearby'],
    status: 'Ongoing',
    featured: true,
  },
];

export const apps: Project[] = [
  {
    title: 'Calorie Tracker',
    kind: 'App',
    summary:
      'A nutrition tracker I built for my own use with Python and FastAPI, for logging meals and keeping an eye on daily intake.',
    points: ['Python, FastAPI', 'Personal use, kept behind a login'],
    status: 'Private',
  },
  {
    title: 'Finance Tracker',
    kind: 'App',
    summary:
      'A personal finance tracker for keeping my own money matters in one place.',
    points: ['Personal use, kept behind a login'],
    status: 'Private',
  },
];
