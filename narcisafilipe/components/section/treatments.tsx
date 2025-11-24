// components/sections/Treatments.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { treatments } from "@/lib/treatments";
import { useState } from "react";

export function Treatments() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const selected = treatments.find((t) => t.slug === openSlug) || null;

  return (
    <section
      id="tratamentos"
      className="w-full py-24 md:py-32 bg-white dark:bg-black"
      aria-label="Tratamentos Capilares Profissionais"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tratamentos <span className="text-primary">Capilares</span>
        </h2>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Tratamentos capilares baseados em{" "}
          <strong className="text-foreground">diagnóstico profissional</strong>{" "}
          para queda de cabelo, caspa, dermatites, enfraquecimento, quebra e
          crescimento lento. Cada protocolo é pensado para as necessidades reais
          do teu couro cabeludo.
        </p>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <motion.article
              key={treatment.slug}
              className="group rounded-xl overflow-hidden border dark:border-white/10 bg-gray-50 dark:bg-black/40 shadow-sm hover:shadow-xl transition-all flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* IMAGE */}
              <div className="relative w-full h-40">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">
                  {treatment.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {treatment.shortDescription}
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setOpenSlug(treatment.slug)}
                  >
                    Saber mais
                  </Button>

                  <Link href={`/tratamentos/${treatment.slug}`}>
                    <Button variant="ghost" size="sm" className="px-0">
                      Ver página completa
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA geral */}
        <div className="mt-14">
          <Link href="/agendar">
            <Button size="lg" className="text-lg px-8 py-6">
              Agendar Avaliação Capilar
            </Button>
          </Link>
        </div>
      </div>

      {/* MODAL SABER MAIS */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setOpenSlug(null)}>
        {selected && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selected.title}</DialogTitle>
            </DialogHeader>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              {/* IMAGE */}
              <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">{selected.longDescription}</p>

                <div>
                  <h4 className="font-semibold mb-2">Principais benefícios</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {selected.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ACCORDION COMO FUNCIONA */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Como funciona o tratamento?</h4>
              <Accordion type="single" collapsible className="w-full">
                {selected.howItWorks.map((step, idx) => (
                  <AccordionItem key={idx} value={`step-${idx}`}>
                    <AccordionTrigger>{step.title}</AccordionTrigger>
                    <AccordionContent>{step.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTAS */}
            <div className="mt-6 flex flex-wrap gap-3 justify-between items-center">
              <Link href={`/tratamentos/${selected.slug}`}>
                <Button variant="outline">Ver página completa</Button>
              </Link>
              <Link href="/agendar">
                <Button>Agendar avaliação para este tratamento</Button>
              </Link>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
