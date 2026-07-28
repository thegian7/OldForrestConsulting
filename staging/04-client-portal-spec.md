# Client Portal with Project Tracking & Invoicing

## Overview
Authenticated portal where active clients can view project progress, milestones, deliverables, and invoices. Replaces ad-hoc email/Slack updates with a professional dashboard that reinforces the value being delivered.

## Why This Matters
- Fractional CTO clients ($1.5k-$5k/mo) need visibility into what they're paying for
- Project Rescue clients ($3k-$20k) want milestone tracking and deliverable sign-off
- Professional portal justifies premium pricing and differentiates from freelancers
- Creates natural upsell moments ("Phase 2 scope ready for approval")

## Features

### Client Dashboard
- Active project overview with status (Discovery, In Progress, Review, Complete)
- Milestone timeline with completion percentages
- Deliverable list with download links
- Next steps and upcoming milestones
- Hours logged (for hourly engagements)

### Invoicing
- Stripe Billing integration
- Invoice history with payment status
- Auto-generated invoices on milestone completion
- Subscription management for retainer clients

### Communication
- Project-scoped message thread (not full chat -- focused updates)
- File sharing for deliverables and documentation
- Weekly summary emails (auto-generated from project activity)

### Admin Side
- Client and project management
- Time tracking
- Invoice generation and payment tracking
- Template library for common project types

## Technical Architecture
- Next.js with server-side rendering (separate from static marketing site, or migrate site to SSR)
- Auth: Clerk or NextAuth.js
- Database: Supabase (Postgres + Row Level Security)
- Payments: Stripe Billing + Invoicing API
- File storage: Supabase Storage or S3
- Email: Resend or SendGrid for notifications

## Data Model
```
clients: id, name, email, company, stripe_customer_id
projects: id, client_id, name, type, status, start_date, budget
milestones: id, project_id, name, status, due_date, completed_date
deliverables: id, milestone_id, name, file_url, status
invoices: id, project_id, stripe_invoice_id, amount, status, due_date
messages: id, project_id, author, content, created_at
time_entries: id, project_id, hours, description, date
```

## Revenue Impact
- Improves client retention (less churn on retainers)
- Enables milestone-based billing (reduces collection friction)
- Professional image justifies premium rates
- Upsell visibility: clients see "suggested next phase" within portal
