"use client";

import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";
import { HeroInformatica } from "@/components/hero-services/hero-informatica";
import { ScrollReveal } from "@/components/page-wrapper";
import {
  Search,
  Wifi,
  Bug,
  ShieldCheck,
  MessageSquareMore,
  UserKey,
  MonitorSmartphone,
  History,
  CloudSync,
  GraduationCap,
  Unlink,
  Lock,
  BarChart2,
  Globe,
  Timer,
  LayoutGrid,
  RefreshCw,
  TrendingUp,
  Smartphone,
  Clock3,
} from "lucide-react";

export default function SeguridadInformatica() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroInformatica />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <CapacitacionInformatica />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <Autenticacion />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <OWASP />
      </ScrollReveal>
      <ScrollReveal direction="fadeIn">
        <Testing />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}

const servicios = [
  {
    icon: Search,
    titulo: "Informática forense",
    label: "Investigación profunda de incidentes y recolección de evidencia digital.",
  },
  {
    icon: Wifi,
    titulo: "Seguridad inalámbrica",
    label: "Protección avanzada de redes Wi-Fi empresariales y puntos de acceso.",
  },
  {
    icon: Bug,
    titulo: "Análisis de malware",
    label: "Detección, aislamiento y neutralización de amenazas sofisticadas.",
  },
  {
    icon: ShieldCheck,
    titulo: "Pentesting",
    label: "Pruebas de penetración controladas para identificar vulnerabilidades.",
  },
];

export function CapacitacionInformatica() {
  return (
    <section
      className="w-full py-20 px-4 transition-colors duration-500"
      style={{ background: "var(--hero-web-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Seguridad a Medida
          </span>
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold text-foreground mb-2">
          Capacitación y{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            prevención
          </span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Expertos en las áreas críticas de la ciberseguridad moderna.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl p-6 flex flex-col gap-3 bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)]"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[hsl(207,76%,45%)]/10 rounded-lg">
                <item.icon size={20} strokeWidth={1.5} className="text-[hsl(207,76%,45%)]" />
              </div>
              <h3 className="text-base font-bold text-foreground">{item.titulo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const autenticaciones = [
  {
    icon: MessageSquareMore,
    titulo: "SMS de verificación",
    label: "Reciba un código único directo a su dispositivo móvil",
  },
  {
    icon: UserKey,
    titulo: "Aplicaciones de Autenticación",
    label: "Google Authenticator, Microsoft Auth y más.",
  },
  {
    icon: MonitorSmartphone,
    titulo: "Dispositivos de Hardware",
    label: "Llaves de seguridad física (U2F/FIDO).",
  },
];

const auditorias = [
  {
    icon: History,
    titulo: "Actualización de Software",
    label: "Gestión de parches y versiones críticas.",
  },
  {
    icon: CloudSync,
    titulo: "Configuración de Red",
    label: "Optimización de firewalls y segmentación.",
  },
  {
    icon: GraduationCap,
    titulo: "Capacitación de Personal",
    label: "Concientización sobre ingeniería social.",
  },
];

export function Autenticacion() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-b-full" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Medidas Básicas
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className=" flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-5">
              Doble Factor de{" "}
              <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
                Autenticación (2FA)
              </span>{" "}
            </h2>
            <p className="text-sm mr-15 mb-5 leading-relaxed text-muted-foreground">
              Añada una capa extra de seguridad a susu cuentas corporativas. El 2FA asegura que solo
              el personal autorizado pueda acceder a la información, incluso si su contraseña ha
              sido comprometida.
            </p>
            <div className="flex flex-col gap-3 w-full pr-10">
              {autenticaciones.map((autenticacion) => (
                <div
                  key={autenticacion.titulo}
                  className="flex items-start bg-[hsl(207,76%,60%)]/10 gap-2 rounded-2xl border border-border px-5 py-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:hover:border-[hsl(207,76%,45%)]"
                >
                  <div className="flex-shrink-0 text-[hsl(207,76%,45%)] dark:text-[hsl(207,76%,60%)]">
                    {" "}
                    <autenticacion.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {autenticacion.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {autenticacion.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <button className="border-2 text-sm font-bold border-solid text-muted-foreground p-2 rounded-md">
                GOOGLE
              </button>
              <button className="border-2 text-sm font-bold border-solid text-muted-foreground p-2 rounded-md">
                FACEBOOK
              </button>
              <button className="border-2 text-sm font-bold border-solid text-muted-foreground p-2 rounded-md">
                DROPBOX
              </button>
            </div>
          </div>
          <div className="rounded-2xl p-8 flex flex-col gap-6 mt-4 bg-[hsl(207,76%,60%)]/10 dark:bg-[hsl(215,30%,12%)] border border-[hsl(210,25%,88%)] dark:border-[hsl(215,30%,18%)]">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-[hsl(207,76%,45%)] dark:text-white">
                Auditorías de seguridad
              </h2>
              <p className="text-sm leading-relaxed text-[hsl(215,15%,40%)] dark:text-muted-foreground">
                Evaluación integral de la infraestructura tecnológica para garantizar el
                cumplimiento de los más altos estándares de seguridad.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {auditorias.map(({ icon: Icon, titulo, label }) => (
                <li key={titulo} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[hsl(207,76%,45%)]">
                    <Icon size={20} strokeWidth={1.8} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[hsl(220,30%,18%)] dark:text-white mb-0.5">
                      {titulo}
                    </p>
                    <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground">
                      {label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const owasp = [
  { icon: ShieldCheck, text: "Detección de vulnerabilidades críticas" },
  { icon: Lock, text: "Análisis de certificados SSL" },
  { icon: Unlink, text: "Pruebas de inyección SQL" },
  { icon: BarChart2, text: "Reportes detallados de mitigación" },
];

export function OWASP() {
  return (
    <section className="bg-[var(--hero-bg)] py-20 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Medidas Avanzadas
          </span>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl overflow-hidden p-10 bg-[hsl(220,55%,12%)] dark:bg-[hsl(220,50%,8%)]">
          {/* Globe decoration */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10">
            <Globe size={220} strokeWidth={0.8} className="text-white" />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            {/* Tag */}
            <span className="self-start text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[hsl(215,40%,30%)] text-[hsl(210,60%,70%)]">
              Herramienta Profesional
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Auditoría web con OWASP ZAP
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-[hsl(210,30%,65%)]">
              Implementamos OWASP Zed Attack Proxy (ZAP) para detectar vulnerabilidades en
              aplicaciones web durante el desarrollo y pruebas. Es la herramienta de seguridad
              gratuita más popular del mundo, mantenida por cientos de voluntarios internacionales.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {owasp.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} strokeWidth={1.8} className="shrink-0 text-[hsl(207,76%,55%)]" />
                  <span className="text-sm text-[hsl(210,25%,75%)]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    icon: Clock3,
    title: "Automated Testing",
    tags: ["Selenium", "Test Studio", "Testim"],
  },
  {
    icon: Timer,
    title: "Load Testing",
    tags: ["LoadRunner", "JMeter", "BlazeMeter"],
    featured: true,
  },
  { icon: LayoutGrid, title: "Management", tags: ["Xray", "TestRail"] },
  { icon: RefreshCw, title: "Defect Tracking", tags: ["Jira", "Mantis"] },
  {
    icon: TrendingUp,
    title: "API Testing",
    tags: ["SoapUI", "Postman"],
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-browser",
    tags: ["LambdaTest", "Espresso"],
  },
];

export function Testing() {
  return (
    <section className="w-full py-16 px-4 bg-[var(--hero-g)] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Medidas Avanzadas
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-2 text-[hsl(220,30%,15%)] dark:text-white">
          Herramientas de{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Testing
          </span>
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground mb-10">
          Nuestro stack tecnológico para asegurar la calidad de su software.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title, tags, featured }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 flex flex-col gap-4
              ${
                featured
                  ? "bg-[hsl(220,55%,12%)] dark:border-[hsl(215,30%,18%)]"
                  : "bg-white dark:bg-[hsl(215,30%,10%)] border border-[hsl(210,25%,90%)] dark:border-[hsl(215,30%,18%)]"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                ${
                  featured
                    ? "bg-white/10 text-white"
                    : "bg-[hsl(210,40%,94%)] dark:bg-[hsl(215,40%,16%)] text-[hsl(207,76%,45%)]"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3
                className={`text-base font-bold ${featured ? "text-white" : "text-[hsl(220,30%,15%)] dark:text-white"}`}
              >
                {title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full border font-medium bg-[hsl(207,76%,60%)]/10
                    ${
                      featured
                        ? "border-[hsl(215,40%,28%)] text-[hsl(210,40%,80%)]"
                        : "border-[hsl(210,25%,88%)] dark:border-[hsl(215,30%,22%)] text-[hsl(215,15%,35%)] dark:text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
