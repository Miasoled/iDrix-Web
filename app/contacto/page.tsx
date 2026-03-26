import { Navbar } from "@/components/Navbar";
import { HeroContacto } from "@/components/hero-services/contact/hero-contacto";

export default function Contacto() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--hero-soft-blue)" }}
    >
      <Navbar />
      <HeroContacto />
    </main>
  );
}
