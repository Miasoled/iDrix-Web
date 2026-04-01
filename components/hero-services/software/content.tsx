import {
  Brain,
  ArrowLeftRight,
  BarChart3,
  Users,
  Smartphone,
  Cloud,
  Scissors,
  Columns,
  Code,
  Target,
  Zap,
} from "lucide-react";

export function WhyChooseUs() {
  const chooseUsFeatures = [
    {
      icon: Brain,
      title: "IA & Machine Learning",
      description:
        "IA integrada para optimizar tus procesos y automatizar tareas.",
    },
    {
      icon: ArrowLeftRight,
      title: "Integración Fluida",
      description: "Compatible con tus sistemas existentes sin interrupciones.",
    },
    {
      icon: BarChart3,
      title: "Big Data",
      description:
        "Analítica avanzada para decisiones basadas en datos confiables.",
    },
    {
      icon: Users,
      title: "Metodología QFD",
      description: "Despliegue de función calidad centrado en el cliente.",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "iOS y Android con alto rendimiento y diseño moderno.",
    },
    {
      icon: Cloud,
      title: "Cloud & Escalable",
      description: "Infraestructura en la nube que crece con tu empresa.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-[var(--hero-bg)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-widest text-[var(--ai-icon-color)] uppercase mb-4">
          ¿POR QUÉ ELEGIRNOS?
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto mb-6">
          ¿Por qué elegir nuestro servicio de desarrollo de software a la
          medida?
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Entendemos que cada negocio es único. Diseñamos una solución de
          software que se ajusta perfectamente a tu modelo de negocio,
          presupuesto y objetivos.
        </p>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chooseUsFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left border border-border/50"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--ai-icon-bg)] text-[var(--ai-icon-color)] mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CustomSoftwareSection() {
  const services = [
    {
      icon: Brain,
      title: "IA & Machine Learning",
      description:
        "IA integrada para optimizar tus procesos y automatizar tareas.",
    },
    {
      icon: ArrowLeftRight,
      title: "Integración Fluida",
      description: "Compatible con tus sistemas existentes sin interrupciones.",
    },
    {
      icon: BarChart3,
      title: "Big Data",
      description:
        "Analítica avanzada para decisiones basadas en datos confiables.",
    },
    {
      icon: Users,
      title: "Metodología QFD",
      description: "Despliegue de función calidad centrado en el cliente.",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "iOS y Android con alto rendimiento y diseño moderno.",
    },
    {
      icon: Cloud,
      title: "Cloud & Escalable",
      description: "Infraestructura en la nube que crece con tu empresa.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-[var(--hero-bg)]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col text-center lg:text-left">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[var(--ai-icon-color)] uppercase mb-6 md:mb-8">
            SOFTWARE A MEDIDA
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight text-foreground">
            Aprovecha al máximo el <br className="hidden md:block" />
            potencial de tu{" "}
            <span className="text-[var(--ai-icon-color)]">sistema</span>
          </h2>

          <p className="text-muted-foreground mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
            El desarrollo de software a la medida que brindamos está construido
            con las últimas tecnologías, exclusivamente de acuerdo a las
            necesidades, criterios, recursos y presupuesto de cada empresa. El
            principal beneficio es que se adapta totalmente a los requerimientos
            de cada cliente, consiguiendo la satisfacción del usuario.
          </p>

          <div>
            <button className="w-full sm:w-auto rounded-xl bg-[hsl(207,76%,45%)] px-8 py-3 text-sm font-medium text-white shadow-[0_0_8px_var(--ai-icon-color)] transition hover:shadow-[0_0_16px_hsl(207,76%,45%)] hover:scale-105">
              Potencia tu negocio con nosotros
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition border border-border/50"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[var(--ai-icon-bg)] text-[var(--ai-icon-color)] mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AgileMethodologies() {
  const methods = [
    {
      icon: Scissors,
      title: "Scrum",
      description:
        "Gestión de proyectos iterativos con entregas de valor constantes y ciclos de retroalimentación rápidos para una adaptación continua.",
      tags: ["SPRINTS", "DAILY SYNC"],
    },
    {
      icon: Columns,
      title: "Kanban",
      description:
        "Visualización total del flujo de trabajo y optimización de la capacidad del equipo mediante límites de trabajo en curso WIP.",
      tags: ["EFICIENCIA", "FLUJO CONTINUO"],
    },
    {
      icon: Zap,
      title: "Design Sprint",
      description:
        "Proceso intensivo de 5 días para validar ideas y resolver problemas críticos mediante el diseño centrado en el usuario.",
      tags: ["VALIDACIÓN", "PROTOTIPADO"],
    },
    {
      icon: Code,
      title: "Extreme Programming (XP)",
      description:
        "Enfoque radical en la excelencia técnica, Pair Programming y pruebas automatizadas rigurosas para producir software de alta calidad.",
      tags: ["TDD", "CÓDIGO LIMPIO"],
    },
    {
      icon: Target,
      title: "Agile Inception",
      description:
        "Alineación estratégica inicial del equipo, stakeholders y objetivos del negocio para asegurar un arranque de proyecto sólido y claro.",
      tags: ["VISIÓN", "ALINEACIÓN"],
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-[var(--hero-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[var(--ai-icon-color)] uppercase mb-3">
            FRAMEWORKS DE TRABAJO
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nuestras Metodologías{" "}
            <span className="text-[var(--ai-icon-color)]">Ágiles</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Implementamos marcos de trabajo de vanguardia para garantizar la
            eficiencia técnica y la excelencia en cada entrega de software,
            optimizando tiempos y calidad.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, i) => {
            const Icon = method.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-border/50"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--ai-icon-bg)] text-[var(--ai-icon-color)] mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {method.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] md:text-xs font-medium px-2 py-1 rounded bg-[var(--ai-icon-bg)] text-[var(--ai-icon-color)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl p-8 bg-primary text-primary-foreground flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-3">
              ¿Necesitas una estrategia a medida?
            </h3>
            <p className="text-sm mb-6 opacity-90">
              Combinamos marcos de trabajo para adaptarnos a la escala y
              complejidad de tu negocio.
            </p>
            <button className="bg-primary-foreground text-primary px-5 py-2 rounded-md font-medium hover:bg-primary-foreground/90 transition">
              Comenzar proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
