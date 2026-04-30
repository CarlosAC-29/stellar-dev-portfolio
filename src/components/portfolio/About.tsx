import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";

const pillars = [
  {
    icon: Code2,
    title: "Engineering",
    text: "Full-stack delivery across JS/TS, .NET, Java and PHP — focused on performance and maintainability.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    text: "Translate ambiguous business needs into clear scope, tickets and technical decisions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Comfortable working directly with clients and non-technical stakeholders to align outcomes.",
  },
];

export const About = () => {
  return (
    <Section id="about" eyebrow="About" title="Engineer with a product mindset">
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
        {portfolio.about}
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover p-6"
          >
            <p.icon className="h-5 w-5 text-primary mb-4" />
            <h3 className="text-foreground font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
