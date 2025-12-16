import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const techLogos: { [key: string]: string } = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/default",
  "Chart.js": "https://www.chartjs.org/img/chartjs-logo.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Quick Bite",
    description: "A full-stack food ordering platform offering seamless menu browsing, cart management, and order placement. Built for speed and reliability.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/screenshots/quickbite-home.png",
    link: "https://quick-bite-frontend-z2lr.onrender.com/",
    github: "https://github.com/ankitRaj925/Quick_Bite"
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with interactive charts and market data analysis.",
    tags: ["React", "Redux", "Tailwind", "Vite"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://crypto-rho-seven.vercel.app/",
    github: "https://github.com/ankitRaj925/Crypto_Dashboard"
  },
  {
    id: 3,
    title: "Atmos AQI",
    description: "Environmental monitoring tool providing real-time Air Quality Index (AQI) data and weather insights.",
    tags: ["React", "Vite", "Tailwind"],
    image: "/screenshots/air-quality-index-scale.jpg",
    link: "https://atmosaqi.vercel.app/",
    github: "https://github.com/ankitRaj925/Atmos-AQI"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A sleek weather forecasting application delivering accurate climate data and forecasts based on location.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "",
    github: "https://github.com/ankitRaj925/weather-app"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="absolute left-0 bottom-1/4 w-full h-96 bg-gradient-to-t from-emerald-100/40 dark:from-emerald-900/10 to-transparent -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">A selection of my recent work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <GlassCard
                hoverEffect={true}
                className="!rounded-[2rem] group overflow-hidden relative h-full flex flex-col hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-900/20 transition-colors transition-shadow duration-300"
              >
                {/* 🔽 ONLY CHANGE IS HERE */}
                <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-4 right-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-[-10px] group-hover:translate-y-0 duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/10 dark:bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 hover:text-white border border-white/10 transition-all shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/10 dark:bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-teal-500 hover:text-white border border-white/10 transition-all shadow-lg"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <div key={tag} title={tag}>
                          <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center p-2 hover:scale-110 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all shadow-sm">
                            <img
                              src={techLogos[tag] || ""}
                              alt={tag}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/ankitRaj925?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-700 dark:text-white border border-slate-300 dark:border-white/20 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 group"
          >
            <span>View More Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
