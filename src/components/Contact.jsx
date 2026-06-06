import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields before sending.");
      return;
    }

    setError("");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:Sandeshmangeshjadhav@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <h2 className="text-5xl md:text-8xl font-display font-medium text-white tracking-tighter italic">
            Let's build <br /> together.
          </h2>
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">
                Email
              </p>
              <a
                href="mailto:Sandeshmangeshjadhav@gmail.com"
                className="text-l md:text-2xl font-light text-zinc-300 hover:text-white transition-colors"
              >
                Sandeshmangeshjadhav@gmail.com
              </a>
            </div>
            <div className="group cursor-pointer">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">
                Social
              </p>
              <div className="flex gap-8 pt-2">
                {["Github", "Linkedin", "Twitter"].map((link) => (
                  <a
                    key={link}
                    href="https://www.linkedin.com/in/sandeshmangeshjadhav002/"
                    className="text-sm font-medium text-zinc-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 bg-zinc-950 p-10 md:p-16 rounded-[48px] border border-zinc-900">
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all text-lg font-light"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all text-lg font-light"
              />
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white outline-none focus:border-white transition-all text-lg font-light resize-none"
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              className="flex items-center gap-3 text-white font-bold group"
            >
              <span className="text-xl">SEND MESSAGE</span>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
