"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ServerCog,
  Wrench,
  CodeXml,
  Globe,
  AppWindow,
  Cloud,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";

const timelineData = [
  {
    id: 1,
    title: "Gestión In Situ",
    description:
      "Servicios de gestión y manejo in situ de sistemas informáticos y/o instalaciones de procesamiento de datos de los clientes, y servicios de apoyo conexos.",
    icon: ServerCog,
  },
  {
    id: 2,
    title: "Adaptación de Software",
    description:
      "Adaptación de programas informáticos a las necesidades de los clientes, es decir, modificación y configuración de una aplicación existente para que pueda funcionar adecuadamente con los sistemas de información de que dispone el cliente.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Diseño y Desarrollo",
    description:
      "Actividades de diseño de la estructura y el contenido: programas de sistemas operativos, aplicaciones informáticas, bases de datos y páginas web, incluyendo actualizaciones y parches de corrección.",
    icon: CodeXml,
  },
  {
    id: 4,
    title: "Portales de Internet",
    description:
      "Operación de sitios web que funcionan como portales de internet, incluyendo sitios de medios de difusión con contenidos actualizados periódicamente y motores de búsqueda con amplias bases de datos de direcciones.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Servicios de Aplicaciones",
    description:
      "Desarrollo, implementación y soporte de servicios de aplicaciones empresariales adaptados a los requerimientos específicos de cada organización.",
    icon: AppWindow,
  },
  {
    id: 6,
    title: "Infraestructura y Hospedaje",
    description:
      "Suministro de infraestructura para servicios de hospedaje, procesamiento de datos y actividades conexas: hospedaje web, aplicaciones y transmisión de secuencias de vídeo por internet.",
    icon: Cloud,
  },
];

export function HistoriaPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen pb-28 overflow-hidden relative py-8"
        style={{ background: "var(--hero-bg)" }}
      >
        {/* Ambient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--hero-soft-blue)", opacity: 0.5 }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
            style={{ paddingTop: "120px", paddingBottom: "64px" }}
          >
            {/* Badge "Tecnología de Vanguardia" */}
            <div className="inline-flex items-center rounded-full border border-[hsl(200,25%,85%)] bg-[rgba(255,255,255,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md mb-6 dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4)]">
              <span className="flex items-center gap-1 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white">
                Contáctanos
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[hsl(207,76%,45%)] dark:text-white"
                >
                  <path d="M12 20v2" />
                  <path d="M12 2v2" />
                  <path d="M17 20v2" />
                  <path d="M17 2v2" />
                  <path d="M2 12h2" />
                  <path d="M2 17h2" />
                  <path d="M2 7h2" />
                  <path d="M20 12h2" />
                  <path d="M20 17h2" />
                  <path d="M20 7h2" />
                  <path d="M7 20v2" />
                  <path d="M7 2v2" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="8" y="8" width="8" height="8" rx="1" />
                </svg>
              </span>
              <span className="px-2 text-sm text-[hsl(200,15%,40%)] dark:text-white/90">
                Tecnología de Vanguardia
              </span>
            </div>

            <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
              Nuestros Servicios{" "}
              <span className="light-text-gradient mb-2 pb-2 inline-block dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent">
                e Historia
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              Descubre la evolución de nuestras soluciones tecnológicas y los
              servicios especializados que ofrecemos para impulsar tu negocio.
            </p>
          </motion.div>

          {/* ── Timeline ── */}
          <div className="flex flex-col gap-6">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>

      <FooterIdrix />
    </>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  const cardMargin = isEven ? { marginRight: "16px" } : { marginLeft: "16px" };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="flex items-start gap-4"
      style={isEven ? {} : { flexDirection: "row-reverse" }}
    >
      {/* ── Node icon ── */}
      <div className="shrink-0 pt-1" style={cardMargin}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center border-2"
          style={{
            background: "var(--card)",
            borderColor: "var(--hero-clientes-arc)",
            boxShadow:
              "0 0 0 3px var(--hero-bg), 0 0 14px rgba(46,170,244,0.15)",
          }}
        >
          <Icon
            size={16}
            strokeWidth={1.8}
            style={{ color: "var(--ai-icon-color)" }}
          />
        </div>
      </div>

      {/* ── Card ── */}
      <div
        className="group relative flex-1 rounded-2xl p-6 border transition-all duration-300"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--ai-icon-color)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 8px 36px rgba(46,170,244,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 2px 16px rgba(0,0,0,0.04)";
        }}
      >
        {/* Title + number */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="text-base md:text-lg font-bold leading-snug"
            style={{ color: "var(--foreground)" }}
          >
            {item.title}
          </h3>
          <span
            className="shrink-0 text-2xl font-black tabular-nums leading-none select-none"
            style={{ color: "var(--ai-icon-color)", opacity: 0.13 }}
          >
            {String(item.id).padStart(2, "0")}
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-6 h-[2px] rounded-full mb-3"
          style={{ background: "var(--ai-icon-color)", opacity: 0.35 }}
        />

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
