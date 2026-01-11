"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="section-even relative min-h-screen lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-32 md:pt-20 py-20 md:py-28">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm text-sm text-primary font-semibold mb-8 mt-4 shadow-sm"
                >
                    <Terminal size={16} className="shrink-0" />
                    <span className="tracking-wide">System Architecture & Rescue</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                    AI Projects Stalled? <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-400">
                        Let's Get It Shipped.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Fractional CTO expertise for founders and teams who need solid
                    architecture, clear execution, and real results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-[#2563eb] hover:scale-[1.02] rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                    >
                        Schedule a Free Consultation
                    </Link>
                    <Link
                        href="#case-studies"
                        className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2"
                    >
                        View Case Studies
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
