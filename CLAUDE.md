# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Old Forrest Consulting website - a marketing site built with Next.js 16 and deployed as a static export. The site showcases consulting services, case studies, and includes legal documentation.

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build (outputs to ./out)
npm run build

# Production server (run after build)
npm start

# Linting
npm run lint
```

## Architecture

### Next.js Configuration

- **Static Export**: `output: "export"` in next.config.ts - the entire site is pre-rendered as static HTML/CSS/JS
- **No Server-Side APIs**: No API routes or server-side rendering - all content is embedded at build time
- **Image Optimization Disabled**: Images use `unoptimized: true` for static export compatibility
- **Trailing Slashes**: URLs end with `/` for static hosting compatibility

### Path Aliases

Uses `@/*` to reference the project root:
```typescript
import Navbar from "@/components/Navbar";
import { caseStudies } from "@/lib/case-studies";
```

### Project Structure

```
app/                          # Next.js App Router pages
├── page.tsx                  # Homepage (section-based layout)
├── layout.tsx                # Root layout with fonts and JSON-LD
├── case-studies/[slug]/      # Dynamic case study pages
├── legal/                    # Legal documentation pages
│   ├── page.tsx             # Legal hub
│   ├── terms/               # Terms of Service
│   ├── privacy/             # Privacy Policy
│   ├── msa/                 # Master Services Agreement
│   ├── sow/                 # Statement of Work
│   └── nda/                 # Non-Disclosure Agreement
├── we-can-help/             # Secondary landing page
├── robots.ts                # Robots.txt generation
└── sitemap.ts               # Sitemap generation

components/                   # Reusable React components
├── Hero.tsx, Services.tsx   # Homepage sections
├── CaseStudies.tsx          # Case study cards
├── Navbar.tsx, Footer.tsx   # Layout components
├── JsonLd.tsx               # Structured data (SEO)
└── legal/                   # Legal page layouts

lib/
└── case-studies.ts          # Case study data source
```

### Homepage Architecture

The homepage (app/page.tsx) is composed of vertically-stacked section components:
1. Navbar (sticky navigation)
2. Hero (main value proposition)
3. Credibility (social proof)
4. Services (service offerings)
5. Differentiator (unique selling points)
6. CaseStudies (portfolio)
7. Team (about)
8. Values (principles)
9. Pricing (packages)
10. Contact (CTA form)
11. Footer

Each section is a self-contained component in `/components`. To modify homepage content, edit the relevant section component.

### Case Studies System

Case studies are defined as data in `lib/case-studies.ts`:
- TypeScript interface: `CaseStudy`
- Array export: `caseStudies[]`
- Helper functions: `getCaseStudyBySlug()`, `getAllCaseStudySlugs()`

Dynamic routes in `app/case-studies/[slug]/page.tsx` use `generateStaticParams()` to pre-render all case study pages at build time.

To add a new case study:
1. Add entry to `caseStudies` array in `lib/case-studies.ts`
2. Run `npm run build` - the page will be auto-generated

### Styling

- **Tailwind CSS 4**: Utility-first styling with CSS variables
- **Custom Font Stack**: Inter (body) and Outfit (headings) via next/font/google
- **Design System**: Uses CSS custom properties defined in `app/globals.css`:
  - `--background`, `--foreground`
  - `--primary`, `--secondary`, `--accent`
  - `--muted`, `--card`, `--border`
- **Animation**: framer-motion for page transitions and scroll animations
- **Icons**: lucide-react for consistent iconography

### SEO & Metadata

- **JSON-LD**: Structured data in `components/JsonLd.tsx` (Organization, ProfessionalService, WebSite)
- **Metadata**: Defined in `app/layout.tsx` with OpenGraph and Twitter cards
- **Base URL**: `https://oldforrest.net` (set in layout.tsx)
- **Sitemap**: Auto-generated via `app/sitemap.ts`
- **Robots**: Auto-generated via `app/robots.ts`

## Key Implementation Patterns

### Adding New Pages

1. Create route directory in `app/` (e.g., `app/about/`)
2. Add `page.tsx` with default export component
3. Optionally add to sitemap in `app/sitemap.ts`
4. For static export compatibility, avoid server-side APIs

### Legal Documents Pattern

Legal pages share a common layout via `components/legal/LegalPageLayout.tsx`:
- Consistent styling and navigation
- Effective date display
- Section hierarchy (h2, h3, h4)
- To add a new legal doc, create `app/legal/[name]/page.tsx` using the same pattern

### Static Export Limitations

Because this uses `output: "export"`:
- No API routes (`app/api/*`)
- No server-side rendering (SSR)
- No dynamic server features
- All content must be known at build time
- Images cannot use Next.js Image Optimization (set `unoptimized: true`)

## Technology Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4, tailwind-merge, clsx
- **Animation**: framer-motion
- **Icons**: lucide-react
- **Fonts**: Inter, Outfit (via next/font/google)
- **React**: React 19.2

## Base URL Configuration

The site's base URL is set in `app/layout.tsx`:
```typescript
const BASE_URL = "https://oldforrest.net";
```

When changing domains, update this constant - it affects metadata, OpenGraph, and canonical URLs.
