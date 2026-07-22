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
    "Systems Engineer with 3+ years of experience building and maintaining full-stack applications. Strong focus on performance, scalable solutions, and bridging technical and business needs. Experienced in API integrations, cloud services, and translating requirements into technical solutions.",
  about:
    "I build reliable, performant full-stack applications and care just as much about the product as the code. My day-to-day blends engineering with product thinking — gathering requirements, asking the right questions, and turning fuzzy business needs into clear, shippable solutions. I'm comfortable across the stack and across teams, from pair-debugging an API to aligning with non-technical stakeholders.",
  skills: {
    Languages: ["JavaScript", "TypeScript", "C#", "Java", "PHP", "Python"],
    Frameworks: ["Next.js", ".NET", "Angular", "NestJS", "Spring Boot", "Express"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firestore"],
    Tools: ["Git", "Docker", "Figma", "Jira", "Claude", "Gemini", "Copilot"],
    Cloud: ["AWS", "Azure"],
  } as Record<string, string[]>,
  experience: [
    {
      role: { en: "Software Developer (Mid-Level)", es: "Desarrollador de Software (Mid-Level)" },
      company: "Dev.pro",
      location: { en: "USA", es: "EE.UU." },
      period: "2024 — Present",
      responsibilities: {
        en: [
          "Develop and maintain API integrations using Node.js, PHP, .NET, and Java",
          "Work with MongoDB and Oracle databases",
          "Implement cloud solutions using AWS and Azure",
          "Analyze incidents and resolve production issues",
          "Gather requirements and translate them into technical solutions",
        ],
        es: [
          "Desarrollo y mantenimiento de integraciones de API con Node.js, PHP, .NET y Java",
          "Trabajo con bases de datos MongoDB y Oracle",
          "Implementación de soluciones en la nube con AWS y Azure",
          "Análisis de incidentes y resolución de problemas en producción",
          "Recopilación de requisitos y traducción a soluciones técnicas",
        ],
      },
      achievement: {
        en: "Improved API performance, reducing response times from ~5s to 500ms–1s by optimizing queries and parallelizing processes.",
        es: "Mejoré el rendimiento de APIs, reduciendo tiempos de respuesta de ~5s a 500ms–1s optimizando consultas y paralelizando procesos.",
      },
    },
    {
      role: { en: "Freelance Web Developer", es: "Desarrollador Web Freelance" },
      company: "Suncoast Interactive",
      location: { en: "USA", es: "EE.UU." },
      period: "2025",
      responsibilities: {
        en: [
          "Built applications with Next.js, Supabase, and PostgreSQL",
          "Used AI tools like Copilot to accelerate development",
          "Worked directly with clients to define requirements",
          "Estimated scope and timelines",
        ],
        es: [
          "Construí aplicaciones con Next.js, Supabase y PostgreSQL",
          "Uso de herramientas de IA como Copilot para acelerar el desarrollo",
          "Trabajo directo con clientes para definir requisitos",
          "Estimación de alcance y tiempos",
        ],
      },
      achievement: {
        en: "Improved ticket clarity and scope definition across the team, reducing back-and-forth on deliverables.",
        es: "Mejoré la claridad de los tickets y la definición de alcance, reduciendo idas y vueltas en los entregables.",
      },
    },
    {
      role: { en: "University Intern", es: "Practicante Universitario" },
      company: "Copservir LTDA",
      location: { en: "Cali, Valle del Cauca, Colombia · Remote", es: "Cali, Valle del Cauca, Colombia · Remoto" },
      period: "2023 — 2024",
      responsibilities: {
        en: [
          "Developed new modules for the platform used by Drogas La Rebaja points of sale, using PHP, JavaScript, MySQL, Bootstrap and Git",
          "Performed maintenance tasks and resolved support tickets",
          "Worked under the Scrum agile methodology",
        ],
        es: [
          "Desarrollé nuevos módulos para la plataforma utilizada por los puntos de venta de Drogas La Rebaja, con PHP, JavaScript, MySQL, Bootstrap y Git",
          "Realicé labores de mantenimiento y resolución de tickets",
          "Trabajo bajo la metodología ágil Scrum",
        ],
      },
      achievement: {
        en: "Delivered new features and bug fixes that improved the daily operation of point-of-sale users.",
        es: "Entregué nuevas funcionalidades y correcciones que mejoraron la operación diaria de los usuarios de los puntos de venta.",
      },
    },
    {
      role: { en: "Web Administrator", es: "Administrador Web" },
      company: "Universidad del Valle",
      location: { en: "Cali, Colombia", es: "Cali, Colombia" },
      period: "2019 — 2023",
      responsibilities: {
        en: [
          "Maintained and optimized websites using HTML, CSS, JavaScript",
          "Managed Joomla-based sites",
          "Handled updates, security, and performance improvements",
          "Collaborated with non-technical teams",
        ],
        es: [
          "Mantenimiento y optimización de sitios web con HTML, CSS, JavaScript",
          "Gestión de sitios basados en Joomla",
          "Actualizaciones, seguridad y mejoras de rendimiento",
          "Colaboración con equipos no técnicos",
        ],
      },
      achievement: {
        en: "Designed and shipped responsive layouts for multiple engineering faculty websites.",
        es: "Diseñé y entregué layouts responsivos para varios sitios de la facultad de ingeniería.",
      },
    },
  ],
  education: [
    {
      degree: { en: "Systems Engineering", es: "Ingeniero de Sistemas" },
      institution: "Universidad del Valle",
    },
    {
      degree: { en: "Software Development Technician", es: "Técnico en Desarrollo de Software" },
      institution: "SENA",
    },
  ],
  languages: [
    { language: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
    { language: { en: "English", es: "Inglés" }, level: "C2", certification: "https://cert.efset.org/en/Dn75NY" },
  ],
};
