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
    <main className="min-h-screen bg-cream text-ink">
      <Navbar />

      <div className="pt-32 md:pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-forest-deep tracking-tight leading-tight mb-4">
              Legal Documents
            </h1>
            <p className="text-lg md:text-xl text-ink-3 max-w-2xl mx-auto">
              Transparency and protection for all parties. Review our agreements and policies below.
            </p>
          </div>

          <div className="grid gap-4">
            {legalDocuments.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="group flex items-start gap-6 p-6 bg-white border border-rule rounded-md hover:border-forest transition-colors"
              >
                <div className="w-12 h-12 bg-forest text-cream rounded-md flex items-center justify-center shrink-0">
                  <doc.icon size={22} />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-forest-deep mb-1 group-hover:text-ember transition-colors">
                    {doc.title}
                  </h2>
                  <p className="text-ink-2">{doc.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 bg-cream-2/60 border-l-4 border-ember rounded-md">
            <p className="text-ink-2 text-sm leading-relaxed">
              <strong className="text-forest-deep">Disclaimer:</strong> These documents are provided as templates and general information.
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
