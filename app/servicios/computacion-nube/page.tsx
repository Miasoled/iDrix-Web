import { CloudCards, CloudHero } from "@/components/hero-services/cloud/hero-cloud";
import { Navbar } from "@/components/Navbar";

export default function ComputacionNube() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cloud-hero-bg)" }}>
      <Navbar />
      <CloudHero />
      <CloudCards />
    </main>
  );
}
