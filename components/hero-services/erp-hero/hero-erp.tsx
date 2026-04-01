import Image from "next/image";

export function HeroErp() {
  return (
    <section
      className="relative w-full pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-500"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mt-5 lg:mt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="bg-[#567dff2d] mb-6 inline-block rounded-full px-4 py-1 text-xs font-semibold text-primary">
              TODO-EN-UNO PARA ECUADOR
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              El <span className="light-text-gradient">ERP</span> que revoluciona
              <br />
              la gestión empresarial
              <br />
              en Ecuador
            </h1>

            {/* Subtitle */}
            <p className="mb-4 max-w-xl mx-auto lg:mx-0 text-base text-muted-foreground">
              Automatiza contabilidad, facturación, inventario, ventas y nómina con inteligencia
              artificial desde una sola plataforma.
            </p>

            <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-base text-muted-foreground">
              iDrix ERP proporciona unes una solución empresarial diseñada específicamente para los
              desafíos de negocios, empresas y pymes ecuatorianas, integrando normativas locales con
              tecnología global.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <button className="rounded-lg bg-[hsl(207,76%,45%)]  px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90">
                Solicitar demostración
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Card + imagen */}
            <div className="relative rounded-2xl p-4 md:p-6 shadow-xl border border-border bg-hero-gradient w-full max-w-[500px]">
              <Image
                src="/img/ERP/HeadImg.png"
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
