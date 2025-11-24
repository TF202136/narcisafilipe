"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section
      id="sobre"
      className="w-full py-24 md:py-32 bg-gray-50 dark:bg-black"
      aria-label="Sobre a Terapeuta Capilar Narcisa Filipe"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — PHOTO */}
        <div className="relative w-full h-[420px] md:h-[550px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/vsl-poster.png" // Coloca a foto profissional dela
            alt="Foto da Terapeuta Capilar Narcisa Filipe"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Sobre <span className="text-primary">Narcisa Filipe</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Sou Terapeuta Capilar certificada, especializada em diagnóstico,
            tratamento e manutenção da saúde do couro cabeludo.  
            O meu trabalho foca-se em entender a causa real dos problemas capilares
            — como queda, caspa, quebra, dermatites e inflamações — para aplicar 
            o tratamento certo, personalizado para cada cliente.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Acredito que a saúde capilar é uma combinação de ciência e cuidado.
            Por isso, utilizo métodos profissionais, protocolos clínicos e um 
            acompanhamento próximo para garantir resultados reais e duradouros.
          </p>

          {/* AUTHORITY BADGES */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 border rounded-lg dark:border-white/10">
              <p className="text-xl font-bold">+200</p>
              <p className="text-sm text-muted-foreground">Clientes atendidos</p>
            </div>

            <div className="p-4 border rounded-lg dark:border-white/10">
              <p className="text-xl font-bold">Certificada</p>
              <p className="text-sm text-muted-foreground">Terapia Capilar</p>
            </div>

            <div className="p-4 border rounded-lg dark:border-white/10">
              <p className="text-xl font-bold">+300</p>
              <p className="text-sm text-muted-foreground">Diagnósticos realizados</p>
            </div>

            <div className="p-4 border rounded-lg dark:border-white/10">
              <p className="text-xl font-bold">+5 Anos</p>
              <p className="text-sm text-muted-foreground">Experiência</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link href="/agendar">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Consulta
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
