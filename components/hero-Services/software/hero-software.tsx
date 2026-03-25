import { LightningBoltIcon } from "@radix-ui/react-icons";

export function HeroSoftware() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center pt-28 pb-20 transition-colors duration-500"
      style={{ background: "var(--hero-web-bg)" }}
    >
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-6">
          Impulsa tu negocio con
          <br />
          <span className="light-text-gradient">Desarrollo a medida</span>
        </h1>

        {/* SUBTITLE */}
        <p className="max-w-2xl text-muted-foreground text-base md:text-lg mb-10">
          Convierte tu visión en soluciones digitales reales y escalables. La mejor empresa de
          desarrollo de software en Ecuador.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <button className="rounded-xl bg-[hsl(207,76%,45%)] px-8 py-3 text-sm font-medium text-white shadow-[0_0_8px_var(--ai-icon-color)] transition hover:shadow-[0_0_16px_hsl(207,76%,45%)] hover:scale-105">
            Comenzar proyecto
          </button>
        </div>

        {/* BROWSER CARD */}
        <div className="w-full max-w-3xl rounded-xl border border-border bg-card shadow-xl overflow-hidden">
          {/* browser bar */}
          <div className="flex items-center gap-2 bg-muted px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>

            <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
              idrix.com.ec — Software a medida para tu empresa
            </div>
          </div>

          {/* content */}
          <div className="p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <LightningBoltIcon />
              </div>

              <span className="font-semibold text-foreground">iDrix Technology S.A.</span>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mb-6 text-xs">
              {[
                "Software a Medida",
                "Apps Móviles",
                "Big Data",
                "Blockchain",
                "Ciberseguridad",
              ].map((tag) => (
                <span key={tag} className="rounded-md bg-muted px-2 py-1 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-10 text-sm">
              <div>
                <div className="text-lg md:text-xl font-semibold text-foreground">16+</div>
                <div className="text-muted-foreground text-[10px] md:text-xs">SERVICIOS</div>
              </div>

              <div>
                <div className="text-lg md:text-xl font-semibold text-foreground">7+</div>
                <div className="text-muted-foreground text-[10px] md:text-xs">AÑOS</div>
              </div>

              <div>
                <div className="text-lg md:text-xl font-semibold text-foreground">100+</div>
                <div className="text-muted-foreground text-[10px] md:text-xs">PROYECTOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
