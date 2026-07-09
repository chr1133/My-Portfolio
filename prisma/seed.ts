import { prisma } from '../lib/prisma'

async function main() {
  await prisma.profile.create({
    data: {
      name: 'Christine',
      email: 'your-real-email@example.com',
      bio: 'Software Engineering student at Addis Ababa University',
      location: 'Addis Ababa, Ethiopia',
      github: 'https://github.com/chr1133',
    },
  })

  await prisma.skill.createMany({
    data: [
      { name: 'TypeScript', category: 'Frontend', level: 4 },
      { name: 'Next.js', category: 'Frontend', level: 4 },
      { name: 'Flutter', category: 'Mobile', level: 4 },
      { name: 'Dart', category: 'Mobile', level: 4 },
      { name: 'Node.js', category: 'Backend', level: 3 },
      { name: 'C / C++', category: 'Systems', level: 3 },
      { name: 'OpenGL', category: 'Graphics', level: 3 },
    ],
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())