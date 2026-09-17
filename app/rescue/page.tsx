import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rescueTriggers } from "@/lib/rescue-triggers";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software Rescue",
    description:
        "Your developer stopped answering, your agency closed, or the person who understood it resigned — and the software is still load-bearing. A paid diagnostic from $750 tells you what's wrong, what it costs to finish, and what your options are.",
    alternates: { canonical: "/rescue/" },
};

const triggers = [
    {
        n: "01",
        head: "The agency or developer stopped answering.",
        body: "No hosting login. No domain account. No admin access. Sometimes not even the source code. The thing still runs, and nobody can touch it.",
    },
    {
        n: "02",
        head: "The one person who understood it left.",
        body: "They gave two weeks. The handover was a call and a folder. Everything still works right up until the first thing that doesn't.",
    },
    {
        n: "03",
        head: "The platform you built on is being shut down.",
        body: "A sunset date, an end-of-life notice, a vendor sold. You have a deadline you didn't choose and records that have to come across intact.",
    },
    {
        n: "04",
        head: "The go-live failed, and now there's a dispute.",
        body: "Two parties disagree about what was delivered and whether it works. What settles it is an independent technical read, not another round of email.",
    },
    {
        n: "05",
        head: "Something built with AI is now load-bearing, and breaking.",
        body: "It got built fast, it got adopted faster, and now real people depend on it daily. Nobody can say with confidence what it does or where it will fail next.",
    },
];

const included = [
    "What is actually there — the stack, the data, what runs where, and what you own versus what you rent",
    "What is wrong, ranked by what will break first rather than what is ugliest",
    "What it would cost to finish or stabilise, as a number and not a range",
    "What you can do with someone else, so the plan is worth having even if you never call us again",
];

export default function RescuePage() {
    return (
        <main className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-rule">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="kicker mb-4">Software rescue</div>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-forest-deep tracking-tight leading-[1.05] max-w-5xl">
                        Someone built it. Then they left.{" "}
                        <span className="italic text-ember">
                            It is still load-bearing.
                        </span>
                    </h1>
                </div>
            </section>

            {/* Lede */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed mb-6">
                        The software still runs. Your people still use it. What you
                        have lost is the person who knew why it works — and with them,
                        the ability to change anything without guessing. That is not a
                        software problem yet. It becomes one the first time you need it
                        to do something new, or the first time it stops.
                    </p>
                    <p className="text-lg md:text-xl text-ink-2 leading-relaxed">
                        We take over work other people started. Not by rewriting it on
                        principle, and not by telling you it is all unsalvageable —
                        that is the easy diagnosis and it is usually wrong. First we
                        find out what you actually have.
                    </p>
                </div>
            </section>

            {/* Triggers */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">Where this usually starts</div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-4">
                        Five ways a working system becomes nobody&apos;s job.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-10">
                        If one of these happened to you on a date you could name,
                        you&apos;re in the right place.
                    </p>

                    <div className="divide-y divide-rule border-y border-rule">
                        {triggers.map((t, i) => (
                            <div key={t.n} className="py-7">
                                <div className="flex gap-4 md:gap-6">
                                    <div className="font-heading text-ember text-lg shrink-0">
                                        {t.n}
                                    </div>
                                    <div>
                                        <p className="font-heading text-xl md:text-2xl text-forest-deep mb-2 leading-snug">
                                            {t.head}
                                        </p>
                                        <p className="text-base text-ink-2 leading-relaxed mb-3">
                                            {t.body}
                                        </p>
                                        <Link
                                            href={`/rescue/${rescueTriggers[i].slug}/`}
                                            className="inline-flex items-center gap-2 text-ember underline underline-offset-2 hover:text-forest"
                                        >
                                            What to do in this case
                                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The diagnostic */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="kicker mb-3">How it starts</div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                        <h2 className="font-heading text-3xl md:text-4xl text-forest-deep">
                            A paid diagnostic
                        </h2>
                        <span className="font-heading text-2xl md:text-3xl text-ember">
                            from $750
                        </span>
                    </div>
                    <p className="text-lg text-ink-2 leading-relaxed mb-8">
                        Two to five days, scoped on a short call before you pay
                        anything. We read the code, the data and the access, and you
                        get four things in writing:
                    </p>

                    <ul className="space-y-4 mb-10">
                        {included.map((item) => (
                            <li key={item.slice(0, 24)} className="flex gap-3">
                                <span className="text-ember shrink-0" aria-hidden="true">
                                    →
                                </span>
                                <span className="text-base md:text-lg text-ink-2 leading-relaxed">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="border-l-2 border-rule pl-5 py-1 mb-10 max-w-3xl">
                        <p className="text-base text-ink-2 leading-relaxed">
                            <strong className="text-forest-deep">
                                Why it is paid, and why that is in your interest.
                            </strong>{" "}
                            A free look produces a sales pitch, because that is the only
                            thing it can pay for. A paid diagnostic produces a document
                            you own, written to be useful to whoever does the work —
                            including someone who is not us.
                        </p>
                    </div>

                    <p className="text-lg text-ink-2 leading-relaxed">
                        Where it goes next is your call. Most engagements become a
                        fixed-fee{" "}
                        <Link
                            href="/pricing"
                            className="text-ember underline underline-offset-2 hover:text-forest"
                        >
                            Build
                        </Link>{" "}
                        against the plan, billed per milestone. Some become{" "}
                        <Link
                            href="/pricing"
                            className="text-ember underline underline-offset-2 hover:text-forest"
                        >
                            Managed
                        </Link>
                        , where we simply run it. And where the question is really
                        &ldquo;was this delivered or not,&rdquo; the honest answer is
                        usually a full{" "}
                        <Link
                            href="/pricing"
                            className="text-ember underline underline-offset-2 hover:text-forest"
                        >
                            Assessment
                        </Link>{" "}
                        rather than a rescue.
                    </p>
                </div>
            </section>

            {/* Proof */}
            <section className="py-16 md:py-20 bg-cream-2/60 border-y border-rule">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="kicker mb-3">We have done this</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-10 max-w-3xl">
                        Two of these were rescues before we called them that.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                        <div>
                            <h3 className="font-heading text-xl text-forest-deep mb-3">
                                A vendor&apos;s AI put a transmission line in the wrong
                                place
                            </h3>
                            <p className="text-base text-ink-2 leading-relaxed mb-4">
                                Survey overlays had been produced with generative image
                                models. They looked convincing and were wrong — geometry
                                that had moved, an inventory that did not match the
                                ground. We rebuilt the pipeline so every placed feature
                                traces to real survey data, and proved it with guards
                                that fail the build if a model touches the output.
                            </p>
                            <Link
                                href="/case-studies/deterministic-spatial-platform"
                                className="inline-flex items-center gap-2 text-ember underline underline-offset-2 hover:text-forest"
                            >
                                Read the case study
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                        <div>
                            <h3 className="font-heading text-xl text-forest-deep mb-3">
                                Two abandoned attempts, then one that shipped
                            </h3>
                            <p className="text-base text-ink-2 leading-relaxed">
                                A software vendor had made two runs at the same platform
                                and stopped both — together, more than fifteen hundred
                                commits left behind. We took it over and rebuilt it: it
                                now runs multi-tenant with a hash-chained custody trail
                                and roughly two thousand tests passing. Client named on
                                request.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capacity + exclusions */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="kicker mb-3">Before you write</div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest-deep mb-6">
                        Two honest limits.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-5">
                        <strong className="text-forest-deep">
                            We take a small number of these at a time.
                        </strong>{" "}
                        Rescue work does not queue well — it is urgent by definition,
                        and the diagnosis is the part that cannot be rushed. If we are
                        full we will tell you that rather than start late.
                    </p>
                    <p className="text-lg text-ink-2 leading-relaxed">
                        <strong className="text-forest-deep">
                            This is for software a business depends on.
                        </strong>{" "}
                        If it is a side project, a prototype nobody uses yet, or an
                        app you are hoping to finish cheaply, we are the wrong call and
                        a marketplace will serve you better. The work we do here is
                        worth its price when something real breaks if it stays broken.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-cream-2/60 border-t border-rule">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl text-forest-deep mb-5">
                        Tell us what broke and who left.
                    </h2>
                    <p className="text-lg text-ink-2 leading-relaxed mb-8">
                        Two paragraphs is plenty: what the software does, what happened,
                        and what you still have access to. We will tell you whether a
                        diagnostic is the right next step, what it would cost, and if
                        it is not, what to do instead.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-heading text-lg text-forest-deep border-b-2 border-ember pb-1 hover:text-ember transition-colors"
                    >
                        Start the conversation
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
