import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'riyazkhan@example.com', href: 'mailto:riyazkhan@example.com' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Location', value: 'Mumbai, India', href: '#' },
];

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm font-medium tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to work together? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-indigo-500/30 transition-colors group card-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">{value}</p>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <p className="text-slate-500 text-sm mb-4 uppercase tracking-wider">Follow Me</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white/3 border border-white/8 rounded-2xl p-8 card-glow">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {(['name', 'email'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-slate-400 text-sm mb-2 capitalize">{field}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      required
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-slate-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
