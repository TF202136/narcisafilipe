"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero section - Cuidamos de si, fio a fio"
    >
      {/* Imagem de fundo com fallback */}
      <div className="absolute inset-0 bg-[#2A1E18]"> {/* Fallback sólido */}
        <Image
          src="/home-hero.jpeg"
          alt="Espaço NF Studio - ambiente acolhedor de terapia capilar e braids"
          fill
          priority
          quality={90} /* 100 é excessivo para hero */
          sizes="100vw"
          className="object-cover object-center"
          onError={(e) => {
            // Fallback visual se imagem não carregar
            const target = e.target as HTMLImageElement;
            target.style.opacity = '0';
          }}
        />
      </div>

      {/* Overlay CONSISTENTE para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />

      {/* Conteúdo com alinhamento vertical mais elegante */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">

        {/* Container para limitar largura máxima */}
        <div className="max-w-6xl mx-auto w-full">

          {/* Headline refinada - grande mas não agressiva */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white leading-[0.95]">
            Care
            <br className="hidden md:block" />
            <span className="text-[#EFE9E4]"> for your, </span>
            <br className="md:hidden" />
            <span className="block text-[#E8D9C2] mt-2 md:mt-4">
              hair.
            </span>
          </h1>

          {/* Subcopy mais sutil e respirando */}
          <p className="mt-8 md:mt-12 max-w-md mx-auto text-white/85 text-lg md:text-xl font-light tracking-tight leading-relaxed">
            A quiet space for scalp therapy and hand‑crafted braids.
            Where science meets artistry, strand by strand.
          </p>

          {/* CTAs ainda mais discretos e alinhados */}
          <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 md:px-10 py-6 md:py-7
                         bg-white/10 backdrop-blur-sm
                         border border-white/20
                         text-white text-base font-normal
                         hover:bg-white/15 hover:border-white/30
                         transition-all duration-500
                         shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <Link href="/hair-therapy">
                Hair Therapy
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-8 md:px-10 py-6 md:py-7
                         text-white/90 text-base font-normal
                         hover:bg-white/5 hover:text-white
                         border border-transparent
                         hover:border-white/10
                         transition-all duration-500"
            >
              <Link href="/braids">
                Braids
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator mais discreto */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 font-light tracking-widest uppercase">
           Explore
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Indicador de carregamento sutil */}
      <div className="absolute inset-0 bg-[#2A1E18] transition-opacity duration-1000 opacity-0 pointer-events-none image-loading-fallback" />
    </section>
  );
}