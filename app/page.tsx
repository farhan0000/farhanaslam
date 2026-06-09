import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Extras } from "@/components/sections/Extras";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
