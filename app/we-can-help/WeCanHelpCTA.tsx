"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WeCanHelpCTA() {
    return (
        <section id="contact" className="py-24 bg-primary/5 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Recognize Yourself?{" "}
                        <span className="text-primary">Let&apos;s Talk.</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Book a 30-minute diagnostic call. We&apos;ll figure out if we can
                        help, and if we can&apos;t, we&apos;ll point you in the right direction.
                    </p>

                    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-white">
                        <iframe
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eK9K2ia36IfG1Ru97H1dMak6Zidrn1BJaP9qMgmydMQCvjjwCxji1sFgIf5OpSGim1uJMztvU?gv=true"
                            style={{ border: 0 }}
                            width="100%"
                            height="600"
                            title="Book a 30-Minute Diagnostic Call"
                        />
                    </div>

                    <p className="mt-8 text-slate-400">
                        Prefer email?{" "}
                        <a
                            href="mailto:chris@oldforrest.net"
                            className="text-primary hover:underline inline-flex items-center gap-1 group"
                        >
                            Send project details
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
