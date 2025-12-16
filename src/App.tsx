import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white min-h-screen selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-200 transition-colors duration-500">
      
      {/* Fixed Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
         {/* Light Mode Blobs (Subtler) */}
         <div className={`absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-1000`}>
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-200/40 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-200/40 rounded-full blur-[120px]"></div>
         </div>

         {/* Dark Mode Blobs (Vibrant) */}
         <div className={`absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000`}>
             <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-900/10 rounded-full blur-[150px] opacity-40"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[150px] opacity-40"></div>
             <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-cyan-900/10 rounded-full blur-[120px] opacity-30"></div>
         </div>
      </div>

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
    </div>
  );
};

export default App;