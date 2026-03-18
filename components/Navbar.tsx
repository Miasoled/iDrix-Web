"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center mt-1">
       <nav className="fixed mt-3 flex w-full max-w-[1120px] items-center justify-between rounded-2xl border border-black/[0.06] bg-white/60 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-[40px] backdrop-saturate-[180%] transition-all dark:border-white/[0.12] dark:bg-white/[0.05] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-[2px] opacity-0 dark:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent blur-[3px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 dark:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent"></div>
      </div>
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 blur-xl dark:opacity-50">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-sky-400/30 to-sky-500/20"></div>
      </div>
      <div className="relative z-10 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap h-4 w-4 fill-primary-foreground text-primary-foreground"
            aria-hidden="true"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
        </div>
        <span className="text-lg font-semibold text-foreground dark:text-white dark:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_24px_rgba(28,126,201,0.3)]">
          iDrix
        </span>
      </div>
      <ul className="relative z-10 hidden items-center gap-1 md:flex">
        <li className="relative">
          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]">
            Inicio
          </button>
        </li>
        <li className="relative">
          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]">
            Nosotros
          </button>
        </li>
        <li className="relative">
          <button onClick={() => setOpen(!open)} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]">
            Servicios
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down h-3.5 w-3.5 opacity-60 transition-transform dark:opacity-80"
              aria-hidden="true"
            > 
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          {open && (
            <div className="fixed top-10 left-0 w-[800px] bg-white shadow-xl rounded-2xl p-6 z-50 flex justify-center mt-1">
              
                
                <div className="grid grid-cols-4 gap-y-6 text-sm text-gray-700 [&>p]:hover:bg-blue-500 rounded-2xl [&>p]:cursor-pointer">
                  
                  <p>Desarrollo de Software</p>
                  <p>Desarrollo de Aplicaciones Móviles</p>
                  <p>Diseño de Sitios Web</p>
                  <p>ERP</p>

                  <p>Geolocalización para vendedores</p>
                  <p>Facturación Electrónica</p>
                  <p>Computación en la Nube</p>
                  <p>Soporte Técnico</p>

                  <p>Redes Informáticas</p>
                  <p>Seguridad Informática</p>
                  <p>Inteligencia Artificial</p>
                  <p>Machine Learning</p>

                  <p>Peritaje Informático</p>
                  <p>Automatizaciones</p>

                </div>

            </div>

          )}
        </li>
        <li className="relative">
          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]">
            Portafolio
          </button>
        </li>
        <li className="relative">
          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]">
            Blogs
          </button>
        </li>
        <li className="relative">
          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground dark:text-white/90 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)] dark:hover:text-white dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(28,126,201,0.25)]">
            Contáctanos
          </button>
        </li>
      </ul>
      <div className="relative z-10 flex items-center gap-2">
        <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon"
            aria-hidden="true"
          >
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
          </svg>
          <span className="sr-only">Toggle theme</span>
        </button>
        <button className="rounded-lg bg-[hsl(207,76%,45%)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[hsl(207,76%,40%)] shadow-md hover:shadow-lg dark:shadow-[0_0_24px_-6px_rgba(28,126,201,0.6)] dark:hover:shadow-[0_0_32px_-4px_rgba(28,126,201,0.8)]">
          Explícanos tu idea
        </button>
      </div>
    </nav>
    </div>
   
  );
}
