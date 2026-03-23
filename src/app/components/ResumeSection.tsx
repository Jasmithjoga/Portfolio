import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function ResumeSection() {
    const education = [
        {
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            period: "Since Aug 2023",
            details: "CGPA: 6.76",
        },
        {
            institution: "Ascent Junior College",
            location: "Madurawada, Visakhapatnam",
            degree: "Intermediate",
            period: "Oct 2021 - Mar 2023",
            details: "Percentage: 95",
        },
        {
            institution: "Sri Chaitanya School",
            location: "",
            degree: "Secondary Education",
            period: "Mar 2021",
            details: "Percentage: 95",
        }
    ];

    const skillCategories = [
        {
            title: "LANGUAGES/DEV/DB",
            skills: ["Python", "C++", "Java", "Spring Boot", "Bash", "MySQL", "PostgreSQL", "MongoDB"],
            color: "border-blue-500/20 text-blue-400"
        },
        {
            title: "INFRA/TOOLS",
            skills: ["Kubernetes", "GitOps", "GitHub Actions", "Docker", "Linux", "Terraform", "Ansible"],
            color: "border-emerald-500/20 text-emerald-400"
        },
        {
            title: "CLOUD/HYBRID",
            skills: ["AWS", "Azure", "EKS", "VPC", "EC2", "S3", "Private Cloud"],
            color: "border-orange-500/20 text-orange-400"
        },
        {
            title: "SOFT SKILLS",
            skills: ["Effective Communication", "Team Collaboration", "Adaptability & Learning Agility"],
            color: "border-pink-500/20 text-pink-400"
        }
    ];

    const projects = [
        {
            title: "Designed an AWS Architecture Serverless Image Processing Pipeline",
            category: "CLOUD / SERVERLESS",
            period: "Feb 2026",
            points: [
                "Designed and implemented a serverless image processing pipeline using AWS Lambda, S3, and DynamoDB for automated image resizing and optimization.",
                "Integrated CloudWatch for real-time monitoring and logging, improving visibility and debugging efficiency of cloud functions.",
                "Ensured scalability and cost-efficiency by leveraging AWS’s event-driven architecture and auto-scaling capabilities during high traffic loads."
            ],
            tech: ["AWS S3", "IAM", "AWS VPC", "Dynamo DB", "AWS lambda", "Cloud Watch", "Cloud Front"]
        },
        {
            title: "Created a Project on Water Distribution Optimization in Rural area",
            category: "DSA / OPTIMIZATION",
            period: "Oct 2025",
            points: [
                "Developed a water distribution optimization system using Kruskal’s Minimum Spanning Tree (MST) algorithm to minimize pipeline cost in rural regions.",
                "Implemented efficient DSA components including Arrays and Disjoint Set Union (DSU) for edge storage, union–find operations, and cycle detection."
            ],
            tech: ["Kruskal algorithm", "DSU", "Trees", "HTML", "CSS", "Visual Studio Code", "Sublime Text"]
        }
    ];

    const training = [
        {
            title: "Data Structures and Algorithms – Summer Training",
            institution: "Virtual Training Program",
            period: "1 Month",
            points: [
                "Completed a one-month virtual training program focused on core Data Structures and Algorithms for efficient data handling and problem-solving.",
                "Practiced key algorithms including linear & binary search, and string manipulation techniques.",
                "Developed and implemented data structures such as linked lists, stacks, queues, and trees.",
                "Completed a final assessment proving proficiency in building and analyzing algorithms."
            ],
            tech: ["DSA", "Algorithms", "Linear Search", "Binary Search", "Linked Lists", "Trees"]
        }
    ];

    const certificationsList = [
        {
            title: "Social Networks – NPTEL",
            institution: "NPTEL",
            period: "2024",
            link: "https://drive.google.com/file/d/1AY9JhdcvkU2nPTbqzV_ZECT_aruCyT94/view?usp=sharing"
        },
        {
            title: "Data Structures and Algorithms – LPU",
            institution: "LPU",
            period: "2023",
            link: "https://drive.google.com/file/d/1pBef01nrqMNC8Q8p-ifS4e2zDHC4o_Vn/view?usp=sharing"
        },
        {
            title: "TCP/IP and Advanced Topics – Coursera",
            institution: "Coursera",
            period: "2023",
            link: "https://www.coursera.org/account/accomplishments/verify/V939QQGZSGBV"
        }
    ];

    const contactInfo = [
        { icon: Mail, label: 'jasmithjoga@gmail.com', href: 'mailto:jasmithjoga@gmail.com' },
        { icon: Phone, label: '+91-7702110719', href: 'tel:+917702110719' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jasmith9999/' },
        { icon: Github, label: 'GitHub', href: 'https://github.com/Jasmithjoga' },
    ];

    return (
        <section id="resume" className="relative py-24 bg-transparent overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Resume</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {contactInfo.map((info, idx) => (
                            <a
                                key={idx}
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 border border-white/5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
                            >
                                <info.icon size={14} className="text-purple-400" />
                                {info.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <Tabs defaultValue="education" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-gray-900/40 p-1 border border-white/5 rounded-2xl h-auto flex flex-wrap justify-center gap-2">
                            <TabsTrigger value="education" className="px-6 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-500 font-semibold text-gray-400 hover:text-gray-200">Education</TabsTrigger>
                            <TabsTrigger value="skills" className="px-6 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-500 font-semibold text-gray-400 hover:text-gray-200">Skills</TabsTrigger>
                            <TabsTrigger value="projects" className="px-6 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-500 font-semibold text-gray-400 hover:text-gray-200">Projects</TabsTrigger>
                            <TabsTrigger value="training" className="px-6 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-500 font-semibold text-gray-400 hover:text-gray-200">Training</TabsTrigger>
                            <TabsTrigger value="certifications" className="px-6 py-2.5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-500 font-semibold text-gray-400 hover:text-gray-200">Certifications</TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Education Tab */}
                    <TabsContent value="education" className="space-y-6 mt-0">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-6 md:p-8 bg-gray-900/40 border border-white/5 rounded-2xl backdrop-blur-sm group hover:border-purple-500/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                            {item.institution}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{item.location}</p>
                                    </div>
                                    <div className="text-purple-400 font-medium text-sm md:text-base border border-purple-500/30 px-4 py-1.5 rounded-full bg-purple-500/5 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                        {item.period}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-gray-200 font-medium text-lg">{item.degree}</p>
                                    {item.details && (
                                        <div className="inline-block">
                                            <span className="text-purple-400 font-bold text-xl drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">{item.details}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value="skills" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillCategories.map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-gray-900/40 border border-white/5 rounded-2xl backdrop-blur-sm"
                                >
                                    <h3 className={`text-sm font-bold tracking-widest mb-6 ${cat.color}`}>{cat.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-gray-800/50 border border-white/5 rounded-lg text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Projects Tab */}
                    <TabsContent value="projects" className="space-y-6 mt-0">
                        {projects.map((proj, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 md:p-8 bg-gray-900/40 border border-white/5 rounded-2xl backdrop-blur-sm"
                            >
                                <div className="flex flex-col md:flex-row justify-between gap-2 mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">{proj.category}</span>
                                            <span className="text-xs text-gray-500"> ( GitRepo )</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300">{proj.title}</h3>
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium">{proj.period}</span>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {proj.points.map((pt, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs text-gray-500 mr-2 self-center">Tech:</span>
                                    {proj.tech.map(t => (
                                        <span key={t} className="px-2 py-1 bg-gray-800/50 border border-white/5 rounded text-xs text-gray-400">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </TabsContent>

                    {/* Training Tab */}
                    <TabsContent value="training" className="space-y-6 mt-0">
                        {training.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 md:p-8 bg-gray-900/40 border border-white/5 rounded-2xl backdrop-blur-sm"
                            >
                                <div className="flex flex-col md:flex-row justify-between gap-2 mb-4">
                                    <div>
                                        <span className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2 block">TRAINING</span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-sm mt-1">{item.institution}</p>
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium">{item.period}</span>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {item.points.map((pt, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs text-gray-500 mr-2 self-center">Tech:</span>
                                    {item.tech.map(t => (
                                        <span key={t} className="px-2 py-1 bg-gray-800/50 border border-white/5 rounded text-xs text-gray-400">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </TabsContent>

                    <TabsContent value="certifications" className="space-y-6 mt-0">
                        {certificationsList.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 md:p-8 bg-gray-900/40 border border-white/5 rounded-2xl backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row justify-between gap-2 mb-4">
                                    <div>
                                        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2 block">CERTIFICATION</span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300">{cert.title}</h3>
                                        <p className="text-gray-400 text-sm mt-1">{cert.institution}</p>
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium">{cert.period}</span>
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium mt-2 relative z-20 pointer-events-auto cursor-pointer"
                                >
                                    View Detailed Certificate →
                                </a>
                            </motion.div>
                        ))}
                    </TabsContent>
                </Tabs>

                {/* Download Button */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <motion.a
                        href="https://drive.google.com/file/d/1HAH7G7tY_lUugow9DaryOhJvNXiW-sYp/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-xl transition-all"
                    >
                        <Download size={20} />
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
