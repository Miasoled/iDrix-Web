"use client";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Send,
} from "lucide-react";

export function Formulario() {
  return (
    <div className="relative z-10 w-full max-w-6xl px-4 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch min-h-0">
        {/* LEFT */}
        <div className="flex flex-col gap-6 h-full min-h-0">
          {/* Horario */}
          <div className="rounded-2xl p-6 bg-white border dark:border-[hsl(207,68%,60%)] dark:shadow-[0_0_25px_rgba(28,126,201,0.4)] dark:bg-white/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-[hsl(207,76%,45%)]">
                Horario de atención
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 rounded-xl p-4 bg-[hsl(210,40%,96%)] dark:bg-white/5 ">
                <p className="text-xs text-muted-foreground">LUNES – VIERNES</p>
                <p className="font-bold text-foreground">08:30 – 18:00</p>
              </div>
              <div className="flex-1 rounded-xl p-4 bg-[hsl(210,40%,96%)] dark:bg-white/5">
                <p className="text-xs text-muted-foreground">SÁBADOS</p>
                <p className="font-bold text-foreground">09:00 – 18:00</p>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="rounded-2xl p-6 bg-[hsl(217,60%,18%)] flex-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[hsl(207,76%,55%)] rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-[hsl(207,76%,55%)]">
                Contacto Directo
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: "VENTAS", valor: "0983 516 343" },
                { icon: Phone, label: "SOPORTE", valor: "0939 943 434" },
                {
                  icon: Mail,
                  label: "GERENCIA",
                  valor: "gerencia@idrix.com.ec",
                },
                {
                  icon: Mail,
                  label: "SOPORTE",
                  valor: "idrix.technology@gmail.com",
                },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[hsl(207,76%,60%)]"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {c.valor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Redes */}
          <div className="rounded-2xl p-6 bg-white border dark:border-[hsl(207,68%,60%)] dark:shadow-[0_0_25px_rgba(28,126,201,0.4)] dark:bg-white/5 ">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[hsl(207,76%,45%)] rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-[hsl(207,76%,45%)]">
                Síguenos en
              </span>
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-[hsl(207,76%,45%)] hover:bg-[hsl(207,76%,45%)] hover:text-white transition-all dark:border-white/10"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-2xl p-8 bg-[hsl(217,60%,18%)] text-white h-full flex flex-col">
          <p className="text-xs text-white/50 uppercase tracking-widest mb-2">
            Formulario de contacto
          </p>
          <h3 className="text-4xl font-bold light-text-gradient dark:bg-gradient-to-r dark:from-[hsl(207,76%,60%)] dark:to-[hsl(200,80%,70%)] dark:bg-clip-text dark:text-transparent mb-2">
            Cuéntanos tu idea
          </h3>
          <p className="text-sm text-white/60 mb-6">
            Completa el formulario y nos pondremos en contacto contigo a la
            brevedad posible.
          </p>

          <div className="flex flex-col gap-4 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/15 text-white placeholder:text-white/30 outline-none focus:border-[hsl(207,76%,55%)] transition"
                placeholder="Tu nombre completo"
              />
              <input
                type="email"
                className="rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/15 text-white placeholder:text-white/30 outline-none focus:border-[hsl(207,76%,55%)] transition"
                placeholder="tu@correo.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/15 text-white placeholder:text-white/30 outline-none focus:border-[hsl(207,76%,55%)] transition"
                placeholder="+593 9XX XXX XXX"
              />
              <select className="rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/15 text-white/60 outline-none focus:border-[hsl(207,76%,55%)] transition">
                <option className="bg-[hsl(217,60%,18%)]">
                  Seleccionar servicio...
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Desarrollo de Software
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Desarrollo Móvil
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Desarrollo de Sitios Web
                </option>
                <option className="bg-[hsl(217,60%,18%)]">ERP</option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Geolocalización para vendedores
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Facturación Electrónica
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Computación en la Nube
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Seguridad Informática
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Machine Learning
                </option>
                <option className="bg-[hsl(217,60%,18%)]">
                  Peritaje Informático
                </option>
              </select>
            </div>
            <textarea
              rows={4}
              className="rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/15 text-white placeholder:text-white/30 outline-none focus:border-[hsl(207,76%,55%)] transition resize-none flex-1"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-[hsl(207,76%,45%)] py-3.5 text-sm font-semibold text-white hover:bg-[hsl(207,76%,40%)] transition-all mt-auto">
              <Send size={16} strokeWidth={1.5} />
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
