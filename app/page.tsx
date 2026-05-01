import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Results />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
