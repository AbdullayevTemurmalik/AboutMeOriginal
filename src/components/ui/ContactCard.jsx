import React from "react";
import { motion } from "framer-motion";

const ContactCard = ({ href, label, val, color, darkMode }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.02 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`${darkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm"} p-8 rounded-[2rem] transition-all border hover:bg-white/5 relative overflow-hidden group ${color}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className={`relative z-10 ${darkMode ? "text-white" : "text-slate-900"} mb-3 font-black text-xl uppercase tracking-widest`}>
      {label}
    </div>
    <div className="relative z-10 text-slate-400 font-mono text-xs group-hover:text-white transition-colors">{val}</div>
  </motion.a>
);

export default ContactCard;
