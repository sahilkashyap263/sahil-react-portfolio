import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.3s ease-out'
        }} />
      </div>

      <motion.div
        className="relative z-10 text-center section-padding max-w-5xl mx-auto"
        style={{ opacity, scale, y }}
      >
        {/* Role tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-muted/30 text-sm font-mono text-muted">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Title: Sahil on line 1, Kashyap on line 2 */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block"
            style={{
              transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            Sahil
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block"
            style={{
              transform: `translate(${mousePos.x * -0.1}px, ${mousePos.y * 0.1}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            Kashyap
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-muted font-light mb-12 max-w-2xl mx-auto"
        >
          {personalInfo.role}
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-mono text-sm">GitHub</span>
          </a>
          <span className="text-muted/30">|</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
          <span className="text-muted/30">|</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-mono text-sm">Email</span>
          </a>
        </motion.div>

        {/* Resume download button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="/Sahil_General_CV.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-muted/30 text-muted hover:text-primary hover:border-primary hover:bg-primary/5 transition-all font-mono text-sm"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 font-mono text-xs text-muted/50">
        <span className="text-accent">const</span> developer = <span className="text-green-400">true</span>;
      </div>
      <div className="absolute top-8 right-8 font-mono text-xs text-muted/50">
        v2.0.0
      </div>
    </section>
  );
}