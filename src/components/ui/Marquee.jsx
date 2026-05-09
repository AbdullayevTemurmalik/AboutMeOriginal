import React from "react";

const Marquee = ({ direction = "left", words, colorClass }) => {
  const marqueeClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="py-4 overflow-hidden flex whitespace-nowrap opacity-30 select-none pointer-events-none border-y border-white/5 bg-white/5">
      <div className={`${marqueeClass} flex gap-8 items-center`}>
        {[...words, ...words, ...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-2xl md:text-3xl font-black uppercase tracking-tighter ${colorClass}`}
          >
            {word} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

