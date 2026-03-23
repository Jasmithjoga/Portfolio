import { motion } from 'framer-motion';
import { Award, Trophy, Star, GraduationCap, Code, Users, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState, useRef } from 'react';

const certificates = [
  {
    icon: Users,
    title: 'Social Networks – NPTEL',
    description: 'Comprehensive certification covering the fundamentals of social network analysis, including graph theory, network structures, and real-world applications in digital platforms.',
    date: '2024',
    bgClasses: 'from-blue-500/10 to-transparent',
    accentColor: 'text-blue-400',
    tags: ['Graph Theory', 'Social Analysis', 'NPTEL'],
    link: 'https://drive.google.com/file/d/1AY9JhdcvkU2nPTbqzV_ZECT_aruCyT94/view?usp=sharing',
  },
  {
    icon: Code,
    title: 'Data Structures and Algorithms – LPU',
    description: 'Comprehensive certification covering core data structures and algorithms, including arrays, trees, graphs, and efficient problem-solving techniques.',
    date: '2023',
    bgClasses: 'from-cyan-400/10 to-transparent',
    accentColor: 'text-cyan-400',
    tags: ['DSA', 'C++', 'Problem Solving'],
    link: 'https://drive.google.com/file/d/1pBef01nrqMNC8Q8p-ifS4e2zDHC4o_Vn/view?usp=sharing',
  },
  {
    icon: GraduationCap,
    title: 'TCP/IP and Advanced Topics – Coursera',
    description: 'Comprehensive certification covering TCP/IP protocols, network communication models, and advanced concepts in data transmission and networking.',
    date: '2023',
    bgClasses: 'from-purple-500/10 to-transparent',
    accentColor: 'text-purple-400',
    tags: ['Networking', 'TCP/IP', 'Protocols'],
    link: 'https://www.coursera.org/account/accomplishments/verify/V939QQGZSGBV',
  },
  {
    icon: Star,
    title: 'The Bits and Bytes of Computer Networking',
    description: 'Certification in computer networking covering core protocols, network layers, and internet communication fundamentals.',
    date: '2023',
    bgClasses: 'from-orange-400/10 to-transparent',
    accentColor: 'text-orange-400',
    tags: ['Networking', 'Fundamentals', 'Coursera'],
    link: 'https://www.coursera.org/account/accomplishments/verify/BYKZBB2ZVPU2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    icon: Trophy,
    title: 'Cod-A-FestX 3.0',
    description: 'Certificate of Participation in Cod-A-FestX 3.0, organized by the School of AI and Emerging Technologies, recognizing involvement in a competitive hackathon environment.',
    date: '2024',
    bgClasses: 'from-yellow-400/10 to-transparent',
    accentColor: 'text-yellow-400',
    tags: ['Hackathon', 'AI', 'Competitive'],
    link: 'https://drive.google.com/file/d/1XkCk9PGHW__QMFq1VH1dq1F_ZyqT47cT/view?usp=sharing',
  },
  {
    icon: Award,
    title: 'Hackathon Participation – HackWithVertos 1.0',
    description: 'Actively participated in HackWithVertos 1.0, demonstrating teamwork, problem-solving, and rapid prototyping skills in a competitive setting.',
    date: '2024',
    bgClasses: 'from-emerald-400/10 to-transparent',
    accentColor: 'text-emerald-400',
    tags: ['Hackathon', 'Teamwork', 'Prototyping'],
    link: 'https://drive.google.com/file/d/18wl0fWsNYw2iOqH9FUHx07Kl8xUUouaf/view?usp=sharing',
  },
];

function CertificateCard({ cert, index }: { cert: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        zIndex: 40
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col h-full overflow-hidden rounded-3xl bg-gray-900/50 border-2 border-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-sm group transition-all duration-500"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgClasses} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Spotlight Hover Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: isHovered 
            ? `radial-gradient(400px circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(255,255,255,0.06), transparent 40%)` 
            : 'transparent'
        }}
      />

      <div className="relative z-10 flex flex-col p-8 flex-1 h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3.5 bg-gray-800/80 rounded-2xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <cert.icon className={`w-6 h-6 ${cert.accentColor}`} />
          </div>
          <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider bg-gray-950/50 px-3 py-1 rounded-full border border-white/5">
            {cert.date}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {cert.title}
        </h3>

        <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-1">
          {cert.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {cert.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-black/40 text-gray-300 border border-white/5 px-2.5 py-1 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* This creates an isolated stacking context for the button itself, ensuring native reliable clicks */}
        <div className="mt-auto pointer-events-auto">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3.5 font-semibold text-gray-300 hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-1"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative min-h-[90vh] bg-black py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Abstract Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none transform -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4 block">
            ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Certificates <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring my journey of continuous learning, professional recognition, and competitive involvement across various disciplines.
          </p>
        </motion.div>

        {/* Grid Layout instead of 3D stack for maximum usability and professional look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
