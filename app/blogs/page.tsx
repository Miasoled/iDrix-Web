"use client";

import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroBlog } from "@/components/hero-services/blogs/hero-blog";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Blog() {
  return (
    <main className="min-h-screen" style={{ background: "var(--hero-soft-blue) " }}>
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <HeroBlog />
      </ScrollReveal>
      <ScrollReveal direction="fadeUp">
        <Investigacion />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}

const articulos = [
  {
    fecha: "21 Ene 2025",
    categoria: "OFIMÁTICA",
    titulo: "Herramientas de Ofimática Moderna",
    descripcion:
      "La ofimática es el conjunto de herramientas que optimizan los procesos administrativos mediante el uso de software especializado...",
    imagen: "/img/blogs/Herramienta-O.png",
  },
  {
    fecha: "14 Ene 2025",
    categoria: "CLOUD",
    titulo: "La Nube y su Potencial de Almacenamiento",
    descripcion:
      "La nube permite almacenar, procesar y acceder a datos desde cualquier lugar del mundo de forma segura y eficiente...",
    imagen: "/img/blogs/Nube-M.png",
  },
  {
    fecha: "08 Ene 2025",
    categoria: "SEGURIDAD",
    titulo: "Phishing: Cómo Protegerse en la Red",
    descripcion:
      "El phishing es un tipo de ataque informático que busca robar información sensible a través de correos engañosos...",
    imagen: "/img/blogs/Phishing.png",
  },
  {
    fecha: "30 Jul 2023",
    categoria: "LEGALTECH",
    titulo: "Peritaje Informático Forense en Ecuador",
    descripcion:
      "El peritaje informático se utiliza en casos de fraude para recuperar evidencia digital crucial en procesos legales...",
    imagen: "/img/blogs/Peritaje.png",
  },
  {
    fecha: "15 Jul 2023",
    categoria: "LEGALTECH",
    titulo: "Evolución del LegalTech",
    descripcion:
      "El LegalTech mejora y agiliza los servcios legales mediante la automatización y el uso de inteligencia de datos... ",
    imagen: "/img/blogs/Evolucion.png",
  },
  {
    fecha: "12 Jul 2023",
    categoria: "LEGALTECH",
    titulo: "Fundamentos del Derecho Digital",
    descripcion:
      "El derecho digital regula y protege los derechos de los usuarios en entornos virtuales y plataformas digitales...",
    imagen: "/img/blogs/Fundamentos.png",
  },
  {
    fecha: "03 Jul 2023",
    categoria: "ioT",
    titulo: "ioT y su impacto en la Sociedad",
    descripcion:
      "El internet de las Cosas permite conexión entre dispositivos cotidianos y la red para generar datos útiles...",
    imagen: "/img/blogs/loT.png",
  },
  {
    fecha: "18 Jun 2023",
    categoria: "DIGITAL",
    titulo: "Transformación Digital 2023",
    descripcion:
      "La digitalización permite a las empresas optimizar sus flujos de trabajo y alcanzar nuevos mercados globales...",
    imagen: "/img/blogs/Transformacion.png",
  },
  {
    fecha: "12 Jun 2023",
    categoria: "IA",
    titulo: "Inteligencia Artificial y el Futuro",
    descripcion:
      "Avances en la ointeligencia artificial están revolucionando industrias enteras desde la salud hasta las finanzas...",
    imagen: "/img/blogs/IA.png",
  },
];

const recientes = articulos.slice(0, 2);

const categorias = [
  { nombre: "Seguridad Informática", count: 12 },
  { nombre: "IA & Automatización", count: 8 },
  { nombre: "LegalTech & Derecho", count: 15 },
  { nombre: "Infraestructura Cloud", count: 10 },
];

const badgeColors: Record<string, string> = {
  OFIMÁTICA: "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]",
  CLOUD: "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]",
  SEGURIDAD: "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]",
  LEGAL: "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]",
  IA: "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)] dark:bg-[hsl(207,76%,15%)]",
};

export function Investigacion() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-[hsl(210,40%,96%)] dark:bg-[hsl(215,50%,8%)]">
      <div className="max-w-6xl mx-auto">
        {/* Etiqueta */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
          <span className="text-xs font-bold tracking-widest uppercase text-[hsl(207,76%,45%)]">
            Innovación Constante
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
          {/* MAIN */}
          <div>
            {/* Buscador */}
            <div className="relative mb-8">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                className="w-full max-w-sm rounded-xl pl-10 pr-4 py-3 text-sm bg-white border border-[hsl(210,20%,90%)] text-foreground placeholder:text-muted-foreground outline-none focus:border-[hsl(207,76%,45%)] transition dark:bg-white/5 dark:border-white/10"
                placeholder="Buscar artículos..."
              />
            </div>

            {/* Grid artículos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articulos.map((a) => (
                <div
                  key={a.titulo}
                  className="rounded-2xl overflow-hidden bg-white border border-[hsl(210,20%,90%)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:bg-white/5 dark:border-white/10 dark:hover:border-[hsl(207,76%,45%)] flex flex-col"
                >
                  {/* Imagen */}
                  <div className="relative w-full h-44">
                    <Image src={a.imagen} alt={a.titulo} fill className="object-cover" />
                  </div>

                  {/* Contenido */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{a.fecha}</span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeColors[a.categoria] ?? "text-[hsl(207,76%,45%)] bg-[hsl(207,76%,93%)]"}`}
                      >
                        {a.categoria}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground leading-snug">{a.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {a.descripcion}
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm font-medium text-[hsl(207,76%,45%)] hover:gap-2 transition-all mt-auto"
                    >
                      Leer más <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-6">
            {/* Artículos recientes */}
            <div className="rounded-2xl p-5 bg-white border border-[hsl(210,20%,90%)] shadow-sm dark:bg-white/5 dark:border-white/10">
              <div className="flex items-center gap-2 border-l-4 border-[hsl(207,76%,45%)] pl-3 mb-5">
                <h3 className="text-base font-bold text-foreground">Artículos Recientes</h3>
              </div>
              <div className="flex flex-col gap-4">
                {recientes.map((r) => (
                  <div key={r.titulo} className="flex items-start gap-3">
                    <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image src={r.imagen} alt={r.titulo} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(207,76%,45%)] mb-0.5">{r.fecha}</p>
                      <p className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                        {r.titulo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categorías */}
            <div className="rounded-2xl p-5 bg-white border border-[hsl(210,20%,90%)] shadow-sm dark:bg-white/5 dark:border-white/10">
              <div className="flex items-center gap-2 border-l-4 border-[hsl(207,76%,45%)] pl-3 mb-5">
                <h3 className="text-base font-bold text-foreground">Categorías</h3>
              </div>
              <div className="flex flex-col gap-3">
                {categorias.map((c) => (
                  <div key={c.nombre} className="flex items-center justify-between">
                    <span className="text-sm text-foreground hover:text-[hsl(207,76%,45%)] cursor-pointer transition-colors">
                      {c.nombre}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{c.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
