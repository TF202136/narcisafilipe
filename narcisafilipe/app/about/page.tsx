import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// SEO DA PÁGINA
export const metadata: Metadata = {
  title: "Sobre | Narcisa Filipe — Terapeuta Capilar",
  description:
    "Conheça a história, missão e especialização profissional de Narcisa Filipe, terapeuta capilar certificada em diagnóstico e tratamentos avançados para saúde capilar.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">

      {/* HERO INTERNO */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-bg.jpg" // Coloca uma imagem premium
          alt="Sobre a Terapeuta Capilar Narcisa Filipe"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
          Sobre a Terapeuta
        </h1>
      </section>

      {/* SECTION PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-start">

        {/* FOTO */}
        <div className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/narcisa.jpg" // FOTO PROFISSIONAL
            alt="Foto de Narcisa Filipe, Terapeuta Capilar"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO PRINCIPAL */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quem é <span className="text-primary">Narcisa Filipe</span>?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sou terapeuta capilar certificada, especializada em diagnóstico,
            tratamento e recuperação da saúde do couro cabeludo e do cabelo.
            Trabalho com uma abordagem profissional baseada em ciência, cuidado
            individual e resultados reais.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            O meu foco é identificar a causa verdadeira de cada problema
            capilar — queda, caspa, dermatites, inflamações, quebra ou
            enfraquecimento — para desenvolver um plano de tratamento
            personalizado para cada cliente.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Acredito profundamente que a saúde capilar transforma não apenas o
            cabelo, mas também a autoestima, a confiança e o bem-estar. Cada
            protocolo é pensado para restaurar a saúde do couro cabeludo e
            promover cabelos mais fortes, densos e saudáveis.
          </p>

          {/* CTA */}
          <Link href="/agendar">
            <Button size="lg" className="mt-4 text-lg px-8 py-6">
              Agendar Avaliação Capilar
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION AUTORIDADE */}
      <section className="w-full py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Experiência <span className="text-primary">e Autoridade</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="text-center p-8 border dark:border-white/10 rounded-xl bg-white dark:bg-black/40 shadow-sm">
              <p className="text-4xl font-bold text-primary">+200</p>
              <p className="mt-2 text-muted-foreground">Clientes atendidos</p>
            </div>

            <div className="text-center p-8 border dark:border-white/10 rounded-xl bg-white dark:bg-black/40 shadow-sm">
              <p className="text-4xl font-bold text-primary">+300</p>
              <p className="mt-2 text-muted-foreground">Diagnósticos realizados</p>
            </div>

            <div className="text-center p-8 border dark:border-white/10 rounded-xl bg-white dark:bg-black/40 shadow-sm">
              <p className="text-4xl font-bold text-primary">+5 Anos</p>
              <p className="mt-2 text-muted-foreground">Experiência profissional</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION FILOSOFIA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Minha <span className="text-primary">Abordagem</span>
        </h2>

        <p className="mt-6 text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
          O meu trabalho combina análise profissional, protocolos de alta performance e acompanhamento contínuo.
          Cada cliente recebe um tratamento que considera as causas do problema, o estilo de vida e as necessidades reais do couro cabeludo.
        </p>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          <li className="p-6 border dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40 text-center">
            Diagnóstico profundo e individual
          </li>
          <li className="p-6 border dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40 text-center">
            Tratamentos clínicos personalizados
          </li>
          <li className="p-6 border dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40 text-center">
            Foco em resultados reais e duradouros
          </li>
          <li className="p-6 border dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40 text-center">
            Acompanhamento contínuo
          </li>
          <li className="p-6 border dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40 text-center">
            Protocolos baseados em ciência
          </li>
          <li className="p-6 border dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40 text-center">
            Cuidado humano e personalizado
          </li>
        </ul>

        {/* CTA Final */}
        <div className="text-center mt-14">
          <Link href="/agendar">
            <Button size="lg" className="text-lg px-8 py-6">
              Agendar Avaliação Capilar
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
