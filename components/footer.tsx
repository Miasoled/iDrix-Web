"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "./page-wrapper";

export default function FooterIdrix() {
  return (
    <footer className="bg-background border-t border-border">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Logo + Descripción */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  i
                </div>
                <span className="text-2xl font-semibold tracking-tight">iDrix</span>
              </div>

              <p className="text-muted-foreground max-w-md">
                Desarrollo de software a medida. Convierte tu visión en soluciones digitales reales y
                escalables.
              </p>

              {/* Redes sociales */}
              <div className="flex gap-4 mt-8">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors border border-border"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors border border-border"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors border border-border"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Productos */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-foreground mb-5">PRODUCTOS</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Aplicaciones Móviles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Plataformas SaaS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Consultoría Tech
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-foreground mb-5">EMPRESA</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-3">
              <h3 className="font-semibold text-foreground mb-5">LEGAL</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Licencias
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea inferior */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 iDrix Technology. Todos los derechos reservados.</p>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Estado del Sistema
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Documentación
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
