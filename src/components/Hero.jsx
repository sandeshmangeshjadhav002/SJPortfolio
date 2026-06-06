import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-black">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            BASED IN INDIA • OPEN FOR ROLE
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Sandesh <span className="text-zinc-600 italic">Jadhav</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Aspiring MERN Stack Developer building modern web experiences with
              clean code,{" "}
              <span className="text-white font-medium">
                continuous learning
              </span>{" "}
              , and purposeful design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="px-10 py-5 rounded-full bg-white text-black font-bold text-sm hover:invert transition-all flex items-center gap-2 group shadow-2xl"
            >
              Let's Build Together
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            <div className="flex items-center gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/sandeshmangeshjadhav002",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sandeshmangeshjadhav002/",
                },
                { icon: Mail, href: "mailto:Sandeshmangeshjadhav@gmail.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-all"
                >
                  <item.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
};

export default Hero;
