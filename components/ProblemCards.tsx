"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Rocket,
    Brain,
    CreditCard,
    UserX,
    Bug,
    Flame,
    Zap,
    MessageSquareX,
    ArrowRight,
} from "lucide-react";
import { problems } from "@/lib/problems";

const iconMap = {
    Rocket,
    Brain,
    CreditCard,
    UserX,
    Bug,
    Flame,
    Zap,
    MessageSquareX,
};

export default function ProblemCards() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((problem, index) => {
                        const Icon = iconMap[problem.icon as keyof typeof iconMap];
                        const href =
                            problem.linkType === "case-study"
                                ? `/case-studies/${problem.linkSlug}`
                                : "#contact";

                        return (
                            <motion.div
                                key={problem.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={href}
                                    className="group relative block bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-colors h-full"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        {Icon && <Icon size={24} />}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                        &ldquo;{problem.question}&rdquo;
                                    </h3>

                                    <ul className="space-y-3 mb-6">
                                        {problem.symptoms.map((symptom, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-gray-400"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span>{symptom}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                        {problem.linkLabel}
                                        <ArrowRight size={16} />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
