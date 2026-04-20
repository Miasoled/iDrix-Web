"use client";

import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";
import {
  AutomatizacionesHero,
  AutomatizacionesCards, // puedes mantener o reemplazar
} from "@/components/hero-services/automatizaciones/hero-automatizaciones";
import { AutomationWorkflow } from "@/components/hero-services/automatizaciones/content";
import { PedidosAutomatizadosSection } from "@/components/hero-services/automatizaciones/PedidosAutomatizadosSection";
import { InventarioTiempoReal } from "@/components/hero-services/automatizaciones/InventarioTiempoReal";
import { PreciosDinamicos } from "@/components/hero-services/automatizaciones/preciosDinamicos";

import { CatalogoInteligente } from "@/components/hero-services/automatizaciones/catalogoInteligente";

export default function Automatizaciones() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cloud-hero-bg)" }}>
      <Navbar />

      <ScrollReveal direction="fadeUp">
        <AutomatizacionesHero />
      </ScrollReveal>

      <ScrollReveal direction="fadeUp">
        <PedidosAutomatizadosSection />
      </ScrollReveal>

      <ScrollReveal direction="scaleIn">
        <InventarioTiempoReal />
      </ScrollReveal>

      <ScrollReveal direction="fadeUp">
        <PreciosDinamicos />
      </ScrollReveal>

      <ScrollReveal direction="fadeUp">
        <CatalogoInteligente />
      </ScrollReveal>

      <ScrollReveal direction="scaleIn">
        <AutomatizacionesCards />
      </ScrollReveal>

      <ScrollReveal direction="fadeUp">
        <AutomationWorkflow />
      </ScrollReveal>

      <FooterIdrix />
    </main>
  );
}
