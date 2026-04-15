"use client";

import { Navbar } from "@/components/Navbar";

import {
  TerminalSquare,
  FileText,
  FileX,
  FilePlus,
  Truck,
  FileCheck,
  Scale,
  PenLine,
  FileKey,
  User,
  CheckCircle2,
  Settings,
  Leaf,
  Landmark,
  Zap,
  ShieldHalf,
  Network,
  GraduationCap,
  Headset,
  Gauge,
} from "lucide-react";
import Image from "next/image";
import { HeroFacturacion } from "@/components/hero-services/hero-facturacion";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function FacturacionElectronica() {
  return (
    <main className="min-h-screen" style={{ background: "var(--hero-soft-blue)" }}>
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroFacturacion />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <QueEsFacturacion />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <DocumentosFacturacion />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <FirmaFacturacion />
      </ScrollReveal>
      <ScrollReveal direction="fadeIn">
        <VentajasFactura />
      </ScrollReveal>
      <ScrollReveal direction="fadeUp">
        <Soporte />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}

const documentos = ["Facturas de Venta", "Notas de Crédito", "Retenciones", "Guías de Remisión"];

export function QueEsFacturacion() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-white dark:bg-[hsl(215,50%,8%)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda — espacio para imagen */}
        <div className="relative w-full">
          {/* Placeholder imagen */}
          <div className="relative w-full overflow-visible">
            <Image
              src="/img/Facturacion.png"
              alt="Facturación electrónica"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Badge flotante +500 Proyectos */}
          <div className="absolute -bottom-12 -right-5 bg-white/80 dark:bg-[hsl(215,50%,12%)] border border-[hsl(210,20%,90%)] dark:border-white/10 rounded-2xl px-4 py-3 shadow-lg flex items-start gap-3 max-w-[200px]">
            <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-[hsl(207,76%,45%)]/10 flex items-center justify-center">
              <TerminalSquare size={18} strokeWidth={1.5} className="text-[hsl(207,76%,45%)]" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">+500 Proyectos</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                Desarrollo ágil y optimización de código continuo.
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha — contenido */}
        <div className="flex flex-col gap-5">
          {/* Línea decorativa */}
          <div className="w-8 h-[3px] bg-[hsl(207,76%,45%)] rounded-full" />

          {/* Título */}
          <h2 className="text-4xl font-bold text-foreground leading-tight">
            ¿Qué es facturación electrónica?
          </h2>

          {/* Párrafo 1 */}
          <p className="text-muted-foreground leading-relaxed text-base">
            Es una modalidad de facturación que tiene la misma{" "}
            <strong className="text-foreground">validez legal</strong> que los comprobantes físicos
            (en papel). Se genera de forma digital y debe incluir una{" "}
            <strong className="text-foreground">firma electrónica</strong> para garantizar su
            autenticidad.
          </p>

          {/* Párrafo 2 */}
          <p className="text-muted-foreground leading-relaxed text-base">
            Este sistema cubre todos los documentos autorizados por el SRI, incluyendo:
          </p>

          {/* Grid de documentos */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {documentos.map((doc) => (
              <div key={doc} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(207,76%,45%)]" />
                <span className="text-sm text-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const facturacion = [
  { icon: FileText, titulo: "Facturas" },
  { icon: FileX, titulo: "Notas de Crédito" },
  { icon: FilePlus, titulo: "Notas de Débito" },
  { icon: Truck, titulo: "Guías de Remisión" },
  { icon: FileCheck, titulo: "Retenciones" },
];

export function DocumentosFacturacion() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-[hsl(210,40%,96%)] dark:bg-[hsl(200,55%,7%)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Título centrado */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Facturación electrónica en Ecuador
          </h2>
          <p className="text-muted-foreground text-sm">
            Emisión autorizada por el SRI para todo tipo de documentos tributarios.
          </p>
        </div>

        {/* Cards de documentos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {facturacion.map((factura) => (
            <div
              key={factura.titulo}
              className="rounded-2xl p-6 flex flex-col items-center gap-3 bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)]"
            >
              <factura.icon size={28} strokeWidth={1.5} className="text-[hsl(207,76%,45%)]" />
              <span className="text-sm font-semibold text-foreground text-center">
                {factura.titulo}
              </span>
            </div>
          ))}
        </div>

        {/* Banner SRI */}
        <div className="rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[hsl(207,76%,45%)]/10 border border-[hsl(210,20%,90%)] shadow-sm dark:bg-white/5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <Scale size={20} strokeWidth={1.5} className="text-[hsl(207,76%,45%)] flex-shrink-0" />
            <p className="text-sm text-foreground">
              Cumplimiento total con la normativa vigente del{" "}
              <span className="text-[hsl(207,76%,45%)] font-medium">SRI</span>
            </p>
          </div>
          <button className="flex-shrink-0 rounded-xl bg-[hsl(207,76%,45%)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[hsl(207,76%,40%)] shadow-[0_4px_12px_rgba(28,126,201,0.35)]">
            Ver Detalles SRI
          </button>
        </div>
      </div>
    </section>
  );
}

const checks = [
  "Formatos compatibles: .p12 y .pfx",
  "Gestión con entidades certificadoras oficiales",
  "Instalación y configuración asistida",
];

const requisitos = [
  "Cédula de identidad (PDF a color)",
  "Papeleta de votación actualizada",
  "Comprobante de servicio básico",
];

export function FirmaFacturacion() {
  return (
    <section className="py-15 transition-colors duration-500 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 rounded-2xl p-20 bg-[hsl(217,60%,12%)] dark:bg-[hsl(217,60%,8%)]">
        {/* Sección superior — sin card contenedora */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-[hsl(207,76%,55%)]">
              Firma Electrónica Integrada
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              La firma electrónica es un requisito indispensable para la facturación digital en
              Ecuador. En iDrix facilitamos este proceso gestionando su firma a través de
              proveedores autorizados por <strong className="text-white">ARCOTEL</strong>.
            </p>
            <div className="flex flex-col gap-3">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.5}
                    className="text-[hsl(207,76%,55%)] flex-shrink-0"
                  />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — card firma digital */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 flex flex-col items-center gap-3 text-center">
            <PenLine size={52} strokeWidth={1} className="text-[hsl(207,76%,55%)]" />
            <h3 className="text-lg font-bold text-white">Tu firma digital</h3>
            <p className="text-sm text-white/60">Validada y lista para facturar en minutos.</p>
          </div>
        </div>

        {/* Cards inferiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-3xl p-7 flex flex-col gap-4 overflow-hidden border border-white/10 bg-white/5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/10">
              <FileKey size={22} strokeWidth={1.5} className="text-[hsl(207,76%,55%)]" />
            </div>
            <h3 className="text-lg font-bold text-white">Formatos Compatibles</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Gestionamos tu firma a través de proveedores autorizados en los formatos más seguros
              de la industria.
            </p>
            <div className="flex gap-3 mt-auto">
              {[".p12", ".pfx"].map((fac) => (
                <span
                  key={fac}
                  className="px-3 py-1 rounded-lg bg-white/10 text-white/70 text-xs font-mono"
                >
                  {fac}
                </span>
              ))}
            </div>
            <span className="absolute bottom-4 right-6 text-6xl font-black text-white/5 select-none">
              01
            </span>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl p-7 flex flex-col gap-4 overflow-hidden border border-white/10 bg-white/5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/10">
              <User size={22} strokeWidth={1.5} className="text-[hsl(207,76%,55%)]" />
            </div>
            <h3 className="text-lg font-bold text-white">Persona Natural</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Requisitos simplificados para tu comodidad:
            </p>
            <div className="flex flex-col gap-2">
              {requisitos.map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(207,76%,55%)] flex-shrink-0" />
                  <span className="text-sm text-white/70">{r}</span>
                </div>
              ))}
            </div>
            <span className="absolute bottom-4 right-6 text-6xl font-black text-white/5 select-none">
              02
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VentajasFactura() {
  const ventajas = [
    {
      icon: Settings,
      titulo: "Automatización",
      label: "Optimización de procesos internos para reducir tareas repetitivas.",
    },
    {
      icon: Leaf,
      titulo: "Reducción de papel",
      label: "Digitalización total para un entorno de trabajo más sostennible.",
    },
    {
      icon: Landmark,
      titulo: "Control tributario",
      label: "Gestión precisa de sus obligaciones fiscales en tiempo real.",
    },
    {
      icon: Zap,
      titulo: "Rapidez",
      label: "Procesamiento instantáneo de grandes volúmenes de datos.",
    },
    {
      icon: ShieldHalf,
      titulo: "Seguridad",
      label: "Encriptación de grado bancario para proteger su formación.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-[var(--hero-bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[3px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-semibold tracking-widest uppercasen text-[hsl(207,76%,45%)]">
            BENEFICIO iDrix
          </span>
        </div>

        {/* Titulo */}
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Ventajas de <span className="light-text-gradient">nuestra</span> solución
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ventajas.map((venta, i) => {
            const Icon = venta.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-border/50"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--ai-icon-bg)] text-[var(--ai-icon-color)] mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground ">{venta.titulo}</h3>
                <p className="text-sm text-muted-foreground mb-4">{venta.label}</p>
              </div>
            );
          })}

          <div className="rounded-2xl p-8 bg-[hsl(207,76%,45%)]/90 dark:bg-[hsl(207,76%,45%)]/20 text-primary-foreground flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-3 dark:text-primary">¿Listo para innovar?</h3>
            <p className="text-sm mb-6 opacity-90 dark:text-primary">
              Hablemos sobrecómo iDrix puede transformar su flujo de trabajo hoy mismo.
            </p>
            <div className="flex flex-row gap-1 items-center">
              <span className="dark:text-primary rounded-md font-medium transition">
                Contáctanos ahora{" "}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-1 dark:text-primary"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Soporte() {
  const soporte = [
    {
      title: "Implementación",
      desc: "Despliegue rápido y eficiente en su infraestructura existente",
      icon: Network,
    },
    {
      title: "Capacitación",
      desc: "Formamos a su eqauipo para maximizar el uso de las herramientas.",
      icon: GraduationCap,
    },
    {
      title: "Soporte 24/7",
      desc: "Asistencia técnica disponible en cualquier momento del día.",
      icon: Headset,
    },
    {
      title: "98% Disponibilidad",
      desc: "Garantía de uptime para que su negocio nunca se detenga.",
      icon: Gauge,
    },
  ];
  return (
    <section className="bg-white dark:bg-[hsl(215,50%,8%)] py-20 px-4 transition-colors duration-500">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[hsl(220,30%,18%)] dark:text-white">
          Soporte y{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Asesoría
          </span>{" "}
          Especializada
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground max-w-md mx-auto">
          Acompañanos cada fase de su crecimiento tecnológico.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
        {soporte.map(({ title, desc, icon }, i) => {
          const Icon = icon;

          return (
            <div key={title} className="relative flex flex-col items-center text-center gap-4">
              {/* Connector line (between icons, desktop only) */}
              {i < soporte.length - 1 && (
                <span className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-[hsl(210,30%,80%)] dark:bg-[hsl(215,30%,25%)]" />
              )}
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-[hsl(207,76%,77%)]/50 shadow-[0_4px_20px_rgba(28,126,201,0.3)] dark:shadow-[0_0_24px_rgba(28,126,201,0.5)]">
                <Icon
                  className="w-6 h-6 text-[hsl(207,76%,45%)] dark:text-white"
                  strokeWidth={1.8}
                />
              </div>
              {/* Text */}
              <div>
                <p className="text-sm font-bold text-[hsl(220,30%,18%)] dark:text-white mb-1">
                  {title}
                </p>
                <p className="text-xs leading-relaxed text-[hsl(215,15%,45%)] dark:text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
