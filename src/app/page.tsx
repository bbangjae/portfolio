import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import About from "@/components/About";
import Education from "@/components/Education";

export default function Home() {
  return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-[#2962FF]/30 selection:text-[#2962FF]">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Tech />
        <Education />
        <Footer />
      </main>
  );
}