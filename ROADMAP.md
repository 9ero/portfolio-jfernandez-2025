# Roadmap

Pending improvements identified through code review and site analysis. Ordered by priority.

---

## Next feature

### F4 — Section narration with VibeVoice (AI voice)
Narrate the portfolio sections (hero, skills, about, projects) with AI-generated voice
in both languages. Full analysis in **`docs/feasibility-vibevoice.md`** — key decisions
already made there:

- **Architecture: pre-generated audio, never runtime inference.** Content is static, so
  audio is static: an offline script generates `.opus` files per section/language on a
  rented GPU (~$0.35–1.40 per full regeneration on RunPod) and the site serves them as
  static assets (~12 MB total). Zero recurring compute cost; Vercel has no GPU anyway.
- **Gate (fase 0, before any implementation):** validate Spanish quality — VibeVoice's
  ES voice is experimental. Generate 3 real samples (hero EN/ES, Verde summary ES) on a
  RunPod pod (~$1, 1–2 h), measure VRAM/time, compare against a commercial TTS API.
  - GO → implement with VibeVoice.
  - Partial GO → hybrid: VibeVoice for EN, TTS API for ES.
  - NO-GO → postpone; browser Web Speech API remains the zero-cost fallback.
- **Implementation sketch (only after GO):** `scripts/generate-narration.mjs` (extracts
  texts from `src/data`, calls TTS backend, writes `public/audio/<section>.<lang>.<hash>.opus`),
  `src/components/ui/narrator.tsx` (per-section play/pause island, `preload="none"` —
  no LCP impact, no autoplay), `src/data/narration.ts` (manifest with hash check so CI
  warns when text and audio drift). Estimate: ~1 day pipeline + ~0.5 day UI.
- **Risks logged:** Microsoft's disclaimer (not recommended for commercial/real-world use
  without further development), experimental Spanish, audio/text drift — mitigations in
  the feasibility doc §5.

**Acceptance criteria:** fase 0 executed with a documented GO/NO-GO decision; if GO,
every section plays localized narration in both routes without degrading LCP, and the
regeneration pipeline is documented and reproducible.

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
- [x] F3 — i18n locale routes: `/` (EN) + `/es/` (ES) with locale threading, `src/lib/ui.ts` dictionary, language switcher, per-locale SEO (canonical, hreflang, og:locale), sitemap.xml + robots.txt; image-path hotfix (2026-07)
- [x] VibeVoice narration feasibility study — `docs/feasibility-vibevoice.md` (2026-07)
