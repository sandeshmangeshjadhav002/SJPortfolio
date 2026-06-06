import React from "react";
import { motion } from "framer-motion";
import { Codesandbox, Server, Smartphone, Layout } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tighter italic">
            Simple vision, <br /> Powerful execution.
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            I’m currently learning and building with the MERN stack, crafting
            applications that are as efficient under the hood as they are
            beautiful on the surface. My experience at{" "}
            <span className="text-white font-medium">Introo+</span> sharpened my
            focus on user-centric design and scalable infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Backend", desc: "Node & Express", icon: Server },
            { title: "Frontend", desc: "React & Tailwind", icon: Layout },
            { title: "Database", desc: "Mongo & MySQL", icon: Codesandbox },
            { title: "Mobile", desc: "Unity & Games", icon: Smartphone },
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900 transition-colors group"
            >
              <skill.icon
                size={24}
                className="mb-6 text-zinc-600 group-hover:text-white transition-colors"
              />
              <h4 className="text-lg font-medium text-white mb-2">
                {skill.title}
              </h4>
              <p className="text-sm text-zinc-500">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
