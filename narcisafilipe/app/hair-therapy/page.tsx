import HairTherapyHero from "@/components/therapy/hero";
import { HairTherapyIntro } from "@/components/therapy/intro";
import { HairTherapyMethod } from "@/components/therapy/method";
import { HairTherapyWhoFor } from "@/components/therapy/who-for";

export default function TherapyPage() {
  return (
    <main className="bg-[#FAF9F7]">
      <HairTherapyHero />
      <HairTherapyIntro />
      <HairTherapyMethod /> 
      <HairTherapyWhoFor />
    </main>
  );
}
