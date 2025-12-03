"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HairTherapyWhoFor() {
  const careAreas = [
    {
      category: "Hair & Scalp Sensitivity",
      items: [
        "Scalp that feels tight, dry or inconsistently oily",
        "Hair that's become fragile or breaks easily",
        "Discomfort after braids, extensions or protective styles"
      ]
    },
    {
      category: "Restoration & Repair",
      items: [
        "Damage from colour, chemical or heat treatments",
        "Hair that's lost its natural strength or vitality",
        "Thinning or reduced density that concerns you"
      ]
    },
    {
      category: "Personalised Care Journey",
      items: [
        "Wanting a hair care routine designed uniquely for you",
        "Seeking understanding, not just temporary solutions",
        "Valuing long-term health over quick fixes"
      ]
    }
  ];

  return (
    <section
      className="w-full bg-gradient-to-b from-[#FAF9F7] to-white py-32 md:py-48 px-6"
      aria-labelledby="who-for-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-[#C2A878] font-light tracking-widest uppercase block mb-6">
            You might be looking for
          </span>

          <h2
            id="who-for-heading"
            className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
          >
            Care that understands
            <br />
            <span className="text-[#5A3E36]">what your hair needs.</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl font-light text-[#5A3E36]/80 max-w-2xl mx-auto leading-relaxed">
            Our hair therapy is designed for those seeking thoughtful,
            personalised attention for their hair and scalp.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {careAreas.map((area, i) => (
            <div
              key={i}
              className="group"
              role="region"
              aria-label={`Care area: ${area.category}`}
            >
              <div className="mb-10 pb-6 border-b border-[#EFE9E4]">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1F1F] 
                             group-hover:text-[#5A3E36] transition-colors duration-500">
                  {area.category}
                </h3>
              </div>

              <ul className="space-y-5">
                {area.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-4"
                  >
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C2A878]/40 
                                  group-hover:bg-[#C2A878] transition-colors duration-500"
                      aria-hidden="true" />
                    <span className="text-base md:text-lg font-light text-[#5A3E36]/90 
                                   leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-10 w-16 h-px bg-gradient-to-r from-[#C2A878]/20 to-transparent
                         group-hover:w-24 group-hover:from-[#C2A878]/40 
                         transition-all duration-700"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Final Invitation */}
        <div className="mt-24 pt-10 border-t border-[#EFE9E4]/50 text-center">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="space-y-6">
              <p className="text-xl font-light text-[#5A3E36] leading-relaxed">
                If any of this resonates, we invite you to begin a conversation.
              </p>
              <p className="text-sm text-[#A8A29E] font-light tracking-widest uppercase">
                Understanding is the first step toward lasting care.
              </p>
            </div>

            {/* CTA BUTTON REFINADO */}
            <Button
              asChild
              size="lg"
              className="rounded-full px-12 py-7 
                         bg-transparent border border-[#C2A878]/40 
                         text-[#5A3E36] font-light text-base tracking-wide
                         hover:bg-[#C2A878]/10 hover:border-[#C2A878]/60
                         transition-all duration-500
                         focus:outline-none focus:ring-2 focus:ring-[#C2A878]/30 focus:ring-offset-2"
              aria-label="Book a hair therapy consultation"
            >
              <Link
                href="https://wa.me/447737891334?text=Hello!%20I%20would%20like%20to%20book%20a%20style.%20Can%20you%20assist%20me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
              >
                Book a conversation
              </Link>

            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}