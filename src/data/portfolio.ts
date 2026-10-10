import type { Lang } from "@/i18n/translations";

type Localized<T> = Record<Lang, T>;

interface Experience {
  role: Localized<string>;
  company: string;
  location: Localized<string>;
  period: Localized<string>;
  isCurrent?: boolean;
  context?: Localized<string>;
  responsibilities: Localized<string[]>;
  achievement: Localized<string>;
  tech: string[];
}

interface SkillGroup {
  category: Localized<string>;
  items: Localized<string[]>;
}

export const portfolio: {
  name: string;
  location: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  github: string;
  linkedin: string;
  skills: SkillGroup[];
  experience: Experience[];
  education: Array<{ degree: Localized<string>; institution: string }>;
  languages: Array<{ language: Localized<string>; level: Localized<string> | string; certification?: string }>;
} = {
  name: "Carlos Andrés Cáceres Campo",
  location: "Cali, Colombia",
  email: "carlosandres0229@gmail.com",
  phone: "+57 305 7479364",
  portfolioUrl: "https://carloscacerescampo.vercel.app/",
  github: "https://github.com/CarlosAC-29",
  linkedin: "https://www.linkedin.com/in/carlos-c%C3%A1ceres-developer/",
  skills: [
    {
      category: { en: "Languages", es: "Lenguajes" },
      items: {
        en: ["JavaScript", "TypeScript", "C#", "Java", "PHP", "Python"],
        es: ["JavaScript", "TypeScript", "C#", "Java", "PHP", "Python"],
      },
    },
    {
      category: { en: "Frameworks / Runtimes", es: "Frameworks / Entornos" },
      items: {
        en: ["Next.js", ".NET", "Angular", "NestJS", "Spring Boot", "Express", "Node.js", "Yii2", "Bootstrap"],
        es: ["Next.js", ".NET", "Angular", "NestJS", "Spring Boot", "Express", "Node.js", "Yii2", "Bootstrap"],
      },
    },
    {
      category: { en: "Databases", es: "Bases de datos" },
      items: {
        en: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Supabase"],
        es: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Supabase"],
      },
    },
    {
      category: { en: "Cloud & Tools", es: "Nube y herramientas" },
      items: {
        en: ["AWS", "Azure", "Azure DevOps", "Postman", "Linux", "Excel", "Git", "Docker", "Figma", "Jira", "Claude", "Gemini", "Copilot"],
        es: ["AWS", "Azure", "Azure DevOps", "Postman", "Linux", "Excel", "Git", "Docker", "Figma", "Jira", "Claude", "Gemini", "Copilot"],
      },
    },
    {
      category: { en: "Requirements & QA", es: "Requerimientos y QA" },
      items: {
        en: ["Requirements Elicitation", "User Stories", "Acceptance Criteria", "Functional Documentation", "Test Case Design", "Functional & API Testing", "Scrum"],
        es: ["Levantamiento de requerimientos", "Historias de usuario", "Criterios de aceptación", "Documentación funcional", "Diseño de casos de prueba", "Pruebas funcionales y de API", "Scrum"],
      },
    },
  ],
  experience: [
    {
      role: { en: "Requirements Engineer", es: "Ingeniero de Requerimientos" },
      company: "VortexBird",
      location: { en: "Cali, Colombia", es: "Cali, Colombia" },
      period: { en: "Jul 2026 – Present", es: "Jul 2026 – Actualidad" },
      isCurrent: true,
      context: {
        en: "Assigned to a leading Colombian financial institution.",
        es: "Asignado a una importante entidad financiera colombiana.",
      },
      responsibilities: {
        en: [
          "Elicit functional and non-functional requirements through meetings and interviews with business stakeholders.",
          "Document requirements, user stories, and acceptance criteria in Azure DevOps.",
          "Design and execute functional and API test cases with Postman to validate deliveries.",
          "Build requirements and test tracking matrices in Excel to report progress and coverage to project leads.",
          "Bridge business and development teams, leveraging my development background to ensure technical feasibility.",
        ],
        es: [
          "Levanto requerimientos funcionales y no funcionales mediante reuniones y entrevistas con usuarios de negocio.",
          "Documento requerimientos, historias de usuario y criterios de aceptación en Azure DevOps.",
          "Diseño y ejecuto casos de prueba funcionales y de API con Postman para validar las entregas.",
          "Construyo matrices de seguimiento de requerimientos y pruebas en Excel para reportar avance y cobertura a los líderes del proyecto.",
          "Actúo como puente entre negocio y desarrollo, aprovechando mi experiencia técnica para asegurar la viabilidad de las soluciones.",
        ],
      },
      achievement: {
        en: "Structured the requirements and test traceability in Azure DevOps, giving the team clear visibility of test coverage and status, and detecting gaps before development begins.",
        es: "Estructuré la trazabilidad de requerimientos y pruebas en Azure DevOps, dando al equipo visibilidad clara de la cobertura y el estado de las pruebas, y detectando vacíos antes de iniciar el desarrollo.",
      },
      tech: ["Azure DevOps", "Postman", "Excel"],
    },
    {
      role: { en: "Software Developer (Mid-Level)", es: "Desarrollador de Software (Semi Senior)" },
      company: "Dev.pro",
      location: { en: "North Carolina, USA", es: "Carolina del Norte, EE. UU." },
      period: { en: "2024 – Jun 2026", es: "2024 – Jun 2026" },
      context: {
        en: "Assigned to a U.S. insurance brokerage firm – payroll management application.",
        es: "Asignado a una firma de corretaje de seguros de EE. UU. – aplicación de gestión de nómina.",
      },
      responsibilities: {
        en: [
          "Developed and maintained features and third-party API integrations for a payroll management platform using Node.js, PHP, .NET, Java, MongoDB, and Oracle.",
          "Implemented cloud-based solutions using Azure and AWS.",
          "Resolved support tickets by analyzing incidents and proposing solutions to ensure system continuity.",
          "Gathered requirements and translated business needs into clear, detailed technical tickets.",
        ],
        es: [
          "Desarrollé y mantuve funcionalidades e integraciones con APIs de terceros para una plataforma de nómina con Node.js, PHP, .NET, Java, MongoDB y Oracle.",
          "Implementé soluciones en la nube con Azure y AWS.",
          "Resolví tickets de soporte analizando incidentes y proponiendo soluciones para garantizar la continuidad del sistema.",
          "Levanté requerimientos y traduje necesidades de negocio en tickets técnicos claros y detallados.",
        ],
      },
      achievement: {
        en: "Optimized the performance of multiple endpoints, reducing response times from 5 seconds to between 500 ms and 1 second by reorganizing database structures and parallelizing processes.",
        es: "Optimicé el rendimiento de múltiples endpoints, reduciendo los tiempos de respuesta de 5 segundos a entre 500 ms y 1 segundo mediante la reorganización de estructuras de base de datos y la paralelización de procesos.",
      },
      tech: ["Node.js", "PHP", ".NET", "Java", "MongoDB", "Oracle", "Azure", "AWS"],
    },
    {
      role: { en: "Freelance Web Developer", es: "Desarrollador Web Freelance" },
      company: "Suncoast Interactive",
      location: { en: "Florida, USA", es: "Florida, EE. UU." },
      period: { en: "2025", es: "2025" },
      responsibilities: {
        en: [
          "Developed applications with Next.js, PostgreSQL, and Supabase, using AI tools such as Claude and GitHub Copilot to accelerate development.",
          "Gathered client requirements, performed scope analysis and time estimation, and supported cost definition.",
          "Designed workflows and communicated solutions to non-technical stakeholders.",
        ],
        es: [
          "Desarrollé aplicaciones con Next.js, PostgreSQL y Supabase, apoyándome en herramientas de IA como Claude y GitHub Copilot para acelerar el desarrollo.",
          "Levanté requerimientos con clientes, realicé análisis de alcance y estimación de tiempos, y apoyé la definición de costos.",
          "Diseñé flujos de trabajo y comuniqué soluciones a stakeholders no técnicos.",
        ],
      },
      achievement: {
        en: "Improved ticket creation and scope definition processes, enabling the team to have clearer requirements from the beginning of each development.",
        es: "Mejoré los procesos de creación de tickets y definición de alcance, permitiendo al equipo contar con requerimientos más claros desde el inicio de cada desarrollo.",
      },
      tech: ["Next.js", "PostgreSQL", "Supabase"],
    },
    {
      role: { en: "Software Development Intern", es: "Practicante de Desarrollo de Software" },
      company: "Copservir",
      location: { en: "Colombia (Remote)", es: "Colombia (Remoto)" },
      period: { en: "Sep 2023 – Mar 2024", es: "Sep 2023 – Mar 2024" },
      responsibilities: {
        en: [
          "Built and improved core modules using PHP (Yii2), Angular, jQuery, and Bootstrap.",
          "Managed MySQL databases and Linux servers within a Scrum team.",
        ],
        es: [
          "Desarrollé y mejoré módulos clave con PHP (Yii2), Angular, jQuery y Bootstrap.",
          "Gestioné bases de datos MySQL y servidores Linux dentro de un equipo Scrum.",
        ],
      },
      achievement: {
        en: "Contributed to the development of new microservices with NestJS and MongoDB, delivering functional modules that were integrated into production within Scrum sprints.",
        es: "Contribuí al desarrollo de nuevos microservicios con NestJS y MongoDB, entregando módulos funcionales integrados a producción dentro de los sprints de Scrum.",
      },
      tech: ["PHP", "Yii2", "Angular", "NestJS", "MongoDB", "MySQL"],
    },
    {
      role: { en: "Web Administrator", es: "Administrador Web" },
      company: "Universidad del Valle",
      location: { en: "Cali, Colombia", es: "Cali, Colombia" },
      period: { en: "2019 – 2023", es: "2019 – 2023" },
      responsibilities: {
        en: [
          "Managed and maintained institutional websites using HTML5, CSS, JavaScript, and Joomla, ensuring a smooth user experience.",
          "Performed regular updates and troubleshooting to maintain website security and minimize downtime.",
          "Collaborated with non-technical teams to understand needs and translate them into functional improvements.",
        ],
        es: [
          "Administré y mantuve sitios web institucionales con HTML5, CSS, JavaScript y Joomla, asegurando una buena experiencia de usuario.",
          "Realicé actualizaciones y solución de problemas para mantener la seguridad de los sitios y minimizar caídas.",
          "Trabajé con equipos no técnicos para entender sus necesidades y convertirlas en mejoras funcionales.",
        ],
      },
      achievement: {
        en: "Proposed and developed new responsive designs for the Electronic Engineering, Electrical Engineering, and Technology program websites, integrating them into the institutional site with the communications team.",
        es: "Propuse y desarrollé nuevos diseños responsivos para los sitios de los programas de Ingeniería Electrónica, Ingeniería Eléctrica y Tecnología, integrándolos al sitio institucional junto al equipo de comunicaciones.",
      },
      tech: ["HTML5", "CSS", "JavaScript", "Joomla"],
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
