import { prisma } from '../lib/prisma'

async function main() {
  // Clear existing data so reseeding doesn't duplicate
  await prisma.profile.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.education.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.project.deleteMany()

  await prisma.profile.create({
    data: {
      name: 'Christian Elias',
      headline: 'Software Engineering Student | Full-Stack Developer | AI Enthusiast',
      email: 'christianelias102@gmail.com',
      bio: `I'm Christian Elias, a Software Engineering student at Addis Ababa University with a passion for building modern, scalable, and user-friendly web applications.

I specialize in full-stack development using Next.js, React, TypeScript, Node.js, PostgreSQL, and Prisma. I enjoy creating clean UI/UX experiences with Tailwind CSS and shadcn/ui while building secure backend APIs and databases.

I'm continuously learning cloud technologies, AI-powered applications, and modern software architecture. My goal is to become a professional software engineer who builds impactful digital products that solve real-world problems.`,
      location: 'Addis Ababa, Ethiopia',
      github: 'https://github.com/chr1133',
      linkedin: 'https://https://www.linkedin.com/in/christiane-006073382/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYcff6xoPRFmltok1ONQETQ%3D%3D', 
    },
  })

  await prisma.skill.createMany({
    data: [
      // Frontend
      { name: 'HTML5', category: 'Frontend', level: 4 },
      { name: 'CSS3', category: 'Frontend', level: 4 },
      { name: 'JavaScript', category: 'Frontend', level: 4 },
      { name: 'TypeScript', category: 'Frontend', level: 4 },
      { name: 'React', category: 'Frontend', level: 4 },
      { name: 'Next.js', category: 'Frontend', level: 4 },
      { name: 'Tailwind CSS', category: 'Frontend', level: 4 },
      { name: 'shadcn/ui', category: 'Frontend', level: 4 },
      // Backend
      { name: 'Node.js', category: 'Backend', level: 3 },
      { name: 'Express.js', category: 'Backend', level: 3 },
      { name: 'REST API', category: 'Backend', level: 3 },
      { name: 'Prisma ORM', category: 'Backend', level: 3 },
      // Database
      { name: 'PostgreSQL', category: 'Database', level: 3 },
      { name: 'Neon Database', category: 'Database', level: 3 },
      // Mobile
      { name: 'Flutter', category: 'Mobile', level: 4 },
      { name: 'Dart', category: 'Mobile', level: 4 },
      // Cloud
      { name: 'Vercel', category: 'Cloud', level: 3 },
      { name: 'Cloudinary', category: 'Cloud', level: 3 },
      // Tools
      { name: 'Git', category: 'Tools', level: 4 },
      { name: 'GitHub', category: 'Tools', level: 4 },
      { name: 'VS Code', category: 'Tools', level: 4 },
      { name: 'Postman', category: 'Tools', level: 3 },
      { name: 'Figma', category: 'Tools', level: 3 },
      { name: 'pnpm', category: 'Tools', level: 4 },
      { name: 'npm', category: 'Tools', level: 4 },
    ],
  })

  await prisma.education.create({
    data: {
      institution: 'Addis Ababa University',
      college: 'Addis Ababa Institute of Technology (AAIT)',
      degree: 'BSc in Software Engineering',
      field: 'Software Engineering',
      startYear: 2023,
      endYear: null, // still in progress
      description:
        "Currently pursuing a Bachelor's degree in Software Engineering with coursework in Data Structures, Database Systems, Software Engineering, Networking, Operating Systems, Human Computer Interaction, and Full-Stack Development.",
    },
  })

  await prisma.experience.create({
    data: {
      company: 'Academic & Personal Projects',
      role: 'Full-Stack Developer',
      description:
        'Designed and developed full-stack web applications using Next.js, React, Node.js, Express, PostgreSQL, Prisma, and Tailwind CSS. Built responsive user interfaces, REST APIs, authentication systems, and deployed applications using Vercel.',
      startDate: new Date('2024-01-01'),
      endDate: null,
    },
  })

  await prisma.project.createMany({
    data: [
      {
        title: 'Portfolio Website',
        description:
          'A modern full-stack portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Prisma, Neon PostgreSQL, Cloudinary, and Vercel featuring dynamic content management, animations, and responsive design.',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'Cloudinary'],
        githubUrl: 'https://github.com/chr1133/My-Portfolio',
        featured: true,
      },
      {
        title: 'Campus Collaboration Platform',
        description:
          'A collaborative platform that helps university students connect through study groups, skill sharing, and academic collaboration. Developed using Flutter with modern state management and REST API integration.',
        technologies: ['Flutter', 'Dart', 'REST API'],
        featured: false,
      },
      {
        title: 'Student Registration System',
        description:
          'A student management system with CRUD functionality allowing administrators to register, edit, search, and manage student records using a modern full-stack architecture.',
        technologies: ['React', 'Node.js', 'Express', 'SQLite'],
        githubUrl: 'https://github.com/chr1133/student-registration-platform',
        featured: false,
      },
      {
        title: 'Gojo Real Estate',
        description:
          'A responsive real estate website featuring modern UI, property listings, and clean user experience.',
        technologies: ['React', 'Tailwind CSS'],
        featured: false,
      },
    ],
  })

  // Certificates and Blog Posts intentionally left empty per your instructions —
  // add them via the admin dashboard once you actually have them.
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())