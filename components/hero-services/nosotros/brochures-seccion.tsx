"use client";

import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";

const brochures = [
  {
    id: 1,
    lang: "ES",
    title: "iDrix Presentación",
    subtitle: "en Español",
    flag: "🇪🇸",
  },
  {
    id: 2,
    lang: "EN",
    title: "iDrix Presentation",
    subtitle: "in English",
    flag: "🇺🇸",
  },
];

export function BrochuresSection() {
  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-16 bg-white dark:bg-[hsl(215,50%,8%)] transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-1 h-5 rounded-full"
                style={{ background: "var(--ai-icon-color)" }}
              />
              <span
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--ai-icon-color)" }}
              >
                Recursos Corporativos
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Nuestros{" "}
              <span className="light-text-gradient mb-2 pb-2 inline-block">
                Brochures
              </span>
            </h2>
            <p
              className="text-sm mt-2 max-w-md"
              style={{ color: "var(--muted-foreground)" }}
            >
              Descarga nuestra presentación corporativa con productos y
              servicios vanguardistas disponible en español e inglés.
            </p>

            {/* CTA link */}
            <Link
              href="/brochures"
              className="inline-flex items-center gap-1 mt-5 text-sm font-medium transition-all duration-200 hover:gap-2"
              style={{ color: "var(--ai-icon-color)" }}
            >
              Ver brochures
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* ── Preview cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {brochures.map(({ id, lang, title, subtitle, flag }) => (
            <Link
              key={id}
              href="/brochures"
              className="group flex items-center gap-4 rounded-2xl p-5 border transition-all duration-300"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--ai-icon-color)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 28px rgba(46,170,244,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(0,0,0,0.04)";
              }}
            >
              {/* Icon */}
              <div
                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "var(--ai-icon-bg)" }}
              >
                <FileText
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: "var(--ai-icon-color)" }}
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-bold leading-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  {title}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {subtitle}
                </p>
              </div>

              {/* Flag + lang */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-lg">{flag}</span>
                <span
                  className="text-[11px] font-bold px-2 py-0.5 rounded-md"
                  style={{
                    background: "var(--ai-icon-bg)",
                    color: "var(--ai-icon-color)",
                  }}
                >
                  {lang}
                </span>
              </div>

              {/* Arrow */}
              <Download
                size={15}
                strokeWidth={2}
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "var(--ai-icon-color)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
