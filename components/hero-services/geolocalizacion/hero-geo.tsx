import React from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Navigation,
  LayoutGrid,
  Activity,
  CheckCircle2,
  User,
} from "lucide-react";

export default function HeroGeo() {
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
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 text-center lg:flex-row lg:text-left lg:justify-between lg:gap-16 mb-20">
        {/* Left Side: Text and Actions */}
        <div className="flex-1 space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)]">
            <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
              <MapPin
                size={12}
                className="text-[hsl(207,76%,45%)] dark:text-white"
              />
              Live Tracking System
            </span>
            <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
              iDrix Technology S.A.
            </span>
          </div>

          <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Seguimiento en <br />
            <span className="light-text-gradient mb-2 pb-2 inline-block">
              Tiempo Real
            </span>
          </h1>

          <p className="mb-6 max-w-lg text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
            Optimice sus rutas comerciales con Geoldrix, una plataforma
            inteligente que integra geolocalización, monitoreo y análisis en
            tiempo real.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-4">
            <Button
              size="lg"
              className="bg-[hsl(207,76%,45%)] hover:bg-[hsl(207,76%,40%)] text-white rounded-2xl px-8 md:px-10 py-6 md:py-8 text-base md:text-lg shadow-xl dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)] transition-all active:scale-95"
            >
              Solicitar Demostración
              <Navigation className="ml-3 w-4 h-4 md:w-5 md:h-5 rotate-90 fill-current" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-card border-border rounded-2xl px-8 md:px-10 py-6 md:py-8 text-base md:text-lg text-foreground shadow-md hover:bg-muted dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all active:scale-95"
            >
              Ver Características
            </Button>
          </div>
        </div>

        {/* Right Side: Map Visualization and Cards */}
        <div className="flex-1 relative w-full max-w-2xl mt-12 lg:mt-0">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-card bg-muted dark:border-white/10">
            {/* Real Map Image Background */}
            <img 
              src="/img/Mapa.png" 
              alt="Plataforma Geoldrix"
              className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 dark:invert transition-opacity duration-500"
            />
            
            {/* Overlay to improve readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none" />

            {/* Card Superior: Vendedor Quito */}
            <div className="absolute top-[10%] right-[5%] md:right-[8%] bg-card/95 backdrop-blur-md shadow-xl rounded-2xl md:rounded-3xl p-4 md:p-6 w-56 md:w-72 border border-border">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center text-[hsl(207,76%,45%)]">
                  <User className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    Vendedor Quito
                  </h4>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest">
                    En ruta • Amazonas
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-[10px] md:text-[11px] font-bold text-muted-foreground">
                  <span>Progreso Visitas</span>
                  <span className="text-[hsl(207,76%,45%)] bg-muted px-2 rounded-md">
                    8/10
                  </span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-[hsl(207,76%,45%)] rounded-full w-[80%]" />
                </div>
              </div>
            </div>

            {/* Card Inferior: Vendedor Guayaquil */}
            <div className="absolute bottom-[10%] left-[5%] md:left-[8%] bg-card/95 backdrop-blur-md shadow-xl rounded-2xl md:rounded-3xl p-4 md:p-6 w-56 md:w-72 border border-border hidden sm:block">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    Vendedor GYE
                  </h4>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest">
                    Completado • Malecón
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-[10px] md:text-[11px] font-bold text-muted-foreground">
                  <span>Progreso Visitas</span>
                  <span className="text-emerald-500 bg-muted px-2 rounded-md">
                    12/15
                  </span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[75%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER FEATURES --- */}
      <div className="w-full bg-card/30 border-t border-border backdrop-blur-md py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              icon: MapPin,
              label: "GPS Tracking",
              color:
                "bg-blue-500/10 text-[hsl(207,76%,45%)] dark:text-blue-400",
            },
            {
              icon: Navigation,
              label: "Optimized Routes",
              color: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400",
            },
            {
              icon: LayoutGrid,
              label: "Heatmaps",
              color: "bg-foreground/5 text-foreground dark:text-white",
            },
            {
              icon: Activity,
              label: "Live Monitoring",
              color: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:gap-5 group cursor-pointer justify-center lg:justify-start"
            >
              <div
                className={`${feature.color} p-3 md:p-4 rounded-2xl transition-all shadow-sm`}
              >
                <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-bold text-[hsl(200,50%,15%)] dark:text-white/90 tracking-tight text-sm md:text-base whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
