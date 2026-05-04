import Link from "next/link";
import { ArrowRight } from "lucide-react";

const verbs = [
    {
        name: "Integrate",
        desc: "Make your systems talk. CRM to accounting to field tools to dashboards. No more data trapped in silos.",
    },
    {
        name: "Embed",
        desc: "Configure the stack to how your business actually works. Not theoretical best-practice — your reality.",
    },
    {
        name: "Maintain",
        desc: "On-call for the software and hardware. Monitoring, updates, fixes. Your stack stays quiet.",
    },
    {
        name: "Build",
        desc: "Custom dashboards, automations, tools. When off-the-shelf doesn't fit your workflow, we ship what does.",
    },
];

export default function Verbs() {
    return (
        <section className="py-20 md:py-28 border-t border-rule">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <div className="kicker mb-4">The four verbs</div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest-deep tracking-tight leading-[1.15]">
                        One firm that integrates, embeds, maintains, and builds the
                        stack your business actually runs on{" "}
                        <span className="italic text-ember">
                            — and handles your vendors.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {verbs.map((verb) => (
                        <div
                            key={verb.name}
                            className="bg-white border border-rule border-l-[3px] border-l-ember rounded-md p-5 md:p-6"
                        >
                            <h3 className="font-heading text-xl md:text-2xl text-forest-deep mb-2">
                                {verb.name}
                            </h3>
                            <p className="text-sm md:text-[0.95rem] text-ink-2 leading-relaxed">
                                {verb.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-ember transition-colors"
                    >
                        See the full Embed sprint
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
