export function HowWeCare() {
  return (
    <section 
      className="relative w-full bg-[#FAF9F7] py-24 md:py-36"
      aria-labelledby="how-we-care-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título impactante mas proporcional */}
        <h2 
          id="how-we-care-heading"
          className="text-center text-5xl md:text-7xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          We listen
          <br />
          <span className="text-[#5A3E36]">before we touch.</span>
        </h2>

        {/* Subcopy clara e direta */}
        <p className="mt-10 md:mt-12 text-center text-lg md:text-xl font-light text-[#5A3E36] tracking-normal max-w-2xl mx-auto leading-relaxed">
          Every appointment starts with attention, understanding, 
          and respect for your hair's unique story.
        </p>

        {/* Pilares - espaçamento harmonioso */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {[
            {
              title: "Listening",
              text: "Your hair's needs guide our approach from the very first moment.",
            },
            {
              title: "Observation",
              text: "A careful, unhurried assessment of scalp health and hair condition.",
            },
            {
              title: "Personalised Care",
              text: "Care shaped uniquely for you—no generic protocols.",
            },
            {
              title: "With Intention",
              text: "Every treatment and style is crafted with purpose and presence.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group cursor-default"
              role="article"
              aria-label={`${item.title}: ${item.text}`}
            >
              {/* Número sutil */}
              <div className="text-sm text-[#C2A878] font-light tracking-widest mb-6">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-[#1F1F1F] 
                           transition-colors duration-500 group-hover:text-[#5A3E36]">
                {item.title}
              </h3>
              
              <p className="mt-4 text-base md:text-lg font-light text-[#5A3E36]/90 
                          leading-relaxed transition-colors duration-500 
                          group-hover:text-[#1F1F1F]">
                {item.text}
              </p>

              {/* Linha dourada refinada */}
              <div className="mt-8 w-16 h-px bg-[#C2A878]/40 
                            transition-all duration-700 group-hover:w-24 
                            group-hover:bg-[#C2A878]" 
                   aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Nota sutil no final (opcional) */}
        <div className="mt-24 text-center">
          <p className="text-sm text-[#A8A29E] font-light tracking-wide">
            This is how we care at NF Studio.
          </p>
        </div>
      </div>
    </section>
  );
}