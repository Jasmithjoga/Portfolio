import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { ResumeSection } from './components/ResumeSection';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isAboutFocused, setIsAboutFocused] = useState(false);

  useEffect(() => {
    // Check if device is desktop
    setIsDesktop(window.innerWidth > 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionClass = (id: string) => {
    if (!isAboutFocused) return 'transition-all duration-700 ease-in-out';
    
    if (id === 'about' || id === 'footer') {
      return 'relative z-20 scale-[1.02] md:scale-[1.05] transition-all duration-700 ease-in-out';
    }
    
    return 'opacity-30 scale-95 pointer-events-none transition-all duration-700 ease-in-out';
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {isDesktop && <CustomCursor />}
      <div className="min-h-screen bg-black text-white relative transition-colors duration-700">
        <ParticleBackground />
        <Navigation isAboutFocused={isAboutFocused} setIsAboutFocused={setIsAboutFocused} />
        <main 
          id="home" 
          className="relative z-10"
          onClick={() => isAboutFocused && setIsAboutFocused(false)}
        >
          <div className={sectionClass('hero')}>
            <HeroSection />
          </div>
          <div id="about" className={sectionClass('about')}>
            <AboutSection isFocused={isAboutFocused} />
          </div>
          <div className={sectionClass('projects')}>
            <ProjectsSection />
          </div>
          <div className={sectionClass('skills')}>
            <SkillsSection />
          </div>
          <div id="resume" className={sectionClass('resume')}>
            <ResumeSection />
          </div>
          <div className={sectionClass('certificates')}>
            <CertificatesSection />
          </div>
          <div className={sectionClass('contact')}>
            <ContactSection />
          </div>
          <div className={sectionClass('footer')}>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}