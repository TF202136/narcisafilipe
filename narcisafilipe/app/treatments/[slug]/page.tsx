// app/tratamentos/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { treatments, getTreatmentBySlug } from "@/lib/treatments";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface TreatmentPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export function generateMetadata(
  { params }: TreatmentPageProps
): Metadata {
  const treatment = getTreatmentBySlug(params.slug);

  if (!treatment) {
    return {
      title: "Tratamento capilar não encontrado",
    };
  }

  return {
    title: `${treatment.title} | Narcisa Filipe`,
    description: treatment.seoDescription,
  };
}

export default function TreatmentPage({ params }: TreatmentPageProps) {
  const treatment = getTreatmentBySlug(params.slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="w-full py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            href="/#tratamentos"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Voltar para Tratamentos
          </Link>

          <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
            {/* IMAGE */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover"
              />
            </div>

            {/* HEADER TEXT */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {treatment.title}
              </h1>

              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                {treatment.longDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/agendar">
                  <Button size="lg">Agendar Avaliação</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* BENEFÍCIOS */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">
              Benefícios deste tratamento
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              {treatment.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <span>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* COMO FUNCIONA - ACCORDION */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              Como funciona o tratamento
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {treatment.howItWorks.map((step, idx) => (
                <AccordionItem key={idx} value={`step-${idx}`}>
                  <AccordionTrigger>{step.title}</AccordionTrigger>
                  <AccordionContent>{step.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* CTA FINAL */}
          <section className="mt-16 text-center border-t pt-10">
            <h2 className="text-2xl font-semibold mb-3">
              Pronto(a) para começar o teu tratamento?
            </h2>
            <p className="text-muted-foreground mb-6">
              Agenda uma avaliação capilar com a Narcisa Filipe e descobre qual
              é o melhor protocolo para o teu caso.
            </p>
            <Link href="/agendar">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Avaliação Capilar
              </Button>
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
