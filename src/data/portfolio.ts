export const portfolio = {
  name: "Carlos Andrés Cáceres Campo",
  title: "Full Stack Developer",
  location: "Cali, Colombia",
  email: "carlosandres0229@gmail.com",
  phone: "+57 305 7479364",
  portfolioUrl: "https://carloscacerescampo.vercel.app/",
  github: "https://github.com/CarlosAC-29",
  linkedin: "https://www.linkedin.com/in/carlos-c%C3%A1ceres-developer/",
  summary:
    "Systems Engineer with 2+ years of experience building and maintaining full-stack applications. Strong focus on performance, scalable solutions, and bridging technical and business needs. Experienced in API integrations, cloud services, and translating requirements into technical solutions.",
  about:
    "I build reliable, performant full-stack applications and care just as much about the product as the code. My day-to-day blends engineering with product thinking — gathering requirements, asking the right questions, and turning fuzzy business needs into clear, shippable solutions. I'm comfortable across the stack and across teams, from pair-debugging an API to aligning with non-technical stakeholders.",
  skills: {
    Languages: ["JavaScript", "TypeScript", "C#", "Java", "PHP", "Python"],
    Frameworks: ["Next.js", ".NET", "Angular", "NestJS", "Spring Boot", "Express"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firestore"],
    Tools: ["Git", "Docker", "Figma", "Jira"],
    Cloud: ["AWS", "Azure"],
  } as Record<string, string[]>,
  experience: [
    {
      role: "Software Developer (Mid-Level)",
      company: "Dev.pro",
      location: "USA",
      period: "2024 — Present",
      responsibilities: [
        "Develop and maintain API integrations using Node.js, PHP, .NET, and Java",
        "Work with MongoDB and Oracle databases",
        "Implement cloud solutions using AWS and Azure",
        "Analyze incidents and resolve production issues",
        "Gather requirements and translate them into technical solutions",
      ],
      achievement:
        "Improved API performance, reducing response times from ~5s to 500ms–1s by optimizing queries and parallelizing processes.",
    },
    {
      role: "Freelance Web Developer",
      company: "Suncoast Interactive",
      location: "USA",
      period: "2025",
      responsibilities: [
        "Built applications with Next.js, Supabase, and PostgreSQL",
        "Used AI tools like Copilot to accelerate development",
        "Worked directly with clients to define requirements",
        "Estimated scope and timelines",
      ],
      achievement:
        "Improved ticket clarity and scope definition across the team, reducing back-and-forth on deliverables.",
    },
    {
      role: "Web Administrator",
      company: "Universidad del Valle",
      location: "Cali, Colombia",
      period: "2019 — 2023",
      responsibilities: [
        "Maintained and optimized websites using HTML, CSS, JavaScript",
        "Managed Joomla-based sites",
        "Handled updates, security, and performance improvements",
        "Collaborated with non-technical teams",
      ],
      achievement:
        "Designed and shipped responsive layouts for multiple engineering faculty websites.",
    },
  ],
  education: [
    { degree: "Systems Engineering", institution: "Universidad del Valle" },
    { degree: "Software Development Technician", institution: "SENA" },
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "C2", certification: "https://cert.efset.org/en/Dn75NY" },
  ],
};
