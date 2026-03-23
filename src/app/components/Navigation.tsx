import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  isAboutFocused: boolean;
  setIsAboutFocused: (focused: boolean) => void;
}

export function Navigation({ isAboutFocused, setIsAboutFocused }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Intersection tracking for navbar highlighting
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'certificates', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold so it highlights slightly before it reaches the top
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === '#about') {
      setIsAboutFocused(true);
    } else {
      setIsAboutFocused(false);
    }

    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-gray-800' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg">
              <Code2 size={24} className="text-white" />
            </div>
            <span className="text-xl text-white group-hover:text-cyan-400 transition-colors">
              JJ
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                  setActiveSection(item.href.substring(1));
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="https://drive.google.com/file/d/1HAH7G7tY_lUugow9DaryOhJvNXiW-sYp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-5 py-2 rounded-xl flex items-center gap-2 font-medium shadow-lg transition-all"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                whileTap={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="https://drive.google.com/file/d/1HAH7G7tY_lUugow9DaryOhJvNXiW-sYp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-5 py-2 rounded-xl flex items-center justify-center gap-2 font-medium shadow-lg transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}