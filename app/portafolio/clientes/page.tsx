"use client";

import FooterIdrix from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { HeroClientes } from "@/components/portafolio/hero-clientes";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <ScrollReveal direction="fadeUp">
          <HeroClientes />
        </ScrollReveal>
        <FooterIdrix />
      </div>
    </main>
  );
}
