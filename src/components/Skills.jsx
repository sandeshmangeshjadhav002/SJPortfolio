import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const stack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "JavaScript",
    "Tailwind CSS",
    "Firebase",
    "Prompt Engineering",
  ];

  return (
    <section id="skills" className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col gap-12 text-center md:text-left">
        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">
          Currently Mastering
        </p>
        <div className="flex flex-wrap gap-4 md:gap-x-12 md:gap-y-8 justify-center md:justify-start">
          {stack.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="text-3xl md:text-6xl font-display font-medium text-zinc-800 hover:text-white transition-colors cursor-default"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
