import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/motion/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Cloudinary"]} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}