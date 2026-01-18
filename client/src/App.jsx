import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

// Pastikan properti 'id' ditambahkan di sini
const Section = ({ children, className, id }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-8 md:px-24 ${className}`}>
    {children}
  </section>
);

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-dark text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-between items-center p-8 mix-blend-difference">
        <span className="text-xl font-bold tracking-tighter">APM.</span>
        <div className="space-x-8 hidden md:block uppercase text-xs tracking-widest">
          <a href="#work" className="hover:text-gold transition">Work</a>
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section>
        <motion.div {...fadeInUp}>
          <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Informatics Engineer</h2>
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8 tracking-tighter">
            CRAFTING <br /> DIGITAL <br /> <span className="text-zinc-500">EXPERIENCE.</span>
          </h1>
          <div className="flex gap-6">
            <Github className="cursor-pointer hover:text-gold transition" />
            <Linkedin className="cursor-pointer hover:text-gold transition" />
            <Mail className="cursor-pointer hover:text-gold transition" />
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-zinc-600" />
        </motion.div>
      </Section>

      {/* Project Section (Dense) */}
      <Section id="work" className="bg-zinc-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold">Pus Tani Platform</h3>
              <p className="text-zinc-400">Agriculture Management System</p>
            </div>
          </motion.div>
          {/* Tambahkan project lain di sini */}
        </div>
      </Section>

      {/* Footer / Contact */}
      <Section className="items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Let's build something <span className="italic text-zinc-500">extraordinary.</span></h2>
        <button className="px-12 py-4 border border-white hover:bg-white hover:text-black transition duration-500 uppercase tracking-widest text-sm">
          Get In Touch
        </button>
      </Section>
    </div>
  );
}