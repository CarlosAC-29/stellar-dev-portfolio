import * as icons from "simple-icons/icons";

// Map display name → simple-icons slug (camelCase prefixed with "si")
const SLUGS: Record<string, string> = {
  JavaScript: "siJavascript",
  TypeScript: "siTypescript",
  "C#": "siSharp", // C# isn't in simple-icons; fall back rendered separately
  Java: "siOpenjdk",
  PHP: "siPhp",
  Python: "siPython",
  "Next.js": "siNextdotjs",
  ".NET": "siDotnet",
  Angular: "siAngular",
  NestJS: "siNestjs",
  "Spring Boot": "siSpring",
  Express: "siExpress",
  PostgreSQL: "siPostgresql",
  MySQL: "siMysql",
  MongoDB: "siMongodb",
  Firestore: "siFirebase",
  Git: "siGit",
  Docker: "siDocker",
  Figma: "siFigma",
  Jira: "siJira",
  Claude: "siClaude",
  Gemini: "siGooglegemini",
  Copilot: "siGithubcopilot",
  AWS: "siAmazonwebservices",
  Azure: "siMicrosoftazure",
};

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon = ({ name, className = "h-4 w-4" }: TechIconProps) => {
  const slug = SLUGS[name];
  // Fallback for C# (no simple-icons slug)
  if (name === "C#") {
    return (
      <span
        aria-hidden
        className={`${className} inline-flex items-center justify-center text-[10px] font-bold leading-none`}
      >
        C#
      </span>
    );
  }

  const icon = slug ? (icons as Record<string, { path: string; title: string }>)[slug] : undefined;
  if (!icon) return null;

  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
};
