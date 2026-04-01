"use client";

import { useEffect, useRef } from "react";
import { Heart, BookOpen, Shield, BarChart2, AlignLeft } from "lucide-react";

function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseenter", () => el.style.setProperty("--so", "1"));
    el.addEventListener("mouseleave", () => el.style.setProperty("--so", "0"));
    return () => el.removeEventListener("mousemove", move);
  }, []);
  return ref;
}

const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    ref={useSpotlight()}
    className={`spotlight-card rounded-2xl p-6 border flex flex-col gap-3 ${className}`}
  >
    {children}
  </div>
);

const IconBadge = ({
  icon: Icon,
  dark,
}: {
  icon: React.ElementType;
  dark?: boolean;
}) => (
  <div
    className={`w-10 h-10 rounded-xl flex items-center justify-center
    ${dark ? "bg-white/15" : "bg-[hsl(207,76%,45%)]/10 dark:bg-[hsl(207,68%,60%)]/15"}`}
  >
    <Icon
      size={18}
      strokeWidth={1.5}
      className={
        dark
          ? "text-white/80"
          : "text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,65%)]"
      }
    />
  </div>
);

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    num: 1,
    desc: "Actitud de nuestro personal que se refleja en el cumplimiento de los protocolos, en la lealtad, responsabilidad y compromiso institucional, generando valor en beneficio de nuestros clientes.",
  },
  {
    icon: BarChart2,
    title: "Productividad",
    num: 4,
    desc: "Con las nuevas tecnologías de la información «Tics» se opta por la mejora y desarrollo de nuevos productos y/o servicios que eleven la productividad, atendiendo eficazmente requerimientos y necesidades de nuestros clientes.",
  },
  {
    icon: Shield,
    title: "Honestidad",
    num: 3,
    desc: "Virtud de nuestro personal de actuar con honestidad y transparencia, orientados a la eficiencia y optimización de los recursos institucionales.",
  },
  {
    icon: AlignLeft,
    title: "Confiabilidad",
    num: 5,
    desc: "Brindar la seguridad de la información, transparencia y calidad en los productos y servicios ofertados, manteniendo siempre la confianza de nuestros clientes.",
  },
];

export function Valores() {
  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-16 bg-white dark:bg-[hsl(215,50%,8%)] transition-colors duration-500">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,60%)] mb-1">
          Reflejando
        </p>
        <h2 className="text-4xl font-black tracking-tight text-foreground mb-2">
          NUESTROS <span className="light-text-gradient">VALORES</span>
        </h2>
        <div
          className="h-[3px] w-64 rounded-full"
          style={{
            background:
              "linear-gradient(to right, hsl(207,76%,45%), transparent)",
          }}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Col 1: Compromiso + Productividad */}
        <div className="flex flex-col gap-4">
          {values
            .filter((v) => v.num === 1 || v.num === 4)
            .map(({ icon, title, num, desc }) => (
              <Card
                key={num}
                className="bg-white dark:bg-white/5 border-border dark:border-[hsl(207,68%,60%)]/20 flex-1 relative"
              >
                <IconBadge icon={icon} />
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {desc}
                </p>
                <span className="text-4xl font-black text-border dark:text-white/10 self-end leading-none">
                  {num}
                </span>
              </Card>
            ))}
        </div>

        {/* Col 2: Conocimiento (featured) */}
        <Card className="row-span-2 bg-[hsl(215,60%,22%)] dark:bg-[hsl(215,55%,14%)] border-[hsl(215,60%,30%)] dark:border-[hsl(207,68%,60%)]/30 relative justify-between">
          <div>
            <IconBadge icon={BookOpen} dark />
            <h3 className="mt-4 text-2xl font-bold text-white">Conocimiento</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Pleno conocimiento de las tecnologías actuales, creando una
              cultura de aprendizaje de las tecnologías y de nuestros clientes,
              teniendo personal calificado y proactivo que contribuya a la
              mejora del servicio.
            </p>
          </div>
          <div>
            <div className="border-t border-white/15 pt-4 flex items-end gap-4">
              {[
                ["14+", "tecnologías"],
                ["7+", "años"],
                ["100+", "proyectos"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-xl font-black text-white">{num}</p>
                  <p className="text-xs text-white/50">{label}</p>
                </div>
              ))}
            </div>
            <span className="absolute bottom-5 right-6 text-4xl font-black text-white/10 leading-none">
              2
            </span>
          </div>
        </Card>

        {/* Col 3: Honestidad + Confiabilidad */}
        <div className="flex flex-col gap-4">
          {values
            .filter((v) => v.num === 3 || v.num === 5)
            .map(({ icon, title, num, desc }) => (
              <Card
                key={num}
                className="bg-white dark:bg-white/5 border-border dark:border-[hsl(207,68%,60%)]/20 flex-1 relative"
              >
                <IconBadge icon={icon} />
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {desc}
                </p>
                <span className="text-4xl font-black text-border dark:text-white/10 self-end leading-none">
                  {num}
                </span>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
