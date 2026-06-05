# Roadmap

Pending improvements identified through code review. Ordered by priority.

---

## Critical

### Contact form: investigate `/api/contact` 500 error
The server-side email API route was implemented but throws an error in production. Needs debugging — likely a missing env var in Vercel, a Turnstile secret key mismatch, or an EmailJS template param name mismatch (`fullname` vs what the template expects).

**Acceptance criteria:** Contact form successfully sends an email end-to-end in production.

---

## Important

### Add `.env.example`
No `.env.example` exists. Anyone cloning the repo has to read the README to know what vars are needed.

```
PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
```

### Complete MABA project description
In `projectList.astro`, the MABA project description is a placeholder. Replace it with the actual description before sharing the portfolio with recruiters.

### Adopt Conventional Commits
Current commit messages lack context (`fix`, `update`, etc.). Switch to Conventional Commits format:
- `feat:` new features
- `fix:` bug fixes
- `chore:` maintenance, deps
- `docs:` documentation only

### Add Schema.org structured data (JSON-LD)
The README and SEO section claim Schema.org markup is implemented, but it is not present in the current layout. Add a `<script type="application/ld+json">` block in `main.astro` with `Person` schema at minimum.

### Verify `tsconfig.json` has `strict: true`
The project uses Zod and React 19 — strict TypeScript mode should be enabled to catch nullability and type issues at compile time.

---

## Polish

### Move `canvas-confetti` to the correct usage
`canvas-confetti` is listed as a production dependency but used only for a visual effect. Evaluate whether it's still in use; if so, ensure it's loaded lazily.

### Clean up `public/old/` naming
The folder name `old/` is served publicly. Rename to something less ambiguous (e.g., `portfolio-v1/`) to avoid confusion and look more intentional in the file tree.

### Validate Lighthouse score claim
The README previously claimed Lighthouse 95+ across all metrics. Run an actual Lighthouse audit against the production URL and update README with real numbers.

---

## Done

- [x] Move EmailJS to server-side API route (credentials no longer in client bundle)
- [x] Verify Cloudflare Turnstile token server-side before sending email
- [x] Remove `@emailjs/browser` from dependencies
- [x] Refactor README to match actual project state
- [x] Add CLAUDE.md with project context for AI-assisted development
