import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";
import { TechIcon } from "./TechIcon";

export interface ProjectProps {
  title: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  reverse?: boolean;
  index?: number;
}

export const Project = ({
  title,
  image,
  technologies,
  liveUrl,
  githubUrl,
  reverse = false,
  index = 0,
}: ProjectProps) => {
  const { lang } = useLang();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group surface surface-hover overflow-hidden grid md:grid-cols-2 gap-0 items-stretch ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col justify-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary/80 mb-2">
          {String(index + 1).padStart(2, "0")} / {t.projects.eyebrow[lang]}
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{title}</h3>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono rounded-full border border-border/70 bg-background/40 text-muted-foreground"
            >
              <TechIcon name={tech} className="h-3 w-3" />
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t.projects.viewLive[lang]}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md border border-border/70 bg-background/40 text-foreground hover:border-primary/50 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            {t.projects.viewCode[lang]}
          </a>
        </div>
      </div>
    </motion.article>
  );
};
