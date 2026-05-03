import { 
  CheckCircle2, 
  Layers, 
  Zap, 
  BarChart3, 
  Settings2,
  Globe,
  Database,
  Cpu
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function AutomationWorkflow() {
  const steps = [
    {
      title: "Captura de Pedido",
      desc: "Sincronización instantánea desde cualquier marketplace o tienda propia.",
      icon: Globe,
      color: "blue"
    },
    {
      title: "Validación de Datos",
      desc: "IA que verifica direcciones, fraude y disponibilidad de stock real.",
      icon: CheckCircle2,
      color: "emerald"
    },
    {
      title: "Procesamiento ERP",
      desc: "Integración automática con tu sistema contable sin intervención humana.",
      icon: Database,
      color: "purple"
    },
    {
      title: "Logística Inteligente",
      desc: "Asignación del mejor transportista y envío de tracking al cliente.",
      icon: Zap,
      color: "amber"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-4 h-4" />
            Operational Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[hsl(200,50%,15%)] dark:text-white mb-6">
             El Camino hacia la <span className="light-text-gradient">Eficiencia</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transformamos procesos manuales lentos en flujos de trabajo ágiles, precisos y completamente autónomos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-3xl bg-white dark:bg-white/5 border border-white/20 shadow-xl flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                <div className={`absolute inset-0 bg-${step.color}-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-3xl`} />
                <step.icon className={`w-10 h-10 text-${step.color}-500`} />
                
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[hsl(207,76%,45%)] text-white text-xs font-black flex items-center justify-center shadow-lg">
                   {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
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
    <section className="py-24 md:py-32 bg-[hsl(210,40%,98%)] dark:bg-white/5 border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              Connected Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(200,50%,15%)] dark:text-white leading-[1.1]">
              Conectamos tu negocio <br />
              <span className="light-text-gradient">con el mundo</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestras automatizaciones se integran nativamente con las plataformas líderes del mercado. No importa dónde vendas, iDrix unifica tu operación.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((p) => (
                <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-border/50 shadow-sm transition-all hover:border-[hsl(207,76%,45%)] group">
                  <div className="w-2 h-2 rounded-full bg-blue-500 transition-all group-hover:scale-150" />
                  <span className="text-sm font-bold tracking-tight">{p}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group h-[400px] md:h-[500px]">
             {/* Dynamic background visualization */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[3rem] border border-white/20 shadow-inner flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-blue-500/50 rounded-full animate-ping-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-500/30 rounded-full animate-spin-slow" />
              </div>
              
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse" />
                 <Zap className="w-32 h-32 text-blue-500 relative z-10 animate-float" />
              </div>
              
              {/* Floating tech icons simulation */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-float-delayed" />
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-float-delayed" />
            </div>
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
      icon: Settings2,
      color: "blue"
    },
    {
      title: "Escalabilidad Infinita",
      desc: "Procesa 10 o 10,000 pedidos al día sin aumentar tu personal operativo ni comprometer la calidad.",
      icon: BarChart3,
      color: "purple"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {benefits.map((b, i) => (
          <Card key={i} className="group bg-card border-none shadow-2xl rounded-[3rem] overflow-hidden p-10 md:p-12 hover:-translate-y-2 transition-all duration-500 relative">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${b.color}-500 opacity-[0.03] group-hover:opacity-[0.08] blur-3xl rounded-full transition-opacity`} />
            
            <div className="flex flex-col gap-8 relative z-10">
              <div className={`w-20 h-20 rounded-[1.5rem] bg-${b.color}-500 flex-shrink-0 flex items-center justify-center text-white shadow-xl shadow-${b.color}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                <b.icon size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-6 tracking-tighter text-[hsl(200,50%,15%)] dark:text-white">{b.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed italic font-medium">
                  &quot;{b.desc}&quot;
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

