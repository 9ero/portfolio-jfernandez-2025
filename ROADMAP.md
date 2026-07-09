# Roadmap

Pending improvements identified through code review and site analysis. Ordered by priority.

---

## Critical

### Contact form: investigate `/api/contact` 500 error
The server-side email API route was implemented but throws an error in production. Needs debugging — likely a missing env var in Vercel, a Turnstile secret key mismatch, or an EmailJS template param name mismatch (`fullname` vs what the template expects).

**Acceptance criteria:** Contact form successfully sends an email end-to-end in production.

---

## Important

### Replace generated placeholder images
`public/verde/placeholder-1.webp`, `public/mcp/placeholder-1.webp` and `public/ai-wpp.webp` are programmatically generated placeholders (dark gradient + typography). Replace with real screenshots/designs when available. `public/og-cover.webp` (1200×630) is also generated — fine to keep, but can be redesigned.

---

## Polish

### Add PWA-ready favicon assets
The current favicon is `/logo.svg` only. Browsers and mobile devices expect:
- `/favicon.ico` — for legacy browsers
- `192×192px` PNG — Android home screen
- `512×512px` PNG — PWA splash screen

Add them to `public/` and register in the layout `<head>`.

---

### Add PWA-ready favicon assets
The current favicon is `/logo.svg` only. Browsers and mobile devices expect:
- `/favicon.ico` — for legacy browsers
- `192×192px` PNG — Android home screen
- `512×512px` PNG — PWA splash screen

Add them to `public/` and register in the layout `<head>`.

---

### Move `canvas-confetti` to lazy load
`canvas-confetti` is a production dependency used only for a visual effect. Evaluate whether it's still in use; if so, ensure it's loaded lazily.

---

### Clean up `public/old/` naming
The folder name `old/` is served publicly. Rename to `portfolio-v1/` to look more intentional.

---

### Validate Lighthouse score claim
Run an actual Lighthouse audit against the production URL and record real numbers. The previous README claimed 95+ without evidence.

---

## Done

- [x] Move EmailJS to server-side API route (credentials no longer in client bundle)
- [x] Verify Cloudflare Turnstile token server-side before sending email
- [x] Remove `@emailjs/browser` from dependencies
- [x] Refactor README to match actual project state
- [x] Add CLAUDE.md with project context for AI-assisted development
- [x] Fix og:title — layout now receives the real title (2026-07)
- [x] SSR hydration gap — Skills/About/Projects islands moved from `client:only` to `client:visible`; hero summary is now static Astro with CSS animation (2026-07)
- [x] Add Schema.org JSON-LD `Person` in `main.astro` (2026-07)
- [x] Language consistency — `lang="en"`, `og:locale` `en_US` (+ `es_CR` alternate) (2026-07)
- [x] og:image — dedicated `og-cover.webp` at 1200×630 with width/height/alt meta (2026-07)
- [x] `.env.example` present
- [x] MABA description — real content lives in `src/data/projects.ts`
- [x] Conventional Commits adopted
- [x] `tsconfig.json` extends `astro/tsconfigs/strict`
- [x] CTA above the fold — "Contact me" + "Download CV" in the hero (2026-07)
- [x] Specialized meta keywords (infrastructure, platform engineering, AI integration) (2026-07)
- [x] Content repositioning per job-hunter `profile/positioning.md`: new headline/summary, Technical Lead, Verde & MCP projects, value ordering, CVs in `public/cv/` (2026-07)
