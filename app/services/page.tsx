import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Integrate, embed, maintain, and build. And we handle your vendors so you don't have to. The 90-day Embed sprint and ongoing tiers.",
};

const verbs = [
    {
        name: "Integrate",
        desc: "Make your systems talk. CRM to accounting to field tools to dashboards. We replace the spreadsheets holding your data flows together with real connections, real syncs, and a layer that holds when something changes upstream.",
    },
    {
        name: "Embed",
        desc: "Configure the stack to how your business actually works. Not theoretical best-practice, your reality. We walk the shop, ride along with field crews, and tune CRM pipelines, deal stages, properties, and workflows around the way the work actually moves.",
    },
    {
        name: "Maintain",
        desc: "On-call for the software and the hardware. Monitoring, updates, fixes, vendor escalations. Your stack stays quiet. When the shop PC won't boot at 6am, you call one number.",
    },
    {
        name: "Build",
        desc: "Custom dashboards, automations, and tools. When off-the-shelf doesn't fit your workflow, we ship what does — Next.js dashboards on dedicated infrastructure, integrations against vendor APIs, internal tools that own a workflow end-to-end.",
    },
];

const phases = [
    {
        num: "Phase 01",
        weeks: "Weeks 1–2",
        title: "Discovery",
        items: [
            "Inventory every tool, vendor, and integration",
            "Walk the shop, ride along with field crews",
            "Interview owners, ops leads, and daily users",
            "Map data flows — real ones, not org-chart ones",
            "Identify quick wins and deep fixes",
        ],
    },
    {
        num: "Phase 02",
        weeks: "Weeks 3–6",
        title: "Configure",
        items: [
            "Stand up and tune CRM, field tools, accounting links",
            "Build workflows and automations",
            "Fix or replace broken vendor setups",
            "Standardize data entry and naming",
            "Document everything as we go",
        ],
    },
    {
        num: "Phase 03",
        weeks: "Weeks 7–10",
        title: "Integrate & Build",
        items: [
            "Connect systems to a central data layer",
            "Build live BI dashboards (owner, ops, field)",
            "Custom tooling where off-the-shelf falls short",
            "Alerting on what actually matters",
            "Vendor relationships formalized under us",
        ],
    },
    {
        num: "Phase 04",
        weeks: "Weeks 11–12",
        title: "Handoff & Steady State",
        items: [
            "Train your team on the new flow",
            "Document the full stack and runbooks",
            "Transition to ongoing support tier",
            "Set recurring review cadence",
            "On-call coverage begins",
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">The short version</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        One firm that integrates, embeds, maintains, and builds the
                        stack your business actually runs on{" "}
                        <span className="italic text-ember">
                            — and handles your vendors.
                        </span>
                    </h1>
                </div>
            </section>

            {/* Lede + body */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed mb-6">
                        Most mid-market operations-heavy businesses run on a dozen
                        tools nobody fully understands: a CRM, a field app, a time
                        tracker, a quoting tool, an ERP module, a couple of spreadsheets
                        holding everything together, and a few pieces of hardware in
                        the shop that one person knows how to fix. When something
                        breaks, you call a different vendor for each layer. When you
                        want to know how the business is actually doing, you get a
                        report that&apos;s two weeks old.
                    </p>
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed">
                        We replace that. We&apos;re a small firm that does what used
                        to take a fractional CTO, an MSP, a BI consultancy, and an
                        integration partner — combined, coordinated, and delivered
                        by the same team that knows your business. AI-enabled where
                        it matters; human where it has to be.
                    </p>
                </div>
            </section>

            {/* Four verbs — expanded */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-3">The four verbs</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-12">
                        What we do, in plain language.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {verbs.map((v) => (
                            <div
                                key={v.name}
                                className="bg-white border border-rule border-l-[3px] border-l-ember rounded-md p-7"
                            >
                                <h3 className="font-heading text-2xl text-forest-deep mb-3">
                                    {v.name}
                                </h3>
                                <p className="text-[1rem] text-ink-2 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vendor callout */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div
                        className="rounded-lg p-8 md:p-12 text-cream"
                        style={{
                            background:
                                "linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest) 100%)",
                        }}
                    >
                        <h2 className="font-heading text-2xl md:text-4xl text-cream tracking-tight leading-[1.2] mb-3">
                            And the part nobody else offers:{" "}
                            <span className="text-ember-soft">
                                we handle your vendors.
                            </span>
                        </h2>
                        <p className="text-base md:text-lg text-cream-2/90 leading-relaxed">
                            One number to call. We own the relationship with your CRM
                            provider, your field-tool vendor, your hardware supplier,
                            your internet provider, and the guy who built your website.
                            You stop being the integration manager for your own business.
                        </p>
                    </div>
                </div>
            </section>

            {/* 90-day Embed flow */}
            <section className="py-16 md:py-20 border-y border-rule bg-cream-2/40">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-3">How it works</div>
                    <h2 className="font-heading text-3xl md:text-5xl text-forest-deep tracking-tight leading-[1.1] max-w-4xl mb-6">
                        The Embed sprint: when you want it all configured in 90 days.
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-3xl mb-12">
                        The flow below is what an{" "}
                        <strong className="text-forest-deep">Embed</strong> engagement
                        looks like — a 90-day configuration sprint that takes a
                        business from tool sprawl to a working, integrated stack with
                        live dashboards and documented runbooks. It&apos;s the right
                        fit when you want real change fast. Clients who already have a
                        working stack can skip the sprint and start at{" "}
                        <strong className="text-forest-deep">Operate</strong> or{" "}
                        <strong className="text-forest-deep">Maintain</strong> — the
                        first 30 days of any engagement still include discovery, just
                        proportional to the tier.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {phases.map((phase) => (
                            <div
                                key={phase.num}
                                className="bg-white border-t-[3px] border-forest rounded-b-md p-5"
                            >
                                <div className="font-sans text-xs font-bold tracking-[0.15em] text-ember mb-1">
                                    {phase.num.toUpperCase()}
                                </div>
                                <div className="font-heading text-base font-bold text-forest-deep mb-1">
                                    {phase.weeks}
                                </div>
                                <div className="font-heading text-base font-bold text-ink mb-3">
                                    {phase.title}
                                </div>
                                <ul className="space-y-1">
                                    {phase.items.map((item) => (
                                        <li
                                            key={item}
                                            className="relative pl-3 text-[0.85rem] text-ink-2 leading-relaxed before:content-['·'] before:absolute before:left-0 before:text-ember before:font-bold"
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

            {/* Steady state */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-forest-deep text-cream rounded-lg p-8 md:p-10">
                        <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4">
                            After the 90 days, what steady state looks like
                        </h3>
                        <p className="text-base text-cream-2/90 leading-relaxed mb-4">
                            You have a stack that works. Your dashboards are live. Your
                            vendors are managed. Your data tells you what happened
                            yesterday, not what happened last month. When something
                            breaks, you call one number. When you want to change
                            something, you ask one team.
                        </p>
                        <p className="text-base text-cream-2/90 leading-relaxed">
                            We&apos;re still here — as much or as little as you need.
                            Most clients settle into a monthly rhythm of a standing
                            review, ongoing small builds, and on-call coverage for the
                            stack. The{" "}
                            <Link
                                href="/pricing"
                                className="text-ember-soft underline underline-offset-2 hover:text-ember"
                            >
                                tier structure
                            </Link>{" "}
                            is how we match what you need to what you pay.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24 border-t border-rule">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        Want to see what this looks like for your business?
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        A 30-minute intro call. No slides, no pitch. Tell us about
                        your business, the stack, and what&apos;s frustrating you
                        right now.
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
