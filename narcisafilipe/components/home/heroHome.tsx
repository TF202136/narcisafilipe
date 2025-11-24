"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";


export function Hero() {
  return (
    <section
      className="w-full py-24 md:py-32 bg-white dark:bg-black"
      aria-label="Hero - Terapia Capilar com Narcisa Filipe"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Saúde Capilar com{" "}
            <span className="text-primary">Diagnóstico Profissional</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Tratamentos capilares personalizados, baseados em diagnóstico 
            científico e acompanhamento especializado.  
            Ideal para queda, caspa, quebra, crescimento lento e dermatites.
          </p>

          <div className="pt-4">
            <Link href="/agendar">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — VIDEO SECTION */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
          <video
            src="/vsl-narcisa.mp4" // substitui pelo teu vídeo
            controls
            poster="/vsl-poster.png" // thumbnail do vídeo
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
