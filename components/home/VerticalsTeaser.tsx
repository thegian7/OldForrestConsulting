import Link from "next/link";
import { ArrowRight } from "lucide-react";

const signals = [
    {
        name: "Someone audits you",
        desc: "A regulator, lender, insurer, counterparty, or court eventually asks you to show your work — and the answer has to be better than \"that's what the system says.\"",
    },
    {
        name: "The answer lives with one person",
        desc: "The reconciliation everybody depends on runs through a spreadsheet only one person fully understands. That's not a tooling risk, it's a personnel risk.",
    },
    {
        name: "Nobody in-house owns it",
        desc: "Keeping the systems honest is somebody's fourth priority, inherited alongside their real job. So it happens when there's time, which is never.",
    },
    {
        name: "Nobody the right size can help",
        desc: "The firms with real depth treat you as too small to bother with. The generalists who'd take the work have never had to defend a number to someone skeptical.",
    },
];

export default function VerticalsTeaser() {
    return (
        <section className="py-20 md:py-28 bg-cream-2/60 border-y border-rule">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <div className="kicker mb-4">Who we serve</div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest-deep tracking-tight leading-[1.15]">
                        We work with operators whose records have to survive being
                        questioned.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {signals.map((v) => (
                        <div
                            key={v.name}
                            className="bg-white rounded-md p-6 border-l-[3px] border-forest"
                        >
                            <h3 className="font-heading text-2xl text-forest mb-2">
                                {v.name}
                            </h3>
                            <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href="/who-we-serve"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-ember transition-colors"
                    >
                        Read why we work with these operators
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
