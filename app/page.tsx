import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Verbs from "@/components/home/Verbs";
import VerticalsTeaser from "@/components/home/VerticalsTeaser";
import PrimaryCTA from "@/components/home/PrimaryCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Navbar />
      <Hero />
      <Verbs />
      <VerticalsTeaser />
      <PrimaryCTA />
      <Footer />
    </main>
  );
}
