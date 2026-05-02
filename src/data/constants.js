const getIcon = (name) => `https://skillicons.dev/icons?i=${name}`;

export const skills = [
  { id: 1, name: "HTML", level: "90%", icon: getIcon("html"), dir: "left" },
  { id: 2, name: "JS", level: "90%", icon: getIcon("js"), dir: "top" },
  { id: 3, name: "React", level: "100%", icon: getIcon("react"), dir: "right" },
  { id: 4, name: "Tailwind", level: "80%", icon: getIcon("tailwind"), dir: "left" },
  { id: 5, name: "CSS", level: "90%", icon: getIcon("css"), dir: "bottom" },
  { id: 6, name: "Node JS", level: "85%", icon: getIcon("nodejs"), dir: "right" },
  { id: 7, name: "Express", level: "85%", icon: getIcon("express"), dir: "left" },
  { id: 8, name: "Next JS", level: "65%", icon: getIcon("nextjs"), dir: "bottom" },
  { id: 9, name: "Vue JS", level: "60%", icon: getIcon("vue"), dir: "right" },
  { id: 10, name: "TypeScript", level: "65%", icon: getIcon("ts"), dir: "left" },
  { id: 11, name: "MongoDB", level: "70%", icon: getIcon("mongodb"), dir: "top" },
  { id: 12, name: "PostgreSQL", level: "90%", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", dir: "right" },
  { id: 13, name: "PgAdmin", level: "85%", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", dir: "left" },
  { id: 14, name: "Swagger", level: "95%", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg", dir: "bottom" },
  { id: 15, name: "Windows", level: "100%", icon: getIcon("windows"), dir: "right" },
  { id: 16, name: "Vite", level: "90%", icon: getIcon("vite"), dir: "left" },
  { id: 17, name: "Redux", level: "90%", icon: getIcon("redux"), dir: "top" },
  { id: 18, name: "Postman", level: "80%", icon: getIcon("postman"), dir: "right" },
  { id: 19, name: "Git", level: "95%", icon: getIcon("git"), dir: "left" },
  { id: 20, name: "GitHub", level: "100%", icon: getIcon("github"), dir: "bottom" },
  { id: 21, name: "VS Code", level: "100%", icon: getIcon("vscode"), dir: "right" },
  { id: 22, name: "Figma", level: "80%", icon: getIcon("figma"), dir: "left" },
  { id: 23, name: "Notion", level: "60%", icon: getIcon("notion"), dir: "top" },
  { id: 24, name: "Ubuntu", level: "85%", icon: getIcon("ubuntu"), dir: "right" },
];

export const projects = [
  {
    id: 1,
    title: "Jobify.uz",
    desc: "Ish qidirish platformasi",
    link: "https://jobify.uz/home",
    featured: true,
    type: "website",
    tags: ["React", "Node", "PostgreSQL", "Tailwind"],
  },
  {
    id: 2,
    title: "Frontend Exam",
    desc: "Dizayn asosidagi imtihon loyihasi",
    link: "https://frontend-exam-wine.vercel.app/",
    type: "website",
    tags: ["Js", "React", "API"],
  },
  {
    id: 3,
    title: "React Exam",
    desc: "React bo'yicha imtihon ishi",
    link: "https://react-exam-lake.vercel.app/",
    type: "website",
    tags: ["React", "API"],
  },
  {
    id: 4,
    title: "Theme Revision",
    desc: "Mavzularni takrorlash loyihasi",
    link: "https://react-revesion-theme.vercel.app/",
    type: "website",
    tags: ["React"],
  },
  {
    id: 5,
    title: "JS Theme",
    desc: "JavaScript asosidagi mavzular",
    link: "https://java-script-theme.vercel.app/",
    type: "website",
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

export const marqueeWords1 = [
  "PostgreSQL Expert",
  "PgAdmin 4",
  "Swagger Documentation",
  "MERN Stack",
  "Frontend Architect",
];

export const marqueeWords2 = [
  "Clean Code",
  "API Security",
  "Database Schema",
  "UI/UX Design",
  "Pixel Perfect",
];

export const marqueeWords3 = [
  "Fullstack Specialist",
  "Software Engineer",
  "Modern Tech",
  "Namangan 2026",
];
