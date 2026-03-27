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
    logo: "sanfran",
    color: "#7f8c8d",
    largo: "160px",
    Ancho: "160px",
  },
  {
    id: 6,
    nombre: "Transporte de bienes",
    descripcion:
      "Empresa ecuatoriana dedicada a brindar servicios de transporte de bienes por carretera",
    logo: "transfersal",
    color: "#e67e22",
  },
  {
    id: 7,
    nombre: "Gimnasio",
    descripcion: "Un gimnasio con máquinas modernas importadas",
    logo: "power",
    color: "#922b21",
  },
  {
    id: 8,
    nombre: "Gestor de eventos",
    descripcion: "Solución integral para la gestión de eventos, ya sean presenciales o virtuales",
    logo: "eventmix",
    color: "#8e44ad",
  },
  {
    id: 9,
    nombre: "Soluciones empresariales",
    descripcion: "Servicios en contabilidad, auditoría, tributación y asesorías",
    logo: "ascontri",
    color: "#d4ac0d",
    largo: "150px",
    Ancho: "200px",
  },
  {
    id: 10,
    nombre: "Servicios de entretenimiento",
    descripcion:
      "La repartija ofrece servicios de entretenimiento y diversión que satisfagan a los clientes",
    logo: "repartija",
    color: "#f05a28",
  },
  {
    id: 11,
    nombre: "Escuela de conducción",
    descripcion: "Profesionales altamente capacitados e instalaciones modernas y seguras",
    logo: "escuela-conduccion",
    color: "#f1c40f",
  },
  {
    id: 12,
    nombre: "Construcción y ventas",
    descripcion: "Se especializa en la construcción y venta de casas",
    logo: "constructora-bustillos",
    color: "#5d6dff",
  },
  {
    id: 13,
    nombre: "Empresa comercializadora",
    descripcion:
      "Importadores & Distribuidores directos, comercializadora de una amplia variedad de artículos",
    logo: "villanova",
    color: "#f39c12",
  },
  {
    id: 14,
    nombre: "Terrenos Urbanizados",
    descripcion:
      "Empresa líder en el mercado de la construcción, especializada en la venta de terrenos",
    logo: "cofiza",
    color: "#e67e22",
  },
  {
    id: 15,
    nombre: "Asesoría empresarial",
    descripcion: "Impulsar el crecimiento profesional y empresarial",
    logo: "grupo-afa",
    color: "#3498db",
  },
  {
    id: 16,
    nombre: "Comprobantes SRI",
    descripcion: "Descarga y gestiona tus documentos electrónicos de forma automática.",
    logo: "plusfactura",
    color: "#9b59b6",
  },
  {
    id: 17,
    nombre: "Aseguradora",
    descripcion:
      "Empresa aseguradora líder en Bolivia. Especializados en todo tipo de seguros privados.",
    logo: "nacional-seguros",
    color: "#2980b9",
  },
  {
    id: 18,
    nombre: "Construcción y ventas",
    descripcion: "Se especializa en la construcción y venta de casas.",
    logo: "origin",
    color: "#5dade2",
  },
  {
    id: 19,
    nombre: "Servicios empresariales",
    descripcion: "Soluciones y asesoría empresarial para potenciar el crecimiento de negocios.",
    logo: "origin-power",
    color: "#85c1e9",
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
      className="relative flex flex-col rounded-2xl overflow-hidden bg-card justify-between"
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
            width: `${cliente.Ancho}` || "300px",
            height: `${cliente.largo} ` || "150px",
            borderRadius: "20px",
          }}
        />
        {/* Reflejo (posicionado absolutamente detrás) */}
        <div
          className="absolute flex justify-center pointer-events-none"
          style={{
            bottom: "0", // Posición desde abajo
            left: "0",
            right: "0",
            transform: "translateY(80%)", // Desplaza hacia abajo
          }}
        >
          <img
            src={logoSrc}
            alt=""
            style={{
              width: cliente.Ancho || "230px",
              height: cliente.largo || "100px",
              borderRadius: "20px",
              opacity: 0.3,
              mask: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              transform: "scaleY(-1) rotateX(25deg)", // ← Agrega rotateX
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* ── Zona inferior: texto ── */}
      <div className="flex flex-col gap-1 px-4 py-3  m-5">
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
