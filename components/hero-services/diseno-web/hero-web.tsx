export function HeroWeb() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32 "
      style={{ background: "var(--hero-web-bg)" }}
    >
      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        {/* Heading */}
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Conozca más acerca de nuestro servicio <br />
          <span className="light-text-gradient">Desarrollo de Software</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          Un equipo de ingenieros apasionados por la tecnología, dedicados a transformar sus ideas
          en experiencias digitales impactantes y funcionales que impulsan el crecimiento de su
          marca.
        </p>

        {/* CTA */}
        <button className="mb-8 flex items-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path
              d="M22 16.92V19a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.81.3 1.6.55 2.36a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.72-1.09a2 2 0 0 1 2.11-.45c.76.25 1.55.43 2.36.55A2 2 0 0 1 22 16.92z"
              fill="currentColor"
            />
          </svg>
          Iniciar proyecto
        </button>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            { value: "100+", label: "Proyectos" },
            { value: "99%", label: "Satisfacción" },
            { value: "24/7", label: "Soporte" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur dark:bg-white/5"
            >
              <span className="font-semibold text-primary">{item.value}</span>{" "}
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
