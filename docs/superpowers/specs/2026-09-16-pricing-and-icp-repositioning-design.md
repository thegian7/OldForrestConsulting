# Pricing and ICP repositioning — design

**Date:** 2026-09-16
**Status:** approved in outline (Sections 1 and 2), one open item for Chris — see §8
**Scope:** `/pricing`, `/who-we-serve`, `/` (home), `/services`, `llms.txt`, `JsonLd.tsx`

---

## 1. Problem

Two separate defects, both load-bearing.

### 1.1 Published prices match no realized engagement

The site publishes a **capacity** ladder — Embed ($40k/mo × 3 = $120k), Operate ($10–15k/mo), Maintain ($5k/mo, ~20 hrs), Build ($5–50k). Against actual closed work:

| Site | Reality |
|---|---|
| Embed — $40k/mo, $120k total | Never sold at any price near this |
| Operate — $10–15k/mo | ERK, the most comprehensive engagement in the estate (4+ entities, effectively their IT function), is **$12k/mo** — bottom of band |
| Maintain — $5k/mo for ~20 hrs | **Directors Edge Pro is $5k/mo** for 1,177 commits — the largest active build in the estate is priced at the low-touch maintenance rate |
| Build — $5–50k | Cribster $52.5k/7 milestones · Halford Hoops $15k · DarkSky assessment $9.5k · RuggedAero $9.5k · Altius $1,750 + $1,250/mo |

Every realized monthly figure is **$1,250 / $5,000 / $12,000**. The band is real; it was never written down.

Worse, **two contradictory price books are live**: this page says Maintain starts at $5k/mo, while `offers/2026-06-09-operational-intelligence-one-pager.md` says managed intelligence starts **"from $2,500/mo."** A prospect reading both gets different numbers for overlapping things.

Chris's own account: the numbers came from the pitch deck and he *"has a hard time saying we will use them."* The figures he quotes without hesitating — $9,500, $12k/mo, $2,500/day, $5k/org/yr — are all from signed or twice-charged paper.

### 1.2 The ICP describes one client out of nine

`/who-we-serve` sells **Trades · Factories · Franchises**. A full survey of `_clients/` found **nine unrelated industries**: construction (ERK/HCC), proptech (Cribster), drone/LiDAR survey (Dark Sky), death care (Directors Edge Pro), critical minerals (Consortium), pharmacy (Direct Meds), law (Altius), Part 135 aviation (RuggedAero), physical therapy (Halford Hoops).

The vertical framing also creates a live commercial conflict: ERK Holdings is simultaneously the largest client **and** a referral channel that bakes 20–30% into orbit quotes. Positioning the firm as a construction vendor makes every new prospect a potential ERK competitor. Chris raised this directly — *"I dont want to pigeon hole to bens competition."* It had already been identified internally: the Consortium engagement brief states *"OFC is the contracting entity (software/IP arm), not ERK Holdings. No construction-competitor conflict here."*

---

## 2. Decisions

| # | Decision | Rationale |
|---|---|---|
| D1 | Replace the capacity ladder with **two scope-priced products** | Capacity pricing prices *how much of Chris* a client gets — hours in bulk with a monthly label. Scope pricing prices what is delivered. This is the commercial expression of "stop selling time." |
| D2 | The two products are **SOW + change orders** and **flat monthly for a named scope** | These are the two best-papered engagements in the estate — Cribster (M1–M7, seven change orders) and the ERK SMA (*"a fixed monthly fee, not billed by the hour"* + named systems + $2,500/day out-of-scope). Productizing what works, not inventing. |
| D3 | Flat monthly includes **one scoped item per month**, size-capped in days | "One" is countable, so the boundary is enforceable. Uncapped, a client saves the big ask for the included slot. |
| D4 | Out-of-scope is **$2,500/day, one-day minimum** — a day rate, never hourly | Already in the signed ERK SMA. An hourly rate on a public page tells a buyer the fixed fee is hourly underneath, undoing the credibility the fixed fee is there to create. Same discipline, no hourly framing. |
| D5 | Unused months **do not roll over** | The fee's primary job is a healthy named stack; the included item is additive. Stated that way on the page so a quiet month doesn't read as paying for nothing. Banking also makes capacity unplannable. |
| D6 | ICP frame = **the record has to hold up**, qualifier = **nobody in-house owns it** | The frame fits nine of nine industries; the qualifier is the actual buyer state. Frame makes the firm specific, qualifier makes it necessary. |
| D7 | Verticals survive only as **examples** | Nine industries listed as a menu reads as drift; listed as instances of one pattern, it reads as proof. |
| D8 | Keep the **split-vendor comparison** | It is the strongest argument on the site and it gets *better* at the new numbers: $52–93k/mo of separate vendors against $12k/mo is far more credible than against $40k. Its copy must be generalised — current figures are sourced to "a ~20–30 user mid-market trades/construction client." |

---

## 3. The price book

### 3.1 Ladder

| Product | Price | Provenance |
|---|---|---|
| **Assessment** | **$9,500 fixed · 3 weeks** | Charged twice (Dark Sky, RuggedAero); already in the OI one-pager |
| **Build** | **Fixed fee, milestone-billed**; additions as written change orders | Show 2–3 sized examples, **no headline range**. Cribster may be named ($52.5k across 7 milestones — client naming already cleared, live case study); other examples stay anonymized by shape and size |
| **Managed** | **From $2,500/mo** | Matches the OI one-pager |

### 3.2 Managed tiers

| Tier | Monthly | Included item | Out of scope |
|---|---|---|---|
| Entry | $2,500 | one item, up to **1 day** | $2,500/day, 1-day min |
| Mid | **$6,000** | one item, up to **2 days** | same |
| Full | $12,000 | one item, up to **3 days**, priority response | same |

$6,000 (firm, not approximate) fills the gap between $5k and $12k where nothing currently exists — and where Directors Edge Pro should sit or above.

### 3.3 The arithmetic objection, and the answer

A client will notice that the day rate is $2,500 while the entry tier includes a day inside a $2,500 fee. The answer, which should appear on the page rather than being improvised in a call: **planned work on a stack we already maintain is genuinely cheaper to deliver than an unplanned interrupt. The day rate prices the interruption.** Scaling the included days by tier keeps the ratio sane.

### 3.4 Retired

Embed, Operate, Maintain as price tiers, and the $40k / $120k figures.

**Accepted risk:** this is a public price reduction of roughly 70% at the top of the ladder. Judged near-zero cost — nothing ever transacted at $40k/mo, the site has no analytics so there is no measured traffic to lose, and a price nobody paid is a filter pointed the wrong way rather than an anchor. Recorded here so the decision is deliberate.

---

## 4. The ICP

**Frame:** your records get challenged by someone outside your company.
**Qualifier:** nobody in-house has keeping-them-honest as their actual job.

### 4.1 Self-qualifying questions (replacing the category list)

Modelled on the five Tuesday questions on `/operational-intelligence`, which already work:

1. Does anyone outside your company ever ask you to prove where a number came from?
2. When they do, how long does it take — and does the answer depend on one person?
3. Is there anybody in-house whose actual job is keeping those systems honest?

Yes / painfully / no identifies the buyer.

### 4.2 Examples, underneath

Title · survey · death care · construction · law · pharmacy · minerals · aviation · clinical.

### 4.3 Explicitly not for us

Staff augmentation by the hour; a single one-off script with no ongoing relationship. (This exclusion already exists in `llms.txt` and should be visible on the page.)

### 4.4 Why this is the honest frame

It is not marketing language retrofitted onto the work — it is what the codebases already do. A cross-repo survey found the same discipline recurring across unrelated clients: Dark Sky's overlay pipeline imports zero generative-model code, guarded by a test that fails the build; MetesAI cites the source-text span for every plotted line, and has a test asserting its own roadmap never overstates the multi-tenant path; `usgis` returns provenance or an explicit coverage gap and never a plausible guess; Directors Edge Pro hash-chains custody events. Different industries, same requirement: the output must survive being questioned.

---

## 5. Page-by-page changes

| Target | Change |
|---|---|
| `app/pricing/page.tsx` | Rewrite to §3. Replace the four `tiers` entries with Assessment / Build / Managed; add the Managed tier table; keep and generalise the split-vendor comparison; state the §3.3 answer and the D5 no-rollover rationale (§2) |
| `app/who-we-serve/page.tsx` | Rewrite to §4 — questions first, examples second, exclusions third |
| `components/home/VerticalsTeaser.tsx` | Currently lists Trades / Factories / Franchises / Property Management. Reframe to the consequence frame; verticals become examples |
| `components/home/Hero.tsx` | Check for vertical-specific copy; align with the frame |
| `app/services/page.tsx` | Four verbs survive. Killing the tiers **resolves an existing collision** — "Embed" and "Maintain" were simultaneously verbs and price tiers. See §8 for the 90-day sprint |
| `public/llms.txt` | Update the "Who we're a fit for" section; currently states trades/factories/franchises and multi-entity operators |
| `components/JsonLd.tsx` | Audit `description` and `areaServed` fields (lines ~11, 44, 47, 65–92) for vertical strings |

### 5.1 Deliberately untouched

`app/operational-intelligence/page.tsx`. Its ladder is already $9,500 → build → from $2,500/mo, i.e. exactly the new price book. It stops being the firm's definition and becomes a **segment landing page** for multi-entity operators, which is the correct role for an offer page. No edit needed.

---

## 6. Out of scope

- Building the MetesAI HTTP surface (blocked on a signed order by its own commercial doc)
- The MetesAI API Order Form and the white-label rate card — both real, both commercial documents rather than site work
- Adding analytics (separate decision; the privacy policy is already accurate about there being none)
- Restructuring case studies (three now exist and are live)
- Re-dating the four legal pages still marked "December 2024"

---

## 7. Verification

- `npx tsc --noEmit` clean
- `npm run build` passes; `/pricing`, `/who-we-serve`, `/`, `/services` all prerender
- No occurrence of `$40k`, `$120k`, `Operate`, or `Embed`-as-a-tier remains in `app/` or `components/`
- `Trades`, `Factories`, `Franchises` appear only as examples, never as page structure
- Every price on the site reconciles with the OI one-pager — no two live documents disagree
- Grep for vertical strings with `/usr/bin/grep`, **not** `grep`: the shell `grep` is ripgrep and skips gitignored paths

---

## 8. Open item for Chris

**Does the 90-day Embed sprint survive?**

`/services` describes a 90-day intensive with Phases 01–04. "Embed" was the $40k/mo tier being retired, but the *delivery shape* is separable from the price.

**Recommendation: keep it, reclassified as a fixed-fee Build.** It is a differentiated way to describe how an engagement starts, competitors rarely articulate one, and it reflects how the ERK relationship actually began. As a Build it carries no headline number, so nothing has to be invented.

**Alternative:** it retires with the tier, and `/services` describes the four verbs without a named starting sequence.

---

## 9. Provenance

Every figure above traces to a signed instrument, a twice-charged engagement, or Chris's own decision in the 2026-09-16 session. No number in this spec was invented, which is the specific failure of the page it replaces.
