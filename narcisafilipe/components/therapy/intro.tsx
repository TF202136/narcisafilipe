"use client";

export function HairTherapyIntro() {
  return (
    <section 
      className="w-full bg-gradient-to-b from-[#FAF9F7] to-[#F5F3F0] py-32 md:py-48 px-6"
      aria-labelledby="hair-therapy-intro-heading"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header com mais respiração */}
        <div className="text-center mb-16">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-6">
            Our Philosophy
          </span>
          
          <h2 
            id="hair-therapy-intro-heading"
            className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            Your hair tells a story.
            <br />
            <span className="text-[#5A3E36]">
              We help you understand it.
            </span>
          </h2>
        </div>

        {/* Conteúdo em dois blocos com separação visual */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Bloco 1: O que é */}
          <div className="space-y-6">
            <div className="pb-6 border-b border-[#EFE9E4]/50">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-4">
                The Experience
              </h3>
              <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
                Hair therapy at NF is a restorative journey designed to 
                nurture, strengthen and support your hair's long-term health — 
                from root to tip.
              </p>
            </div>
            
            {/* Micro-detalhes em lista sutil */}
            <ul className="space-y-3" aria-label="Key aspects of our approach">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Scalp health as foundation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Root-to-tip care philosophy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Long-term wellness focus
                </span>
              </li>
            </ul>
          </div>

          {/* Bloco 2: Como funciona */}
          <div className="space-y-6">
            <div className="pb-6 border-b border-[#EFE9E4]/50">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-4">
                Our Listening Approach
              </h3>
              <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
                We observe your scalp, your hair habits, your daily routine 
                and the subtle signals your hair has been sharing. Every detail 
                helps us understand its needs, its history, and how to support 
                its natural rhythm.
              </p>
            </div>
            
            {/* Nova microline mais específica */}
            <div className="pt-4">
              <p className="text-xs text-[#A8A29E] font-light tracking-widest uppercase leading-loose">
                Patience-led • Detail-oriented • Science-informed
              </p>
              <div className="mt-4 w-24 h-px bg-gradient-to-r from-[#C2A878]/20 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Nota final sutil */}
        <div className="mt-20 pt-8 border-t border-[#EFE9E4]/50 text-center">
          <p className="text-sm text-[#5A3E36]/70 font-light max-w-md mx-auto">
            This is how we practice hair therapy at NF Studio.
          </p>
        </div>
      </div>
    </section>
  );
}