"use client";

import { Scale, Globe2, BookLock, Fingerprint } from "lucide-react";

const articles = [
  {
    number: "01",
    icon: BookLock,
    title: "Políticas de Propiedad Intelectual e Industrial",
    content:
      "El titular manifiesta tener los derechos intelectuales e industriales de la página web incluyendo imágenes, archivos de audio o video, logotipos, marcas, colores, estructuras, tipografías, diseños y demás elementos que lo distinguen, protegidos por la legislación ecuatoriana e internacional en materia de propiedad intelectual e industrial.",
    note: "El Usuario se compromete a respetar los derechos de propiedad industrial e intelectual del titular, pudiendo visualizar los elementos del sitio web, almacenarlos, copiarlos e imprimirlos exclusivamente para uso personal.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Legislación y Jurisdicción Aplicable",
    content:
      "La relación entre el usuario y el titular se regirá por las legislaciones aplicables en Ecuador. IDRIX TECHNOLOGY S.A. no se responsabiliza por la indebida utilización del contenido, productos y/o servicios publicados en la página web y del incumplimiento de los presentes términos y condiciones.",
    note: null,
  },
  {
    number: "03",
    icon: Fingerprint,
    title: "Propiedad Intelectual",
    content:
      "Con la finalidad de proteger los derechos del propietario de la página web, es importante mencionar que los servicios y todos los materiales incluidos o transferidos —incluyendo sin limitación software, imágenes, texto, gráficos, logotipos, patentes, marcas registradas, marcas de servicios, derechos de autor, fotografías, audio, videos, música y todos los Derechos de Propiedad Intelectual relacionados con ellos— son de propiedad exclusiva de la",
    highlight: "COMPAÑÍA DE INNOVACIÓN TECNOLÓGICA IDRIX S.A.",
    suffix:
      ", salvo que se indique lo contrario explícitamente en este documento.",
    note: null,
  },
];

export function IntelectualSection() {
  return (
    <section
      className="w-full py-20 px-6 md:px-16"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Scale
              size={16}
              style={{ color: "var(--ai-icon-color)" }}
              strokeWidth={2}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: "var(--ai-icon-color)" }}
            >
              Artículos 5 — 7
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Propiedad{" "}
            <span className="light-text-gradient inline-block">
              Intelectual
            </span>
            <br />& Industrial
          </h2>
        </div>

        {/* ── Timeline articles ── */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div
            className="absolute left-[27px] top-4 bottom-4 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          {articles.map(
            (
              { number, icon: Icon, title, content, note, highlight, suffix },
              i,
            ) => (
              <div key={number} className="flex gap-6 group">
                {/* Left: icon */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-14">
                  <div
                    className="relative z-10 w-[54px] h-[54px] rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--ai-icon-color)";
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--ai-icon-bg)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--card)";
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: "var(--ai-icon-color)" }}
                    />
                  </div>
                </div>

                {/* Right: content card */}
                <div
                  className={`flex-1 rounded-2xl p-7 border transition-all duration-300 ${i < articles.length - 1 ? "mb-4" : "mb-0"}`}
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--ai-icon-color)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 32px rgba(46,170,244,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 2px 20px rgba(0,0,0,0.04)";
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3
                      className="text-base font-bold leading-snug"
                      style={{ color: "var(--foreground)" }}
                    >
                      {title}
                    </h3>
                    <span
                      className="shrink-0 text-3xl font-black tabular-nums leading-none select-none"
                      style={{ color: "var(--ai-icon-color)", opacity: 0.15 }}
                    >
                      {number}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {content}
                    {highlight && (
                      <>
                        {" "}
                        <span
                          className="font-semibold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {highlight}
                        </span>
                        {suffix}
                      </>
                    )}
                  </p>

                  {note && (
                    <div
                      className="mt-5 pl-4 border-l-2 rounded-r-lg py-2 pr-3"
                      style={{
                        borderColor: "var(--ai-icon-color)",
                        background: "var(--ai-icon-bg)",
                      }}
                    >
                      <p
                        className="text-xs leading-relaxed italic"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>

        {/* ── Bottom disclaimer banner ── */}
        <div
          className="mt-12 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 border"
          style={{
            background: "var(--ai-icon-bg)",
            borderColor: "var(--hero-clientes-arc)",
          }}
        >
          <Scale
            size={28}
            strokeWidth={1.5}
            className="shrink-0"
            style={{ color: "var(--ai-icon-color)" }}
          />
          <p
            className="text-xs leading-relaxed text-center sm:text-left"
            style={{ color: "var(--muted-foreground)" }}
          >
            Todos los derechos reservados ©{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              COMPAÑÍA DE INNOVACIÓN TECNOLÓGICA IDRIX S.A.
            </span>{" "}
            Cualquier reproducción total o parcial del contenido de este sitio
            sin autorización escrita está expresamente prohibida bajo la
            legislación ecuatoriana e internacional de propiedad intelectual.
          </p>
        </div>
      </div>
    </section>
  );
}
