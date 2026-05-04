"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-24 md:pb-24">
            <div className="relative container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src="/logo-mark.png"
                        alt="Old Forrest Consulting"
                        width={399}
                        height={341}
                        priority
                        className="w-24 md:w-32 h-auto opacity-80 mb-4"
                    />

                    <div className="kicker mb-6">
                        For Trades · Factories · Franchises
                    </div>

                    <h1 className="font-heading text-[2.5rem] md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl tracking-tight">
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
