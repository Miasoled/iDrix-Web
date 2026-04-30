"use client";

import { Cookie, Link2, Globe, Wifi } from "lucide-react";

const cookieFeatures = [
  { icon: Globe, label: "Preferencias de usuario" },
  { icon: Wifi, label: "Dirección IP anónima" },
];

export function CookiesSection() {
  return (
    <section
      className="w-full py-20 px-6 md:px-16"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top accent gradient strip */}
          <div
            className="absolute top-0 inset-x-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, var(--ai-icon-color) 0%, transparent 100%)",
            }}
          />

          <div className="flex flex-col lg:flex-row gap-0">
            {/* Left: text content */}
            <div className="flex-1 p-8 md:p-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <Cookie
                    size={20}
                    strokeWidth={1.8}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--ai-icon-color)" }}
                  >
                    Artículo 3
                  </p>
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    Políticas de Cookies
                  </h3>
                </div>
              </div>

              {/* Body paragraphs */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Este sitio web utiliza cookies y otros mecanismos similares.
                  Una cookie es un pequeño fichero de texto que se almacena en
                  su navegador cuando visita cualquier página web. Su utilidad
                  es que la web sea capaz de recordar su visita cuando vuelva a
                  navegar por esa página.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Las cookies almacenan datos como información de ingreso,
                  preferencias del usuario, fecha y hora de acceso, sitios
                  visitados y dirección IP. Esta información es{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    anónima
                  </span>{" "}
                  y solo se utilizará para mejorar el sitio web.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Las cookies facilitan la navegación y la hacen más amigable;
                  sin embargo, el usuario puede desactivarlas en cualquier
                  momento desde su navegador, en el entendido de que esto puede
                  afectar algunas funciones del sitio web.
                </p>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-4 px-5 mt-6">
                {cookieFeatures.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium border"
                    style={{
                      background: "var(--ai-icon-bg)",
                      borderColor: "var(--hero-clientes-arc)",
                      color: "var(--ai-icon-color)",
                    }}
                  >
                    <Icon size={12} strokeWidth={2} />
                    {label}
                  </div>
                ))}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium border"
                  style={{
                    background: "var(--ai-icon-bg)",
                    borderColor: "var(--hero-clientes-arc)",
                    color: "var(--ai-icon-color)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--ai-icon-color)" }}
                  />
                  Datos de ingreso
                </div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium border"
                  style={{
                    background: "var(--ai-icon-bg)",
                    borderColor: "var(--hero-clientes-arc)",
                    color: "var(--ai-icon-color)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--ai-icon-color)" }}
                  />
                  Sitios visitados
                </div>
              </div>
            </div>

            {/* Right: visual panel */}
            <div
              className="hidden lg:flex lg:w-64 xl:w-72 shrink-0 flex-col items-center justify-center gap-5 p-8 relative"
              style={{
                borderLeft: "1px solid var(--border)",
                background: "var(--secondary)",
              }}
            >
              {/* Big cookie icon with glow */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute w-28 h-28 rounded-full blur-2xl opacity-40"
                  style={{ background: "var(--ai-icon-color)" }}
                />
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <Cookie
                    size={40}
                    strokeWidth={1.2}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="text-center">
                <p
                  className="text-2xl font-extrabold"
                  style={{ color: "var(--ai-icon-color)" }}
                >
                  100%
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Datos anónimos
                </p>
              </div>

              <div
                className="w-full rounded-xl p-3 text-center text-xs font-medium border"
                style={{
                  background: "var(--ai-icon-bg)",
                  borderColor: "var(--hero-clientes-arc)",
                  color: "var(--muted-foreground)",
                }}
              >
                Puedes desactivarlas desde
                <br />
                <span
                  className="font-semibold"
                  style={{ color: "var(--ai-icon-color)" }}
                >
                  tu navegador
                </span>{" "}
                en cualquier momento
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top accent gradient strip */}
          <div
            className="absolute top-0 inset-x-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, var(--ai-icon-color) 0%, transparent 100%)",
            }}
          />

          <div className="flex flex-col lg:flex-row-reverse gap-0">
            {/* Right (reversed): text content */}
            <div className="flex-1 p-8 md:p-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <Link2
                    size={20}
                    strokeWidth={1.8}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--ai-icon-color)" }}
                  >
                    Artículo 4
                  </p>
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    Políticas de Enlaces
                  </h3>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--muted-foreground)" }}
              >
                En la página web se incluirán enlaces a las redes sociales
                pertenecientes{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  únicamente a IDRIX TECHNOLOGY S.A.
                </span>
              </p>

              {/* Social network tags */}
              <div className="flex flex-wrap gap-2">
                {["Facebook", "Instagram", "LinkedIn", "X / Twitter"].map(
                  (red) => (
                    <span
                      key={red}
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold border"
                      style={{
                        background: "var(--secondary)",
                        borderColor: "var(--border)",
                        color: "var(--foreground)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--ai-icon-color)" }}
                      />
                      {red}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Left (reversed): visual panel */}
            <div
              className="hidden lg:flex lg:w-64 xl:w-72 shrink-0 flex-col items-center justify-center gap-5 p-8 relative"
              style={{
                borderRight: "1px solid var(--border)",
                background: "var(--secondary)",
              }}
            >
              {/* Animated link nodes */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div
                  className="absolute w-24 h-24 rounded-full blur-2xl opacity-30"
                  style={{ background: "var(--ai-icon-color)" }}
                />
                {/* Center node */}
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <Link2
                    size={28}
                    strokeWidth={1.2}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
                {/* Orbit dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-2.5 h-2.5 rounded-full"
                    style={{
                      background: "var(--ai-icon-color)",
                      opacity: 0.4 + (deg / 300) * 0.6,
                      transform: `rotate(${deg}deg) translateX(48px)`,
                    }}
                  />
                ))}
              </div>

              <div className="text-center">
                <p
                  className="text-2xl font-extrabold"
                  style={{ color: "var(--ai-icon-color)" }}
                >
                  Verificados
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Solo enlaces oficiales
                  <br />
                  de IDRIX TECHNOLOGY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
