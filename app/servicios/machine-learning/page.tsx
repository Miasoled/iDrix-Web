"use client";

import { Navbar } from "@/components/Navbar";
import { HeroMachine } from "@/components/hero-services/hero-machine";
import Image from "next/image";
import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function MachineLearning() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroMachine />
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <QueEsMachineLearning />
      </ScrollReveal>
      <ScrollReveal direction="slideRight">
        <EcosistemaInteligente />
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <Algoritmos />
      </ScrollReveal>
      <ScrollReveal direction="fadeIn">
        <ProcesamientoDigital />
      </ScrollReveal>
      <ScrollReveal direction="fadeUp">
        <ExtarccionCaracteristicas />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}

const features = [
  {
    bold: "Algoritmos supervisados",
    desc: "aprenden de datos etiquetados para clasificar y predecir con alta precisión.",
  },
  {
    bold: "Algoritmos no supervisados",
    desc: "descubren patrones ocultos en datos sin etiquetar para segmentación y clustering.",
  },
  {
    bold: "Deep Learning",
    desc: "redes neuronales profundas para visión artificial, NLP y tareas complejas.",
  },
];

const cards = [
  {
    title: "Aprendizaje Automatizado",
    desc: "Modelos que evolucionan y se ajustan dinámicamente.",
    icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  {
    title: "Análisis Predictivo",
    desc: "Anticípese a las tendencias del mercado global.",
    icon: "M22 7 13.5 15.5 8.5 10.5 2 17 M16 7h6v6",
  },
];

export function QueEsMachineLearning() {
  return (
    <section className="w-full bg-background py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Card azul */}
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col gap-5"
          style={{ background: "hsl(220,55%,18%)" }}
        >
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase"
            style={{ color: "hsl(210,65%,68%)" }}
          >
            Machine Learning · IDRIX Technology
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold leading-snug"
            style={{ color: "hsl(210,100%,96%)" }}
          >
            Sistemas que aprenden solos, decisiones que impulsan tu negocio
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(210,35%,68%)" }}>
            Usando datos históricos de tu empresa, entrenamos modelos que identifican patrones
            invisibles y generan predicciones accionables.
          </p>
          <hr style={{ borderColor: "hsl(215,40%,28%)" }} />
          <ul className="flex flex-col gap-4">
            {features.map(({ bold, desc }) => (
              <li key={bold} className="flex items-start gap-3">
                <span
                  className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "hsl(210,80%,62%)" }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210,30%,78%)" }}>
                  <span className="font-bold" style={{ color: "hsl(210,100%,92%)" }}>
                    {bold}
                  </span>{" "}
                  — {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Derecha */}
        <div className="flex flex-col gap-8 pt-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(220,75%,40%)] dark:text-[hsl(210,80%,72%)]">
              ¿Qué es el Machine Learning?
            </h2>
            <p className="text-sm leading-relaxed text-[hsl(215,15%,40%)] dark:text-muted-foreground">
              Es la disciplina de la IA que permite a los sistemas aprender y mejorar
              automáticamente a partir de la experiencia sin ser programados explícitamente.
              Mediante el análisis de grandes volúmenes de datos, nuestros modelos identifican
              patrones complejos para predecir comportamientos futuros con alta precisión.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {cards.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-xl p-5 flex flex-col gap-3 border border-[hsl(210,25%,88%)] dark:border-[hsl(215,30%,20%)] bg-[hsl(210,30%,96%)] dark:bg-[hsl(215,30%,12%)]"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(210,40%,88%)] dark:bg-[hsl(215,45%,20%)] text-[hsl(220,75%,40%)] dark:text-[hsl(210,80%,65%)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[hsl(220,30%,20%)] dark:text-[hsl(210,80%,90%)] mb-1">
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed text-[hsl(215,15%,45%)] dark:text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const card = [
  {
    tag: "Inteligencia Artificial",
    abbr: "IA",
    desc: 'La capacidad de las computadoras de mostrar un comportamiento "inteligente", predictivo con base a datos históricos.',
    features: ["Percepción Visual", "Toma de Decisiones", "Resolución de Problemas"],
  },
  {
    tag: "Machine Learning",
    abbr: "ML",
    featured: true,
    desc: "Técnica para crear comportamiento inteligente mediante entrenamientos automáticos basados en exposición a datos.",
    features: ["Modelos Predictivos", "Minería de Datos", "Detección de Patrones"],
  },
  {
    tag: "Deep Learning",
    abbr: "DL",
    desc: "Machine Learning que aprende por sí mismo reconociendo patrones con redes neuronales, replicando el razonamiento humano.",
    features: ["Redes Neuronales", "Big Data", "NLP Avanzado"],
  },
];

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="w-4 h-4 shrink-0 text-[hsl(207,76%,50%)]"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export function EcosistemaInteligente() {
  return (
    <section className="bg-[var(--hero-bg)] py-20 px-4 transition-colors duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          El ecosistema de la{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Inteligencia
          </span>
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground max-w-sm mx-auto leading-relaxed">
          Entienda las diferencias entre las tecnologías que impulsan la transformación digital
          moderna.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
        {card.map(({ tag, abbr, desc, features, featured }) => (
          <div
            key={abbr}
            className={`rounded-2xl p-7 flex flex-col gap-4 h-full
            ${
              featured
                ? "bg-[hsl(220,55%,18%)] shadow-xl md:scale-105"
                : "bg-white dark:bg-[hsl(215,30%,10%)] border border-[hsl(210,25%,90%)] dark:border-[hsl(215,30%,18%)]"
            }`}
          >
            <span
              className={`self-start text-xs font-medium px-3 py-1 rounded-full
              ${featured ? "bg-white/15 text-white" : "bg-[hsl(210,40%,94%)] dark:bg-[hsl(215,40%,16%)] text-[hsl(220,75%,45%)]"}`}
            >
              {tag}
            </span>
            <h3
              className={`text-2xl font-black ${featured ? "text-white" : "text-[hsl(220,30%,18%)] dark:text-white"}`}
            >
              {abbr}
            </h3>
            <p
              className={`text-sm leading-relaxed ${featured ? "text-[hsl(210,35%,72%)]" : "text-[hsl(215,15%,45%)] dark:text-muted-foreground"}`}
            >
              {desc}
            </p>
            <ul className="flex flex-col gap-2 mt-auto pt-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check />
                  <span
                    className={`text-sm ${featured ? "text-[hsl(210,40%,80%)]" : "text-[hsl(215,15%,35%)] dark:text-muted-foreground"}`}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const algoritmo = [
  {
    number: "01",
    title: "KNN — K-Nearest Neighbors",
    desc: "Clasifica midiendo proximidad entre elementos del conjunto de datos",
    img: "/img/KNN.png",
  },
  {
    number: "02",
    title: "K-means Clustering",
    desc: "Agrupación no supervisada minimizando distancias al centroide",
    img: "/img/Clustering.png",
  },
  {
    number: "03",
    title: "SVM — Support Vector Machine",
    desc: "Categorización mediante hiperplanos en espacios de características",
    img: "/img/SVM.png",
  },
];

export function Algoritmos() {
  return (
    <section
      className="w-full py-20 px-4 transition-colors duration-500"
      style={{ background: "var(--info-bg)" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Algoritmos{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Estrategicos
          </span>
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground">
          Implementamos las metodologías más robustas del mercado.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {algoritmo.map(({ number, title, desc, img }) => (
          <div
            key={number}
            className="rounded-2xl flex flex-col gap-4 p-4 bg-[hsl(220,55%,14%)] dark:bg-[hsl(220,50%,10%)]"
          >
            {/* Label */}
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[hsl(210,50%,60%)]">
              {number} · Proyecto Destacado
            </p>
            {/* Image with inner card feel */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[hsl(220,60%,8%)]">
              <Image src={img} alt={title} fill className="object-cover" />
            </div>
            {/* Footer */}
            <div className="flex flex-col gap-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(207,76%,55%)] shrink-0" />
                <p className="text-sm font-bold text-white">{title}</p>
              </div>
              <p className="text-xs leading-relaxed text-[hsl(210,30%,65%)] pl-4">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const procesamiento = [
  {
    title: "Escala de Grises",
    desc: "Convierte los píxeles de una imagen a una escala de tonalidades entre blanco y negro, reduciendo la complejidad de los datos para facilitar el procesamiento.",
    img: "/img/Escala.png",
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    title: "Binarización",
    desc: "Convierte cada píxel a valor 0 (negro) o 255 (blanco) condicionado a si supera un umbral. Genera imágenes de alto contraste ideales para detección de formas.",
    img: "/img/Binario.png",
    icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18",
  },
  {
    title: "Ecualización de Histogramas",
    desc: "Ajusta las intensidades de la imagen para mejorar el contraste y obtener una vista más clara, optimizando la distribución de píxeles en el espectro tonal completo.",
    img: "/img/Histogramas.png",
    icon: "M18 20V10 M12 20V4 M6 20v-6",
  },
];

export function ProcesamientoDigital() {
  return (
    <section className="bg-[var(--hero-bg)] py-20 px-4 transition-colors duration-500">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Procesamiento Digital de{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Imagenes
          </span>
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground max-w-md mx-auto leading-relaxed">
          Transformamos la percepción visual en datos estructurados mediante visión artificial
          avanzada.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {procesamiento.map(({ title, desc, img, icon }) => (
          <div
            key={title}
            className="rounded-2xl overflow-hidden flex flex-col bg-white dark:bg-[hsl(215,30%,10%)] border border-[hsl(210,25%,90%)] dark:border-[hsl(215,30%,18%)] shadow-sm"
          >
            {/* Image */}
            <div className="relative w-full  aspect-video">
              <Image src={img} alt={title} fill className="object-cover" />
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[hsl(210,40%,94%)] dark:bg-[hsl(215,40%,16%)] text-[hsl(220,75%,45%)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4"
                >
                  <path d={icon} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[hsl(207,76%,42%)] dark:text-[hsl(210,80%,72%)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[hsl(215,15%,40%)] dark:text-muted-foreground">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const caracteristicas = [
  {
    number: "01",
    tag: "HISTOGRAMA",
    abbr: "HOG",
    desc: "Histogram of Oriented Gradients: Describe la apariencia y forma de un objeto local mediante la distribución de las direcciones de gradiente de intensidad.",
    img: "/img/Hog.png",
  },
  {
    number: "02",
    tag: "CONTORNOS",
    abbr: "CANNY",
    desc: "Canny Edge Detection: Algoritmo de detección de bordes multietapa que utiliza un filtro gaussiano para reducir el ruido y extraer estructuras lineales precisas.",
    img: "/img/Canny.png",
  },
  {
    number: "03",
    tag: "KEYPOINTS",
    abbr: "SIFT",
    desc: "Scale-Invariant Feature Transform: Identifica puntos clave invariantes a la escala, rotación y cambios de iluminación para el reconocimiento de objetos.",
    img: "/img/Sift.png",
  },
];

export function ExtarccionCaracteristicas() {
  return (
    <section
      className="w-full py-20 px-4 transition-colors duration-500"
      style={{ background: "var(--info-bg)" }}
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Extracción de{" "}
          <span className="light-text-gradient dark:bg-gradient-to-r dark:from-white dark:via-[hsl(200,80%,80%)] dark:to-[hsl(207,76%,60%)] dark:bg-clip-text dark:text-transparent">
            Características
          </span>
        </h2>
        <p className="text-sm text-[hsl(215,15%,45%)] dark:text-muted-foreground">
          Identificación precisa de rasgos distintivos en entornos complejos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {caracteristicas.map(({ number, tag, abbr, desc, img }) => (
          <div
            key={abbr}
            className="rounded-2xl p-6 flex flex-col gap-4 bg-[hsl(220,55%,12%)] dark:bg-[hsl(220,50%,8%)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-[hsl(210,50%,50%)]">{number}</span>
              <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-[hsl(210,70%,20%)] text-[hsl(195,85%,65%)]">
                {tag}
              </span>
            </div>
            {/* Abbr + desc */}
            <h3 className="text-2xl font-black text-white">{abbr}</h3>
            <p className="text-xs leading-relaxed text-[hsl(210,30%,65%)]">{desc}</p>
            {/* Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[hsl(220,60%,8%)] mt-auto">
              <Image src={img} alt={abbr} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
