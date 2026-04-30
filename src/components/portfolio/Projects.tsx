import { Section } from "./Section";
import { Project } from "./Project";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

import flywiseImg from "@/assets/projects/flywise.jpeg";
import mkalyImg from "@/assets/projects/mkaly.jpg";
import vikingrImg from "@/assets/projects/vikingr-saga.png";
import portafolioImg from "@/assets/projects/portafolio.png";
import recipeImg from "@/assets/projects/recipemeup.png";

const projects = [
  {
    title: "Flywise",
    image: flywiseImg,
    technologies: ["Express", "React"],
    liveUrl: "https://flywise-opal.vercel.app",
    githubUrl: "https://github.com/josegabjimenez/FlyWise",
  },
  {
    title: "Mkaly",
    image: mkalyImg,
    technologies: ["NextJS", "Django", "Tailwind", "MaterialUI"],
    liveUrl: "https://mkaly.vercel.app/",
    githubUrl: "https://github.com/andrew921as/Mkaly",
  },
  {
    title: "Vikingr Saga",
    image: vikingrImg,
    technologies: ["MERN Stack", "React Three Fiber"],
    liveUrl: "https://vikingr-saga.vercel.app/",
    githubUrl: "https://github.com/camyj2010/Vikingr-Saga",
  },
  {
    title: "Portafolio",
    image: portafolioImg,
    technologies: ["NextJS"],
    liveUrl: "https://carloscacerescampo.vercel.app/",
    githubUrl: "https://github.com/CarlosAC-29/portafolio",
  },
  {
    title: "RecipeMeUp",
    image: recipeImg,
    technologies: ["Angular"],
    liveUrl: "https://recipe-me-up.vercel.app/",
    githubUrl: "https://github.com/CarlosAC-29/RecipeMeUp",
  },
];

export const Projects = () => {
  const { lang } = useLang();
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow[lang]}
      title={t.projects.title[lang]}
      description={t.projects.description[lang]}
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <Project key={p.title} {...p} reverse={i % 2 === 1} index={i} />
        ))}
      </div>
    </Section>
  );
};
