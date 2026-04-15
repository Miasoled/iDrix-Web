"use client";

import { Navbar } from "@/components/Navbar";
import { HeroWeb } from "@/components/hero-services/diseno-web/hero-web";
import {
  PortafolioEcommerce,
  PortafolioInformativo,
} from "@/components/hero-services/diseno-web/portafolio";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, MessageSquare, ShieldCheck } from "lucide-react";
import { Zap, Smile, LifeBuoy, Smartphone, Search, Cloud } from "lucide-react";

import FooterIdrix from "@/components/footer";
import { ScrollReveal } from "@/components/page-wrapper";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal direction="fadeUp">
        <HeroWeb />
      </ScrollReveal>
      <ScrollReveal direction="fadeIn">
        <div className="w-100% text-center mt-8">
          <h1 className="font-semibold text-3xl font-bold">¿Porqué elegir iDrix?</h1>
        </div>
      </ScrollReveal>
      <ScrollReveal direction="slideLeft">
        <div className="px-6 lg:px-20 py-10">
          {/* Cards */}
          <div className="px-6 lg:px-20 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card */}
              <Card className="rounded-2xl shadow-sm hover:shadow-md transition group">
                <CardHeader>
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-2 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Zap size={18} />
                  </div>
                  <CardTitle>Experiencia sólida</CardTitle>
                  <CardDescription>
                    Años en la industria garantizan un conocimiento técnico impecable en cada
                    desarrollo.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl shadow-sm hover:shadow-md transition group">
                <CardHeader>
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-2 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Smile size={18} />
                  </div>
                  <CardTitle>Satisfacción Total</CardTitle>
                  <CardDescription>
                    Trabajamos estrechamente con usted para asegurar que el resultado supere sus
                    expectativas.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl shadow-sm hover:shadow-md transition group">
                <CardHeader>
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-2 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <LifeBuoy size={18} />
                  </div>
                  <CardTitle>Soporte Continuo</CardTitle>
                  <CardDescription>
                    No lo dejamos solo; ofrecemos mantenimiento preventivo y correctivo
                    post-lanzamiento.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl shadow-sm hover:shadow-md transition group">
                <CardHeader>
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-2 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Smartphone size={18} />
                  </div>
                  <CardTitle>Responsive Design</CardTitle>
                  <CardDescription>
                    Su sitio se verá perfecto en cualquier dispositivo, desde smartphones hasta
                    monitores 4k.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl shadow-sm hover:shadow-md transition group">
                <CardHeader>
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-2 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Search size={18} />
                  </div>
                  <CardTitle>Posicionamiento SEO</CardTitle>
                  <CardDescription>
                    Estructura optimizada para buscadores que mejora su visibilidad orgánica en
                    Google.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-2xl shadow-sm hover:shadow-md transition group">
                <CardHeader>
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-2 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Cloud size={18} />
                  </div>
                  <CardTitle>Hosting Gratis</CardTitle>
                  <CardDescription>
                    Incluimos el primer año de alojamiento web de alta velocidad sin costo adicional.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </ScrollReveal>
      {/* porque Elegirnos */}
      <ScrollReveal direction="slideRight">
        <div className="px-6 lg:px-20 py-16 bg-muted/40 padding-20">
          {/* Título */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Lo que incluimos en su proyecto</h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 padding-20">
            {/* Card 1 */}
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition group text-center py-8">
              <CardHeader className="items-center justify-items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-3 transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <MessageSquare size={20} />
                </div>
                <CardTitle>Formulario de Contacto</CardTitle>
                <CardDescription>
                  Integración con su correo para recibir consultas directas de sus clientes
                  potenciales.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition group text-center py-8">
              <CardHeader className="items-center justify-items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-3 transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link size={20} />
                </div>
                <CardTitle>Redes Sociales</CardTitle>
                <CardDescription>
                  Enlaces directos y botones de compartir para maximizar su presencia en comunidades
                  digitales.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 3 */}
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition group text-center py-8">
              <CardHeader className="items-center justify-items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-3 transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <ShieldCheck size={20} />
                </div>
                <CardTitle>Soporte y Garantía</CardTitle>
                <CardDescription>
                  Certificación de calidad y soporte técnico garantizado para la estabilidad de su
                  sitio.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal direction="scaleIn">
        <PortafolioInformativo />
      </ScrollReveal>
      <ScrollReveal direction="fadeIn">
        <PortafolioEcommerce />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
