import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";

export async function Projects() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });

  if (projects.length === 0) {
    return (
      <section id="projects" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-muted-foreground text-sm">No projects added yet — add some via the admin dashboard.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}