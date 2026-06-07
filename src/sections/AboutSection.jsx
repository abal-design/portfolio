import { motion } from 'framer-motion';
import PageSection from '@/components/PageSection';
import { siteData } from '@/data/siteData';

const infoCards = [
  { label: 'Name', value: 'Abal Bohara' },
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Location', value: 'Morang, Nepal' },
  { label: 'Email', value: 'themailofabal@gmail.com' },
];

const educationHighlights = [
  'BSc. Hons Computing at Itahari International College',
  'Affiliated with London Metropolitan University',
  'Computer Engineering (+2) from Shree Shanti Bhagawati Secondary School',
];

export default function AboutSection() {
  return (
    <PageSection
      id="about"
      eyebrow="About Me"
      title="Professional summary with a design-driven mindset"
      description={siteData.about}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass hover-lift rounded-[2rem] p-6 sm:p-8"
        >
          <h3 className="font-display text-2xl font-bold text-white">Career objective</h3>
          <p className="mt-4 leading-8 text-slate-400">{siteData.objective}</p>
          <div className="mt-8 space-y-3">
            {educationHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {infoCards.map((card, index) => (
            <div key={card.label} className="glass hover-lift rounded-3xl p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{card.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{card.value}</p>
            </div>
          ))}
          <div className="glass hover-lift rounded-3xl p-6 sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Focus</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">Responsive interfaces, usable interactions, and polished product storytelling.</p>
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
}