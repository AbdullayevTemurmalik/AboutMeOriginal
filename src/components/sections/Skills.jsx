import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skills, t, textTitleClass, cardClass, darkMode }) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-32 px-4 md:px-10 max-w-7xl mx-auto relative">
      <div className="text-center mb-20">
        <h3 className={`text-4xl sm:text-5xl md:text-6xl font-black ${textTitleClass} mb-4 uppercase tracking-tighter`}>
          {t.stackTitle}
        </h3>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={skill.id}
            whileHover={{ scale: 1.02, y: -4 }}
            className={`${cardClass} border ${darkMode ? "border-white/50" : "border-black/30"} p-6 rounded-[2rem] flex flex-col justify-center gap-4 hover:border-blue-500/80 transition-all duration-300 group backdrop-blur-md relative overflow-hidden`}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className={`w-12 h-12 flex items-center justify-center overflow-hidden bg-white/5 rounded-xl p-2 border ${darkMode ? 'border-white/30' : 'border-black/20'} group-hover:border-blue-500/50 transition-colors`}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">
                  <span className="group-hover:text-blue-400 transition-colors">{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div className={`w-full h-1.5 ${darkMode ? "bg-white/5" : "bg-black/5"} rounded-full overflow-hidden`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-full relative"
                  >
                    {/* Animated shine - Pure CSS, hardware-accelerated */}
                    <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

