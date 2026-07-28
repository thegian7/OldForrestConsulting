# Assumption Audit — Old Forrest Consulting

Reviewed: 2026-03-20

---

## Overall Assessment: GRADE B+

This is the most grounded staging folder in the batch. The opportunities are reasonable extensions of an existing consulting business with real services and real pricing. Revenue estimates are still optimistic but not absurd. The main gap is that revenue projections conflate "conversion rate improvement" with guaranteed revenue, without baseline traffic data.

---

## Opportunity 1: AI-Powered Proposal Generator ($100K-200K/yr)

**Revenue estimate: OPTIMISTIC — confuses enablement with revenue**

### Unvalidated Assumptions

1. **"$100K-200K/yr from faster close rates + higher deal volume"** — This assumes the bottleneck is proposal generation speed. If the actual bottleneck is lead flow (likely, given there's no blog, no SEO, and no content marketing), faster proposals won't help. You can't close deals you don't have.

2. **"2-3 weeks" effort** — Building an AI proposal generator that produces client-ready SOWs from discovery call notes is harder than it sounds. It needs: call transcription, entity extraction, scope inference, pricing logic, PDF generation, and quality review. 2-3 weeks is an MVP at best.

3. **Requires switching from static export** — The site is currently `output: "export"`. Adding API routes means either abandoning static export or building a separate service. This architectural change isn't reflected in the effort estimate.

### What's Missing
- Current close rate and average deal size (needed to calculate impact)
- Current lead volume (if it's 2 leads/month, 2x speed doesn't matter)
- Existing proposal process (maybe it takes 30 minutes, not days)

---

## Opportunity 2: Client Portal ($75K-150K/yr)

**Revenue estimate: OPTIMISTIC — conflates retention with revenue**

### Unvalidated Assumptions

1. **"$75K-150K/yr from retention + upsell"** — A client portal doesn't create revenue directly. It reduces churn and improves client experience. The revenue impact depends entirely on how many active retainer clients exist and their churn rate. If there are 3 retainer clients, a portal won't generate $75K.

2. **"4-6 weeks" effort** — Building auth, project tracking, invoicing, and Stripe integration is a real product. 4-6 weeks is realistic for an MVP but optimistic for something production-ready with a good UX.

### What's Validated
- The need is real for consulting businesses at this price point
- Stripe Billing integration is well-understood
- The tech stack choice (NextAuth/Clerk + Supabase) is reasonable

---

## Opportunity 3: SEO Blog ($50K-150K/yr)

**Revenue estimate: PLAUSIBLE but timeline is wrong**

### Unvalidated Assumptions

1. **"Low competition for 'AI project rescue'"** — Needs keyword research to validate. The consulting space for AI projects is getting crowded fast. Terms like "fix stalled AI project" may have low search volume, not low competition.

2. **ROI Timeline: 3-6 months** — SEO for B2B consulting typically takes 6-12 months to generate meaningful inbound leads. 3 months is unrealistic unless combined with paid amplification.

### What's Validated
- Content marketing is the #1 lead generation channel for consulting businesses
- The team has real case studies to write about
- MDX blog in Next.js is straightforward

---

## Opportunity 4: ROI Calculator ($50K-100K/yr)

**Revenue estimate: OPTIMISTIC — assumes high traffic**

### Unvalidated Assumptions

1. **"$50K-100K/yr from conversion rate optimization"** — CRO only works with traffic. What's the current monthly visitor count? If it's 200 visitors/month (typical for a consulting site without SEO), even a 2x conversion rate improvement means 2 extra leads, not $50K.

2. **"Every visitor who interacts with the calculator self-qualifies"** — This assumes visitors will actually use an interactive calculator. Typical interaction rates for embedded tools are 5-15% of page visitors.

### What's Validated
- Low effort (3-5 days) is realistic for a React component
- The concept is sound for conversion optimization
- Static export compatible (no architectural changes needed)

---

## Opportunity 5: Case Study Enhancement ($30K-50K/yr)

**Revenue estimate: PLAUSIBLE at low end**

### What's Validated
- Adding ROI metrics to existing case studies is genuinely low-effort, high-impact
- The case studies exist and are detailed
- Filterable gallery improves UX

### What's Missing
- Actual ROI data from past clients (do you have permission to share metrics?)

---

## Opportunities 6-8: Referral, Booking, NPS

**Combined estimate: $55K-110K/yr — OPTIMISTIC**

These are all reasonable operational improvements but the revenue attribution is generous. A referral program doesn't generate $25-50K unless there's a large network actively referring. A booking enhancement doesn't generate $20-40K unless there's high booking volume with a high no-show rate.

---

## Cross-Cutting Issues

1. **Revenue projections conflate "improvement" with "new revenue"** — Most of these opportunities improve conversion or retention on existing traffic/clients. The actual revenue impact depends on baseline numbers (traffic, leads, clients, churn) that aren't provided.

2. **Chicken-and-egg problem** — The highest-impact item is the SEO blog (drives traffic), but the ROI calculator and case study improvements are recommended first (optimize conversion). This makes sense only if there's meaningful existing traffic. If traffic is near zero, SEO should be priority #1.

3. **Single-person capacity** — The roadmap has 8 items spanning 20+ weeks of work. With active consulting engagements, realistically 1-2 of these can be completed per quarter.

4. **This is a real business** — Unlike several other repos in this review, OFC has real services, real pricing, real clients, and a real website. The opportunities are genuine improvements, just overestimated in revenue impact.
