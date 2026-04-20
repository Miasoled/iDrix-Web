import { TrendingUp } from "lucide-react";

export function PreciosDinamicos() {
  return (
    <section className="py-20 px-6 bg-background/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-amber-600 dark:text-amber-400">
              <TrendingUp className="w-6 h-6" />
              <span className="uppercase tracking-widest text-sm font-bold">
                Inteligencia de Precios
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
              Precios Dinámicos
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
              Ajusta precios en tiempo real según demanda, competencia y promociones activas.
              Maximiza tus márgenes sin perder ventas.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-10 shadow-xl border border-border/50">
            <div className="text-center mb-8">
              <div className="text-7xl font-mono font-semibold text-emerald-500 flex items-baseline justify-center gap-1">
                +12<span className="text-4xl">%</span>
              </div>
              <p className="text-muted-foreground mt-2">Aumento promedio de margen</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-border">
                <div>Precio base</div>
                <div className="font-medium">$49.99</div>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <div>Ajuste por demanda alta</div>
                <div className="text-emerald-500 font-medium">+$8.50</div>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <div>Ajuste por competencia</div>
                <div className="text-emerald-500 font-medium">+$3.20</div>
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="font-semibold">Precio final inteligente</div>
                <div className="text-2xl font-semibold text-emerald-500">$61.69</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
