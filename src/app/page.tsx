import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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