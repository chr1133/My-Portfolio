"use client";

import { motion } from "framer-motion";

export function TextReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      style={{ transform: "translateZ(0)" }}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}