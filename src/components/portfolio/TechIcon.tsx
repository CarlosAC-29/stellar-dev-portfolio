import * as siIcons from "simple-icons";
import { Cloud } from "lucide-react";

// Map display name → simple-icons export name
const SLUGS: Record<string, string> = {
  JavaScript: "siJavascript",
  TypeScript: "siTypescript",
  Java: "siOpenjdk",
  PHP: "siPhp",
  Python: "siPython",
  "Next.js": "siNextdotjs",
  ".NET": "siDotnet",
  Angular: "siAngular",
  NestJS: "siNestjs",
  "Spring Boot": "siSpringboot",
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
};

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon = ({ name, className = "h-4 w-4" }: TechIconProps) => {
  // Special fallbacks (not in simple-icons due to brand restrictions / missing)
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
  if (name === "AWS" || name === "Azure") {
    return <Cloud className={className} aria-hidden />;
  }

  const slug = SLUGS[name];
  const icon = slug
    ? (siIcons as Record<string, { path: string; title: string } | undefined>)[slug]
    : undefined;
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
