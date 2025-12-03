"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HairTherapyHero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hair-therapy-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#2A1E18]">
        <Image
          src="/therapy-hero.jpeg"
          alt="Hair therapy session with gentle restorative care applied to natural hair."
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.opacity = '0';
          }}
        />
      </div>

      {/* Softer overlay for luxury calm aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">

          {/* Tag */}
          <div className="mb-12">
            <span className="text-sm text-white/70 font-light tracking-widest uppercase">
              Hair Therapy
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hair-therapy-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white leading-[0.95]"
          >
            Care for your hair.
            <br />
            <span className="text-[#EFE9E4]">Strength for your</span>
            <br className="md:hidden" />
            <span className="block text-[#E8D9C2] mt-2 md:mt-4">
              roots and rhythm.
            </span>
          </h1>

          {/* Subcopy */}
          <div className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              A restorative experience designed to nurture, strengthen
              and support your hair’s natural rhythm.
            </p>

            <div className="pt-6 border-t border-white/20 max-w-md mx-auto">
              <p className="text-white/70 text-sm tracking-widest uppercase font-light">
                Gentle • Restorative • Personalised
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-14 md:mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7
                         bg-white/15 backdrop-blur-sm
                         border border-white/30
                         text-white text-base font-normal
                         hover:bg-white/20 hover:border-white/50
                         transition-all duration-500
                         shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            >
              <Link
                href="https://wa.me/447737891334?text=Hello!%20I%20would%20like%20to%20book%20a%20style.%20Can%20you%20assist%20me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
              >
                Book a consultation
              </Link>

            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-10 py-7
                         text-white/90 text-base font-normal
                         hover:bg-white/10 hover:text-white
                         border border-transparent
                         hover:border-white/20
                         transition-all duration-500"
            >
              <Link href="#approach">
                Our approach →
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 font-light tracking-widest uppercase">
            Continue
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-white/50 via-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
