"use client";

import Image from "next/image";
import {
  Shield,
  Code2,
  BarChart3,
  Users,
  Search,
  Monitor,
  Video,
  Globe,
} from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  tags: Array<{ label: string; icon: React.ReactNode }>;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "MARCELO RAMOS SECAIRA",
    title: "Magíster en Sistemas de Información Gerencial",
    bio: "Ingeniero en Sistemas e Informática. Auditor Informático ISO 27001. Máster en Administración de Empresas (C). Perito informático acreditado por el Consejo de la Judicatura.",
    image: "/img/equipo/marcelo.png",
    tags: [
      {
        label: "Gestión de Proyectos TI",
        icon: <Shield className="w-4 h-4" />,
      },
      { label: "Desarrollo de Software", icon: <Code2 className="w-4 h-4" /> },
      { label: "Ciberseguridad", icon: <Shield className="w-4 h-4" /> },
      {
        label: "Analítica de Datos y Marketing",
        icon: <BarChart3 className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 2,
    name: "FRANCISCO ALVARADO",
    title: "Tecnólogo en Análisis de Sistemas",
    bio: "Certificado «Introducción a la Ciberseguridad». Certificado «Programming Essentials In Python». Certificado «JavaScript Essentials 1».",
    image: "/img/equipo/francisco.png",
    tags: [
      {
        label: "Arquitectura e Infraestructura",
        icon: <Monitor className="w-4 h-4" />,
      },
      {
        label: "Ciberseguridad Ofensiva",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        label: "Desarrollo Multiplataforma",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        label: "Soluciones Digitales y Contenido",
        icon: <Video className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 3,
    name: "PATRICIA GARCÍA",
    title: "Abogada",
    bio: "Capacitación en la creación de Compañías. Capacitación en Derecho Penal y Justicia Constitucional. Capacitación en el Código Orgánico General de Procesos.",
    image: "/img/equipo/patricia.png",
    tags: [
      {
        label: "Derecho Civil y Notarial",
        icon: <Users className="w-4 h-4" />,
      },
      { label: "Derecho de Familia", icon: <Users className="w-4 h-4" /> },
      { label: "Derecho Penal", icon: <Users className="w-4 h-4" /> },
      { label: "Derecho de Tránsito", icon: <Users className="w-4 h-4" /> },
    ],
  },
  {
    id: 4,
    name: "ALEXANDER SUCCO",
    title: "Ingeniero en Sistemas",
    bio: "Bases de Datos y JavaScript (SQL, JS Essentials, Intro a JS). Diseño y Tecnologías Visuales (3D Studio Max, PhotoShop).",
    image: "/img/equipo/alexander.png",
    tags: [
      {
        label: "Desarrollo Web Full Stack",
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        label: "Desarrollo de Videojuegos",
        icon: <Video className="w-4 h-4" />,
      },
      { label: "Animación 2D", icon: <Video className="w-4 h-4" /> },
      {
        label: "Desarrollo Móvil Multiplataforma",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 5,
    name: "YULIANA RAMOS",
    title: "Abogada",
    bio: "Capacitación sobre la creación de Compañías. Capacitación en Código Orgánico Integral penal y COIP. Capacitación en Derecho Procesal y Justicia Constitucional.",
    image: "/img/equipo/yuliana.png",
    tags: [
      {
        label: "Gestión de Proyectos TI",
        icon: <Shield className="w-4 h-4" />,
      },
      { label: "Desarrollo de Software", icon: <Code2 className="w-4 h-4" /> },
      { label: "Ciberseguridad", icon: <Shield className="w-4 h-4" /> },
      {
        label: "Analítica de Datos y Marketing",
        icon: <BarChart3 className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 6,
    name: "TATIANA SINCHIGUANO",
    title: "Magíster en Sistemas de Información Gerencial",
    bio: "Ingeniero en Sistemas e Informática. Auditor Informático ISO 27001. Máster en Administración de Empresas (C).",
    image: "/img/equipo/tatiana.png",
    tags: [
      { label: "Desarrollo Backend", icon: <Code2 className="w-4 h-4" /> },
      {
        label: "Maquetación y Frameworks CSS",
        icon: <Globe className="w-4 h-4" />,
      },
      { label: "Desarrollo Web Integral", icon: <Code2 className="w-4 h-4" /> },
      {
        label: "Desarrollo Frontend con Vue.js",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
  },
];

export default function EquipoTrabajo() {
  return (
    <section
      className="py-20 bg-background"
      id="equipo"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Equipo de trabajo en{" "}
            <span className="light-text-gradient">Idrix Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Header Azul */}
              <div className="bg-[#1e3a8a] dark:bg-[#0f172a] h-32 relative flex items-end p-6">
                {/* Foto circular */}
                <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-[6px] border-card overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Icono lupa */}
                <div className="absolute top-5 right-5 text-white/80 group-hover:text-white transition-colors">
                  <Search className="w-8 h-8" strokeWidth={1.8} />
                </div>

                {/* Nombre */}
                <div className="ml-36">
                  <h3 className="text-white text-xl font-bold tracking-wide">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="pt-16 pb-8 px-7">
                <p className="text-primary font-semibold text-[15px] mb-3">
                  {member.title}
                </p>

                <p className="text-muted-foreground text-[14.5px] leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Tags */}
                <div className="grid grid-cols-2 gap-3">
                  {member.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#EFF6FF] dark:bg-[#1e3a8a]/30 hover:bg-[#DBEAFE] dark:hover:bg-[#1e40af]/40 transition-colors text-xs font-medium text-[#1e40af] dark:text-blue-300 px-4 py-2.5 rounded-2xl border border-blue-100 dark:border-blue-900"
                    >
                      {tag.icon}
                      <span>{tag.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
