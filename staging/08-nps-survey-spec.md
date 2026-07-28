# Client Satisfaction Survey & NPS Tracking

## Overview
Automated post-engagement surveys that capture NPS scores, generate testimonials for marketing, and identify at-risk retainer clients before they churn.

## Survey Triggers
- **Post-project**: Sent 3 days after project completion
- **Retainer check-in**: Sent quarterly for ongoing Fractional CTO clients
- **Milestone completion**: Optional pulse check at major deliverables

## Survey Content

### Core Questions
1. NPS: "How likely are you to recommend Old Forrest Consulting?" (0-10)
2. Value: "Did we deliver on the promised outcomes?" (1-5 scale)
3. Communication: "How satisfied were you with project communication?" (1-5)
4. Open: "What was the most valuable thing we did for your project?"
5. Testimonial: "Can we use your feedback on our website?" (Yes/No + name/title)
6. Referral: "Anyone in your network who could use our help?" (optional name/email)

### Follow-up Logic
- NPS 9-10 (Promoters): Ask for testimonial + referral, offer referral program
- NPS 7-8 (Passives): Ask what would make it a 10
- NPS 0-6 (Detractors): Alert team immediately, schedule follow-up call

## Technical Implementation
- Simple form (Typeform embed or custom React component)
- Results stored in Supabase
- Slack/email alerts for detractors
- Dashboard showing NPS trend over time
- Auto-populate case study testimonials from approved responses

## Revenue Impact
- Testimonials feed into case study enhancement (spec #5)
- Detractor alerts prevent retainer churn ($1.5k-$5k/mo saved)
- Referral capture feeds referral program (spec #6)
- NPS score becomes marketing asset ("Net Promoter Score: 72")
