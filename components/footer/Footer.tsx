import { prisma } from "@/lib/prisma";
import { FooterIcon } from "@/components/footer/FooterIcon";

export async function Footer() {
  const profile = await prisma.profile.findFirst();

  return (
    <footer className="bg-sky-50 dark:bg-sky-950/20 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        <FooterIcon />

        <h3 className="text-lg font-semibold">
          {profile?.name ?? "Christian Elias"}
        </h3>

        <div className="flex gap-4 text-sm">
          {profile?.github && (
            <a href={profile.github} target="_blank" className="hover:underline">GitHub</a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" className="hover:underline">LinkedIn</a>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile?.name ?? "Christian Elias"}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}