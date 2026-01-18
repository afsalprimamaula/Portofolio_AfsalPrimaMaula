import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Globe, Cpu, BookOpen, ArrowUpRight } from 'lucide-react';

// --- Komponen Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'py-4 bg-cream/90 backdrop-blur-md border-b border-zinc-200' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a href="#home" className="text-2xl font-black tracking-tighter text-espresso">
          APM<span className="text-bronze">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.4em] font-bold text-espresso/60 hover:text-bronze transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-espresso" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream border-b border-zinc-200 p-8 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold tracking-tight text-espresso hover:text-bronze">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Komponen Section ---
const Section = ({ children, className, id }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-8 md:px-32 py-24 ${className}`}>
    {children}
  </section>
);

// --- Main Application ---
export default function App() {
  return (
    <div className="bg-cream text-espresso font-sans selection:bg-espresso selection:text-cream">
      <Navbar />

      {/* Hero & About Section */}
      <Section id="home" className="relative overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl z-10">
          <span className="text-[10px] uppercase tracking-[0.5em] text-bronze font-bold mb-8 block">
            Software Architect & Informatics Student
          </span>
          <h1 className="text-7xl md:text-[130px] font-bold leading-[0.85] tracking-tighter mb-12">
            DIGITAL <br /> <span className="text-stone-gold/40 italic font-light">REFINEMENT.</span>
          </h1>
          <div id="about" className="flex flex-col md:flex-row gap-12 items-start md:items-center justify-between mt-20">
            <p className="text-espresso/60 max-w-sm text-sm leading-relaxed border-l border-zinc-200 pl-6">
              Membangun solusi digital yang menggabungkan presisi teknis dengan estetika minimalis yang abadi. Berbasis di Bandung, Indonesia.
            </p>
            <div className="flex gap-8 text-espresso/40">
              <Github className="hover:text-bronze cursor-pointer transition-all" size={20} />
              <Linkedin className="hover:text-bronze cursor-pointer transition-all" size={20} />
              <Mail className="hover:text-bronze cursor-pointer transition-all" size={20} />
            </div>
          </div>
        </motion.div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-bronze/5 rounded-full blur-[120px]" />
      </Section>

      {/* Skills Section (Contrast Espresso) */}
      <Section id="skills" className="bg-espresso text-cream rounded-t-[50px] md:rounded-t-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h2 className="text-gold-leaf uppercase tracking-[0.3em] text-[10px] font-bold">Expertise</h2>
            <h3 className="text-4xl font-bold tracking-tight">Keahlian Teknis Terkurasi.</h3>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: <Globe />, title: "Web Architect", desc: "Membangun sistem frontend yang responsif dengan React & Tailwind v4." },
              { icon: <Cpu />, title: "Logic Design", desc: "Optimasi algoritma dan struktur data untuk performa aplikasi maksimal." }
            ].map((skill, i) => (
              <div key={i} className="group border-b border-white/10 pb-8 hover:border-gold-leaf transition-colors">
                <div className="text-gold-leaf mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                <p className="text-cream/50 text-xs leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-cream-dark">
        <div className="flex justify-between items-end mb-20">
          <h3 className="text-5xl font-bold tracking-tighter italic text-espresso">Featured<br/>Works.</h3>
          <span className="text-[10px] uppercase tracking-widest text-bronze font-bold">2024 — 2026</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div whileHover={{ scale: 0.98 }} className="group relative aspect-[16/10] bg-espresso rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gold-leaf/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-10 left-10 text-cream">
              <p className="text-[9px] uppercase tracking-[0.3em] mb-2 opacity-60">Agriculture Tech</p>
              <h4 className="text-3xl font-bold tracking-tight">Pus Tani Platform</h4>
            </div>
            <ArrowUpRight className="absolute top-10 right-10 text-cream opacity-0 group-hover:opacity-100 transition-all" />
          </motion.div>
          <motion.div whileHover={{ scale: 0.98 }} className="group relative aspect-[16/10] bg-stone-gold/20 rounded-3xl overflow-hidden cursor-pointer md:mt-20 border border-zinc-200">
            <div className="absolute bottom-10 left-10 text-espresso">
              <p className="text-[9px] uppercase tracking-[0.3em] mb-2 opacity-60">Business System</p>
              <h4 className="text-3xl font-bold tracking-tight">Gedoy Camping</h4>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section id="blog" className="items-center text-center">
        <BookOpen className="text-bronze mb-6" size={40} />
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-bronze font-bold mb-4">Insights</h2>
        <h3 className="text-4xl font-bold tracking-tight mb-8">Tulisan & Pemikiran.</h3>
        <p className="text-espresso/50 max-w-md mx-auto mb-10 text-sm">Berbagi pengalaman mengenai pengembangan perangkat lunak dan kehidupan mahasiswa Informatika.</p>
        <span className="px-6 py-2 border border-zinc-200 text-[9px] rounded-full text-espresso/40 uppercase tracking-widest font-bold">Coming Soon</span>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-espresso text-cream items-center text-center rounded-b-[50px] md:rounded-b-[100px]">
        <h2 className="text-gold-leaf uppercase tracking-[0.5em] text-[10px] mb-12 font-bold">Contact</h2>
        <a href="mailto:afsal@example.com" className="text-4xl md:text-8xl font-black tracking-tighter hover:text-gold-leaf transition-colors duration-700">
          HIRE@APM<span className="text-white/20">.COM</span>
        </a>
        <div className="mt-20 flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </div>
      </Section>

      <footer className="py-12 text-center text-[9px] uppercase tracking-[0.4em] text-espresso/40">
        Handcrafted with precision &copy; 2026 Afsal Prima Maula
      </footer>
    </div>
  );
}