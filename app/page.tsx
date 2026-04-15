import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/hero-section";
import FooterIdrix from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FooterIdrix />
    </main>
  );
}
