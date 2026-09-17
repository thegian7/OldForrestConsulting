import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    getRescueTriggerBySlug,
    getAllRescueTriggerSlugs,
    rescueTriggers,
} from "@/lib/rescue-triggers";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ trigger: string }>;
}

export function generateStaticParams() {
    return getAllRescueTriggerSlugs().map((trigger) => ({ trigger }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { trigger } = await params;
    const t = getRescueTriggerBySlug(trigger);

    if (!t) {
        return { title: "Not Found" };
    }

    return {
        title: t.metaTitle,
        description: t.metaDescription,
        // Must be per-slug. Without it this inherits the root canonical and
        // declares itself a duplicate of the homepage.
        alternates: { canonical: `/rescue/${trigger}/` },
    };
}

export default async function RescueTriggerPage({ params }: PageProps) {
    const { trigger } = await params;
    const t = getRescueTriggerBySlug(trigger);

    if (!t) {
        return (
            <main className="min-h-screen bg-cream text-ink">
                <Navbar />
                <section className="pt-40 pb-24">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h1 className="font-heading text-4xl text-forest-deep mb-4">
                            Not found
                        </h1>
                        <Link href="/rescue/" className="text-ember underline">
                            Back to software rescue
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

    const others = rescueTriggers.filter((o) => o.slug !== t.slug);

    // FAQPage from the severity questions — these are genuine questions a
    // visitor is asking, which is the bar for this markup.
    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.severity.map((q) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
                "@type": "Answer",
                text: "Work through the first steps on this page before spending anything. If the answer is unclear, a paid diagnostic from $750 over two to five days establishes it in writing, along with what it would cost to fix.",
            },
        })),
    };

    return (
        <main className="min-h-screen bg-cream text-ink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
            />
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Link
                        href="/rescue/"
                        className="kicker mb-4 inline-block hover:text-ember transition-colors"
                    >
                        Software rescue
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        {t.h1}{" "}
                        <span className="italic text-ember">{t.h1Emphasis}</span>
                    </h1>
                </div>
            </section>

            {/* Situation */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    {t.situation.map((para) => (
                        <p
                            key={para.slice(0, 32)}
                            className="text-lg md:text-xl text-ink-2 leading-relaxed mb-6 last:mb-0"
                        >
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* First steps — the useful part */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">Do these first</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-4">
                        Before you hire anyone, including us.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-10">
                        These are in order, and none of them cost anything. Working
                        through them will also tell you how serious your situation
                        actually is.
                    </p>

                    <ol className="list-none p-0 divide-y divide-rule border-y border-rule">
                        {t.firstSteps.map((s, i) => (
                            <li key={s.head} className="py-7">
                                <div className="flex gap-4 md:gap-6">
                                    <div className="font-heading text-ember text-lg shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <div>
                                        <p className="font-heading text-xl md:text-2xl text-forest-deep mb-2 leading-snug">
                                            {s.head}
                                        </p>
                                        <p className="text-base text-ink-2 leading-relaxed">
                                            {s.body}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Severity */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="kicker mb-3">How bad is it, really</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-6">
                        Four questions that settle it.
                    </h2>
                    <ul className="space-y-4 mb-10">
                        {t.severity.map((q) => (
                            <li key={q} className="flex gap-3">
                                <span className="text-ember shrink-0" aria-hidden="true">
                                    →
                                </span>
                                <span className="text-base md:text-lg text-ink-2 leading-relaxed">
                                    {q}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg text-ink-2 leading-relaxed">{t.outcome}</p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-5">
                        If you want someone to read it properly.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-8">
                        A paid diagnostic is{" "}
                        <strong className="text-forest-deep">from $750</strong>, two to
                        five days, scoped on a short call before you pay anything. You
                        get what is actually there, what is wrong, what it costs to fix,
                        and a plan you keep — with us or with anyone else.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact/"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-cream bg-forest hover:bg-forest-deep rounded-md transition-colors"
                        >
                            Tell us what happened
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/rescue/"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-forest-deep border border-rule rounded-md hover:border-ember transition-colors"
                        >
                            How rescue works
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other triggers */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="kicker mb-3">Not quite your situation?</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-8">
                        The other ways this happens.
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                        {others.map((o) => (
                            <Link
                                key={o.slug}
                                href={`/rescue/${o.slug}/`}
                                className="block bg-white rounded-md p-6 border-l-[3px] border-forest hover:border-ember transition-colors"
                            >
                                <h3 className="font-heading text-lg text-forest mb-1">
                                    {o.title}
                                </h3>
                                <span className="text-sm text-ink-3">Read what to do</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
