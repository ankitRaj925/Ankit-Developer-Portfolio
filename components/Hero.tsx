import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Terminal, FileDown, Code2, Server } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-40">
      
      {/* Background Grid - Adaptive */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Floating Coding Symbols for ambience */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 left-[10%] text-emerald-900/20 dark:text-emerald-500/10 hidden lg:block"
      >
        <Code2 size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/3 right-[10%] text-teal-900/20 dark:text-teal-500/10 hidden lg:block"
      >
        <Server size={120} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Main Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="overflow-hidden">
               <motion.h2 
                 initial={{ y: 50 }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-lg md:text-xl tracking-widest uppercase mb-8 font-semibold"
               >
                 <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                 Hi, I am Ankit
               </motion.h2>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Scalable Software
              </span>
            </h1>
            
            {/* Typewriter - Updated to Code. Create. Deploy. Improve. */}
            <div className="text-xl md:text-3xl font-light text-slate-600 dark:text-slate-300 h-12 flex items-center justify-center gap-3 transition-colors duration-500">
              <Terminal size={28} className="text-emerald-600 dark:text-emerald-500" />
              <TypeAnimation
                sequence={[
                  'Code. Create. Deploy. Improve.',
                  2000,
                  'With Clean Code & Creative Thinking',
                  2000,
                  'Building Robust Solutions',
                  2000,
                  'Full Stack Engineering',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="font-mono font-medium text-slate-800 dark:text-slate-200"
                repeat={Infinity}
              />
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed pt-4 transition-colors duration-500 font-light">
              Designing with <span className="font-medium text-slate-900 dark:text-white">clean code</span> and <span className="font-medium text-slate-900 dark:text-white">creative thinking</span>. I turn complex logic into elegant, high-performance applications that work at scale.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-12 pb-16">
              <motion.a 
                href="https://drive.google.com/file/d/1desTWt58TprHlq982sn3g6XhMzW8h5Gr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300
                  border border-slate-300 dark:border-white/10
                  text-slate-700 dark:text-white
                  hover:text-white dark:hover:text-white
                  hover:border-emerald-500 dark:hover:border-emerald-400
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
                  glass-panel backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FileDown size={20} /> Download Resume
                </span>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/ankitraj-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300
                  border border-slate-300 dark:border-white/10
                  text-slate-700 dark:text-white
                  hover:text-white dark:hover:text-white
                  hover:border-emerald-500 dark:hover:border-emerald-400
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
                  glass-panel backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Linkedin size={20} /> Let's Connect
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;