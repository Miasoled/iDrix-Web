import Image from "next/image";
import { Zap, ShoppingCart, RefreshCw, Truck, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SVGProps } from "react";

export function AutomatizacionesHero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-28 pb-0 overflow-hidden">
      {/* TITLE */}
      <div className="text-center max-w-4xl px-6">
        <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(200,50%,15%)] transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          Automatización Inteligente
        </h1>
        <h2 className="mb-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight light-text-gradient transition-all dark:bg-gradient-to-b dark:from-white dark:to-white/70 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_25px_rgba(28,126,201,0.5)] md:mb-5 md:text-5xl lg:text-6xl xl:text-[4.2rem]">
          con Idrix
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-balance text-base leading-relaxed text-[hsl(200,15%,45%)] dark:text-muted-foreground transition-colors md:text-lg">
          Optimiza cada paso de tu tienda online con flujos de trabajo automatizados. Reduce
          errores, ahorra tiempo y aumenta tus ventas liberando a tu equipo de tareas repetitivas.
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="w-full flex justify-center mt-10">
        <HeroImg />
      </div>
    </section>
  );
}

function HeroImg() {
  return (
    <section className="flex flex-row items-center justify-center py-10">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full px-6">
        {/* ── Círculo con sombra ── */}
        <div className="relative flex-shrink-0">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4
                w-[300px] md:w-[550px] h-[20px] rounded-full pointer-events-none"
            style={{
              background: "var(--cloud-glow)",
              filter: "blur(15px)",
              zIndex: 0,
            }}
          />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full"
            style={{
              background: "var(--hero-soft-blue)",
              boxShadow:
                "0 0 60px var(--arch-3), 0 4px 16px var(--arch-2), inset 0 1px 0 rgba(255,255,255,0.8)",
              zIndex: 1,
            }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "var(--hero-core-glow)", opacity: 0.5 }}
            />
          </div>

          <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] z-20 rounded-full overflow-hidden">
            <Image
              src="/img/automatizacion.png"
              alt="E-commerce automation illustration"
              fill
              className="object-contain pointer-events-none "
            />
          </div>
        </div>

        {/* ── Panel derecho ── */}
        <div className="flex flex-col gap-6 max-w-md">
          <div
            className="rounded-2xl px-6 py-6"
            style={{
              background: "var(--info-bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 20px var(--arch-1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[var(--ai-icon-color)]" />
              <span className="text-lg font-bold tracking-tight">E-commerce Flow</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sincroniza inventarios, automatiza marketing y gestiona envíos en una sola plataforma
              inteligente.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai-icon-color)]" />
                Actualización de Stock 24/7
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai-icon-color)]" />
                Recuperación de Carritos
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai-icon-color)]" />
                Logística Automatizada
              </li>
            </ul>
          </div>

          <button
            className="w-full py-4 rounded-2xl text-lg font-semibold tracking-wide
                       transition-all duration-200 active:scale-95 cursor-pointer
                       hover:brightness-110 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(205,90%,60%) 0%, hsl(215,85%,50%) 100%)",
              color: "var(--primary-foreground)",
            }}
          >
            Optimizar mi Tienda
          </button>
        </div>
      </div>
    </section>
  );
}

export function AutomatizacionesCards() {
  return (
    <section className="p-6 md:p-10 pt-16 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-6xl mb-12 flex items-center gap-3">
        <div className="h-1 w-12 bg-[var(--ai-icon-color)] rounded-full"></div>
        <span className="text-[var(--ai-icon-color)] font-bold uppercase tracking-widest text-sm">
          Soluciones de Automatización
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Card 1: Inventario */}
        <Card className="shadow-xl rounded-3xl bg-card hover:shadow-2xl transition-shadow border-none overflow-hidden">
          <div className="p-8 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-bold leading-tight">
                Sincronización Multicanal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Actualiza automáticamente el stock en Shopify, Amazon y Mercado Libre en tiempo
                real, evitando sobreventas y quiebres de stock.
              </p>
            </CardContent>
          </div>
        </Card>

        {/* Card 2: Marketing */}
        <Card className="shadow-xl rounded-3xl bg-card hover:shadow-2xl transition-shadow border-none overflow-hidden">
          <div className="p-8 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
              <ShoppingCart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-bold leading-tight">
                Marketing Predictivo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recuperación automática de carritos abandonados y ofertas personalizadas basadas en
                el comportamiento histórico de navegación.
              </p>
            </CardContent>
          </div>
        </Card>

        {/* Card 3: Logística */}
        <Card className="shadow-xl rounded-3xl bg-card hover:shadow-2xl transition-shadow border-none overflow-hidden">
          <div className="p-8 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
              <Truck className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-bold leading-tight">
                Logística sin Fricciones
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Generación automática de guías, asignación de transportistas y notificaciones de
                rastreo proactivas para tus clientes.
              </p>
            </CardContent>
          </div>
        </Card>

        {/* Card 4: Customer Success */}
        <Card className="shadow-xl rounded-3xl bg-card hover:shadow-2xl transition-shadow border-none overflow-hidden">
          <div className="p-8 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-bold leading-tight">
                Atención con IA 24/7
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chatbots inteligentes integrados con tu catálogo para resolver dudas, sugerir
                productos y gestionar devoluciones de forma autónoma.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
