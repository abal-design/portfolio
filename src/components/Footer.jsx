import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import { siteData } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-[#F8FAFC]">{siteData.name}</p>
          <p className="mt-1 text-sm text-[#94A3B8]">Frontend Developer | MERN Stack Developer | UI/UX Instructor</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-white/10" href={siteData.social.githubUrl} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-white/10" href={siteData.social.linkedinUrl} target="_blank" rel="noreferrer">
            <FaLinkedinIn /> LinkedIn
          </a>
          <a className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-white/10" href={siteData.social.emailUrl}>
            <FiMail /> Email
          </a>
          <a className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-white/10" href="#top">
            <FiArrowUp /> Back to Top
          </a>
        </div>
      </div>
      <div className="container-page mt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {siteData.name}. All rights reserved.
      </div>
    </footer>
  );
}