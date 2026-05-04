import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return { title: "Case Study Not Found" };
    }

    return {
        title: study.client,
        description: study.summary,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Back */}
            <div className="pt-28 md:pt-32 pb-4">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-sm text-ink-3 hover:text-forest transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to case studies
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <section className="pt-6 pb-12 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="kicker mb-4">Case study</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] mb-6">
                        {study.client}
                    </h1>
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-3xl">
                        {study.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-sans tracking-[0.08em] uppercase text-ink-3 pt-6 border-t border-rule">
                        <span>
                            <strong className="text-forest mr-1">Industries:</strong>
                            {study.industries.join(" · ")}
                        </span>
                        <span>
                            <strong className="text-forest mr-1">Entities:</strong>
                            {study.entities}
                        </span>
                        <span>
                            <strong className="text-forest mr-1">Engagement:</strong>
                            {study.engagement}
                        </span>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl space-y-12">
                    <div>
                        <div className="kicker mb-3">The situation</div>
                        <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                            {study.situation}
                        </p>
                    </div>

                    <div>
                        <div className="kicker mb-3">What we did</div>
                        <ul className="space-y-2">
                            {study.workItems.map((item) => (
                                <li
                                    key={item}
                                    className="relative pl-6 text-base md:text-lg text-ink-2 leading-relaxed before:content-['■'] before:absolute before:left-0 before:top-2 before:text-ember before:text-xs"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="kicker mb-3">The outcome</div>
                        <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                            {study.outcome}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 md:py-16 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {study.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white rounded-md p-5 border-t-[3px] border-ember"
                            >
                                <div className="font-heading text-3xl md:text-4xl font-bold text-forest-deep leading-none mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-sans tracking-[0.08em] uppercase text-ink-3 leading-snug">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reference note */}
            {study.referenceNote && (
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <p className="text-sm md:text-base text-ink-3 italic leading-relaxed text-center">
                            {study.referenceNote}
                        </p>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 md:py-20 border-t border-rule">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        Have a similar setup?
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        Multi-entity, multi-stack, vendor sprawl, and a leadership
                        team that wants the same view of the business.
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
