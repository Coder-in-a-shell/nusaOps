import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FooterContact from "@/components/FooterContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-nusa-bg text-white selection:bg-nusa-accent selection:text-nusa-bg">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <HowWeWork />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <FooterContact />
    </main>
  );
}