# Referral Program with Revenue Sharing

## Overview
Structured referral program that turns past clients and professional network into a paid acquisition channel. 10-15% of first engagement value paid to referrer upon successful close.

## Why
- Consulting referrals convert at 3-5x the rate of cold leads
- Past clients who had good outcomes are natural advocates
- Developer communities (meetups, Discord, Slack) are untapped
- Formalizing referrals with financial incentive increases volume

## Program Structure

### Referral Tiers
- **Bronze**: 10% of first engagement (default for all referrers)
- **Silver**: 12% (after 3 successful referrals)
- **Gold**: 15% (after 5 successful referrals or agency partners)

### How It Works
1. Referrer gets unique link (e.g., oldforrest.net/?ref=ABC123)
2. Prospect books discovery call via that link
3. Referral tracked through cookie + UTM params
4. If prospect becomes client, referrer gets percentage of first invoice
5. Payout after client's first payment clears (net-30)

## Technical Implementation
- Referral code generation and tracking (simple DB table)
- Cookie-based attribution (90-day window)
- Dashboard for referrers to see their referrals and payouts
- Admin view for managing referral program
- Integration with Stripe for payout tracking

## Data Model
```
referrers: id, name, email, code, tier, created_at
referrals: id, referrer_id, prospect_name, prospect_email, status, referred_at
payouts: id, referral_id, amount, status, paid_at, stripe_transfer_id
```

## Marketing
- Email to past clients announcing program
- Dedicated /referrals page on site explaining program
- Shareable cards/assets for referrers
- Quarterly leaderboard email to top referrers

## Revenue Impact
If 5 past clients each refer 1 client per year at average $10k engagement:
- Gross revenue: $50k
- Referral payouts (10%): $5k
- Net new revenue: $45k
- CAC: $1k per client (vs. $3-5k for paid acquisition)
