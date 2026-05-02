import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Marquee from "./ui/Marquee";

// Data & Translations
import { translations } from "../locales/translations";
import { skills, projects, marqueeWords1, marqueeWords2, marqueeWords3 } from "../data/constants";

const Aboutme = () => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "uz");
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" : true
  );

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const themeClass = darkMode ? "bg-[#020617] text-slate-300 selection:bg-blue-500/30" : "bg-slate-50 text-slate-800 selection:bg-blue-200";
  const textTitleClass = darkMode ? "text-white" : "text-slate-900";
  const cardClass = darkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm";

  return (
    <div className={`${themeClass} min-h-screen font-sans transition-colors duration-500 overflow-x-hidden relative`}>
      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[150px] ${darkMode ? 'bg-blue-900/20' : 'bg-blue-200/50'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[150px] ${darkMode ? 'bg-emerald-900/10' : 'bg-emerald-200/40'}`}></div>
      </div>

      <div className="relative z-10">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          lang={lang} 
          setLang={setLang} 
          t={t} 
        />

        <Hero t={t} darkMode={darkMode} />

        <Marquee direction="right" words={marqueeWords1} colorClass="text-blue-500" />

        <Skills 
          skills={skills} 
          t={t} 
          textTitleClass={textTitleClass} 
          cardClass={cardClass} 
          darkMode={darkMode} 
        />

        <Marquee direction="left" words={marqueeWords2} colorClass="text-emerald-500" />

        <Projects 
          projects={projects} 
          t={t} 
          textTitleClass={textTitleClass} 
          cardClass={cardClass} 
        />

        <Marquee direction="right" words={marqueeWords3} colorClass="text-blue-500" />

        <Contact 
          t={t} 
          textTitleClass={textTitleClass} 
          darkMode={darkMode} 
          cardClass={cardClass} 
        />

        <Footer t={t} />
      </div>
    </div>
  );
};

export default Aboutme;
