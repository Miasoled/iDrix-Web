import Image from "next/image";

export function HeroPeritaje() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden pt-24 md:pt-28 transition-colors duration-500"
      style={{ background: "var(--hero-web-bg)" }}
    >
      {/* Badge */}
      <div className="flex items-center rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] md:mb-6">
        <span className="flex items-center rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
        <span className="px-1 text-sm text-[hsl(200,15%,40%)] transition-colors dark:text-white/90">
          Peritaje Informático Certificado
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Peritaje Informático
          <br />
          <span className="light-text-gradient">Forense</span>
        </h1>

        <p className="mb-6 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          Extracción técnica de contenido digital con validez legal y
          acreditación oficial ante el Consejo de la Judicatura para procesos
          judiciales complejos.
        </p>

        <button className="mb-12 flex items-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]">
          Solicitar Asesoría
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Full-width bottom image — flush to section edges */}
      <div className="w-full">
        <Image
          src="/img/ISOP.png"
          width={1920}
          height={600}
          alt="Peritaje Informático"
          className="w-full object-cover opacity-60 block"
        />
      </div>
    </section>
  );
}
