import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PedidosAutomatizadosSection() {
  return (
    <section className="py-20 px-6 bg-background/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Lado izquierdo - Texto */}
          <div className="lg:w-5/12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[var(--ai-icon-color)]/10 text-[var(--ai-icon-color)] text-sm font-medium">
              <Zap className="w-4 h-4" />
              AUTOMATIZACIÓN EN TIEMPO REAL
            </div>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Pedidos
              <br />
              Automatizados
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Sincronización instantánea entre tu tienda online y el ERP. Los pedidos fluyen
              automáticamente sin intervención manual.
            </p>

            <Button size="lg" className="group">
              Ver flujo en acción
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
            </Button>
          </div>

          {/* Lado derecho - Visual de Sync */}
          <div className="lg:w-7/12 relative">
            <div className="relative bg-card rounded-3xl p-10 shadow-2xl border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="text-sm text-muted-foreground">TIENDA ONLINE</div>
                  <div className="text-2xl font-semibold">Shopify / WooCommerce</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-[var(--ai-icon-color)] animate-pulse">
                    <Zap className="w-10 h-10" />
                  </div>
                  <div className="text-xs font-mono text-[var(--ai-icon-color)] mt-1 tracking-[3px]">
                    SYNC
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-muted-foreground">ERP / SISTEMA INTERNO</div>
                  <div className="text-2xl font-semibold">Idrix ERP</div>
                </div>
              </div>

              {/* Líneas de sincronización animadas */}
              <div className="space-y-8">
                {["Pedido #3921 - $129", "Pedido #3922 - $89", "Pedido #3923 - $245"].map(
                  (pedido, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--ai-icon-color)] to-transparent" />
                      <div className="text-sm font-medium whitespace-nowrap px-4 py-1 bg-[var(--ai-icon-color)]/10 rounded-full text-[var(--ai-icon-color)]">
                        {pedido}
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--ai-icon-color)] to-transparent" />
                    </div>
                  ),
                )}
              </div>

              <div className="mt-10 text-center text-sm text-muted-foreground">
                Sincronización{" "}
                <span className="font-mono text-[var(--ai-icon-color)]">instantánea</span> • Sin
                intervención manual
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
