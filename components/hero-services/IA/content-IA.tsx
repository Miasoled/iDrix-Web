import {
  TrendingUp,
  BarChart2,
  Bot,
  Check,
  Send,
  Zap,
  Lightbulb,
  Clock,
  BrainCircuit,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Análisis Real-Time",
    description:
      "Monitorea cada centavo mientras ocurre. La IA categoriza y concilia automáticamente.",
  },
  {
    icon: BarChart2,
    title: "Predicción de Ventas",
    description:
      "Anticípate a la demanda estacional con modelos predictivos basados en data histórica de Ecuador.",
  },
  {
    icon: Bot,
    title: "Asistente IA",
    description:
      "Consulta el estado de tu empresa con lenguaje natural. Tan simple como hablar con un experto.",
  },
];

export function AISection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--ai-section-bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white/80 mb-4 leading-tight">
            Inteligencia Artificial en iDrix Contable
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Nuestro núcleo neural procesa miles de transacciones para entregarte
            una visión clara de tu futuro financiero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-7 flex flex-col gap-5 border border-white/10 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "var(--ai-icon-bg)",
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  style={{ color: "var(--ai-icon-color)" }}
                />
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const analisis = [
  {
    title: "Análisis Predictivo de Ventas",
    desc: "Anticípate a las tendencias del mercado con modelos estadísticos avanzados.",
  },
  {
    title: "Asistente IA 24/7",
    desc: "Pregunta por el estado de tus facturas o el IVA acumulado por voz o chat.",
  },
];

const messages = [
  {
    user: true,
    text: "¿Cuál es mi proyección de flujo de caja para el próximo mes?",
  },
  {
    user: false,
    text: "Basado en tus cobros pendientes y ventas históricas, se estima un excedente de $12,450. ¿Deseas ver el desglose por categorías?",
  },
];

export function RealAnalisis() {
  return (
    <section className="py-20 px-8 xl:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            <span className="light-text-gradient dark:from-[hsl(207,76%,60%)] dark:to-[hsl(200,80%,70%)] dark:bg-clip-text dark:text-transparent">
              Análisis en Tiempo Real
            </span>
            <br />
            <span className="light-text-gradient dark:from-[hsl(207,76%,60%)] dark:to-[hsl(200,80%,70%)] dark:bg-clip-text dark:text-transparent block">
              impulsado por el mañana
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Nuestra IA no solo registra datos, los interpreta. Obtén
            predicciones de ventas precisas y un asistente virtual que responde
            tus dudas fiscales en segundos.
          </p>
          <ul className="flex flex-col gap-4">
            {analisis.map(({ title, desc }) => (
              <li key={title} className="flex gap-3 items-start">
                <div
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--ai-icon-bg)" }}
                >
                  <Check
                    size={11}
                    strokeWidth={3}
                    style={{ color: "var(--ai-icon-color)" }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-sm p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "var(--ai-icon-bg)" }}
            >
              <Bot size={18} style={{ color: "var(--ai-icon-color)" }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                iDrix AI Assistant
              </p>
              <span className="flex items-center gap-1.5 text-xs text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
                Online y analizando
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.user ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.user ? "bg-muted text-foreground rounded-br-sm" : "text-white rounded-bl-sm"}`}
                  style={
                    !msg.user ? { background: "var(--ai-icon-color)" } : {}
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-background">
            <input
              type="text"
              placeholder="Escribe tu consulta financiera..."
              className="flex-1 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "var(--ai-icon-color)" }}
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const potencia = [
  {
    icon: Zap,
    title: "Automatización",
    desc: "Conciliación bancaria automática y carga masiva de facturas electrónicas del SRI.",
  },
  {
    icon: TrendingUp,
    title: "Predictivo",
    desc: "Algoritmos que proyectan tus gastos fijos y variables con un 98% de precisión.",
  },
  {
    icon: Lightbulb,
    title: "Insights",
    desc: "Descubre patrones de fuga de capital y optimización de recursos financieros.",
  },
  {
    icon: Clock,
    title: "Real-time",
    desc: "Estados financieros actualizados al segundo, disponibles en cualquier dispositivo.",
  },
  {
    icon: BrainCircuit,
    title: "Assistant",
    desc: "Consulta leyes fiscales vigentes directamente con nuestra base de conocimiento IA.",
  },
  {
    icon: LayoutDashboard,
    title: "Visualization",
    desc: "Dashboard interactivo con diseño editorial para una claridad visual sin precedentes.",
  },
];

export function PotenciaInteligente() {
  return (
    <section className="py-20 px-8 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Potencia{" "}
            <span className="light-text-gradient  dark:from-[hsl(207,76%,60%)] dark:to-[hsl(200,80%,70%)] dark:bg-clip-text dark:text-transparent">
              Inteligente
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            Tecnología de vanguardia diseñada para la precisión contable en el
            mercado ecuatoriano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {potencia.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-secondary/40 p-7 flex flex-col gap-6"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "var(--ai-icon-bg)" }}
              >
                <Icon
                  size={20}
                  strokeWidth={1.75}
                  style={{ color: "var(--ai-icon-color)" }}
                />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground mb-1.5">
                  {title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BG_CARD_1 = "/img/seccion1.png";
const BG_CARD_2 = "/img/seccion2.png";

const cards = [
  {
    bg: BG_CARD_1,
    tag: "COMERCIAL",
    title: "Gestión de Ventas",
    desc: "Controla cada transacción y recibe alertas sobre productos con baja rotación automáticamente.",
  },
  {
    bg: BG_CARD_2,
    tag: "OPERACIONES",
    title: "Inventario Inteligente",
    desc: "Nuestra IA predice cuándo necesitas reabastecer basándose en ciclos de demanda histórica.",
  },
];

export function CardsIA() {
  return (
    <section className="py-20 px-8 xl:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-10">
          Diseñado para cada desafío
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map(({ bg, tag, title, desc }) => (
            <div
              key={title}
              className="relative rounded-2xl overflow-hidden flex flex-col justify-end p-8"
              style={{
                background: bg
                  ? `url(${bg}) center/cover no-repeat`
                  : "linear-gradient(135deg, hsl(215,45%,14%) 0%, hsl(215,50%,8%) 100%)",
              }}
            >
              <div className="absolute inset-0 from-black/80 via-black/30 to-transparent" />

              <div className="relative z-10">
                <p
                  className="text-xs font-semibold tracking-widest mb-2"
                  style={{ color: "var(--ai-icon-color)" }}
                >
                  {tag}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed max-w-sm">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
