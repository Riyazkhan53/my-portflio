import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'Rahul Catering Service',
    desc: 'A full-stack catering management platform with a React web app and cross-platform mobile app. Handles end-to-end workflow from quotation creation, product list management, billing, and invoice generation. The website connects to the app for chat and request-order quotations.',
    tags: ['React', 'Node.js', 'MongoDB', 'Capacitor', 'Electron', 'Express'],
    gradient: 'from-indigo-600 to-purple-600',
    stars: 1,
    featured: true,
    github: 'https://github.com/Riyazkhan53/rahul-catering-app',
    demo: 'https://app.rahulcateringevents.com/',
  },
  {
    title: 'Rahul Catering Website',
    desc: 'The customer-facing website for Rahul Catering Service with integrated chat and request-order quotation flow that connects directly to the catering app backend.',
    tags: ['React', 'Vite', 'TailwindCSS', 'Node.js'],
    gradient: 'from-purple-600 to-pink-600',
    stars: 0,
    featured: true,
    github: 'https://github.com/Riyazkhan53/rahul-catering-website',
    demo: 'https://www.rahulcateringevents.com/',
  },
  {
    title: 'DiaryByte',
    desc: 'My personal life-organiser for web and Android, built for daily use. It keeps a mood-tagged diary with a calendar view, saved passwords, banking details with masked numbers, a TMDB-powered movie watchlist, autopay reminders with notifications, expenditure, balance, debt and investment tracking, a to-do list and a private vault. Data syncs to a Node + MongoDB API. Next up: user accounts with login so others can use it too.',
    tags: ['Expo', 'React Native', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-teal-600 to-cyan-600',
    stars: 0,
    featured: true,
    github: 'https://github.com/Riyazkhan53/DiaryByte',
    demo: 'https://dairybyte.riyazcreations.in/',
  },
];

const filters = ['All', 'Featured', 'React', 'Node.js', 'Expo'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.tags.some(t => t.includes(activeFilter));
  });

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8" />

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              layout
              className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden card-glow group"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <span className="text-5xl font-black text-white/20 select-none">{project.title[0]}</span>
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-400">{project.stars}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/8 text-slate-400 text-xs rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Riyazkhan53"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition-colors text-sm font-medium"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
