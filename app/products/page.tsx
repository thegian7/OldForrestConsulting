import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Software we own and run — starting with MetesAI, which plots metes-and-bounds legal descriptions and shows its work. Built in the course of client engagements, kept because the problem kept recurring.",
};

const featured = {
    name: "MetesAI",
    tagline: "Deed plotting, georeferenced by default.",
    href: "https://metes.online",
    status: "Design-partner preview",
    body: [
        "A metes-and-bounds legal description is a paragraph of directions and distances. Turning it into a parcel on a map is skilled, slow work, and the incumbent tools hand you a shape floating in space that somebody drags into position by eye.",
        "MetesAI reads the description — typed, scanned, or photographed — closes the traverse, resolves the description's own anchor against the PLSS grid, and places the parcel. Every plotted line cites the exact span of source text that produced it, and the result reports its misclosure rather than hiding it.",
        "It expresses no boundary opinion and is not a survey. It is a drafting aid that shows its work, which is the part that matters when the work gets challenged.",
    ],
    honest:
        "The engine is complete and tested. The hosted API is not open yet — design-partner conversations are the way in, and there is no public signup.",
};

const alsoBuilt = [
    {
        name: "usgis",
        tagline: "One normalized answer from many county GIS feeds.",
        status: "In use internally",
        body: "Public US local-government GIS sources — parcels, zoning, roads, traffic — are free, numerous, and inconsistent. usgis puts a registry-driven normalization layer over them: every source is a declarative entry, and the resolver returns normalized GeoJSON with provenance attached, or an explicit coverage gap. It never fills a hole with a plausible guess, which is the whole reason it exists.",
    },
    {
        name: "saas-data-export",
        tagline: "Your data, out of a platform that charges you for it.",
        status: "Built, not yet published",
        body: "Plenty of vendors — field service, scheduling, fitness — put API or export access behind a premium tier, charging hundreds a month for the data you created. GDPR Article 20 and CCPA guarantee a right to data portability. This is a command-line tool that exercises it, so a migration or an audit isn't gated on a vendor's price list.",
    },
];

const machinery = [
    {
        name: "OFC Suite",
        what: "Our internal tooling, packaged by access tier and by role.",
        how: "A contractor joining your project gets exactly the tools their role calls for and nothing above their tier. Credentials are never handed over or committed — they resolve from a vault at runtime, per person, and can be revoked in one place when an engagement ends.",
    },
    {
        name: "Dedicated development hardware",
        what: "A 32-core, 256 GB server in a colocation facility, running isolated environments per tenant on mirrored, redundant storage.",
        how: "Your project gets a real environment that isn't somebody's laptop. Work survives a lost machine, a new contractor is productive the same day, and environments stay isolated from every other client we serve.",
    },
    {
        name: "Agent safety guardrails",
        what: "A policy layer that inspects what an AI coding agent is about to do and stops the dangerous cases before they run.",
        how: "Destructive commands and prompt-injection attempts get blocked rather than executed. We use AI heavily in delivery; this is what makes that defensible instead of reckless — and it runs on our own work first.",
    },
    {
        name: "Reproducible base configuration",
        what: "A versioned, idempotent setup for every engineer's working environment.",
        how: "Everyone works from the same baseline, so behavior doesn't drift between people or machines. A commit-time scan blocks anything that would put a credential into a repository, which is a category of mistake that is far cheaper to prevent than to clean up.",
    },
    {
        name: "Isolated execution containers",
        what: "Disposable, sandboxed containers with the same guardrails built in.",
        how: "Risky or exploratory work runs somewhere it cannot damage your systems, and the container is thrown away afterwards. Nothing experimental touches production by accident.",
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">Software we own</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        Tools we built because the problem kept coming back{" "}
                        <span className="italic text-ember">
                            — and kept because they worked.
                        </span>
                    </h1>
                </div>
            </section>

            {/* Lede */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed mb-6">
                        These came out of client work. Something was needed more than
                        once, buying it wasn&apos;t an option or wasn&apos;t honest, so we
                        built it and then kept maintaining it. They are listed here with
                        their real status, including the ones that aren&apos;t open for
                        business yet.
                    </p>
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed">
                        They share one habit: where the output has to be defended later,
                        it carries its provenance. A number you can&apos;t trace is a
                        liability dressed up as an answer.
                    </p>
                </div>
            </section>

            {/* Featured */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">Flagship</div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                        <h2 className="font-heading text-3xl md:text-4xl text-forest-deep">
                            {featured.name}
                        </h2>
                        <span className="text-sm uppercase tracking-wider text-ember">
                            {featured.status}
                        </span>
                    </div>
                    <p className="font-heading text-xl md:text-2xl text-ink mb-8">
                        {featured.tagline}
                    </p>

                    {featured.body.map((para) => (
                        <p
                            key={para.slice(0, 32)}
                            className="text-base md:text-lg text-ink-2 leading-relaxed mb-5"
                        >
                            {para}
                        </p>
                    ))}

                    <div className="border-l-2 border-rule pl-5 py-1 my-8">
                        <p className="text-base text-ink-2 leading-relaxed">
                            {featured.honest}
                        </p>
                    </div>

                    <a
                        href={featured.href}
                        className="inline-flex items-center gap-2 font-heading text-lg text-forest-deep border-b-2 border-ember pb-1 hover:text-ember transition-colors"
                    >
                        metes.online
                        <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </a>
                </div>
            </section>

            {/* Also built */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-3">Also built and maintained</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-10 max-w-3xl">
                        Smaller tools, same standard.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                        {alsoBuilt.map((item) => (
                            <div key={item.name}>
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                                    <h3 className="font-heading text-2xl text-forest-deep">
                                        {item.name}
                                    </h3>
                                    <span className="text-xs uppercase tracking-wider text-ink-2">
                                        {item.status}
                                    </span>
                                </div>
                                <p className="font-heading text-lg text-ink mb-4">
                                    {item.tagline}
                                </p>
                                <p className="text-base text-ink-2 leading-relaxed">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal machinery */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="kicker mb-3">How the work gets done</div>
                    <h2 className="font-heading text-2xl md:text-4xl text-forest-deep mb-6 max-w-3xl">
                        The machinery behind the engagement.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-12 max-w-3xl">
                        None of this is for sale, and we don&apos;t hand over the source.
                        It&apos;s here because it answers the question a careful buyer
                        actually has about a small firm: what happens when the person who
                        knows how it works is unavailable. The answer is that the standard
                        lives in tooling rather than in someone&apos;s head.
                    </p>

                    <div className="divide-y divide-rule border-t border-rule">
                        {machinery.map((item) => (
                            <div
                                key={item.name}
                                className="py-8 grid md:grid-cols-3 gap-4 md:gap-8"
                            >
                                <h3 className="font-heading text-xl text-forest-deep md:col-span-1">
                                    {item.name}
                                </h3>
                                <div className="md:col-span-2">
                                    <p className="text-base md:text-lg text-ink mb-3">
                                        {item.what}
                                    </p>
                                    <p className="text-base text-ink-2 leading-relaxed">
                                        {item.how}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 border-t border-rule">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-5">
                        Need one of these pointed at your problem?
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-8">
                        If you work with deeds, parcels, or county records, MetesAI is
                        taking design partners. If you&apos;re stuck getting your own data
                        out of a vendor, that&apos;s a conversation too.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-heading text-lg text-forest-deep border-b-2 border-ember pb-1 hover:text-ember transition-colors"
                    >
                        Start a conversation
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
