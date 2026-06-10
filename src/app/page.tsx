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

      {/* Clean editorial footer */}
      <footer className="py-12 border-t border-sand-200 text-center px-6 relative z-10 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-stone-500">
          <span>
            &copy; {new Date().getFullYear()} Mark Alexis Batis. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5 uppercase tracking-wider text-[10px] text-stone-400">
            Versatile Software Development & IT Operations. Built with Next.js & Tailwind.
          </span>
        </div>
      </footer>
    </>
  );
}
