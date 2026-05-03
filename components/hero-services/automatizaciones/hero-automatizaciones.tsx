import Image from "next/image";
import { Zap, ShoppingCart, RefreshCw, Truck, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AutomatizacionesHero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden pt-24 pb-0 transition-colors duration-500 md:pt-28 lg:pt-32"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: "var(--hero-gradient)",
          }}
        />

        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "80%",
            height: "50%",
            borderRadius: "50%",
            background: "var(--hero-glow)",
            filter: "blur(40px)",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute left-1/2 top-[5%] -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "50%",
            height: "30%",
            borderRadius: "50%",
            background: "var(--hero-core-glow)",
            filter: "blur(30px)",
          }}
        />

        {/* Arcos */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-colors duration-500"
          style={{
            width: "160%",
            height: "140%",
            top: "-50%",
            borderLeft: "50px solid var(--arch-1)",
            borderRight: "50px solid var(--arch-1)",
            borderBottom: "50px solid var(--arch-1)",
            borderTop: "none",
            borderRadius: "0 0 50% 50%",
            filter: "blur(22px)",
            maskImage: "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, transparent 100%)",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-24 transition-colors duration-500 md:h-32"
          style={{
            background: "var(--hero-bottom-fade)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 text-center lg:flex-row lg:text-left lg:justify-between lg:gap-16 mb-20">
        <div className="flex-1 space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 rounded-full border border-[hsl(200,25%,85%)] bg-[hsl(0,0%,100%,0.8)] px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md transition-colors dark:border-primary/30 dark:bg-primary/10">
            <span className="flex items-center gap-1.5 rounded-full bg-[hsl(200,25%,96%)] px-2.5 py-0.5 text-xs font-medium text-[hsl(200,50%,15%)] dark:bg-primary/40 dark:text-white">
              <Zap size={12} className="text-[hsl(207,76%,45%)] dark:text-white" />
              E-commerce Automation
            </span>
            <span className="text-sm text-[hsl(200,15%,40%)] dark:text-white/90">
              Smart Flows by Idrix
            </span>
          </div>

          <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Automatización <br />
            <span className="light-text-gradient mb-2 pb-2 inline-block">Inteligente</span>
          </h1>

          <p className="mb-6 max-w-lg text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
            Optimiza cada paso de tu tienda online con flujos de trabajo automatizados. Reduce errores, ahorra tiempo y aumenta tus ventas liberando a tu equipo.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-4">
            <Button
              size="lg"
              className="bg-[hsl(207,76%,45%)] hover:bg-[hsl(207,76%,40%)] text-white rounded-2xl px-8 md:px-10 py-6 md:py-8 text-base md:text-lg shadow-xl dark:shadow-[0_0_30px_-5px_rgba(28,126,201,0.6)] transition-all active:scale-95"
            >
              Optimizar mi Tienda
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-card border-border rounded-2xl px-8 md:px-10 py-6 md:py-8 text-base md:text-lg text-foreground shadow-md hover:bg-muted dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all active:scale-95"
            >
              Ver Características
            </Button>
          </div>
        </div>

        {/* Right side decoration */}
        <div className="flex-1 relative w-full max-w-2xl mt-12 lg:mt-0 flex justify-center">
          <div className="relative group">
            {/* Glow effects around image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div
              className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden flex items-center justify-center p-8 bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/img/automatizacion.png"
                  alt="E-commerce automation illustration"
                  fill
                  className="object-contain pointer-events-none drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-card/95 backdrop-blur-md shadow-2xl rounded-3xl p-6 w-56 md:w-64 border border-border animate-bounce-slow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                   <h4 className="text-sm font-bold">E-commerce Flow</h4>
                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Smart Sync</p>
                </div>
              </div>
              <ul className="space-y-2 text-left">
                {["Actualización Stock 24/7", "Logística Proactiva"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Features */}
      <div className="w-full bg-card/30 border-t border-border backdrop-blur-md py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap justify-center md:justify-between gap-8 md:gap-12">
          {[
            { icon: RefreshCw, label: "Real-time Sync", color: "text-blue-500" },
            { icon: ShoppingCart, label: "Cart Recovery", color: "text-purple-500" },
            { icon: Truck, label: "Auto Logistics", color: "text-emerald-500" },
            { icon: MessageSquare, label: "AI Support 24/7", color: "text-amber-500" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className={`p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 shadow-sm transition-all group-hover:scale-110`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <span className="font-bold text-[hsl(200,50%,15%)] dark:text-white/90 tracking-tight">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutomatizacionesCards() {
  return (
    <section className="px-8 md:px-16 py-20 md:py-32 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-6xl">
        <div className="w-full mb-12 flex items-center gap-3">
          <div className="h-1 w-12 bg-[var(--ai-icon-color)] rounded-full"></div>
          <span className="text-[var(--ai-icon-color)] font-bold uppercase tracking-widest text-sm">
            Soluciones de Automatización
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: RefreshCw,
              title: "Sincronización Multicanal",
              desc: "Actualiza automáticamente el stock en Shopify, Amazon y Mercado Libre en tiempo real.",
              color: "blue"
            },
            {
              icon: ShoppingCart,
              title: "Marketing Predictivo",
              desc: "Recuperación automática de carritos abandonados y ofertas personalizadas.",
              color: "purple"
            },
            {
              icon: Truck,
              title: "Logística sin Fricciones",
              desc: "Generación automática de guías y notificaciones de rastreo proactivas.",
              color: "emerald"
            },
            {
              icon: MessageSquare,
              title: "Atención con IA 24/7",
              desc: "Chatbots inteligentes integrados con tu catálogo para resolver dudas de forma autónoma.",
              color: "amber"
            }
          ].map((item, i) => (
            <Card key={i} className="group relative shadow-lg hover:shadow-2xl rounded-[2.5rem] bg-card p-10 border-none transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
               {/* Decorative background glow */}
               <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-${item.color}-500`} />
               
               <div className={`w-14 h-14 rounded-[1.25rem] bg-${item.color}-500/10 flex items-center justify-center mb-8 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon size={28} />
              </div>
              
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-[hsl(207,76%,45%)] transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
              
              {/* Bottom decorative bar */}
              <div className={`mt-8 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-${item.color}-500/50`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

