
import { Hero } from "@/components/home/heroHome";
import { ExperienceSection } from "@/components/section/experience";
import { GalleryPreview } from "@/components/section/gallery-preview";
import { HowWeCare } from "@/components/section/how-we-care";




export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <ExperienceSection />
      <HowWeCare />
      <GalleryPreview />
    </main>
    </>
  );
}
