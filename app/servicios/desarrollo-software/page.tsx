"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSoftware } from "@/components/hero-services/software/hero-software";
import { AgileMethodologies, WhyChooseUs } from "@/components/hero-services/software/content";
import { CustomSoftwareSection } from "@/components/hero-services/software/content";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function DesarrolloSoftware() {
  return (
    <div>
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroSoftware />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <CustomSoftwareSection />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <AgileMethodologies />
      </ScrollReveal>
      <FooterIdrix />
    </div>
  );
}
