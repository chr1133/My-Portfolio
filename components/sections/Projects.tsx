import { prisma } from "@/lib/prisma";
import type { Project } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SquareArrowOutUpRight } from "lucide-react";

export async function Projects() {
  const projects: Project[] = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });

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
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                {project.title}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank">
                      <SiGithub size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank">
                      <SquareArrowOutUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}