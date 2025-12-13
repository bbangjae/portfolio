import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";

export default function Home() {
  return (
      <>
        <Navbar/>
        <Hero />
        <Projects />
        <Footer/>
      </>
  );
}