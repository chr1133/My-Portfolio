import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/FadeIn";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
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
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      </FadeIn>
      <SkillsGrid grouped={grouped} />
    </section>
  );
}