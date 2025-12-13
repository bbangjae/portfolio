import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
      <>
        <Navbar/>
        <main className="min-h-screen bg-white flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900">
              Hello Portfolio
            </h1>
          </div>
        </main>
        <Footer/>
      </>
  );
}