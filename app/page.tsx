import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import Services from "@/components/Services";
import Differentiator from "@/components/Differentiator";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Credibility />
      <Services />
      <Differentiator />
      <CaseStudies />
      <Team />
      <Values />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
