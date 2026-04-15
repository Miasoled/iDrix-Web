"use client";

import { ScrollReveal } from "./page-wrapper";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 1. Base background */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: "var(--hero-gradient)",
          }}
        />

        {/* 2. GLOWS (Fondo) */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "80%",
            height: "50%",
            borderRadius: "50%",
            background: "var(--hero-glow)",
            filter: "blur(40px)",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute left-1/2 top-[5%] -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "50%",
            height: "30%",
            borderRadius: "50%",
            background: "var(--hero-core-glow)",
            filter: "blur(30px)",
          }}
        />

        {/* 3. SHAPES (Arcos) */}

        {/* Arch 1 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "160%",
            height: "140%",
            top: "-50%",
            borderLeft: "50px solid var(--arch-1)",
            borderRight: "50px solid var(--arch-1)",
            borderBottom: "50px solid var(--arch-1)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(22px)",
            maskImage:
              "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, transparent 100%)",
          }}
        />

        {/* Arch 2 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "130%",
            height: "130%",
            top: "-42%",
            borderLeft: "42px solid var(--arch-2)",
            borderRight: "42px solid var(--arch-2)",
            borderBottom: "42px solid var(--arch-2)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(18px)",
            maskImage:
              "linear-gradient(to bottom, transparent 15%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 15%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 70%, transparent 100%)",
          }}
        />

        {/* Arch 3 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "105%",
            height: "120%",
            top: "-32%",
            borderLeft: "34px solid var(--arch-3)",
            borderRight: "34px solid var(--arch-3)",
            borderBottom: "34px solid var(--arch-3)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(14px)",
            maskImage:
              "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,1) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,1) 75%, transparent 100%)",
          }}
        />

        {/* Arch 4 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "80%",
            height: "110%",
            top: "-24%",
            borderLeft: "26px solid var(--arch-4)",
            borderRight: "26px solid var(--arch-4)",
            borderBottom: "26px solid var(--arch-4)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(10px)",
            maskImage:
              "linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%, transparent 100%)",
          }}
        />

        {/* 4. Bottom Fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 transition-colors duration-500 md:h-32"
          style={{
            background: "var(--hero-bottom-fade)",
          }}
        />
      </div>

      {/* Content */}
      <ScrollReveal delay={0.2}>
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
          {/* Badge */}
          <div className="mb-4 flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] md:mb-6">
            <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              >
                <path
                  d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z"
                  fill="currentColor"
                />
              </svg>
              Innovación
            </span>
            <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
              Desarrollo de Software a Medida
            </span>
          </div>

          {/* Heading Responsivo */}
          <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Impulsa tu negocio con <br className="hidden sm:block" />
            <span className="light-text-gradient">Desarrollo a medida</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 max-w-xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
            Convierte tu visión en soluciones digitales reales y escalables.
          </p>

          {/* CTA Buttons - Arreglo Responsive */}
          <div className="flex w-full flex-col items-center gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
            <button className="w-full rounded-xl bg-[hsl(207,76%,45%)] px-7 py-3.5 text-base font-medium text-[hsl(0,0%,100%)] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(28,126,201,0.25)] transition-all hover:bg-[hsl(207,76%,40%)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_6px_16px_rgba(28,126,201,0.35)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)] dark:hover:shadow-[0_0_40px_-5px_rgba(28,126,201,0.7)] sm:w-auto">
              Comenzar proyecto
            </button>
            <button className="w-full rounded-xl border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%)] px-7 py-3.5 text-base font-medium text-[hsl(200,50%,15%)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:border-[hsl(200,25%,78%)] hover:bg-[hsl(200,25%,98%)] dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 sm:w-auto">
              Solicitar cotización
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Hero Video */}
      <ScrollReveal delay={0.4}>
        <div className="relative z-10 mt-6 w-[88%] max-w-[680px] px-4 pb-0 md:mt-8 lg:mt-10">
          <div className="relative overflow-hidden rounded-xl border border-[hsl(200,25%,90%)] bg-[hsl(0,0%,100%)] shadow-[0_4px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] transition-all dark:bg-white/5 dark:border-white/10 dark:shadow-[0_0_40px_-5px_rgba(28,126,201,0.15)] md:rounded-2xl">
            {/* Top fade overlay */}
            <div className="pointer-events-none absolute -top-px left-0 right-0 z-10 h-1 rounded-t-xl bg-[linear-gradient(90deg,hsl(200,50%,85%),hsl(200,50%,88%),hsl(200,50%,85%))] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.1),rgba(255,255,255,0))] md:rounded-t-2xl" />
            <video
              src="/videos/HeroRepresentation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              style={{ height: "auto", display: "block" }}
            />
          </div>
          {/* Bottom fade */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 transition-colors duration-500 md:h-24"
            style={{ background: "var(--hero-dashboard-fade)" }}
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
