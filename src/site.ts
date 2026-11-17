// One place for the details that appear across the site.
// Change a value here and every page picks it up.

export const site = {
  name: 'Prince Samuvel',
  domain: 'princesamuvel.com',
  // Short line under the big name on the home page.
  role: 'Data scientist & web builder',
  // The sentence under the name on the home page.
  intro: 'I build things for the web, and I write down what God puts on my heart.',
  tagline: 'Building things for the web, and writing what God puts on my heart.',
  description:
    'Personal site of Prince Samuvel: websites, apps and data work, and reflections on faith.',
  location: 'Pune, India',
  email: 'prince.sam.ss@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/prince-samuvel/',
    github: 'https://github.com/Prince6112',
  },
  // "Now building" link at the top right. Set to null to hide it.
  now: { label: 'Naveen Joshua', url: 'https://naveenjoshua.com/' } as
    | { label: string; url: string }
    | null,
  // Small labels in the corners of the home page hero.
  heroLeft: 'Building & writing from Pune',
  heroRight: 'Web / Data / Faith',
  currentlyInto: ['Agentic AI', 'Websites for small businesses', 'Matthew 25'],
  toolkit: ['Python', 'FastAPI', 'LangChain', 'CrewAI', 'Astro', 'Cloudflare'],
  // Put your résumé at public/resume.pdf and set this to '/resume.pdf'.
  // While it is empty, no résumé link is shown.
  resume: '',
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
  // automatically; if the file is missing, the card shows its icon instead.
  image?: string;
  featured?: boolean;
  // Card styling (all optional):
  slug?: string; // the monospaced name on the card, e.g. "a2h-badminton"
  tag?: string; // small label at the bottom left, e.g. "Cloudflare"
  dot?: string; // colour of the dot next to that label
  tone?: 'teal' | 'blue' | 'plum' | 'green'; // background behind the screenshot
  icon?: 'work' | 'meal' | 'chart' | 'lock'; // shown when there is no screenshot
  caption?: string; // small line under the icon
};

export const websites: Project[] = [
  {
    title: 'A2H Badminton & Indoor Sports',
    kind: 'Website',
    slug: 'a2h-badminton',
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
    tag: 'Cloudflare',
    dot: '#7CC4E8',
    tone: 'teal',
    featured: true,
  },
  {
    title: 'Gospel Supplies by Shekinah',
    kind: 'Website',
    slug: 'gospel-supplies',
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
    tag: 'Vercel',
    dot: '#E8C77C',
    tone: 'blue',
    featured: true,
  },
  {
    title: 'Zyan Events',
    kind: 'Website',
    slug: 'zyan-events',
    summary:
      'One-page site for Zyan Events, an event management venture my roommates and I started, planning birthdays, corporate events and community gatherings in Pune and PCMC.',
    points: [
      'Event-type picker that opens WhatsApp with a pre-filled message',
      'Enquiry form, process walkthrough and FAQ',
    ],
    url: 'https://endearing-sundae-d57af2.netlify.app',
    image: '/work/zyan-events.jpg',
    linkLabel: 'Visit site',
    tag: 'Netlify',
    dot: '#E89A7C',
    tone: 'plum',
    featured: true,
  },
  {
    title: 'Naveen Joshua',
    kind: 'Website',
    slug: 'naveen-joshua',
    summary: 'A personal website, being built right now. Something amazing is coming.',
    points: [],
    url: 'https://naveenjoshua.com/',
    image: '/work/naveen-joshua.jpg',
    linkLabel: 'Take a peek',
    status: 'In progress',
    tag: 'Live soon',
    tone: 'green',
    featured: true,
  },
];

export const marketing: Project[] = [
  {
    title: 'Local ads for a dental clinic',
    kind: 'Marketing',
    slug: 'local-ads',
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
    slug: 'calorie-tracker',
    summary:
      'A nutrition tracker I built for my own use with Python and FastAPI, for logging meals and keeping an eye on daily intake.',
    points: ['Python, FastAPI', 'Personal use, kept behind a login'],
    status: 'Private',
    tag: 'Python · FastAPI',
    dot: '#E8C77C',
    tone: 'teal',
    icon: 'meal',
    caption: 'Log the meal. Watch the day.',
  },
  {
    title: 'Finance Tracker',
    kind: 'App',
    slug: 'finance-tracker',
    summary: 'A personal finance tracker for keeping my own money matters in one place.',
    points: ['Personal use, kept behind a login'],
    status: 'Private',
    tag: 'Private',
    dot: '#7CC4E8',
    tone: 'blue',
    icon: 'chart',
    caption: 'Every rupee, one place.',
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
