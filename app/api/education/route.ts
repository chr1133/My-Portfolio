import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const education = await prisma.education.findMany({
    orderBy: { startYear: 'desc' },
  })
  return NextResponse.json(education)
}

export async function POST(req: Request) {
  const body = await req.json()
  const education = await prisma.education.create({ data: body })
  return NextResponse.json(education)
}