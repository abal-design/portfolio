import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import PageSection from '@/components/PageSection';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <PageSection
      id="projects"
      eyebrow="Projects"
      title="Portfolio projects with premium hover states"
      description="Each card includes a visual preview, stack badges, concise outcomes, and action buttons."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="glass group overflow-hidden rounded-[2rem] border border-white/10"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-100">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-2 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                    <FiExternalLink /> Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                    <FiGithub /> GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageSection>
  );
}