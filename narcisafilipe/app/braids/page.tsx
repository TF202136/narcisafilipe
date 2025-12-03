import BraidsHero from "@/components/braids/hero";
import { BraidsIntro } from "@/components/braids/intro";
import { BraidsStylesPreview } from "@/components/braids/styles-preview";
import { BraidsFinalCTA } from "@/components/braids/final-cta";


export default function TherapyPage() {
  return (
    <main className="bg-[#FAF9F7]">
      <BraidsHero />
      <BraidsIntro />
      <BraidsStylesPreview />
      <BraidsFinalCTA /> 
    </main>
  );
}
