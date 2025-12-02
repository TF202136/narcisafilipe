import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/home/heroHome";
import { About } from "@/components/section/about";
import { ExperienceSection } from "@/components/section/experience";
import { FinalCTA } from "@/components/section/finalCTA";
import { Results } from "@/components/section/results";
import { Testimonials } from "@/components/section/testimonials";
import { Treatments } from "@/components/section/treatments";



export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <ExperienceSection />
      <About />
      <Treatments />
      <Results />
      <Testimonials />
      <FinalCTA />
    </main>
    </>
  );
}
