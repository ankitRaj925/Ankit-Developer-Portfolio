import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { GraduationCap, Trophy, Github, Award, CheckCircle2, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-4">
             <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto mb-4"></div>
             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 pb-2">
               About Me
             </h2>
          </div>

          <GlassCard 
            hoverEffect={true}
            className="!rounded-[3rem] p-8 md:p-12 text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 mt-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 backdrop-blur-2xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10"
          >
            <p className="text-lg">
              I’m a <span className="text-slate-900 dark:text-white font-semibold">Software Developer</span> and CS graduate from <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Guru Ghasidas Vishwavidyalaya Bilaspur</span>, passionate about building scalable full-stack applications. With strong foundations in <span className="italic text-slate-800 dark:text-slate-200">Java, Python, and DSA</span>, I bridge the gap between clean frontend experiences and robust backend architectures.
            </p>
            <p>
              I thrive on competitive programming, having solved <span className="text-teal-600 dark:text-teal-400 font-bold">1000+ problems</span> across various platforms. My goal is to design efficient solutions and turn complex ideas into production-ready code using modern AI tools and cloud technologies.
            </p>
            
            {/* Coding Profiles */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 pb-2">
              <a href="https://leetcode.com/u/ankitraj00747/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                 <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                    <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" className="w-8 h-8" />
                 </div>
                 <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">LeetCode</span>
              </a>
              <a href="https://www.geeksforgeeks.org/user/ankit_raj/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                 <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-green-500/50 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <img src="https://cdn.simpleicons.org/geeksforgeeks/2F8D46" alt="GFG" className="w-8 h-8" />
                 </div>
                 <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">GFG</span>
              </a>
              <a href="https://codeforces.com/profile/doctor101" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                 <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <img src="https://cdn.simpleicons.org/codeforces/1F8ACB" alt="Codeforces" className="w-8 h-8" />
                 </div>
                 <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Codeforces</span>
              </a>
               <a href="https://github.com/ankitRaj925" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                 <div className="w-14 h-14 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-slate-500/50 group-hover:shadow-[0_0_15px_rgba(100,116,139,0.3)]">
                    <Github className="w-8 h-8 text-slate-700 dark:text-white" />
                 </div>
                 <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">GitHub</span>
              </a>
            </div>

            {/* Education & CP Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-10 pt-10 border-t border-slate-200 dark:border-white/10">
              {/* Education */}
              <div className="flex items-start gap-5 p-4 rounded-3xl hover:bg-emerald-500/5 transition-colors duration-300">
                <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shadow-sm">
                  <GraduationCap size={28} />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Education</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">B.Tech in Computer Science</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Guru Ghasidas Vishwavidyalaya (GGU)</p>
                </div>
              </div>

              {/* Competitive Programming */}
              <div className="flex items-start gap-5 p-4 rounded-3xl hover:bg-teal-500/5 transition-colors duration-300">
                <div className="p-4 rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 shadow-sm">
                  <Trophy size={28} />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">CP Achievement</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">Codeforces Specialist</p>
                  {/* <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold mt-0.5">1000+ DSA Problems Solved</p> */}
                </div>
              </div>
            </div>

            {/* Certifications & Honors Section */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
               <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-left flex items-center gap-3">
                  <Award className="text-emerald-500" size={24} />
                  <span>Certifications & Honors</span>
               </h3>
               
               <div className="grid md:grid-cols-2 gap-4">
                  {/* Oracle Gen AI */}
                  <a 
                    href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=B01C9CA90D2FEB9BE6C6365C80D1A7326EB67CB5E48ACAC6A812693B3A28322D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 flex items-start gap-4 text-left"
                  >
                     <div className="mt-1 p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <CheckCircle2 size={16} />
                     </div>
                     <div>
                        <h5 className="font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm md:text-base">
                           OCI Generative AI Professional 2025
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Oracle (1Z0-1127-25)</p>
                     </div>
                     <ExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Oracle AI Foundations */}
                  <a 
                    href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=97EB7B7A30900D42ABD1EEED98B202DC02F51CD9157B8E333E8A84516CF11A6B" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 flex items-start gap-4 text-left"
                  >
                     <div className="mt-1 p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <CheckCircle2 size={16} />
                     </div>
                     <div>
                        <h5 className="font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm md:text-base">
                           OCI AI Foundations Associate 2025
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Oracle (1Z0-1122-25)</p>
                     </div>
                     <ExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* TCS ION */}
                  <a 
                    href="https://drive.google.com/file/d/1Tes_SOXem2VdXxiD5PxGEwRHT6CR_-lc/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 flex items-start gap-4 text-left"
                  >
                     <div className="mt-1 p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <CheckCircle2 size={16} />
                     </div>
                     <div>
                        <h5 className="font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm md:text-base">
                           TCS ION Young Career Edge
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">15-day Career Proficiency Course</p>
                     </div>
                     <ExternalLink size={14} className="ml-auto text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* SIH Hackathon */}
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 flex items-start gap-4 text-left">
                     <div className="mt-1 p-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 shrink-0">
                        <Trophy size={16} />
                     </div>
                     <div>
                        <h5 className="font-bold text-slate-800 dark:text-white text-sm md:text-base">
                           Smart India Hackathon 2023
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Team Leader (Team of 5)</p>
                     </div>
                  </div>
               </div>
            </div>

          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;