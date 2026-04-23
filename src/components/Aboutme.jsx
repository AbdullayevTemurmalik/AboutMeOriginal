import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from "../assets/Photo.avif";

// --- 1. TRANSLATIONS (i18n) ---
const translations = {
  uz: {
    about: "Men haqimda",
    skills: "Skilllar",
    projects: "Loyihalar",
    contact: "Aloqa",
    heroTitle: "TEMUR",
    heroTitleSub: "MALIK",
    heroDesc:
      "Full-Stack Developer. 16 yoshda. Namanganlik MERN mutaxassisi. Clean Code va Pixel-Perfect dizayn ustasi.",
    contactTitle: "Men bilan bog'laning",
    contactDesc: "Loyihalar yoki hamkorlik uchun doim ochiqman.",
    footer: "Namangan / 2026 / Abdullayev",
    cvBtn: "Bog'lanish",
    projBtn: "Loyihalarni ko'rish",
    stackTitle: "Skills & Stack",
    projTitle: "Mening Loyihalarim",
    visit: "Saytga o'tish",
    code: "Kodini ko'rish",
  },
  ru: {
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
    heroTitle: "ТЕМУР",
    heroTitleSub: "МАЛИК",
    heroDesc:
      "Full-Stack разработчик. 16 лет. MERN специалист из Намангана. Мастер Clean Code и Pixel-Perfect дизайна.",
    contactTitle: "Свяжитесь со мной",
    contactDesc: "Я всегда открыт для проектов или сотрудничества.",
    footer: "Наманган / 2026 / Абдуллаев",
    cvBtn: "Связаться",
    projBtn: "Посмотреть проекты",
    stackTitle: "Навыки и Стек",
    projTitle: "Мои Проекты",
    visit: "Перейти",
    code: "Код",
  },
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    heroTitle: "TEMUR",
    heroTitleSub: "MALIK",
    heroDesc:
      "Full-Stack Developer. 16 years old. MERN expert from Namangan. Clean Code and Pixel-Perfect design master.",
    contactTitle: "Contact Me",
    contactDesc: "I am always open for projects or collaborations.",
    footer: "Namangan / 2026 / Abdullayev",
    cvBtn: "Contact",
    projBtn: "View Projects",
    stackTitle: "Skills & Stack",
    projTitle: "My Projects",
    visit: "Live Demo",
    code: "View Code",
  },
};

// --- 2. DATA (Skills & Projects) ---
const getIcon = (name) => `https://skillicons.dev/icons?i=${name}`;
const skills = [
  { id: 1, name: "HTML", level: "90%", icon: getIcon("html"), dir: "left" },
  { id: 2, name: "JS", level: "90%", icon: getIcon("js"), dir: "top" },
  { id: 3, name: "React", level: "100%", icon: getIcon("react"), dir: "right" },
  {
    id: 4,
    name: "Tailwind",
    level: "80%",
    icon: getIcon("tailwind"),
    dir: "left",
  },
  { id: 5, name: "CSS", level: "90%", icon: getIcon("css"), dir: "top" },
  {
    id: 6,
    name: "Node JS",
    level: "85%",
    icon: getIcon("nodejs"),
    dir: "right",
  },
  {
    id: 7,
    name: "Express",
    level: "85%",
    icon: getIcon("express"),
    dir: "left",
  },
  { id: 8, name: "Next JS", level: "65%", icon: getIcon("nextjs"), dir: "top" },
  { id: 9, name: "Vue JS", level: "60%", icon: getIcon("vue"), dir: "right" },
  {
    id: 10,
    name: "TypeScript",
    level: "65%",
    icon: getIcon("ts"),
    dir: "left",
  },
  {
    id: 11,
    name: "MongoDB",
    level: "70%",
    icon: getIcon("mongodb"),
    dir: "top",
  },
  { id: 12, name: "Vite", level: "90%", icon: getIcon("vite"), dir: "right" },
  { id: 13, name: "Redux", level: "90%", icon: getIcon("redux"), dir: "left" },
  {
    id: 14,
    name: "Postman",
    level: "80%",
    icon: getIcon("postman"),
    dir: "top",
  },
  {
    id: 15,
    name: "Notion",
    level: "60%",
    icon: getIcon("notion"),
    dir: "right",
  },
  {
    id: 16,
    name: "LinkedIn",
    level: "70%",
    icon: getIcon("linkedin"),
    dir: "left",
  },
  { id: 17, name: "Git", level: "95%", icon: getIcon("git"), dir: "top" },
  {
    id: 18,
    name: "GitHub",
    level: "100%",
    icon: getIcon("github"),
    dir: "right",
  },
  {
    id: 19,
    name: "VS Code",
    level: "100%",
    icon: getIcon("vscode"),
    dir: "left",
  },
  { id: 20, name: "Figma", level: "80%", icon: getIcon("figma"), dir: "top" },
];

const projects = [
  {
    id: 1,
    title: "Jobify.uz",
    desc: "Ish qidirish platformasi",
    link: "https://jobify.uz/home",
    featured: true,
    tags: ["React", "Node", "MongoDB"],
  },
  {
    id: 2,
    title: "Frontend Exam",
    desc: "Dizayn asosidagi imtihon loyihasi",
    link: "https://frontend-exam-wine.vercel.app/",
    tags: ["Tailwind", "HTML"],
  },
  {
    id: 3,
    title: "React Exam",
    desc: "React bo'yicha imtihon ishi",
    link: "https://react-exam-lake.vercel.app/",
    tags: ["React", "API"],
  },
  {
    id: 4,
    title: "Theme Revision",
    desc: "Mavzularni takrorlash loyihasi",
    link: "https://react-revesion-theme.vercel.app/",
    tags: ["React"],
  },
  {
    id: 5,
    title: "JS Theme",
    desc: "JavaScript asosidagi mavzular",
    link: "https://java-script-theme.vercel.app/",
    tags: ["JS", "DOM"],
  },
  {
    id: 6,
    title: "BackendDev Repo",
    desc: "Backend tizimlar uchun repositoriya",
    link: "https://github.com/AbdullayevTemurmalik/BackendDev",
    type: "github",
    tags: ["NodeJS", "Express"],
  },
  {
    id: 7,
    title: "Full-Stack Project",
    desc: "MERN stack to'liq loyihasi",
    link: "https://github.com/AbdullayevTemurmalik/Full-Stack-Project",
    type: "github",
    tags: ["Fullstack"],
  },
  {
    id: 8,
    title: "CRUD System",
    desc: "Ma'lumotlar bilan ishlash tizimi",
    link: "https://github.com/AbdullayevTemurmalik/CRUD",
    type: "github",
    tags: ["MongoDB", "CRUD"],
  },
];

// --- 3. ICONS ---
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const CodewarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.37 3.03l-7.79 7.79c-1.33-1.33-3.48-1.33-4.81 0-1.33 1.33-1.33 3.48 0 4.81 1.33 1.33 3.48 1.33 4.81 0l7.79-7.79c3.04 3.04 3.04 7.97 0 11.01-3.04 3.04-7.97 3.04-11.01 0-3.04-3.04-3.04-7.97 0-11.01 3.04-3.04 7.97-3.04 11.01 0-3.04-3.04-3.04-7.97 0-11.01 3.04-3.04 7.97-3.04 11.01 0z" />
  </svg>
);
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-400"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-400"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const Aboutme = () => {
  const [lang, setLang] = useState("uz");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const t = translations[lang];
  const flags = { uz: "🇺🇿", ru: "🇷🇺", en: "🇺🇸" };

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const getVariants = (dir) => ({
    hidden: {
      opacity: 0,
      x: dir === "left" ? -100 : dir === "right" ? 100 : 0,
      y: dir === "top" ? -100 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  });

  // Rejimga qarab rang klasslari
  const themeClass = darkMode
    ? "bg-[#020617] text-slate-300 selection:bg-blue-500/30"
    : "bg-slate-50 text-slate-800 selection:bg-blue-200";
  const navClass = darkMode
    ? "bg-[#020617]/90 border-white/5"
    : "bg-white/90 border-black/5";
  const textTitleClass = darkMode ? "text-white" : "text-slate-900";
  const cardClass = darkMode
    ? "bg-white/[0.02] border-white/5"
    : "bg-white border-black/5 shadow-sm";

  return (
    <div
      className={`${themeClass} min-h-screen font-sans transition-colors duration-500 overflow-x-hidden`}
    >
      {/* --- HEADER --- */}
      <nav
        className={`fixed top-0 w-full z-[100] ${navClass} backdrop-blur-md border-b px-4 md:px-10 py-4 flex justify-between items-center transition-colors duration-500`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`cursor-pointer ${textTitleClass} font-black text-xl tracking-tighter transition-colors`}
        >
          TM<span className="text-blue-500">.dev</span>
        </motion.div>

        <div
          className={`hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[2px] ${darkMode ? "text-slate-300" : "text-slate-600"}`}
        >
          <a href="#about" className="hover:text-blue-500 transition">
            {t.about}
          </a>
          <a href="#skills" className="hover:text-blue-500 transition">
            {t.skills}
          </a>
          <a href="#projects" className="hover:text-blue-500 transition">
            {t.projects}
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            {t.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Rejimni o'zgartirgich */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all ${darkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/5"}`}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          <div
            className={`flex rounded-full p-1 border ${darkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}
          >
            {["uz", "ru", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-full text-xs transition-all ${lang === l ? "bg-blue-600 text-white" : "hover:bg-white/10"}`}
              >
                {flags[l]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <h2
              className={`text-6xl md:text-8xl font-black ${textTitleClass} mb-4 tracking-tighter uppercase leading-none transition-colors`}
            >
              {t.heroTitle}
              <br />
              <span className="text-blue-500">{t.heroTitleSub}</span>
            </h2>
            <p
              className={`${darkMode ? "text-slate-400" : "text-slate-600"} text-base md:text-xl max-w-xl mt-6 font-light transition-colors`}
            >
              {t.heroDesc}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                {t.cvBtn}
              </a>
              <a
                href="#projects"
                className={`border ${darkMode ? "border-white/10 text-white hover:bg-white/5" : "border-black/10 text-slate-800 hover:bg-black/5"} px-8 py-3 rounded-xl font-bold transition`}
              >
                {t.projBtn}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={HeroImg}
              alt="Hero"
              className={`w-72 h-72 md:w-[450px] md:h-[450px] object-cover rounded-3xl border ${darkMode ? "border-white/10" : "border-black/10"} shadow-2xl transition-colors`}
            />
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3
            className={`text-3xl md:text-5xl font-black ${textTitleClass} mb-4 uppercase tracking-tighter underline decoration-blue-500 underline-offset-8 transition-colors`}
          >
            {t.stackTitle}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={getVariants(skill.dir)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className={`${cardClass} p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-all group backdrop-blur-sm`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 group-hover:rotate-12 transition-all duration-500"
              />
              <div className="flex-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5 uppercase">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div
                  className={`w-full h-1 ${darkMode ? "bg-white/5" : "bg-black/5"} rounded-full overflow-hidden`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className={`py-24 px-4 md:px-10 max-w-7xl mx-auto border-t ${darkMode ? "border-white/5" : "border-black/5"}`}
      >
        <div
          className={`text-center mb-16 ${textTitleClass} font-black text-4xl uppercase tracking-tighter transition-colors`}
        >
          {t.projTitle}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${cardClass} p-6 rounded-[2rem] hover:opacity-90 transition-all group ${proj.featured ? "md:col-span-2 lg:col-span-2 border-blue-500/20" : ""}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 font-mono text-[10px]">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`${darkMode ? "text-white/20" : "text-black/10"} text-4xl font-black italic`}
                >
                  0{idx + 1}
                </span>
              </div>
              <h4
                className={`text-2xl font-black ${textTitleClass} mb-2 uppercase transition-colors`}
              >
                {proj.title}
              </h4>
              <p className="text-slate-500 text-sm mb-6">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-white text-xs font-bold bg-blue-600 px-6 py-2.5 rounded-full hover:bg-blue-700 transition uppercase tracking-widest"
              >
                {proj.type === "github" ? t.code : t.visit}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className={`py-24 px-4 md:px-10 max-w-5xl mx-auto border-t ${darkMode ? "border-white/5" : "border-black/5"}`}
      >
        <div
          className={`text-center mb-16 ${textTitleClass} font-black text-4xl uppercase tracking-tighter transition-colors`}
        >
          {t.contactTitle}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-xs font-bold">
          <ContactCard
            href="https://t.me/Temur_Backend_Developer"
            label="Telegram"
            val="@Temur_Backend"
            color="hover:border-blue-500"
            darkMode={darkMode}
          />
          <ContactCard
            href="https://instagram.com/temur.s1"
            label="Instagram"
            val="@temur.s1"
            color="hover:border-pink-500"
            darkMode={darkMode}
          />
          <ContactCard
            href="tel:+998906967999"
            label="Phone"
            val="+998 90 696 79 99"
            color="hover:border-green-500"
            darkMode={darkMode}
          />
          <ContactCard
            href="mailto:tmaq77@gmail.com"
            label="Email"
            val="tmaq77@gmail.com"
            color="hover:border-red-500"
            darkMode={darkMode}
          />
        </div>
      </section>

      <footer
        className={`py-16 text-center border-t ${darkMode ? "border-white/5 text-white" : "border-black/5 text-slate-800"} text-[10px] font-mono tracking-[10px] uppercase transition-colors`}
      >
        {t.footer}
      </footer>
    </div>
  );
};

const ContactCard = ({ href, label, val, color, darkMode }) => (
  <a
    href={href}
    target="_blank"
    className={`${darkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm"} p-6 rounded-3xl transition-all border ${color}`}
  >
    <div
      className={`${darkMode ? "text-white" : "text-slate-900"} mb-2 uppercase tracking-widest transition-colors`}
    >
      {label}
    </div>
    <div className="text-slate-500 font-mono text-[10px]">{val}</div>
  </a>
);

export default Aboutme;
