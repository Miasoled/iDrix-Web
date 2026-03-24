import { Navbar } from "@/components/Navbar";
import { HeroPeritaje } from "@/components/hero-services/hero-peritaje";
import {
  Scale,
  FileText,
  ShieldCheck,
  Network,
  Lightbulb,
  SquareKanban,
  RefreshCcwDot,
  Video,
} from "lucide-react";
export default function PeritajeInformatico() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroPeritaje />
      <GarantiaPeritaje />
      <ServiciosPeritaje />
      <ProcesoPeritaje />
      <Judicial />
    </div>
  );
}

const acreditaciones = [
  {
    icon: Scale,
    label: "Consejo de la Judicatura",
    titulo: "Reg. 2515658",
  },
  {
    icon: FileText,
    label: "ISO 27037",
    titulo: "Evidencia Digital",
  },
  {
    icon: ShieldCheck,
    label: "ISO 27001",
    titulo: "Seguridad Info.",
  },
  {
    icon: Network,
    label: "RFC 3227",
    titulo: "Protocolo Forense",
  },
];

export function GarantiaPeritaje() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-white dark:bg-[hsl(215,50%,8%)]">
      <div className="max-w-6xl mx-auto">
        {/* Título centrado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Garantía y Acreditación Oficial
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Nuestros procesos cumplen con los más altos estándares
            internacionales para garantizar la integridad de la cadena de
            custodia.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {acreditaciones.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl p-6 flex flex-col gap-4 bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)]"
            >
              {/* Icono */}
              <div className="w-10 h-10 flex items-center justify-center">
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-[hsl(207,76%,45%)]"
                />
              </div>

              {/* Label */}
              <span className="text-xs text-muted-foreground">
                {item.label}
              </span>

              {/* Título */}
              <h3 className="text-lg font-bold text-foreground -mt-2">
                {item.titulo}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const servicio = [
  {
    icon: Lightbulb,
    titulo: "Asesoría en peritaje",
    label:
      "Consultoría experta para estrategia de defensa o acusación basada en evidencia digítal.",
  },
  {
    icon: SquareKanban,
    titulo: "Auditoría",
    label:
      "Examen crítico de sistemas informáticos para detectar vulnerabilidades o fugas de información.",
  },
  {
    icon: RefreshCcwDot,
    titulo: "Recuperación de datos",
    label:
      "Restauración de información eliminada o dañada en discos duros, móviles y servidores.",
  },
  {
    icon: Video,
    titulo: "Extracción de videos",
    label:
      "Análisis y extracción forense de sistemas de grabación MDVR y CCTV con validez judicial.",
  },
];

export function ServiciosPeritaje() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-14 md:pb-20
      lg:pb-20"
      style={{ background: "var(--hero-web-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="p-6 ">
          <h2 className="text-3xl font-bold text-foreground mb-3 ">
            Nuestros Servicios{" "}
            <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
              Especializado
            </span>
          </h2>

          <p className="text-muted-foreground  max-w-xl">
            Soluciones integrales en tecnología forense para el sector legal y
            corporativo
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-4
        "
        >
          {servicio.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl p-6 flex flex-col gap-4 bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)]"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[hsl(207,76%,45%)]/10 rounded-sm">
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-[hsl(207,76%,45%)]"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground -mt-2">
                {item.titulo}
              </h3>
              <span className="text-accent text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const proceso = [
  {
    title: "Technical Aspects",
    desc: "Preparación del entorno y herramientas.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  },
  {
    title: "Evidence Extraction",
    desc: "Clonación bit a bit y preservación.",
    icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  },
  {
    title: "Analysis",
    desc: "Búsqueda exhaustiva de patrones.",
    icon: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
  },
  {
    title: "Reporting",
    desc: "Redacción del informe pericial formal.",
    icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2zM8 10h8M8 14h5",
  },
  {
    title: "Legal Testimony",
    desc: "Sustentación oral en audiencia.",
    icon: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8zM12 11v4M12 8v.01",
  },
];

export function ProcesoPeritaje() {
  return (
    <section className="bg-[var(--hero-bg)] py-20 px-4 transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[hsl(220,30%,18%)] dark:text-white">
          Proceso de{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Investigación
          </span>{" "}
          Forense
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground max-w-md mx-auto">
          Una metodología rigurosa para asegurar la admisibilidad de la prueba
          en los tribunales.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4">
        {proceso.map(({ title, desc, icon }, i) => (
          <div
            key={title}
            className="relative flex flex-col items-center text-center gap-4"
          >
            {/* Connector line (between icons, desktop only) */}
            {i < proceso.length - 1 && (
              <span className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-[hsl(210,30%,80%)] dark:bg-[hsl(215,30%,25%)]" />
            )}
            {/* Icon circle */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-[hsl(207,76%,45%)] shadow-[0_4px_20px_rgba(28,126,201,0.3)] dark:shadow-[0_0_24px_rgba(28,126,201,0.5)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d={icon} />
              </svg>
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
        ))}
      </div>
    </section>
  );
}

const casos = [
  {
    title: "Conflictos Laborales",
    desc: "Prueba de robo de información, competencia desleal o acoso a través de medios digitales.",
  },
  {
    title: "Delitos Económicos",
    desc: "Rastreo de transacciones fraudulentas, falsificación de documentos y peritajes contables-digitales.",
  },
  {
    title: "Derecho de Familia",
    desc: "Certificación de chats, correos electrónicos y publicaciones en redes sociales con validez notarial.",
  },
];

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(207,76%,45%)] bg-[hsl(207,76%,45%)]/20 rounded-full p-0.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function Judicial() {
  return (
    <section className="bg-background flex flex-col justify-center items-center py-16  transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[hsl(220,30%,18%)] dark:text-white py-4">
        Casos de Uso{" "}
        <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
          Legales y Evidencia
        </span>{" "}
        Judicial
      </h2>
      <div className="max-w-lg">
        <ul className="flex flex-col divide-y divide-[hsl(210,25%,90%)] dark:divide-[hsl(215,30%,18%)]">
          {casos.map(({ title, desc }) => (
            <li key={title} className="flex gap-3 py-5">
              <Check />
              <div>
                <p className="text-sm font-bold text-[hsl(220,40%,15%)] dark:text-white mb-1">
                  {title}
                </p>
                <p className="text-sm leading-relaxed text-[hsl(215,15%,45%)] dark:text-muted-foreground">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
