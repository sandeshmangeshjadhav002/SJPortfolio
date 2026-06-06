import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target } from 'lucide-react';

const Achievements = () => {
    return (
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="bg-zinc-950 rounded-[48px] border border-zinc-900 p-12 md:p-20 relative overflow-hidden group">
          {/* Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
            <Target size={400} className="w-full h-full text-zinc-800" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Growth & Mindset
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-black text-white italic tracking-tighter leading-none">
                Stepping Beyond the <br />{" "}
                <span className="text-zinc-500">Edge</span> <br /> of Familiar
              </h2>
              <p className="text-zinc-400 max-w-sm text-lg font-light leading-relaxed">
                There are achievements you can measure like trophies, titles,
                numbers on a screen. And then there are the ones that reshape
                who you are. Leaving my comfort zone was mine.
              </p>
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-zinc-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.02)]"
              >
                <Trophy
                  size={80}
                  className="text-white group-hover:scale-110 transition-transform duration-500"
                  strokeWidth={1}
                />

                {/* Animated Counter/Circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-t-2 border-white rounded-full opacity-20"
                />
              </motion.div>

              <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-2 rounded-2xl font-black text-2xl shadow-2xl">
                Stay Tuned
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Achievements;
