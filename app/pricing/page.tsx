import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Two ways to work with us: fixed-fee projects with written change orders, or a flat monthly fee for a named stack. Every number here is one we have actually charged.",
};

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
        priceUnit: " fixed",
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
        priceUnit: " per project",
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

interface MathRow {
    func: string;
    vendor: string;
    range: string;
    ref: number;
}

const mathRows: MathRow[] = [
    {
        func: "HubSpot / CRM admin & RevOps",
        vendor: "Certified partner agency",
        range: "$8k–$15k",
        ref: 1,
    },
    {
        func: "Custom BI dashboards & hosting",
        vendor: "Dev shop or freelance team",
        range: "$10k–$20k",
        ref: 2,
    },
    {
        func: "Fractional CTO",
        vendor: "Solo fractional",
        range: "$10k–$15k",
        ref: 3,
    },
    {
        func: "Fractional COO / ops strategist",
        vendor: "Solo fractional",
        range: "$8k–$12k",
        ref: 4,
    },
    {
        func: "Managed IT / on-call support",
        vendor: "Regional MSP",
        range: "$3k–$6k",
        ref: 5,
    },
    {
        func: "Web dev / integrations",
        vendor: "Agency project fees, amortized",
        range: "$5k–$10k",
        ref: 6,
    },
    {
        func: "Vendor evaluation & procurement",
        vendor: "Boutique consultant",
        range: "$5k–$10k",
        ref: 7,
    },
    {
        func: "Executive documentation & comms",
        vendor: "Fractional chief of staff",
        range: "$3k–$5k",
        ref: 8,
    },
];

interface Source {
    label: string;
    body: string;
    cite: string;
}

const sources: Source[] = [
    {
        label: "HubSpot / CRM admin & RevOps — $8k–$15k/mo",
        body: "Certified HubSpot partner agency retainers for active portal administration, RevOps architecture, and workflow management. Range consistent with industry-standard implementation-plus-retainer pricing for mid-market HubSpot customers.",
        cite: "HubSpot Solutions Partner directory pricing benchmarks, 2026. Blended from certified partner public rate cards.",
    },
    {
        label: "Custom BI dashboards & hosting — $10k–$20k/mo",
        body: "Ongoing dev-shop or freelance-team retainers for custom BI builds (Next.js, React, data pipeline, hosting). Reflects typical full-stack team rates for active dashboard iteration plus infrastructure management.",
        cite: "US dev agency retainer benchmarks, 2026; cross-referenced with Pertama Partners AI/BI implementation cost ranges.",
    },
    {
        label: "Fractional CTO — $10k–$15k/mo",
        body: "Mid-to-upper range for ongoing fractional CTO retainers for growth-stage and mid-market companies, reflecting 2–3 days per week of senior technical leadership.",
        cite: "Fractional CTO Cost & Rates 2026 Complete Pricing Guide (fractionalctoexperts.com); Kompella Technologies 2026 pricing guide; Emizentech fractional CTO rates 2026.",
    },
    {
        label: "Fractional COO / ops strategist — $8k–$12k/mo",
        body: "Typical ongoing retainer range for solo fractional COO/ops leadership at mid-market scale. Aligned with fractional-executive ranges across adjacent functions (CFO, CTO) in operations-heavy industries.",
        cite: "Cross-referenced from Madras Accountancy Fractional CFO Rates by Industry 2026 (construction vertical) and fractional-executive pricing guides.",
    },
    {
        label: "Managed IT / on-call support — $3k–$6k/mo",
        body: "Regional MSP pricing for a ~20–30 user mid-market client at $100–$200 per user per month for comprehensive managed services including monitoring, helpdesk, and security.",
        cite: "Datapath Managed IT Services Pricing Guide 2026; Solutionbuilders Ultimate 2026 Guide to Managed IT Services Pricing; Corsica Technologies 2026 pricing benchmarks.",
    },
    {
        label: "Web dev / integrations — $5k–$10k/mo",
        body: "Amortized agency project fees for website rebuilds, integration builds, and ongoing web development work, spread over typical 6–12 month engagement cycles.",
        cite: "US digital agency project-fee benchmarks, 2026. Derived from public agency rate cards for mid-market clients.",
    },
    {
        label: "Vendor evaluation & procurement — $5k–$10k/mo",
        body: "Boutique consulting fees for ongoing vendor evaluation, procurement support, and tool selection across software and hardware stacks typical in operationally-complex mid-market businesses.",
        cite: "Boutique consulting retainer benchmarks; cross-referenced from MSP value-based pricing examples in DeskDay 2026 MSP pricing guide.",
    },
    {
        label: "Executive documentation & comms — $3k–$5k/mo",
        body: "Fractional chief of staff or executive-ghostwriter monthly retainer range for ongoing leadership documentation, briefings, and stakeholder communications at mid-market scale.",
        cite: "Fractional chief-of-staff market benchmarks, 2026.",
    },
];

const mathBullets = [
    {
        head: "AI where it matters.",
        body: "Configuration, documentation, and dashboard work is force-multiplied by modern tooling. Agency-grade output at two-person speed.",
    },
    {
        head: "Pattern recognition across industries.",
        body: "The same problem recurs in title, survey, death care, construction, and clinical work: a record that has to survive being questioned. We are not learning that problem on your dime.",
    },
    {
        head: "Context compounds.",
        body: "Once we've run your stack for a while, we know your business. A vendor you replaced starts from zero; we build on what's already there.",
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">Priced before we start</div>
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
                </div>
            </section>

            {/* Tiers */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={
                                    tier.featured
                                        ? "relative bg-forest-deep text-cream rounded-md p-7 pt-9 flex flex-col"
                                        : "relative bg-white border border-rule rounded-md p-7 flex flex-col"
                                }
                            >
                                {tier.featured && (
                                    <div className="absolute -top-3 left-5 bg-ember text-white text-[0.625rem] font-bold tracking-[0.15em] px-3 py-1 rounded-sm">
                                        FLAGSHIP ENGAGEMENT
                                    </div>
                                )}
                                <div
                                    className={
                                        "font-heading text-2xl font-bold mb-1 " +
                                        (tier.featured ? "text-cream" : "text-forest-deep")
                                    }
                                >
                                    {tier.name}
                                </div>
                                <div
                                    className={
                                        "font-sans text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-3 " +
                                        (tier.featured ? "text-ember-soft" : "text-ember")
                                    }
                                >
                                    {tier.tagline}
                                </div>
                                <div
                                    className={
                                        "font-heading font-bold leading-none mb-1 " +
                                        (tier.featured
                                            ? "text-cream text-4xl"
                                            : "text-forest text-4xl")
                                    }
                                >
                                    {tier.price}
                                    <span className="text-base font-normal opacity-70">
                                        {tier.priceUnit}
                                    </span>
                                </div>
                                <div
                                    className={
                                        "text-xs mb-5 " +
                                        (tier.featured
                                            ? "text-cream-2/70"
                                            : "text-ink-3")
                                    }
                                >
                                    {tier.sub}
                                </div>
                                <ul className="list-none p-0 space-y-2 flex-1">
                                    {tier.items.map((item) => (
                                        <li
                                            key={item}
                                            className={
                                                "relative pl-5 text-sm leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-ember before:font-bold " +
                                                (tier.featured
                                                    ? "text-cream-2/95"
                                                    : "text-ink-2")
                                            }
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

            {/* How engagements start */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="kicker mb-3">How engagements start</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-6">
                        Most engagements start the same way.
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                        <strong className="text-forest-deep">Assessment</strong> is
                        the usual entry point. From there, most clients move to{" "}
                        <strong className="text-forest-deep">Build</strong> for a
                        defined project at a fixed fee, milestone by milestone, or
                        to <strong className="text-forest-deep">Managed</strong>{" "}
                        for an ongoing named stack at a flat monthly fee. Either can
                        also start cold, without an assessment first, if you already
                        know what you need.
                    </p>
                    <p className="mt-5 text-sm text-ink-3 italic leading-relaxed">
                        All engagements are covered by our standard{" "}
                        <Link
                            href="/legal/msa"
                            className="text-forest underline underline-offset-2 hover:text-ember"
                        >
                            Master Service Agreement
                        </Link>
                        . Pricing is firm — what keeps it that way is that it&apos;s
                        genuinely fair for the work. The math is below.
                    </p>
                </div>
            </section>

            {/* The math */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="kicker mb-3">What you&apos;d pay elsewhere</div>
                    <h2 className="font-heading text-3xl md:text-5xl text-forest-deep tracking-tight leading-[1.1] mb-6">
                        The split-vendor comparison.
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed mb-8 max-w-3xl">
                        The easiest way to see what vendor consolidation is worth is
                        to price out what it costs to source the same functions
                        across the specialists you&apos;d otherwise hire one by one.
                        Here&apos;s the current-market comparison for a client with
                        real operational complexity — the kind of client who ends up
                        managing a fleet of vendors instead of one firm.
                    </p>

                    <div className="overflow-x-auto -mx-6 md:mx-0">
                        <table className="w-full min-w-[640px] border-collapse text-sm md:text-base">
                            <thead>
                                <tr className="bg-forest-deep text-cream">
                                    <th className="px-4 py-3 text-left font-sans text-xs tracking-[0.08em] uppercase font-semibold">
                                        Function
                                    </th>
                                    <th className="px-4 py-3 text-left font-sans text-xs tracking-[0.08em] uppercase font-semibold">
                                        Typical vendor
                                    </th>
                                    <th className="px-4 py-3 text-right font-sans text-xs tracking-[0.08em] uppercase font-semibold">
                                        Monthly equivalent
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {mathRows.map((row) => (
                                    <tr
                                        key={row.func}
                                        className="border-b border-rule bg-white"
                                    >
                                        <td className="px-4 py-3 text-ink-2">
                                            {row.func}
                                        </td>
                                        <td className="px-4 py-3 text-ink-2">
                                            {row.vendor}
                                        </td>
                                        <td className="px-4 py-3 text-right font-heading font-bold text-forest">
                                            {row.range}
                                            <sup className="text-ember">{row.ref}</sup>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className="bg-cream-2 px-4 py-4 font-bold text-forest-deep text-base"
                                    >
                                        Split-vendor total (midpoint)
                                    </td>
                                    <td className="bg-cream-2 px-4 py-4 text-right font-heading font-bold text-ember text-xl">
                                        ~$70k/mo
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <p className="mt-6 text-sm text-ink-3 italic leading-relaxed max-w-3xl">
                        A full engagement usually spans the whole ladder, not one
                        line of it: an Assessment finds the work, a Build does it,
                        and Managed keeps it running afterward. The monthly fee
                        alone isn&apos;t a stand-in for all eight functions above —
                        it&apos;s what keeps the ones you&apos;ve already built
                        running.
                    </p>

                    {/* What makes the math work */}
                    <div className="mt-12">
                        <div className="kicker mb-4">What makes this math work</div>
                        <ul className="space-y-3">
                            {mathBullets.map((b) => (
                                <li
                                    key={b.head}
                                    className="relative pl-6 text-base text-ink-2 leading-relaxed before:content-['■'] before:absolute before:left-0 before:top-1 before:text-ember before:text-xs"
                                >
                                    <strong className="text-forest-deep">
                                        {b.head}
                                    </strong>{" "}
                                    {b.body}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sources */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">Methodology & references</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-6">
                        Where the comparison numbers come from.
                    </h2>
                    <p className="text-base text-ink-2 leading-relaxed mb-8">
                        The split-vendor comparison uses 2026 market-rate ranges drawn
                        from published pricing guides, benchmark reports, and
                        MSP/fractional-leadership research across North America.
                        Ranges reflect what a mid-market operationally-complex client
                        would pay to source each function from a qualified specialist.
                        Source numbers match the superscripts in the comparison table.
                    </p>

                    <ol className="list-none p-0">
                        {sources.map((src, i) => (
                            <li
                                key={src.label}
                                className="relative pl-10 py-4 border-b border-dashed border-rule last:border-b-0"
                            >
                                <span
                                    aria-hidden
                                    className="absolute left-0 top-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-forest-deep text-cream font-heading font-bold text-xs"
                                >
                                    {i + 1}
                                </span>
                                <div className="font-heading font-bold text-forest-deep text-[0.95rem] mb-1">
                                    {src.label}
                                </div>
                                <p className="text-sm text-ink-2 leading-relaxed mb-1">
                                    {src.body}
                                </p>
                                <p className="text-xs text-ink-3">{src.cite}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        Ready to talk through which engagement fits?
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        Bring your stack, your team size, and what&apos;s frustrating
                        you. We&apos;ll tell you honestly which engagement makes
                        sense — or if we&apos;re not the right fit at all.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-cream bg-forest hover:bg-forest-deep rounded-md transition-colors"
                    >
                        Start the conversation
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
