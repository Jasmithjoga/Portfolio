import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/jasmithjoga@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}!`
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jasmithjoga@gmail.com', href: 'mailto:jasmithjoga@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7702110719', href: 'tel:+91 7702110719' },
    { icon: MapPin, label: 'Location', value: 'Punjab, India', href: null },  
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Jasmithjoga', color: 'hover:text-purple-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jasmith9999/', color: 'hover:text-cyan-400' },
  ];

  return (
    <section id="contact" className="min-h-screen bg-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Let's build something amazing together!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm currently available for freelance work and exciting opportunities. 
                If you have a project in mind or just want to chat about tech, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-green-400">Available for Work</p>
              </div>
              <p className="text-gray-400 text-sm">
                Open to full-time opportunities and freelance projects
              </p>
            </motion.div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Connect with me:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glassmorphism Card */}
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl" />
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white group disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                  {status === 'idle' && (
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send size={18} />
                    </motion.span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
