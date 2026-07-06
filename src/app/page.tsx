import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Floating navigation header */}
      <Navbar />

      {/* Core sections */}
      <main className="flex-1 w-full relative z-10">
        <Hero />
        <About />          {/* Biography */}
        <Experience />     {/* Professional Experience */}
        <Projects />       {/* Projects */}
        <Skills />         {/* Leadership Philosophy */}
        <Contact />        {/* Contact Form */}
      </main>
    </>
  );
}
