# Creative ROI Lab Website

A Next.js website for Creative ROI Lab (CRL), positioned as content infrastructure for D2C brands. This repository contains the public-facing site, not the private CRL Content Autopilot pipeline.

## What's here

- Brand and services landing page, with a content audit call to action
- Responsive visual design with CSS, GSAP and Lenis
- Next.js Pages Router and TypeScript
- A `/api/subscribe` prototype endpoint

## Run locally

```bash
git clone https://github.com/adithyalearnings/CRL-Website.git
cd CRL-Website
npm install
npm run dev
```

Open http://localhost:3000. To check a production build, run `npm run build` and `npm run start`.

## Deploy

Import this repository into Vercel as a Next.js project. The current repository homepage points to https://crl-website.vercel.app; confirm the deployed site and domain before sharing it as a live production destination.

## Before using this for real leads

- The contact CTA currently uses `mailto:hello@creativeroilab.com` in `pages/index.tsx`; update it to an inbox you control.
- `/api/subscribe` validates an email and returns a success response, but does **not** persist it or subscribe anyone. Connect a mailing-list service and add appropriate consent handling before calling this a working subscription flow.
- Review brand copy, proof claims, links and accessibility before launch.

## License

MIT for repository code — see [LICENSE](LICENSE). Creative ROI Lab names, logos and other brand assets are not granted as trademarks by this license.
