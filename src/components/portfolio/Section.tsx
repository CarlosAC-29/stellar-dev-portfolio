import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export const Section = ({ id, eyebrow, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="py-24 md:py-28 border-t border-border/40">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="mb-12 max-w-2xl"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-mono text-xs tracking-widest uppercase text-primary mb-3"
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="mt-4 text-muted-foreground text-base leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
