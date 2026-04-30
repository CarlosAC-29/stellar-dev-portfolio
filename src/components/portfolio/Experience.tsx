import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";

export const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've made an impact"
      description="A focus on measurable outcomes — performance, clarity, and shipping reliable software."
    >
      <div className="space-y-4">
        {portfolio.experience.map((job, i) => (
          <motion.article
            key={job.company + job.period}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {job.role}{" "}
                  <span className="text-muted-foreground font-normal">· {job.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">{job.location}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground tracking-wide whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="space-y-2 mb-5">
              {job.responsibilities.map((r) => (
                <li key={r} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary/70 mt-2 h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/[0.06] p-4">
              <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/90 leading-relaxed">
                <span className="text-primary font-medium">Impact: </span>
                {job.achievement}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
