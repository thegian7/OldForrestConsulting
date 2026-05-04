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
    <main className="min-h-screen bg-cream text-ink">
      <Navbar />

      <div className="pt-32 md:pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-sm text-ink-3 hover:text-forest transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Legal</span>
          </Link>

          <div className="mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-forest-deep tracking-tight leading-tight mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-ink-3">
              <span>Last Updated: {lastUpdated}</span>
              {downloadUrl && (
                <a
                  href={downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-rule rounded-md text-ink-2 hover:border-forest hover:text-forest transition-colors"
                >
                  <Download size={16} />
                  {downloadLabel}
                </a>
              )}
            </div>
          </div>

          {tableOfContents && tableOfContents.length > 0 && (
            <nav className="mb-12 p-6 bg-cream-2/60 border border-rule rounded-md">
              <h2 className="font-heading text-lg font-semibold text-forest-deep mb-4 flex items-center gap-2">
                <FileText size={18} />
                Table of Contents
              </h2>
              <ol className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-ink-2 hover:text-forest transition-colors"
                    >
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose prose-base md:prose-lg max-w-none prose-headings:font-heading prose-headings:text-forest-deep prose-headings:tracking-tight prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-ink-2 prose-p:leading-relaxed prose-strong:text-forest-deep prose-a:text-forest prose-a:underline-offset-2 hover:prose-a:text-ember prose-li:text-ink-2 prose-ul:my-4 prose-ol:my-4">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
