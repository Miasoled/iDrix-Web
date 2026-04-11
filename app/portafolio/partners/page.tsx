import { Navbar } from "@/components/Navbar";
import { HeroPartners } from "@/components/portafolio/hero-partners";
import FooterIdrix from "@/components/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroPartners />
      <FooterIdrix />
    </main>
  );
}
