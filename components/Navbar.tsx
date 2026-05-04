"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Wordmark from "@/components/Wordmark";
import { cn } from "@/lib/cn";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
                scrolled
                    ? "bg-cream/90 backdrop-blur-md border-b border-rule py-3"
                    : "bg-transparent py-5",
            )}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between gap-6">
                <Link
                    href="/"
                    aria-label="Old Forrest Consulting home"
                    className="shrink-0"
                >
                    <Wordmark size="sm" className="md:[&>span:first-child]:text-xl" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-ink-2 hover:text-forest transition-colors whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-cream bg-forest hover:bg-forest-deep rounded-md transition-colors"
                    >
                        Contact
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="md:hidden text-forest p-2 -mr-2"
                    onClick={() => setIsOpen((v) => !v)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-cream border-b border-rule overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 text-base font-medium text-ink-2 hover:text-forest border-b border-rule/50 last:border-b-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 inline-flex justify-center items-center px-5 py-3 text-base font-semibold text-cream bg-forest hover:bg-forest-deep rounded-md transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
