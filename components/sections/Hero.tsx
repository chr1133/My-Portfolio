import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export async function Hero() {
  const profile = await prisma.profile.findFirst();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
      <p className="text-muted-foreground mb-3">Hi, I'm</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        {profile?.name ?? "Christine"}
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-8">
        {profile?.bio ?? "Software Engineering student building full-stack and mobile experiences."}
      </p>
      <div className="flex gap-4 mb-8">
        <Link href="#projects" className={cn(buttonVariants({ variant: "default" }))}>
          View Projects
        </Link>
        <Link href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
          Contact Me
        </Link>
      </div>
      <div className="flex gap-5 text-muted-foreground">
        {profile?.github && (
          <a href={profile.github} target="_blank"><SiGithub size={20} /></a>
        )}
        {profile?.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <SquareArrowOutUpRight size={20} />
          </a>
        )}
        {profile?.email && (
          <a href={`mailto:${profile.email}`}><Mail className="w-5 h-5" /></a>
        )}
      </div>
    </section>
  );
}