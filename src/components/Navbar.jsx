import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8"}`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-display font-bold text-white tracking-widest uppercase"
        >
          Sandesh <span className="text-zinc-600">Jadhav</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.3em]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full border border-white/10 text-[10px] font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
