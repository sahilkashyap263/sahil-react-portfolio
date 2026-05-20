import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutText, personalInfo } from '../data/portfolioData';
import { MapPin, GraduationCap, Coffee } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm mb-2 block">01 / About</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The person behind<br />the code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio text */}
          <div className="space-y-8">
            {aboutText.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="text-lg md:text-xl text-muted leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-8 border-t border-muted/20"
            >
              <div className="flex items-center gap-3 text-muted">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-mono text-sm">Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="font-mono text-sm">LPU — AI & ML Honors</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Coffee className="w-4 h-4 text-accent" />
                <span className="font-mono text-sm">Powered by caffeine</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats / visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-surface rounded-2xl p-8 border border-muted/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="font-mono text-4xl font-bold text-accent mb-1">2+</div>
                  <div className="text-sm text-muted">Projects Built</div>
                </div>
                <div>
                  <div className="font-mono text-4xl font-bold text-accent mb-1">12</div>
                  <div className="text-sm text-muted">Certifications</div>
                </div>
                <div>
                  <div className="font-mono text-4xl font-bold text-accent mb-1">4+</div>
                  <div className="text-sm text-muted">Years Coding</div>
                </div>
                <div>
                  <div className="font-mono text-4xl font-bold text-accent mb-1">99.6%</div>
                  <div className="text-sm text-muted">ML Accuracy</div>
                </div>
              </div>
              
              {/* Decorative code block */}
              <div className="mt-8 p-4 bg-background rounded-lg font-mono text-xs text-muted/60 overflow-hidden">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Developer</span> {'{'}</p>
                <p className="pl-4"><span className="text-blue-400">constructor</span>() {'{'}</p>
                <p className="pl-8">this.<span className="text-green-400">curiosity</span> = <span className="text-orange-400">Infinity</span>;</p>
                <p className="pl-8">this.<span className="text-green-400">coffee</span> = <span className="text-orange-400">true</span>;</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}