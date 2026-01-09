import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllCaseStudySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        return { title: "Case Study Not Found" };
    }

    return {
        title: `${caseStudy.client} | Old Forrest Consulting`,
        description: caseStudy.subtitle,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <div className="border-b border-white/5 bg-secondary/50">
                <div className="container mx-auto px-6 py-4">
                    <Link
                        href="/#case-studies"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Case Studies
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <section className="py-16 md:py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                            {caseStudy.role}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {caseStudy.client}
                        </h1>
                        <p className="text-xl text-gray-400">{caseStudy.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-12 bg-white/[0.02] border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {caseStudy.highlights.map((highlight) => (
                            <div key={highlight.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary">
                                    {highlight.value}
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">
                                    {highlight.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            Overview
                        </h2>
                        <div className="space-y-6">
                            {caseStudy.overview.map((paragraph, index) => (
                                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm">
                                    !
                                </span>
                                The Challenge
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {caseStudy.problem}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">
                                    &#10003;
                                </span>
                                The Solution
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {caseStudy.solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
                            Technical Implementation
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {caseStudy.keyFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-secondary border border-white/10 rounded-xl p-6"
                                >
                                    <h3 className="text-lg font-bold text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {feature.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2 text-gray-300 text-sm"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            Tech Stack
                        </h2>
                        <div className="space-y-6">
                            {caseStudy.techStack.map((stack) => (
                                <div key={stack.category} className="flex flex-wrap items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider w-24">
                                        {stack.category}
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            Skills Demonstrated
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {caseStudy.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary/5 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Have a Similar Project?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help you achieve similar results.
                    </p>
                    <a
                        href="mailto:chris@oldforrest.net"
                        className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-primary hover:bg-blue-600 rounded-xl transition-all shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]"
                    >
                        <Mail size={20} />
                        Get in Touch
                    </a>
                </div>
            </section>
        </main>
    );
}
