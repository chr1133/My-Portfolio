import { prisma } from "@/lib/prisma";
import type { Experience as ExperienceModel } from "@prisma/client";

export async function Experience() {
  const experience: ExperienceModel[] = await prisma.experience.findMany({ orderBy: { startDate: "desc" } });

  if (experience.length === 0) return null;

  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>
      <div className="space-y-8 border-l pl-6">
        {experience.map((exp) => (
          <div key={exp.id}>
            <h3 className="font-medium">{exp.role} · {exp.company}</h3>
            <p className="text-xs text-muted-foreground mb-2">
              {new Date(exp.startDate).getFullYear()} — {exp.endDate ? new Date(exp.endDate).getFullYear() : "Present"}
            </p>
            <p className="text-sm text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}