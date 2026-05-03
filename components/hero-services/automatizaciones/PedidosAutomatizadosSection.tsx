import { Zap, ArrowRight, ShoppingBag, Terminal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PedidosAutomatizadosSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent to-blue-500/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Lado izquierdo - Texto */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Zap className="w-4 h-4" />
              Real-time Integration
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-[hsl(200,50%,15%)] dark:text-white">
              Pedidos <br />
              <span className="light-text-gradient">Automatizados</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Sincronización instantánea entre tu tienda online y el ERP. Los pedidos fluyen automáticamente sin intervención manual, eliminando errores de transcripción.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[hsl(207,76%,45%)] hover:bg-[hsl(207,76%,40%)] text-white rounded-2xl px-8 py-7 group transition-all active:scale-95">
                Ver flujo en acción
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                 <div className="text-2xl font-bold text-[hsl(207,76%,45%)]">0.5s</div>
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Latencia de Sync</p>
              </div>
              <div className="space-y-2">
                 <div className="text-2xl font-bold text-[hsl(207,76%,45%)]">100%</div>
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Precisión de Datos</p>
              </div>
            </div>
          </div>

          {/* Lado derecho - Visual de Sync */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative bg-card/50 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="flex items-center justify-between mb-16 relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-lg flex items-center justify-center border border-border">
                    <ShoppingBag className="w-7 h-7 text-blue-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Frontend</div>
                    <div className="text-xs font-bold">Shopify</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 animate-pulse" />
                    <Zap className="w-10 h-10 text-blue-500 relative z-10" />
                  </div>
                  <div className="text-[10px] font-mono font-black text-blue-500 mt-2 tracking-[4px] uppercase animate-pulse">
                    Syncing
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-lg flex items-center justify-center border border-border">
                    <Database className="w-7 h-7 text-purple-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Backend</div>
                    <div className="text-xs font-bold">Idrix ERP</div>
                  </div>
                </div>
              </div>

              {/* Pedidos fluyendo */}
              <div className="space-y-4 relative z-10">
                {[
                  { id: "3921", val: "$129.00", status: "Done" },
                  { id: "3922", val: "$89.50", status: "Done" },
                  { id: "3923", val: "$245.00", status: "In Progress" },
                ].map((pedido, i) => (
                  <div key={i} className="group flex items-center gap-4 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/20 transition-all hover:scale-[1.02] hover:bg-white/60">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                       <Terminal size={14} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold">Pedido #{pedido.id}</div>
                      <div className="text-[10px] text-muted-foreground">{pedido.val}</div>
                    </div>
                    <div className={`text-[10px] font-bold px-2 py-1 rounded-full ${pedido.status === "Done" ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500 animate-pulse"}`}>
                      {pedido.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-xs font-medium text-muted-foreground flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Sincronización activa y segura
                </p>
              </div>
            </div>
            
            {/* Background elements for depth */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-blue-500/10 rounded-[2.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}

