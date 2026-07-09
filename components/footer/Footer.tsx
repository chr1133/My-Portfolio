import { prisma } from "@/lib/prisma";

export async function Footer() {
  const profile = await prisma.profile.findFirst();

  return (
    <footer className="border-t py-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile?.name ?? "Christine"}. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          {profile?.github && <a href={profile.github} target="_blank">GitHub</a>}
          {profile?.linkedin && <a href={profile.linkedin} target="_blank">LinkedIn</a>}
        </div>
      </div>
    </footer>
  );
}