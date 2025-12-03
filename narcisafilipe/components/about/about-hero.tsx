"use client";

export function AboutHero() {
  return (
    <section 
      className="relative w-full py-48 md:py-64 bg-gradient-to-b from-[#FAF9F7] to-white overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border border-[#C2A878]/10" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-[#C2A878]/10" />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Cabeçalho contextual */}
        <div className="text-center mb-16">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-6">
            Our Story
          </span>
        </div>

        {/* Título narrativo */}
        <div className="text-center mb-20">
          <h1
            id="about-hero-heading"
            className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            More than hair.
            <br />
            <span className="text-[#5A3E36]">
              Always about care.
            </span>
          </h1>
        </div>

        {/* Conteúdo em duas colunas (história + filosofia) */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-4xl mx-auto">
          
          {/* Coluna 1: A História */}
          <div className="space-y-8">
            <div className="pb-8 border-b border-[#EFE9E4]/50">
              <h2 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                The Beginning
              </h2>
              <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
                NF Studio emerged from Narcisa Filipe's two decades of listening — 
                to hair, to stories, to the quiet needs often overlooked in beauty spaces.
              </p>
            </div>
            
            <ul className="space-y-4" aria-label="Core beliefs">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Hair speaks when we learn to listen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  True care respects both health and expression
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 2: A Filosofia */}
          <div className="space-y-8">
            <div className="pb-8 border-b border-[#EFE9E4]/50">
              <h2 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
                We believe in slow, intentional work. Where therapy meets artistry, 
                and every client's journey is honored with attention and respect.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-base font-light text-[#5A3E36]/80 leading-relaxed">
                This isn't just a studio — it's a space shaped around patience, 
                understanding, and the belief that hair care should feel like 
                a conversation, not a transaction.
              </p>
              
              {/* Assinatura sutil */}
              <div className="pt-6 border-t border-[#EFE9E4]/30">
                <p className="text-xs text-[#5A3E36]/60 font-light tracking-widest">
                  Narcisa Filipe
                </p>
                <div className="mt-2 w-16 h-px bg-gradient-to-r from-[#C2A878]/20 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Nota final */}
        <div className="mt-24 pt-8 border-t border-[#EFE9E4]/50 text-center">
          <p className="text-sm text-[#5A3E36]/70 font-light max-w-md mx-auto">
            This is who we are, and how we care.
          </p>
        </div>
      </div>
    </section>
  );
}