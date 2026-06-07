import { motion } from 'framer-motion';
import PageSection from '@/components/PageSection';
import { experienceData } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <PageSection
      id="experience"
      eyebrow="Experience"
      title="Animated timeline of professional experience"
      description="Teaching and mentoring experience that complements product-focused development work."
    >
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] opacity-70 sm:left-4" />
        <div className="space-y-8">
          {experienceData.map((job) => (
            <motion.article
              key={job.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <span className="absolute -left-7 top-3 h-4 w-4 rounded-full border-4 border-[#0F172A] bg-[#06B6D4] shadow-[0_0_0_8px_rgba(6,182,212,.12)] sm:-left-9" />
              <div className="glass hover-lift rounded-[2rem] p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#F8FAFC]">{job.role}</h3>
                    <p className="mt-1 text-sm text-[#06B6D4]">{job.company}</p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#94A3B8]">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-[#94A3B8]">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#3B82F6]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}