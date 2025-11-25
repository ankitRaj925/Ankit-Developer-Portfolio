import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Cpu, Sun, Moon, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const navItems: (NavItem & { icon: React.ReactNode })[] = [
  { label: 'Home', href: '#home', icon: <Home size={20} /> },
  { label: 'About', href: '#about', icon: <User size={20} /> },
  { label: 'Projects', href: '#projects', icon: <Code size={20} /> },
  { label: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
  { label: 'Contact', href: '#contact', icon: <Mail size={20} /> },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      const current = navItems.find((item) => {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.href.substring(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      setActiveSection(targetId);
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <div className={`fixed top-6 left-0 right-0 z-50 flex ${isMobile ? 'justify-end px-6' : 'justify-center'} pointer-events-none`}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="pointer-events-auto relative z-50"
      >
        <div className={`
          flex items-center gap-1 
          backdrop-blur-3xl 
          border 
          shadow-lg
          transition-all duration-500
          ${isMobile 
            ? 'p-2 rounded-full aspect-square' 
            : 'px-3 py-2 rounded-full'
          }
          ${darkMode 
            ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]' 
            : 'bg-white/70 border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]'
          }
        `}>
          {/* Mobile Hamburger Button */}
          {isMobile ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`
                p-3 rounded-full transition-colors duration-300
                ${isOpen 
                   ? (darkMode ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-900') 
                   : (darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                }
              `}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          ) : (
            <>
              {/* Desktop Nav Items */}
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="relative rounded-full px-4 py-3 cursor-pointer select-none"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute inset-0 rounded-full border shadow-md transition-colors duration-500 ${
                          darkMode 
                            ? 'bg-white/10 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
                            : 'bg-white border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
                        }`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    <motion.div 
                      className="relative z-10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`
                        font-medium whitespace-nowrap text-lg transition-colors duration-300
                        ${isActive 
                          ? "text-emerald-600 dark:text-emerald-300 drop-shadow-sm" 
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }
                      `}>
                        {item.label}
                      </span>
                    </motion.div>
                  </a>
                );
              })}

              {/* Divider */}
              <div className={`w-[1px] h-6 mx-2 transition-colors duration-500 ${darkMode ? 'bg-white/10' : 'bg-slate-300'}`}></div>

              {/* Theme Toggle Button (Desktop) */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  p-3 rounded-full relative overflow-hidden transition-colors duration-500
                  ${darkMode 
                    ? 'bg-white/10 text-yellow-300 hover:bg-white/20' 
                    : 'bg-slate-200/50 text-slate-700 hover:bg-slate-200'
                  }
                `}
                aria-label="Toggle Theme"
              >
                 <AnimatePresence mode="wait" initial={false}>
                   <motion.div
                     key={darkMode ? "moon" : "sun"}
                     initial={{ y: -20, opacity: 0, rotate: -45 }}
                     animate={{ y: 0, opacity: 1, rotate: 0 }}
                     exit={{ y: 20, opacity: 0, rotate: 45 }}
                     transition={{ duration: 0.2 }}
                   >
                     {darkMode ? <Moon size={20} className="fill-current" /> : <Sun size={20} className="fill-current" />}
                   </motion.div>
                 </AnimatePresence>
              </motion.button>
            </>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="pointer-events-auto absolute top-full right-6 mt-4 w-[280px]"
          >
            <div className={`
              flex flex-col p-4 rounded-3xl border shadow-2xl overflow-hidden
              transition-colors duration-500
              ${darkMode 
                ? 'bg-[#020617] border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' 
                : 'bg-white border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.1)]'
              }
            `}>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                   const sectionId = item.href.substring(1);
                   const isActive = activeSection === sectionId;
                   return (
                      <motion.a 
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-300 group
                          ${isActive 
                             ? (darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600') 
                             : (darkMode ? 'text-slate-300 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')
                          }
                        `}
                      >
                        <div className={`
                          p-2 rounded-full transition-colors duration-300
                          ${isActive 
                            ? (darkMode ? 'bg-emerald-500/20' : 'bg-emerald-100') 
                            : (darkMode ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-100 group-hover:bg-slate-200')
                          }
                        `}>
                          {item.icon}
                        </div>
                        <span className="font-medium text-lg">{item.label}</span>
                        
                        {isActive && (
                          <motion.div 
                            layoutId="mobileActiveDot"
                            className="ml-auto w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                          />
                        )}
                      </motion.a>
                   )
                })}
              </div>

              {/* Mobile Theme Toggle - Bottom Right */}
              <div className="flex justify-end mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                 <motion.button
                   onClick={toggleTheme}
                   whileTap={{ scale: 0.9 }}
                   className={`
                     flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300
                     ${darkMode 
                       ? 'bg-white/10 text-yellow-300 border border-white/10' 
                       : 'bg-slate-100 text-slate-700 border border-slate-200'
                     }
                   `}
                 >
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    <div className="p-1 rounded-full bg-white/10">
                      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    </div>
                 </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;