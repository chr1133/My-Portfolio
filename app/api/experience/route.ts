import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const experience = await prisma.experience.findMany({
    orderBy: { startDate: 'desc' },
  })
  return NextResponse.json(experience)
}

export async function POST(req: Request) {
  const body = await req.json()
  const experience = await prisma.experience.create({ data: body })
  return NextResponse.json(experience)
}