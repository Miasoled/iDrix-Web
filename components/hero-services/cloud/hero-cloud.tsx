import Image from "next/image";
import { Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardAction } from "@/components/ui/card";
import { SVGProps } from "react";

export function CloudHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-start pt-28 pb-0 overflow-hidden">
      {/* TITLE */}
      <div className="text-center max-w-3xl px-6">
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Computación en la Nube
        </h1>
        <h2 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight light-text-gradient transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Con Idrix
        </h2>
        <p className="text-muted-foreground mt-6 leading-relaxed">
          La computación en la nube permite acceder y gestionar datos desde
          cualquier lugar y en cualquier momento a través de internet.
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="w-full flex justify-center pr-18 ">
        <CloudImg />
      </div>
    </section>
  );
}

function CloudImg() {
  return (
    <section className="min-h-screen flex-row items-center justify-center">
      <div className="flex items-center gap-0 max-w-5xl w-full">
        {/* ── Círculo con sombra ── */}
        <div className="relative flex-shrink-0">
          {/* Sombra inferior */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1
                w-[650px] h-[20px] rounded-full pointer-events-none"
            style={{
              background: "var(--cloud-glow)",
              filter: "blur(5px)",
              zIndex: 0,
            }}
          />

          {/* Círculo (detrás de la imagen) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[360px] h-[360px] rounded-full"
            style={{
              background: "var(--hero-soft-blue)",
              boxShadow:
                "0 0 60px var(--arch-3), 0 4px 16px var(--arch-2), inset 0 1px 0 rgba(255,255,255,0.8)",
              zIndex: 1,
            }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "var(--hero-core-glow)", opacity: 0.5 }}
            />
          </div>

          {/* Imagen (encima del círculo) */}
          <Image
            src="/img/cloud.png"
            alt="Idrix cloud illustration"
            width={450}
            height={450}
            className="relative ml-22 mb-3 object-contain z-20 pointer-events-none dark:blue-scale"
          />
        </div>

        {/* ── Panel derecho ── */}
        <div className="flex flex-col gap-6">
          {/* Tarjeta */}
          <div
            className="rounded-2xl px-6 py-5 w-55"
            style={{
              background: "var(--info-bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 12px var(--arch-1)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                style={{ color: "var(--ai-icon-color)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-4.58-6.96A4 4 0 003 15z"
                />
              </svg>
              <span
                className="text-sm font-semibold tracking-tight"
                style={{ color: "var(--foreground)" }}
              >
                idrix
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Lleva tu negocio a otro nivel con Idrix
            </p>
          </div>

          {/* Botón */}
          <button
            className="w-55 py-4 rounded-2xl text-sm font-medium tracking-wide
                       transition-all duration-200 active:scale-95 cursor-pointer
                       hover:brightness-110"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(205,90%,60%) 0%, hsl(215,85%,50%) 100%)",
              color: "var(--primary-foreground)",
              boxShadow: "0 4px 20px var(--arch-3), 0 1px 4px var(--arch-2)",
            }}
          >
            Comenzar proyecto
          </button>
        </div>
      </div>
    </section>
  );
}

export function CloudCards() {
  return (
    <section className="min-h-screen  p-10 pt-0 flex flex-col items-center justify-center font-sans">
      {/* Encabezado superior azul */}
      <div className="w-full max-w-5xl mb-8 flex items-center gap-2">
        <div className="h-1 w-8 bg-[var(--ai-icon-color)] rounded-full"></div>
        <span className="text-[var(--ai-icon-color)] font-bold uppercase tracking-wider text-sm">
          Computación en la nube
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Tarjeta Principal (Izquierda) */}
        <div className="h-full">
          <Card className="h-full shadow-lg rounded-2xl bg-card p-6">
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-6 border border-border">
              <CloudIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-bold text-foreground">
                Computación en la nube
              </span>
            </div>

            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-card-foreground leading-tight">
                Computación en la nube como servicio
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Aloja tu infraestructura en data centers de clase mundial como
                Google Cloud, Amazon AWS y Microsoft Azure, garantizando
                seguridad, disponibilidad y alto rendimiento para tus
                aplicaciones.
              </p>
              <div className="flex justify-center">
                {/*ilustración de la nube */}
                <div className="relative w-90 h-70">
                  <Image
                    src="/img/Cloud2.png"
                    alt="Ilustración Cloud"
                    fill
                    className="object-contain dark:blue-scale"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Columna Derecha (Dos tarjetas) */}
        <div className="flex flex-col gap-6 ">
          {/* Tarjeta Flexibilidad */}
          <Card className="shadow-lg rounded-2xl bg-card p-6 flex-grow">
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-6 border border-border">
              <CloudIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-bold text-foreground">
                Flexibilidad
              </span>
            </div>
            <CardContent className="p-0">
              <p className="text-muted-foreground leading-relaxed">
                Adapta fácilmente los recursos de tu sistema según las
                necesidades de tu empresa.
              </p>
            </CardContent>
          </Card>

          {/* Tarjeta Transformación */}
          <Card className="shadow-lg rounded-2xl bg-card p-6 flex-grow">
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-6 border border-border">
              <CloudIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-bold text-foreground uppercase">
                transformación
              </span>
            </div>
            <CardContent className="p-0">
              <p className="text-muted-foreground leading-relaxed">
                La transformación digital permite reducir costos operativos y
                ofrecer experiencias más rápidas y simples a los clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  );
}
