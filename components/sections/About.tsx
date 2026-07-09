import { prisma } from "@/lib/prisma";

export async function About() {
  const profile = await prisma.profile.findFirst();

  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold mb-6">About</h2>
      <p className="text-muted-foreground leading-relaxed">
        {profile?.bio ?? "Add your bio in the database to have it appear here."}
      </p>
      {profile?.location && (
        <p className="text-sm text-muted-foreground mt-4">📍 {profile.location}</p>
      )}
    </section>
  );
}