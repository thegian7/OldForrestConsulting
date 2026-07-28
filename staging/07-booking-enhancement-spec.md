# Booking & Scheduling Enhancement

## Overview
Replace the raw Google Calendar embed with a proper scheduling flow that includes an intake questionnaire, reducing wasted discovery calls and improving preparation.

## Current State
- Google Calendar appointment scheduling embed in Contact section
- Two calendar links: discovery call (30min) and hourly booking
- No intake form -- team goes into calls blind

## Proposed Flow
1. Prospect clicks "Schedule a Free Consultation"
2. **Pre-call intake form** collects:
   - Project type (dropdown: AI Integration, Migration, Rescue, Fractional CTO, Other)
   - Current status (Not started, Stuck, Partially built, Needs migration)
   - Budget range (dropdown: <$5k, $5k-$10k, $10k-$20k, $20k+, Not sure)
   - Timeline (ASAP, 1-3 months, 3-6 months, Exploring)
   - Brief description (textarea, 2-3 sentences)
   - Tech stack currently using (optional)
3. Form submission triggers calendar picker
4. Confirmation email includes both parties' prep info
5. Reminder email 24hr before with intake summary

## Technical Options

### Option A: Cal.com (Recommended)
- Self-hosted or cloud
- Built-in intake forms
- Webhook support for CRM integration
- Custom branding
- Free tier available

### Option B: Custom Build
- Next.js form + Google Calendar API
- More control, more maintenance
- Could integrate with proposal generator

## Additional Features
- No-show follow-up automation (email 1hr after missed call)
- Post-call follow-up template (auto-sent with proposal timeline)
- Calendar availability sync across team members

## Revenue Impact
- Fewer wasted calls (prospect self-qualifies via intake)
- Better prepared discovery calls (higher close rate)
- Reduced no-shows with proper reminders
- Estimated 20-30% improvement in call-to-close rate
