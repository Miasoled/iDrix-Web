import { Navbar } from "@/components/Navbar";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center pt-24 transition-colors duration-500">
        <div className="flex flex-col z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary ">
            Testimonios
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold light-text-gradient">
            Lo que dicen de iDrix
          </h1>
          <p className="max-w-2xl mx-auto mt-7 text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre las experiencias y éxitos compartidos por quienes confían en iDrix Technology.
          </p>
        </div>
      </section>
    </main>
  );
}
