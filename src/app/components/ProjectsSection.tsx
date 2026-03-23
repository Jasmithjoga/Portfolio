import { motion } from 'motion/react';
import { Github, Container, GitBranch, Code, Calendar, ArrowUpRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ProjectParticles } from './ui/ProjectParticles';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Designed an AWS Architecture Serverless Image Processing Pipeline',
      description: 'Built a serverless image processing pipeline on AWS using Lambda and S3 for automated image optimization, with CloudWatch monitoring.',
      image: '/aws_project.png',
      tags: ['S3', 'IAM', 'CloudWatch', 'Lambda'],
      category: 'AWS',
      date: 'Oct 2024',
      color: 'from-cyan-500 to-blue-500',
      icon: Container,
      github: 'https://github.com/Jasmithjoga/-Designed-an-AWS-Architecture-Serverless-Image-Processing-Pipeline-',
    },
    {
      title: 'Water Distribution Optimization in Rural Areas',
      description: 'Developed a water distribution optimization system using Kruskal’s Minimum Spanning Tree (MST) algorithm to minimize pipeline cost.',
      image: '/water_optimization.png',
      tags: ['Algorithm', 'DSU', 'Trees', 'Optimization'],
      category: 'DSA',
      date: 'Aug 2024',
      color: 'from-purple-500 to-pink-500',
      icon: GitBranch,
      github: 'https://github.com/Jasmithjoga/Water-Distribution-Optimization-in-Rural-Areas1/blob/main/index.html',
      live: 'https://water-distribution-optimization.netlify.app/',
    },
    {
      title: 'Civic-Sense',
      description: 'Enabling citizens to report issues and track progress seamlessly.\nDriving better urban living through community participation.',
      image: '/civic-sense-drawing.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      category: 'Full Stack',
      date: 'June 2024',
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      github: 'https://github.com/Jasmithjoga/Civic-Sense',
      live: 'https://civicsense-1-b44u.onrender.com/',
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-black py-32 overflow-hidden">
      <ProjectParticles />
      
      {/* Background Section Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-1">
            Project Showcase
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Latest Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hover over the projects to explore details and see them in focus.
          </p>
        </motion.div>

        {/* The Grid / Timeline Container */}
        <div className="relative">
          
          {/* 1. Center Straight Timeline Layer */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50 hidden md:block rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]" />

          {/* 2. Projects List with Alternating Sides */}
          <div className="space-y-32 md:space-y-16 relative z-10">
            {projects.map((project, index) => {
              return (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  
                  {/* Left Side Column */}
                  <div className="flex-1 w-full md:order-1 px-4 md:px-8">
                    {index % 2 === 0 && (
                      <ProjectCard project={project} index={index} />
                    )}
                  </div>

                  {/* Middle Spacer with Dot */}
                  <div className="w-12 md:w-[100px] flex justify-center items-center z-30 md:order-2 py-8 md:py-0">
                    <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_10px_#fff] border-4 border-black group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Right Side Column */}
                  <div className="flex-1 w-full md:order-3 px-4 md:px-8">
                    {index % 2 !== 0 && (
                      <ProjectCard project={project} index={index} />
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* View All Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <Button
            size="lg"
            variant="default"
            className="bg-gray-800 text-white hover:bg-white hover:text-black border border-gray-700 transition-all px-12 py-6 text-lg rounded-full shadow-lg"
            onClick={() => window.open('https://github.com/Jasmithjoga', '_blank')}
          >
            <Github size={24} className="mr-3" />
            Explore More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.7, scale: 1, filter: 'blur(1px)' }}
      whileHover={{ 
        scale: 1.05,
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 40
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative bg-gray-900/40 backdrop-blur-xl border-2 rounded-[2rem] overflow-hidden transition-all duration-500 shadow-2xl border-gray-800 hover:border-purple-500/50 hover:shadow-purple-500/20`}
    >
      <div className="flex flex-col min-h-[300px]">
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 md:h-64">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <Badge className={`bg-gradient-to-r ${project.color} text-white border-none shadow-lg px-4 py-1 text-xs font-bold`}>
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8 space-y-4">
          
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-purple-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed text-sm">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-0.5 bg-gray-800/50 text-gray-300 text-[10px] rounded-full border border-gray-700/50 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Button 
              className="bg-white text-black hover:bg-purple-500 hover:text-white transition-all flex-1 h-12 text-sm font-bold rounded-xl shadow-lg px-2"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github size={16} className="mr-2" />
              Source
            </Button>
            
            {(index === 1 || index === 2) && (
              <Button 
                className="bg-purple-600 text-white hover:bg-purple-500 transition-all flex-1 h-12 text-sm font-bold rounded-xl shadow-lg px-2"
                onClick={() => window.open(project.live || '#', '_blank')}
              >
                Live
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
