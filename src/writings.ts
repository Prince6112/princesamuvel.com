import { getCollection } from 'astro:content';

// All published writings, newest first.
export async function getWritings() {
  const all = await getCollection('writings', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
