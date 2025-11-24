// app/resultados/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resultados | Antes e Depois | Narcisa Filipe – Terapeuta Capilar",
  description:
    "Veja resultados reais dos tratamentos capilares da Narcisa Filipe: queda de cabelo, dermatites, caspa, fortalecimento e recuperação capilar.",
};

export default function ResultadosPage() {
  // Placeholders (substitui por fotos reais depois)
  const results = [
    {
      before: "/antes-depois/placeholder-before.jpg",
      after: "/antes-depois/placeholder-after.jpg",
      text: "Melhoria significativa da densidade capilar e redução da queda após tratamento personalizado.",
    },
    {
      before: "/antes-depois/placeholder-before.jpg",
      after: "/antes-depois/placeholder-after.jpg",
      text: "Controle da dermatite seborreica, redução da descamação e couro cabeludo equilibrado.",
    },
    {
      before: "/antes-depois/placeholder-before.jpg",
      after: "/antes-depois/placeholder-after.jpg",
      text: "Reconstrução e nutrição dos fios danificados, devolvendo força, brilho e movimento.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">

      {/* HERO INTERNO */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/results-hero.jpg" // trocar por imagem real premium
          alt="Resultados de tratamentos capilares"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Resultados Reais
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Transformações obtidas através de tratamentos capilares profissionais,
            protocolos personalizados e acompanhamento especializado.
          </p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="w-full py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Em breve vais poder ver aqui resultados reais de clientes que passaram
            pela terapia capilar com a Narcisa Filipe. Enquanto isso, estás a ver
            representações visuais do tipo de transformação possível através dos
            nossos protocolos.
          </p>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {results.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border dark:border-white/10 bg-white dark:bg-black/40 shadow-sm"
              >
                {/* BEFORE */}
                <div className="relative w-full h-56">
                  <Image
                    src={item.before}
                    alt="Antes do tratamento"
                    fill
                    className="object-cover blur-sm opacity-60"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    Antes
                  </span>
                </div>

                {/* AFTER */}
                <div className="relative w-full h-56 mt-1">
                  <Image
                    src={item.after}
                    alt="Depois do tratamento"
                    fill
                    className="object-cover blur-sm opacity-60"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Depois
                  </span>
                </div>

                <p className="p-4 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA FINAL */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Queres alcançar resultados como estes?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              O primeiro passo é uma avaliação capilar profissional, onde
              identificamos as causas reais do teu problema e definimos o
              protocolo ideal para o teu caso.
            </p>
            <Link href="/agendar">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Avaliação Capilar
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
