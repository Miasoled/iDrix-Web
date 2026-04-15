// HeroERP.tsx
"use client";

import { ArrowRight, Play, Sparkles, TrendingUp, X } from "lucide-react";
import { useState } from "react";

export default function HeroIA() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Configuración de enlaces (cámbialos por tus URLs reales)
  const demoLink =
    "https://api.whatsapp.com/send?phone=593983516343&text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20del%20sistema%20contable%20iDrix%20para%20ver%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20empresa."; // Link para agendar demostración
  const videoUrl =
    "https://res.cloudinary.com/ddodvvqcq/video/upload/v1746723840/iDrix/IDrixPresentacionIA.mp4"; // URL del video

  return (
    <>
      <section
        className="relative flex min-h-[100svh] flex-col items-center overflow-hidden pt-24 pb-16 px-4 md:px-12 lg:px-10 transition-colors duration-500 md:pt-28 lg:pt-28"
        style={{ background: "var(--hero-bg)" }}
      >
        <div className="absolute inset-0 bg-[var(--hero-soft-blue)]" />
        <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-60" />
        <div className="absolute inset-0 bg-[var(--hero-glow)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--hero-core-glow)] opacity-40 rounded-full blur-3xl" />

        <div className="relative z-10 flex items-center rounded-full border border-[var(--hero-clientes-arc)] bg-[var(--info-bg)]/80 px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] mb-10 md:mb-12">
          <span className="flex items-center rounded-full bg-[hsl(200,25%,96%)] text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
            <Sparkles
              size={20}
              strokeWidth={2}
              className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] m-1.5"
            />
          </span>
          <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors px-1">
            IA Generativa aplicada a Finanzas
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="mb-4 font-black leading-[1.1] text-2xl sm:text-6xl lg:text-6xl xl:text-6xl text-[hsl(200,50%,15%)] dark:text-white">
              El ERP que <br />
              revoluciona
              <span className="light-text-gradient dark:bg-gradient-to-r dark:from-[hsl(207,76%,60%)] dark:to-[hsl(200,80%,70%)] dark:bg-clip-text dark:text-transparent block">
                tu contabilidad con IA
              </span>
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground">
              Llevamos la inteligencia artificial generativa al ecosistema
              financiero de Ecuador. Automatiza, predice y escala tu empresa con
              precisión etérea.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] hover:-translate-y-0.5 dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]"
              >
                Agendar Demostración
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Botón para abrir modal de video */}
              {/* Botón para abrir modal de video */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group video-button inline-flex items-center justify-center gap-2 rounded-xl bg-white backdrop-blur-sm border border-gray-200 px-6 py-3 text-sm font-medium transition-all hover:bg-gray-50 hover:-translate-y-0.5 !text-black"
              >
                <Play size={16} className="dark:text-black" />
                <span className="dark:text-black">Ver video</span>
              </button>
            </div>
          </div>

          {/* Columna derecha - Tarjeta de predicción */}
          <div className="flex justify-center items-center w-full">
            <div
              className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-105 duration-300"
              style={{
                background:
                  "linear-gradient(135deg, hsl(207,76%,55%) 0%, hsl(217,70%,45%) 100%)",
              }}
            >
              {/* Contenido de la tarjeta */}
              <div className="flex flex-col items-center justify-center pt-12 pb-8 px-6">
                <div className="mb-6 p-3 rounded-full bg-white/10">
                  <TrendingUp size={48} className="text-white/80" />
                </div>
                <span className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-2">
                  PREDICCIÓN
                </span>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-6xl sm:text-7xl font-black text-white">
                    +24.5%
                  </span>
                  <span className="text-xl font-semibold text-white/80">
                    Crecimiento
                  </span>
                </div>
                <p className="text-center text-sm text-white/70 max-w-[200px]">
                  proyectado para empresas que adoptan IA generativa
                </p>
              </div>

              {/* Barra inferior decorativa */}
              <div className="flex justify-center items-center pb-6 px-4">
                <div className="flex flex-col gap-2 w-full rounded-2xl bg-white/15 backdrop-blur-sm px-4 py-3 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      IA Predictiva Activada
                    </span>
                  </div>
                  <div className="w-full h-1 rounded-full bg-white/20">
                    <div className="h-1 rounded-full bg-white w-3/4" />
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-white/20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-2 border-white/15" />
            </div>
          </div>
        </div>

        {/* Fade inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[var(--hero-bottom-fade)] pointer-events-none" />
      </section>

      {/* Modal para el video - VERSIÓN CORREGIDA */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-black transition-colors"
              aria-label="Cerrar video"
            >
              <X size={24} />
            </button>

            {/* Reproductor de video nativo - CORREGIDO */}
            <div className="relative w-full bg-black">
              <video
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                style={{ maxHeight: "80vh" }}
              >
                <source src={videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
