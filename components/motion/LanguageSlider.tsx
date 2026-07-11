"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const languages = ["JavaScript", "TypeScript", "Python", "Dart", "C / C++", "SQL"];

export function LanguageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % languages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-7 overflow-hidden flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={languages[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-accent font-medium"
        >
          {languages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}