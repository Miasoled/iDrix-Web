import { CloudCards, CloudHero } from "@/components/hero-services/cloud/hero-cloud";
import { Navbar } from "@/components/Navbar";
import FooterIdrix from "@/components/footer";

export default function ComputacionNube() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cloud-hero-bg)" }}>
      <Navbar />
      <CloudHero />
      <CloudCards />
      <FooterIdrix />
      <FooterIdrix />
    </main>
  );
}
