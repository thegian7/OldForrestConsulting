"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const personas = [
    {
        title: "Founders who need to ship yesterday",
        description: "Your runway is burning. Your investors are asking. We get it.",
    },
    {
        title: "SMB owners tired of excuses",
        description:
            "Third agency. Second freelancer. Still no working product. Sound familiar?",
    },
    {
        title: "Overworked dev teams needing backup",
        description:
            "Your team is stretched thin. You need someone who can hit the ground running.",
    },
    {
        title: "Agencies who need backend muscle",
        description:
            "Great at design and frontend. Need someone to build the hard stuff behind it.",
    },
];

export default function PersonaCallouts() {
    return (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
                    >
                        We Work Best With...
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 text-center mb-12"
                    >
                        Not everyone is a fit. Here&apos;s who we serve best.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {personas.map((persona, index) => (
                            <motion.div
                                key={persona.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-secondary border border-white/10 rounded-xl"
                            >
                                <CheckCircle2
                                    className="text-primary shrink-0 mt-1"
                                    size={24}
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {persona.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{persona.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
