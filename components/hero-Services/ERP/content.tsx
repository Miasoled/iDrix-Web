import {
  FileText,
  Receipt,
  Box,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
  RefreshCcw,
  Route,
  Smartphone,
  TrendingDown,
  Clock,
  CheckCircle,
  BrainCircuit,
  Building2,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function ErpFeatures() {
  const features = [
    {
      icon: FileText,
      title: "Contabilidad Inteligente",
      desc: "Gestión financiera completa, asientos automáticos y conciliación bancaria instantánea.",
    },
    {
      icon: Receipt,
      title: "Facturación Electrónica",
      desc: "Documentos validados ante el SRI, envío automático y cumplimiento legal garantizado.",
    },
    {
      icon: Box,
      title: "Inventario Avanzado",
      desc: "Control de stock multialmacén, trazabilidad total y soporte para códigos de barras.",
    },
    {
      icon: ShoppingBag,
      title: "Compras y Proveedores",
      desc: "Gestión de proveedores, órdenes de compra y conversión automática a inventario.",
    },
    {
      icon: TrendingUp,
      title: "Ventas y CRM",
      desc: "Ciclo de ventas completo, seguimiento de prospectos y análisis de rendimiento.",
    },
    {
      icon: Users,
      title: "Recursos Humanos y Nómina",
      desc: "Gestión de empleados y roles de pago 100% ajustados a la legislación laboral de Ecuador.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Todo lo que tu empresa necesita
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Módulos integrados que funcionan en perfecta armonía para optimizar cada rincón de tu
            operación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AiSection() {
  const items = [
    {
      icon: Zap,
      title: "Predicción de ventas",
      text: "Anticípate a la demanda del mercado con algoritmos que analizan tu histórico y tendencias.",
    },
    {
      icon: Box,
      title: "Optimización de inventarios",
      text: "Reduce el capital inmovilizado con sugerencias inteligentes de reabastecimiento automático.",
    },
    {
      icon: RefreshCcw,
      title: "Automatización de procesos",
      text: "Elimina tareas repetitivas mediante flujos de trabajo inteligentes que aprenden de tu gestión.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 text-white" style={{ background: "var(--ai-section-bg)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:gap-16 px-6 lg:grid-cols-2">
        {/* Imagen */}
        <div className="flex justify-center">
          <div className="rounded-2xl bg-white/10 p-4 md:p-6 backdrop-blur-sm">
            <Image
              src="/img/ERP/aiSection.png"
              alt="AI Visualization"
              width={420}
              height={420}
              className="rounded-xl object-contain w-full h-auto max-w-[420px]"
            />
          </div>
        </div>

        {/* Contenido */}
        <div>
          <h2 className="mb-8 md:mb-10 text-2xl md:text-3xl font-semibold">
            Inteligencia Artificial aplicada a tu negocio
          </h2>

          <div className="space-y-6 md:space-y-8">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "var(--ai-icon-bg)",
                      color: "var(--ai-icon-color)",
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MobilitySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 lg:grid-cols-2">
        {/* Lado Izquierdo: Texto y Card Horizontal */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gestión Comercial y Movilidad
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Lleva tu oficina en el bolsillo. iDrix potencia a tu equipo de ventas en campo con
              herramientas de vanguardia.
            </p>
          </div>

          {/* Card */}
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border max-w-lg">
            <div className="flex gap-4">
              <div
                className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0 animate-pulse"
                style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }}
              />
              <div>
                <h3 className="font-bold text-foreground mb-2">Clientes geolocalizados</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Visualización en mapa de toda tu cartera de clientes para una mejor cobertura
                  comercial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Mockup Teléfono */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[260px] h-[520px] md:w-[280px] md:h-[560px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
            <div className="w-full h-full bg-muted flex flex-col p-4 pt-12 gap-4">
              <div className="bg-card p-4 md:p-5 rounded-2xl shadow-md border border-border">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-[13px] text-foreground mb-1">
                      Rutas inteligentes
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-tight">
                      Planificación automática de visitas optimizando tiempos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 md:p-5 rounded-2xl shadow-md border border-border">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-[13px] text-foreground mb-1">
                      App para vendedores
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-tight">
                      Pedidos en tiempo real y seguimiento GPS integrado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full grow bg-background/50 rounded-xl border border-dashed border-border flex items-center justify-center">
                <MapPin className="text-muted-foreground/20" size={40} />
              </div>
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function BiSection() {
  const benefits = [
    {
      icon: TrendingDown,
      value: "30%",
      text: "Reducción de costos",
      highlight: true,
    },
    { icon: Clock, text: "Ahorro de tiempo" },
    { icon: CheckCircle, text: "Cumplimiento SRI" },
    { icon: BrainCircuit, text: "Decisiones basadas en datos" },
    { icon: Building2, text: "Colaboración empresarial" },
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ background: "var(--hero-bg)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a5f]">
            Business Intelligence para el Futuro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Toma el control total de tu empresa con análisis de datos avanzado. No solo registras,
            también proyectas.
          </p>
        </div>

        <div className="flex justify-center mb-16 md:mb-24">
          <div className="relative w-full max-w-4xl p-1 md:p-2 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/img/ERP/BI.png"
              alt="iDrix Business Intelligence Tablet Mockup"
              width={1000}
              height={650}
              className="rounded-xl md:rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="space-y-10 md:space-y-12">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1e3a5f]">Beneficios de elegir iDrix</h3>
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col items-center justify-center text-center shadow-sm h-full"
                >
                  <div className="mb-4 md:mb-5 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {benefit.value && (
                    <span className={`text-3xl md:text-4xl font-extrabold mb-1.5 ${benefit.highlight ? "text-primary" : "text-foreground"}`}>
                      {benefit.value}
                    </span>
                  )}

                  <p className="text-xs md:text-sm font-medium text-[#1e3a5f] leading-snug">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function IdrixErpBanner() {
  return (
    <section className="flex justify-center items-center py-12 md:py-20 bg-background">
      <div
        className="w-full max-w-5xl p-8 md:p-16 rounded-[30px] md:rounded-[40px] shadow-2xl text-center relative overflow-hidden border border-border"
        style={{ background: "var(--ai-section-bg)" }}
      >
        <div
          className="absolute top-[-80px] left-[-80px] md:top-[-100px] md:left-[-100px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full blur-3xl opacity-50"
          style={{ background: "var(--arch-4)" }}
        />
        <div
          className="absolute bottom-[-120px] right-[-80px] md:bottom-[-150px] md:right-[-100px] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--arch-2)" }}
        />

        <div className="relative z-10 space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
            Transforma la gestión de tu empresa con iDrix ERP
          </h2>

          <p className="text-base md:text-xl leading-relaxed max-w-2xl mx-auto text-white/80">
            Centraliza todos los procesos de tu negocio en una plataforma inteligente, escalable y
            diseñada para ganar.
          </p>

          <div className="pt-4">
            <button className="bg-primary text-primary-foreground font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-full text-base md:text-lg shadow-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer">
              Agendar demostración
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
