import { siteData } from '@/data/siteData';
import Seo from '@/components/Seo';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import CertificatesSection from '@/sections/CertificatesSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import ContactSection from '@/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Seo title={`${siteData.name} | Portfolio`} description={siteData.about} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}