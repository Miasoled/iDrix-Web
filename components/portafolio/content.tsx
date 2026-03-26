// ClientCards.tsx
// Requiere: React + Tailwind CSS

import { Anchor } from "lucide-react";
import React from "react";

// ─────────────────────────────────────────────
// ARRAY DE CLIENTES
// color: color sólido del degradado superior de la card
// logo: nombre del archivo de imagen (sin extensión, asumiendo .png)
// ─────────────────────────────────────────────
const clientes = [
  {
    id: 1,
    nombre: "Alimentos en conserva",
    descripcion: "Dedicada a la producción y distribución de alimentos en conserva",
    logo: "Isabel",
    color: "#c0392b",
  },
  {
    id: 2,
    nombre: "Materiales de construcción",
    descripcion: "Líder en la distribución de materiales de construcción",
    logo: "construccion",
    color: "#2471a3",
  },
  {
    id: 3,
    nombre: "Soluciones agrícolas",
    descripcion: "Dedicada a la producción y comercialización de productos agrícolas",
    logo: "grilatex",
    color: "#1a5276",
  },
  {
    id: 4,
    nombre: "Fibras Sintéticas",
    descripcion: "Fibras sintéticas, microfibra y resina pat",
    logo: "enkador",
    color: "#1a3a6b",
  },
  {
    id: 5,
    nombre: "Producción de madera",
    descripcion: "Empresa especializada en la compra y producción de diversos tipos de madera",
    logo: "sanfran", // Asumiendo sanfran.png
    color: "#7f8c8d",
    largo: "300px",
    Ancho: "300px",
  },
  {
    id: 6,
    nombre: "Transporte de bienes",
    descripcion:
      "Empresa ecuatoriana dedicada a brindar servicios de transporte de bienes por carretera",
    logo: "transfersal", // Asumiendo transfersal.png
    color: "#e67e22",
  },
  {
    id: 7,
    nombre: "Gimnasio",
    descripcion: "Un gimnasio con máquinas modernas importadas",
    logo: "powerhouse", // Asumiendo powerhouse.png
    color: "#922b21",
  },
  {
    id: 8,
    nombre: "Gestor de eventos",
    descripcion: "Solución integral para la gestión de eventos, ya sean presenciales o virtuales",
    logo: "eventos", // Asumiendo eventos.png
    color: "#8e44ad",
  },
  {
    id: 9,
    nombre: "Soluciones empresariales",
    descripcion: "Servicios en contabilidad, auditoría, tributación y asesorías",
    logo: "ascontri", // Asumiendo ascontri.png
    color: "#d4ac0d",
  },
];

// ─────────────────────────────────────────────
// COMPONENTE CARD
// ─────────────────────────────────────────────
interface Cliente {
  id: number;
  nombre: string;
  descripcion: string;
  logo: string;
  color: string;
  largo?: string;
  Ancho?: string;
}

function ClienteCard({ cliente }: { cliente: Cliente }) {
  const logoSrc = `/img/clientes/${cliente.logo}.png`;

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden bg-card"
      style={{
        boxShadow: "0 2px 16px 0 rgba(30,60,120,0.10)",
        border: "5px solid rgba(255,255,255,0.5)",
      }}
    >
      {/* ── Zona superior: degradado de color → transparente ── */}
      <div
        className="relative flex flex-col items-center justify-center pt-6 pb-2 px-4"
        style={{
          background: `linear-gradient(to bottom, ${cliente.color}22 0%, ${cliente.color}00 100%)`,
          minHeight: "160px",
        }}
      >
        {/* Logo real */}
        <img
          src={logoSrc}
          alt={`Logo ${cliente.nombre}`}
          className="relative z-10 object-fill"
          style={{
            width: `${cliente.largo}` || "300px",
            height: `${cliente.Ancho} ` || "150px",
            borderRadius: "20px",
          }}
        />

        {/* Reflejo (posicionado absolutamente detrás) */}
        <div
          className="absolute inset-0 flex justify-center pointer-events-none"
          style={{
            transform: "translateY(calc(70% + 10px))", // Ajusta la posición vertical
          }}
        >
          <img
            src={logoSrc}
            alt=""
            className="object-fill"
            style={{
              width: "240px",
              height: "150px",
              borderRadius: "10px",
              opacity: 0.3,
              mask: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              transform: "scaleY(-1)",
            }}
          />
        </div>
      </div>

      {/* ── Zona inferior: texto ── */}
      <div className="flex flex-col gap-1 px-4 py-3 mt-10 mb-5">
        <p className=" font-semibold   leading-snug mb-3">{cliente.nombre}</p>
        <p className="text-sm font-semi-bold ">{cliente.descripcion}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// GRID DE CARDS
// ─────────────────────────────────────────────
export default function ClientCards() {
  return (
    <section className="w-full px-4 py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 max-w-4xl mx-auto">
        {clientes.map((cliente) => (
          <ClienteCard key={cliente.id} cliente={cliente} />
        ))}
      </div>
    </section>
  );
}
