"use client";

import { motion } from "framer-motion";

export function FooterIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.6 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <circle cx="32" cy="32" r="30" fill="currentColor" className="text-muted/40" />
      <path
        d="M20 34c2-6 8-10 12-10s10 4 12 10-4 8-12 8-14-2-12-8z"
        fill="currentColor"
        className="text-primary"
      />
    </motion.svg>
  );
}