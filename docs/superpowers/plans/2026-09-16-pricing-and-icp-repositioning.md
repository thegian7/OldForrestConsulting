# Pricing and ICP Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the capacity-based price ladder (Embed/Operate/Maintain/Build) with two scope-priced products, and replace the four-vertical ICP with a consequence-based one.

**Architecture:** All target pages are data-driven — each holds a typed array (`tiers`, `verticals`, `reasons`, `mathRows`, `sources`, `mathBullets`) consumed by static JSX. The work is therefore mostly replacing array contents plus header copy, not restructuring components. No new routes, no new components, no dependency changes.

**Tech Stack:** Next.js 16 (App Router, `output: "export"`), React 19, TypeScript 5 strict, Tailwind 4. Deploy is GitHub Actions → SFTP to Hostinger on push to `main`.

**Spec:** `docs/superpowers/specs/2026-09-16-pricing-and-icp-repositioning-design.md`

## Global Constraints

- **No test runner exists.** `package.json` has `eslint` and `typescript` only — no vitest/jest. The verification cycle for every task is `npx tsc --noEmit`, then `npm run build`, then grep assertions. Do not add a test framework.
- **Use `/usr/bin/grep`, never bare `grep`.** The shell `grep` is a function wrapping ripgrep, which honours `.gitignore` and silently returns nothing for ignored paths. This produced a false negative earlier in this project.
- **Every price must trace to a signed instrument or twice-charged engagement.** Invent no numbers. The permitted set: `$9,500`, `$2,500/mo`, `$6,000/mo`, `$12,000/mo`, `$2,500/day`, `$52.5k`, `$15k`.
- **Retired strings — must not survive anywhere in `app/` or `components/`:** `$40k`, `$120k`, `Operate` (as a tier name), `Embed` (as a tier name — it survives only as a service *verb* on `/services`), `$10k–$15k`, `Four tiers`.
- **Out-of-scope work is a day rate, never hourly.** `$2,500/day, one-day minimum`. The word "hourly" must not appear as OFC's billing basis.
- **`app/operational-intelligence/page.tsx` is not to be modified.** Spec §5.1 — its ladder already matches the new price book.
- **Verticals may appear only as examples, never as page structure.** There are currently **four** (Trades, Factories, Franchises, Property Management) in both `app/who-we-serve/page.tsx:13-30` and `components/home/VerticalsTeaser.tsx:4-21`. (The spec §1.2 says three; four is correct.)
- **Assumption on spec §8, flagged:** Chris approved the spec with "do it" without answering the open item. This plan proceeds on the spec's recommendation — **the 90-day sprint survives as a delivery shape, reclassified as a fixed-fee Build**, and `/services` keeps its Phases 01–04 description with the `$40k/mo` tier reference removed. If Chris wants it retired, Task 4 is where that changes.
- Do not push. Push deploys to production; Chris decides when.

---

### Task 1: Pricing page — the price book

**Files:**
- Modify: `app/pricing/page.tsx:7-11` (metadata), `:13-72` (`Tier` interface + `tiers`), `:181-194` (`mathBullets`), `:196-221` (header copy), `:160-163` (MSP source line)
- Verify: no test file; use build + grep

**Interfaces:**
- Consumes: nothing from earlier tasks (first task)
- Produces: the canonical price strings that Tasks 2–5 must not contradict — `$9,500`, `$2,500/mo`, `$6,000/mo`, `$12,000/mo`, `$2,500/day`. The `Tier` interface gains `includedItem: string` and drops `priceUnit`/`sub` usage for the two non-monthly products.

- [ ] **Step 1: Replace the `Tier` interface and `tiers` array**

Replace `app/pricing/page.tsx:13-72` with:

```tsx
interface Tier {
    name: string;
    tagline: string;
    price: string;
    priceUnit: string;
    sub: string;
    items: string[];
    featured?: boolean;
}

const tiers: Tier[] = [
    {
        name: "Assessment",
        tagline: "Fixed scope, three weeks",
        price: "$9,500",
        priceUnit: "fixed",
        sub: "Three weeks · one price",
        items: [
            "Systems and data inventory across your entities",
            "Where the numbers disagree, and why",
            "Your owner's-questions list, written down",
            "A costed plan you keep — with us or anyone else",
            "No obligation to continue",
        ],
    },
    {
        name: "Build",
        tagline: "Fixed fee, milestone-billed",
        price: "Quoted",
        priceUnit: "per project",
        sub: "Additions arrive as written change orders",
        featured: true,
        items: [
            "Scope, price, and milestones agreed before work starts",
            "Billed per milestone, on acceptance",
            "New requests priced as change orders, never absorbed silently",
            "You own the code outright at handover",
            "Recent: a two-sided listings platform at $52.5k across seven milestones",
            "Recent: a clinical program builder at $15k",
        ],
    },
    {
        name: "Managed",
        tagline: "A named stack, kept healthy",
        price: "From $2,500",
        priceUnit: "/mo",
        sub: "One scoped item included each month",
        items: [
            "We name the systems we cover, in writing",
            "Monitoring, fixes, updates, vendor escalations",
            "One scoped item per month, sized by tier",
            "Anything outside the named list: $2,500/day, one-day minimum",
            "Cancel on 30 days' notice",
        ],
    },
];

interface ManagedTier {
    name: string;
    price: string;
    included: string;
    note: string;
}

const managedTiers: ManagedTier[] = [
    {
        name: "Entry",
        price: "$2,500/mo",
        included: "One item, up to 1 day",
        note: "A small named stack — a CRM, an accounting system, the integration between them.",
    },
    {
        name: "Mid",
        price: "$6,000/mo",
        included: "One item, up to 2 days",
        note: "A larger named stack, multiple integrations, active reporting.",
    },
    {
        name: "Full",
        price: "$12,000/mo",
        included: "One item, up to 3 days",
        note: "Multi-entity. Priority response. Effectively your technology function.",
    },
];
```

- [ ] **Step 2: Replace the page metadata**

Replace `app/pricing/page.tsx:7-11` with:

```tsx
export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Two ways to work with us: fixed-fee projects with written change orders, or a flat monthly fee for a named stack. Every number here is one we have actually charged.",
};
```

- [ ] **Step 3: Replace the header section copy**

Replace the `<h1>` and following `<p>` at `app/pricing/page.tsx:205-219` with:

```tsx
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        Two ways to work with us. Both of them{" "}
                        <span className="italic text-ember">priced before we start.</span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-lg text-ink-2 leading-relaxed max-w-3xl">
                        Either we build something to a{" "}
                        <strong className="text-forest-deep">fixed fee</strong> against
                        agreed milestones, and anything you add arrives as a written
                        change order — or we{" "}
                        <strong className="text-forest-deep">run a named stack</strong>{" "}
                        for a flat monthly fee, with one scoped item included each
                        month. Most engagements open with a{" "}
                        <strong className="text-forest-deep">$9,500 assessment</strong>,
                        which produces a plan you keep whether or not you continue.
                    </p>
```

Also change the kicker at `:204` from `Transparent by design` to `Priced before we start`.

- [ ] **Step 4: Add the Managed tier table and the two explanations**

Insert a new section immediately after the existing tiers section (after the `</section>` that closes the tier grid). This renders `managedTiers` and states the two answers the spec requires (§3.3 and D5):

```tsx
            {/* Managed tiers */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="kicker mb-3">Managed, in detail</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-10">
                        What the monthly fee covers.
                    </h2>

                    <div className="divide-y divide-rule border-y border-rule mb-10">
                        {managedTiers.map((t) => (
                            <div
                                key={t.name}
                                className="py-6 grid md:grid-cols-4 gap-3 md:gap-6 items-baseline"
                            >
                                <div className="font-heading text-xl text-forest-deep">
                                    {t.name}
                                </div>
                                <div className="font-heading text-lg text-ember">
                                    {t.price}
                                </div>
                                <div className="text-base text-ink">{t.included}</div>
                                <div className="text-sm text-ink-2 leading-relaxed">
                                    {t.note}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl space-y-5">
                        <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                            <strong className="text-forest-deep">
                                Why the included item costs less than a day of
                                out-of-scope work.
                            </strong>{" "}
                            Planned work on a stack we already maintain is genuinely
                            cheaper for us to deliver than an unplanned interrupt. The
                            day rate prices the interruption, not the hour.
                        </p>
                        <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                            <strong className="text-forest-deep">
                                Unused months don&apos;t roll over.
                            </strong>{" "}
                            The fee buys a healthy stack; the included item is
                            additive. In a quiet month you still got the thing you were
                            paying for. Banking items would also make our capacity
                            impossible to plan, which is how retainers start feeling
                            unfair in both directions.
                        </p>
                    </div>
                </div>
            </section>
```

- [ ] **Step 5: Generalise the vertical-locked copy**

In `mathBullets` at `:181-194`, replace the second entry — it currently reads "Vertical pattern recognition. / We've done this in construction and exteriors already." Replace that object with:

```tsx
    {
        head: "Pattern recognition across industries.",
        body: "The same problem recurs in title, survey, death care, construction, and clinical work: a record that has to survive being questioned. We are not learning that problem on your dime.",
    },
```

In `sources` at `:160-163`, replace the MSP `body` string with:

```tsx
        body: "Regional MSP pricing for a ~20–30 user mid-market client at $100–$200 per user per month for comprehensive managed services including monitoring, helpdesk, and security.",
```

- [ ] **Step 6: Verify the build and the retired strings**

```bash
cd ~/Repos/_ofc/OldForrestConsulting
npx tsc --noEmit
npm run build
/usr/bin/grep -nE '\$40k|\$120k|Four tiers|\$10k–\$15k' app/pricing/page.tsx
/usr/bin/grep -nic 'hourly' app/pricing/page.tsx
```

Expected: `tsc` silent, build succeeds with `/pricing` prerendered, both greps return nothing (exit 1).

- [ ] **Step 7: Commit**

```bash
git add app/pricing/page.tsx
git commit -m "pricing: replace capacity tiers with Assessment/Build/Managed

Retires Embed (\$40k/mo, \$120k), Operate and Maintain. Nobody ever paid
those; ERK's actual fee is \$12k/mo and DEP is \$5k/mo. New ladder is
\$9,500 assessment, fixed-fee milestone builds with change orders, and
Managed from \$2,500/mo across three tiers with one scoped item per month
capped at 1/2/3 days and out-of-scope at \$2,500/day.

Per docs/superpowers/specs/2026-09-16-pricing-and-icp-repositioning-design.md"
```

---

### Task 2: who-we-serve — the ICP

**Files:**
- Modify: `app/who-we-serve/page.tsx:7-11` (metadata), `:13-30` (`verticals`), `:32-50` (`reasons`), `:56-67` (header/kicker)

**Interfaces:**
- Consumes: the price strings from Task 1 (this page must not restate prices that contradict them; it should link to `/pricing` rather than quote figures)
- Produces: the canonical ICP copy that Task 3's `VerticalsTeaser` must echo — the frame sentence "your records get challenged" and the exclusion list

- [ ] **Step 1: Replace `verticals` with the qualifying questions**

Replace `app/who-we-serve/page.tsx:13-30` with:

```tsx
const questions = [
    {
        n: "01",
        q: "Does anyone outside your company ever ask you to prove where a number came from?",
        detail:
            "An auditor, a regulator, a counterparty, a lender, opposing counsel, an insurer. Someone who does not have to take your word for it.",
    },
    {
        n: "02",
        q: "When they ask, how long does it take — and does the answer depend on one person?",
        detail:
            "If the honest answer is three days and a spreadsheet only one person understands, the exposure is not the spreadsheet. It is the person.",
    },
    {
        n: "03",
        q: "Is there anybody in-house whose actual job is keeping those systems honest?",
        detail:
            "Not somebody who inherited it alongside their real job. Someone whose job it is.",
    },
];

const examples = [
    { name: "Title & records", desc: "Legal descriptions, parcel boundaries, chains of ownership." },
    { name: "Survey & geospatial", desc: "Geometry that feeds a siting or engineering decision." },
    { name: "Death care", desc: "Chain of custody, death certificates, mandated price disclosure." },
    { name: "Construction", desc: "WIP, retainage, lien exposure, true job margin." },
    { name: "Property & listings", desc: "Listing accuracy against an authoritative feed, and who gets credit for a lead." },
    { name: "Legal", desc: "The file, and everything that has to be in it." },
    { name: "Clinical", desc: "Patient records, protocols, adherence." },
    { name: "Minerals & energy", desc: "Extraction rights, ownership chains, liability history." },
];
```

**Do not add Aviation or Pharmacy to this list, and do not treat their absence as a spec gap.** The section heading is "Where we've done it", so every entry must be delivered work:

- **Aviation** (RuggedAero) — verified 2026-09-16: `_clients/ruggedaero/oi-assessment/` is unfilled template scaffolding. `ENGAGEMENT.md` still reads `phase: 0` with `<YYYY-MM-DD>` placeholders, and `inventory-matrix.md` still contains its `*(EXAMPLE ROW — delete)*`. The SOW was never signed and no assessment was produced. Listing it would be a false claim.
- **Pharmacy** (Direct Meds) — a prospect with an RFI answered and no signed SOW.

The spec §4.2 list of nine industries described the ICP's *reach*, not a client roster. Eight entries is the correct number and it fills the `lg:grid-cols-4` grid evenly.

- [ ] **Step 2: Replace the header and kicker**

At `:59`, change the kicker from `Four verticals, one pattern` to `One pattern, many industries`. Replace the `<h1>` with:

```tsx
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        We work with operators whose records{" "}
                        <span className="italic text-ember">have to hold up.</span>
                    </h1>
```

- [ ] **Step 3: Replace the verticals grid with questions, then examples, then exclusions**

Replace the section that maps `verticals` (around `:84-104`) with three blocks: the `questions` list, the `examples` grid, and an explicit exclusion block:

```tsx
            {/* The test */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">Three questions</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-10">
                        If you answer yes, painfully, no — that&apos;s us.
                    </h2>
                    <div className="divide-y divide-rule border-y border-rule">
                        {questions.map((item) => (
                            <div key={item.n} className="py-7">
                                <div className="flex gap-4 md:gap-6">
                                    <div className="font-heading text-ember text-lg shrink-0">
                                        {item.n}
                                    </div>
                                    <div>
                                        <p className="font-heading text-xl md:text-2xl text-forest-deep mb-2 leading-snug">
                                            {item.q}
                                        </p>
                                        <p className="text-base text-ink-2 leading-relaxed">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Examples */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-3">Where we&apos;ve done it</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-3 max-w-3xl">
                        Different industries. The same requirement.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-10 max-w-3xl">
                        These aren&apos;t separate practice areas. They&apos;re the same
                        problem wearing different jargon.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {examples.map((e) => (
                            <div
                                key={e.name}
                                className="bg-white rounded-md p-6 border-l-[3px] border-forest"
                            >
                                <h3 className="font-heading text-xl text-forest mb-2">
                                    {e.name}
                                </h3>
                                <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                                    {e.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Not us */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="kicker mb-3">Where we&apos;re the wrong call</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-6">
                        Two things we don&apos;t do.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-4">
                        <strong className="text-forest-deep">
                            Staff augmentation by the hour.
                        </strong>{" "}
                        If what you want is a developer on your standup at an hourly
                        rate, there are firms that do that well and we are not one of
                        them.
                    </p>
                    <p className="text-lg text-ink-2 leading-relaxed">
                        <strong className="text-forest-deep">
                            A single script and a handshake.
                        </strong>{" "}
                        One-off work with no ongoing relationship isn&apos;t worth the
                        paperwork for either of us.
                    </p>
                </div>
            </section>
```

- [ ] **Step 4: Fix the vertical-locked reason**

In `reasons` at `:32-50`, the fourth entry is titled "We know your business, not just your software." Keep the title; ensure its body does not claim construction specifically. Replace its body with:

```tsx
        body: "We learn how the work actually moves before we touch the systems — the walk-through, the ride-along, the person who knows why the spreadsheet exists. Industry jargon differs; operational reality rhymes.",
```

- [ ] **Step 5: Replace the metadata**

```tsx
export const metadata: Metadata = {
    title: "Who We Serve",
    description:
        "Operators whose records get challenged — by a regulator, an auditor, a counterparty, or a court — and who have nobody in-house whose job is keeping those systems honest.",
};
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit
npm run build
/usr/bin/grep -nE 'Four verticals|Factories|Franchises|Property Management' app/who-we-serve/page.tsx
```

Expected: `tsc` silent, build succeeds with `/who-we-serve` prerendered, grep returns nothing.

- [ ] **Step 7: Commit**

```bash
git add app/who-we-serve/page.tsx
git commit -m "who-we-serve: replace four verticals with a consequence-based ICP

The four-vertical framing described one of the nine industries OFC
actually serves, and made every prospect a potential ERK competitor.
Replaced with three self-qualifying questions plus industries as
examples. Adds an explicit not-for-us block.

Per docs/superpowers/specs/2026-09-16-pricing-and-icp-repositioning-design.md"
```

---

### Task 3: Home page

**Files:**
- Modify: `components/home/VerticalsTeaser.tsx:4-21` (`verticals`), `:31-34` (heading)
- Modify: `components/home/Hero.tsx` — audit for vertical-specific copy first

**Interfaces:**
- Consumes: the frame sentence and example names from Task 2 — the teaser must be a shortened echo of `/who-we-serve`, not a second, different claim
- Produces: nothing downstream

- [ ] **Step 1: Audit the Hero for vertical copy**

```bash
/usr/bin/grep -nE 'trades|factor|franchis|property manage|construction' components/home/Hero.tsx components/home/Verbs.tsx components/home/PrimaryCTA.tsx
```

If any hit is a structural claim ("we serve trades, factories and franchises"), rewrite it to the consequence frame. If a hit is an *example* inside a longer sentence, leave it — examples are permitted per Global Constraints.

- [ ] **Step 2: Replace the teaser's `verticals` array with the frame**

Replace `components/home/VerticalsTeaser.tsx:4-21` with:

```tsx
const signals = [
    {
        name: "Someone audits you",
        desc: "A regulator, lender, insurer, counterparty, or court eventually asks you to show your work — and the answer has to be better than \"that's what the system says.\"",
    },
    {
        name: "The answer lives with one person",
        desc: "The reconciliation everybody depends on runs through a spreadsheet only one person fully understands. That's not a tooling risk, it's a personnel risk.",
    },
    {
        name: "Nobody in-house owns it",
        desc: "Keeping the systems honest is somebody's fourth priority, inherited alongside their real job. So it happens when there's time, which is never.",
    },
    {
        name: "It spans several systems",
        desc: "The number you need doesn't live in one place. It's assembled from a CRM, an accounting package, a field tool, and a spreadsheet — differently each time.",
    },
];
```

- [ ] **Step 3: Update the teaser heading and the map**

Replace the `<h2>` at `:31-34` with:

```tsx
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest-deep tracking-tight leading-[1.15]">
                        We work with operators whose records have to survive being
                        questioned.
                    </h2>
```

Change `{verticals.map((v) => (` to `{signals.map((v) => (`. The rest of the JSX is unchanged — the grid already renders four items in a `lg:grid-cols-4`, and `signals` has four entries.

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit
npm run build
/usr/bin/grep -rnE 'Factories|Franchises|Property Management' components/
```

Expected: `tsc` silent, build succeeds, grep returns nothing.

- [ ] **Step 5: Commit**

```bash
git add components/home/
git commit -m "home: reframe the who-we-serve teaser around consequence

Per docs/superpowers/specs/2026-09-16-pricing-and-icp-repositioning-design.md"
```

---

### Task 4: services, llms.txt, JsonLd

**Files:**
- Modify: `app/services/page.tsx` — remove the `$40k/mo` tier reference from the 90-day sprint description; keep the sprint itself
- Modify: `public/llms.txt` — the "Who we're a fit for" section
- Modify: `components/JsonLd.tsx` — `description` fields, `priceRange`, `hasOfferCatalog`
- Modify: `app/layout.tsx:30-36` — root `<meta description>` and the `keywords` array **(added after Task 3; renders in `<head>` on every page)**
- Modify: `components/Footer.tsx:28-32` — sitewide footer blurb **(added after Task 3; renders on 11 pages)**
- Modify: `app/contact/page.tsx:30-36` — the four-vertical sentence in the lede **(added after Task 3)**

**Interfaces:**
- Consumes: the ICP copy from Task 2 and the price strings from Task 1
- Produces: nothing downstream

- [ ] **Step 1: Fix the retired-tier handoff in `app/services/page.tsx`**

**Verified before writing this step — there is no `$40k` in this file.** The plan previously assumed there was; the actual defect is different and worse: the page still hands clients off to **tiers that no longer exist**.

`:239-240` currently reads: *"Clients who already have a working stack can skip the sprint and start at **Operate** or **Maintain** — the first 30 days of any engagement still include discovery, just proportional to the tier."*

Replace that sentence with:

```tsx
                        fit when you want real change fast. Clients who already have a
                        working stack can skip the sprint and start on{" "}
                        <strong className="text-forest-deep">Managed</strong> — the
                        first 30 days still include discovery, just proportional to
                        the scope you name.
```

Also fix the page metadata at `:11`, which still says "ongoing tiers":

```tsx
        "Integrate, embed, maintain, and build. And we handle your vendors so you don't have to. The 90-day Embed sprint, and what happens after it.",
```

**Leave `Embed` and `Maintain` alone at `:20` and `:24`** — those are the service **verbs**, which survive by design (spec §5; confirmed independently against spec:122 during Task 3's review). Likewise leave "The Embed sprint" at `:229` and `:233`: per the spec §8 decision the 90-day sprint survives as a delivery shape reclassified as a fixed-fee Build, so the sprint keeps its name. What must not survive is `Embed`/`Operate`/`Maintain` used as **price tiers**, which is exactly and only what `:239-240` does.

This file contains no vertical strings (verified case-insensitively), so there is nothing to reframe here.

- [ ] **Step 2: Rewrite the llms.txt fit section**

Replace the "## Who we're a fit for" section of `public/llms.txt` with:

```markdown
## Who we're a fit for

Operators whose records get challenged from outside — by a regulator, an
auditor, a lender, a counterparty, or a court — and who have nobody in-house
whose actual job is keeping those systems honest.

The test is three questions: does anyone outside your company ask you to prove
where a number came from; how long does that take and does it depend on one
person; and is there anybody in-house who owns it.

We have done this in title and land records, aerial survey, death care,
construction, law, clinical practice, minerals, and aviation. Those are
examples of one pattern, not separate practice areas — in each, the output has
to survive being questioned.

We are a poor fit for staff augmentation by the hour, or a single one-off
script with no ongoing relationship.
```

- [ ] **Step 3: Update the pricing section of llms.txt**

Replace any tier language with:

```markdown
## How we price

Two ways to work with us, both priced before work starts:

- **Assessment** — $9,500 fixed, three weeks. Inventory, findings, a costed plan you keep.
- **Build** — fixed fee, milestone-billed. Additions arrive as written change orders.
- **Managed** — from $2,500/mo to run a named stack, with one scoped item included each month (sized by tier). Anything outside the named list is $2,500/day, one-day minimum. Unused months don't roll over.

We do not bill by the hour.
```

- [ ] **Step 4: Rewrite the structured data**

`components/JsonLd.tsx` renders on **every page** via `layout.tsx`, so it currently contradicts the new pricing page on the pricing page itself. Three concrete defects, verified by reading the file:

1. `:46` — `priceRange: "$5,000 - $40,000 / month"`. Contains the retired `$40,000`, and `$5,000` is no longer a floor.
2. `:59-96` — `hasOfferCatalog` declares four `Service` entries named **Embed / Operate / Maintain / Build**. Three of those products no longer exist.
3. `:12` and `:45` — both `description` fields read "trades, factories, franchises, and property management".

Apply exactly:

**`:11-12`** — replace the Organization `description` with:

```tsx
    description:
      "Managed Intelligence for operators whose records get challenged — by a regulator, an auditor, a counterparty, or a court — and who have nobody in-house whose job is keeping those systems honest. One firm that integrates, embeds, maintains, and builds the stack your business runs on, and handles your vendors.",
```

**`:44-46`** — replace the ProfessionalService `description` and `priceRange` with:

```tsx
    description:
      "Operations and data consulting for organisations whose output has to survive being questioned. Fixed-fee projects with written change orders, or a flat monthly fee to run a named stack.",
    priceRange: "$2,500 - $12,000 / month",
```

**`:56-97`** — replace the whole `hasOfferCatalog` value with:

```tsx
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engagements",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assessment",
            description:
              "Fixed-scope three-week engagement: systems and data inventory, where the numbers disagree and why, and a costed plan the client keeps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Build",
            description:
              "Fixed-fee, milestone-billed projects: integrations, custom tooling, dashboards, migrations, platform builds. Additions arrive as written change orders.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed",
            description:
              "A flat monthly fee to run a named list of systems, with one scoped item included each month and out-of-scope work at a stated day rate.",
          },
        },
      ],
    },
```

Leave `areaServed` alone — geography is not the ICP claim being changed.

**Do not touch `foundingDate: "2024"` at `:13`.** It may well be wrong — the base operating agreement is effective 2023 and the LLC registered in 2026 — but resolving which is correct is a legal-record question, not a repositioning one. Flag it in your report; do not guess.

- [ ] **Step 4b: Root metadata — `app/layout.tsx`**

This renders in `<head>` on every page and is what search engines and link previews display. Replace the `description` at `:30-31` with:

```tsx
  description:
    "One firm that integrates, embeds, maintains, and builds the stack your business actually runs on — and handles your vendors. For operators whose records have to hold up.",
```

In the `keywords` array at `:32+`, replace the three vertical-specific entries — `"Trades Consulting"`, `"Factory Operations"`, `"Franchise Operations"` — with:

```tsx
    "Records Integrity",
    "Operational Data Provenance",
    "Systems of Record",
```

Leave every other keyword (`"Managed Intelligence"`, `"Operations Consulting"`, `"Fractional CTO"`, `"Fractional COO"`, `"BI Dashboards"`, `"CRM Integration"`, `"HubSpot"`, and any others) untouched. Leave the `title.default` untouched — "Managed Intelligence for Operations-Heavy Businesses" names no vertical and still holds.

- [ ] **Step 4c: Sitewide footer — `components/Footer.tsx`**

Replace the blurb at `:28-32` with:

```tsx
                        <p className="text-sm text-ink-2 leading-relaxed max-w-xs">
                            Managed intelligence for operators whose records have to
                            hold up. One firm that integrates, embeds, maintains, and
                            builds the stack your business actually runs on.
                        </p>
```

- [ ] **Step 4d: Contact page lede — `app/contact/page.tsx`**

Replace the four-vertical sentence at `:30-36` with:

```tsx
                    <p className="mt-6 md:mt-8 text-lg text-ink-2 leading-relaxed max-w-3xl">
                        We don&apos;t do the traditional enterprise sales dance. If
                        someone outside your company can ask you to prove where a
                        number came from — and nobody in-house owns keeping those
                        systems honest — the first conversation is simple.
                    </p>
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit
npm run build
/usr/bin/grep -rnE '\$40k|\$120k' app/ components/ public/
/usr/bin/grep -rniE 'trades|factories|franchises|property manage' app/ components/ public/ | /usr/bin/grep -v operational-intelligence
```

Expected: `tsc` silent, build succeeds, **both** greps return nothing. The second grep is **case-insensitive** — a case-sensitive pattern false-passed on capitalised verticals during Task 3 and hid `Hero.tsx:27` entirely.

- [ ] **Step 6: Commit**

```bash
git add app/services/page.tsx public/llms.txt components/JsonLd.tsx
git commit -m "site: align services, llms.txt and structured data with the new price book and ICP

Per docs/superpowers/specs/2026-09-16-pricing-and-icp-repositioning-design.md"
```

---

### Task 5: Whole-site consistency sweep

**Files:** none modified unless the sweep finds a violation

**Interfaces:**
- Consumes: everything from Tasks 1–4
- Produces: the final verified state

- [ ] **Step 1: Assert every retired string is gone**

```bash
cd ~/Repos/_ofc/OldForrestConsulting
/usr/bin/grep -rnE '\$40k|\$120k|Four tiers|Four verticals' app/ components/ public/
/usr/bin/grep -rniE 'trades|factories|franchises|property manage' app/ components/ public/ | /usr/bin/grep -v operational-intelligence
```

Expected: no output from either.

**The second grep is case-insensitive on purpose.** The original plan swept only price strings, which would have let the retired four-vertical positioning ship in `app/layout.tsx`'s root `<meta description>` (every page's `<head>`), `components/Footer.tsx` (11 pages), and `app/contact/page.tsx`. Task 3's implementer found all three; Task 4 Steps 4b–4d now own them. Separately, a *case-sensitive* audit pattern (`trades|factor|franchis`) false-passed on the capitalised `For Trades · Factories · Franchises` in `components/home/Hero.tsx:27` — the single most prominent line on the site. Always `-i` for vertical strings.

The `operational-intelligence` exclusion is deliberate: that page is a segment landing page for multi-entity construction operators, so naming trades there is correct and in scope for it (spec §5.1 leaves it untouched).

**Do not add `$10k–$15k` to this pattern.** It legitimately survives at `app/pricing/page.tsx:97` and `:150` as a *sourced third-party benchmark* for a Fractional CTO inside `mathRows`/`sources` — market comparison data the spec explicitly preserves (D8), not an OFC price. Instead verify by eye that every surviving occurrence sits inside `mathRows` or `sources`:

```bash
/usr/bin/grep -n '\$10k–\$15k' app/pricing/page.tsx
```

Expected: only hits within the vendor-benchmark arrays. Never reformat a cited figure to satisfy a regex.

- [ ] **Step 2: Assert no page claims hourly billing**

```bash
/usr/bin/grep -rniE 'per hour|hourly|/hr' app/ components/ public/ | /usr/bin/grep -v operational-intelligence
```

Expected: no output, or only (a) occurrences describing a *vendor's* pricing in the comparison table, or (b) a sentence whose sense is that OFC is **not** hourly. Both are permitted — the constraint forbids hourly as OFC's *billing basis*, so a negation asserting the opposite is on-message and a bare word grep is a false positive against it. Inspect each hit rather than assuming.

- [ ] **Step 3: Reconcile against the one-pager**

```bash
/usr/bin/grep -nE '\$[0-9,]+' offers/2026-06-09-operational-intelligence-one-pager.md | head -20
```

Confirm by eye that every figure there ($9,500 assessment, from $2,500/mo managed) matches `/pricing`. If the one-pager's build range ($45–95k) is quoted anywhere on the site, either remove it from the site or accept it as an example — it must not read as a fixed list price.

- [ ] **Step 4: Confirm the untouched page really is untouched**

```bash
git diff --name-only "$(git merge-base main HEAD)" HEAD -- app/operational-intelligence/
```

Expected: no output. If this file changed, revert it — spec §5.1.

- [ ] **Step 5: Full build and route check**

```bash
npm run build
ls out/pricing/index.html out/who-we-serve/index.html out/products/index.html out/index.html
```

Expected: build succeeds; all four files exist.

- [ ] **Step 6: Report to Chris, do not push**

Summarise: what changed per page, the retired strings confirmed absent, and the §8 assumption actually taken (90-day sprint kept as a fixed-fee Build). Ask whether to push, since push deploys to production.

---

## Self-Review

**Spec coverage:**

| Spec section | Task |
|---|---|
| §3.1 ladder (Assessment / Build / Managed) | Task 1 Step 1 |
| §3.2 Managed tiers | Task 1 Steps 1, 4 |
| §3.3 arithmetic objection | Task 1 Step 4 |
| §2 D5 no rollover | Task 1 Step 4 |
| §3.4 retired tiers and figures | Task 1 Steps 1, 6; Task 5 Step 1 |
| §2 D8 split-vendor comparison kept, generalised | Task 1 Step 5 |
| §4.1 qualifying questions | Task 2 Steps 1, 3 |
| §4.2 examples underneath | Task 2 Steps 1, 3 |
| §4.3 explicit exclusions | Task 2 Step 3 |
| §5 `/` home | Task 3 |
| §5 `/services` | Task 4 Step 1 |
| §5 `llms.txt` | Task 4 Steps 2, 3 |
| §5 `JsonLd.tsx` | Task 4 Step 4 |
| §5.1 OI page untouched | Task 5 Step 4 |
| §7 verification | every task's verify step; Task 5 |
| §8 open item | Global Constraints (assumption stated) + Task 4 Step 1 |

No gaps.

**Placeholder scan:** No "TBD", no "add appropriate X", no "similar to Task N". Every copy change carries the literal replacement text. Two steps are deliberately conditional audits rather than fixed edits — Task 3 Step 1 and Task 4 Steps 1 and 4 — because the current contents of `Hero.tsx`, `services/page.tsx` and `JsonLd.tsx` were not read line-by-line when this plan was written. Each of those steps states the grep to run and the decision rule to apply, which is the actual content needed; they are audits by design, not deferred decisions.

**Type consistency:** `Tier` keeps its existing shape so the JSX consuming it at `:227-249` needs no change. `ManagedTier` is new and consumed only by the new section in Task 1 Step 4. Task 2 renames `verticals` → `questions` + `examples`, and Task 3 renames `verticals` → `signals`; both rename the `.map()` call in the same step as the array, so no task leaves a dangling reference. `reasons` is modified in place, not renamed.
