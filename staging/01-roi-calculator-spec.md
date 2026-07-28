# ROI Calculator Widget

## Overview
Interactive calculator embedded on the homepage that helps prospects quantify the cost of their stalled project vs. the cost of hiring Old Forrest Consulting. Designed to convert fence-sitters by making the financial case concrete.

## User Flow
1. Prospect selects project type (AI Integration, Project Rescue, Migration)
2. Inputs: team size, months stalled, estimated monthly burn rate, current completion %
3. Calculator shows: cost of delay, projected rescue cost, time-to-launch with OFC, net savings
4. CTA: "Get a Custom Quote" -> scrolls to contact/booking

## Technical Approach
- Pure client-side React component (static export compatible)
- No backend needed -- calculation logic in-browser
- Framer Motion animations consistent with existing site
- Tailwind styling matching current design system
- Shareable results via URL query params (optional)

## Key Calculations
- **Cost of Delay** = monthly_burn * months_remaining_if_DIY
- **OFC Rescue Cost** = estimated from pricing tiers based on project type + complexity
- **Net Savings** = cost_of_delay - ofc_cost - (time_saved * opportunity_cost)
- **Break-even** = when rescue investment pays for itself vs. continued delay

## Files to Create
- `components/ROICalculator.tsx` - main calculator component
- Add section to `app/page.tsx` between Pricing and Contact

## Revenue Impact
Directly improves conversion rate on existing traffic. Every visitor who interacts with the calculator self-qualifies and anchors on the value proposition before seeing pricing.
