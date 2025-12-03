"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BraidsStylesPreview() {
  return (
    <section
      className="w-full bg-gradient-to-b from-white to-[#FAF9F7] py-32 md:py-48 px-6"
      aria-labelledby="braids-instagram-heading"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* LABEL */}
        <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-8">
          Our work
        </span>

        {/* TITLE */}
        <h2
          id="braids-instagram-heading"
          className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          Where craft meets
          <br />
          <span className="text-[#5A3E36]">expression.</span>
        </h2>

        {/* SUBCOPY */}
        <p className="mt-10 text-lg md:text-xl font-light text-[#5A3E36]/90 leading-relaxed max-w-2xl mx-auto">
          Every braid we create is unique.  
          For our most recent work, moments and details,  
          explore our Instagram gallery.
        </p>

        {/* BUTTON */}
        <div className="mt-14">
          <Link
            href="https://www.instagram.com/nf_braids/?igsh=MTZrcW5sdG55emF4Ng%3D%3D&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-12 py-5 rounded-full
                       bg-white border border-[#EFE9E4] 
                       text-[#1F1F1F] text-lg font-light tracking-wide
                       hover:bg-[#F8F7F5] hover:border-[#C2A878]/40
                       hover:shadow-[0_8px_32px_rgba(194,168,120,0.08)]
                       transition-all duration-500
                       focus:outline-none focus:ring-2 focus:ring-[#C2A878]/30 focus:ring-offset-2"
          >
            <span>View our work on Instagram</span>
            <ArrowUpRight 
              className="w-5 h-5 text-[#C2A878]/60 
                         group-hover:text-[#C2A878] 
                         group-hover:translate-x-1 group-hover:-translate-y-1
                         transition-all duration-500" 
            />
          </Link>
        </div>

        {/* MICROLINE (optional) */}
        <p className="mt-16 text-sm text-[#A8A29E] font-light tracking-widest uppercase">
          Updated weekly with new styles and studio moments.
        </p>
      </div>
    </section>
  );
}
