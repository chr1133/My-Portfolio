import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, LinkIcon } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export async function Hero() {
  const profile = await prisma.profile.findFirst();

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-background to-violet-100 dark:from-sky-950/30 dark:via-background dark:to-violet-950/20" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-300/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-300/30 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <FadeIn>
        <p className="text-muted-foreground mb-3">Hi, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {profile?.name ?? "Christian Elias"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          {profile?.headline ?? profile?.bio}
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="flex gap-4 mb-8">
          <Link href="#projects" className={buttonVariants({ variant: "default" })}>
            View Projects
          </Link>
          <Link href="#contact" className={buttonVariants({ variant: "outline" })}>
            Contact Me
          </Link>
        </div>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="flex gap-5 text-muted-foreground">
          {profile?.github && (
            <a href={profile.github} target="_blank"><SiGithub size={20} /></a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkIcon className="w-5 h-5" />
            </a>
          )}
          {profile?.email && (
            <a href={`mailto:${profile.email}`}><Mail className="w-5 h-5" /></a>
          )}
        </div>
      </FadeIn>
    </section>
  );
}