import { motion } from "framer-motion";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";

export const Skills = () => {
  const groups = Object.entries(portfolio.skills);
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="A practical toolkit shaped by years of shipping across stacks and clouds."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-foreground/90 bg-background/60 border border-border/60 rounded-full px-3 py-1 hover:border-primary/40 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
