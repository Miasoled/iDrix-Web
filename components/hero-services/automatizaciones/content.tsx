import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Zap, 
  BarChart3, 
  Settings2,
  Globe,
  Database
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AutomationWorkflow() {
  const steps = [
    {
      title: "Captura de Pedido",
      desc: "Sincronización instantánea desde cualquier marketplace o tienda propia.",
      icon: Globe
    },
    {
      title: "Validación de Datos",
      desc: "IA que verifica direcciones, fraude y disponibilidad de stock real.",
      icon: CheckCircle2
    },
    {
      title: "Procesamiento ERP",
      desc: "Integración automática con tu sistema contable sin intervención humana.",
      icon: Database
    },
    {
      title: "Logística Inteligente",
      desc: "Asignación del mejor transportista y envío de tracking al cliente.",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">El Camino hacia la Eficiencia</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transformamos procesos manuales lentos en flujos de trabajo ágiles y precisos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 relative z-10 border border-blue-500/20">
              <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function IntegrationsSection() {
  const platforms = [
    "Shopify", "WooCommerce", "VTEX", "Magento", 
    "Mercado Libre", "Amazon", "SAP", "Odoo"
  ];

  return (
    <section className="py-20 bg-muted/30 dark:bg-white/5 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-6">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase">Ecosistema</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Conectamos tu negocio <br /> con el mundo
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Nuestras automatizaciones se integran nativamente con las plataformas líderes del mercado. No importa dónde vendas, iDrix unifica tu operación.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-border flex items-center justify-center overflow-hidden">
            {/* Simulación visual de conexiones */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-blue-500 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/50 rounded-full" />
            </div>
            <Zap className="w-24 h-24 text-blue-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyAutomate() {
  const benefits = [
    {
      title: "Eliminación de Errores",
      desc: "El 99% de los errores en E-commerce son humanos. La automatización garantiza precisión total en pedidos y facturación.",
      icon: Settings2
    },
    {
      title: "Escalabilidad Infinita",
      desc: "Procesa 10 o 10,000 pedidos al día sin aumentar tu personal operativo.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {benefits.map((b, i) => (
          <Card key={i} className="bg-card border-none shadow-2xl rounded-[2rem] overflow-hidden p-8 hover:-translate-y-2 transition-transform">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <b.icon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{b.desc}"
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
