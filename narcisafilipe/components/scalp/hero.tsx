"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ScalpHero() {
  return (
    <section
      className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#F3EEE8]"
      aria-labelledby="scalp-hero-title"
    >
      {/* Background image (optional) */}
      <div className="absolute inset-0">
        <Image
          src="/scalp-hero.jpg" // replace when you have real photos
          alt="Scalp therapy treatment – calm and minimal setup"
          fill
          priority
          className="object-cover object-center opacity-50"
        />
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F7]/80 via-[#FAF9F7]/60 to-[#FAF9F7]/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h1
          id="scalp-hero-title"
          className="text-5xl md:text-7xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          Scalp therapy,
          <br />
          <span className="text-[#5A3E36]">designed around you.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl font-light text-[#5A3E36]/90 max-w-2xl mx-auto leading-relaxed">
          A gentle, personalised approach to restoring balance, clarity  
          and long-term scalp health.
        </p>

        <p className="mt-4 text-sm text-[#A8A29E] tracking-wide font-light uppercase">
          Where care begins before treatment.
        </p>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="
              rounded-full px-10 py-6 bg-[#5A3E36] text-white font-light
              hover:bg-[#3E2A24] transition-all duration-300
            "
          >
            <Link href="/booking">Book a conversation</Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="
              rounded-full px-10 py-6 text-[#5A3E36] font-light border border-[#5A3E36]/20
              hover:bg-[#5A3E36]/10 hover:border-[#5A3E36]/30 transition-all duration-300
            "
          >
            <Link href="#our-method">Understanding our method</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
