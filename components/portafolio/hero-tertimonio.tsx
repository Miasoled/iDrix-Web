import { Testimonios } from "./cards-testimonios";

export function HeroTestimonio() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden pt-24 pb-12 transition-colors duration-500 md:pt-28 lg:pt-32">
      {/* === BACKGROUND DECORATIVO (igual que en Clientes) === */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          {/* Fondo base + radial */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "var(--hero-clientes-bg, #f3f7fc)",
              backgroundImage:
                "radial-gradient(ellipse 110% 28% at 12% 35%, var(--hero-clientes-radial-stop, white) 0%, var(--hero-clientes-bg, #f3f7fc) 100%)",
            }}
          />

          {/* Glows / Elipses */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: "100%",
              height: "38%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 100% 100% at 50% 0%, var(--hero-clientes-glow-1, rgba(190, 227, 255, 0.6)) 0%, transparent 100%)",
              filter: "blur(80px)",
            }}
          />

          <div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: "195px",
              height: "195px",
              borderRadius: "9999px",
              background:
                "var(--hero-clientes-glow-2, rgba(107, 215, 255, 0.5))",
              filter: "blur(100px)",
            }}
          />

          <div
            className="absolute left-1/2"
            style={{
              top: "550px",
              transform: "translate(-50%, -50%)",
              width: "449px",
              height: "449px",
              borderRadius: "9999px",
              background:
                "var(--hero-clientes-glow-3, rgba(138, 237, 255, 0.2))",
              filter: "blur(100px)",
            }}
          />

          <div
            className="absolute left-1/2"
            style={{
              top: "550px",
              transform: "translate(-50%, -50%)",
              width: "449px",
              height: "449px",
              borderRadius: "9999px",
              background:
                "var(--hero-clientes-glow-white, rgba(255, 255, 255, 0.5))",
              filter: "blur(10px)",
            }}
          />

          {/* Arcos SVG */}
          <svg
            className="pointer-events-none absolute inset-0 h-auto w-full overflow-visible"
            viewBox="0 0 1280 750"
            preserveAspectRatio="xMidYMin meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="grad-arco1"
                x1="640"
                y1="-528"
                x2="640"
                y2="128"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="91.8275%"
                  stopColor="var(--hero-clientes-arc, #d2e7f9)"
                />
                <stop
                  offset="100%"
                  stopColor="var(--hero-clientes-radial-stop, white)"
                />
              </linearGradient>
              <linearGradient
                id="grad-arco2"
                x1="656.5"
                y1="-754"
                x2="656.5"
                y2="712"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="91.8275%"
                  stopColor="var(--hero-clientes-arc, #d2e7f9)"
                />
                <stop
                  offset="100%"
                  stopColor="var(--hero-clientes-radial-stop, white)"
                />
              </linearGradient>
            </defs>

            <path
              d="M640 -525.5C816.418 -525.5 976.012 -488.847 1091.41 -429.706C1206.94 -370.497 1277.5 -289.15 1277.5 -200C1277.5 -110.85 1206.94 -29.5026 1091.41 29.7061C976.012 88.8468 816.418 125.5 640 125.5C463.582 125.5 303.988 88.8468 188.592 29.7061C73.0628 -29.5026 2.5 -110.85 2.5 -200C2.5 -289.15 73.0628 -370.497 188.592 -429.706C303.988 -488.847 463.582 -525.5 640 -525.5Z"
              stroke="url(#grad-arco1)"
              strokeWidth="5"
            />
            <path
              d="M656.5 -751.5C1157.4 -751.5 1562.5 -423.97 1562.5 -21C1562.5 381.97 1157.4 709.5 656.5 709.5C155.602 709.5 -249.5 381.97 -249.5 -21C-249.5 -423.97 155.602 -751.5 656.5 -751.5Z"
              stroke="url(#grad-arco2)"
              strokeWidth="5"
            />

            <foreignObject x="623.5" y="111" width="33" height="33">
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--hero-clientes-dot, white)",
                }}
              />
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* Título y descripción */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
          Testimonios
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold light-text-gradient mb-4 pb-2.5 inline-block">
          iDrix Technology
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Explora cómo nuestra empresa tecnológica ha impactado positivamente
          las vidas de nuestros usuarios a través de sus testimonios.
        </p>
      </div>

      {/* Empuja las cards hacia abajo */}
      <div className="flex-1" />

      {/* Cards de Testimonios */}
      <div className="relative z-10 w-full mt-8">
        <Testimonios />
      </div>
    </section>
  );
}
