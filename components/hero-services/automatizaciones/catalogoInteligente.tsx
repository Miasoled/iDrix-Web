import { Sparkles, Eye, Target, MousePointer2, Star } from "lucide-react";

export function CatalogoInteligente() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 animate-pulse" />
              AI-Driven Conversion
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-[hsl(200,50%,15%)] dark:text-white">
              Catálogo <br />
              <span className="light-text-gradient">Inteligente</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nuestra IA optimiza la presentación de productos según el comportamiento de cada cliente, mostrando lo que realmente les interesa y aumentando significativamente la tasa de conversión.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: Eye, label: "Visualización Dinámica", desc: "Adaptable al usuario" },
                 { icon: Target, label: "Recomendaciones", desc: "Precisión del 95%" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                       <item.icon size={18} />
                    </div>
                    <div>
                       <div className="text-sm font-bold uppercase tracking-tight">{item.label}</div>
                       <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
             {/* Decorative glow background */}
            <div className="absolute -inset-10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-[3rem] p-12 md:p-16 flex items-center justify-center min-h-[400px] border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden group">
              <div className="relative z-10 text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 animate-pulse" />
                  <Sparkles className="w-24 h-24 mx-auto text-purple-500 relative z-10 animate-bounce-slow" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black tracking-tight text-[hsl(200,50%,15%)] dark:text-white">El producto correcto</div>
                  <div className="text-xl font-bold text-muted-foreground italic">en el momento preciso</div>
                </div>
                
                {/* Floating elements inside the visual */}
                <div className="absolute top-0 right-0 p-4 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 -rotate-12 animate-float">
                   <MousePointer2 size={24} className="text-blue-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 bg-[hsl(207,76%,45%)] rounded-2xl shadow-lg border border-white/20 rotate-12 animate-float-delayed">
                   <Star size={24} className="text-white fill-white" />
                </div>
              </div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

