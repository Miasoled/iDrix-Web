import PartnerCard from "./cards-partners";
export function HeroPartners() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32">
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          {/* 1. Fondo base #F3F7FC + radial blanco (paint0) */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "var(--hero-clientes-bg, #f3f7fc)",
              backgroundImage:
                "radial-gradient(ellipse 110% 28% at 12% 35%, var(--hero-clientes-radial-stop, white) 0%, var(--hero-clientes-bg, #f3f7fc) 100%)",
            }}
          />

          {/* 2a. Elipse blur grande superior — #BEE3FF 60% — blur 80px */}
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

          {/* 2b. Círculo blur pequeño #6BD7FF 50% — blur 100px — cy≈127px */}
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

          {/* 2c. Círculo blur grande #8AEDFF 20% — blur 100px — cy≈550px */}
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

          {/* 2d. Círculo blur blanco 50% — blur 10px — mismo centro */}
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

          {/* 3. Arcos SVG con stroke-gradient (idénticos al SVG original) */}
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
                  style={{ stopColor: "var(--hero-clientes-arc, #d2e7f9)" }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "var(--hero-clientes-radial-stop, white)",
                  }}
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
                  style={{ stopColor: "var(--hero-clientes-arc, #d2e7f9)" }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "var(--hero-clientes-radial-stop, white)",
                  }}
                />
              </linearGradient>
            </defs>
            {/* Arco interior */}
            <path
              d="M640 -525.5C816.418 -525.5 976.012 -488.847 1091.41 -429.706C1206.94 -370.497 1277.5 -289.15 1277.5 -200C1277.5 -110.85 1206.94 -29.5026 1091.41 29.7061C976.012 88.8468 816.418 125.5 640 125.5C463.582 125.5 303.988 88.8468 188.592 29.7061C73.0628 -29.5026 2.5 -110.85 2.5 -200C2.5 -289.15 73.0628 -370.497 188.592 -429.706C303.988 -488.847 463.582 -525.5 640 -525.5Z"
              stroke="url(#grad-arco1)"
              strokeWidth="5"
            />
            {/* Arco exterior */}
            <path
              d="M656.5 -751.5C1157.4 -751.5 1562.5 -423.97 1562.5 -21C1562.5 381.97 1157.4 709.5 656.5 709.5C155.602 709.5 -249.5 381.97 -249.5 -21C-249.5 -423.97 155.602 -751.5 656.5 -751.5Z"
              stroke="url(#grad-arco2)"
              strokeWidth="5"
            />
            {/* 4. Punto sólido (usando foreignObject para soportar el gradiente CSS) */}
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

      <div className="flex flex-col mt-8 px-6 z-10 text-center">
        <h1 className="mb-2 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-primary transition-all md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Nuestros Partners
        </h1>
        <h2 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight light-text-gradient transition-all md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          iDrix Technology
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-balance text-base leading-relaxed text-muted-foreground transition-colors md:text-lg">
          Bienvenido a iDrix Technology S.A, tu socio confiable en el desarrollo
          de software. Nos enorgullece presentarte a nuestros clientes, quienes
          confían en nosotros para impulsar su éxito en el mundo digital.
        </p>
      </div>
      <div>
        <PartnerCard />
      </div>
    </section>
  );
}
