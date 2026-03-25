import HeroGeo from "@/components/hero-services/geolocalización/hero-geo";
import { Navbar } from "@/components/Navbar";
import {
  CardsGeo,
  MetricCard,
  Monitoreo,
  Beneficios,
} from "@/components/hero-services/geolocalización/content";

export default function Geocalizacion() {
  return (
    <main className="min-h-screen" style={{ background: "var(--hero-soft-blue)" }}>
      <Navbar />
      <HeroGeo />
      <CardsGeo />
      <Monitoreo />
      <Beneficios />
    </main>
  );
}
