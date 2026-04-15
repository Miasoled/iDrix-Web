import HeroGeo from "@/components/hero-services/geolocalizacion/hero-geo";
import { Navbar } from "@/components/Navbar";
import {
  CardsGeo,
  MetricCard,
  Monitoreo,
  Beneficios,
} from "@/components/hero-services/geolocalizacion/content";
import FooterIdrix from "@/components/footer";

export default function Geocalizacion() {
  return (
    <main className="min-h-screen" style={{ background: "var(--hero-soft-blue)" }}>
      <Navbar />
      <HeroGeo />
      <CardsGeo />
      <Monitoreo />
      <Beneficios />
      <FooterIdrix />
    </main>
  );
}
