import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout } from 'lucide-react';

const Section = ({ children, className, id }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-32 py-20 ${className}`}>
    {children}
  </section>
);

const ProjectCard = ({ title, category, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-gold/50 transition-all duration-500"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-gold/10 group-hover:text-gold transition-colors">
        <Code2 size={24} />
      </div>
      <ExternalLink size={20} className="text-zinc-600 group-hover:text-gold transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed mb-4">{description}</p>
    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-medium">{category}</span>
  </motion.div>
);

export default function App() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-dark text-white font-sans selection:bg-gold selection:text-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter"
        >
          APM.
        </motion.span>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
          {['work', 'about', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-gold transition-colors">{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home">
        <motion.div variants={containerVars} initial="initial" animate="animate" className="max-w-4xl">
          <motion.p variants={itemVars} className="text-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-bold">
            Based in Bandung, Indonesia
          </motion.p>
          <motion.h1 variants={itemVars} className="text-6xl md:text-[120px] font-bold leading-[0.85] tracking-tighter mb-10">
            SOFTWARE <br /> ENGINEER<span className="text-zinc-700">.</span>
          </motion.h1>
          <motion.div variants={itemVars} className="flex flex-wrap items-center gap-8">
            <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
              Mahasiswa Teknik Informatika yang berfokus pada pengembangan ekosistem digital yang efisien dan estetis.
            </p>
            <div className="h-[1px] w-20 bg-zinc-800" />
            <div className="flex gap-5 text-zinc-400">
              <Github className="hover:text-gold cursor-pointer transition-colors" size={20} />
              <Linkedin className="hover:text-gold cursor-pointer transition-colors" size={20} />
              <Mail className="hover:text-gold cursor-pointer transition-colors" size={20} />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* About / Expertise Section */}
      <Section id="about" className="bg-zinc-950/50 border-y border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 font-bold">Expertise</h2>
            <p className="text-2xl font-medium tracking-tight leading-snug">
              Menggabungkan logika engineering dengan desain minimalis.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: <Layout />, title: "Web Development", desc: "Membangun antarmuka modern dengan React, Tailwind, dan framer-motion." },
              { icon: <Database />, title: "System Design", desc: "Perancangan database dan arsitektur aplikasi yang scalable." }
            ].map((skill, i) => (
              <div key={i} className="group">
                <div className="text-zinc-700 mb-4 group-hover:text-gold transition-colors">{skill.icon}</div>
                <h4 className="font-bold mb-2">{skill.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="work">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 font-bold">Selected Work</h2>
            <h3 className="text-4xl font-bold tracking-tighter">Proyek Unggulan</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Pus Tani Platform"
            category="Web Application"
            description="Sistem manajemen pertanian terintegrasi untuk efisiensi distribusi hasil panen."
          />
          <ProjectCard 
            title="Gedoy Camping Ground"
            category="Business Solution"
            description="Platform reservasi dan manajemen untuk usaha penyewaan villa dan camping."
          />
        </div>
      </Section>

      {/* Footer */}
      <Section id="contact" className="text-center items-center min-h-[60vh]">
        <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.95 }} className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">SIAP BERKOLABORASI?</h2>
          <a 
            href="mailto:email@anda.com"
            className="inline-block px-10 py-5 bg-white text-dark text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500"
          >
            Mulai Diskusi
          </a>
        </motion.div>
      </Section>
    </div>
  );
}