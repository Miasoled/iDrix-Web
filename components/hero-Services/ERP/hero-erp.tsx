import Image from "next/image";

export function HeroErp() {
  return (
    <section
      className="relative w-full pt-28 pb-24 transition-colors duration-500"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="bg-[#567dff2d] mb-6 inline-block rounded-full px-4 py-1 text-xs font-semibold text-primary">
              TODO-EN-UNO PARA ECUADOR
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              El <span className="light-text-gradient">ERP</span> que revoluciona
              <br />
              la gestión empresarial
              <br />
              en Ecuador
            </h1>

            {/* Subtitle */}
            <p className="mb-4 max-w-xl text-base text-muted-foreground">
              Automatiza contabilidad, facturación, inventario, ventas y nómina con inteligencia
              artificial desde una sola plataforma.
            </p>

            <p className="mb-8 max-w-xl text-sm text-muted-foreground">
              iDrix ERP proporciona unes una solución empresarial diseñada específicamente para los
              desafíos de negocios, empresas y pymes ecuatorianas, integrando normativas locales con
              tecnología global.
            </p>

            {/* CTA */}
            <button className="rounded-lg bg-[hsl(207,76%,45%)]  px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90">
              Solicitar demostración
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Card + imagen */}
            <div className="relative rounded-2xl  p-6 shadow-xl border border-border bg-hero-gradient ">
              <Image
                src="/img/ERP/HeadImg.png"
                alt="ERP Dashboard"
                width={500}
                height={420}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
