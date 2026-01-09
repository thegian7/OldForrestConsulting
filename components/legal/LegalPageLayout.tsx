"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  tableOfContents?: TableOfContentsItem[];
  downloadUrl?: string;
  downloadLabel?: string;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
  tableOfContents,
  downloadUrl,
  downloadLabel = "Download PDF",
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back link */}
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Legal</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>Last Updated: {lastUpdated}</span>
              {downloadUrl && (
                <a
                  href={downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Download size={16} />
                  {downloadLabel}
                </a>
              )}
            </div>
          </div>

          {/* Table of Contents */}
          {tableOfContents && tableOfContents.length > 0 && (
            <nav className="mb-12 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText size={18} />
                Table of Contents
              </h2>
              <ol className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
