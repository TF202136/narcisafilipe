"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BraidsFinalCTA() {
  return (
    <section 
      className="w-full bg-gradient-to-b from-[#FAF9F7] to-[#F5F3F0] py-48 md:py-64 px-6 relative overflow-hidden"
      aria-labelledby="braids-final-cta-heading"
    >
      {/* Elemento decorativo sutil (opcional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full border border-[#C2A878]/10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-[#C2A878]/10" />
      </div>
      
      <div className="relative max-w-3xl mx-auto text-center">
        
        {/* Tag de contexto sutil */}
        <div className="mb-12">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase">
            Your Next Step
          </span>
        </div>

        {/* Título refinado */}
        <h2
          id="braids-final-cta-heading"
          className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          Ready when you are.
        </h2>

        {/* Subcopy com mais respiração */}
        <div className="mt-12 max-w-2xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl font-light text-[#5A3E36] leading-relaxed">
            A calm, intentional braiding experience — 
            crafted with care, comfort and artistry.
          </p>
          
          {/* Linha divisória sutil */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent mx-auto" 
               aria-hidden="true" />
        </div>

        {/* Botão mais alinhado com branding NF */}
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
            aria-label="Book a braiding style consultation"
          >
            <Link href="/booking">
              Begin your style journey
            </Link>
          </Button>
        </div>

        {/* Micro-copy estratificada */}
        <div className="mt-16 space-y-6">
          <p className="text-sm text-[#A8A29E] font-light tracking-widest uppercase">
            Your journey begins with a conversation.
          </p>
          
          {/* Micro-incentivo sutil */}
          <div className="pt-6 border-t border-[#EFE9E4]/50 max-w-xs mx-auto">
            <p className="text-xs text-[#5A3E36]/60 font-light">
              Limited availability for intentional, unhurried appointments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}