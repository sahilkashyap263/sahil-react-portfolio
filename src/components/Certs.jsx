import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { Award, Clock, ExternalLink } from 'lucide-react';

export default function Certs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split into two rows for marquee effect
  const row1 = certifications.slice(0, Math.ceil(certifications.length / 2));
  const row2 = certifications.slice(Math.ceil(certifications.length / 2));

  const CertCard = ({ cert, index }) => (
    <motion.a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex-shrink-0 w-80 p-5 rounded-xl bg-surface border border-muted/10 hover:border-accent/50 transition-all group cursor-pointer block"
    >
      <div className="flex items-start justify-between mb-3">
        <Award className="w-5 h-5 text-accent" />
        <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h4 className="font-medium text-sm mb-1 group-hover:text-accent transition-colors">
        {cert.name}
      </h4>
      <p className="text-xs text-muted/70 mb-3 line-clamp-2">{cert.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted font-mono">
          <span>{cert.issuer}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {cert.duration}
          </span>
        </div>
        <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
          cert.type === 'workshop'
            ? 'bg-purple-500/20 text-purple-400'
            : 'bg-blue-500/20 text-blue-400'
        }`}>
          {cert.type}
        </span>
      </div>
    </motion.a>
  );

  return (
    <section id="certifications" className="relative py-32 section-padding bg-surface/30 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-accent text-sm mb-2 block">04 / Certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Continuous Learning
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4">
        <div className="flex gap-4 animate-marquee">
          {[...row1, ...row1].map((cert, i) => (
            <CertCard key={`r1-${i}`} cert={cert} index={i} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee-reverse">
          {[...row2, ...row2].map((cert, i) => (
            <CertCard key={`r2-${i}`} cert={cert} index={i} />
          ))}
        </div>
      </div>

      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}