import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, Link2 } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { LanguageSlider } from "@/components/motion/LanguageSlider";
import { Hero3DWrapper } from "@/components/three/Hero3DWrapper";

export async function Hero() {
  const profile = await prisma.profile.findFirst();

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      {/* 3D graphic — positioned behind/right, subtle */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <Hero3DWrapper />
      </div>

      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F0318] via-background to-[#1E1A1D]" />
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-12 items-center w-full">
        {/* Left: profile photo */}
        <FadeIn direction="right">
          <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto md:mx-0">
            {profile?.profileImage ? (
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-accent/40 shadow-[0_0_40px_-10px_theme(colors.accent)]">
                <Image src={profile.profileImage} alt={profile.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-full h-full rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-xs text-muted-foreground text-center px-4">
                Add your photo via admin dashboard
              </div>
            )}
          </div>
        </FadeIn>

        {/* Right: text content */}
        <div className="text-center md:text-left">
          <p className="text-muted-foreground mb-2 tracking-widest uppercase text-xs">Hi, I'm</p>

          <TextReveal
            text={profile?.name ?? "Christian Elias"}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-3 leading-none"
          />

          <div className="mb-4 text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2">
            <span>Languages I code in:</span>
            <LanguageSlider />
          </div>

          <FadeIn delay={0.4}>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              {profile?.headline ?? "Software Engineer building full-stack products."}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
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

          <FadeIn delay={0.6}>
            <div className="flex gap-6 text-muted-foreground justify-center md:justify-start">
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
        </div>
      </div>
    </section>
  );
}