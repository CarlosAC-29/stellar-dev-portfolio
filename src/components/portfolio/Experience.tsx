import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

export const Experience = () => {
  const { lang } = useLang();
  return (
    <Section
      id="experience"
      eyebrow={t.experience.eyebrow[lang]}
      title={t.experience.title[lang]}
      description={t.experience.description[lang]}
    >
      <div className="space-y-4">
        {portfolio.experience.map((job, i) => (
          <motion.article
            key={lang + job.company + job.period}
            initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {job.role[lang]}{" "}
                  <span className="text-muted-foreground font-normal">· {job.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">{job.location[lang]}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground tracking-wide whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
              }}
              className="space-y-2 mb-5"
            >
              {job.responsibilities[lang].map((r) => (
                <motion.li
                  key={r}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="text-sm text-muted-foreground leading-relaxed flex gap-3"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                  {r}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/[0.06] p-4"
            >
              <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/90 leading-relaxed">
                <span className="text-primary font-medium">{t.experience.impact[lang]}: </span>
                {job.achievement[lang]}
              </p>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
