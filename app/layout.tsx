import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const BASE_URL = "https://oldforrest.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Old Forrest Consulting | AI Project Rescue & Fractional CTO",
    template: "%s | Old Forrest Consulting",
  },
  description:
    "Fractional CTO expertise for founders and teams who need real architecture, real execution, and real results—fast. AI integration, full-stack development, and technical leadership.",
  keywords: [
    "Fractional CTO",
    "AI Project Rescue",
    "Technical Leadership",
    "Full Stack Development",
    "TypeScript",
    "React",
    "Node.js",
    "AI Integration",
    "Startup CTO",
    "Technical Consulting",
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
    title: "Old Forrest Consulting | AI Project Rescue & Fractional CTO",
    description:
      "Fractional CTO expertise for founders and teams who need real architecture, real execution, and real results—fast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Old Forrest Consulting - Fractional CTO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Forrest Consulting | AI Project Rescue & Fractional CTO",
    description:
      "Fractional CTO expertise for founders and teams who need real architecture, real execution, and real results—fast.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
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
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
