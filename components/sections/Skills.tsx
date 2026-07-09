import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@prisma/client";

export async function Skills() {
  const skills = await prisma.skill.findMany({ orderBy: { category: "asc" } });

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] ?? [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      <div className="space-y-6">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm text-muted-foreground mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill: Skill) => (
                <Badge key={skill.id} variant="secondary">{skill.name}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}