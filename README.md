# Harbour & Downs Flooring — Next.js Site

This is a minimal **Next.js + Tailwind CSS** site for *Harbour & Downs Flooring*.
It contains a single-page site with hero, about, services, gallery (with filters) and contact info.

## Quick start (locally)

1. Install dependencies:
```bash
cd harbourdowns-nextjs
npm install
```

2. Run the dev server:
```bash
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Go to https://vercel.com and sign in (you already have an account).
2. Click **New Project** → **Import** → **Upload** and select this project's folder.
3. Vercel will build and deploy automatically.
4. To use your domain (e.g. harbourdowns.com), add it under Project → Settings → Domains and follow Vercel's DNS instructions at your registrar.

## Notes

- Images are loaded from Unsplash using queries (no local images). If you prefer, replace the image URLs in `pages/index.js` with your own images placed in the `public/` folder.
- The contact form is a placeholder; messages are not sent. If you want form submissions emailed, we can integrate a service (Formspree/Getform) or add a small serverless function.
