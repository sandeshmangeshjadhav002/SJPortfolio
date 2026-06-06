import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SkillVerse",
      category: "•SkillVerse is a modern web platform designed to help users exchange skills, discover learning opportunities, and connect with others in a collaborative environment. ",
     
      image:
        "https://images.unsplash.com/vector-1779430063692-8c65d8b753c2?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "large",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <h2 className="text-5xl md:text-8xl font-display font-black text-white italic tracking-tighter">
          PROJECTS
        </h2>
        <p className="text-zinc-400 max-w-s text-sm uppercase tracking-widest leading-relaxed">
          Turning ideas into real-world solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-[32px] bg-zinc-900 ${project.size === "large" ? "md:col-span-2 aspect-[4/3] md:aspect-auto" : "md:col-span-1 aspect-square"}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-black- uppercase tracking-widest mb-1">
                  {project.category}
                </p>
                <h3
                  className={`${project.size === "large" ? "text-4xl md:text-5xl" : "text-2xl"} font-display font-medium text-white`}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
