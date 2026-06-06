import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Introo+",
      role: "Frontend Developer",
      duration: "2026 - Present",
      desc: "Developed responsive web interfaces and optimized user experiences using modern JavaScript frameworks.",
    },
   
  ];

  return (
    <section id="experience" className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col gap-16">
          <div className="flex items-center gap-4">
              <h2 className="text-4xl font-display font-medium text-white italic tracking-tighter">Experience</h2>
              <div className="flex-1 h-px bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {experiences.map((exp, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="space-y-4"
                >
                    <div className="flex justify-between items-end">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    <p className="text-sm font-display text-blue-500 uppercase tracking-widest font-bold">{exp.company}</p>
                    <p className="text-zinc-400 font-light leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Experience;
