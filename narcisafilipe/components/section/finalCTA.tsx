"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section
      id="agendar"
      className="relative w-full py-28 bg-gradient-to-br from-primary/90 via-primary to-primary/90 dark:from-primary/40 dark:via-primary/50 dark:to-primary/40 text-white overflow-hidden"
      aria-label="Agendar Avaliação Capilar"
    >
      {/* DECORATION */}
      <div className="absolute inset-0 opacity-20 bg-[url('/textures/noise.png')] mix-blend-overlay"></div>

      <motion.div
        className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-xl">
          Pronto(a) Para Transformar a Saúde do Teu Cabelo?
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Agenda a tua Avaliação Capilar com a <strong>Narcisa Filipe</strong> e
          descobre o tratamento ideal para o teu caso — com diagnóstico
          profissional, cuidado individual e resultados reais.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-10">
          <Link href="/agendar">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
            >
              Agendar Avaliação
            </Button>
          </Link>
        </div>

        {/* TRUST BADGE */}
        <p className="mt-6 text-sm text-white/80">
          +200 clientes atendidos • Tratamentos personalizados • Resultados
          comprovados
        </p>
      </motion.div>
    </section>
  );
}
