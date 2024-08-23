import ColaborativeFormula from "@/components/colaborativeFormula";
import Footer from "@/components/footer";
import GraphicsDesign from "@/components/graphicsDesign";
import Hero from "@/components/hero";
import Gallery from "@/components/images";
import Testimonial from "@/components/testimonial";
import TransformBrand from "@/components/transformBrand";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TransformBrand />
      <ColaborativeFormula />
      <GraphicsDesign />
      <Testimonial />
      <Gallery />
      <Footer />
    </main>
  );
}
