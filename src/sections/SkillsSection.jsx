import { motion } from 'framer-motion';
import PageSection from '@/components/PageSection';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <PageSection
      id="skills"
      eyebrow="Skills"
      title="Skills and tools"
      description="A balanced mix of frontend craft, backend literacy, and professional collaboration habits."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: categoryIndex * 0.08 }}
            className="glass hover-lift rounded-[2rem] p-6 sm:p-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{category.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span key={skill.name} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}