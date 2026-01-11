"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Differentiator() {
    return (
        <section className="section-odd section-border py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl"></div>
                            <div className="relative bg-secondary border border-white/10 rounded-xl p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Specialized in Project Completion
                                </h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    Many AI projects stall in the final stages—the integration work,
                                    the architecture decisions, the production deployment challenges.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    We step in, identify the blockers, and deliver production-ready
                                    solutions with clear documentation and support.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
                        >
                            Expert Help When <br />
                            <span className="text-primary">You Need It Most.</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {[
                                "Founders ready to ship their vision",
                                "Business owners seeking reliable delivery",
                                "Development teams needing senior support",
                                "Agencies requiring backend expertise",
                            ].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                                    <span className="text-xl text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
