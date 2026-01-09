import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <Image
                            src="/logo.png"
                            alt="Old For(rest) Consulting"
                            width={480}
                            height={120}
                            className="h-24 w-auto mb-4"
                        />
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Old Forrest Consulting LLC.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Utah, USA
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/legal/terms"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal/privacy"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal/msa"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Service Agreement
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/legal"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    All Legal Documents
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/clledbetter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Thegian7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-xs">
                        All consulting services are subject to our{" "}
                        <Link href="/legal/msa" className="text-gray-400 hover:text-white underline">
                            Master Service Agreement
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}
