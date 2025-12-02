"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ScalpHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Foto full-bleed – use close de couro cabeludo saudável, mãos delicadas ou luz natural no studio */}
      <Image
        src="/scalp-hero.jpg"
        alt="Scalp Therapy at NF Studio"
        fill
        priority
        quality={100}
        className="object-cover"
      />

      {/* Overlay escuro suave só onde precisa (legibilidade perfeita em fotos claras ou escuras) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

      {/* Conteúdo – alinhado no final como na home */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 max-w-5xl mx-auto px-6 text-center">
        {/* Headline gigante e poética */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-none">
          Scalp therapy
          <br />
          <span className="block text-[#E8D9C2]">
            that listens first.
          </span>
        </h1>

        {/* Subcopy curta – uma única frase que dói de tão verdadeira */}
        <p className="mt-12 max-w-2xl mx-auto text-white/90 text-xl md:text-2xl font-light tracking-tight">
          We begin with silence, observation and respect for your hair’s story.
        </p>

        {/* Pequeno detalhe editorial */}
        <p className="mt-6 text-white/70 text-sm tracking-widest uppercase">
          Where care comes before treatment
        </p>

        {/* CTAs ultra-discretos – parecem convites, não vendas */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            className="rounded-full px-10 py-7 bg-white/15 backdrop-blur-md text-white border border-white/40 hover:bg-white/25 hover:border-white/60 text-base font-medium tracking-wide transition-all duration-500"
          >
            <Link href="/booking">Book a conversation</Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="rounded-full px-10 py-7 text-white hover:bg-white/10 backdrop-blur-md border border-transparent hover:border-white/30 text-base font-medium tracking-wide transition-all duration-500"
          >
            <Link href="#our-method">Our method →</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-24 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}