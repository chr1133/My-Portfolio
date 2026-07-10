"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SquareArrowOutUpRight, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { motion } from "framer-motion";
import type { Project } from "@prisma/client";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex justify-between items-start gap-3">
            <span>{project.title}</span>
            <div className="flex items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <SiGithub size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <SquareArrowOutUpRight className="w-4 h-4" />
                </a>
              )}
              <CollapsibleTrigger
                aria-label="Toggle details"
                className="p-1 rounded hover:bg-muted"
              >
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </CollapsibleTrigger>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
            <p className="text-sm text-muted-foreground mt-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </CollapsibleContent>
        </CardContent>
      </Card>
    </Collapsible>
  );
}