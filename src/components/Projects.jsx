import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative group mb-32 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
        >
          <div 
            className="aspect-[4/3] rounded-2xl overflow-hidden relative"
            style={{ backgroundColor: `${project.color}15` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-background font-mono text-sm hover:scale-105 transition-transform"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-background transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={index % 2 === 1 ? 'lg:order-1' : ''}
        >
          <div className="flex items-center gap-4 mb-4">
            <span 
              className="font-mono text-sm px-3 py-1 rounded-full"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              0{project.id}
            </span>

            <div className="h-px flex-1 bg-muted/20" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-lg text-muted mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-mono bg-muted/10 text-muted border border-muted/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-mono text-sm group/link"
          >
            View on GitHub

            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="projects" className="relative py-32 section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="font-mono text-accent text-sm mb-2 block">
            03 / Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>

          <p className="text-muted text-lg max-w-xl">
            A selection of projects that challenged me to think differently about code and data.
          </p>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <a
            href="https://github.com/sahilkashyap263"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface border border-muted/20 text-primary hover:border-accent hover:text-accent transition-all font-mono text-sm group"
          >
            <Github className="w-5 h-5" />

            View More on GitHub

            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}