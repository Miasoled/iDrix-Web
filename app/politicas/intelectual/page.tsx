import { Navbar } from "@/components/Navbar";
import HeroPrivacidad from "@/components/hero-services/politicas/hero-privacidad";
import { IntelectualSection } from "@/components/hero-services/politicas/componente-intelectual";
import FooterIdrix from "@/components/footer";

export default function Intelectual() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <Navbar />
      <HeroPrivacidad />
      <IntelectualSection />
      <FooterIdrix />
    </main>
  );
}
