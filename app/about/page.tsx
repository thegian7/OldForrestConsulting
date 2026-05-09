import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Old Forrest Consulting is a Utah-based firm founded by Christopher Ledbetter and Taylor Westmoreland. The kind of partner we wished we'd had when we were on the operating side.",
};

const principles = [
    {
        head: "Honest about fit.",
        body: "We tell you on the first call whether we're the right partner. The wrong engagement is bad for both of us.",
    },
    {
        head: "Fast where it counts.",
        body: "AI-enabled where it matters; human where it has to be. Configuration, integration, and dashboard work that took agencies three months takes us three weeks.",
    },
    {
        head: "Present after the build.",
        body: "Most consultants hand off and disappear. We're still here — monitoring, iterating, answering the phone.",
    },
    {
        head: "One number to call.",
        body: "We own the relationships with your CRM, field tools, hardware, internet, and website vendors. You stop being the integration manager for your own business.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">About the firm</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        The kind of partner we{" "}
                        <span className="italic text-ember">
                            wished we&apos;d had
                        </span>{" "}
                        when we were on the operating side.
                    </h1>
                </div>
            </section>

            {/* Firm story */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed mb-6">
                        Old Forrest Consulting is a Utah-based firm founded by{" "}
                        <strong className="text-forest-deep">
                            Christopher Ledbetter
                        </strong>{" "}
                        and{" "}
                        <strong className="text-forest-deep">
                            Taylor Westmoreland
                        </strong>
                        . We built it to sit in the gap operations-heavy mid-market
                        businesses fall into — too small for the BI consultancies, too
                        complicated for generalist MSPs, and not well served by the
                        sea of single-purpose vendors competing for the budget.
                    </p>
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed mb-6">
                        We do what used to take a fractional CTO, an MSP, a BI
                        consultancy, and an integration partner — combined,
                        coordinated, and delivered by the same team that knows your
                        business. AI-enabled where it matters; human where it has to
                        be.
                    </p>
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed">
                        We built Old Forrest to be the kind of partner we wished
                        we&apos;d had when we were on the operating side — honest,
                        fast, and present.
                    </p>
                </div>
            </section>

            {/* Founders */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-3">Founders</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-12">
                        Two operators who&apos;ve been on the inside.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white rounded-md p-7 md:p-9 border-l-[3px] border-forest">
                            <h3 className="font-heading text-2xl md:text-3xl text-forest-deep mb-2">
                                Christopher Ledbetter
                            </h3>
                            <div className="text-xs font-sans tracking-[0.1em] uppercase text-ember font-bold mb-5">
                                Founder · Managing Partner
                            </div>
                            <p className="text-base text-ink-2 leading-relaxed mb-4">
                                Christopher&apos;s background spans technical
                                leadership at <strong>NetApp</strong> and{" "}
                                <strong>Dropbox</strong>, with hands-on work across
                                infrastructure, data platforms, and AI tooling. He
                                runs the firm — leading engagement strategy, technical
                                architecture, and the AI-enabled workflows that let a
                                small team ship at the pace of an agency. He&apos;s
                                the partner on the first call and the one who keeps
                                scope honest from intake through handoff.
                            </p>
                            <a
                                href="mailto:chris@oldforrest.net"
                                className="text-sm font-semibold text-forest hover:text-ember transition-colors"
                            >
                                chris@oldforrest.net
                            </a>
                        </div>

                        <div className="bg-white rounded-md p-7 md:p-9 border-l-[3px] border-forest">
                            <h3 className="font-heading text-2xl md:text-3xl text-forest-deep mb-2">
                                Taylor Westmoreland
                            </h3>
                            <div className="text-xs font-sans tracking-[0.1em] uppercase text-ember font-bold mb-5">
                                Partner · Operations
                            </div>
                            <p className="text-base text-ink-2 leading-relaxed mb-4">
                                Taylor is an aerospace engineer turned operator, with
                                engineering experience at{" "}
                                <strong>Orbital ATK</strong>. He brings the discipline
                                of process-heavy engineering to the integration and
                                configuration work, with a deep instinct for how
                                operations actually run. He&apos;s the senior operator
                                on the engagements — the person walking the shop,
                                sitting with leadership, and owning the stack
                                end-to-end.
                            </p>
                            <a
                                href="mailto:taylor@oldforrest.net"
                                className="text-sm font-semibold text-forest hover:text-ember transition-colors"
                            >
                                taylor@oldforrest.net
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">How we work</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-10">
                        Four things that don&apos;t change.
                    </h2>

                    <ul className="space-y-3">
                        {principles.map((p) => (
                            <li
                                key={p.head}
                                className="bg-white rounded-md p-6 border border-rule border-l-[3px] border-l-ember"
                            >
                                <div className="font-heading font-bold text-forest-deep text-lg mb-1.5">
                                    {p.head}
                                </div>
                                <p className="text-[0.95rem] md:text-base text-ink-2 leading-relaxed">
                                    {p.body}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 border-t border-rule bg-cream-2/40">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        Want to talk?
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        Mention who referred you — it goes to the top of the queue.
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
