import React from "react";
import { motion } from "framer-motion";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2m-17.66 5.66 1.41-1.41m11.32-11.32 1.41-1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const Navbar = ({ darkMode, setDarkMode, lang, setLang, t }) => {
  const flags = { uz: "🇺🇿", ru: "🇷🇺", en: "🇺🇸" };

  return (
    <nav className={`fixed top-0 w-full z-[100] ${darkMode ? "bg-[#020617]/80 border-white/5" : "bg-white/80 border-black/5"} backdrop-blur-xl border-b px-4 md:px-10 py-4 flex justify-between items-center transition-colors duration-300`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`cursor-pointer ${darkMode ? "text-white" : "text-slate-900"} font-black text-2xl tracking-tighter`}
      >
        TM<span className="text-blue-500">.dev</span>
      </motion.div>

      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
        <a href="#about" className={`${darkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-600"} transition-colors`}>{t.about}</a>
        <a href="#skills" className={`${darkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-600"} transition-colors`}>{t.skills}</a>
        <a href="#projects" className={`${darkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-600"} transition-colors`}>{t.projects}</a>
        <a href="#contact" className={`${darkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-600"} transition-colors`}>{t.contact}</a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2.5 rounded-full border transition-all hover:scale-110 ${darkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/5"}`}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <div className={`flex rounded-full p-1 border ${darkMode ? "border-white/10" : "border-black/10"}`}>
          {["uz", "ru", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all ${lang === l ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "hover:bg-slate-500/10"}`}
            >
              {flags[l]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
