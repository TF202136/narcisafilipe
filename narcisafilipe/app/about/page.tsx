import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutValues } from "@/components/about/about-values";
import { AboutCTA } from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F7]">
      <AboutHero />
       <AboutIntro />
      <AboutValues />
      <AboutCTA /> 
    </main>
  );
}
