import { Navbar } from "@/components/Navbar";
import { HeroTestimonio } from "@/components/portafolio/hero-tertimonio";
export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroTestimonio />
    </main>
  );
}
