"use client";

import { ShieldCheck, RefreshCw, ChevronRight } from "lucide-react";

const sections = [
  {
    id: 1,
    icon: ShieldCheck,
    tag: "Artículo 1",
    title: "Políticas de Privacidad y Protección de Datos",
    body: "Conforme a lo establecido en las leyes ecuatorianas de Protección de Datos Personales en posesión de particulares, el titular se compromete a tomar las medidas necesarias que garanticen la seguridad del usuario, para evitar que se haga uso indebido de los datos personales contenidos en la base de datos, así como garantizar que los datos obtenidos se utilizarán únicamente con el fin para el que fueron recabados.",
  },
  {
    id: 2,
    icon: RefreshCw,
    tag: "Artículo 2",
    title:
      "Derecho a Cambiar y Modificar las Políticas de Privacidad y Protección de Datos",
    body: "IDRIX TECHNOLOGY S.A. se reserva el derecho de cambiar o modificar sus políticas de privacidad en cualquier momento y sin previo aviso, de acuerdo con sus necesidades o cambios en la Legislación ecuatoriana. El usuario acepta dichas modificaciones.",
  },
];

export function PrivacidadSection() {
  return (
    <section
      className="w-full py-20 px-6 md:px-16"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* ── Section header ── */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-1 h-6 rounded-full"
            style={{ background: "var(--ai-icon-color)" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--ai-icon-color)" }}
          >
            Documentación Legal
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          style={{ color: "var(--foreground)" }}
        >
          Marco de{" "}
          <span className="light-text-gradient inline-block">Privacidad</span>
        </h2>
        <p
          className="text-sm mb-12 max-w-xl"
          style={{ color: "var(--muted-foreground)" }}
        >
          Las siguientes disposiciones regulan el tratamiento de sus datos
          personales bajo la normativa ecuatoriana vigente.
        </p>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-5">
          {sections.map(({ id, icon: Icon, tag, title, body }) => (
            <article
              key={id}
              className="group relative flex gap-6 rounded-2xl p-7 transition-all duration-300"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--ai-icon-color)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 32px rgba(46,170,244,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(0,0,0,0.04)";
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--ai-icon-color)" }}
              />

              {/* Icon */}
              <div
                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                style={{
                  background: "var(--ai-icon-bg)",
                }}
              >
                <Icon
                  size={20}
                  style={{ color: "var(--ai-icon-color)" }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Tag */}
                <span
                  className="inline-block text-[11px] font-semibold uppercase tracking-widest mb-2 px-2.5 py-0.5 rounded-full border"
                  style={{
                    color: "var(--ai-icon-color)",
                    borderColor: "var(--hero-clientes-arc)",
                    background: "var(--ai-icon-bg)",
                  }}
                >
                  {tag}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-3 leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {title}
                </h3>

                {/* Body */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {body}
                </p>
              </div>

              {/* Arrow hint */}
              <ChevronRight
                size={18}
                className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1 group-hover:translate-x-0"
                style={{ color: "var(--ai-icon-color)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
