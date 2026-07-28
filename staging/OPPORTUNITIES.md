# Old Forrest Consulting - Revenue Opportunities

Ranked by estimated fiscal impact (annual revenue potential).

## Current State

- **Site**: Next.js 16 static export at oldforrest.net
- **Services**: AI Integration, Project Rescue ($3k-$20k), Fractional CTO ($1.5k-$5k/mo), Hourly ($150-$300/hr)
- **Team**: Christopher Ledbetter (Finisher) + Taylor Westmoreland (Strategist)
- **Lead capture**: Google Calendar booking embed + email (chris@oldforrest.net)
- **Case studies**: 6 detailed projects (Edify, Paperless, WhatsAppMeta, WingBeat)
- **Legal**: Full suite (MSA, SOW, NDA, Terms, Privacy)
- **Missing**: No blog, no client portal, no CRM, no automated proposals, no referral system

---

## Tier 1: High Revenue Impact ($50k-$200k+ annual potential)

### 1. AI-Powered Proposal & SOW Generator
**Est. value**: $100k-$200k/yr (faster close rates + higher deal volume)
**Why**: The existing legal docs (MSA, SOW, NDA) are static pages. An AI tool that generates custom proposals from discovery call notes would dramatically cut sales cycle time and let the team close more deals. The SOW template already exists -- automate it.
**Effort**: Medium (2-3 weeks)
**Tech**: Next.js API route (switch from static export for this feature) or separate service, OpenAI API, PDF generation

### 2. Client Portal with Project Tracking & Invoicing
**Est. value**: $75k-$150k/yr (retention + upsell + professional image)
**Why**: For $3k-$20k project rescue and $1.5k-$5k/mo fractional CTO engagements, clients expect visibility into progress. A portal with milestones, deliverables, and integrated invoicing (Stripe) reduces admin overhead and creates upsell moments ("Phase 2 ready").
**Effort**: High (4-6 weeks)
**Tech**: Next.js with auth (NextAuth/Clerk), Supabase/Postgres, Stripe Billing

### 3. SEO Blog / Knowledge Base
**Est. value**: $50k-$150k/yr (inbound lead generation)
**Why**: Zero content marketing currently. The niche ("AI project rescue", "Replit to production migration", "stalled AI project") has low competition and high commercial intent. Each blog post is a long-term lead magnet.
**Effort**: Low-Medium (1-2 weeks for CMS setup, ongoing content)
**Tech**: MDX blog within Next.js or headless CMS (Sanity/Contentful)

### 4. ROI Calculator Widget
**Est. value**: $50k-$100k/yr (conversion rate optimization)
**Why**: Prospects evaluating "$3k-$20k project rescue" need to justify the spend. An interactive calculator showing "cost of delay vs. cost of rescue" or "DIY hours vs. expert hours" converts fence-sitters. Embeddable on homepage and shareable.
**Effort**: Low (3-5 days)
**Tech**: React component, no backend needed (static export compatible)

---

## Tier 2: Medium Revenue Impact ($20k-$50k annual potential)

### 5. Case Study Showcase with ROI Metrics
**Est. value**: $30k-$50k/yr (social proof conversion lift)
**Why**: Current case studies have highlights but lack explicit ROI ("saved $X", "launched Y weeks early"). Adding quantified business outcomes and client testimonials would significantly improve conversion. Add a filterable gallery with industry/tech filters.
**Effort**: Low (3-5 days)
**Tech**: Enhanced data in lib/case-studies.ts, new filter UI component

### 6. Referral Program with Revenue Sharing
**Est. value**: $25k-$50k/yr (new client channel)
**Why**: Past clients and developer network are the highest-converting referral source for consulting. A structured program with tracking and revenue share (10-15% of first engagement) formalizes word-of-mouth.
**Effort**: Medium (1-2 weeks)
**Tech**: Referral tracking system, unique codes/links, payout tracking

### 7. Booking & Scheduling Enhancement
**Est. value**: $20k-$40k/yr (reduced friction, fewer no-shows)
**Why**: Currently using raw Google Calendar embed. A proper scheduling flow with intake questionnaire, automatic reminder emails, and pre-call prep would improve conversion and reduce wasted calls.
**Effort**: Low (3-5 days)
**Tech**: Cal.com or Calendly integration with custom intake form

---

## Tier 3: Lower but Meaningful Impact ($10k-$20k annual potential)

### 8. Client Satisfaction Survey & NPS Tracking
**Est. value**: $10k-$20k/yr (retention + testimonial generation)
**Why**: Automated post-engagement surveys generate testimonials (for case studies) and identify at-risk clients before they churn from retainer. NPS scores become marketing ammunition.
**Effort**: Low (2-3 days)
**Tech**: Typeform/custom form, simple dashboard

---

## Implementation Priority

| Priority | Item | Effort | ROI Timeline |
|----------|------|--------|--------------|
| 1 | ROI Calculator Widget | 3-5 days | Immediate |
| 2 | SEO Blog / Knowledge Base | 1-2 weeks | 3-6 months |
| 3 | AI Proposal Generator | 2-3 weeks | 1-2 months |
| 4 | Case Study ROI Enhancement | 3-5 days | Immediate |
| 5 | Booking Enhancement | 3-5 days | Immediate |
| 6 | Client Portal | 4-6 weeks | 2-3 months |
| 7 | Referral Program | 1-2 weeks | 3-6 months |
| 8 | NPS Tracking | 2-3 days | 1-2 months |

Start with quick wins (ROI calculator, case study enhancement, booking) to improve conversion on existing traffic, then invest in lead generation (blog) and operational efficiency (proposals, portal).
