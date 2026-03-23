import { motion } from 'motion/react';
import { SkillGlobe } from './ui/SkillGlobe';
import { Download } from 'lucide-react';




export function SkillsSection() {
  const skills = [
    { name: 'C++',         color: '#00599C' },
    { name: 'Java',        color: '#007396' },
    { name: 'Python',      color: '#3776AB' },
    { name: 'AWS',         color: '#FF9900' },
    { name: 'Docker',      color: '#2496ED' },
    { name: 'Kubernetes',  color: '#326CE5' },
    { name: 'Git',         color: '#F05032' },
    { name: 'PostgreSQL',  color: '#336791' },
    { name: 'JavaScript',  color: '#F7DF1E' },
    { name: 'TypeScript',  color: '#3178C6' },
    { name: 'Go',          color: '#00ADD8' },
    { name: 'Node.js',     color: '#339933' },
    { name: 'React.js',    color: '#61DAFB' },
    { name: 'Solidity',    color: '#363636' },
    { name: 'Mongo DB',    color: '#47A248' },
    { name: 'Redux',       color: '#764ABC' },
    { name: 'Next.js',     color: '#ffffff' },
    { name: 'Firebase',    color: '#FFCA28' },
    { name: 'Redis',       color: '#DC382D' },
    { name: 'Haskell',     color: '#5D4F85' },
    { name: 'Tailwind',    color: '#06B6D4' },
    { name: 'Material UI', color: '#007FFF' },
    { name: 'Postman',     color: '#FF6C37' },
    { name: 'Rust',        color: '#CE422B' },
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-black py-32 overflow-hidden">
      {/* Background Section Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skillset</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and the tools I use to build scalable, modern applications.
          </p>
        </motion.div>

          <div className="flex justify-center">
            <SkillGlobe skills={skills} />
          </div>
        </div>
    </section>
  );
}
