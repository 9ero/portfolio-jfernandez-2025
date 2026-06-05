# Roadmap

Pending improvements identified through code review and site analysis. Ordered by priority.

---

## Critical

### Contact form: investigate `/api/contact` 500 error
The server-side email API route was implemented but throws an error in production. Needs debugging — likely a missing env var in Vercel, a Turnstile secret key mismatch, or an EmailJS template param name mismatch (`fullname` vs what the template expects).

**Acceptance criteria:** Contact form successfully sends an email end-to-end in production.

---

### Fix og:title — currently shows "Home"
`index.astro` passes `content={{ title: 'Home' }}` to the layout, so `<title>` and `og:title` render as "Home". When someone shares the URL on LinkedIn or WhatsApp the preview card says "Home" instead of "Juan Miguel Fernández Araya – Full Stack Developer". Fix: remove the `title` prop from `index.astro` and let the layout use its default value, or pass the correct title string.

**File:** `src/pages/index.astro` line 11, `src/layouts/main.astro` line 5.

---

### SSR hydration gap — content invisible to crawlers
Skills and About sections use `client:only="react"`, which means they produce zero HTML on the server. Google, LinkedIn, and other bots fetch the page without executing JavaScript and see those sections as empty. Fix: extract static content (skill names, about text) into Astro components that render server-side; keep interactivity (tabs, animations) as narrow React islands with `client:visible`.

---

### Add Schema.org JSON-LD (Person + Portfolio)
No structured data exists in the layout. Google uses `Person` schema to understand that the site belongs to a specific professional, enabling rich results and better disambiguation. Add a `<script type="application/ld+json">` block in `main.astro`. Ten lines, high SEO impact.

---

## Important

### Language inconsistency
`og:locale` is set to `es_ES` but most visible content is in English ("Hello I'm Juan Miguel", "My Projects", section labels). Choose one language and apply it consistently — if the target audience is international, switch `og:locale` to `en_US` and translate the remaining Spanish meta content. If targeting Spanish speakers, translate the English UI copy.

---

### Verify og:image dimensions
`/portfolio.webp` is used as the social preview image. LinkedIn and Twitter require a minimum of **1200×630px**. If the image is smaller, the preview card will look bad or not appear. Verify with [opengraph.xyz](https://www.opengraph.xyz/) and resize if needed.

---

### Add `.env.example`
No `.env.example` exists. Anyone cloning the repo has to read the README to know what vars are needed.

```
PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
```

---

### Complete MABA project description
In `projectList.astro`, the MABA project description is a placeholder. Replace it with the actual description before sharing the portfolio with recruiters.

---

### Adopt Conventional Commits
Current commit messages lack context. Switch to Conventional Commits format:
- `feat:` new features
- `fix:` bug fixes
- `chore:` maintenance, deps
- `docs:` documentation only

---

### Verify `tsconfig.json` has `strict: true`
The project uses Zod and React 19 — strict TypeScript mode should be enabled to catch nullability and type issues at compile time.

---

## Polish

### Add a clear CTA above the fold
No prominent "Contact Me" or "Download CV" button is visible in the welcome section. The primary goal of a portfolio is to get someone to reach out — make that action obvious.

---

### Expand and specialize meta keywords
`"Full Stack Developer, React, Django, Docker"` is generic. Add differentiators: specific industries worked in, notable project types, or a more precise role. Generic keywords compete with everyone; specific ones attract the right recruiters.

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
