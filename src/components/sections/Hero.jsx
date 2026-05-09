import React from "react";
import { motion } from "framer-motion";
import { Database, Layout } from "lucide-react";
import HeroImg from "../../assets/AboutImg.jpg";

const Hero = ({ t, darkMode }) => {
  const textTitleClass = darkMode ? "text-white" : "text-slate-900";
  const cardClass = darkMode
    ? "bg-white/[0.02] border-white/5"
    : "bg-white border-black/5 shadow-sm";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            className={`text-5xl sm:text-6xl md:text-8xl font-black ${textTitleClass} mb-4 tracking-tighter uppercase leading-[0.9]`}
          >
            {t.heroTitle}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              {t.heroTitleSub}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-xl mt-6 font-light text-slate-500 leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-3xl ${cardClass} border-l-4 border-blue-500 backdrop-blur-sm transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Layout className="w-5 h-5 text-blue-500" />
                </div>
                <h4
                  className={`text-sm font-black uppercase tracking-widest ${textTitleClass}`}
                >
                  {t.frontendMastery}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.frontendDesc}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-3xl ${cardClass} border-l-4 border-emerald-500 backdrop-blur-sm transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Database className="w-5 h-5 text-emerald-500" />
                </div>
                <h4
                  className={`text-sm font-black uppercase tracking-widest ${textTitleClass}`}
                >
                  {t.backendMastery}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.backendDesc}
              </p>
            </motion.div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl shadow-blue-500/25 uppercase tracking-widest text-sm flex items-center gap-2"
            >
              {t.cvBtn}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className={`border ${darkMode ? "border-white/10 text-white hover:bg-white/5" : "border-black/10 text-slate-800 hover:bg-black/5"} px-8 py-4 rounded-2xl font-bold transition uppercase tracking-widest text-sm`}
            >
              {t.projBtn}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-[3rem] blur-3xl transform -rotate-6"></div>
          <img
            src={HeroImg}
            alt="Hero"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-cover rounded-[3rem] border-2 border-white/10 shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
