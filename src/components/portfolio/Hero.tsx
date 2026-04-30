import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]"
        >
          {portfolio.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          {portfolio.title} — building scalable full-stack products and bridging the gap
          between business needs and engineering.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base text-muted-foreground/90 leading-relaxed"
        >
          {portfolio.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={portfolio.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            View portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border/70 hover:border-border rounded-full px-5 py-2.5 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors duration-200"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border/70 hover:border-border rounded-full px-5 py-2.5 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors duration-200"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" />
          {portfolio.location}
        </motion.div>
      </div>
    </section>
  );
};
