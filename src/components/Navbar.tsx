import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          className="text-xl font-bold gradient-text cursor-pointer"
          onClick={() => scrollTo('home')}
          whileHover={{ scale: 1.05 }}
        >
          &lt;Riyaz /&gt;
        </motion.span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          className="hidden md:block px-5 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>

        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d18] border-t border-white/5 px-6 pb-4"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left py-3 text-slate-300 hover:text-white border-b border-white/5 text-sm"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
