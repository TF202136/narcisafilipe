"use client";

export function AboutValues() {
  const values = [
    {
      title: "Understanding",
      description: "Every appointment begins with listening — to your concerns, your goals, and your hair's needs.",
      benefit: "You feel heard, not rushed.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Comfort",
      description: "We prioritise gentle technique, balanced tension, and a calm atmosphere from start to finish.",
      benefit: "Your visit feels peaceful, not painful.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 16H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Craft",
      description: "Each braid, each treatment, each movement is done with care, precision and intention.",
      benefit: "Your style lasts, and your hair stays healthy.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M6 16L10 20L14 12L18 20L22 16L26 20" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10L10 14L14 6L18 14L22 10L26 14" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 22L10 26L14 18L18 26L22 22L26 26" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Respect",
      description: "We honour your hair's natural state, its history, and the trust you place in us.",
      benefit: "You leave feeling valued, not just serviced.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 6L18 12H24L19 16L21 22L16 18L11 22L13 16L8 12H14L16 6Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 24V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      className="w-full bg-gradient-to-b from-white to-[#FAF9F7] py-40 md:py-56 px-6"
      aria-labelledby="about-values-heading"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-[#C2A878] tracking-widest uppercase font-light block mb-8">
            Our quiet commitments
          </span>
          
          <h2
            id="about-values-heading"
            className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            What guides our work.
          </h2>

          <p className="mt-8 text-lg font-light text-[#5A3E36]/80 max-w-2xl mx-auto leading-relaxed">
            These aren't just words — they're the principles that shape every interaction,  
            every technique, and every moment you spend with us.
          </p>
        </div>

        {/* Values Grid with Premium SVG Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative"
              role="article"
              aria-label={`Value: ${value.title} - ${value.benefit}`}
            >
              <div className="h-full p-8 rounded-2xl bg-white/50 border border-[#EFE9E4]
                            transition-all duration-500 
                            group-hover:bg-white group-hover:border-[#EFE9E4]/80
                            group-hover:shadow-[0_12px_40px_rgba(31,31,31,0.05)]">
                
                {/* Icon & Number Container */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="text-[#C2A878]/70 group-hover:text-[#C2A878] 
                                transition-colors duration-500">
                    {value.icon}
                  </div>
                  <span className="text-xs text-[#C2A878] font-light tracking-widest">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-[#1F1F1F] 
                               transition-colors duration-500 group-hover:text-[#5A3E36]">
                    {value.title}
                  </h3>
                  
                  <p className="text-[#5A3E36]/85 font-light leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Benefit */}
                  <div className="pt-6 border-t border-[#EFE9E4]/50">
                    <p className="text-sm text-[#5A3E36]/70 font-light italic">
                      {value.benefit}
                    </p>
                  </div>
                </div>

                {/* Interactive Line */}
                <div 
                  className="mt-8 w-16 h-px bg-gradient-to-r from-[#C2A878]/20 to-transparent
                           transition-all duration-700 group-hover:w-24 group-hover:from-[#C2A878]/40"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-24 pt-10 border-t border-[#EFE9E4]/50 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg font-light text-[#5A3E36] leading-relaxed">
              These values emerged from two decades of listening, learning,  
              and understanding what truly matters in hair care.
            </p>
            <p className="text-sm text-[#A8A29E] font-light tracking-widest uppercase">
              They're how we practice, every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}