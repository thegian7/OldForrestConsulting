"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_PATH = "/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "We Can Help", href: "/we-can-help" },
        { name: "Services", href: "/#services" },
        { name: "Case Studies", href: "/#case-studies" },
        { name: "Team", href: "/#team" },
        { name: "Values", href: "/#values" },
        { name: "Pricing", href: "/#pricing" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src={LOGO_PATH}
                        alt="Old For(rest) Consulting"
                        width={600}
                        height={150}
                        className="h-14 md:h-22 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-blue-600 rounded-lg transition-colors"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="px-5 py-3 text-center font-semibold text-white bg-primary hover:bg-blue-600 rounded-lg transition-colors"
                            >
                                Book a Call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
