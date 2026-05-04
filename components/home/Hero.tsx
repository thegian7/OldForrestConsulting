"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Decorative circles, lifted from pitch cover */}
            <div
                aria-hidden
                className="absolute top-0 right-0 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-forest/5 -translate-y-1/3 translate-x-1/3"
            />
            <div
                aria-hidden
                className="absolute bottom-0 left-0 w-44 h-44 md:w-72 md:h-72 rounded-full bg-ember/10 translate-y-1/3 -translate-x-1/3"
            />

            <div className="relative container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="kicker mb-6">
                        For Trades · Factories · Franchises
                    </div>

                    <h1 className="font-heading text-[2.5rem] md:text-6xl lg:text-7xl font-bold leading-[1.05] text-forest-deep max-w-5xl tracking-tight">
                        Operational clarity for businesses that run on{" "}
                        <span className="italic text-ember">more than software.</span>
                    </h1>

                    <p className="mt-6 md:mt-8 text-lg md:text-xl text-ink-2 leading-relaxed max-w-2xl">
                        We configure the systems, connect the data, build what&apos;s
                        missing, and stay on-call when it breaks. One partner instead
                        of seven.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-cream bg-forest hover:bg-forest-deep rounded-md transition-colors"
                        >
                            Start the conversation
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-forest border border-forest/30 hover:border-forest hover:bg-forest/5 rounded-md transition-colors"
                        >
                            See how it works
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
