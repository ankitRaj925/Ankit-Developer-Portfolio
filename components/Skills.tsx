import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/default" },
      { name: "Tailwind", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Redux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/default" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Apache Kafka", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
    ]
  },
  {
    category: "Database & Storage",
    items: [
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Hibernate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
      { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Maven", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
      { name: "Gradle", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg" },
      { name: "Jenkins", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative scroll-mt-20">
       {/* Decorative gradient blob */}
       <div className="absolute right-0 top-1/3 w-96 h-96 bg-teal-200/40 dark:bg-teal-900/20 rounded-full blur-3xl -z-10"></div>
       <div className="absolute left-0 bottom-1/3 w-72 h-72 bg-emerald-200/40 dark:bg-emerald-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Technical Skills
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">My coding arsenal and tools I use daily.</p>
        </motion.div>

        {/* 4 Cards Layout: grid-cols-1 md:grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <GlassCard 
                hoverEffect={true} 
                className="!rounded-[2.5rem] p-8 h-full flex flex-col items-center hover:border-emerald-500/40 transition-colors duration-500 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  {group.category}
                </h3>
                
                {/* Horizontal layout for icons (side by side, wrapped) */}
                <div className="flex flex-wrap gap-6 justify-center">
                  {group.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (groupIndex * 0.1) + (index * 0.05) }}
                      className="group relative"
                      title={skill.name} // Shows name on native browser hover
                    >
                      {/* Round Logo Container */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="w-16 h-16 rounded-full bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 flex items-center justify-center p-3.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/80 dark:group-hover:bg-white/10 group-hover:border-emerald-500/40 shadow-lg cursor-pointer">
                          <img 
                            src={skill.iconUrl} 
                            alt={skill.name} 
                            className="w-full h-full object-contain filter drop-shadow-sm dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:drop-shadow-md transition-all" 
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;