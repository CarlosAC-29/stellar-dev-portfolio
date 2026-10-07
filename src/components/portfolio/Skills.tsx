import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";
import { TechIcon } from "./TechIcon";

export const Skills = () => {
  const { lang } = useLang();
  const groups = portfolio.skills;
  return (
    <Section
      id="skills"
      eyebrow={t.skills.eyebrow[lang]}
      title={t.skills.title[lang]}
      description={t.skills.description[lang]}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((group, i) => (
          <motion.div
            key={group.category.en}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {group.category[lang]}
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: i * 0.08 + 0.15 } },
              }}
              className="flex flex-wrap gap-2"
            >
              {group.items[lang].map((item) => (
                <motion.span
                  key={item}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 6 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/90 bg-background/60 border border-border/60 rounded-full px-3 py-1 hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
                >
                  <TechIcon name={item} className="h-3.5 w-3.5" />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
