import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  const body = await req.json();
  const existing = await prisma.profile.findFirst();
  if (!existing) return NextResponse.json({ error: "No profile found" }, { status: 404 });

  const updated = await prisma.profile.update({ where: { id: existing.id }, data: body });
  return NextResponse.json(updated);
}