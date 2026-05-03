import Image from "next/image";

export function HeroErp() {
  return (
    <section
      className="relative w-full pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-500"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mt-5 lg:mt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-4 flex items-center justify-center lg:justify-start gap-2 md:mb-6">
              <div className="flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)]">
                <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
                  TODO-EN-UNO PARA ECUADOR
                </span>
                <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
                  iDrix Technology
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-6xl lg:text-7xl xl:text-[5rem]">
              El <span className="light-text-gradient">ERP</span> que
              revoluciona
              <br />
              la gestión empresarial
              <br />
              en Ecuador
            </h1>

            {/* Subtitle */}
            <p className="mb-6 max-w-xl mx-auto lg:mx-0 text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
              Automatiza contabilidad, facturación, inventario, ventas y nómina
              con inteligencia artificial desde una sola plataforma.
            </p>

            <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
              iDrix ERP es una solución empresarial diseñada específicamente
              para los desafíos de negocios, empresas y pymes ecuatorianas,
              integrando normativas locales con tecnología global.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <button className="w-full rounded-xl bg-[hsl(207,76%,45%)] px-7 py-3.5 text-base font-medium text-[hsl(0,0%,100%)] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(28,126,201,0.25)] transition-all hover:bg-[hsl(207,76%,40%)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_6px_16px_rgba(28,126,201,0.35)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)] dark:hover:shadow-[0_0_40px_-5px_rgba(28,126,201,0.7)] sm:w-auto">
                Solicitar demostración
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Card + imagen */}
            <div className="relative rounded-2xl p-4 md:p-6 shadow-xl border border-border bg-hero-gradient w-full max-w-[500px]">
              <Image
                src="/img/erp-i/HeadImg.png"
                alt="ERP Dashboard"
                width={500}
                height={420}
                className="rounded-xl object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
