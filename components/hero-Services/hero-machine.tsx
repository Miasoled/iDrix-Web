import Image from "next/image";
export function HeroMachine() {
  return (
    <section
      className="relative flex min-h-[100svh] px-20 flex-col items-center  overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-28 "
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Container inicial */}
      <div className="flex items-center rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] md:mb-6">
        <span className="flex items-center rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
        </span>
        <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors px-1">
          Inteligencia artificial avanzada
        </span>
      </div>

      {/* Background principal */}
      <div className="grid grid-cols-1 text-center md:grid-cols-2 ">
        {/* Heading */}
        <div className="relative z-10 flex w-full max-w-4xl flex-col text-left items-start px-4 ">
          <h1 className="mb-4 text-balance sm:text-8xl font-black leading-[1.1] text-7xl">
            Machine <br />{" "}
            <span className="light-text-gradient">Learning</span>{" "}
          </h1>

          <p className="mb-6 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground md:text-lg">
            Potenciamos su empresa en Latinoamérica con soluciones avanzadas de
            inteligencia artificial, modelos predictivos y redes neuronales
            profundas que transforman datos en decisiones estratégicas.
          </p>

          <button className="mb-8 flex items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]">
            Solicitar solución de IA
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-90"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center ">
          <Image src="/img/Machine.png" width={600} height={600} alt="" />
        </div>
      </div>
    </section>
  );
}
