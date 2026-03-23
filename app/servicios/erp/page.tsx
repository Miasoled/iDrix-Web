import { HeroErp } from "@/components/hero-Services/ERP/hero-erp";
import { Navbar } from "@/components//Navbar";
import { ErpFeatures, IdrixErpBanner } from "@/components/hero-Services/ERP/content";
import { AiSection } from "@/components/hero-Services/ERP/content";
import { MobilitySection } from "@/components/hero-Services/ERP/content";
import { BiSection } from "@/components/hero-Services/ERP/content";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroErp />
      <ErpFeatures />
      <AiSection />
      <MobilitySection />
      <BiSection />
      <IdrixErpBanner />
    </main>
  );
}
