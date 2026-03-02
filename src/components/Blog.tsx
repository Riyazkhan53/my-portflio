import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Building Scalable React Applications with Clean Architecture',
    excerpt: 'Learn how to structure large-scale React apps using clean architecture principles, feature-based folder structure, and proper separation of concerns.',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    tag: 'React',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    gradient: 'from-cyan-600/20 to-blue-600/20',
    accent: 'bg-cyan-500',
    featured: true,
  },
  {
    title: 'Mastering TypeScript Generics: A Practical Guide',
    excerpt: 'Deep dive into TypeScript generics with real-world examples — from basic constraints to advanced conditional types and mapped types.',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    tag: 'TypeScript',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    gradient: 'from-blue-600/20 to-indigo-600/20',
    accent: 'bg-blue-500',
    featured: true,
  },
  {
    title: 'CSS Animations vs Framer Motion: When to Use Each',
    excerpt: 'A comprehensive comparison of pure CSS animations and Framer Motion, with performance benchmarks and practical use-case recommendations.',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    tag: 'CSS',
    tagColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    gradient: 'from-pink-600/20 to-purple-600/20',
    accent: 'bg-pink-500',
    featured: false,
  },
  {
    title: 'Node.js Performance Optimization Techniques',
    excerpt: 'Explore profiling, clustering, caching strategies, and async patterns to squeeze maximum performance out of your Node.js APIs.',
    date: 'Jan 15, 2026',
    readTime: '10 min read',
    tag: 'Node.js',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    gradient: 'from-green-600/20 to-emerald-600/20',
    accent: 'bg-green-500',
    featured: false,
  },
  {
    title: 'Designing Dark UI: Principles and Pitfalls',
    excerpt: 'A designer-developer perspective on crafting beautiful dark interfaces — contrast ratios, color palettes, and accessibility considerations.',
    date: 'Jan 05, 2026',
    readTime: '7 min read',
    tag: 'UI/UX',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    gradient: 'from-purple-600/20 to-violet-600/20',
    accent: 'bg-purple-500',
    featured: false,
  },
  {
    title: 'Docker & GitHub Actions: Zero-Downtime Deployments',
    excerpt: 'Set up a complete CI/CD pipeline using Docker multi-stage builds, GitHub Actions workflows, and blue-green deployment strategies.',
    date: 'Dec 22, 2025',
    readTime: '9 min read',
    tag: 'DevOps',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    gradient: 'from-orange-600/20 to-red-600/20',
    accent: 'bg-orange-500',
    featured: false,
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <section id="blog" ref={ref} className="py-24 relative bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase">Thoughts & Tutorials</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            I write about web development, design patterns, and everything in between. Here are my latest articles.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative bg-white/3 border border-white/8 rounded-2xl overflow-hidden card-glow cursor-pointer"
            >
              <div className={`h-3 w-full bg-gradient-to-r ${post.gradient.replace('/20', '')}`} />
              <div className={`absolute top-3 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${post.gradient.replace('/20', '')}`} />

              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${post.tagColor}`}>
                    <Tag size={11} />
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium px-2 py-1 bg-white/5 rounded-full">Featured</span>
                </div>

                <h3 className="text-white text-xl font-bold mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <motion.span
                    className="flex items-center gap-1 text-indigo-400 text-sm font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Read more <ArrowRight size={14} />
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {rest.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="group bg-white/3 border border-white/8 rounded-2xl p-5 card-glow cursor-pointer flex flex-col"
            >
              <div className={`w-8 h-1 rounded-full ${post.accent} mb-4`} />
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border w-fit mb-3 ${post.tagColor}`}>
                <Tag size={10} />
                {post.tag}
              </span>
              <h3 className="text-white text-sm font-bold mb-2 leading-snug group-hover:text-indigo-300 transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <motion.span
                  className="text-indigo-400"
                  whileHover={{ x: 3 }}
                >
                  <ArrowRight size={14} />
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Posts
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
