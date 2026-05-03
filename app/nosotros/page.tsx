"use client";

import { Navbar } from "@/components/Navbar";
import { Politicas } from "@/components/hero-services/nosotros/politicas";
import { Valores } from "@/components/hero-services/nosotros/valores";
import EquipoTrabajo from "@/components/hero-services/nosotros/equipo";
import { BrochuresSection } from "@/components/hero-services/nosotros/brochures-seccion";
import { HistoriaSection } from "@/components/hero-services/nosotros/historia-seccion";
import { ScrollReveal } from "@/components/page-wrapper";
import Image from "next/image";

import { HeroNosotros } from "@/components/hero-services/nosotros/hero-nosotros";
import FooterIdrix from "@/components/footer";

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <HeroNosotros />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <HistoriaSection />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <MisionVision />
      </ScrollReveal>
      <ScrollReveal direction="fadeUp">
        <Politicas />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <Valores />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <EquipoTrabajo />
      </ScrollReveal>

      <ScrollReveal direction="slideLeft">
        <BrochuresSection />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}

export function MisionVision() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-white dark:bg-[hsl(215,50%,8%)]">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-foreground tracking-wide uppercase mb-2">
            Misión & Visión
          </h2>
          <div
            className="h-[3px] w-64 rounded-full"
            style={{
              background:
                "linear-gradient(to right, hsl(207,76%,45%), transparent)",
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="flex justify-center">
            <Image
              src="/img/Mision.png"
              alt="Misión y Visión"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Círculos */}
          <div className="flex flex-col gap-y-5 justify-center items-center">
            {/* Visión */}
            <div className="relative w-80 h-80">
              {/* Halo light */}
              <div
                className="absolute rounded-full w-80 h-80 -left-10 top-0 dark:hidden"
                style={{
                  background:
                    "linear-gradient(to top, hsl(207,76%,40%), hsl(207,76%,85%), white)",
                }}
              />
              {/* Halo dark */}
              <div
                className="absolute rounded-full w-80 h-80 -left-10 top-0 hidden dark:block"
                style={{
                  background:
                    "radial-gradient(circle at 60% 50%, transparent 38%, hsl(195,85%,35%) 52%, hsl(195,85%,25%) 62%, hsl(215,50%,8%) 75%, transparent 85%)",
                }}
              />
              {/* Círculo encima */}
              <div className="absolute rounded-full w-72 h-72 right-0 top-4 z-10 bg-white border-12 border-white dark:bg-[hsl(215,50%,12%)] dark:border-[hsl(215,50%,8%)] flex flex-col items-center justify-center text-center px-6">
                <div className="absolute inset-2 rounded-full border border-gray-300 dark:border-white/10 pointer-events-none" />
                <div className="relative z-20">
                  <p className="text-lg font-bold text-[hsl(217,60%,20%)] dark:text-white mb-2">
                    Visión
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white/60 leading-relaxed">
                    Ser una empresa líder en desarrollo de software en América
                    Latina, reconocida por su innovación, calidad y compromiso
                    con el éxito de sus clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Misión */}
            <div className="relative w-80 h-80">
              {/* Halo light */}
              <div
                className="absolute rounded-full w-80 h-80 -right-10 top-0 dark:hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(207,76%,40%), hsl(207,76%,85%), white)",
                }}
              />
              {/* Halo dark */}
              <div
                className="absolute rounded-full w-80 h-80 -right-10 top-0 hidden dark:block"
                style={{
                  background:
                    "radial-gradient(circle at 40% 50%, transparent 38%, hsl(195,85%,30%) 52%, hsl(195,85%,20%) 62%, hsl(215,50%,8%) 75%, transparent 85%)",
                }}
              />
              {/* Círculo azul oscuro encima */}
              <div
                className="absolute rounded-full w-72 h-72 left-0 top-4 z-10 border-14 border-white dark:border-[hsl(215,50%,8%)] flex flex-col items-center justify-center text-center px-6"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215,45%,22%) 0%, hsl(215,50%,18%) 40%, hsl(215,55%,15%) 100%)",
                }}
              >
                <div className="absolute inset-2 rounded-full pointer-events-none" />
                <div className="relative z-20">
                  <p className="text-lg font-bold text-white mb-2">Misión</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Impulsar el crecimiento de empresas y emprendedores mediante
                    software a medida que transforme ideas en soluciones
                    digitales eficientes y escalables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
