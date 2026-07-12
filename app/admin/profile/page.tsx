import { prisma } from "@/lib/prisma";
import { ProfileForm } from "@/components/dashboard/ProfileForm";

export default async function AdminProfilePage() {
  const profile = await prisma.profile.findFirst();
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-8">Edit Profile</h1>
      <ProfileForm profile={profile} />
    </div>
  );
}