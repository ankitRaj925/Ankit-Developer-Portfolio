import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { Mail, MapPin, Phone, Send, Linkedin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset button state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden scroll-mt-20">
      {/* Footer background shade */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-200/50 dark:to-black/80 -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Have a project in mind or just want to say hi?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Let's connect!</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to chat, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ankitrajggv@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-lg font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">ankitrajggv@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+918789503246" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-lg font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">+91 8789503246</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ankitraj-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">LinkedIn</p>
                  <p className="text-lg font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">ankitraj-dev</p>
                </div>
              </a>

               <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 group">
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-lg font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GlassCard hoverEffect={true} className="p-8 !rounded-[2rem] border-white/20 shadow-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-white/40 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/20'}`} 
                      placeholder="John Doe" 
                    />
                    {errors.name && <p className="text-red-500 text-xs pl-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white/40 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/20'}`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-xs pl-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-white/40 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/20'}`} 
                    placeholder="Project Inquiry" 
                  />
                  {errors.subject && <p className="text-red-500 text-xs pl-1">{errors.subject}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/40 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500/20'}`} 
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs pl-1">{errors.message}</p>}
                </div>
                <motion.button 
                  whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/40 cursor-default' 
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/25 hover:shadow-emerald-500/40'
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        Message Sent <Check size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        Send Message <Send size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex justify-center items-center">
          <p className="text-slate-500 text-sm">© 2025 Ankit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;