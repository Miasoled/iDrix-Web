import { HeroErp } from "../../../components/hero-services/erp-hero/hero-erp";
import { Navbar } from "@/components/Navbar";
import {
  ErpFeatures,
  IdrixErpBanner,
} from "@/components/hero-services/erp-hero/content";
import { AiSection } from "@/components/hero-services/erp-hero/content";
import { MobilitySection } from "@/components/hero-services/erp-hero/content";
import { BiSection } from "@/components/hero-services/erp-hero/content";

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
