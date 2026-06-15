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
import { SiteBackground } from "@/components/three/SiteBackground";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10 flex min-h-full flex-1 flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ServicesGrid />
          <TechStack />
          <StatsBar />
          <FeaturedProjects />
          <Mission />
          <FAQSection />
          <ContactSection />
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}
