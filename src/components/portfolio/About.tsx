import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";
import { Section } from "./Section";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

const icons = [Code2, Lightbulb, Users];

export const About = () => {
  const { lang } = useLang();
  return (
    <Section id="about" eyebrow={t.about.eyebrow[lang]} title={t.about.title[lang]}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12"
      >
        {t.about.body[lang]}
      </motion.p>
      <div className="grid md:grid-cols-3 gap-4">
        {t.about.pillars.map((p, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={p.title.en}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="surface surface-hover p-6"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Icon className="h-5 w-5 text-primary mb-4" />
              </motion.div>
              <h3 className="text-foreground font-medium mb-2">{p.title[lang]}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text[lang]}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
