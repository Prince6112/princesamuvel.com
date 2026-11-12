# princesamuvel.com

Personal site: writings and a showcase of work. Built with [Astro](https://astro.build), deployed from GitHub to Cloudflare.

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

- Name, tagline, links and all project cards: `src/site.ts`
- Home page intro: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Data science section: `src/pages/work.astro`
- Colours and fonts: the `:root` block at the top of `src/styles/global.css`

## Deploy on Cloudflare

Connect the GitHub repo in the Cloudflare dashboard (Workers & Pages), with:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

`wrangler.jsonc` tells Cloudflare to serve the built `dist/` folder as static files.
After the first deploy, add `princesamuvel.com` as a custom domain on the project.
