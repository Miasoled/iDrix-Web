"use client";

import { CloudCards, CloudHero } from "@/components/hero-services/cloud/hero-cloud";
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
      <FooterIdrix />
    </main>
  );
}
