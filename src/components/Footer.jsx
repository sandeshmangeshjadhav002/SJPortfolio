import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-display font-black text-xl text-white">
            SJ
          </div>
          <div>
            <h4 className="font-display font-bold text-white tracking-widest text-sm uppercase">
              Sandesh Jadhav
            </h4>
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-none">
              MERN STACK DEVELOPER
            </p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
            &copy; 2026 Precision Crafted by Sandesh
          </p>
          <div className="flex gap-6 justify-center md:justify-end">
            {["Terms", "Privacy", "Security"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-mono text-zinc-600 hover:text-neon-blue transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
