import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '1', label: 'Live Product' },
  { value: '2', label: 'GitHub Repos' },
  { value: '100%', label: 'Commitment' },
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
              I'm a <span className="text-white font-semibold">working professional Full Stack Developer</span> with over 5 years of experience
              building real-world web and mobile applications. I specialize in React, Node.js, MongoDB, and cross-platform app development.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I build products that solve real business problems — like turning manual catering workflows into a fully
              digital platform with quotations, billing, invoices, and website-to-app communication. I believe great software
              is both technically sound and beautifully crafted.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'MongoDB', 'Capacitor', 'Electron', 'TailwindCSS'].map((tech) => (
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
