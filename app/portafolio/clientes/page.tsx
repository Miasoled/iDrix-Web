import { Navbar } from "@/components/Navbar";
import { HeroClientes } from "@/components/portafolio/hero-clientes";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroClientes />
      </div>
    </main>
  );
}
