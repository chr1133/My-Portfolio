"use client";

import { motion } from "framer-motion";
import type { Experience as ExperienceModel } from "@prisma/client";

export function ExperienceTimeline({ experience }: { experience: ExperienceModel[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors">
              <p className="text-xs text-accent font-semibold mb-1">
                {new Date(exp.startDate).getFullYear()} — {exp.endDate ? new Date(exp.endDate).getFullYear() : "Present"}
              </p>
              <h3 className="font-bold mb-1">{exp.role}</h3>
              <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}