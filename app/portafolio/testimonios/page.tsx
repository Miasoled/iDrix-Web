"use client";

import { Navbar } from "@/components/Navbar";
import { HeroTestimonio } from "@/components/portafolio/hero-tertimonio";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <HeroTestimonio />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
