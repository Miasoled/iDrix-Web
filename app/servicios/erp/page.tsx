"use client";

import { HeroErp } from "../../../components/hero-services/erp-hero/hero-erp";
import { Navbar } from "@/components/Navbar";
import { ErpFeatures, IdrixErpBanner } from "@/components/hero-services/erp-hero/content";
import { AiSection } from "@/components/hero-services/erp-hero/content";
import { MobilitySection } from "@/components/hero-services/erp-hero/content";
import { BiSection } from "@/components/hero-services/erp-hero/content";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroErp />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <ErpFeatures />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <AiSection />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <MobilitySection />
      </ScrollReveal>
      <ScrollReveal direction="fadeIn">
        <BiSection />
      </ScrollReveal>
      <ScrollReveal direction="fadeUp">
        <IdrixErpBanner />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
