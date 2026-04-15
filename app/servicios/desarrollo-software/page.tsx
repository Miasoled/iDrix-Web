import { Navbar } from "@/components/Navbar";
import { HeroSoftware } from "@/components/hero-services/software/hero-software";
import { AgileMethodologies, WhyChooseUs } from "@/components/hero-services/software/content";
import { CustomSoftwareSection } from "@/components/hero-services/software/content";
import FooterIdrix from "@/components/footer";

export default function DesarrolloSoftware() {
  return (
    <div>
      <Navbar />
      <HeroSoftware />
      <WhyChooseUs />
      <CustomSoftwareSection />
      <AgileMethodologies />
      <FooterIdrix />
    </div>
  );
}
