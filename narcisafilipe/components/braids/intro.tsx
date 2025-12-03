"use client";

export function BraidsIntro() {
  return (
    <section 
      className="w-full bg-gradient-to-b from-[#FAF9F7] to-[#F5F3F0] py-32 md:py-48 px-6"
      aria-labelledby="braids-intro-heading"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header com mais respiração */}
        <div className="text-center mb-20">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-8">
            Our Philosophy
          </span>
          
          <h2
            id="braids-intro-heading"
            className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            Braiding with intention.
            <br />
            <span className="text-[#5A3E36]">
              Craftsmanship rooted in care.
            </span>
          </h2>
        </div>

        {/* Conteúdo em dois blocos narrativos */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start max-w-5xl mx-auto">
          
          {/* Bloco 1: A Experiência */}
          <div className="space-y-8">
            <div className="pb-8 border-b border-[#EFE9E4]/50">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                The Experience
              </h3>
              <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
                Every style begins with a calm, attentive process that honours 
                your hair, your comfort and your personal expression.
              </p>
            </div>
            
            {/* Lista sutil de valores */}
            <ul className="space-y-4" aria-label="Our braiding values">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Patient, unhurried appointments
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Deep respect for hair health
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C2A878]/40 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#5A3E36]/80 font-light">
                  Your voice guides the process
                </span>
              </li>
            </ul>
          </div>

          {/* Bloco 2: O Ofício */}
          <div className="space-y-8">
            <div className="pb-8 border-b border-[#EFE9E4]/50">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                The Craft
              </h3>
              <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
                We work gently, section by section, focusing on the health of your roots, 
                the tension on your scalp and the longevity of your style.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-base font-light text-[#5A3E36]/80 leading-relaxed">
                Your braids should feel as good as they look — 
                balanced, secure and made to last with attention to every detail.
              </p>
              
              {/* Nova microline mais distintiva */}
              <div className="pt-6 border-t border-[#EFE9E4]/30">
                <p className="text-xs text-[#5A3E36]/60 font-light tracking-widest uppercase leading-loose">
                  Comfort-First • Precision Craft • Long-Term Care
                </p>
                <div className="mt-4 w-20 h-px bg-gradient-to-r from-[#C2A878]/20 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Nota final sutil */}
        <div className="mt-24 pt-8 border-t border-[#EFE9E4]/50 text-center">
          <p className="text-sm text-[#5A3E36]/70 font-light max-w-md mx-auto">
            This is how we practice braiding at NF.
          </p>
        </div>
      </div>
    </section>
  );
}