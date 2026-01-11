"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Projects Shipped" },
    { value: "500+", label: "Users Served" },
    { value: "6+", label: "Languages" },
    { value: "10+", label: "Frameworks" },
];

const experience = ["NetApp", "Dropbox", "Orbital ATK"];

export default function Credibility() {
    return (
        <section className="section-odd section-border py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center md:text-right">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                            Team Experience Includes
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4">
                            {experience.map((company, index) => (
                                <motion.span
                                    key={company}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-gray-400 font-medium"
                                >
                                    {company}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
