import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { SVGProps } from "react";
import {
  Server,
  Layers,
  Box,
  Share2,
  Lock,
  Combine,
  CheckCircle2,
} from "lucide-react";
export function CloudHero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-28 pb-0 overflow-hidden">
      {/* TITLE */}
      <div className="text-center max-w-4xl px-6">
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Computación en la Nube
        </h1>
        <h2 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight light-text-gradient transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Con Idrix
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          La computación en la nube permite acceder y gestionar datos desde
          cualquier lugar y en cualquier momento a través de internet.
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="w-full flex justify-center pr-18">
        <CloudImg />
      </div>
    </section>
  );
}

function CloudImg() {
  return (
    <section className="flex flex-row items-center justify-center">
      <div className="flex items-center gap-0 max-w-5xl w-full">
        {/* ── Círculo con sombra ── */}
        <div className="relative flex-shrink-0">
          {/* Sombra inferior */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1
                w-[650px] h-[20px] rounded-full pointer-events-none"
            style={{
              background: "var(--cloud-glow)",
              filter: "blur(5px)",
              zIndex: 0,
            }}
          />

          {/* Círculo (detrás de la imagen) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[360px] h-[360px] rounded-full"
            style={{
              background: "var(--hero-soft-blue)",
              boxShadow:
                "0 0 60px var(--arch-3), 0 4px 16px var(--arch-2), inset 0 1px 0 rgba(255,255,255,0.8)",
              zIndex: 1,
            }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "var(--hero-core-glow)", opacity: 0.5 }}
            />
          </div>

          {/* Imagen (encima del círculo) */}
          <div className="relative ml-22 mb-3 w-[450px] h-[450px] z-20">
            <Image
              src="/img/cloud.png"
              alt="Idrix cloud illustration"
              fill
              className="object-contain pointer-events-none dark:blue-scale"
            />
          </div>
        </div>

        {/* ── Panel derecho ── */}
        <div className="flex flex-col gap-6">
          {/* Tarjeta */}
          <div
            className="rounded-2xl px-6 py-5 w-55"
            style={{
              background: "var(--info-bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 12px var(--arch-1)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                style={{ color: "var(--ai-icon-color)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-4.58-6.96A4 4 0 003 15z"
                />
              </svg>
              <span
                className="text-sm font-semibold tracking-tight"
                style={{ color: "var(--foreground)" }}
              >
                idrix
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Lleva tu negocio a otro nivel con Idrix
            </p>
          </div>

          {/* Botón */}
          <button
            className="w-55 py-4 rounded-2xl text-sm font-medium tracking-wide
                       transition-all duration-200 active:scale-95 cursor-pointer
                       hover:brightness-110"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(205,90%,60%) 0%, hsl(215,85%,50%) 100%)",
              color: "var(--primary-foreground)",
              boxShadow: "0 4px 20px var(--arch-3), 0 1px 4px var(--arch-2)",
            }}
          >
            Comenzar proyecto
          </button>
        </div>
      </div>
    </section>
  );
}

export function CloudCards() {
  return (
    <section className="px-8 md:px-16 py-16 md:py-24 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-6xl">
        {/* Encabezado superior azul */}
        <div className="w-full mb-8 flex items-center gap-2">
          <div className="h-1 w-10 bg-[var(--ai-icon-color)] rounded-full"></div>
          <span className="text-[var(--ai-icon-color)] font-bold uppercase tracking-wider text-sm">
            Computación en la nube
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Tarjeta Principal (Izquierda) */}
          <div className="h-full">
            <Card className="h-full shadow-lg rounded-2xl bg-card p-6">
              <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-6 border border-border">
                <CloudIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold text-foreground">
                  Computación en la nube
                </span>
              </div>

              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground leading-tight">
                  Computación en la nube como servicio
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Aloja tu infraestructura en data centers de clase mundial como
                  Google Cloud, Amazon AWS y Microsoft Azure, garantizando
                  seguridad, disponibilidad y alto rendimiento para tus
                  aplicaciones.
                </p>
                <div className="relative w-90 h-70">
                  <Image
                    src="/img/Cloud2.png"
                    alt="Ilustración Cloud"
                    fill
                    className="object-contain dark:blue-scale"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna Derecha (Dos tarjetas) */}
          <div className="flex flex-col gap-6">
            {/* Tarjeta Flexibilidad */}
            <Card className="shadow-lg rounded-2xl bg-card p-6 flex-grow">
              <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-6 border border-border">
                <CloudIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold text-foreground">
                  Flexibilidad
                </span>
              </div>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  Adapta fácilmente los recursos de tu sistema según las
                  necesidades de tu empresa.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta Transformación */}
            <Card className="shadow-lg rounded-2xl bg-card p-6 flex-grow">
              <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-6 border border-border">
                <CloudIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold text-foreground uppercase">
                  transformación
                </span>
              </div>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  La transformación digital permite reducir costos operativos y
                  ofrecer experiencias más rápidas y simples a los clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  );
}

export function CloudModels() {
  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-16 bg-white dark:bg-[hsl(215,50%,8%)] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-10  text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Soluciones <span className="light-text-gradient">a su Medida</span>
          </h2>
          <p
            className="max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Adaptamos la tecnología a sus necesidades operativas, permitiéndole
            elegir el nivel de gestión y control que su empresa requiere.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "IaaS",
              subtitle: "Infraestructura como Servicio",
              desc: "Alquiler de servidores, redes y almacenamiento. Usted mantiene el control total del software.",
              icon: Server,
              features: [
                "Escalabilidad instantánea",
                "Control total",
                "Pago por uso",
              ],
            },
            {
              title: "PaaS",
              subtitle: "Plataforma como Servicio",
              desc: "Entornos para desarrollar y ejecutar aplicaciones sin preocuparse por los servidores físicos.",
              icon: Layers,
              features: [
                "Foco en desarrollo",
                "Despliegue ágil",
                "Menos administración",
              ],
            },
            {
              title: "SaaS",
              subtitle: "Software como Servicio",
              desc: "Aplicaciones listas para usar alojadas en la nube. Acceda a sus herramientas desde cualquier navegador.",
              icon: Box,
              features: [
                "Cero instalación",
                "Actualizaciones automáticas",
                "Acceso global",
              ],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl p-7 border transition-all duration-300"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 "
                style={{ background: "var(--ai-icon-bg)" }}
              >
                <item.icon
                  size={20}
                  strokeWidth={1.6}
                  style={{ color: "var(--ai-icon-color)" }}
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-extrabold mb-0.5"
                style={{ color: "var(--foreground)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--muted-foreground)" }}
              >
                {item.subtitle}
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--muted-foreground)" }}
              >
                {item.desc}
              </p>

              {/* Features */}
              <ul
                className="space-y-2.5 pt-5 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                {item.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-xs font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    <CheckCircle2
                      size={13}
                      strokeWidth={2.2}
                      style={{ color: "var(--ai-icon-color)" }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CloudTypes() {
  const types = [
    {
      title: "Nube Pública",
      desc: "Servicios compartidos sobre internet. Ideal para aplicaciones de consumo masivo con costos optimizados.",
      icon: Share2,
    },
    {
      title: "Nube Privada",
      desc: "Infraestructura dedicada exclusivamente a su empresa. Máxima seguridad y soberanía de datos.",
      icon: Lock,
    },
    {
      title: "Nube Híbrida",
      desc: "Conecta nubes públicas y privadas. Flexibilidad total para mover cargas de trabajo críticas.",
      icon: Combine,
    },
  ];

  return (
    <section
      className="px-8 md:px-16 py-16 md:py-24 transition-colors duration-500"
      style={{ background: "var(--secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Tipos de{" "}
            <span className="light-text-gradient">Arquitectura Cloud</span>
          </h2>
          <p
            className="max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Diseñamos el ecosistema digital que mejor se adapte a sus requisitos
            de seguridad y presupuesto.
          </p>
        </div>

        {/* Cards horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {types.map((type, i) => (
            <div
              key={type.title}
              className="group flex flex-col gap-5 rounded-2xl p-7 border transition-all duration-300"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
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
              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <type.icon
                    size={20}
                    strokeWidth={1.6}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
                <span
                  className="text-4xl font-black tabular-nums select-none"
                  style={{ color: "var(--ai-icon-color)", opacity: 0.12 }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-base font-bold mb-2 leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {type.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {type.desc}
                </p>
              </div>
              {/* Bottom indicator bar */}
              <div
                className="h-[2px] w-8 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--ai-icon-color)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
