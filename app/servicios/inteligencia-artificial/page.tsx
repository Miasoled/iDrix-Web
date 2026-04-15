"use client";

import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";
import HeroIA from "@/components/hero-services/IA/hero-ia";

export default function IA() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <HeroIA />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
