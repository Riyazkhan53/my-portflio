import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'React / Vite', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Capacitor / Mobile', level: 85 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'MongoDB / Mongoose', level: 88 },
      { name: 'REST APIs / JWT', level: 90 },
      { name: 'OpenAI Integration', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'PDF Generation', level: 90 },
      { name: 'Electron / Desktop', level: 75 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'PWA / Deployment', level: 80 },
    ],
  },
];

const techIcons = [
  'React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Capacitor',
  'Electron', 'TailwindCSS', 'OpenAI', 'PDF Generation', 'JWT', 'Git'
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-sm font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-24 relative bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + gi * 0.1 }}
              className="bg-white/3 border border-white/8 rounded-2xl p-6 card-glow"
            >
              <div className={`inline-flex px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${group.color} mb-6`}>
                {group.category}
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={0.3 + gi * 0.1 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider font-medium">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                className="px-4 py-2 rounded-xl bg-white/3 border border-white/8 text-slate-300 text-sm font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
