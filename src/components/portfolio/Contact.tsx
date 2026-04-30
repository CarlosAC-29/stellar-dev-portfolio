import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

export const Contact = () => {
  const { lang } = useLang();
  const items = [
    { icon: Mail, label: portfolio.email, href: `mailto:${portfolio.email}` },
    { icon: Linkedin, label: "LinkedIn", href: portfolio.linkedin },
    { icon: Github, label: "GitHub", href: portfolio.github },
  ];

  return (
    <Section
      id="contact"
      eyebrow={t.contact.eyebrow[lang]}
      title={t.contact.title[lang]}
      description={t.contact.description[lang]}
    >
      <div className="grid md:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="surface surface-hover p-5 flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-foreground/90 truncate">{item.label}</span>
          </motion.a>
        ))}
      </div>

      <footer className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.name}. {t.contact.rights[lang]}
        </p>
        <p className="font-mono text-xs text-muted-foreground">{t.contact.built[lang]}</p>
      </footer>
    </Section>
  );
};
