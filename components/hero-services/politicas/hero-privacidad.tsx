"use client";

import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function HeroPrivacidad() {
  return (
    <section
      className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden pt-24 pb-16 transition-colors duration-500 md:pt-28 lg:pt-32"
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

        {/* 4. Bottom Fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 transition-colors duration-500 md:h-32"
          style={{
            background: "var(--hero-bottom-fade)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-4 text-center">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)]">
          <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
            <ShieldCheck className="h-3.5 w-3.5 text-[hsl(207,76%,45%)] dark:text-white" />
            Legal & Privacidad
          </span>
          <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
            Tu seguridad es nuestra prioridad
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:text-5xl lg:text-6xl">
          Políticas y Protección <br className="hidden sm:block" />
          <span className="light-text-gradient inline-block">de Datos</span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          En iDrix Technology S.A., nos comprometemos a proteger tu información
          personal y garantizar la transparencia en el manejo de tus datos.
          Conoce cómo cuidamos tu privacidad.
        </p>

        {/* Features/Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            {
              icon: <Lock className="h-5 w-5" />,
              title: "Encriptación",
              desc: "Datos seguros de extremo a extremo",
            },
            {
              icon: <Eye className="h-5 w-5" />,
              title: "Transparencia",
              desc: "Sin letras pequeñas ni ocultas",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Cumplimiento",
              desc: "Normativas locales e internacionales",
            },
            {
              icon: <CheckCircle2 className="h-5 w-5" />,
              title: "Control",
              desc: "Tú decides sobre tu información",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-border bg-white/50 p-4 shadow-sm backdrop-blur transition-all hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(207,76%,45%)]/10 text-[hsl(207,76%,45%)] dark:bg-primary/20 dark:text-primary">
                {item.icon}
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-sm font-bold text-gray-800 dark:text-white">
                  {item.title}
                </span>
                <span className="text-[11px] text-gray-500 dark:text-slate-400">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
