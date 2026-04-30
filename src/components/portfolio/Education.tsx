import carlosImg from "@/assets/carlos-graduation.jpeg";
import { motion } from "framer-motion";
import { GraduationCap, Languages as LanguagesIcon, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

export const Education = () => {
  const { lang } = useLang();
  return (
    <Section
      id="education"
      eyebrow={t.education.eyebrow[lang]}
      title={t.education.title[lang]}
      
    >
      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute -inset-3 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border border-border/70 ring-1 ring-primary/20">
            <img src={carlosImg} alt="Carlos Cáceres" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        <div className="space-y-4">
          {portfolio.education.map((e, i) => (
            <motion.div
              key={e.institution + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="surface surface-hover p-5 flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-medium">{e.degree[lang]}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{e.institution}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <LanguagesIcon className="h-4 w-4 text-primary" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.education.languages[lang]}
              </p>
            </div>
            <ul className="space-y-2">
              {portfolio.languages.map((l, idx) => (
                <li key={idx} className="flex items-center justify-between text-sm">
                  <span className="text-foreground/90">
                    {l.language[lang]}{" "}
                    <span className="text-muted-foreground">
                      — {typeof l.level === "string" ? l.level : l.level[lang]}
                    </span>
                  </span>
                  {l.certification && (
                    <a
                      href={l.certification}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary-glow transition-colors duration-200 text-xs"
                    >
                      {t.education.certificate[lang]} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
