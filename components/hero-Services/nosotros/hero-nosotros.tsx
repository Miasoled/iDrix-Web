import { Clock, Cpu, ConciergeBell, Monitor } from "lucide-react";
export function HeroNosotros() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 1. Base background */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: "var(--hero-gradient)",
          }}
        />

        {/* 2. GLOWS (Fondo) */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "80%",
            height: "50%",
            borderRadius: "50%",
            background: "var(--hero-glow)",
            filter: "blur(40px)",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute left-1/2 top-[5%] -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "50%",
            height: "30%",
            borderRadius: "50%",
            background: "var(--hero-core-glow)",
            filter: "blur(30px)",
          }}
        />

        {/* 3. SHAPES (Arcos) */}

        {/* Arch 1 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "160%",
            height: "140%",
            top: "-50%",
            borderLeft: "50px solid var(--arch-1)",
            borderRight: "50px solid var(--arch-1)",
            borderBottom: "50px solid var(--arch-1)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(22px)",
            maskImage:
              "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, transparent 100%)",
          }}
        />

        {/* Arch 2 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "130%",
            height: "130%",
            top: "-42%",
            borderLeft: "42px solid var(--arch-2)",
            borderRight: "42px solid var(--arch-2)",
            borderBottom: "42px solid var(--arch-2)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(18px)",
            maskImage:
              "linear-gradient(to bottom, transparent 15%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 15%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 70%, transparent 100%)",
          }}
        />

        {/* Arch 3 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "105%",
            height: "120%",
            top: "-32%",
            borderLeft: "34px solid var(--arch-3)",
            borderRight: "34px solid var(--arch-3)",
            borderBottom: "34px solid var(--arch-3)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(14px)",
            maskImage:
              "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,1) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,1) 75%, transparent 100%)",
          }}
        />

        {/* Arch 4 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "80%",
            height: "110%",
            top: "-24%",
            borderLeft: "26px solid var(--arch-4)",
            borderRight: "26px solid var(--arch-4)",
            borderBottom: "26px solid var(--arch-4)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(10px)",
            maskImage:
              "linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%, transparent 100%)",
          }}
        />

        {/* 4. Bottom Fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 transition-colors duration-500 md:h-32"
          style={{
            background: "var(--hero-bottom-fade)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] md:mb-6">
          <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            >
              <path
                d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z"
                fill="currentColor"
              />
            </svg>
            Nosotros
          </span>
          <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
            iDrix Technology S.A.
          </span>
        </div>

        {/* Heading Responsivo */}
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Conozca más acerca de nosotros en <br className="hidden sm:block" />
          <span className="light-text-gradient mb-2 pb-2 inline-block">
            iDrix Technology
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          Un equipo de ingenieros por la tecnolgía, dedicados a crear soluciones
          digitales que transforman empresas mediante la industria 4.0.
        </p>
        <div className="flex flex-wrap justify-center mt-5 gap-2">
          {[
            {
              icon: <Clock className="h-5 w-5" />,
              value: "2018",
              label: "FUNDACIÓN",
            },
            {
              icon: <Cpu className="h-5 w-5" />,
              value: "Múltiples",
              label: "TECNOLOGÍAS",
            },
            {
              icon: <ConciergeBell className="h-5 w-5" />,
              value: "14+",
              label: "SERVICIOS",
            },
            {
              icon: <Monitor className="h-5 w-5" />,
              value: "100+",
              label: "PROYECTOS",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              value: "4",
              label: "PAÍSES",
            },
          ].map((stat) => (
            <span
              key={stat.label}
              className="flex items-center px-5 gap-3 rounded-2xl border border-border bg-white/70 px-5 py-3 shadow-sm backdrop-blur dark:bg-white/5"
            >
              <span className="text-blue-400 flex-shrink-0">{stat.icon}</span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                  {stat.label}
                </span>
              </span>
            </span>
          ))}
        </div>
        <div className="py-10 text-left">
          {/* Sobre nosotros  */}
          <div className="w-full max-w-5xl rounded-xl border border-border bg-card shadow-xl overflow-hidden">
            {/* browser bar */}
            <div className="flex items-center gap-2 bg-muted px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                idrix.com.ec — Software a medida para tu empresa
              </div>
            </div>

            {/* content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Historia de iDrix Technology",
                    description:
                      "Un equipo de ingenieros crea una empresa de desarrollo de software que ofrece servicios tecnológicos de la industria 4.0, brindando soluciones integrales para que las empresas digitalicen sus procesos y generen mayor valor.",
                  },
                  {
                    title: "¿Por qué iDrix?",
                    description:
                      'El nombre iDrix combina "i" de innovación y "Drix" de constancia, representando el concepto de innovar constantemente y posicionarse como una empresa líder en transformación digital.',
                  },
                  {
                    title: "Inicio de Actividades en Idrix Technologies",
                    description:
                      "iDrix Technology inició sus actividades el 20 de febrero de 2018 en Santo Domingo y desde entonces desarrolla software para sectores como salud, comercio, finanzas y delivery.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="relative rounded-2xl px-6 py-8 text-center border border-blue-100 bg-white/80 shadow-sm dark:border-blue-500/20 dark:bg-blue-950/3 dark:shadow-[0_0_18px_0_rgba(59,130,246,0.08)]
            backdrop-blur transition-colors duration-300"
                  >
                    {/* subtle top glow for dark mode */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-blue-400/40 to-transparent dark:via-blue-400/60" />

                    <h3 className="mb-4 text-base font-bold text-blue-500 dark:text-blue-400">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-slate-400">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
