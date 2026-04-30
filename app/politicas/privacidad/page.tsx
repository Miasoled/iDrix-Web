import { Navbar } from "@/components/Navbar";
import HeroPrivacidad from "@/components/hero-services/politicas/hero-privacidad";
import { PrivacidadSection } from "@/components/hero-services/politicas/componente-privacidad";
import FooterIdrix from "@/components/footer";

export default function Privacidad() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <Navbar />
      <HeroPrivacidad />
      <PrivacidadSection />
      <FooterIdrix />
    </main>
  );
}
