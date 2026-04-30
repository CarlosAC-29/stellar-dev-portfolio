import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

export interface ProjectProps {
  title: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const Project = ({ title, image, technologies, liveUrl, githubUrl }: ProjectProps) => {
  const { lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card"
    >
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t.projects.viewLive[lang]}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border/70 bg-background/60 text-foreground hover:border-primary/50 transition-colors backdrop-blur-sm"
          >
            <Github className="h-3.5 w-3.5" />
            {t.projects.viewCode[lang]}
          </a>
        </div>
      </div>
    </motion.div>
  );
};
