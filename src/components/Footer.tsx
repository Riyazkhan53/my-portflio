import { Heart, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2024 <span className="text-indigo-400 font-medium">Riyazkhan</span>. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm flex items-center gap-1.5">
          Crafted with <Heart size={14} className="text-pink-500 fill-pink-500" /> using React & Framer Motion
        </p>
        <a
          href="https://github.com/Riyazkhan53"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
}
