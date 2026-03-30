import { Navbar } from "@/components/Navbar";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center pt-24 transition-colors duration-500">
        <div className="flex flex-col z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary ">
            Nuestros Partners
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold light-text-gradient">
            iDrix Technology
          </h1>
          <p className="max-w-2xl mx-auto mt-7 text-muted-foreground">
            En iDrix Technology S.A, creemos en el poder de la colaboración. Trabajamos mano a mano con socios estratégicos para ofrecer las mejores soluciones tecnológicas del mercado.
          </p>
        </div>
      </section>
    </main>
  );
}
