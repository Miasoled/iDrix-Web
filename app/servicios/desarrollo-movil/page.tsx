import { Navbar } from "@/components/Navbar";
import { HeroMovil } from "@/components/hero-Services/hero-movil";
import { Star, Shield, Clock, BarChart2, MessageSquare } from "lucide-react";
import { Smartphone, Globe, Monitor } from "lucide-react";
export default function Movil() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroMovil />
      <InfoMovil />
      <TiposMovil />
    </main>
  );
}

const features = [
  {
    icon: Star,
    title: "Experiencia Comprobada",
    description:
      "Años de experiencia y portafolio exitoso en múltiples industrias.",
  },
  {
    icon: Shield,
    title: "Seguridad como prioridad",
    description: "Medidas de seguridad robustas y actualizadas en cada app.",
  },
  {
    icon: Clock,
    title: "Desarrollo Rápido y Eficiente",
    description: "Tu aplicación en el mercado en el menor tiempo posible.",
  },
  {
    icon: BarChart2,
    title: "Escalable y Sostenible",
    description: "Apps diseñadas para crecer con tu negocio a largo plazo.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Transparente",
    description: "Informado en cada paso, con soporte continuo post-entrega.",
  },
];

export function InfoMovil() {
  return (
    <section
      className="w-full py-20 px-4 transition-colors duration-500"
      style={{ background: "var(--info-bg)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Columna izquierda */}
        <div>
          {/* Etiqueta superior */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-2xl" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
              Desarrollo de Apps
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl font-bold leading-tight text-foreground mb-6">
            Tu empresa necesita <br />
            <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
              adaptarse e innovar
            </span>
          </h2>

          {/* Párrafos */}
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            En iDrix Technology te ayudamos con el diseño y desarrollo de
            aplicaciones móviles para Android e iOS. Somos un equipo dedicado de
            expertos en tecnología móvil que trabaja incansablemente para
            ofrecer soluciones de vanguardia adaptadas a tus necesidades.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Con sede en Ecuador y presencia en toda Latinoamérica, combinamos la
            innovadora metodología Design Thinking con tecnologías de última
            generación para garantizar resultados excepcionales.
          </p>
        </div>

        {/* Columna derecha — cards de features */}
        <div className="flex flex-col gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:hover:border-[hsl(207,76%,45%)]"
            >
              {/* Icono */}
              <div className="mt-0.5 flex-shrink-0 text-[hsl(207,76%,45%)] dark:text-[hsl(207,76%,60%)]">
                <feature.icon size={22} strokeWidth={1.5} />
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tipos = [
  {
    numero: "01",
    label: "NATIVA",
    titulo: "Aplicaciones Nativas",
    descripcion:
      "Desarrolladas específicamente para cada sistema operativo. Android con Android Studio (Java/Kotlin) e iOS con Xcode (Swift). Consumimos Firebase, API REST y GraphQL.",
    tags: ["Java · Kotlin", "Swift", "Firebase"],
    icon: Smartphone,
    featured: false,
  },
  {
    numero: "02",
    label: "HÍBRIDA",
    titulo: "Aplicaciones Híbridas",
    descripcion:
      "Diseñadas para funcionar en cualquier sistema operativo: Android, iOS y Windows. iDrix trabaja con Flutter y Dart, la tecnología de Google para apps multiplataforma de alto rendimiento.",
    tags: ["Flutter", "Dart", "Cross-platform"],
    icon: Globe,
    featured: true,
  },
  {
    numero: "03",
    label: "PWA",
    titulo: "Aplicaciones Web (PWA)",
    descripcion:
      "Apps web que se cargan en el servidor y corren en el navegador sin necesidad de instalación. Con tecnología TWA pueden subirse a Play Store y Huawei AppGallery.",
    tags: ["PWA", "TWA", "Play Store"],
    icon: Monitor,
    featured: false,
  },
];

export function TiposMovil() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-[hsl(210,40%,96%)] dark:bg-[hsl(215,50%,8%)]">
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta superior */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Tipos de Aplicaciones
          </span>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tipos.map((tipo) => (
            <div
              key={tipo.numero}
              className={`relative rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300
                ${
                  tipo.featured
                    ? "bg-[hsl(217,60%,20%)] text-white shadow-xl scale-105"
                    : "bg-card border border-border text-foreground shadow-sm hover:shadow-md"
                }`}
            >
              {/* Icono */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center
                  ${
                    tipo.featured
                      ? "bg-white/10"
                      : "bg-[hsl(207,76%,95%)] dark:bg-[hsl(207,76%,15%)]"
                  }`}
              >
                <tipo.icon
                  size={22}
                  strokeWidth={1.5}
                  className={
                    tipo.featured ? "text-white" : "text-[hsl(207,76%,45%)]"
                  }
                />
              </div>

              {/* Número y label */}
              <div>
                <span
                  className={`text-xs font-semibold tracking-widest uppercase
                    ${
                      tipo.featured
                        ? "text-[hsl(207,76%,70%)]"
                        : "text-[hsl(207,76%,45%)]"
                    }`}
                >
                  {tipo.numero} · {tipo.label}
                </span>
              </div>

              {/* Título */}
              <h3
                className={`text-2xl font-bold leading-tight -mt-3
                  ${tipo.featured ? "text-white" : "text-foreground"}`}
              >
                {tipo.titulo}
              </h3>

              {/* Descripción */}
              <p
                className={`text-sm leading-relaxed
                  ${tipo.featured ? "text-white/75" : "text-muted-foreground"}`}
              >
                {tipo.descripcion}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {tipo.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        tipo.featured
                          ? "bg-white/10 text-white"
                          : "bg-[hsl(210,20%,93%)] text-[hsl(210,20%,30%)] dark:bg-white/10 dark:text-white/70"
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
