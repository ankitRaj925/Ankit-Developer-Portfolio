import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "LogicalLoops Inc.",
    period: "March 2024 – August 2024",
    description: "Developed secure crypto backend services with Spring Boot, JWT, and RBAC. Optimized MySQL schemas for 40% faster queries and reduced C-Pay gateway bugs by 60% through structured testing.",
    skills: ["Spring Boot", "Java", "MySQL", "Hibernate", "REST APIs", "JWT"]
  },
  {
    id: 2,
    role: "AI & Cloud Intern",
    company: "Edunet Foundation",
    period: "January 2024 – February 2024",
    description: "Built cloud-native apps and automation workflows. Prototyped AI solutions and deployed models while mastering cloud fundamentals in a remote agile environment.",
    skills: ["Cloud Computing", "AI/ML", "Automation", "Prototyping"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">My journey in the tech industry.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line - Dashed for a technical look */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px border-l-2 border-dashed border-emerald-500/30 dark:border-emerald-500/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-slate-900 shadow-[0_0_20px_rgba(16,185,129,0.6)] z-10 mt-6"></div>

                <div className="md:w-1/2"></div>
                
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <GlassCard 
                    hoverEffect={true}
                    className="p-8 relative group hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-900/20 transition-colors transition-shadow duration-300 !rounded-[2rem]"
                  >
                     {/* Connector Arrow for desktop */}
                     <div className={`hidden md:block absolute top-7 w-4 h-4 bg-white/40 dark:bg-white/5 border-t border-l border-slate-200 dark:border-white/10 rotate-45 transform backdrop-blur-md ${index % 2 === 0 ? '-right-2 border-r border-b border-t-0 border-l-0' : '-left-2'}`}></div>
                     
                    <div className="flex flex-col gap-1 mb-5">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-lg">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-base leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;