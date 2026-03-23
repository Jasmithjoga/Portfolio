import { motion } from 'motion/react';
import { Sparkles, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { useEffect } from 'react';

interface AboutSectionProps {
  isFocused?: boolean;
}

export function AboutSection({ isFocused }: AboutSectionProps) {
  return (
    <section 
      id="about" 
      className={`relative min-h-screen bg-transparent py-20 px-4 transition-all duration-700 ${
        isFocused ? 'ring-2 ring-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.15)] rounded-3xl mx-4 my-8 bg-gray-900/40 z-30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start pt-8 group/about-grid">
          {/* Left Column - Facts & Hobbies */}
          <div className="space-y-8">
            {/* At a glance Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 shadow-2xl space-y-8 transition-all duration-500 ease-in-out will-change-transform md:group-hover/about-grid:scale-95 md:group-hover/about-grid:opacity-50 md:hover:!scale-105 md:hover:!opacity-100 md:hover:z-10 md:hover:shadow-cyan-500/20 md:hover:border-cyan-500/50"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight">At a glance</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-500/10 rounded-2xl group-hover:bg-red-500/20 transition-colors">
                    <MapPin className="text-red-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-gray-200 font-medium">Andra pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                    <GraduationCap className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Education</p>
                    <p className="text-gray-200 font-medium">Pursuing B.Tech CSE</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                    <Briefcase className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Experience</p>
                    <p className="text-gray-200 font-medium">Software Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Beyond the code Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 shadow-2xl space-y-6 transition-all duration-500 ease-in-out will-change-transform md:group-hover/about-grid:scale-95 md:group-hover/about-grid:opacity-50 md:hover:!scale-105 md:hover:!opacity-100 md:hover:z-10 md:hover:shadow-purple-500/20 md:hover:border-purple-500/50"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight">Beyond the code</h3>
              <div className="space-y-3">
                {[
                  { text: 'Playing Cricket', emoji: '🏏' },
                  { text: 'Reading Books', emoji: '📚' },
                  { text: 'Offriding', emoji: '🏍️' }
                ].map((hobby, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{hobby.emoji}</span>
                    <p className="text-gray-300 font-medium">{hobby.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Journey & Approach */}
          <div className="space-y-8">
            {/* My Journey Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-10 rounded-3xl border border-gray-800 shadow-2xl space-y-8 transition-all duration-500 ease-in-out will-change-transform md:group-hover/about-grid:scale-95 md:group-hover/about-grid:opacity-50 md:hover:!scale-105 md:hover:!opacity-100 md:hover:z-10 md:hover:shadow-indigo-500/20 md:hover:border-indigo-500/50"
            >
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 lowercase">
                My Journey
              </h3>
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Hello! I'm <span className="text-white font-bold">Jasmith Joga</span>, a passionate developer with a strong interest in <span className="text-purple-400 font-semibold">Cloud Computing</span> and <span className="text-indigo-400 font-semibold">DevOps</span>.
                </p>
                <p>
                  My journey into technology started with a curiosity about how large-scale systems function, which gradually grew into a dedicated focus on building and managing reliable digital infrastructure. I specialize in designing, automating, and deploying applications using modern cloud platforms and CI/CD pipelines.
                </p>
                <p>
                  What truly motivates me is the synergy between development and operations—striking the right balance between writing efficient code and delivering scalable, resilient, and highly available systems. I continuously enhance my skills through hands-on cloud projects and by staying updated with the latest advancements in technology.
                </p>
              </div>
            </motion.div>

            {/* My Approach Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-10 rounded-3xl border border-gray-800 shadow-2xl space-y-8 transition-all duration-500 ease-in-out will-change-transform md:group-hover/about-grid:scale-95 md:group-hover/about-grid:opacity-50 md:hover:!scale-105 md:hover:!opacity-100 md:hover:z-10 md:hover:shadow-blue-500/20 md:hover:border-blue-500/50"
            >
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 lowercase">
                My Approach
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in creating architecture that's not just functional, but resilient. Every pipeline I build and every system I deploy aims to solve real problems and enhance operational efficiency. I value clean code, automated workflows, collaborative development, and continuous learning as the foundations of great software.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
