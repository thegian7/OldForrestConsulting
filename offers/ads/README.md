# Operational Intelligence — Meta Campaign (Instagram + Facebook)

**Status:** DRAFT mockups for Chris's review · 2026-06-09
**Landing page:** `oldforrest.net/operational-intelligence` (route lives in this repo, `app/operational-intelligence/`)
**Creative source:** `ad-mockups.html` (open in a browser; every ad renders at native Meta pixel size)
**Exports:** `png/` (rendered from the mockup file)

## Funnel

A $9,500 assessment is too big a leap from a cold tap. Two-step funnel:

1. **Cold** traffic goes to the landing page with "See a sample Tuesday digest" as the primary conversion (email capture). The digest list is the compounding asset.
2. **Retargeting** (page visitors + digest subscribers) gets the objection-killer creative and the "Book a fit call" ask.

Be clear-eyed about the channel: Meta makes the name familiar and feeds the digest list. The CPA / PE-platform referral channel closes the deals. Ads support the referral motion, they do not replace it.

## The ads

| # | Name | Format | Audience | Notes |
|---|---|---|---|---|
| 1 | The Tuesday Email | 1080×1080 static | cold + warm | The artifact ad. Expected best performer; artifacts beat claims. |
| 2 | The Three-Day Question | 1080×1080 static | cold | Pain hook, Monday/Thursday/Friday timeline. |
| 3 | Five Questions | 7-card carousel, 1080×1350 | cold | Each question hooks a different pain; Meta optimizes card order. |
| 4 | Your Controller | 1080×1080 static | cold + warm | Empathy angle. Never insults their team. |
| 5 | Keep QuickBooks | 1080×1080 static | retargeting only | Kills the "they'll make us switch software" objection. |
| 6 | Founder video | 30s, 9:16 Reels/Stories | cold + warm | Storyboard + script in the mockup file. Shoot on a phone; authentic beats polished. |

Paste-ready Meta fields (primary text, headline, description, CTA) sit next to each creative in `ad-mockups.html`.

## Targeting

- **Geo:** DFW, Houston, Austin, San Antonio metros (initial market; the creative itself is geography-neutral).
- **Age:** 35 to 65.
- **Interest stack:** QuickBooks, Sage, Procore, ServiceTitan, Buildertrend, construction management, general contractor, small business owners behavior.
- **The creative does the real targeting.** WIP, intercompany, job costing, "the controller's spreadsheet": the wrong people scroll past for free.
- **Lookalikes** once the digest list reaches a few hundred.
- **Retargeting:** landing-page visitors 30/90-day windows, digest subscribers, video viewers at 50 percent.

## Budget posture

$1,000 to $2,000 per month, always-on, weighted roughly 60/40 toward retargeting once the pixel has data. No launch blitz. At this ticket the job is familiarity and list growth, measured in cost per digest signup and fit calls booked, not cost per purchase.

## Compliance and practical notes

- Not a Special Ad Category (no housing, credit, or employment claims). Standard targeting available.
- Landing page beats Meta lead forms here: the entity-count dropdown qualifies, and the page does the educating.
- All numbers in the creative are representative mock data. Job names and entity labels are fictional. Keep it that way until Ben approves a named reference.
- Style guide applies to all copy: no em-dashes, no emoji, no banned words (see `/STYLE_GUIDE.md`).

## Exporting PNGs from the mockup

Open `ad-mockups.html` in Chrome and screenshot each `.ad` element, or with gstack browse:

```bash
B=~/.claude/skills/gstack/browse/dist/browse
$B goto file:///path/to/ad-mockups.html
$B screenshot --selector "#ad-tuesday" png/ad-1-tuesday-email.png
$B screenshot --selector "#car-1" png/ad-3-card-1.png
```

## Open items for Chris

1. Founder video needs you on camera (script in the mockup, frame 1 to 3).
2. Confirm the $9,500 / "fixed prices" figures stay in public copy (they are on the landing page already).
3. Meta Business Manager + pixel on oldforrest.net before any spend.
4. The digest-sample email capture needs a destination (simple list tool or a forwarding alias) before the cold campaign turns on.
