import { Navbar } from "@/components/Navbar";
import { BrochuresPage } from "@/components/hero-services/nosotros/brochures-page";
import { ScrollReveal } from "@/components/page-wrapper";
import FooterIdrix from "@/components/footer";

export default function Brochures() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollReveal direction="fadeIn">
        <BrochuresPage />
      </ScrollReveal>
      <FooterIdrix />
    </main>
  );
}
