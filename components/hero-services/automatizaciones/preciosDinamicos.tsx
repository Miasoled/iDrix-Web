import { TrendingUp, BarChart, ArrowUpRight, Check } from "lucide-react";

export function PreciosDinamicos() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-t from-transparent to-amber-500/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-widest uppercase">
              <TrendingUp className="w-4 h-4" />
              Dynamic Pricing AI
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[hsl(200,50%,15%)] dark:text-white">
              Precios <br />
              <span className="light-text-gradient">Dinámicos</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Ajusta precios en tiempo real según demanda, competencia y promociones activas. Maximiza tus márgenes sin perder competitividad en el mercado.
            </p>
            
            <ul className="space-y-4">
              {[
                "Análisis de competencia en tiempo real",
                "Ajustes por estacionalidad y demanda",
                "Optimización automática de márgenes",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-muted-foreground uppercase tracking-tight">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Check size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             {/* Decorative glow */}
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-[3rem] -z-10" />
            
            <div className="bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 mb-6">
                   <BarChart size={32} />
                </div>
                <div className="text-6xl md:text-7xl font-black font-mono text-[hsl(207,76%,45%)] flex items-baseline justify-center gap-1 tracking-tighter">
                  +12<span className="text-3xl md:text-4xl">%</span>
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-4">Aumento promedio de margen</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Precio Base", val: "$49.99", type: "base" },
                  { label: "Ajuste por Demanda", val: "+$8.50", type: "plus" },
                  { label: "Ajuste Competencia", val: "+$3.20", type: "plus" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight">{row.label}</span>
                    <span className={`font-mono font-bold ${row.type === "plus" ? "text-emerald-500" : ""}`}>{row.val}</span>
                  </div>
                ))}
                
                <div className="flex justify-between items-center p-6 rounded-2xl bg-[hsl(207,76%,45%)] text-white shadow-xl shadow-blue-500/20 mt-6 group">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Precio Inteligente</span>
                    <span className="text-2xl font-black font-mono tracking-tighter">$61.69</span>
                  </div>
                  <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

