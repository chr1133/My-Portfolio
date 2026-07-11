"use client";

import { Badge } from "@/components/ui/badge";
import { useGsapStagger } from "@/hooks/useGsapReveal";
import type { Skill } from "@prisma/client";

export function SkillsGrid({ grouped }: { grouped: Record<string, Skill[]> }) {
  const containerRef = useGsapStagger(".skill-badge");

  return (
    <div ref={containerRef} className="space-y-6">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-sm text-muted-foreground mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Badge key={skill.id} variant="secondary" className="skill-badge">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}