import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Four tiers. Embed, Operate, Maintain, Build. Pick the right entry point for where you are today, with a transparent split-vendor comparison.",
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
        name: "Embed",
        tagline: "90-day intensive",
        price: "$40k",
        priceUnit: "/mo",
        sub: "× 3 months · $120k total",
        featured: true,
        items: [
            "Full discovery and inventory",
            "Stack configuration and tuning",
            "System integration and data layer",
            "BI dashboards built and live",
            "Custom tooling as needed",
            "Vendor consolidation",
            "Documentation and runbooks",
            "Handoff to steady-state tier",
        ],
    },
    {
        name: "Operate",
        tagline: "Active ongoing",
        price: "$10k–$15k",
        priceUnit: "/mo",
        sub: "Multi-system, active work",
        items: [
            "Everything in Maintain, plus:",
            "Ongoing dashboard iteration",
            "Active vendor management",
            "New integrations as needed",
            "Monthly strategy review",
            "Custom builds included up to scope",
        ],
    },
    {
        name: "Maintain",
        tagline: "Stabilized · low-touch",
        price: "$5k",
        priceUnit: "/mo",
        sub: "~20 hours/mo",
        items: [
            "On-call software & hardware support",
            "Integration monitoring",
            "Minor iterations and fixes",
            "Monthly review and roadmap check-in",
            "Vendor liaison",
            "Larger work scoped as Build projects",
        ],
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
        body: "Regional MSP pricing for a ~20–30 user mid-market trades/construction client at $100–$200 per user per month for comprehensive managed services including monitoring, helpdesk, and security.",
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
        head: "Vertical pattern recognition.",
        body: "We've done this in construction and exteriors already. We're not learning your industry on your dime.",
    },
    {
        head: "Context compounds.",
        body: "After 90 days we know your business. A vendor you replaced starts from zero; we build on what's already there.",
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">Transparent by design</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        Four tiers. Pick the right entry point for where{" "}
                        <span className="italic text-ember">you are today.</span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-lg text-ink-2 leading-relaxed max-w-3xl">
                        Most clients with real operational complexity start with{" "}
                        <strong className="text-forest-deep">Embed</strong> — a 90-day
                        configuration sprint that gets the whole stack into shape
                        fast. Others start at{" "}
                        <strong className="text-forest-deep">Operate</strong> or{" "}
                        <strong className="text-forest-deep">Maintain</strong> and
                        build momentum from there.{" "}
                        <strong className="text-forest-deep">Build</strong> projects
                        sit alongside any tier for discrete work.
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

                    {/* Build sidecar */}
                    <div className="mt-6 bg-white rounded-md p-7 border border-rule border-l-[3px] border-l-ember">
                        <div className="kicker mb-2">Build · Discrete projects</div>
                        <p className="text-base text-ink-2 leading-relaxed">
                            Layered on any tier when you need a specific thing built —
                            a new integration, a custom tool, a migration, a website
                            rebuild.{" "}
                            <strong className="text-forest-deep">
                                Fixed-fee scopes, not hourly.
                            </strong>{" "}
                            Most projects land in the $5k–$50k range depending on
                            complexity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Three ways to start */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="kicker mb-3">Three ways to start</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-6">
                        Match the tier to where you are.
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                        <strong className="text-forest-deep">Embed</strong> is the
                        right fit when you want everything configured, integrated,
                        and live in 90 days — multi-entity holdings, multi-location
                        operators, or trades companies that have outgrown the
                        spreadsheet stage.{" "}
                        <strong className="text-forest-deep">Operate</strong> makes
                        sense when you already have a working stack and want us
                        actively building, integrating, and iterating alongside your
                        team.{" "}
                        <strong className="text-forest-deep">Maintain</strong> is
                        for businesses whose stack is stable and who mostly need a
                        reliable on-call partner and a monthly check-in. Any tier
                        can graduate up or down as needs change — no penalty, no
                        renegotiation theater.
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
                        The easiest way to understand what Embed is worth is to price
                        out what it costs to source the same work across the vendors
                        you&apos;d otherwise hire. Here&apos;s the current-market
                        comparison for a client with real operational complexity —
                        the kind of client who needs Embed.
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

                    {/* 40% callout */}
                    <div
                        className="mt-10 rounded-lg p-7 md:p-9 text-cream"
                        style={{
                            background:
                                "linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest) 100%)",
                        }}
                    >
                        <div className="font-heading text-2xl md:text-3xl text-cream tracking-tight leading-tight mb-2">
                            Embed is{" "}
                            <span className="italic text-cream-2 underline decoration-cream-2/60 underline-offset-[6px] decoration-1">
                                ~40% less
                            </span>{" "}
                            than the split-vendor equivalent.
                        </div>
                        <p className="text-sm md:text-base text-cream-2/90 leading-relaxed">
                            Embed at $40k/mo is roughly 40% below the midpoint of
                            sourcing the same work across vendors — before counting
                            the coordination tax (20–30% slippage across 6–8 vendors)
                            and the project-management burden that currently falls on
                            you. In steady state, Maintain at $5k/mo is the cheapest
                            insurance policy you&apos;ll buy for your stack.
                        </p>
                    </div>

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

                    <p className="mt-8 text-sm text-ink-3 italic leading-relaxed">
                        Coordination tax estimate (20–30% additional cost across 6–8
                        vendors) reflects commonly-reported overhead from duplicated
                        discovery, misaligned context, and client-side project
                        management burden when sourcing across multiple specialized
                        vendors. Client savings will vary by stack complexity, vendor
                        count, and operational maturity.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        Ready to talk through which tier fits?
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        Bring your stack, your team size, and what&apos;s frustrating
                        you. We&apos;ll tell you honestly which tier makes sense — or
                        if we&apos;re not the right fit at all.
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
