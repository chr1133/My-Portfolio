import { prisma } from "@/lib/prisma";
import type { Education as EducationModel } from "@prisma/client";

export async function Education() {
  const education: EducationModel[] = await prisma.education.findMany({ orderBy: { startYear: "desc" } });

  if (education.length === 0) return null;

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id}>
            <h3 className="font-medium">{edu.degree} in {edu.field}</h3>
            <p className="text-sm text-muted-foreground">{edu.institution}</p>
            <p className="text-xs text-muted-foreground">{edu.startYear} — {edu.endYear ?? "Present"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}