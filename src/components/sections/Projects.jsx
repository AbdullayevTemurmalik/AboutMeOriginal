import React from "react";
import { motion } from "framer-motion";

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Projects = ({ projects, t, textTitleClass, cardClass }) => {
  return (
    <section id="projects" className="py-32 px-4 md:px-10 max-w-7xl mx-auto relative border-t border-white/5">
      <div className="text-center mb-20">
        <h3 className={`text-4xl sm:text-5xl md:text-6xl font-black ${textTitleClass} mb-4 uppercase tracking-tighter`}>
          {t.projTitle}
        </h3>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className={`${cardClass} p-8 rounded-[2.5rem] transition-all group backdrop-blur-md flex flex-col justify-between ${
              proj.featured ? "md:col-span-2 lg:col-span-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent" : "hover:border-blue-500/30"
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="opacity-10 text-6xl font-black italic group-hover:text-blue-500 group-hover:opacity-20 transition-all">
                  0{idx + 1}
                </span>
              </div>
              
              <h4 className={`text-3xl font-black ${textTitleClass} mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors`}>
                {proj.title}
              </h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {proj.desc}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-white text-xs font-bold bg-blue-600 px-6 py-3.5 rounded-2xl hover:bg-blue-700 transition uppercase tracking-widest shadow-lg shadow-blue-500/20 group/btn"
              >
                {proj.type === "github" ? (
                  <>
                    <GithubIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    {t.code}
                  </>
                ) : (
                  <>
                    <EyeIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    {t.visit}
                  </>
                )}
              </a>
              {proj.type === "website" && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
