import { RefreshCw, Package, AlertCircle, CheckCircle2 } from "lucide-react";

const stocks = [
  { label: "Smart TV 55\"", percent: 98, color: "bg-emerald-500", icon: Package },
  { label: "Laptop Pro 16\"", percent: 85, color: "bg-emerald-500", icon: Package },
  { label: "Smartphone X", percent: 92, color: "bg-emerald-500", icon: Package },
  { label: "Wireless Buds", percent: 35, color: "bg-amber-500", icon: AlertCircle },
  { label: "Gaming Mouse", percent: 68, color: "bg-emerald-500", icon: Package },
  { label: "Mechanical Keyboard", percent: 12, color: "bg-red-500", icon: AlertCircle },
];

export function InventarioTiempoReal() {
  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
            Live Inventory Updates
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[hsl(200,50%,15%)] dark:text-white">
            Inventario en <span className="light-text-gradient">Tiempo Real</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sincronización al segundo en todos tus canales. Evita sobreventas y gestiona tus productos con precisión absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stocks.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/20 dark:border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 dark:hover:bg-white/10"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                     <item.icon size={16} className={item.percent < 40 ? "text-amber-500" : "text-emerald-500"} />
                     <span className="font-bold text-lg tracking-tight">{item.label}</span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Stock Actual</span>
                </div>
                <div
                  className={`text-4xl font-black font-mono tabular-nums tracking-tighter ${
                    item.percent < 30 ? "text-red-500" : item.percent < 60 ? "text-amber-500" : "text-emerald-500"
                  }`}
                >
                  {item.percent}%
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 bg-muted/50 rounded-full overflow-hidden border border-border/50 p-0.5">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 relative`}
                    style={{ width: `${item.percent}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <span>Crítico</span>
                  <span>Óptimo</span>
                </div>
              </div>
              
              {/* Card status message */}
              <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-2">
                 {item.percent > 50 ? (
                   <CheckCircle2 size={14} className="text-emerald-500" />
                 ) : (
                   <AlertCircle size={14} className="text-amber-500" />
                 )}
                 <span className="text-[10px] font-bold text-muted-foreground uppercase">
                    {item.percent > 50 ? "Nivel de stock saludable" : "Reposición recomendada"}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

