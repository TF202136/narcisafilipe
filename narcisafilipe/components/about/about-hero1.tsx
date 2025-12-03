"use client";

import Image from "next/image";

export function AboutHero1() {
  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      {/* Imagem Hero - Opções importantes: */}
      {/* 1. Narcisa trabalhando (recomendado - humaniza) */}
      {/* 2. Espaço do estúdio (mostra ambiente) */}
      {/* 3. Detalhe de mãos trabalhando (artístico) */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A1E18] to-[#3A2A24]">
        <Image
          src="/about-hero.jpg" // ou /narcisa-portrait.jpg
          alt="Narcisa Filipe carefully working on a client's hair in the peaceful NF Studio space"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-90"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.opacity = '0';
          }}
        />
      </div>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#3A2A24]/30 to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          
          {/* Context tag */}
          <div className="mb-12">
            <span className="text-sm text-[#E8D9C2] font-light tracking-widest uppercase">
              Our Story
            </span>
          </div>

          {/* Headline */}
          <h1 
            id="about-hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white leading-[0.95]"
          >
            More than hair.
            <br />
            <span className="text-[#EFE9E4]">
              Always about care.
            </span>
          </h1>

          {/* Subcopy */}
          <div className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Founded by Narcisa Filipe after twenty years of listening to hair  
              and the stories it carries.
            </p>
            
            <div className="pt-6 border-t border-white/20 max-w-md mx-auto">
              <p className="text-white/70 text-sm tracking-widest uppercase font-light">
                São Paulo • Since 2023
              </p>
            </div>
          </div>

          {/* Optional: Author signature */}
          <div className="mt-20">
            <div className="inline-flex items-center gap-4 text-white/60">
              <div className="w-12 h-px bg-white/30" aria-hidden="true" />
              <span className="text-sm font-light tracking-wide">
                Narcisa Filipe
              </span>
              <div className="w-12 h-px bg-white/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 font-light tracking-widest uppercase">
            Our Journey
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-[#E8D9C2]/60 via-[#E8D9C2]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}