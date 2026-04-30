export function HeroFacturacion() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden pt-24 md:pt-28 transition-colors duration-500"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <div className="flex items-center rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] md:mb-6">
        <span className="flex items-center rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
          Contáctanos
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
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
        <span className="px-1 text-sm text-[hsl(200,15%,40%)] transition-colors dark:text-white/90">
          Tecnologia de Vanguardia
        </span>
      </div>
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Impulsa tu negocio con
          <br />
          <span className="light-text-gradient">Facturación Electrónica</span>
        </h1>

        <p className="mb-6 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          Optimiza tus procesos contables y administrativos con iDrix
          Technology. El proceso de facturación que cruza información contable
          con organismos de control de manera eficiente y segura.
        </p>

        <div className="flex flex-col mb-15 items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]">
            Comenzar proyecto
          </button>

          <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%)] px-7 py-3.5 text-sm font-medium text-[hsl(200,50%,15%)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:border-[hsl(200,25%,78%)] hover:bg-[hsl(200,25%,98%)] dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
            Solicitar cotización
          </button>
        </div>
      </div>
    </section>
  );
}
