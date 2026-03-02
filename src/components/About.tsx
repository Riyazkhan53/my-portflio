import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
];

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices.' },
  { icon: Palette, title: 'Great Design', desc: 'Crafting visually stunning, pixel-perfect user interfaces.' },
  { icon: Zap, title: 'Performance', desc: 'Optimizing for speed and delivering fast, smooth experiences.' },
  { icon: Users, title: 'Collaboration', desc: 'Working closely with teams to deliver outstanding results.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a <span className="text-white font-semibold">passionate Full Stack Developer</span> with over 3 years of experience
              building modern web applications. I specialize in React, TypeScript, and Node.js.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source,
              or designing clean UI concepts. I believe great software is both technically sound and beautifully crafted.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'AWS'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center card-glow"
              >
                <div className="text-4xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="bg-white/3 border border-white/8 rounded-2xl p-6 card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
