import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Tell us about your business, the stack, and what's frustrating you. No slides, no pitch, no long sales cycle. Email chris@oldforrest.net or use the form.",
};

const steps = [
    {
        title: "Intro call — 30 minutes.",
        body: "Tell us about your business, the stack, and what's frustrating you right now. No slides, no pitch. We listen.",
    },
    {
        title: "Discovery session — 60–90 minutes.",
        body: "If there's a fit, we do a paid working session walking the stack together. You come away with a clear picture of what an engagement looks like.",
    },
    {
        title: "Scoped proposal — within 5 business days.",
        body: "The right tier for you — Embed, Operate, or Maintain — with a realistic scope and a fixed price. No surprises.",
    },
    {
        title: "Decide on your timeline.",
        body: "Yes, and we start when you're ready. No or not-yet, and we part cleanly. Either way you leave with a clearer picture of your own stack.",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">
                        How the first conversation works
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        No pressure. No long sales cycle.{" "}
                        <span className="italic text-ember">
                            We&apos;ll tell you honestly if we&apos;re a fit.
                        </span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-lg text-ink-2 leading-relaxed max-w-3xl">
                        We don&apos;t do the traditional enterprise sales dance. If
                        you&apos;re a trades, factory, or franchise operation that&apos;s
                        felt the pain of too many disconnected tools, the first
                        conversation is simple.
                    </p>
                </div>
            </section>

            {/* 4-step flow + form */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Steps */}
                        <div className="lg:col-span-2">
                            <div className="kicker mb-3">The four steps</div>
                            <h2 className="font-heading text-2xl md:text-3xl text-forest-deep tracking-tight mb-8">
                                What to expect.
                            </h2>
                            <ol className="list-none p-0">
                                {steps.map((step, i) => (
                                    <li
                                        key={step.title}
                                        className="relative pl-12 py-4 border-b border-dashed border-rule last:border-b-0"
                                    >
                                        <span
                                            aria-hidden
                                            className="absolute left-0 top-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-forest-deep text-cream font-heading font-bold text-sm"
                                        >
                                            {i + 1}
                                        </span>
                                        <h3 className="font-heading font-bold text-forest-deep text-base md:text-lg mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm md:text-[0.95rem] text-ink-2 leading-relaxed">
                                            {step.body}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-md border border-rule p-7 md:p-9">
                                <div className="kicker mb-3">Send a note</div>
                                <h2 className="font-heading text-2xl md:text-3xl text-forest-deep tracking-tight mb-2">
                                    Tell us a bit about your stack.
                                </h2>
                                <p className="text-sm md:text-base text-ink-2 leading-relaxed mb-6">
                                    Mention who referred you — it goes to the top of
                                    the queue. Or email{" "}
                                    <a
                                        href="mailto:chris@oldforrest.net"
                                        className="text-forest underline underline-offset-2 hover:text-ember"
                                    >
                                        chris@oldforrest.net
                                    </a>{" "}
                                    directly.
                                </p>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct contact */}
            <section className="py-16 md:py-20 border-t border-rule bg-cream-2/40">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">Reach us directly</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep tracking-tight mb-8">
                        Or just email us.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="mailto:chris@oldforrest.net"
                            className="block bg-white rounded-md p-6 border border-rule hover:border-forest transition-colors group"
                        >
                            <div className="text-xs font-sans tracking-[0.1em] uppercase text-ember font-bold mb-2">
                                Founder
                            </div>
                            <div className="font-heading text-xl text-forest-deep mb-1 group-hover:text-forest transition-colors">
                                Christopher Ledbetter
                            </div>
                            <div className="text-sm text-ink-2">
                                chris@oldforrest.net
                            </div>
                        </a>
                        <a
                            href="mailto:taylor@oldforrest.net"
                            className="block bg-white rounded-md p-6 border border-rule hover:border-forest transition-colors group"
                        >
                            <div className="text-xs font-sans tracking-[0.1em] uppercase text-ember font-bold mb-2">
                                Partner
                            </div>
                            <div className="font-heading text-xl text-forest-deep mb-1 group-hover:text-forest transition-colors">
                                Taylor Westmoreland
                            </div>
                            <div className="text-sm text-ink-2">
                                taylor@oldforrest.net
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
