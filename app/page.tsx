import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/hero-section";
import FooterIdrix from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background animate-in fade-in-0 slide-in-from-bottom-6 duration-700 ease-out">
      <Navbar />
      <HeroSection />
      <FooterIdrix />
    </main>
  );
}
