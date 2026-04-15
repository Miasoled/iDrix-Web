"use client";

import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { HeroContacto } from "@/components/hero-services/contact/hero-contacto";
import { ScrollReveal } from "@/components/page-wrapper";
import { MapPin, Phone } from "lucide-react";

export default function Contacto() {
  return (
    <main className="min-h-screen" style={{ background: "var(--hero-soft-blue)" }}>
      <Navbar />
      <ScrollReveal direction="slideRight">
        <HeroContacto />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <Ubicacion />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}

export function Ubicacion() {
  const sucursales = [
    {
      tipo: "MATRIZ",
      direccion: "Av. Chone 408, sector Mi cuchito",
      ciudad: "Santo Domingo — Ecuador",
      telefonos: ["Ventas: 0983 516 343", "Soporte: 0939 943 434"],
    },
    {
      tipo: "SUCURSAL",
      direccion: "Urdenor Durán, Mz O Villa 14",
      ciudad: "Guayas — Ecuador",
      telefonos: ["0983 516 343"],
    },
  ];
  return (
    <section
      className="w-full py-20 px-4 transition-colors duration-500 "
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta + Título */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-bold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Ubícanos
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-10">
          ¿Cómo llegar a <span className="light-text-gradient mb-2 pb-2 inline-block">iDrix</span>?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — Cards sucursales */}
          <div className="flex flex-col gap-5">
            {sucursales.map((s) => (
              <div
                key={s.tipo}
                className="rounded-2xl p-6 flex flex-col gap-4 bg-white border border-[hsl(210,20%,90%)] shadow-sm dark:bg-white/5 dark:border-white/10"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[hsl(207,76%,45%)]">
                    {s.tipo}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-3 rounded-xl p-3 bg-[hsl(210,40%,96%)] dark:bg-white/5">
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                    className="text-[hsl(207,76%,45%)] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.direccion}</p>
                    <p className="text-xs text-muted-foreground">{s.ciudad}</p>
                  </div>
                </div>

                {/* Teléfonos */}
                {s.telefonos.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 rounded-xl p-3 bg-[hsl(210,40%,96%)] dark:bg-white/5"
                  >
                    <Phone
                      size={16}
                      strokeWidth={1.5}
                      className="text-[hsl(207,76%,45%)] flex-shrink-0"
                    />
                    <p className="text-sm text-foreground">{t}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* RIGHT — Mapa */}
          <div className="rounded-2xl overflow-hidden border border-[hsl(210,20%,90%)] dark:shadow-[0_0_25px_rgba(28,126,201,0.6)] dark:border-white/10 h-[480px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d-79.17!3d-0.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2ziDrix+Technology+S.A!5e0!3m2!1ses!2sec!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
