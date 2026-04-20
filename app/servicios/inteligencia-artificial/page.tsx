"use client";

import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";
import HeroIA from "@/components/hero-services/IA/hero-ia";
import {
  AISection,
  RealAnalisis,
  PotenciaInteligente,
  CardsIA,
} from "@/components/hero-services/IA/content-IA";

export default function IA() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <HeroIA />
        <AISection />
        <RealAnalisis />
        <PotenciaInteligente />
        <CardsIA />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
