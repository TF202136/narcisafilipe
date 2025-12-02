import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Ícone mais moderno que ArrowRight

export function GalleryPreview() {
  return (
    <section 
      className="relative w-full bg-gradient-to-b from-[#FAF9F7] to-[#F5F3F0] py-32 md:py-48"
      aria-labelledby="gallery-preview-heading"
    >
      {/* Textura sutil de fundo (opcional) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/texture-noise.png')] bg-repeat" 
           aria-hidden="true" />
      
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        
        {/* Título mais narrativo */}
        <div className="mb-12">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase">
            Beyond the Studio
          </span>
        </div>

        <h2
          id="gallery-preview-heading"
          className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          Moments, not just
          <br />
          <span className="text-[#5A3E36]">results.</span>
        </h2>

        {/* Subcopy que conta uma história */}
        <div className="mt-10 md:mt-12 space-y-6">
          <p className="text-xl md:text-2xl text-[#5A3E36] font-light leading-relaxed max-w-2xl mx-auto">
            Follow the quiet moments, the careful hands, 
            and the stories unfolding in our space.
          </p>
          
          <p className="text-lg text-[#5A3E36]/70 font-light italic max-w-xl mx-auto">
            @narcisafilipe
          </p>
        </div>

        {/* Botão mais premium */}
        <div className="mt-16">
          <Link
            href="https://www.instagram.com/narcisafilipe" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-12 py-5 rounded-full
                       bg-white border border-[#EFE9E4] 
                       text-[#1F1F1F] text-lg font-light tracking-wide
                       hover:bg-[#F8F7F5] hover:border-[#C2A878]/40
                       hover:shadow-[0_8px_32px_rgba(194,168,120,0.08)]
                       transition-all duration-500
                       focus:outline-none focus:ring-2 focus:ring-[#C2A878]/30 focus:ring-offset-2"
            aria-label="Visit our Instagram profile (opens in new tab)"
          >
            <span>Follow our journey</span>
            <ArrowUpRight className="w-5 h-5 text-[#C2A878]/60 
                                   group-hover:text-[#C2A878] 
                                   group-hover:translate-x-1 group-hover:-translate-y-1
                                   transition-all duration-500" />
          </Link>
        </div>

        {/* Nota sutil sobre frequência (opcional) */}
        <div className="mt-20 pt-8 border-t border-[#EFE9E4]/50">
          <p className="text-sm text-[#A8A29E] font-light tracking-wide">
            Updated weekly with new moments and insights.
          </p>
        </div>

      </div>
    </section>
  );
}