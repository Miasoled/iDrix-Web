import { Navbar } from "@/components/Navbar";
<<<<<<< HEAD
import { HeroMovil } from "@/components/hero-services/hero-movil";
import { Star, Shield, Clock, BarChart2, MessageSquare } from "lucide-react";
=======
import { HeroMovil } from "@/components/hero-Services/hero-movil";
>>>>>>> edc29863a78596fdb93d490d36f3ed7a9d9f9401
import { Smartphone, Globe, Monitor } from "lucide-react";
import { Building2, Flame } from "lucide-react";
import {
  Star,
  Wifi,
  ShieldMinus,
  Clock,
  Heart,
  MessageSquare,
  Shield,
  BarChart2,
} from "lucide-react";

export default function Movil() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroMovil />
      <InfoMovil />
      <TiposMovil />
      <StackMovil />
      <DiferenciasMovil />
      <CtaMovil />
    </main>
  );
}

const features = [
  {
    icon: Star,
    title: "Experiencia Comprobada",
    description: "Años de experiencia y portafolio exitoso en múltiples industrias.",
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
            <div className="w-8 h-[3px] bg-[hsl(207,76%,45%)] rounded-2xl" />
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
            En iDrix Technology te ayudamos con el diseño y desarrollo de aplicaciones móviles para
            Android e iOS. Somos un equipo dedicado de expertos en tecnología móvil que trabaja
            incansablemente para ofrecer soluciones de vanguardia adaptadas a tus necesidades.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Con sede en Ecuador y presencia en toda Latinoamérica, combinamos la innovadora
            metodología Design Thinking con tecnologías de última generación para garantizar
            resultados excepcionales.
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
                <h3 className="text-sm font-semibold text-foreground mb-0.5">{feature.title}</h3>
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
          <div className="w-8 h-[3px] bg-[hsl(207,76%,45%)] rounded-full" />
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
                    : "bg-card border border-border text-foreground shadow-sm hover:shadow-md "
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
                  className={tipo.featured ? "text-white" : "text-[hsl(207,76%,45%)]"}
                />
              </div>

              {/* Número y label */}
              <div>
                <span
                  className={`text-xs font-semibold tracking-widest uppercase
                    ${tipo.featured ? "text-[hsl(207,76%,70%)]" : "text-[hsl(207,76%,45%)]"}`}
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

const tecnologias = [
  {
    siglas: "Fl",
    titulo: "Flutter",
    descripcion:
      "SDK desarrollado por Google para crear aplicaciones nativas multiplataforma desde una única base de código.",
    badge: "MOBILE & WEB",
    badgeColor:
      "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)] dark:text-[hsl(207,76%,70%)]",
    iconBg: "bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]",
    iconColor: "text-[hsl(207,76%,45%)]",
    tags: ["Android", "iOS", "Web", "Windows", "Mac"],
    icon: Smartphone,
  },
  {
    siglas: "Xm",
    titulo: "Xamarin",
    descripcion:
      "Plataforma poderosa de Microsoft para el desarrollo de apps con .NET y C#, integrando capacidades nativas completas.",
    badge: "ENTERPRISE",
    badgeColor:
      "text-[hsl(270,60%,55%)] bg-[hsl(270,60%,93%)] dark:bg-[hsl(270,60%,15%)] dark:text-[hsl(270,60%,70%)]",
    iconBg: "bg-[hsl(270,60%,93%)] dark:bg-[hsl(270,60%,15%)]",
    iconColor: "text-[hsl(270,60%,55%)]",
    tags: ["Android", "iOS", ".NET", "C#"],
    icon: Building2,
  },
  {
    siglas: "🔥",
    titulo: "Firebase",
    descripcion:
      "Plataforma de backend escalable con bases de datos en tiempo real, autenticación y herramientas de análisis avanzado.",
    badge: "BACKEND",
    badgeColor:
      "text-[hsl(30,90%,50%)] bg-[hsl(30,90%,93%)] dark:bg-[hsl(30,90%,15%)] dark:text-[hsl(30,90%,70%)]",
    iconBg: "bg-[hsl(30,90%,93%)] dark:bg-[hsl(30,90%,15%)]",
    iconColor: "text-[hsl(30,90%,50%)]",
    tags: ["Auth", "Firestore", "Push", "Analytics"],
    icon: Flame,
  },
  {
    siglas: "APIs",
    titulo: "REST & GraphQL",
    descripcion:
      "Integración eficiente con servicios externos y arquitecturas modernas para una comunicación de datos optimizada.",
    badge: "INTEGRATION",
    badgeColor:
      "text-[hsl(150,60%,35%)] bg-[hsl(150,60%,90%)] dark:bg-[hsl(150,60%,12%)] dark:text-[hsl(150,60%,60%)]",
    iconBg: "bg-[hsl(150,60%,90%)] dark:bg-[hsl(150,60%,12%)]",
    iconColor: "text-[hsl(150,60%,35%)]",
    tags: ["PHP", "NodeJS", "Java", "GraphQL"],
    icon: Globe,
  },
];

export function StackMovil() {
  return (
    <section
      className="w-full py-20 px-4 transition-colors duration-500 bg-[hsl(210,40%,96%)]"
      style={{ background: "var(--info-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta superior */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Stack Tecnológico
          </span>
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold text-foreground mb-10">
<<<<<<< HEAD
          Tecnologías que <span className="text-[hsl(207,76%,45%)]">potencian</span> tu app
=======
          Tecnologías que{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent ">
            potencian
          </span>{" "}
          tu app
>>>>>>> edc29863a78596fdb93d490d36f3ed7a9d9f9401
        </h2>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tecnologias.map((tech) => (
            <div
              key={tech.titulo}
              className="relative rounded-2xl p-6 flex flex-col gap-4 bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)]"
            >
              {/* Badge */}
              <span
                className={`absolute top-5 right-5 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${tech.badgeColor}`}
              >
                {tech.badge}
              </span>

              {/* Icono + Título */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg ${tech.iconBg} ${tech.iconColor}`}
                >
                  {tech.siglas}
                </div>
                <h3 className="text-xl font-bold text-foreground">{tech.titulo}</h3>
              </div>

              {/* Descripción */}
              <p className="text-sm text-muted-foreground leading-relaxed">{tech.descripcion}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tech.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(210,20%,93%)] text-[hsl(210,20%,30%)] dark:bg-white/10 dark:text-white/70"
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

const diferencias = [
  {
    numero: "1",
    icon: Star,
    titulo: "Experiencia Comprobada",
    descripcion:
      "Años de historial y portafolio exitoso en múltiples sectores e industrias de LATAM.",
  },
  {
    numero: "2",
    icon: Wifi,
    titulo: "Enfoque en Innovación",
    descripcion:
      "A la vanguardia de tendencias y tecnologías emergentes como Flutter y Xamarin.",
  },
  {
    numero: "3",
    icon: ShieldMinus,
    titulo: "Seguridad como Prioridad",
    descripcion:
      "Diseñamos con medidas robustas para proteger tus datos y los de tus clientes.",
  },
  {
    numero: "4",
    icon: Clock,
    titulo: "Desarrollo Rápido",
    descripcion:
      "Proceso ágil con Flutter y Xamarin para llevar tu app al mercado en tiempo récord.",
  },
  {
    numero: "5",
    icon: Heart,
    titulo: "Satisfacción del Cliente",
    descripcion:
      "Trabajamos para que cada app supere tus expectativas con soporte continuo.",
  },
  {
    numero: "6",
    icon: MessageSquare,
    titulo: "Comunicación Transparente",
    descripcion:
      "Te mantenemos informado en cada etapa y estamos disponibles para resolver dudas.",
  },
];

export function DiferenciasMovil() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-white dark:bg-[hsl(215,50%,8%)]">
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta superior */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Por qué elegirnos
          </span>
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold text-foreground mb-10">
          Lo que nos hace{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            diferentes
          </span>
        </h2>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferencias.map((item) => (
            <div
              key={item.numero}
              className="relative rounded-2xl p-6 flex flex-col gap-4 bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)] overflow-hidden"
            >
              {/* Número decorativo de fondo */}
              <span className="absolute bottom-3 right-4 text-7xl font-black select-none leading-none pointer-events-none text-black/5 dark:text-white/5">
                {item.numero}
              </span>

              {/* Icono */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]">
                <item.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-[hsl(207,76%,45%)]"
                />
              </div>

              {/* Título */}
              <h3 className="text-base font-bold text-foreground">
                {item.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaMovil() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-[hsl(210,40%,96%)] dark:bg-[hsl(200,55%,7%)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Card superior — azul oscuro con stats */}
        <div className="rounded-3xl bg-[hsl(217,60%,20%)] dark:bg-[hsl(217,60%,15%)] p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Columna izquierda */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
              Soluciones personalizadas &amp; escalables
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Cada empresa es única. Nos enfocamos en aplicaciones que se
              alinean con tus objetivos de negocio, representan tu marca y están
              diseñadas para crecer contigo. Nuestro compromiso no termina en la
              entrega.
            </p>
          </div>

          {/* Columna derecha — stats */}
          <div className="flex items-center justify-center lg:justify-end gap-0">
            {/* Stat 1 */}
            <div className="flex flex-col items-center px-10">
              <span className="text-4xl font-bold text-[hsl(207,76%,60%)]">
                100+
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/50 mt-1">
                Proyectos
              </span>
            </div>

            {/* Divisor */}
            <div className="w-[1px] h-12 bg-white/15" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center px-10">
              <span className="text-4xl font-bold text-[hsl(207,76%,60%)]">
                7+
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/50 mt-1">
                Años Exp.
              </span>
            </div>

            {/* Divisor */}
            <div className="w-[1px] h-12 bg-white/15" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center px-10">
              <span className="text-4xl font-bold text-[hsl(207,76%,60%)]">
                4
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/50 mt-1">
                Ciudades
              </span>
            </div>
          </div>
        </div>

        {/* Card inferior — CTA */}
        <div className="rounded-3xl bg-white border border-[hsl(210,20%,90%)] dark:bg-white/5 dark:border-white/10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Texto */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              ¿Listo para dar el salto al futuro?
            </h3>
            <p className="text-sm text-muted-foreground">
              Hagamos crecer tu negocio juntos. Cuéntanos tu idea y te
              explicamos cómo convertirla en una app de calidad para Android e
              iOS.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-6 py-3 text-sm font-medium text-white shadow-[0_4px_12px_rgba(28,126,201,0.35)] transition-all hover:bg-[hsl(207,76%,40%)] hover:shadow-[0_6px_16px_rgba(28,126,201,0.45)] whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              Explícanos tu idea
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[hsl(210,20%,85%)] bg-white px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-[hsl(210,20%,97%)] dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 whitespace-nowrap">
              Solicitar cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
