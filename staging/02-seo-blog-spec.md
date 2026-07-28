# SEO Blog / Knowledge Base

## Overview
Content marketing engine targeting high-intent search queries in the AI consulting niche. Each post serves as a lead magnet for prospects searching for solutions to problems OFC solves.

## Target Keywords (Low Competition, High Intent)
- "replit to production migration"
- "ai project stuck what to do"
- "fractional cto for startups"
- "lovable app migration production"
- "stalled ai project rescue"
- "how to fix broken ai integration"
- "cost of failed ai project"
- "hire fractional cto vs full time"

## Technical Approach

### Option A: MDX Blog (Recommended for static export)
- MDX files in `content/blog/` directory
- Build-time rendering with `@next/mdx`
- Frontmatter for metadata (title, date, description, tags, author)
- Auto-generated RSS feed and sitemap entries
- Compatible with existing static export

### Option B: Headless CMS
- Sanity.io or Contentful for content management
- Would require switching from static export to ISR/SSR
- Better for non-technical content contributors
- Higher maintenance overhead

## Content Structure
```
content/
  blog/
    replit-to-production-guide.mdx
    ai-project-rescue-checklist.mdx
    fractional-cto-vs-full-time.mdx
    ...
```

## Components Needed
- `components/blog/BlogCard.tsx` - card for blog listing
- `components/blog/BlogPost.tsx` - full post layout
- `components/blog/TableOfContents.tsx` - auto-generated TOC
- `app/blog/page.tsx` - blog listing page
- `app/blog/[slug]/page.tsx` - individual post page

## SEO Features
- Structured data (Article schema)
- Open Graph images (auto-generated or template)
- Internal linking to services and case studies
- Author attribution (Christopher / Taylor)
- Reading time estimate
- Related posts

## Revenue Path
Search traffic -> Blog post -> CTA (inline + sidebar) -> Discovery call booking
Expected: 6-12 months to meaningful organic traffic, then compounding returns.
