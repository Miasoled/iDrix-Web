// PartnersCards.tsx
// Requiere: React + Tailwind CSS

import React from "react";

// ─────────────────────────────────────────────
// ARRAY DE PARTNERS
// color: color sólido del degradado superior de la card
// logo: nombre del archivo de imagen (sin extensión, asumiendo .png)
// ─────────────────────────────────────────────
const partners = [
  {
    id: 1,
    nombre: "Empresa y operador de centro de datos",
    descripcion:
      "Dedicada a la producción y distribución de alimentos en conserva",
    logo: "hetzner",
    color: "#FF0000",
  },
  {
    id: 2,
    nombre: "Marketing digital",
    descripcion: "Agencia de marketing digital en Quito, Guayaquil Ecuador",
    logo: "monkey",
    color: "#5333F5",
  },
  {
    id: 3,
    nombre: "Cloud computing",
    descripcion:
      "Amazon Web Services es una colección de servicios de computación en la nube pública",
    logo: "aws",
    color: "#FFC87F",
    largo: "160px",
    Ancho: "160px",
  },
  {
    id: 4,
    nombre: "Cloud VPS",
    descripcion:
      "Soluciones de alojamiento web, incluyendo hosting compartido, servidores virtuales privados (VPS) y servidores dedicados",
    logo: "contabo",
    color: "#00AAEB",
  },
  {
    id: 5,
    nombre: "Movilidad y transporte",
    descripcion:
      "Servicios bajo demanda, con un enfoque en la movilidad y el transporte",
    logo: "todo",
    color: "#FF81A4",
  },

  {
    id: 6,
    nombre: "Transporte de bienes",
    descripcion:
      "Empresa ecuatoriana dedicada a brindar servicios de transporte de bienes por carretera",
    logo: "espe",
    color: "#81F779",
  },
  {
    id: 7,
    nombre: "Instituto tecnológico superior",
    descripcion: "Garantiza una educación superior de calidad",
    logo: "japon",
    color: "#FFD277",
  },
  {
    id: 8,
    nombre: "Gestor de eventos",
    descripcion:
      "Solucion integral para la gestión de eventos, ya sean presenciales o virtuales",
    logo: "tribcon",
    color: "#8F94FA",
  },
];

// ─────────────────────────────────────────────
// INTERFACE
// ─────────────────────────────────────────────
interface Partner {
  id: number;
  nombre: string;
  descripcion: string;
  logo: string;
  color: string;
  largo?: string;
  Ancho?: string;
}

// ─────────────────────────────────────────────
// COMPONENTE CARD
// ─────────────────────────────────────────────
function PartnerCard({ partner }: { partner: Partner }) {
  const logoSrc = `/img/partners/${partner.logo}.png`;

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden bg-card justify-between"
      style={{
        boxShadow: "0 2px 16px 0 rgba(30,60,120,0.10)",
        border: "5px solid var(--border-color, rgba(255,255,255,0.5))",
      }}
    >
      {/* ── Zona superior: degradado de color → transparente ── */}
      <div
        className="relative flex flex-col items-center justify-center pt-6 pb-2 px-4"
        style={{
          background: `linear-gradient(to bottom, ${partner.color}55 0%, ${partner.color}00 100%)`,
          minHeight: "160px",
        }}
      >
        {/* Logo real */}
        <img
          src={logoSrc}
          alt={`Logo ${partner.nombre}`}
          className="relative z-10 object-contain"
          style={{
            width: partner.Ancho || "230px",
            height: partner.largo || "130px",
            borderRadius: "20px",
          }}
        />
        {/* Reflejo (posicionado absolutamente detrás) */}
        <div
          className="absolute flex justify-center pointer-events-none"
          style={{
            bottom: "0",
            left: "0",
            right: "0",
            transform: "translateY(80%)",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            style={{
              width: partner.Ancho || "230px",
              height: partner.largo || "130px",
              borderRadius: "20px",
              opacity: 0.3,
              mask: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              WebkitMask:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              transform: "scaleY(-1) rotateX(25deg)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* ── Zona inferior: texto ── */}
      <div className="flex flex-col gap-1 px-4 py-3 m-5">
        <p className="font-semibold leading-snug mb-3">{partner.nombre}</p>
        <p className="text-sm font-semi-bold">{partner.descripcion}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// GRID DE CARDS
// ─────────────────────────────────────────────
export default function PartnersCards() {
  return (
    <section className="w-full px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
}
