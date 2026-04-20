import { Sparkles } from "lucide-react";

export function CatalogoInteligente() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400">
              <Sparkles className="w-6 h-6" />
              <span className="uppercase tracking-widest text-sm font-bold">IA Personalizada</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
              Catálogo Inteligente
            </h2>
            <p className="text-xl text-muted-foreground">
              Nuestra IA optimiza la presentación de productos según el comportamiento de cada
              cliente, aumentando significativamente la tasa de conversión.
            </p>
          </div>

          <div className="order-1 lg:order-2 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-3xl p-12 flex items-center justify-center min-h-[380px] relative overflow-hidden">
            <div className="text-center">
              <Sparkles className="w-20 h-20 mx-auto mb-6 text-purple-500" />
              <div className="text-3xl font-semibold mb-4">El producto correcto</div>
              <div className="text-2xl text-muted-foreground">en el momento correcto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
