"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section 
      className="w-full bg-gradient-to-b from-[#FAF9F7] to-white py-48 md:py-64 px-6 relative overflow-hidden"
      aria-labelledby="about-cta-heading"
    >
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full border border-[#C2A878]/10" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full border border-[#C2A878]/10" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Cabeçalho contextual */}
        <div className="mb-16">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-8">
            Your Invitation
          </span>
        </div>

        {/* Título que resume a jornada */}
        <h2
          id="about-cta-heading"
          className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          Care begins with
          <br />
          <span className="text-[#5A3E36]">
            a conversation.
          </span>
        </h2>

        {/* Mensagem que conecta história com convite */}
        <div className="mt-12 max-w-2xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl font-light text-[#5A3E36] leading-relaxed">
            Whether you're seeking therapeutic care or artistic braiding,  
            we welcome you into a space shaped by two decades of listening.
          </p>
          
          {/* Valores relembrados sutilmente */}
          <div className="pt-8 border-t border-[#EFE9E4]/50">
            <ul className="flex flex-wrap justify-center gap-8" aria-label="Our values">
              <li className="text-sm text-[#5A3E36]/70 font-light">Understanding</li>
              <li className="text-sm text-[#5A3E36]/70 font-light">Comfort</li>
              <li className="text-sm text-[#5A3E36]/70 font-light">Craft</li>
              <li className="text-sm text-[#5A3E36]/70 font-light">Respect</li>
            </ul>
          </div>
        </div>

        {/* Botão premium */}
        <div className="mt-16">
          <Button
            asChild
            size="lg"
            className="rounded-full px-14 py-8 
                       bg-transparent border border-[#C2A878]/40 
                       text-[#5A3E36] font-light text-lg tracking-wide
                       hover:bg-[#C2A878]/10 hover:border-[#C2A878]/60
                       transition-all duration-500
                       shadow-[0_8px_32px_rgba(194,168,120,0.08)]
                       focus:outline-none focus:ring-2 focus:ring-[#C2A878]/30 focus:ring-offset-2"
            aria-label="Begin your care journey with NF Studio"
          >
            <Link href="/booking">
              Begin your journey
            </Link>
          </Button>
        </div>

        {/* Micro-copy que fecha o círculo */}
        <div className="mt-20 pt-10 border-t border-[#EFE9E4]/50">
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-sm text-[#A8A29E] font-light tracking-widest uppercase">
              Ready when you are.
            </p>
            
            {/* Nota sutil sobre disponibilidade */}
            <p className="text-xs text-[#5A3E36]/60 font-light">
              We maintain limited bookings to ensure each appointment receives  
              the attention and care our philosophy demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}