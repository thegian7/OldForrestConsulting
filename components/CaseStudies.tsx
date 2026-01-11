"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudies() {
    return (
        <section id="case-studies" className="section-even section-border py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Case Studies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Real projects. Real results. Here's what we've shipped.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.client}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={`/case-studies/${study.slug}`}
                                className="group relative block bg-secondary rounded-2xl p-8 border border-white/10 hover:bg-white/[0.03] hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 h-full"
                            >
                                <div className="absolute top-8 right-8 text-gray-600 group-hover:text-primary transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>

                                <div className="text-sm font-semibold text-primary mb-2">
                                    {study.role}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    {study.client}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                            The Problem
                                        </div>
                                        <p className="text-slate-300 text-sm">{study.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                            The Fix
                                        </div>
                                        <p className="text-gray-300 text-sm">{study.solution}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                            The Outcome
                                        </div>
                                        <p className="text-white font-medium text-sm">{study.outcome}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
