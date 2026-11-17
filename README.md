# princesamuvel.com

Personal site: writings and a showcase of work. Built with [Astro](https://astro.build), deployed from GitHub to Cloudflare. Dark theme: Instrument Serif headings, Manrope body, IBM Plex Mono labels.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:4321

## Add a new writing

Create a new `.md` file in `src/content/writings/`. The file name becomes the URL.

A longer reflection (gets its own page):

```
---
title: Faithful with the talent
date: 2026-11-12
type: reflection
description: One line shown in the list.
source: Matthew 25:14–30
---

Your text here.
```

A short thought or quote (shown in full in the list):

```
---
title: Small things
date: 2026-11-11
type: note
source: Who said it (optional)
---

The thought or quote.
```

Add `draft: true` to keep a piece off the site until it is ready.

Then publish:

```
git add .
git commit -m "Add new writing"
git push
```

## Edit other content

- Name, intro line, links, project cards and books: `src/site.ts`
- Also in `src/site.ts`: the hero corner labels, the "Now building" link at the top
  right (set `now` to `null` to hide it), "Currently into", and the toolkit list
- Home page sections and their headings: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Data science section: `src/pages/work.astro`
- Colours and fonts: the `:root` block at the top of `src/styles/global.css`
  (green accent is `--accent`)

### Add your résumé or photo

- Résumé: put the PDF at `public/resume.pdf`, then set `resume: '/resume.pdf'` in
  `src/site.ts`. Résumé links appear on the home, Work and About pages.
- Photo: put it at `public/photo.jpg`, then set `photo: '/photo.jpg'`. It replaces the
  terminal panel in the "By day" section of the home page.

### Project cards

Each card can take an optional `slug` (the monospaced name), `tag` and `dot` (the label
and coloured dot at the bottom left), `tone` (the background behind the screenshot:
teal, blue, plum or green), and for cards without a screenshot an `icon` and `caption`.

## Deploy on Cloudflare

Connect the GitHub repo in the Cloudflare dashboard (Workers & Pages), with:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

`wrangler.jsonc` tells Cloudflare to serve the built `dist/` folder as static files.
After the first deploy, add `princesamuvel.com` as a custom domain on the project.
