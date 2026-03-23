import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Jasmithjoga', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/jasmith9999/', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:jasmithjoga@gmail.com', label: 'Email' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="relative bg-black/40 border-t border-gray-900 py-12 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left: Branding */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-400 font-medium">
            Designed and Developed by <span className="text-white font-bold tracking-tight">Jasmith Joga</span>
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="flex-1 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 <span className="text-gray-400 font-semibold italic">JJ</span>
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex-1 flex justify-center md:justify-end gap-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon size={22} className="text-gray-400 group-hover:text-white transition-colors relative z-10" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </motion.footer>
  );
}