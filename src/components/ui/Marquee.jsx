import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ direction = "left", words, colorClass }) => {
  return (
    <div className="py-4 overflow-hidden flex whitespace-nowrap opacity-30 select-none pointer-events-none border-y border-white/5 bg-white/5">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 items-center"
      >
        {[...words, ...words, ...words, ...words, ...words, ...words].map((word, i) => (
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

export default Marquee;
