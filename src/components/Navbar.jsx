import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { siteData } from '@/data/siteData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-slate-950/75 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] text-sm font-black text-white shadow-glow">
            AB
          </span>
          <div>
            <p className="font-display text-sm font-bold tracking-[0.24em] text-[#F8FAFC]">{siteData.name}</p>
            <p className="text-xs text-[#94A3B8]">Portfolio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-[#94A3B8] transition hover:text-[#F8FAFC]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-2xl text-[#F8FAFC] transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
        <div className="container-page pb-5">
          <div className="glass rounded-3xl p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-[#F8FAFC] transition hover:bg-white/10">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}