"use client";

import { Download, FileText, Globe, Zap, Users, Award } from "lucide-react";

const brochures = [
  {
    id: 1,
    lang: "ES",
    title: "iDrix Presentación",
    subtitle: "en Español",
    description:
      "Conoce nuestra propuesta tecnológica, servicios y casos de éxito en el idioma de tus negocios.",
    viewUrl:
      "https://www.idrix.com.ec/wp-content/uploads/iDrix-presentacion-Espanol.pdf",
    downloadUrl:
      "https://www.idrix.com.ec/wp-content/uploads/iDrix-presentacion-Espanol.pdf",
    flag: "🇪🇸",
  },
  {
    id: 2,
    lang: "EN",
    title: "iDrix Presentation",
    subtitle: "in English",
    description:
      "Discover our technology proposal, services and success stories for international clients.",
    viewUrl:
      "https://www.idrix.com.ec/wp-content/uploads/idrix-presentacion-Ingles.pdf",
    downloadUrl:
      "https://www.idrix.com.ec/wp-content/uploads/idrix-presentacion-Ingles.pdf",
    flag: "🇺🇸",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Innovación continua",
    desc: "Soluciones TIC de vanguardia adaptadas a tu industria.",
  },
  {
    icon: Users,
    title: "Servicio integral",
    desc: "Asesoría, implementación y soporte con alto estándar de calidad.",
  },
  {
    icon: Globe,
    title: "Alcance global",
    desc: "Atendemos empresas nacionales e internacionales.",
  },
  {
    icon: Award,
    title: "Resultados comprobados",
    desc: "Casos de éxito en múltiples sectores empresariales.",
  },
];

export function BrochuresPage() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section
        className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden pt-24 pb-12 transition-colors duration-500 md:pt-28 lg:pt-32"
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
          <div className="mb-6 flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10 dark:shadow-[0_0_30px_rgba(28,126,201,0.4),0_0_60px_rgba(28,126,201,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)]">
            <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white dark:shadow-[0_0_20px_rgba(28,126,201,0.6)]">
              <FileText
                size={12}
                className="text-[hsl(207,76%,45%)] dark:text-white"
              />
              Recursos Corporativos
            </span>
            <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90 transition-colors">
              Documentación iDrix
            </span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Nuestros{" "}
            <span className="light-text-gradient mb-2 pb-2 inline-block">
              Brochures
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
            iDrix Technology S.A.: Innovación en soluciones tecnológicas para tu
            empresa. Descubre nuestros brochures con productos y servicios
            vanguardistas que potenciarán tu éxito empresarial.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#brochures"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[hsl(207,76%,40%)] dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)]"
            >
              <Download size={16} strokeWidth={2.2} />
              Ver brochures disponibles
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ¿POR QUÉ IDRIX? — grid de razones
      ══════════════════════════════════ */}
      <section className="px-8 md:px-16 py-20 transition-colors duration-500 bg-white dark:bg-[hsl(215,50%,8%)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-1 h-5 rounded-full"
              style={{ background: "var(--ai-icon-color)" }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: "var(--ai-icon-color)" }}
            >
              ¿Por qué IDRIX?
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Líderes en{" "}
            <span className="light-text-gradient">Transformación Digital</span>
          </h2>

          <p
            className="text-sm leading-relaxed max-w-2xl mb-12"
            style={{ color: "var(--muted-foreground)" }}
          >
            Empresa tecnológica dedicada a la asesoría, presentación e
            implementación de nuevas tecnologías de la información y la
            comunicación que se acoplan a las necesidades de nuestros clientes,
            brindando un servicio integral con un alto estándar de calidad a
            empresas nacionales e internacionales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border transition-all duration-300 group"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--ai-icon-color)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 28px rgba(46,170,244,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 16px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
                <p
                  className="text-sm font-bold mb-1.5"
                  style={{ color: "var(--foreground)" }}
                >
                  {title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BROCHURES — download cards
      ══════════════════════════════════ */}
      <section
        id="brochures"
        className="px-8 md:px-16 py-20 transition-colors duration-500 bg-[hsl(210,40%,96%)] dark:bg-[hsl(215,50%,8%)]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <div
              className="w-1 h-5 rounded-full"
              style={{ background: "var(--ai-icon-color)" }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: "var(--ai-icon-color)" }}
            >
              Descarga nuestros brochures
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brochures.map(
              ({
                id,
                lang,
                title,
                subtitle,
                description,
                viewUrl,
                downloadUrl,
                flag,
              }) => (
                <div
                  key={id}
                  className="relative rounded-2xl overflow-hidden border transition-all duration-300 group"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--ai-icon-color)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 48px rgba(46,170,244,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 32px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 inset-x-0 h-[3px]"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--ai-icon-color) 0%, transparent 100%)",
                    }}
                  />

                  <div className="p-8">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        {/* PDF icon */}
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: "var(--ai-icon-bg)" }}
                        >
                          <FileText
                            size={22}
                            strokeWidth={1.5}
                            style={{ color: "var(--ai-icon-color)" }}
                          />
                        </div>
                        <div>
                          <p
                            className="text-base font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                          >
                            {title}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Flag + lang badge */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-xl">{flag}</span>
                        <span
                          className="text-[11px] font-bold px-2 py-0.5 rounded-md"
                          style={{
                            background: "var(--ai-icon-bg)",
                            color: "var(--ai-icon-color)",
                          }}
                        >
                          {lang}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-7"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {description}
                    </p>

                    {/* PDF info row */}
                    <div
                      className="flex items-center gap-2 rounded-xl px-4 py-3 mb-6 border"
                      style={{
                        background: "var(--secondary)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <FileText
                        size={14}
                        style={{ color: "var(--ai-icon-color)" }}
                      />
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Formato PDF · iDrix Technology S.A.
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border transition-all duration-200 hover:opacity-80"
                        style={{
                          background: "var(--secondary)",
                          borderColor: "var(--border)",
                          color: "var(--foreground)",
                        }}
                      >
                        <FileText size={14} strokeWidth={2} />
                        Ver PDF
                      </a>
                    <a
                      href={downloadUrl}
                      download={`${title}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                      style={{
                        background: "var(--ai-icon-color)",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(46,170,244,0.3)",
                      }}
                    >
                      <Download size={14} strokeWidth={2.2} />
                      Descargar
                    </a>
                  </div>

                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
