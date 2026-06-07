import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import PageSection from '@/components/PageSection';
import { certificates } from '@/data/certificates';

export default function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <PageSection
      id="certificates"
      eyebrow="Certificates"
      title="Professional certificate showcase"
      description="Tap any certificate to preview it in a larger modal window."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.button
            key={certificate.title}
            type="button"
            onClick={() => setActiveCertificate(certificate)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="glass group overflow-hidden rounded-[2rem] text-left hover-lift"
          >
            <img src={certificate.image} alt={certificate.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{certificate.year}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/85 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              className="glass relative w-full max-w-4xl overflow-hidden rounded-[2rem]"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white transition hover:bg-slate-900"
                aria-label="Close certificate preview"
              >
                <FiX />
              </button>
              <img src={activeCertificate.image} alt={activeCertificate.title} className="max-h-[78vh] w-full object-contain" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-white">{activeCertificate.title}</h3>
                <p className="mt-1 text-slate-400">{activeCertificate.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </PageSection>
  );
}