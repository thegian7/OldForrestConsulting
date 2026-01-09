"use client";

import { motion } from "framer-motion";
import { Bot, Server, ShieldCheck, Rocket } from "lucide-react";

const services = [
    {
        title: "AI Integration & Completion",
        description: "We finish what the last team started.",
        icon: Bot,
        items: [
            "AI workflows & Chatbots",
            "API-based systems",
            "Whisper/voice pipelines",
            "Retrieval systems (RAG)",
            "Automation chains",
        ],
    },
    {
        title: "Replit & Lovable Migration",
        description: "Outgrown your prototype? We'll get you to real infrastructure.",
        icon: Rocket,
        items: [
            "Migration to Docker/VPS/Cloud",
            "Database extraction & setup",
            "CI/CD pipeline configuration",
            "Domain & SSL setup",
            "Cost optimization",
        ],
    },
    {
        title: "Infrastructure & Architecture",
        description: "Scaling workloads and fixing the plumbing.",
        icon: Server,
        items: [
            "Docker + cloud hosting",
            "Postgres/Supabase integrations",
            "Payment flows (Stripe)",
            "Multi-platform architecture",
            "Performance optimization",
        ],
    },
    {
        title: "Stabilization & Delivery",
        description: "Make this thing actually work in production.",
        icon: ShieldCheck,
        items: [
            "End-to-end testing",
            "Bug squashing & stabilization",
            "Production deployment",
            "Security hardening",
            "Documentation & handoff",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        What We Actually Do
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We specialize in one thing: unsticking complex, half-built AI and
                        automation systems.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>
                            <ul className="space-y-3">
                                {service.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
