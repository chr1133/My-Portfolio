import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "@icons-pack/react-simple-icons";
import type { Skill } from "@prisma/client";

const iconMap: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs size={14} />,
  "TypeScript": <SiTypescript size={14} />,
  "PostgreSQL": <SiPostgresql size={14} />,
};

export async function Skills() {
  const skills = await prisma.skill.findMany({ orderBy: { category: "asc" } });

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] ?? [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-24">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      </FadeIn>
      <div className="space-y-6">
        {Object.entries(grouped).map(([category, items], i) => (
          <FadeIn key={category} delay={i * 0.1}>
            <h3 className="text-sm text-muted-foreground mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill: Skill) => (
                <Badge key={skill.id} variant="secondary" className="flex items-center gap-1.5">
                  {iconMap[skill.name]}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}