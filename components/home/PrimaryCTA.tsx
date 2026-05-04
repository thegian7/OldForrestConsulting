import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrimaryCTA() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-4xl">
                <div
                    className="rounded-lg p-8 md:p-12 text-cream"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest) 100%)",
                    }}
                >
                    <div className="kicker text-ember-soft mb-4">
                        How the first conversation works
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream tracking-tight leading-[1.15] mb-4">
                        Let&apos;s have the first conversation.
                    </h2>
                    <p className="text-base md:text-lg text-cream-2/90 leading-relaxed max-w-2xl">
                        No pitch deck, no slide ceremony. Tell us about your business,
                        the stack, and what&apos;s frustrating you right now. We&apos;ll
                        tell you honestly if we&apos;re a fit.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-forest-deep bg-ember-soft hover:bg-ember rounded-md transition-colors"
                        >
                            Book a 30-minute intro call
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href="mailto:chris@oldforrest.net"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-cream border border-cream/25 hover:border-cream/60 rounded-md transition-colors"
                        >
                            chris@oldforrest.net
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
