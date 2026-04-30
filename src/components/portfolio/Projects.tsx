import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

export const Projects = () => {
  const { lang } = useLang();
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow[lang]}
      title={t.projects.title[lang]}
      description={t.projects.description[lang]}
    >
      <motion.a
        href={portfolio.portfolioUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="surface surface-hover p-8 md:p-10 flex items-center justify-between gap-6 group"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
            {t.projects.live[lang]}
          </p>
          <h3 className="text-xl md:text-2xl font-medium text-foreground mb-1">
            carloscacerescampo.vercel.app
          </h3>
          <p className="text-sm text-muted-foreground">{t.projects.desc[lang]}</p>
        </div>
        <div className="shrink-0 h-11 w-11 rounded-full border border-border/70 group-hover:border-primary/50 flex items-center justify-center transition-colors duration-200">
          <ArrowUpRight className="h-4 w-4 text-foreground/80" />
        </div>
      </motion.a>
    </Section>
  );
};
