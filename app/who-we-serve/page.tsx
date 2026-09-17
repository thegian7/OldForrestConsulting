import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Who We Serve",
    description:
        "Operators whose records get challenged — by a regulator, an auditor, a counterparty, or a court — and who have nobody in-house whose job is keeping those systems honest.",
    alternates: { canonical: "/who-we-serve/" },
};

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
        body: "We learn how the work actually moves before we touch the systems — the walk-through, the ride-along, the person who knows why the spreadsheet exists. Industry jargon differs; operational reality rhymes.",
    },
];

export default function WhoWeServePage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">One pattern, many industries</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        We work with operators whose records{" "}
                        <span className="italic text-ember">have to hold up.</span>
                    </h1>
                </div>
            </section>

            {/* Lede */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed">
                        If your records get challenged — by a regulator, an auditor,
                        a counterparty, or a court — and nobody in-house has the job
                        of keeping those systems honest, that&apos;s who we work
                        with. The exposure was never the spreadsheet. It&apos;s the
                        person who has to reconstruct the truth from memory when
                        someone outside your company asks, on their timeline, not
                        yours. And nobody around you is set up to fix it: the firms
                        with the depth to build for that kind of scrutiny treat a
                        business your size as too small to bother with, and the
                        generalists who&apos;d take the work have never had to
                        defend a number to someone who doesn&apos;t have to believe
                        them. We build the systems that hold up on their own.
                    </p>
                </div>
            </section>

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
