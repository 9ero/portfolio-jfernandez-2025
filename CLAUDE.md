# CLAUDE.md — portfolio-jfernandez-2025

## Project Overview
Personal portfolio for Juan Miguel Fernández. Single-page app with scroll-snap sections: Welcome, Skills, Projects, About, Contact.

## Stack
- **Astro 5** with `output: 'server'` + Vercel adapter (SSR, not SSG)
- **React 19** — interactive islands via `client:only="react"`
- **Tailwind CSS 4** via Vite plugin
- **TypeScript** — all components
- **pnpm** — package manager

## Key Files
- `src/pages/index.astro` — single page, five scroll-snap sections
- `src/pages/api/contact.ts` — POST endpoint: verifies Turnstile, sends email via EmailJS REST API
- `src/components/main/contact/contact-form.tsx` — contact form, calls `/api/contact`
- `src/layouts/main.astro` — root layout with meta tags
- `astro.config.mjs` — Astro config, Vercel adapter, Tailwind Vite plugin

## Development
```bash
pnpm dev        # dev server at localhost:4321
pnpm build      # production build
pnpm preview    # preview production build
```

## Environment Variables
| Variable | Where used |
|---|---|
| `PUBLIC_TURNSTILE_SITE_KEY` | Client — Turnstile widget |
| `TURNSTILE_SECRET_KEY` | Server — verify token with Cloudflare |
| `EMAILJS_SERVICE_ID` | Server — EmailJS REST API |
| `EMAILJS_TEMPLATE_ID` | Server — EmailJS REST API |
| `EMAILJS_PUBLIC_KEY` | Server — EmailJS REST API |

All `EMAILJS_*` and `TURNSTILE_SECRET_KEY` are server-only (no `PUBLIC_` prefix).

## Architecture Notes
- Contact form does **not** use `@emailjs/browser` — that dependency was removed. Email is sent server-side via `fetch('https://api.emailjs.com/api/v1.0/email/send')`.
- Turnstile token is verified server-side via `challenges.cloudflare.com/turnstile/v0/siteverify` before any email is sent.
- `public/old/` and `public/this/` contain project screenshot assets used by the expandable cards — they are intentionally there.

## SEO / Rendering Notes
- All islands use `client:visible` (NOT `client:only`) so content is server-rendered and crawlable. If you add a React island, keep it SSR-safe (browser APIs only inside effects) and prefer `client:visible`.
- The hero summary in `welcome.astro` is static Astro with a CSS reveal animation — do not reintroduce `TextGenerateEffect` there (it hid the text from crawlers).
- **i18n routing**: `/` is English, `/es/` is Spanish. Both routes render `src/components/home-page.astro` with a `locale` prop that threads through every component; UI chrome strings live in `src/lib/ui.ts`, content strings in `src/data` (`Localized` type). Each route emits its own `lang`, canonical, `og:locale` and `hreflang` alternates (see `main.astro`); `public/sitemap.xml` lists both URLs. When adding UI text, add both languages in `ui.ts` — never hardcode.
- `main.astro` carries the SEO surface: per-locale title/description/keywords defaults, JSON-LD `Person`, `og-cover.webp` (1200×630).
- Content source of truth: the job-hunter repo's `profile/positioning.md`. Keep `src/data` consistent with it (headline, Technical Lead role, project ordering by value).

## Known Issues / Active Work
See `ROADMAP.md` for the full list of pending improvements.
