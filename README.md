# Creative ROI Lab Website

Deploy-ready Next.js website for CRL.

## Positioning

CRL is presented as content infrastructure for D2C brands — not a generic AI content agency.

## Sections

- Hero
- The real content bottleneck
- CRL system
- Services
- Proof of craft
- Audience
- Content audit form
- Footer

## Deploy on Vercel

1. Go to Vercel.
2. Click **Add New Project**.
3. Import `adithyalearnings/CRL-Website`.
4. Vercel should auto-detect Next.js.
5. Click **Deploy**.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Contact form

The contact form currently submits through `mailto:hello@creativeroilab.com`.
Replace that email in `pages/index.tsx` before going live.
