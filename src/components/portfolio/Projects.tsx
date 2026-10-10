import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { Project } from "./Project";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import flywiseImg from "@/assets/projects/flywise.jpeg";
import vikingrImg from "@/assets/projects/vikingr-saga.png";
import portafolioImg from "@/assets/projects/portafolio.png";
import recipeImg from "@/assets/projects/recipemeup.png";
import miLoveImg from "@/assets/projects/milove.png";

const projects = [
  {
    title: "MiLove",
    image: miLoveImg,
    technologies: ["TypeScript"],
    liveUrl: "https://mi-love-beta.vercel.app/login",
    githubUrl: "https://github.com/CarlosAC-29/miLove",
  },
  {
    title: "Flywise",
    image: flywiseImg,
    technologies: ["Express", "React"],
    liveUrl: "https://flywise-opal.vercel.app",
    githubUrl: "https://github.com/josegabjimenez/FlyWise",
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
    liveUrl: "https://carlos-caceres-tech.vercel.app/",
    githubUrl: "https://github.com/CarlosAC-29/stellar-dev-portfolio",
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateCurrentSlide();
    carouselApi.on("reInit", updateCurrentSlide);
    carouselApi.on("select", updateCurrentSlide);

    return () => {
      carouselApi.off("reInit", updateCurrentSlide);
      carouselApi.off("select", updateCurrentSlide);
    };
  }, [carouselApi]);

  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow[lang]}
      title={t.projects.title[lang]}
      description={t.projects.description[lang]}
    >
      <Carousel setApi={setCarouselApi} opts={{ align: "start", loop: true }}>
        <div className="mb-3 flex items-center justify-end gap-2 text-xs font-mono text-muted-foreground lg:hidden">
          <span>{t.projects.swipeHint[lang]}</span>
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.25, repeat: Infinity }}>
            <ArrowRight className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
        <div className="mb-3 hidden items-center justify-end gap-2 text-xs font-mono text-muted-foreground lg:flex">
          <span>{t.projects.scrollHint[lang]}</span>
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.25, repeat: Infinity }}>
            <ArrowRight className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={lang + project.title}>
              <Project {...project} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`${t.projects.goToProject[lang]} ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};
