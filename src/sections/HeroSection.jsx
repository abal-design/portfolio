import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { siteData } from '@/data/siteData';

const roles = ['Frontend Developer', 'MERN Stack Developer', 'UI/UX Instructor'];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-premium-radial opacity-100" />
      <div className="container-page grid items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#334155] bg-[#1E293B]/80 px-4 py-2 text-sm text-[#F8FAFC]">
            <span className="h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_0_6px_rgba(6,182,212,.16)]" />
            Available for freelance and full-time opportunities
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#06B6D4]">Hello, I&apos;m</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            <span className="text-gradient">Abal Bohara</span>, building modern digital experiences with precision.
          </h1>
          <div className="mt-6 h-8 overflow-hidden">
            <motion.div
              className="flex flex-col"
              animate={{ y: ['0%', '-100%', '-200%', '0%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              {roles.map((role) => (
                <div key={role} className="h-8 text-lg font-semibold text-[#F8FAFC] sm:text-xl">
                  {role}
                </div>
              ))}
            </motion.div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#94A3B8] sm:text-lg">{siteData.about}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm sm:text-base">
            <a
              href="/abal-bohara-resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-5 py-3 font-semibold text-[#0F172A] transition hover:scale-[1.02]"
              download
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#334155] bg-[#1E293B]/60 px-5 py-3 font-semibold text-[#F8FAFC] transition hover:bg-white/10"
            >
              <FiMail /> Hire Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#94A3B8]">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
              <FiMapPin className="text-[#06B6D4]" /> {siteData.location}
            </div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
              <FiMail className="text-[#06B6D4]" /> {siteData.email}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#3B82F6]/30 blur-3xl animate-pulseGlow" />
          <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-[#06B6D4]/30 blur-3xl animate-pulseGlow" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-6 shadow-soft sm:p-8">
            <div className="absolute inset-0 bg-hero-grid bg-[length:64px_64px] opacity-20" />
            <div className="relative flex flex-col gap-6">
              <div className="mx-auto grid h-56 w-56 place-items-center rounded-[2rem] border border-[#334155] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] shadow-glow animate-float">
                <div className="grid h-44 w-44 place-items-center rounded-[1.5rem] bg-gradient-to-br from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] p-1">
                  <div className="grid h-full w-full place-items-center rounded-[1.35rem] bg-[#0F172A]/90 text-center">
                    <div>
                      <p className="font-display text-5xl font-bold text-white">AB</p>
                      <p className="mt-2 text-sm tracking-[0.3em] text-[#94A3B8]">PROFILE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">Location</p>
                  <p className="mt-2 font-semibold text-white">Morang, Nepal</p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#94A3B8]">Focus</p>
                  <p className="mt-2 font-semibold text-white">Modern UI Systems</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}