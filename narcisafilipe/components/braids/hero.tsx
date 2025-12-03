"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BraidsHero() {
  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="braids-hero-heading"
    >
      {/* Background image with warmer tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A2A24] to-[#2A1E18]">
        <Image
          src="/braids-hero.jpeg"
          alt="Close-up of meticulously crafted box braids with natural hair texture, showing precise parting and healthy installation under soft studio lighting"
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

      {/* Overlay with golden tint for warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#3A2A24]/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">

          {/* Tag mais específica */}
          <div className="mb-12">
            <span className="text-sm text-[#E8D9C2] font-light tracking-widest uppercase">
              Hand-Crafted Artistry
            </span>
          </div>

          {/* Headline (MANTIDO PERFEITO) */}
          <h1 
            id="braids-hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white leading-[0.95]"
          >
            Artistry in every strand.
            <br />
            <span className="text-[#EFE9E4]">Style with intention.</span>
          </h1>

          {/* Subcopy refinada */}
          <div className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Each braid is crafted with patience, precision,  
              and a commitment to your hair's long-term health.
            </p>
            
            <div className="space-y-4">
              <div className="pt-6 border-t border-white/20 max-w-md mx-auto">
                <p className="text-white/70 text-sm tracking-widest uppercase font-light">
                  Protective • Intentional • Timeless
                </p>
              </div>
              
              {/* Micro-copy adicional para diferenciação */}
              <p className="text-white/60 text-sm font-light max-w-xs mx-auto">
                Where artistry meets hair wellness.
              </p>
            </div>
          </div>

          {/* CTAs (MANTIDOS PERFEITOS) */}
          <div className="mt-14 md:mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7
                         bg-white/15 backdrop-blur-sm
                         border border-white/30
                         text-white text-base font-normal
                         hover:bg-white/20 hover:border-white/50
                         transition-all duration-500
                         shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            >
              <Link href="/booking">
                Book a style
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-10 py-7
                         text-white/90 text-base font-normal
                         hover:bg-white/10 hover:text-white
                         border border-transparent
                         hover:border-white/20
                         transition-all duration-500"
            >
              <Link href="#styles">
                Explore styles →
              </Link>
            </Button>
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
            Discover
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-[#E8D9C2]/60 via-[#E8D9C2]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}