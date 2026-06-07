import { motion } from 'framer-motion';
import PageSection from '@/components/PageSection';
import { educationData } from '@/data/education';

export default function EducationSection() {
  return (
    <PageSection
      id="education"
      eyebrow="Education"
      title="Timeline of academic growth"
      description="A structured learning path that supports both technical depth and product thinking."
    >
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] opacity-70 sm:left-4" />
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <span className="absolute -left-7 top-3 h-4 w-4 rounded-full border-4 border-[#0F172A] bg-[#06B6D4] shadow-[0_0_0_8px_rgba(6,182,212,.12)] sm:-left-9" />
              <div className="glass hover-lift rounded-[2rem] p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#F8FAFC]">{item.degree}</h3>
                    <p className="mt-1 text-[#06B6D4]">{item.institute}</p>
                    <p className="mt-2 text-sm text-[#94A3B8]">{item.affiliation}</p>
                  </div>
                  <span className="rounded-full border border-[#334155] bg-[#1E293B]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#F8FAFC]">
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}