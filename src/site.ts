// One place for the details that appear across the site.
// Change a value here and every page picks it up.

export const site = {
  name: 'Prince Samuvel',
  domain: 'princesamuvel.com',
  tagline: 'Building things for the web, and writing what God puts on my heart.',
  description:
    'Personal site of Prince Samuvel: websites, apps and data work, and reflections on faith.',
  location: 'Pune, India',
  email: 'prince.sam.ss@gmail.com',
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
  // Screenshot shown on the card. Put the file in public/work/ and it appears
  // automatically; if the file is missing, the card simply shows no image.
  image?: string;
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
    image: '/work/a2h.jpg',
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
    image: '/work/gospel-supplies.jpg',
    linkLabel: 'Visit site',
    featured: true,
  },
  {
    title: 'Zyan Events',
    kind: 'Website',
    summary:
      'One-page site for Zyan Events, an event management venture my roommates and I started, planning birthdays, corporate events and community gatherings in Pune and PCMC.',
    points: [
      'Event-type picker that opens WhatsApp with a pre-filled message',
      'Enquiry form, process walkthrough and FAQ',
    ],
    url: 'https://endearing-sundae-d57af2.netlify.app',
    image: '/work/zyan-events.jpg',
    linkLabel: 'Visit site',
    featured: true,
  },
  {
    title: 'Naveen Joshua',
    kind: 'Website',
    summary: 'Something amazing is coming. Stay tuned.',
    points: [],
    url: 'https://naveenjoshua.com/',
    image: '/work/naveen-joshua.jpg',
    linkLabel: 'Take a peek',
    status: 'In progress',
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

// Shown on the Recommendations page.
export type Book = { title: string; author: string; note: string };

export const books: Book[] = [
  {
    title: 'Mere Christianity',
    author: 'C. S. Lewis',
    note: 'Adapted from talks Lewis gave on BBC radio during the Second World War. He starts from the sense of right and wrong we all carry and builds a clear, reasoned case for the Christian faith, sticking to what believers across traditions hold in common.',
  },
  {
    title: 'Stop, in the Name of God',
    author: 'Charlie Kirk',
    note: 'A call to recover the Sabbath: one day each week to stop, rest and turn your attention back to God. A timely read for a life that never seems to switch off.',
  },
  {
    title: 'The Purpose Driven Life',
    author: 'Rick Warren',
    note: 'Forty short daily readings built around one question: what on earth am I here for? Warren answers that you were made by God and for God, and walks through what that means for everyday life.',
  },
  {
    title: 'God and Money',
    author: 'Gregory Baumer and John Cortines',
    note: 'Two Harvard Business School classmates set out to study what the Bible says about wealth. The result is a practical look at earning, saving and giving, and at the question of how much is enough.',
  },
];
