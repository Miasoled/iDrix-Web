import { Navbar } from "@/components/Navbar";
import { HeroPartners } from "@/components/portafolio/hero-partners";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroPartners />
    </main>
  );
}
