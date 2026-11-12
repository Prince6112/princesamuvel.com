import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every file in src/content/writings/ becomes an entry on the Writings page.
//   type: "reflection" -> a longer piece with its own page
//   type: "note"       -> a short thought or quote, shown in full in the list
const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['reflection', 'note']).default('reflection'),
    description: z.string().optional(),
    source: z.string().optional(), // who said it, or the Bible reference
    draft: z.boolean().default(false),
  }),
});

export const collections = { writings };
