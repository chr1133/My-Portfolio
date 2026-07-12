"use client";

import { Badge } from "@/components/ui/badge";
import { useGsapStagger } from "@/hooks/useGsapReveal";
import type { Skill } from "@prisma/client";

const largeCategories = ["Backend", "Database", "Mobile", "Cloud", "Tools"];

export function SkillsGrid({ grouped }: { grouped: Record<string, Skill[]> }) {
  const containerRef = useGsapStagger(".skill-badge");

  return (
    <div ref={containerRef} className="space-y-8">
      {Object.entries(grouped).map(([category, items]) => {
        const isLarge = largeCategories.includes(category);
        return (
          <div key={category}>
            <h3 className="text-sm text-muted-foreground mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className={`skill-badge ${
                    isLarge ? "text-base md:text-lg font-bold px-4 py-1.5" : ""
                  }`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}