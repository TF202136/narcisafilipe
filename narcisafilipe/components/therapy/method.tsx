"use client";

export function HairTherapyMethod() {
  const steps = [
    {
      number: "01",
      title: "Listening",
      text: "We begin with what you share — your concerns, history, and the subtle changes you've noticed.",
    },
    {
      number: "02", 
      title: "Observation",
      text: "A calm, unhurried assessment of scalp health, texture, and your hair's unique language.",
    },
    {
      number: "03",
      title: "Personalisation",
      text: "Your care plan emerges from understanding, not protocols. Designed for you, by you.",
    },
    {
      number: "04",
      title: "Restorative Care",
      text: "Nourishing treatments that strengthen from within, supporting your hair's natural balance.",
    },
  ];

  return (
    <section
      className="w-full bg-gradient-to-b from-[#FAF9F7] to-[#F5F3F0] py-32 md:py-48 px-6"
      aria-labelledby="hair-therapy-method-heading" id="approach"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header com mais contexto */}
        <div className="text-center mb-20">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-6">
            The Process
          </span>
          
          <h2
            id="hair-therapy-method-heading"
            className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            Our method,
            <br />
            <span className="text-[#5A3E36]">shaped around you.</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl font-light text-[#5A3E36]/80 max-w-xl mx-auto leading-relaxed">
            A calm, attentive process that respects your hair's pace.
          </p>
        </div>

        {/* Steps com conexão visual sutil */}
        <div className="relative">
          {/* Linha de conexão (apenas desktop) */}
          <div 
            className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-px 
                       bg-gradient-to-r from-transparent via-[#C2A878]/10 to-transparent"
            aria-hidden="true"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group relative"
                role="article"
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                {/* Número com container sutil */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1.5 border border-[#C2A878]/20 
                                 rounded-full text-sm text-[#C2A878] font-light tracking-widest 
                                 bg-white/50 backdrop-blur-sm">
                    {step.number}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-[#1F1F1F] 
                               transition-colors duration-500 group-hover:text-[#5A3E36]">
                    {step.title}
                  </h3>
                  
                  <p className="text-base md:text-lg font-light text-[#5A3E36]/90 leading-relaxed 
                              transition-colors duration-500 group-hover:text-[#5A3E36]/80">
                    {step.text}
                  </p>
                </div>

                {/* Linha acentuadora */}
                <div 
                  className="mt-10 w-20 h-px bg-gradient-to-r from-[#C2A878]/30 to-transparent 
                           transition-all duration-700 group-hover:w-32 group-hover:from-[#C2A878]"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Nota final minimalista */}
        <div className="mt-24 pt-8 border-t border-[#EFE9E4]/50 text-center">
          <p className="text-sm text-[#5A3E36]/70 font-light max-w-md mx-auto">
            This is how we practice hair therapy at NF Studio.
          </p>
        </div>
      </div>
    </section>
  );
}