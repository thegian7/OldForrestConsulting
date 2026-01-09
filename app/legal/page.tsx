import { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Scale, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal documents, terms of service, privacy policy, and consulting agreements for Old Forrest Consulting LLC.",
};

const legalDocuments = [
  {
    title: "Master Service Agreement",
    description: "Our standard consulting agreement covering terms, liability, payment, and intellectual property.",
    href: "/legal/msa",
    icon: Scale,
  },
  {
    title: "Statement of Work Template",
    description: "Project-specific addendum defining scope, deliverables, timeline, and pricing.",
    href: "/legal/sow",
    icon: FileText,
  },
  {
    title: "Non-Disclosure Agreement",
    description: "Mutual confidentiality agreement protecting both parties' sensitive information.",
    href: "/legal/nda",
    icon: Lock,
  },
  {
    title: "Terms of Service",
    description: "Terms governing your use of our website and services.",
    href: "/legal/terms",
    icon: Shield,
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    href: "/legal/privacy",
    icon: Shield,
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Legal Documents
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transparency and protection for all parties. Review our agreements and policies below.
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid gap-6">
            {legalDocuments.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="group flex items-start gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <doc.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h2>
                  <p className="text-gray-400">{doc.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
            <p className="text-yellow-200/80 text-sm">
              <strong>Disclaimer:</strong> These documents are provided as templates and general information.
              We recommend consulting with a qualified attorney for advice specific to your situation.
              Old Forrest Consulting LLC is based in Utah and our agreements are governed by Utah law.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
