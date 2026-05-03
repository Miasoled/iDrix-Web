import Image from "next/image";

/* ================================
   PROYECTOS WEB INFORMATIVOS
================================ */

const proyectosInformativos = [
  {
    title: "Maderwoods",
    subtitle: "Estrategia",
    image: "/img/maderwoods.png",
  },
  {
    title: "Medicalweed S.A",
    subtitle: "",
    image: "/img/medicalweed.png",
  },
  {
    title: "SYCOF",
    subtitle: "",
    image: "/img/sycof.png",
  },
  {
    title: "Transfersal S.A",
    subtitle: "",
    image: "/img/transfersal.png",
  },
  {
    title: "Lujonet",
    subtitle: "",
    image: "/img/lujonet.png",
  },
];

/* ================================
   PROYECTOS ECOMMERCE
================================ */

const proyectosEcommerce = [
  {
    title: "Ecomotos",
    image: "/img/ecomotos.png",
  },
  {
    title: "Flashcomputer",
    image: "/img/flashcomputer.png",
  },
  {
    title: "Vela",
    image: "/img/vela.png",
  },
];

/* ================================
   CARD REUTILIZABLE
================================ */

interface Project {
  title: string;
  image: string;
  subtitle?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl group shadow-md">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={400}
        className="object-cover w-full h-[260px] transition duration-500 group-hover:scale-105"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition" />

      {/* texto */}
      <div className="absolute bottom-4 left-4 text-white">
        {project.subtitle && <p className="text-sm opacity-80">{project.subtitle}</p>}
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </div>
    </div>
  );
}

/* ================================
   PORTAFOLIO INFORMATIVO
================================ */

export function PortafolioInformativo() {
  return (
    <section className="px-6 lg:px-20 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Webs informativas</h2>

        <p className="text-muted-foreground mt-2 max-w-xl">
          Desarrollamos proyectos a medida según la naturaleza de su negocio y sus objetivos
          comerciales.
        </p>

        <a className="text-chart-3 text-sm font-medium mt-2 inline-block hover:underline ">
          Ejemplos más destacados
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosInformativos.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ================================
   PORTAFOLIO ECOMMERCE
================================ */

export function PortafolioEcommerce() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-muted/40">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Ecommerce</h2>

        <p className="text-muted-foreground mt-2 max-w-xl">
          Desarrollamos proyectos a medida según la naturaleza de su negocio y sus objetivos
          comerciales.
        </p>

        <a className="text-chart-3 text-sm font-medium mt-2 inline-block hover:underline">
          Ejemplos más destacados
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosEcommerce.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
