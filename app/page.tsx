import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutIntro } from "@/components/AboutIntro";
import { Mission } from "@/components/Mission";
import { ServicesPills } from "@/components/ServicesPills";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TechStack } from "@/components/TechStack";
import { StatsBar } from "@/components/StatsBar";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutIntro />
        <Mission />
        <ServicesPills />
        <ServicesGrid />
        <TechStack />
        <StatsBar />
        <FeaturedProjects />
        <ContactSection />
      </main>
    </>
  );
}
