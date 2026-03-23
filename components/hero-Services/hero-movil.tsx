"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export function HeroMovil() {
  const plugin = useRef(
    Autoplay({
      delay: 2000, // ← Cambia 1000 a 2000 (2 segundos)
      stopOnInteraction: false,
      stopOnMouseEnter: false, // ← Agrega esto para que no pare al hover
    }),
  );
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-5 text-center">
        {/* Heading */}
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent md:text-5xl lg:text-6xl">
          Aplicaciones móviles que <br />
          <span className="light-text-gradient mb-2 pb-1 inline-block">
            Transforman negocios
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground md:text-lg">
          Desarrollamos apps nativas nativas, híbridas y PWA para Android e iOS,
          utilizando Flutter y Xamarin para ofrecer soliuciones rápidas, seguras
          y escalables desde.
        </p>

        {/* CTA */}
        <div className="flex w-full flex-col items-center gap-3 px-4 py-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
          <button className="flex w-full rounded-xl gap-2 bg-[hsl(207,76%,45%)] px-7 py-3.5 text-base font-medium text-[hsl(0,0%,100%)] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(28,126,201,0.25)] transition-all hover:bg-[hsl(207,76%,40%)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_6px_16px_rgba(28,126,201,0.35)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)] dark:hover:shadow-[0_0_40px_-5px_rgba(28,126,201,0.7)] sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="lucide lucide-phone-icon lucide-phone gap-0.1"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            Comenzar proyecto
          </button>
          <button className="flex w-full rounded-xl gap-2 border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%)] px-7 py-3.5 text-base font-medium text-[hsl(200,50%,15%)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:border-[hsl(200,25%,78%)] hover:bg-[hsl(200,25%,98%)] dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="lucide lucide-circle-play-icon lucide-circle-play"
            >
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            Solicitar cotización
          </button>
        </div>

        {/* Stats */}
        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: "Flutter", color: "#54C5F8" },
            { label: "Xamarin", color: "#8B5CF6" },
            { label: "Android", color: "#3DDC84" },
            { label: "iOS", color: "#877F7F" },
            { label: "Firebase", color: "#FF6F00" },
            { label: "PWA / TWA", color: "#2196F3" },
            { label: "REST / GraphQL", color: "#E91E63" },
          ].map((tag) => (
            <span
              key={tag.label}
              className="flex items-center gap-2 rounded-xl border border-border bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur dark:bg-white/5"
            >
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: tag.color }}
              />
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* {Carrusel de imagenes} */}
      {/* Línea azul decorativa superior */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-full max-w-5xl h-[3px] rounded-full bg-gradient-to-r from-transparent via-[hsl(207,76%,45%)] to-transparent" />
      </div>

      {/* Carrusel */}
      <div className="flex justify-center mb-12 w-full">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full max-w-5xl px-12"
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-6">
            {/* CARD 1 */}
            <CarouselItem className="pl-2 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl p-4 flex flex-col items-center shadow-lg bg-card border border-[hsl(207,76%,55%)]  transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 mx-2">
                <Image
                  src="/img/Nativa.png"
                  alt="Nativa"
                  width={400}
                  height={400}
                  className="w-full h-48 object-contain"
                />
                <div
                  className="mt-4 w-full text-center py-2 rounded-xl font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,55%) 0%, hsl(210,80%,45%) 100%)",
                  }}
                >
                  NATIVA
                </div>
              </div>
            </CarouselItem>

            {/* CARD 2 - destacada */}
            <CarouselItem className="pl-2 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl p-4 flex flex-col items-center shadow-lg border border-[hsl(207,76%,55%)] transition-all duration-300 bg-[hsl(217,60%,35%)] text-white dark:bg-sidebar mx-2">
                <Image
                  src="/img/Hibrida.png"
                  alt="Híbrida"
                  width={400}
                  height={400}
                  className="w-full h-48 object-contain"
                />
                <div
                  className="mt-4 w-full text-center py-2 rounded-xl font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,55%) 0%, hsl(210,80%,45%) 100%)",
                  }}
                >
                  HÍBRIDA
                </div>
              </div>
            </CarouselItem>

            {/* CARD 3 */}
            <CarouselItem className="pl-2 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl p-4 flex flex-col items-center shadow-lg bg-card border border-[hsl(207,76%,55%)]  transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 mx-2">
                <Image
                  src="/img/PWA.png"
                  alt="PWA"
                  width={400}
                  height={400}
                  className="w-full h-48 object-contain"
                />
                <div
                  className="mt-4 w-full text-center py-2 rounded-xl font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,55%) 0%, hsl(210,80%,45%) 100%)",
                  }}
                >
                  PWA
                </div>
              </div>
            </CarouselItem>
            {/* Cards duplicadas para funcionalidad del carousel */}
            <CarouselItem className="pl-2 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl p-4 flex flex-col items-center shadow-lg bg-card border border-[hsl(207,76%,55%)]  transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 mx-2">
                <Image
                  src="/img/Nativa.png"
                  alt="Nativa"
                  width={400}
                  height={400}
                  className="w-full h-48 object-contain"
                />
                <div
                  className="mt-4 w-full text-center py-2 rounded-xl font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,55%) 0%, hsl(210,80%,45%) 100%)",
                  }}
                >
                  NATIVA
                </div>
              </div>
            </CarouselItem>

            {/* CARD 2 - destacada */}
            <CarouselItem className="pl-2 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl p-4 flex flex-col items-center shadow-lg border border-[hsl(207,76%,55%)] transition-all duration-300 bg-[hsl(217,60%,35%)] text-white dark:bg-sidebar mx-2">
                <Image
                  src="/img/Hibrida.png"
                  alt="Híbrida"
                  width={400}
                  height={400}
                  className="w-full h-48 object-contain"
                />
                <div
                  className="mt-4 w-full text-center py-2 rounded-xl font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,55%) 0%, hsl(210,80%,45%) 100%)",
                  }}
                >
                  HÍBRIDA
                </div>
              </div>
            </CarouselItem>

            {/* CARD 3 */}
            <CarouselItem className="pl-2 md:pl-6 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl p-4 flex flex-col items-center shadow-lg bg-card border border-[hsl(207,76%,55%)]  transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 mx-2">
                <Image
                  src="/img/PWA.png"
                  alt="PWA"
                  width={400}
                  height={400}
                  className="w-full h-48 object-contain"
                />
                <div
                  className="mt-4 w-full text-center py-2 rounded-xl font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,55%) 0%, hsl(210,80%,45%) 100%)",
                  }}
                >
                  PWA
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
