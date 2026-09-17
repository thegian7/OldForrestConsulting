import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import {
  OrganizationJsonLd,
  ProfessionalServiceJsonLd,
  WebSiteJsonLd,
} from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const BASE_URL = "https://oldforrest.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Old Forrest Consulting | Managed Intelligence for Operations-Heavy Businesses",
    template: "%s | Old Forrest Consulting",
  },
  description:
    "One firm that integrates, embeds, maintains, and builds the stack your business actually runs on — and handles your vendors. For operators whose records have to hold up.",
  keywords: [
    "Managed Intelligence",
    "Operations Consulting",
    "Records Integrity",
    "Operational Data Provenance",
    "Systems of Record",
    "Fractional CTO",
    "Fractional COO",
    "BI Dashboards",
    "CRM Integration",
    "HubSpot",
    "Vendor Management",
    "Utah Consulting",
  ],
  authors: [{ name: "Old Forrest Consulting" }],
  creator: "Old Forrest Consulting",
  publisher: "Old Forrest Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Old Forrest Consulting",
    title: "Old Forrest Consulting | Managed Intelligence for Operations-Heavy Businesses",
    description:
      "One firm that integrates, embeds, maintains, and builds the stack your business actually runs on — and handles your vendors.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Old Forrest Consulting — Managed Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Forrest Consulting | Managed Intelligence",
    description:
      "One firm that integrates, embeds, maintains, and builds the stack your business actually runs on — and handles your vendors.",
    images: ["/og-image.png"],
  },
  alternates: {
    // Root only. EVERY page must set its own alternates.canonical or it
    // inherits this one and tells Google it is a duplicate of the homepage.
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationJsonLd />
        <ProfessionalServiceJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
