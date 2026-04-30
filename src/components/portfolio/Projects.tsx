import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";

export const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A live portfolio is the best place to see things in action."
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
            Live
          </p>
          <h3 className="text-xl md:text-2xl font-medium text-foreground mb-1">
            carloscacerescampo.vercel.app
          </h3>
          <p className="text-sm text-muted-foreground">
            Personal portfolio with case studies and side projects.
          </p>
        </div>
        <div className="shrink-0 h-11 w-11 rounded-full border border-border/70 group-hover:border-primary/50 flex items-center justify-center transition-colors duration-200">
          <ArrowUpRight className="h-4 w-4 text-foreground/80" />
        </div>
      </motion.a>
    </Section>
  );
};
