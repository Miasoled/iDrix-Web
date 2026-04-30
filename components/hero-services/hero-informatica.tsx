import { ShieldCheck } from "lucide-react";

export function HeroInformatica() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden pt-24 pb-16 px-4 md:px-12 lg:px-10 transition-colors duration-500 md:pt-28 lg:pt-28"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Badge superior */}
      <div className="flex items-center rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] mb-10 md:mb-12">
        <span className="flex items-center rounded-full bg-[hsl(200,25%,96%)] text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-[hsl(207,76%,45%)] dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <circle cx="12.1" cy="12.1" r="1" />
          </svg>
        </span>
        <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors px-1">
          Protección Empresarial 24/7
        </span>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-center">
        {/* Columna izquierda */}
        <div className="flex flex-col items-start text-left">
          <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Seguridad <br />
            <span className="light-text-gradient dark:bg-gradient-to-r dark:from-[hsl(207,76%,60%)] dark:to-[hsl(200,80%,70%)] dark:bg-clip-text dark:text-transparent">
              Informática
            </span>
          </h1>

          <p className="mb-6 max-w-md text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
            La seguridad informática es la disciplina encargada de proteger la
            integridad, confidencialidad y privacidad de la información
            almacenada en sistemas informáticos.
          </p>

          <blockquote className="mb-8 w-full border-l-4 border-[hsl(207,76%,45%)] rounded-r-xl py-4 pr-4 pl-4 bg-[hsl(207,76%,45%)]/20 text-sm font-semibold text-[hsl(200,50%,15%)] dark:text-white/80 uppercase tracking-wide">
            Su información es valiosa, no espere a ser atacado.
          </blockquote>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]">
            Solicitar asesoría en seguridad
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

        {/* Columna derecha — card azul */}
        <div className="flex justify-center items-center w-full">
          <div
            className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(207,76%,55%) 0%, hsl(217,70%,45%) 100%)",
            }}
          >
            {/* Candado */}
            <div className="flex justify-center items-center pt-12 pb-6 px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-40 h-40 sm:w-48 sm:h-48 text-white/20"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle
                  cx="12"
                  cy="16"
                  r="1"
                  fill="currentColor"
                  className="text-white/30"
                />
              </svg>
            </div>

            {/* Badge inferior */}
            <div className="flex justify-center items-center pb-6 px-4">
              <div className="flex flex-col gap-2 w-full rounded-2xl bg-white/15 backdrop-blur-sm px-4 py-3 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Protocolo Seguro Activado
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-white/20">
                  <div className="h-1 rounded-full bg-white w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
