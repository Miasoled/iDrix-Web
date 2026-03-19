"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Zap } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Link from "next/link";

const navItems = [
  { label: "Inicio", hasDropdown: false },
  { label: "Nosotros", hasDropdown: false },
  { label: "Servicios", hasDropdown: true },
  { label: "Portafolio", hasDropdown: false },
  { label: "Blogs", hasDropdown: false },
  { label: "Contáctanos", hasDropdown: false },
];

const serviciosDropdown = [
  {
    label: "Desarrollo de Software",
    href: "/servicios/desarrollo-software",
  },
  {
    label: "Desarrollo de Aplicaciones Móviles",
    href: "/servicios/desarrollo-movil",
  },
  { label: "Diseño de Sitios Web", href: "/servicios/disenio-web" },
  { label: "ERP", href: "/servicios/erp" },
  {
    label: "Geolocalizacion para vendedores",
    href: "/servicios/geocalizacion",
  },
  { label: "Facturación Electrónica", href: "" },
  { label: "Computación en la Nube", href: "" },
  { label: "Soporte Técnico", href: "" },
  { label: "Redes Informáticas", href: "" },
  { label: "Seguridad Informática", href: "" },
  { label: "Inteligencia Artificial", href: "" },
  { label: "Machine Learning", href: "" },
  { label: "Peritaje Informático", href: "" },
  { label: "tomatizaciones", href: "" },
];

export function Navbar() {
  const [showServiciosDropdown, setShowServiciosDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowServiciosDropdown(false);
      }
    }

    if (showServiciosDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServiciosDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-[env(safe-area-inset-top,0px)]">
      {/* Safe area background - matches hero on iPhones with notch/dynamic island */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[env(safe-area-inset-top,0px)] transition-colors duration-500"
        style={{ background: "var(--hero-bg, transparent)" }}
      />
      <nav className="relative mt-3 flex w-full max-w-[1120px] items-center justify-between rounded-2xl border border-black/[0.06] bg-white/60 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-[40px] backdrop-saturate-[180%] transition-all dark:border-white/[0.12] dark:bg-white/[0.05] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)]">
        {/* Top glow line - Apple-style */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-[2px] opacity-0 dark:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent blur-[3px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Inner glow for depth */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 dark:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
        </div>

        {/* Subtle outer glow */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 blur-xl dark:opacity-50">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-sky-400/30 to-sky-500/20" />
        </div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
            <Zap className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground dark:text-white dark:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_24px_rgba(28,126,201,0.3)]">
            iDrix
          </span>
        </div>

        {/* Nav Items */}
        <ul className="relative z-10 hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              ref={item.label === "Servicios" ? dropdownRef : undefined}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]"
                onClick={() => {
                  if (item.label === "Servicios")
                    setShowServiciosDropdown(!showServiciosDropdown);
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 opacity-60 transition-transform dark:opacity-80 ${
                      item.label === "Servicios" && showServiciosDropdown
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </button>

              {/* Servicios Dropdown - Positioned under Servicios */}
              {item.label === "Servicios" && showServiciosDropdown && (
                <div className="absolute left-0 top-full mt-2 w-[880px] -translate-x-[35%] rounded-xl border border-border bg-gradient-to-b from-card to-background p-6 shadow-xl dark:from-card dark:to-card/95">
                  <div className="relative z-10 grid grid-cols-4 gap-x-6 gap-y-2">
                    {serviciosDropdown.map((servicio) => (
                      <Link
                        key={servicio.href}
                        href={servicio.href}
                        onClick={() => setShowServiciosDropdown(false)}
                        className="rounded-md px-3 py-2.5 text-left text-sm text-foreground/90 transition-colors hover:bg-accent hover:text-accent-foreground dark:text-white/90 dark:hover:bg-primary/20 dark:hover:text-white"
                      >
                        {servicio.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Buttons & Theme Toggle */}
        <div className="relative z-10 flex items-center gap-2">
          <AnimatedThemeToggler className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground" />
          <button className="rounded-lg bg-[hsl(207,76%,45%)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[hsl(207,76%,40%)] shadow-md hover:shadow-lg dark:shadow-[0_0_24px_-6px_rgba(28,126,201,0.6)] dark:hover:shadow-[0_0_32px_-4px_rgba(28,126,201,0.8)]">
            Explícanos tu idea
          </button>
        </div>
      </nav>
    </header>
  );
}
