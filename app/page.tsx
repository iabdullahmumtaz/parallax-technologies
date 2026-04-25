import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TechStack } from "@/components/TechStack";
import { StatsBar } from "@/components/StatsBar";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <ServicesGrid />
        <TechStack />
        <StatsBar />
        <FeaturedProjects />
        <FAQSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </>
  );
}
