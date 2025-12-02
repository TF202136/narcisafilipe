"use client";

export function HairTherapyIntro() {
  return (
    <section 
      className="w-full bg-[#FAF9F7] py-32 md:py-48 px-6"
      aria-labelledby="hair-therapy-intro-heading"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <h2 
          id="hair-therapy-intro-heading"
          className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-[#1F1F1F] leading-tight"
        >
          Your hair tells a story.
          <br />
          <span className="text-[#5A3E36]">
            We help you understand it.
          </span>
        </h2>

        {/* Subcopy */}
        <p className="mt-10 md:mt-12 text-lg md:text-xl font-light text-[#5A3E36]/90 leading-relaxed max-w-3xl mx-auto">
          Hair therapy at NF Studio is a restorative experience designed to nurture, 
          strengthen and support your hair’s long-term health — from root to tip.
        </p>

        {/* Paragraph */}
        <p className="mt-8 text-base md:text-lg font-light text-[#5A3E36]/80 leading-relaxed max-w-2xl mx-auto">
          We look at your scalp, your hair habits, your daily routine and the signals 
          your hair has been giving you. Every detail helps us understand what it needs, 
          what it has been through, and how we can support its natural rhythm.
        </p>

        {/* Microline */}
        <p className="mt-12 text-sm text-[#A8A29E] font-light tracking-widest uppercase">
          Gentle • Attentive • Personalised
        </p>

      </div>
    </section>
  );
}
