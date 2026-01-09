"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary/5 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Let’s Get Your AI Project <br />
                        <span className="text-primary">Across the Finish Line.</span>
                    </h2>

                    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-white">
                        <iframe
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eK9K2ia36IfG1Ru97H1dMak6Zidrn1BJaP9qMgmydMQCvjjwCxji1sFgIf5OpSGim1uJMztvU?gv=true"
                            style={{ border: 0 }}
                            width="100%"
                            height="600"
                            title="Book a 30-Minute Discovery Call"
                        />
                    </div>

                    <p className="mt-8 text-slate-400">
                        Prefer email?{" "}
                        <a
                            href="mailto:chris@oldforrest.net"
                            className="text-primary hover:underline inline-flex items-center gap-1 group"
                        >
                            Send project details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
