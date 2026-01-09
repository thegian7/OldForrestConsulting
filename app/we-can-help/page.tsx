import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProblemCards from "@/components/ProblemCards";
import WeCanHelpHero from "./WeCanHelpHero";
import PersonaCallouts from "./PersonaCallouts";
import WeCanHelpCTA from "./WeCanHelpCTA";

export const metadata: Metadata = {
    title: "We Can Help",
    description:
        "Struggling with AI projects, deployment, or integrations? See if your problem matches what we solve. AI project rescue, Replit migration, Stripe integration, and more.",
    keywords: [
        "AI project help",
        "Replit migration",
        "Lovable migration",
        "Stripe integration help",
        "developer quit",
        "AI hallucination fix",
        "chatbot not working",
        "deploy to production",
    ],
};

export default function WeCanHelpPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <WeCanHelpHero />
            <ProblemCards />
            <PersonaCallouts />
            <WeCanHelpCTA />
            <Footer />
        </main>
    );
}
