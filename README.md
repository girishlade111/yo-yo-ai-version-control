# YoYo — AI Version Control (Landing Page)

A marketing landing page for **YoYo**, a tool that brings version control to AI-assisted coding: undo AI mistakes instantly, preview changes safely, and roll back with one click — across your favorite IDEs.

> Originally generated with [v0.dev](https://v0.dev) and maintained in this repository.

## What it does

YoYo is positioned as "AI Version Control" for vibe coding workflows. This repo contains the full marketing site that explains the product and drives installs:

- **Hero section** — full-viewport gradient hero with animated product imagery and "Install for free" CTA.
- **IDE compatibility strip** — Windsurf, Claude Code, Cursor, VS Code, Manus AI, Gemini CLI, Firebase Studio, OpenAI Codex CLI, GitHub Codespaces, Amazon Kiro.
- **Save / Review / Restore** feature section — the core product workflow with a demo video.
- **Agentic AI search** section.
- **Cross-IDE code versioning** — switch between Cursor, Windsurf, and VS Code, pick up where you left off (video demo).
- **Why not Git?** — positioning against traditional version control.
- **Vibe-coding tweets** and **testimonials** sections with animated scrolling city marquee ("5,000+ devs vibe with YoYo").
- **FAQ** accordion, **install modal** dialog, announcement banner, and full footer.

## Features

- Dark, high-contrast design system built on the Geist typeface.
- Responsive mobile/desktop hero layouts.
- shadcn/ui component library (accordion, dialog, button, and more).
- Framer-free CSS keyframe animations (scrolling marquees, gradients).
- Demo videos hosted on Vercel Blob storage, served with graceful fallback sources.
- SEO: dynamic sitemap, video sitemap, `robots.txt`, Open Graph image generation, PWA manifest (`site.webmanifest`), `llms.txt`.

## Tech stack

- **Next.js 15** (App Router) with React 19 and TypeScript.
- **Tailwind CSS 3** + `tailwindcss-animate`, `class-variance-authority`, `clsx`, `tailwind-merge`.
- **shadcn/ui** (Radix primitives) for accessible UI components.
- **Lucide** icons, **Sonner** toasts, **next-themes**.
- **recharts 2.15.0**, react-hook-form, zod, date-fns for assorted widgets.
- Package manager: **pnpm** (`pnpm-lock.yaml` committed).

## Quick start

```bash
# install dependencies
pnpm install
# or, with npm:
npm install

# run the dev server
pnpm dev
# open http://localhost:3000

# production build (static export)
pnpm build
```

`output: 'export'` is enabled in `next.config.mjs`, so `pnpm build` produces a fully static site in the `out/` directory — no server required.

> **Note:** `basePath: '/yo-yo-ai-version-control'` is set in `next.config.mjs` so the static build works when hosted under the GitHub Pages project subpath (`https://girishlade111.github.io/yo-yo-ai-version-control/`). Remove the `basePath` if you deploy to a root domain (Vercel, Cloudflare Pages, custom domain).

## Project structure

```
├── app/
│   ├── page.tsx            # Landing page (hero + all marketing sections)
│   ├── layout.tsx          # Root layout (fonts, metadata, theme provider)
│   ├── globals.css         # Global styles + animation keyframes
│   ├── manifest.ts         # PWA manifest
│   ├── sitemap.ts          # SEO sitemap (runyoyo.com)
│   ├── opengraph-image.tsx # Generated Open Graph image
│   └── robots.txt / sitemap.xml (static, in public/)
├── components/
│   ├── navbar.tsx / footer.tsx / announcement-banner.tsx
│   ├── hero-image.tsx / hero-video.tsx / feature-video.tsx
│   ├── install-modal.tsx   # "Install for free" dialog
│   ├── save-review-restore-section.tsx
│   ├── agentic-ai-search-section.tsx
│   ├── why-not-git-section.tsx
│   ├── testimonials-section.tsx / vibe-coding-tweets-section.tsx
│   ├── faq-section.tsx
│   └── ui/                 # shadcn/ui primitives (button, accordion, dialog…)
├── lib/utils.ts            # class-name helpers
├── public/                 # favicons, images, fonts, videos metadata, llms.txt
├── styles/globals.css      # alternate global stylesheet
├── components.json         # shadcn/ui config
└── next.config.mjs         # static export + unoptimized images
```

## Environment variables

None required. Demo video URLs are hardcoded constants in `app/page.tsx` (Vercel Blob public URLs).

## Deployment

The site is fully static (`output: 'export'`) and can be hosted anywhere that serves static files:

- **GitHub Pages** — this repo's build is published from the `gh-pages` branch at
  `https://girishlade111.github.io/yo-yo-ai-version-control/`.
- **Vercel / Netlify / Cloudflare Pages** — connect the repo and deploy; remember to remove `basePath` from `next.config.mjs` for root-domain deployments.
- The original v0 project also synced to Vercel; the canonical product domain referenced in the sitemap is `https://runyoyo.com`.

```bash
pnpm build   # -> out/
```

## Scripts

| Script        | Purpose                    |
| ------------- | -------------------------- |
| `pnpm dev`    | Start the dev server        |
| `pnpm build`  | Production build → `out/`  |
| `pnpm start`  | (unused — static export)   |
| `pnpm lint`   | Run ESLint                 |

## Notes

- Demo video files are streamed from Vercel Blob (`*.public.blob.vercel-storage.com`) with a local `public/videos` fallback path where present.
- The landing page references the third-party YoYo product site and its founder's X handle (`x.com/jackjack_eth`) for "DM founder" CTAs.

---

Built by Girish Lade · https://ladestack.in
