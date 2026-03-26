import Image from "next/image";
import { Formulario } from "./componente";
export function HeroContacto() {
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

        {/* Arco (Fondo) */}
        <div className="absolute inset-0">
          <Image
            src="/img/Arco.svg"
            alt="Decoración fondo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] md:mb-6">
          <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            Contáctanos
          </span>
          <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
            iDrix Technology S.A
          </span>
        </div>

        {/* Heading Responsivo */}
        <h1 className="mb-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Hablemos de tu próximo
          <br className="hidden sm:block" />
          <span className="light-text-gradient  mb-2 pb-2 inline-block">
            Proyecto
          </span>
        </h1>
      </div>
      <Formulario />
    </section>
  );
}
