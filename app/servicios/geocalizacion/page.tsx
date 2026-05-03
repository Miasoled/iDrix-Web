"use client";

import HeroGeo from "@/components/hero-services/geolocalizacion/hero-geo";
import { Navbar } from "@/components/Navbar";
import {
  CardsGeo,
  Monitoreo,
  Beneficios,
} from "@/components/hero-services/geolocalizacion/content";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Geocalizacion() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroGeo />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <CardsGeo />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <Monitoreo />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <Beneficios />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
