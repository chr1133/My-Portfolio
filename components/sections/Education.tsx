import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Education as EducationModel } from "@prisma/client";

export async function Education() {
  const education: EducationModel[] = await prisma.education.findMany({ orderBy: { startYear: "desc" } });
  const educationWithExtras = education as Array<
    EducationModel & { college?: string | null; description?: string | null }
  >;

  if (educationWithExtras.length === 0) return null;

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-24">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
      </FadeIn>
      <div className="space-y-6">
        {educationWithExtras.map((edu, i) => (
          <FadeIn key={edu.id} delay={i * 0.1}>
            <div>
              <h3 className="font-medium">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {edu.institution}
                {edu.college && ` · ${edu.college}`}
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                {edu.startYear} — {edu.endYear ?? "Present"}
              </p>
              {edu.description && <p className="text-sm text-muted-foreground">{edu.description}</p>}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}