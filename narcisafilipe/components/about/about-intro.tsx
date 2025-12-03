"use client";

export function AboutIntro() {
  return (
    <section 
      className="w-full bg-gradient-to-b from-white to-[#FAF9F7] py-20 md:py-30 px-6"
      aria-labelledby="about-intro-heading"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho com mais contexto */}
        <div className="text-center mb-20">
          <span className="text-sm text-[#C2A878] tracking-widest uppercase font-light block mb-8">
            Our Foundation
          </span>
          
          <h2
            id="about-intro-heading"
            className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            A journey shaped by care.
          </h2>
        </div>

        {/* Conteúdo em três atos narrativos */}
        <div className="space-y-20">
          
          {/* Ato 1: As Origens */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                The Early Years
              </h3>
              <p className="text-xl font-light text-[#5A3E36] leading-relaxed">
                Narcisa began braiding and caring for hair long before NF Studio existed.  
                Her work grew not from trends, but from a genuine love for restoring confidence,  
                easing discomfort, and creating beauty with intention.
              </p>
            </div>
            
            {/* Nota sutil sobre valores iniciais */}
            <div className="pt-8 border-t border-[#EFE9E4]/50">
              <ul className="flex flex-wrap gap-6 justify-center" aria-label="Early values">
                <li className="text-sm text-[#5A3E36]/70 font-light">Listening first</li>
                <li className="text-sm text-[#5A3E36]/70 font-light">Gentle hands</li>
                <li className="text-sm text-[#5A3E36]/70 font-light">Patient attention</li>
              </ul>
            </div>
          </div>

          {/* Linha do tempo sutil (separador visual) */}
          <div className="relative max-w-xs mx-auto" aria-hidden="true">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent mx-auto" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C2A878]/40" />
          </div>

          {/* Ato 2: A Realização */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                The Realisation
              </h3>
              <p className="text-xl font-light text-[#5A3E36] leading-relaxed">
                Over years of working with clients, a pattern emerged:  
                people weren't just looking for styles — they were seeking understanding,  
                care, and a space where their hair's needs were truly heard.
              </p>
            </div>
            
            <p className="text-lg font-light text-[#5A3E36]/80 leading-relaxed">
              This insight shaped everything. It became clear that hair care at its best  
              is a dialogue — between client, practitioner, and the hair itself.
            </p>
          </div>

          {/* Linha do tempo sutil */}
          <div className="relative max-w-xs mx-auto" aria-hidden="true">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C2A878]/30 to-transparent mx-auto" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C2A878]/60" />
          </div>

          {/* Ato 3: Hoje */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase mb-6">
                Today at NF
              </h3>
              <p className="text-xl font-light text-[#5A3E36] leading-relaxed">
                NF Studio blends calm technique, thoughtful care and modern artistry —  
                offering a space where people feel understood, respected and cared for.
              </p>
            </div>
            
            <div className="pt-8 border-t border-[#EFE9E4]/50">
              <p className="text-lg font-light text-[#5A3E36]/80 leading-relaxed">
                Every visit is built on that original foundation:  
                listening, understanding, and creating with care.
              </p>
              
              {/* Assinatura sutil */}
              <div className="mt-10">
                <div className="w-16 h-px bg-gradient-to-r from-[#C2A878]/40 to-transparent mb-4" aria-hidden="true" />
                <p className="text-sm text-[#5A3E36]/60 font-light">
                  — The NF Studio Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}