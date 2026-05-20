import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 section-padding min-h-screen flex items-center">
      <div ref={ref} className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-accent text-sm mb-4 block">05 / Contact</span>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Let's build<br />something together
          </h2>
          
          <p className="text-xl text-muted mb-12 max-w-xl mx-auto">
            Open to collaborations, internships, and interesting conversations about tech.
          </p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <button
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary text-background font-mono text-lg hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />
              {copied ? 'Copied!' : personalInfo.email}
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </button>
            <p className="mt-4 text-sm text-muted">Click to copy email</p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm">GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-mono text-sm">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-32 pt-8 border-t border-muted/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted font-mono">
            <p>© 2024 Sahil Kashyap</p>
            <p>Built with React & Tailwind</p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}