import Link from "next/link";
import { ArrowRight } from "lucide-react";

const verticals = [
    {
        name: "Trades",
        desc: "Construction, exteriors, roofing, HVAC, plumbing, electrical. Field crews, job sites, multiple entities, and a CRM nobody trusts.",
    },
    {
        name: "Factories",
        desc: "Small-to-mid manufacturers, shops, fabrication. ERP modules and shop-floor data that doesn't reach management in time to act on it.",
    },
    {
        name: "Franchises",
        desc: "Multi-location operators. Each location runs a slightly different stack, corporate wants unified reporting, and roll-ups live in spreadsheets.",
    },
];

export default function VerticalsTeaser() {
    return (
        <section className="py-20 md:py-28 bg-cream-2/60 border-y border-rule">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <div className="kicker mb-4">Who we serve</div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest-deep tracking-tight leading-[1.15]">
                        Operations-heavy businesses the big firms won&apos;t touch and
                        the generalists don&apos;t understand.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {verticals.map((v) => (
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
                        Read why we work for these businesses
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
