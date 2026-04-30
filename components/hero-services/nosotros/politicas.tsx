"use client";

import { useEffect, useRef } from "react";
import {
  FileText,
  AlignLeft,
  Lock,
  Cookie,
  Scale,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

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
    className={`spotlight-card rounded-2xl p-6 border ${className}`}
  >
    {children}
  </div>
);

const Badge = ({
  icon: Icon,
  label,
  dark,
}: {
  icon: React.ElementType;
  label: string;
  dark?: boolean;
}) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border
    ${
      dark
        ? "border-white/20 bg-white/10 text-white/80"
        : "border-[hsl(207,76%,45%)]/20 bg-[hsl(207,76%,45%)]/5 text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,65%)]"
    }`}
  >
    <Icon size={12} strokeWidth={1.8} />
    {label}
  </span>
);

const policies = [
  {
    icon: Lock,
    badge: "Privacidad",
    title: "Políticas de Privacidad",
    desc: "Garantizamos la confidencialidad y protección de tus datos personales conforme a las normativas de Ecuador y estándares internacionales.",
    href: "/politicas/privacidad",
  },
  {
    icon: Cookie,
    badge: "Cookies",
    title: "Políticas de Cookies",
    desc: "Este sitio utiliza cookies para mejorar tu experiencia, almacenando información anónima como preferencias y datos de navegación.",
    href: "/politicas/cookies",
  },
  {
    icon: Scale,
    badge: "Propiedad intelectual",
    title: "Políticas de Propiedad Intelectual",
    desc: "Todo el software desarrollado a medida es propiedad exclusiva del cliente una vez completado el proyecto y realizados los pagos.",
    href: "/politicas/intelectual",
  },
];

export function Politicas() {
  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-16 bg-[hsl(210,40%,96%)] dark:bg-[hsl(215,50%,8%)]">
      <div className="mb-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,60%)] mb-1">
          Marco legal y ético
        </p>
        <h2 className="text-3xl font-black text-foreground tracking-wide uppercase mb-2">
          Misión & Visión
        </h2>
        <div
          className="h-[3px] w-64 rounded-full"
          style={{
            background:
              "linear-gradient(to right, hsl(207,76%,45%), transparent)",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <Card className="md:col-span-3 bg-[hsl(215,60%,22%)] dark:bg-[hsl(215,55%,14%)] border-[hsl(215,60%,30%)] dark:border-[hsl(207,68%,60%)]/30 relative">
          <div className="pointer-events-none absolute right-8 bottom-4 opacity-10">
            <FileText size={120} strokeWidth={0.8} className="text-white" />
          </div>
          <Badge icon={FileText} label="Términos y Condiciones" dark />
          <h3 className="mt-4 mb-3 text-lg font-bold text-white">
            Uso del contenido y servicios de iDrix Technology S.A.
          </h3>
          <p className="text-sm leading-relaxed text-white/65 max-w-sm">
            Estos términos regulan el uso del contenido y servicios de IDRIX
            TECHNOLOGY S.A. Al acceder a nuestra web, el usuario acepta las
            condiciones para utilizar nuestros servicios.
          </p>
        </Card>

        <Card className="md:col-span-2 bg-white dark:bg-white/5 border-border dark:border-[hsl(207,68%,60%)]/30">
          <Badge icon={AlignLeft} label="Todo en un solo lugar" />
          <p className="mt-4 mb-6 text-sm leading-relaxed text-muted-foreground">
            Nuestras políticas garantizan transparencia y confianza en cada
            etapa de nuestros servicios.
          </p>
          <div className="border-t border-border dark:border-white/10 pt-5 flex items-center gap-4">
            <span className="text-4xl font-black text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,65%)]">
              100 %
            </span>
            <div className="w-px h-8 bg-border dark:bg-white/10" />
            <span className="text-2xl font-bold text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,65%)]">
              Confiable
            </span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {policies.map(({ icon, badge, title, desc, href }) => (
          <Card
            key={badge}
            className="bg-white dark:bg-white/5 border-border dark:border-[hsl(207,68%,60%)]/30 flex flex-col gap-3"
          >
            <Badge icon={icon} label={badge} />
            <h4 className="text-base font-bold text-foreground">{title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground flex-1">
              {desc}
            </p>
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(207,76%,45%)] dark:text-[hsl(207,68%,65%)] hover:gap-3 transition-all w-fit mt-1"
            >
              Ver política <ArrowRight size={15} />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
