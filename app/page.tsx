import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { DataRecoverySection } from "@/components/sections/data-recovery-section";
import { TrustSection } from "@/components/sections/trust-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <DataRecoverySection />
        <TrustSection />
        <PortfolioSection />
        <CtaBanner />
        <ContactSection />
      </main>
    </>
  );
}
