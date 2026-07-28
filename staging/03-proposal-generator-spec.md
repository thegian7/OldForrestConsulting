# AI-Powered Proposal & SOW Generator

## Overview
Internal tool that takes discovery call notes (or a structured intake form) and generates a professional proposal document including scope, timeline, pricing, and a pre-filled SOW. Leverages the existing legal templates (MSA, SOW, NDA) already on the site.

## Problem
Manual proposal writing takes 2-4 hours per prospect. At $150-$300/hr opportunity cost, each proposal costs $300-$1,200 in time. With faster proposals, the team can respond to more leads and close faster.

## User Flow
1. After discovery call, team member fills intake form (or pastes call notes)
2. AI processes input: identifies project type, scope, complexity, timeline
3. Generates: Executive summary, scope breakdown, deliverables, timeline, pricing
4. Team reviews and edits in-browser
5. Export as branded PDF or send via email
6. Optionally generates matching SOW from the legal template

## Technical Architecture
- Separate Next.js app or protected route (requires auth, NOT static export)
- OpenAI API for proposal generation (GPT-4)
- Prompt template library for different engagement types
- PDF generation (react-pdf or puppeteer)
- Draft storage in Supabase

## Prompt Engineering
- System prompt includes OFC's pricing tiers, service descriptions, case study outcomes
- Few-shot examples from past successful proposals
- Output structured as JSON, rendered into branded template
- Separate prompts for: scope analysis, timeline estimation, risk identification

## Integration Points
- Google Calendar: pull discovery call details
- Email: send proposal with tracking (opened/viewed)
- Stripe: attach payment links to accepted proposals
- Legal templates: auto-fill SOW with proposal scope

## Files to Create
- `staging/proposal-generator/` - separate app scaffold
- Intake form component
- AI processing service
- PDF template
- Review/edit interface

## Revenue Impact
Reduces proposal turnaround from days to hours. Faster responses win more deals. At 2-3 additional closed deals per quarter at $5k-$20k each, this tool pays for itself immediately.
