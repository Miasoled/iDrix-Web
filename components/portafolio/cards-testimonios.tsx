import { Play } from "lucide-react";

const testimonios = [
  {
    empresa: "Unidad Educativa «Pablo Palacios»",
    descripcion:
      "Siempre apoyando en la educación y a las nuevas generaciones que será el futuro de nuestro país",
    video: "#",
  },
  {
    empresa: "Kesher",
    descripcion:
      "En trabajo con otras empresas tecnológicas para mantener a los ciber atacantes fuera de nuestros sistemas",
    video: "#",
  },
  {
    empresa: "CERAGRIC",
    descripcion:
      "Mejoramos la eficiencia de los negocios con la tecnología mas avanzada y nuestros sistemas optimizados",
    video: "#",
  },
  {
    empresa: "EcoMotos",
    descripcion:
      "Desarrollamos software de calidad y con una gran eficiencia para agilizar los procesos, y hacer que tu empresa crezca",
    video: "#",
  },
  {
    empresa: "Farmacias Pharmacity",
    descripcion:
      "Siempre presentes innovando con la mejor tecnología y los mejores profesionales que se puede encontrar",
    video: "#",
  },
  {
    empresa: "Powernet",
    descripcion:
      "Un testimonio por parte del Gerente de Powernet y su satisfacción con nuestro producto",
    video: "#",
  },
];

export function Testimonios() {
  return (
    <section className="w-full py-20 px-4 transition-colors duration-500 bg-white dark:bg-[hsl(215,50%,8%)] z-50">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <div
              key={t.empresa}
              className="rounded-2xl overflow-hidden border border-[hsl(210,20%,90%)] shadow-sm bg-white dark:bg-white/5 dark:border-white/10 flex flex-col transition-all duration-300 hover:shadow-md hover:border-[hsl(207,76%,65%)] dark:hover:border-[hsl(207,76%,45%)]"
            >
              {/* Video placeholder */}
              <div className="relative w-full h-44 bg-[hsl(217,60%,15%)] dark:bg-[hsl(217,60%,10%)] flex items-center justify-center cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Play size={20} className="text-white fill-white ml-1" />
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-base font-bold text-foreground">
                  {t.empresa}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
