import { HeroErp } from "@/components/hero-services/ERP/hero-erp";
import { Navbar } from "@/components//Navbar";
import { ErpFeatures, IdrixErpBanner } from "@/components/hero-services/ERP/content";
import { AiSection } from "@/components/hero-services/ERP/content";
import { MobilitySection } from "@/components/hero-services/ERP/content";
import { BiSection } from "@/components/hero-services/ERP/content";

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
