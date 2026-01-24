"use client";

import { motion } from "framer-motion";
import { Hammer, MessageSquare, Shield, Zap } from "lucide-react";

const values = [
    {
        icon: Hammer,
        title: "Finish What Others Start",
        description: "We deliver completed, working systems. Not half-done prototypes.",
    },
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "No tech jargon to hide behind. Honest, direct updates.",
    },
    {
        icon: Shield,
        title: "Respect the Craft",
        description: "Old-fashioned integrity. Do the work right, even when no one is looking.",
    },
    {
        icon: Zap,
        title: "Move Fast with Purpose",
        description: "Speed matters, but not at the cost of stability.",
    },
];

export default function Values() {
    return (
        <section id="values" className="section-even section-border py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="lg:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6"
                        >
                            Old-Fashioned Values. <br />
                            <span className="text-gray-500">Modern Execution.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 leading-relaxed"
                        >
                            We believe in honest work, clear communication, and delivering
                            results you can depend on.
                        </motion.p>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <value.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
