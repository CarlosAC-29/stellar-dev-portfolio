import { motion } from "framer-motion";
import { ArrowRight, Download, Globe, Github, Linkedin, MapPin, ChevronDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ParticlesBackground } from "./ParticlesBackground";
import { Typewriter } from "./Typewriter";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Hero = () => {
  const { lang } = useLang();

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <ParticlesBackground />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-narrow relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/70 bg-card/40 backdrop-blur-sm font-mono text-xs text-muted-foreground mb-10"
        >
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {t.hero.badge[lang]}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="text-foreground">{t.hero.heading[lang]} </span>
          <span className="text-gradient-name drop-shadow-[0_0_25px_hsl(var(--primary)/0.35)]">
            {t.hero.name[lang]}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-mono text-lg md:text-2xl text-primary-glow min-h-[2em]"
        >
          <Typewriter words={t.hero.typed[lang]} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {t.hero.summary[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            {t.hero.viewWork[lang]} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border/70 hover:border-border rounded-full px-6 py-2.5 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors duration-200"
          >
            {t.hero.getInTouch[lang]}
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2.5 rounded-full border border-border/70 hover:border-primary/40">
              <Download className="h-4 w-4" /> {t.hero.resume[lang]}
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-[220px]">
              <DropdownMenuItem asChild>
                <a href="/cv/Carlos_Caceres_CV_EN.pdf" download className="cursor-pointer">
                  {t.hero.resumeEn[lang]}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/cv/Carlos_Caceres_HV_ES.pdf" download className="cursor-pointer">
                  {t.hero.resumeEs[lang]}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-5 text-muted-foreground"
        >
          <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors duration-200">
            <Github className="h-5 w-5" />
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors duration-200">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={portfolio.portfolioUrl} target="_blank" rel="noreferrer" aria-label="Portfolio" className="hover:text-foreground transition-colors duration-200">
            <Globe className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground/80"
        >
          {["TypeScript", "JavaScript", ".NET", "C#", "Java", "PHP", "Next.js", "React", "NestJS", "Node.js", "Express", "Django", "PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "Azure", "Docker", "Tailwind"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
