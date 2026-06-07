import { motion } from 'framer-motion';

export default function PageSection({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{eyebrow}</p> : null}
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-slate-400">{description}</p> : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}