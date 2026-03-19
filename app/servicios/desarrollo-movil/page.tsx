import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/hero-section";
export default function DesarrolloMovil() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32"
      style={{ background: "var( --secondary-gradient)" }}
    >
      <Navbar />
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 1. Base background */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: "var(--hero-gradient)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        {/* Heading Responsivo */}
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Aplicaciones móviles que
          <br className="hidden sm:block" />
          <span className="light-text-gradient">transforman negocios</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          Desarrollamos apps nativas nativas, híbridas y PWA para Android e iOS,
          utilizando Flutter y Xamarin para ofrecer soliuciones rápidas, seguras
          y escalables desde.
        </p>

        {/* CTA Buttons - Arreglo Responsive */}
        {/* En móvil (por defecto) son flex-col y w-full. En sm (tablet) son flex-row y w-auto */}
        <div className="flex w-full flex-col items-center gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
          <button className="w-full rounded-xl bg-[hsl(207,76%,45%)] px-7 py-3.5 text-base font-medium text-[hsl(0,0%,100%)] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(28,126,201,0.25)] transition-all hover:bg-[hsl(207,76%,40%)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_6px_16px_rgba(28,126,201,0.35)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)] dark:hover:shadow-[0_0_40px_-5px_rgba(28,126,201,0.7)] sm:w-auto">
            Inicias proyecto
          </button>
          <button className="w-full rounded-xl border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%)] px-7 py-3.5 text-base font-medium text-[hsl(200,50%,15%)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:border-[hsl(200,25%,78%)] hover:bg-[hsl(200,25%,98%)] dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 sm:w-auto">
            Ver portafolio
          </button>
        </div>
      </div>
    </section>
  );
}
