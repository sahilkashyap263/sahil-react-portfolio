import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" className="relative py-32 section-padding bg-surface/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm mb-2 block">02 / Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tools & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`group relative p-6 rounded-xl border transition-all duration-500 cursor-pointer ${
                hoveredCategory === index 
                  ? 'border-accent/50 bg-accent/5' 
                  : 'border-muted/10 bg-background hover:border-muted/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-lg font-medium">{skill.category}</h3>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredCategory === index ? 'translate-x-1 text-accent' : 'text-muted'
                }`} />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full text-sm font-mono transition-all duration-300 ${
                      hoveredCategory === index
                        ? 'bg-accent/20 text-accent'
                        : 'bg-muted/10 text-muted'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Progress bar decoration */}
              <div className="mt-4 h-1 bg-muted/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${85 + Math.random() * 15}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="h-full bg-accent/60 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}