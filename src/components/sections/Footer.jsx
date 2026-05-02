import React from "react";
import { motion } from "framer-motion";

const Footer = ({ t }) => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black text-2xl tracking-tighter opacity-50">
          TM<span className="text-blue-500">.dev</span>
        </div>
        <p className="text-[10px] font-mono tracking-[5px] uppercase text-slate-500">
          {t.footer}
        </p>
        <motion.button 
          whileHover={{ y: -5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-500/50 transition-colors"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
