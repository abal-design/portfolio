import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import PageSection from '@/components/PageSection';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <PageSection
      id="testimonials"
      eyebrow="Testimonials"
      title="Beautiful carousel with placeholder testimonials"
      description="The carousel cycles automatically and also supports manual navigation."
    >
      <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#06B6D4]/10 blur-3xl" />
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative"
        >
          <div className="flex items-center gap-1 text-[#06B6D4]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar key={index} />
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-xl leading-10 text-[#F8FAFC] sm:text-2xl">&ldquo;{current.quote}&rdquo;</p>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-lg font-bold text-[#F8FAFC]">{current.name}</p>
              <p className="text-sm text-[#94A3B8]">{current.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#334155] bg-[#1E293B]/60 text-white transition hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((value) => (value + 1) % testimonials.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#334155] bg-[#1E293B]/60 text-white transition hover:bg-white/10"
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
}