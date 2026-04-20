import { RefreshCw } from "lucide-react";

const stocks = [
  { label: "Producto A", percent: 98, color: "bg-emerald-500" },
  { label: "Producto B", percent: 85, color: "bg-emerald-500" },
  { label: "Producto C", percent: 92, color: "bg-emerald-500" },
  { label: "Producto D", percent: 35, color: "bg-amber-500" },
  { label: "Producto E", percent: 68, color: "bg-emerald-500" },
];

export function InventarioTiempoReal() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-[var(--ai-icon-color)]">
            <RefreshCw className="w-6 h-6" />
            <span className="uppercase tracking-widest text-sm font-bold">
              Actualización al segundo
            </span>
          </div>
          <h2 className="text-5xl font-semibold tracking-tight">Inventario en Tiempo Real</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Stock actualizado al segundo. Evita sobreventas y gestiona tus productos con precisión
            absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stocks.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-3xl p-8 border border-border/50 hover:border-[var(--ai-icon-color)]/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-semibold text-lg">{item.label}</div>
                  <div className="text-sm text-muted-foreground">Stock actual</div>
                </div>
                <div
                  className={`text-5xl font-mono font-semibold tabular-nums ${item.percent < 50 ? "text-amber-500" : "text-emerald-500"}`}
                >
                  {item.percent}%
                </div>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
