import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Layout,
  Settings,
  Terminal,
  FileJson,
  Code2,
  Monitor,
  Globe,
} from "lucide-react"; // Ikonkalar uchun qo'shimcha yordam
import HeroImg from "../assets/Photo.avif";

// --- REKLAMA (MARQUEE) KOMPONENTI ---
const Marquee = ({ direction = "left", words, colorClass }) => {
  return (
    <div className="py-4 overflow-hidden flex whitespace-nowrap opacity-30 select-none pointer-events-none border-y border-white/5 bg-white/5">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 items-center"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-2xl md:text-3xl font-black uppercase tracking-tighter ${colorClass}`}
          >
            {word} •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// --- TRANSLATIONS ---
const translations = {
  uz: {
    about: "Men haqimda",
    skills: "Skilllar",
    projects: "Loyihalar",
    contact: "Aloqa",
    heroTitle: "TEMUR",
    heroTitleSub: "MALIK",
    heroDesc:
      "MERN & PostgreSQL mutaxassisi. 16 yoshda, Namanganlik Full-stack dasturchi. Frontend va Backend tizimlarini Pixel-Perfect darajasida qura olaman.",
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
      "MERN & PostgreSQL специалист. 16 лет, Full-stack разработчик из Намангана. Создаю Frontend и Backend системы на уровне Pixel-Perfect.",
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
      "MERN & PostgreSQL expert. 16-year-old Full-stack developer from Namangan. Building Frontend & Backend systems with Pixel-Perfect precision.",
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

// --- DATA (24 ta Skills) ---
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
  {
    id: 12,
    name: "PostgreSQL",
    level: "90%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    dir: "right",
  },
  {
    id: 13,
    name: "PgAdmin",
    level: "85%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    dir: "left",
  },
  {
    id: 14,
    name: "Swagger",
    level: "95%",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg",
    dir: "top",
  },
  {
    id: 15,
    name: "Windows",
    level: "100%",
    icon: getIcon("windows"),
    dir: "right",
  },
  { id: 16, name: "Vite", level: "90%", icon: getIcon("vite"), dir: "left" },
  { id: 17, name: "Redux", level: "90%", icon: getIcon("redux"), dir: "top" },
  {
    id: 18,
    name: "Postman",
    level: "80%",
    icon: getIcon("postman"),
    dir: "right",
  },
  { id: 19, name: "Git", level: "95%", icon: getIcon("git"), dir: "left" },
  {
    id: 20,
    name: "GitHub",
    level: "100%",
    icon: getIcon("github"),
    dir: "top",
  },
  {
    id: 21,
    name: "VS Code",
    level: "100%",
    icon: getIcon("vscode"),
    dir: "right",
  },
  { id: 22, name: "Figma", level: "80%", icon: getIcon("figma"), dir: "left" },
  { id: 23, name: "Notion", level: "60%", icon: getIcon("notion"), dir: "top" },
  {
    id: 24,
    name: "Ubuntu",
    level: "85%",
    icon: getIcon("ubuntu"),
    dir: "right",
  },
];

const projects = [
  {
    id: 1,
    title: "Jobify.uz",
    desc: "Ish qidirish platformasi",
    link: "https://jobify.uz/home",
    featured: true,
    tags: ["React", "Node", "PostgreSQL", "Tailwind"],
  },
  {
    id: 2,
    title: "Frontend Exam",
    desc: "Dizayn asosidagi imtihon loyihasi",
    link: "https://frontend-exam-wine.vercel.app/",
    tags: ["Js", "React", "API"],
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
    tags: ["NodeJS", "Express", "Swagger"],
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
    tags: ["FakeJson", "CRUD"],
  },
];

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
    <path d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2m-17.66 5.66 1.41-1.41m11.32-11.32 1.41-1.41" />
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
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "uz");
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true,
  );

  const t = translations[lang];
  const flags = { uz: "🇺🇿", ru: "🇷🇺", en: "🇺🇸" };

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const getVariants = (dir) => ({
    hidden: {
      opacity: 0,
      x: dir === "left" ? -100 : dir === "right" ? 100 : 0,
      y: dir === "top" ? -100 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  });

  const themeClass = darkMode
    ? "bg-[#020617] text-slate-300"
    : "bg-slate-50 text-slate-800";
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
      <nav
        className={`fixed top-0 w-full z-[100] ${navClass} backdrop-blur-md border-b px-4 md:px-10 py-4 flex justify-between items-center`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`cursor-pointer ${textTitleClass} font-black text-xl tracking-tighter`}
        >
          TM<span className="text-blue-500">.dev</span>
        </motion.div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all ${darkMode ? "border-white/10" : "border-black/10"}`}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="flex rounded-full p-1 border border-white/10">
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

      {/* HERO SECTION */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className={`text-6xl md:text-8xl font-black ${textTitleClass} mb-4 tracking-tighter uppercase leading-none`}
            >
              {t.heroTitle}
              <br />
              <span className="text-blue-500">{t.heroTitleSub}</span>
            </h2>
            <p className="text-base md:text-xl max-w-xl mt-6 font-light">
              {t.heroDesc}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`p-5 rounded-2xl ${cardClass} border-l-4 border-blue-500 hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="w-5 h-5 text-blue-500" />
                  <h4
                    className={`text-sm font-black uppercase ${textTitleClass}`}
                  >
                    Frontend Mastery
                  </h4>
                </div>
                <p className="text-xs text-slate-500">
                  React JS, Next JS va Vue JS orqali murakkab interfeyslarni
                  Pixel-Perfect darajasida quraman.
                </p>
              </div>
              <div
                className={`p-5 rounded-2xl ${cardClass} border-l-4 border-emerald-500 hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-emerald-500" />
                  <h4
                    className={`text-sm font-black uppercase ${textTitleClass}`}
                  >
                    Backend Mastery
                  </h4>
                </div>
                <p className="text-xs text-slate-500">
                  Node JS, Express va PostgreSQL yordamida Swagger bilan
                  hujjatlashtirilgan xavfsiz API tizimlari.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                {t.cvBtn}
              </a>
              <a
                href="#projects"
                className={`border ${darkMode ? "border-white/10 text-white" : "border-black/10 text-slate-800"} px-8 py-3 rounded-xl font-bold transition`}
              >
                {t.projBtn}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={HeroImg}
              alt="Hero"
              className="w-72 h-72 md:w-[450px] md:h-[450px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <Marquee
        direction="right"
        words={[
          "PostgreSQL Expert",
          "PgAdmin 4",
          "Swagger Documentation",
          "MERN Stack",
          "Frontend Architect",
        ]}
        colorClass="text-blue-500"
      />

      {/* SKILLS */}
      <section id="skills" className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3
            className={`text-3xl md:text-5xl font-black ${textTitleClass} mb-4 uppercase tracking-tighter underline decoration-blue-500 underline-offset-8`}
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
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://cdn-icons-png.flaticon.com/512/25/25231.png";
                  }} // Github ikonkasi zaxira sifatida
                />
              </div>
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
                    transition={{ duration: 5 }}
                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Marquee
        direction="left"
        words={[
          "Clean Code",
          "API Security",
          "Database Schema",
          "UI/UX Design",
          "Pixel Perfect",
        ]}
        colorClass="text-emerald-500"
      />

      {/* PROJECTS SECTION (Saqlangan) */}
      <section
        id="projects"
        className="py-24 px-4 md:px-10 max-w-7xl mx-auto border-t border-white/5"
      >
        <div
          className={`text-center mb-16 ${textTitleClass} font-black text-4xl uppercase tracking-tighter`}
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
                <span className="opacity-20 text-4xl font-black italic">
                  0{idx + 1}
                </span>
              </div>
              <h4
                className={`text-2xl font-black ${textTitleClass} mb-2 uppercase`}
              >
                {proj.title}
              </h4>
              <p className="text-slate-500 text-sm mb-6">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white text-xs font-bold bg-blue-600 px-6 py-2.5 rounded-full hover:bg-blue-700 transition uppercase tracking-widest"
              >
                {proj.type === "github" ? t.code : t.visit}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Marquee
        direction="right"
        words={[
          "Fullstack Specialist",
          "Software Engineer",
          "Modern Tech",
          "Namangan 2026",
        ]}
        colorClass="text-blue-500"
      />

      {/* CONTACT (Saqlangan) */}
      <section
        id="contact"
        className="py-24 px-4 md:px-10 max-w-5xl mx-auto border-t border-white/5"
      >
        <div
          className={`text-center mb-16 ${textTitleClass} font-black text-4xl uppercase tracking-tighter`}
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

      <footer className="py-16 text-center border-t border-white/5 text-[10px] font-mono tracking-[10px] uppercase">
        {t.footer}
      </footer>
    </div>
  );
};

const ContactCard = ({ href, label, val, color, darkMode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`${darkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm"} p-6 rounded-3xl transition-all border ${color}`}
  >
    <div
      className={`${darkMode ? "text-white" : "text-slate-900"} mb-2 uppercase tracking-widest`}
    >
      {label}
    </div>
    <div className="text-slate-500 font-mono text-[10px]">{val}</div>
  </a>
);

export default Aboutme;
