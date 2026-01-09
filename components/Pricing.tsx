"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Hourly Consulting",
        price: "$150–$300",
        period: "/hour",
        description: "For immediate troubleshooting or expert pairing.",
        features: [
            "Live debugging sessions",
            "Architecture review",
            "Code audit",
            "Immediate problem solving",
        ],
        cta: "Book an Hour",
        href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2a1OqCUqk55lQV5vuDYTGuwtCfKOnwY8aln7KiicFOnj6nPnbU2pzZRosikvg12UavXjRv9vYA?gv=true",
        external: true,
        highlight: false,
    },
    {
        name: "Project Rescue",
        price: "$3k–$20k",
        period: "/project",
        description: "Fixed-scope rescue for stalled AI projects.",
        features: [
            "Full code diagnosis",
            "Architecture overhaul",
            "Production deployment",
            "Documentation & handoff",
            "30-day warranty",
        ],
        cta: "Get a Quote",
        href: "#contact",
        external: false,
        highlight: true,
    },
    {
        name: "Fractional CTO",
        price: "$1.5k–$5k",
        period: "/month",
        description: "Ongoing guidance and technical leadership.",
        features: [
            "Weekly strategy calls",
            "Team leadership & code review",
            "Vendor/tool selection",
            "Hiring assistance",
            "Long-term roadmap",
        ],
        cta: "Start Monthly",
        href: "#contact",
        external: false,
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Transparent Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Fair rates for expert work. No hidden fees.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-2xl border ${plan.highlight
                                    ? "bg-white/5 border-primary/50 shadow-2xl shadow-primary/10"
                                    : "bg-secondary border-white/10"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-3xl font-bold text-white">
                                    {plan.price}
                                </span>
                                <span className="text-gray-400">{plan.period}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="text-primary shrink-0" size={18} />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {plan.external ? (
                                <a
                                    href={plan.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 px-6 text-center font-semibold rounded-lg transition-all block ${plan.highlight
                                            ? "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/25"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            ) : (
                                <Link
                                    href={plan.href}
                                    className={`w-full py-3 px-6 text-center font-semibold rounded-lg transition-all block ${plan.highlight
                                            ? "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/25"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
