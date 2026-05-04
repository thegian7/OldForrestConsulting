# OFC Website Rebuild — Dev Brief

## Goal

Rebuild oldforrest.net to match the new "Managed Intelligence" positioning. Current site is a single-page-with-sections layout carrying old "AI Integration / Replit migration" copy. We're going multipage and rewriting all copy against the new pitch.

## Source materials

- **`OFC-Pitch.pdf`** + **`OFC-Pitch.html`** (in `ofcpitch.zip`) — primary source of truth for copy, structure, and visual direction
- **`STYLE_GUIDE.md`** — voice rules (note: ignore the em-dash ban; pitch uses them)
- **`DESIGN.md`** — visual system

## Tech stack

Keep what's there. No version changes.

- Next 16 (App Router, `output: "export"`)
- React 19, TypeScript 5
- Tailwind 4, framer-motion, lucide-react
- Inter (body) + Outfit (headings) via next/font/google

## Sitemap

| Route | Pitch sections it covers |
|---|---|
| `/` | Cover hero, condensed Four Verbs, vertical teaser, primary CTA |
| `/services` | Four Verbs in depth + the 90-day Embed flow (Phase 01–04) |
| `/who-we-serve` | All three verticals (Trades, Factories, Franchises) on one page |
| `/pricing` | Four tiers + split-vendor comparison + sources/methodology |
| `/case-studies` | Index page; ERK case lives at `/case-studies/erk-holdings` |
| `/about` | Christopher + Taylor, firm story |
| `/contact` | 4-step intro flow + email CTA |

Future: split `/who-we-serve` into `/trades`, `/factories`, `/franchises` once we land clients in each. Don't build those routes now.

## Keep from current site

- `lib/case-studies.ts` data structure + `app/case-studies/[slug]/` dynamic route — perfect for ERK
- `app/legal/*` — all legal pages stay as-is
- `app/sitemap.ts`, `app/robots.ts` — update routes
- `components/JsonLd.tsx` — update org info if needed
- `components/Navbar.tsx`, `components/Footer.tsx` — update nav links to new sitemap
- `app/layout.tsx` — fonts, metadata
- Static export config in `next.config.ts`

## Scrap

- All section components used on current homepage: `Hero`, `Credibility`, `Services`, `Differentiator`, `CaseStudies` (the homepage section, not the data layer), `Team`, `Values`, `Pricing`, `Contact`, `ProblemCards`. All carry the old positioning.
- `app/we-can-help/` — old secondary landing page; ask before keeping
- Current `app/page.tsx` — replace

## Build notes

- Contact form: static export, so no API route. Use `mailto:` link or Formspree embed (confirm with Chris).
- Add ERK case study to `lib/case-studies.ts` using the pitch's "Proof" page content.
- Mobile-first; pitch uses 4-column grids that need to collapse cleanly.
- Visual direction: cream background, dark green + burnt-orange accents, serif headings — match the pitch HTML.

## Open questions for Chris

- Contact form mechanism: mailto, Formspree, or something else?
- Keep `/we-can-help/` as a paid-ads landing page, or scrap?
- Cardinal Roofing case study: same engagement as ERK or separate entry?
