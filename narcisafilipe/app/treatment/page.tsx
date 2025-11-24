// app/tratamentos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/lib/treatments";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tratamentos Capilares | Narcisa Filipe – Terapeuta Capilar",
  description:
    "Conheça os tratamentos capilares da terapeuta Narcisa Filipe: queda de cabelo, crescimento e fortalecimento, dermatites, caspa, reconstrução e nutrição capilar.",
};

export default function TratamentosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* HERO INTERNO */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/treatments-hero.jpg" // cria uma imagem bonita para essa hero
          alt="Tratamentos capilares profissionais"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Tratamentos Capilares
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Tratamentos personalizados para queda de cabelo, dermatites, caspa,
            crescimento, fortalecimento e recuperação de fios danificados — sempre
            com diagnóstico profissional.
          </p>
        </div>
      </section>

      {/* LISTA DE TRATAMENTOS */}
      <section className="w-full py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-lg text-muted-foreground max-w-3xl">
            Cada tratamento é pensado para a necessidade específica do teu couro
            cabeludo e do teu cabelo. Abaixo encontras uma visão geral dos
            principais protocolos realizados pela Narcisa Filipe.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-10">
            {treatments.map((treatment) => (
              <article
                key={treatment.slug}
                className="rounded-xl overflow-hidden border dark:border-white/10 bg-gray-50 dark:bg-black/40 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                {/* IMAGEM */}
                <div className="relative w-full h-48">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold">{treatment.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">
                    {treatment.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href={`/tratamentos/${treatment.slug}`}>
                      <Button size="sm">Ver detalhes do tratamento</Button>
                    </Link>

                    <Link href="/agendar">
                      <Button size="sm" variant="outline">
                        Agendar avaliação
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA FINAL */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Não tens a certeza de qual tratamento é ideal para ti?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              A avaliação capilar é o primeiro passo. Durante a consulta, a
              Narcisa analisa o teu couro cabeludo, histórico e rotina para definir
              o melhor protocolo para o teu caso.
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
