import { Navbar } from "@/components/Navbar";
import { HeroTestimonio } from "@/components/portafolio/hero-tertimonio";
import FooterIdrix from "@/components/footer";
export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroTestimonio />
      <FooterIdrix />
    </main>
  );
}
