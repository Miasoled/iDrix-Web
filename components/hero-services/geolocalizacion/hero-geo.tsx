import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, LayoutGrid, Activity, CheckCircle2, User } from "lucide-react";

export default function HeroGeo() {
  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden flex flex-col items-center justify-center pt-20 font-sans bg-background"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      {/* --- MAIN HERO CONTENT --- */}
      <div className="flex-1 w-full max-w-7xl px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20">
        {/* Lado Izquierdo: Textos y Acciones */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full border border-border shadow-sm mt-5">
            <div className="w-2 h-2 bg-[var(--ai-icon-color)] rounded-full" />
            <span className="text-[10px] md:text-[11px] font-bold text-foreground uppercase tracking-widest">
              Live Tracking System
            </span>
          </div>

          <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground transition-all md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Seguimiento en <br />
            <span className="text-transparent bg-clip-text light-text-gradient">Tiempo Real</span>
          </h1>

          <p className="mb-6 max-w-lg mx-auto lg:mx-0 text-balance text-base leading-relaxed text-muted-foreground transition-colors md:text-lg font-medium">
            Optimice sus rutas comerciales con Geoldrix, una plataforma inteligente que integra
            geolocalización, monitoreo y análisis en tiempo real.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-4">
            <Button
              size="lg"
              className="bg-[var(--ai-icon-color)] hover:brightness-110 text-primary-foreground rounded-2xl px-8 md:px-10 py-6 md:py-8 text-base md:text-lg font-bold shadow-xl shadow-blue-500/20 transition-all active:scale-95"
            >
              Solicitar Demostración
              <Navigation className="ml-3 w-4 h-4 md:w-5 md:h-5 rotate-90 fill-current" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-card border-border rounded-2xl px-8 md:px-10 py-6 md:py-8 text-base md:text-lg font-bold text-foreground shadow-md hover:bg-muted transition-all active:scale-95"
            >
              Ver Características
            </Button>
          </div>
        </div>

        {/* Lado Derecho: Visualización del Mapa y Cards */}
        <div className="flex-1 relative w-full max-w-2xl mt-12 lg:mt-0">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-card bg-muted">
            {/* Simulación de fondo de mapa */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.google.com/maps/d/u/0/thumbnail?mid=1_f7VfP-O6zV2pLwJ6_y1qZ_m9Z8')] bg-cover bg-center mix-blend-multiply dark:invert" />

            {/* Card Superior: Vendedor Quito - Hidden on small mobile */}
            <div className="absolute top-[10%] right-[5%] md:right-[8%] bg-card/95 backdrop-blur-md shadow-xl rounded-2xl md:rounded-3xl p-4 md:p-6 w-56 md:w-72 border border-border">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center text-[var(--ai-icon-color)]">
                  <User className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-foreground">Vendedor Quito</h4>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest">
                    En ruta • Amazonas
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-[10px] md:text-[11px] font-bold text-muted-foreground">
                  <span>Progreso Visitas</span>
                  <span className="text-[var(--ai-icon-color)] bg-muted px-2 rounded-md">8/10</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--ai-icon-color)] rounded-full w-[80%]" />
                </div>
              </div>
            </div>

            {/* Card Inferior: Vendedor Guayaquil - Hidden on mobile */}
            <div className="absolute bottom-[10%] left-[5%] md:left-[8%] bg-card/95 backdrop-blur-md shadow-xl rounded-2xl md:rounded-3xl p-4 md:p-6 w-56 md:w-72 border border-border hidden sm:block">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-foreground">Vendedor GYE</h4>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest">
                    Completado • Malecón
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-[10px] md:text-[11px] font-bold text-muted-foreground">
                  <span>Progreso Visitas</span>
                  <span className="text-emerald-500 bg-muted px-2 rounded-md">12/15</span>
                </div>
                <div className="h-1.5 md:h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[75%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER FEATURES (Iconos inferiores) --- */}
      <div className="w-full bg-card/30 border-t border-border backdrop-blur-md py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              icon: MapPin,
              label: "GPS Tracking",
              color: "bg-blue-500/10 text-[var(--ai-icon-color)]",
            },
            {
              icon: Navigation,
              label: "Optimized Routes",
              color: "bg-indigo-500/10 text-indigo-500",
            },
            { icon: LayoutGrid, label: "Heatmaps", color: "bg-foreground/5 text-foreground" },
            { icon: Activity, label: "Live Monitoring", color: "bg-violet-500/10 text-violet-500" },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:gap-5 group cursor-pointer justify-center lg:justify-start"
            >
              <div className={`${feature.color} p-3 md:p-4 rounded-2xl transition-all shadow-sm`}>
                <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-bold text-foreground tracking-tight text-sm md:text-base whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
