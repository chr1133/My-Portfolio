import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Section } from "@/components/ui/primitives/Section";
import { Container } from "@/components/ui/primitives/Container";
import { SectionHeading } from "@/components/ui/primitives/SectionHeading";

export async function Projects() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <Section id="projects">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Selected Work" title="Projects" />
        </FadeIn>
        {projects.length === 0 ? (
          <p className="text-muted-foreground text-sm">No projects added yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}