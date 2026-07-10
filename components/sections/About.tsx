import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/FadeIn";
import { AboutIllustration } from "@/components/sections/AboutIllustration";

export async function About() {
  const profile = await prisma.profile.findFirst();

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[1fr_220px] gap-10 items-center">
        <FadeIn>
          <h2 className="text-2xl font-semibold mb-6">About</h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {profile?.bio ?? "Add your bio in the database to have it appear here."}
          </p>
          {profile?.location && (
            <p className="text-sm text-muted-foreground mt-4">📍 {profile.location}</p>
          )}
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <AboutIllustration />
        </FadeIn>
      </div>
    </section>
  );
}