import type { APIRoute } from 'astro';
import { getWritings } from '../writings';

// Lists every page so search engines can find them. Updates itself on each build.
export const GET: APIRoute = async ({ site }) => {
  const writings = await getWritings();
  const paths = [
    '/',
    '/writings/',
    '/work/',
    '/recommendations/',
    '/about/',
    ...writings.map((entry) => `/writings/${entry.id}/`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
