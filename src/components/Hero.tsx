import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const roles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-[#0a0a0f] to-purple-950/20" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Riyazkhan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 mb-6 h-10"
          >
            <span className="text-xl md:text-2xl text-slate-400 font-medium">
              {roles[0]}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
          >
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about clean code, pixel-perfect UI, and delivering exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="#"
              className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-[#0d0d18] flex items-center justify-center text-6xl font-black gradient-text">
                RK
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex flex-col items-center justify-center">
              <span className="text-xl font-black text-white">3+</span>
              <span className="text-[10px] text-slate-400 text-center leading-tight">Years Exp</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex flex-col items-center justify-center">
              <span className="text-xl font-black text-white">50+</span>
              <span className="text-[10px] text-slate-400 text-center leading-tight">Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
