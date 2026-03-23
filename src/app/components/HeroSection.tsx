import { motion } from 'motion/react';
import { Code2, Database, Container, FileCode, Cloud, Box } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const techIcons = [
    { Icon: Code2, delay: 0, x: -100, y: -50 },
    { Icon: Database, delay: 0.2, x: 100, y: -30 },
    { Icon: Container, delay: 0.4, x: -80, y: 50 },
    { Icon: FileCode, delay: 0.6, x: 80, y: 60 },
    { Icon: Cloud, delay: 0.8, x: -120, y: 0 },
    { Icon: Box, delay: 1, x: 120, y: 20 },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">


      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-white/10"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 3) * 20}%`,
          }}
        >
          <Icon size={60} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Background Code Snippets */}
      <div className="absolute inset-0 font-mono text-xs text-white/5 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -100] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="whitespace-pre">
              {`const deploy = () => { kubectl apply -f config.yaml }`}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl tracking-tighter mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              JASMITH JOGA
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-cyan-100 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer & DevOps Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            BTech CSE Student at LPU | Cloud Computing 
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-6 text-lg group w-full sm:w-auto"
            >
              View Projects
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>

            {/* Scroll Indicator structurally placed between the buttons */}
            <div className="hidden sm:flex items-center justify-center px-4 self-center mt-2">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
              >
                <motion.div
                  className="w-1 h-2 bg-cyan-400 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-6 text-lg backdrop-blur-sm w-full sm:w-auto"
              onClick={() => window.open('https://drive.google.com/file/d/1HAH7G7tY_lUugow9DaryOhJvNXiW-sYp/view?usp=sharing', '_blank')}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Mobile Scroll Indicator below buttons */}
          <div className="flex sm:hidden justify-center mt-12 w-full">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                className="w-1 h-2 bg-cyan-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
