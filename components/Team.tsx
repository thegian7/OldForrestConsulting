"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
    {
        name: "Christopher Ledbetter",
        role: "The Finisher",
        bio: "Fractional CTO & AI Rescue Specialist. I step in when projects stall, diagnosing the real blockers and delivering the last mile with enterprise-level precision.",
        links: {
            linkedin: "https://www.linkedin.com/in/clledbetter",
        },
    },
    {
        name: "Taylor Westmoreland",
        role: "The Strategist",
        bio: "Aerospace Engineer turned CTO & Realtor. Brings precision engineering discipline and high-stakes operational experience to complex technical challenges.",
        links: {
            linkedin: "https://www.linkedin.com/in/tbwestmoreland11",
        },
    },
];

export default function Team() {
    return (
        <section id="team" className="section-odd section-border py-20 md:py-28 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Leadership
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Two backgrounds. One mission: Shipping your software.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <div className="text-primary font-medium text-sm uppercase tracking-wider">
                                        {member.role}
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                                    {member.bio}
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <a
                                        href={member.links.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
