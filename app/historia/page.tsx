import { Navbar } from "@/components/Navbar";
import { HistoriaPage } from "@/components/hero-services/nosotros/historia";
import { ScrollReveal } from "@/components/page-wrapper";
import FooterIdrix from "@/components/footer";

export default function Historia() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <HistoriaPage />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
