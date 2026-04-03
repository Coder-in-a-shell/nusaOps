import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import FooterContact from "@/components/FooterContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-900 text-white selection:bg-neonPurple selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <FooterContact />
    </main>
  );
}