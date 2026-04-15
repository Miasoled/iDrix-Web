"use client";

import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Automatizaciones() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">Automatizaciones</h1>
          <p className="text-muted-foreground">Próximamente más contenido sobre automatizaciones.</p>
        </div>
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
