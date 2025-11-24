// app/agendar/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ClipboardList, UserCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Agendar Avaliação Capilar | Narcisa Filipe",
  description:
    "Agenda a tua avaliação capilar com a terapeuta Narcisa Filipe. Diagnóstico profissional, passo a passo claro e atendimento personalizado em Luanda.",
};

export default function AgendarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">

      {/* HERO INTERNO */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/booking-hero.jpg" // trocar por imagem premium
          alt="Agendar avaliação capilar com Narcisa Filipe"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Agendar Avaliação Capilar
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Dá o primeiro passo para recuperar a saúde do teu cabelo.  
            A avaliação capilar inclui análise, explicação detalhada e plano de tratamento personalizado.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Como Funciona a <span className="text-primary">Avaliação Capilar</span>
        </h2>

        <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          A avaliação é fundamental para identificar corretamente a causa da queda, caspa,
          dermatites, quebra ou crescimento lento. Todo o plano de tratamento começa aqui.
        </p>

        {/* PASSOS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center p-8 border rounded-xl dark:border-white/10 bg-gray-50 dark:bg-black/40">
            <CalendarCheck className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Agendamento</h3>
            <p className="text-sm text-muted-foreground">
              Escolhe o dia e hora que melhor se adequam a ti.
            </p>
          </div>

          <div className="text-center p-8 border rounded-xl dark:border-white/10 bg-gray-50 dark:bg-black/40">
            <ClipboardList className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Avaliação</h3>
            <p className="text-sm text-muted-foreground">
              Análise detalhada do couro cabeludo e histórico capilar.
            </p>
          </div>

          <div className="text-center p-8 border rounded-xl dark:border-white/10 bg-gray-50 dark:bg-black/40">
            <UserCheck className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Plano Personalizado</h3>
            <p className="text-sm text-muted-foreground">
              A Narcisa cria um protocolo específico para as tuas necessidades.
            </p>
          </div>

          <div className="text-center p-8 border rounded-xl dark:border-white/10 bg-gray-50 dark:bg-black/40">
            <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">4. Início do Tratamento</h3>
            <p className="text-sm text-muted-foreground">
              Começas o teu cuidado capilar com acompanhamento profissional.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Pronto(a) para começar a tua transformação capilar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Agenda a tua avaliação com a Narcisa Filipe e recebe um plano personalizado
            para o teu cabelo e couro cabeludo.
          </p>

          {/* ESTE BOTÃO VAI LIGAR AO SISTEMA DE BOOKING */}
          <Link href="/booking/schedule">
            <Button size="lg" className="text-lg px-8 py-6">
              Agendar Agora
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
