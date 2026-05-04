import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Who We Serve",
    description:
        "Trades, factories, and franchises. Operations-heavy businesses with distributed workforces, mixed legacy and modern tools, and data trapped across systems.",
};

const verticals = [
    {
        name: "Trades",
        desc: "Construction, exteriors, roofing, HVAC, plumbing, electrical. Field crews, job sites, multiple operating entities, quoting and scheduling tools layered over accounting, and a CRM that nobody trusts. We rebuild HubSpot portals, configure inbound demand workflows, and stand up live pipeline-health dashboards crews and ownership both use.",
    },
    {
        name: "Factories",
        desc: "Small-to-mid manufacturers, shops, and fabrication. ERP modules, shop-floor hardware, inventory and production data that doesn't reach management in time to act on it. We build the data layer that turns shift-by-shift output into the same view ownership sees, and we own the hardware and integrations that make it real.",
    },
    {
        name: "Franchises",
        desc: "Multi-location operators. Each location runs a slightly different stack, corporate wants unified reporting, and \"rolling it up\" currently means someone's spreadsheet. We standardize the per-location stack where it matters, leave it alone where it doesn't, and build the roll-up so corporate stops re-doing the math every Monday.",
    },
];

const reasons = [
    {
        title: "We're the whole stack.",
        body: "You stop paying four different vendors to coordinate badly. One invoice, one Slack channel, one partner who knows everything.",
    },
    {
        title: "We move fast because we use AI where it matters.",
        body: "Configuration, integration, and dashboard work that took agencies three months takes us three weeks. You get agency-grade output at a pace that actually matches how your business moves.",
    },
    {
        title: "We stay.",
        body: "After the initial build, we're still here — monitoring, iterating, answering the phone when the shop PC won't boot. Most consultants hand off and disappear. We don't.",
    },
    {
        title: "We know your business, not just your software.",
        body: "A dashboard is only useful if the person who built it understands what the numbers mean to you. We take the time to get that right once, and everything downstream is better for it.",
    },
];

export default function WhoWeServePage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">Three verticals, one pattern</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        Operations-heavy businesses the big firms won&apos;t touch and
                        the generalists{" "}
                        <span className="italic text-ember">don&apos;t understand.</span>
                    </h1>
                </div>
            </section>

            {/* Lede */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed">
                        Every business we serve shares the same profile: physical
                        operations, a distributed workforce or locations, a mix of
                        legacy and modern tools, data trapped across systems, and no
                        one on the inside whose job is to make sense of it. The BI
                        consultancies won&apos;t touch them because the engagements
                        are too small. Generalist MSPs don&apos;t understand how the
                        business actually runs. We sit in that gap — and we&apos;re
                        the only people who belong there.
                    </p>
                </div>
            </section>

            {/* Verticals */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {verticals.map((v) => (
                            <div
                                key={v.name}
                                className="bg-white rounded-md p-7 border-l-[3px] border-forest"
                            >
                                <h2 className="font-heading text-2xl md:text-3xl text-forest mb-4">
                                    {v.name}
                                </h2>
                                <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why we work */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">
                        Why we work for these businesses
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest-deep tracking-tight leading-[1.15] mb-12">
                        Four things that change when you have one partner instead of
                        seven.
                    </h2>

                    <ol className="list-none p-0">
                        {reasons.map((reason, i) => (
                            <li
                                key={reason.title}
                                className="relative pl-12 md:pl-16 py-5 border-b border-dashed border-rule last:border-b-0"
                            >
                                <span
                                    aria-hidden
                                    className="absolute left-0 top-5 inline-flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-forest-deep text-cream font-heading font-bold text-base md:text-lg"
                                >
                                    {i + 1}
                                </span>
                                <h3 className="font-heading text-lg md:text-xl text-forest-deep mb-1.5">
                                    {reason.title}
                                </h3>
                                <p className="text-[0.95rem] md:text-base text-ink-2 leading-relaxed">
                                    {reason.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 border-t border-rule bg-cream-2/40">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        See if we&apos;re the right partner for your business.
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        We&apos;ll tell you honestly whether we&apos;re a fit on the
                        first call. No pressure, no long sales cycle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-cream bg-forest hover:bg-forest-deep rounded-md transition-colors"
                        >
                            Start the conversation
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/case-studies/erk-holdings"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-forest border border-forest/30 hover:border-forest hover:bg-forest/5 rounded-md transition-colors"
                        >
                            Read the ERK Holdings case
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
