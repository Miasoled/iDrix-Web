import React from "react";
import { Button } from "@/components/ui/button";
import {
  Navigation,
  Users,
  Monitor,
  Radio,
  History,
  Map as MapIcon,
  AlertCircle,
  CheckCircle2,
  Search,
  Download,
  ShieldCheck,
} from "lucide-react";

export function CardsGeo() {
  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8 font-sans">
      {/* Título de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-10 text-center md:text-left">
        Módulos <span className="text-[var(--ai-icon-color)]">Integrados</span>
      </h2>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="md:col-span-12 lg:col-span-8 bg-card rounded-[2rem] p-8 md:p-10 shadow-sm border border-border flex flex-col md:flex-row gap-10 min-h-[450px] overflow-hidden">
          {/* LADO IZQUIERDO: Contenido distribuido */}
          <div className="flex-1 flex flex-col z-10">
            {/*Gestión de Rutas*/}
            {/* 1. Encabezado (Arriba) */}
            <div className="mb-auto">
              <div className="flex items-center gap-3 text-[var(--ai-icon-color)] mb-4">
                <Navigation className="w-6 h-6 rotate-45" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Gestión de Rutas</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                Optimización y control total de recorridos con visualización en tiempo real.
              </p>
            </div>

            {/* 2. Lista (Centro con margen vertical generoso) */}
            <div className="py-8 md:py-12">
              <ul className="grid grid-cols-1 gap-y-4">
                {[
                  { icon: CheckCircle2, text: "Filtrado por zonas" },
                  { icon: CheckCircle2, text: "Estados de cumplimiento" },
                  { icon: Search, text: "Buscador inteligente" },
                  { icon: Download, text: "Exportación de reportes" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground/80 text-sm font-medium"
                  >
                    <item.icon className="w-5 h-5 text-[var(--ai-icon-color)]" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Botón (Abajo) */}
            <div className="mt-auto">
              <Button className="bg-[var(--ai-icon-color)] hover:brightness-110 text-primary-foreground rounded-xl px-10 py-6 h-auto text-base font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                Ver Módulo
              </Button>
            </div>
          </div>

          {/* LADO DERECHO: Mapa */}
          <div className="flex-1 relative rounded-2xl overflow-hidden bg-muted border border-border shadow-inner">
            <img
              src="/img/Mapa.png"
              alt="Mapa de cobertura"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110 dark:invert"
            />
            {/* Overlay sutil para mejorar la integración */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-2xl" />
          </div>
        </div>

        {/* 2. Gestión de Clientes (Derecha Arriba) */}
        <div className="md:col-span-6 lg:col-span-4 bg-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-border space-y-4 flex flex-col justify-around">
          <div>
            <div className="w-10 h-10 bg-muted text-[var(--ai-icon-color)] rounded-xl flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Gestión de Clientes</h3>
            <p className="text-muted-foreground text-xs mt-2">
              Mapa de clientes e indicadores de frecuencia de compra.
            </p>
          </div>
          <div className="bg-muted rounded-xl p-2 border border-border">
            <img
              src="/img/GestionDeCliente 1.png"
              alt="Dashboard"
              className="rounded-lg shadow-sm dark:invert w-full h-auto"
            />
          </div>
        </div>

        {/* 3. Gestión de Vendedores (Abajo Izquierda) */}
        <div className="md:col-span-6 lg:col-span-4 bg-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-border space-y-6">
          <div>
            <div className="w-10 h-10 bg-muted text-indigo-500 rounded-xl flex items-center justify-center mb-4 border border-border">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Gestión de Vendedores</h3>
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
              Panel de control de fuerza de ventas y desempeño individual.
            </p>
          </div>
          <div className="flex justify-center py-2 md:py-4">
            <img
              src="/img/Vendedores.png"
              alt="Vendedores"
              className="w-full h-auto max-w-[180px] dark:invert"
            />
          </div>
          <div className="flex -space-x-2">
            {["JD", "AN", "SR"].map((init, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-card flex items-center justify-center text-[10px] font-bold ${i === 0 ? "bg-blue-100 text-blue-600" : i === 1 ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}
              >
                {init}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
              +5
            </div>
          </div>
        </div>

        {/* 4. Rastreo en Tiempo Real (Abajo Derecha - El Azul) */}
        <div
          className="md:col-span-12 lg:col-span-8 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 text-white flex flex-col md:flex-row gap-6 md:gap-8 overflow-hidden relative"
          style={{ background: "var(--ai-section-bg)" }}
        >
          <div className="flex-1 z-10 space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <Radio className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              <h3 className="text-xl md:text-2xl font-bold">
                Rastreo en <br className="hidden md:block" />
                Tiempo Real
              </h3>
            </div>
            <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
              Monitoreo satelital constante para una supervisión total de su flota.
            </p>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {[
                { label: "Ubicación en vivo", icon: Navigation },
                { label: "Supervisión", icon: ShieldCheck },
                { label: "Control tiempos", icon: History },
                { label: "Alertas críticas", icon: AlertCircle },
              ].map((tag, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-3 flex flex-col gap-1 border border-white/5 hover:bg-white/20 transition-colors"
                >
                  <tag.icon className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-bold">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative flex items-center justify-center mt-4 md:mt-0">
            <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-cover opacity-20 rounded-2xl dark:invert" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400 rounded-full flex items-center justify-center text-blue-900 shadow-lg shadow-amber-400/20">
                <span className="font-black text-lg md:text-xl italic">A</span>
              </div>
              <div className="mt-2 bg-blue-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                Rastreo Activo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Inferior (4 Columnas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4">
        {/* Trayectoria Histórica */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-6 shadow-sm border border-border">
          <History className="w-5 h-5 text-[var(--ai-icon-color)] mb-4" />
          <h4 className="font-bold text-foreground text-sm">Trayectoria Histórica</h4>
          <p className="text-muted-foreground text-[10px] mt-1">Análisis de recorridos pasados.</p>
          <div className="mt-6 flex items-center gap-2">
            <div className="w-full h-1 bg-muted rounded-full relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--ai-icon-color)] rounded-full" />
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--ai-icon-color)]/50 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--ai-icon-color)]/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Paradas de Distribución */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-6 shadow-sm border border-border">
          <Navigation className="w-5 h-5 text-[var(--ai-icon-color)] mb-4" />
          <h4 className="font-bold text-foreground text-sm">Paradas de Distribución</h4>
          <div className="mt-4 space-y-2">
            {[
              { color: "bg-emerald-500", label: "Con venta" },
              { color: "bg-amber-500", label: "Con pedido" },
              { color: "bg-[var(--ai-icon-color)]", label: "De servicio" },
            ].map((st, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${st.color}`} />
                <span className="text-[10px] font-bold text-muted-foreground">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Paradas Vacías */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-6 shadow-sm border border-border">
          <AlertCircle className="w-5 h-5 text-destructive mb-4" />
          <h4 className="font-bold text-foreground text-sm">Paradas Vacías</h4>
          <div className="mt-4 bg-destructive/10 text-destructive p-2 rounded-lg text-[9px] font-bold leading-tight border border-destructive/20">
            Sin registro • Desvíos • Tiempos excesivos
          </div>
        </div>

        {/* Mapas de Calor */}
        <div className="bg-card rounded-2xl md:rounded-3xl p-6 shadow-sm border border-border">
          <MapIcon className="w-5 h-5 text-indigo-500 mb-4" />
          <h4 className="font-bold text-foreground text-sm">Mapas de Calor</h4>
          <p className="text-muted-foreground text-[10px] mt-1">Densidad de servicios.</p>
          <div className="mt-4 rounded-xl overflow-hidden h-16 bg-muted relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 via-amber-200/30 to-red-200/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, AlertTriangle } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  statusText: string;
  icon: React.ElementType;
  iconColor: string;
  textColor?: string;
}

export function MetricCard({
  title,
  value,
  statusText,
  icon: Icon,
  iconColor,
  textColor = "text-foreground/80",
}: MetricCardProps) {
  // Verificación de seguridad: si no hay Icon, no renderiza para evitar error
  if (!Icon) return null;

  return (
    <Card className="border-border shadow-sm rounded-2xl bg-card transition-all hover:shadow-md">
      <CardContent className="p-6 md:p-7">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
            {title}
          </span>
          <div className={`${iconColor} bg-muted rounded-full p-2.5`}>
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>

        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            {value}
          </h2>
          <span className={`${textColor} text-[10px] md:text-xs font-semibold`}>{statusText}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function Monitoreo() {
  const metrics = [
    {
      title: "Vendedores Activos",
      value: "12/15",
      statusText: "3 vendedores activos",
      icon: Users,
      iconColor: "text-indigo-500",
      textColor: "text-emerald-500",
    },
    {
      title: "Visitas Realizadas",
      value: "87/120",
      statusText: "72.5% de cumplimiento",
      icon: ClipboardCheck,
      iconColor: "text-[var(--ai-icon-color)]",
    },
    {
      title: "Alertas Activas",
      value: "3",
      statusText: "Requieren atención",
      icon: AlertTriangle,
      iconColor: "text-destructive",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-6 md:px-10 font-sans bg-background">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-foreground">
          Panel de monitoreo en vivo
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { BarChart3, TrendingDown, Clock3 } from "lucide-react";

// Sub-componente para las 4 tarjetas superiores
function BenefitCard({ icon: Icon, title, description }: any) {
  return (
    <Card className="border-border shadow-sm rounded-2xl bg-card transition-all hover:shadow-md">
      <CardContent className="p-6 md:p-7 space-y-4">
        <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center text-[var(--ai-icon-color)] border border-border">
          <Icon className="w-5 h-5" />
        </div>
        <h4 className="text-lg font-bold text-foreground tracking-tight leading-snug">{title}</h4>
        <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

// Sub-componente para los ítems de la lista de resultados reales
function ResultItem({ value, text, color }: any) {
  return (
    <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-white/10 transition-colors">
      <div className={`w-3 h-3 flex-shrink-0 rounded-full ${color} animate-pulse`} />
      <p className="text-xs md:text-sm text-white leading-relaxed">
        <span className="font-bold text-white/95">{value}</span> {text}
      </p>
    </div>
  );
}

export function Beneficios() {
  const topBenefits = [
    {
      icon: BarChart3,
      title: "35% Aumento de Productividad",
      description: "Incremento promedio en la productividad mediante rutas optimizadas.",
    },
    {
      icon: TrendingDown,
      title: "25% Reducción de Costos",
      description: "Disminución en costos operativos por optimización de desplazamientos.",
    },
    {
      icon: Clock3,
      title: "40% Optimización de Tiempos",
      description: "Reducción en tiempos de desplazamiento entre clientes.",
    },
    {
      icon: CheckCircle2,
      title: "98% Precisión GPS",
      description: "Precisión en el seguimiento de vendedores en tiempo real.",
    },
  ];

  const realResults = [
    {
      value: "35% más de visitas",
      text: "por vendedor al día gracias a rutas optimizadas.",
      color: "bg-emerald-400",
    },
    {
      value: "28% de reducción",
      text: "en costos de combustible y mantenimiento.",
      color: "bg-blue-400",
    },
    {
      value: "22% de incremento",
      text: "en ventas por mejor cobertura territorial.",
      color: "bg-amber-400",
    },
    {
      value: "98% de precisión",
      text: "en el seguimiento de vendedores en tiempo real.",
      color: "bg-emerald-400",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-20 px-6 md:px-10 font-sans border-t border-border">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2">
            <div className="h-0.5 w-6 bg-[var(--ai-icon-color)] rounded-full" />
            <span className="text-xs font-bold text-[var(--ai-icon-color)] uppercase tracking-widest">
              Resultados comprobados
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            Beneficios que{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--text-gradient-light)" }}
            >
              transforman
            </span>{" "}
            <br className="hidden md:block" />
            su operación
          </h2>
        </div>

        {/* 1. LAS 4 TARJETAS SUPERIORES (GRID 4 COLUMNAS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topBenefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* 2. PANEL DE RESULTADOS REALES (GRANDE AZUL) */}
        <div
          className="rounded-[2rem] p-8 md:p-12 text-white flex flex-col lg:flex-row gap-10 md:gap-12 overflow-hidden relative shadow-xl border border-white/10"
          style={{ background: "var(--ai-section-bg)" }}
        >
          {/* Lado Izquierdo: Textos y Gráfico Mockup */}
          <div className="flex-1 space-y-6 z-10">
            <span className="text-[10px] font-extrabold text-blue-100 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
              Resultados reales con Geoldrix
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Nuestros clientes han experimentado mejoras significativas
            </h3>
            <p className="text-blue-100/90 text-sm leading-relaxed max-w-lg">
              Empresas en todo Ecuador han transformado sus operaciones comerciales con nuestra
              plataforma de seguimiento inteligente.
            </p>

            {/* Gráfico de Barras Mockup */}
            <div className="mt-8 p-4 md:p-6 bg-white/5 rounded-3xl border border-white/10 shadow-inner overflow-hidden">
              <img
                src="/img/DiagramaBarras.svg"
                alt="Gráfico de crecimiento"
                className="w-full h-auto opacity-70 mix-blend-screen dark:invert"
              />
            </div>
          </div>

          {/* Lado Derecho: Lista de Resultados */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 z-10">
            {realResults.map((result, index) => (
              <ResultItem key={index} {...result} />
            ))}
          </div>

          {/* Efecto de "Glow" sutil de fondo */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
