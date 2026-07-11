import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, Link2 } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export async function Hero() {
  const profile = await prisma.profile.findFirst();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
     <div className="absolute inset-0 bg-gradient-to-br from-[#1F0318] via-background to-[#1E1A1D]" />
     <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#7F534B]/20 rounded-full blur-3xl" />
     <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#513F45]/30 rounded-full blur-3xl" />
     </div>

      <p className="text-muted-foreground mb-4 tracking-widest uppercase text-xs">Hi, I'm</p>

      <TextReveal
        text={profile?.name ?? "Christian Elias"}
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-none"
      />

      <FadeIn delay={0.5}>
        <p className="text-lg text-muted-foreground max-w-lg mb-10">
          {profile?.headline ?? "Software Engineer building full-stack products."}
        </p>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="flex gap-4 mb-10">
          <Magnetic>
            <Link href="#projects" className={buttonVariants({ size: "lg" })}>
              View Projects
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Contact Me
            </Link>
          </Magnetic>
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <div className="flex gap-6 text-muted-foreground">
          {profile?.github && (
            <Magnetic><a href={profile.github} target="_blank"><SiGithub size={20} /></a></Magnetic>
          )}
          {profile?.linkedin && (
            <Magnetic>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Link2 className="w-5 h-5" />
              </a>
            </Magnetic>
          )}
          {profile?.email && (
            <Magnetic><a href={`mailto:${profile.email}`}><Mail className="w-5 h-5" /></a></Magnetic>
          )}
        </div>
      </FadeIn>
    </section>
  );
}