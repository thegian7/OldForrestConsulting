import Link from "next/link";
import Wordmark from "@/components/Wordmark";

const siteLinks = [
    { name: "Services", href: "/services" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const legalLinks = [
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Master Service Agreement", href: "/legal/msa" },
    { name: "Statement of Work", href: "/legal/sow" },
    { name: "Non-Disclosure Agreement", href: "/legal/nda" },
];

export default function Footer() {
    return (
        <footer className="bg-cream-2 border-t border-rule">
            <div className="container mx-auto px-6 max-w-6xl py-16">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    <div>
                        <Wordmark size="md" showSubline className="mb-5" />
                        <p className="text-sm text-ink-2 leading-relaxed max-w-xs">
                            Managed intelligence for trades, factories, franchises,
                            and property management. One firm that integrates, embeds,
                            maintains, and builds the stack your business actually runs on.
                        </p>
                    </div>

                    <div>
                        <h4 className="kicker mb-4">Site</h4>
                        <ul className="space-y-2">
                            {siteLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-ink-2 hover:text-forest transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="kicker mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-ink-2 hover:text-forest transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-rule flex flex-col md:flex-row gap-3 md:gap-8 md:items-center md:justify-between">
                    <div className="text-xs text-ink-3 leading-relaxed">
                        © {new Date().getFullYear()} Old Forrest Consulting LLC · Utah
                    </div>
                    <div className="text-xs text-ink-3">
                        <a
                            href="mailto:chris@oldforrest.net"
                            className="hover:text-forest transition-colors"
                        >
                            chris@oldforrest.net
                        </a>
                        <span className="mx-2 text-rule">·</span>
                        <a
                            href="mailto:taylor@oldforrest.net"
                            className="hover:text-forest transition-colors"
                        >
                            taylor@oldforrest.net
                        </a>
                    </div>
                    <div className="text-xs text-ink-3">
                        All engagements are subject to our{" "}
                        <Link
                            href="/legal/msa"
                            className="text-ink-2 hover:text-forest underline underline-offset-2"
                        >
                            Master Service Agreement
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </footer>
    );
}
