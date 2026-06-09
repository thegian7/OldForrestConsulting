import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import OperationalIntelligenceClient from "./OperationalIntelligenceClient";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-oi-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-oi-text",
});

export const metadata: Metadata = {
  title: "Operational Intelligence for Multi-Entity Operators | Old Forrest Consulting",
  description:
    "You run several companies. You can see one at a time. One consolidated picture across every entity you own, with a plain-English digest every Tuesday morning. Fixed prices. Your systems stay.",
  openGraph: {
    title: "Operational Intelligence for Multi-Entity Operators",
    description:
      "Real cash across every entity. True job profitability. WIP exposure explained in plain English, every Tuesday at 6am.",
    url: "https://oldforrest.net/operational-intelligence",
    type: "website",
  },
};

export default function OperationalIntelligencePage() {
  return (
    <div className={`${fraunces.variable} ${archivo.variable}`}>
      <OperationalIntelligenceClient />
    </div>
  );
}
