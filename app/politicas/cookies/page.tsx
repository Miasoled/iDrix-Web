import { Navbar } from "@/components/Navbar";
import HeroPrivacidad from "@/components/hero-services/politicas/hero-privacidad";
import { CookiesSection } from "@/components/hero-services/politicas/componente-cookies";
import FooterIdrix from "@/components/footer";

export default function Cookies() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <Navbar />
      <HeroPrivacidad />
      <CookiesSection />
      <FooterIdrix />
    </main>
  );
}
