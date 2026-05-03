"use client";

import { CloudCards, CloudHero, CloudModels, CloudTypes } from "@/components/hero-services/cloud/hero-cloud";
import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function ComputacionNube() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cloud-hero-bg)" }}>
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <CloudHero />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <CloudCards />
      </ScrollReveal>
      
      {/* Las nuevas secciones también deben estar dentro de ScrollReveal para consistencia */}
      <ScrollReveal direction="slideRight">
        <CloudModels />
      </ScrollReveal>

      <ScrollReveal direction="scaleIn">
        <CloudTypes />
      </ScrollReveal>
      
      <FooterIdrix />
    </main>
  );
}
