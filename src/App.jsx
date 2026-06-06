import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience"; // NEW
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements"; // RESTORED
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleLoaded = () => setLoading(false);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onLoaded={handleLoaded} />
        ) : (
          <main key="main-content" className="relative">
            <Navbar />
            <Hero />
            <div className="space-y-32 md:space-y-64 pb-32">
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Achievements />
              <Contact />
            </div>
            <Footer />
            <CursorGlow />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
