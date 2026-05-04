import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Selected work. ERK Holdings — a multi-entity construction and exteriors family of companies in Utah, replacing a fleet of vendors with one partner.",
};

export default function CaseStudiesIndex() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">Proof</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        Selected work.{" "}
                        <span className="italic text-ember">
                            What it actually looks like.
                        </span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-lg text-ink-2 leading-relaxed max-w-3xl">
                        We don&apos;t publish many case studies. The ones below are
                        the engagements we can talk about openly, with client
                        permission.
                    </p>
                </div>
            </section>

            {/* List */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ul className="space-y-6">
                        {caseStudies.map((study) => (
                            <li key={study.slug}>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="group block bg-white border border-rule rounded-md p-7 md:p-9 hover:border-forest transition-colors"
                                >
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans tracking-[0.08em] uppercase text-ink-3 mb-5 pb-4 border-b border-rule">
                                        <span>
                                            <strong className="text-forest mr-1">
                                                Industries:
                                            </strong>
                                            {study.industries.join(" · ")}
                                        </span>
                                        <span>
                                            <strong className="text-forest mr-1">
                                                Entities:
                                            </strong>
                                            {study.entities}
                                        </span>
                                        <span>
                                            <strong className="text-forest mr-1">
                                                Engagement:
                                            </strong>
                                            {study.engagement}
                                        </span>
                                    </div>

                                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-forest-deep tracking-tight mb-3 group-hover:text-forest transition-colors">
                                        {study.client}
                                    </h2>
                                    <p className="text-base text-ink-2 leading-relaxed mb-6 max-w-3xl">
                                        {study.summary}
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-ember transition-colors">
                                        Read the case
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 border-t border-rule bg-cream-2/40">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep tracking-tight mb-4">
                        Want a similar engagement at your business?
                    </h2>
                    <p className="text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
                        Tell us about the stack you&apos;re running and what&apos;s
                        falling through the cracks. We&apos;ll tell you honestly if
                        we&apos;re a fit.
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
