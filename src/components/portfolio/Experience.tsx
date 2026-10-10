import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { portfolio } from "@/data/portfolio";
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

export const Experience = () => {
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
      id="experience"
      eyebrow={t.experience.eyebrow[lang]}
      title={t.experience.title[lang]}
      description={t.experience.description[lang]}
    >
      <Carousel setApi={setCarouselApi} opts={{ align: "start", loop: true }}>
        <div className="mb-3 flex items-center justify-end gap-2 text-xs font-mono text-muted-foreground lg:hidden">
          <span>{t.experience.swipeHint[lang]}</span>
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.25, repeat: Infinity }}>
            <ArrowRight className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
        <div className="mb-3 hidden items-center justify-end gap-2 text-xs font-mono text-muted-foreground lg:flex">
          <span>{t.experience.scrollHint[lang]}</span>
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.25, repeat: Infinity }}>
            <ArrowRight className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
        <CarouselContent>
        {portfolio.experience.map((job, i) => (
          <CarouselItem key={lang + job.company + job.period.en}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="surface surface-hover h-full p-6 md:p-8"
            >
              <div className="flex flex-col gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {job.role[lang]}{" "}
                    <span className="text-muted-foreground font-normal">· {job.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{job.location[lang]}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {job.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      {t.experience.currentRole[lang]}
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground tracking-wide whitespace-nowrap">
                    {job.period[lang]}
                  </span>
                </div>
              </div>

              {job.context && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{job.context[lang]}</p>
              )}

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
                }}
                className="space-y-2 mb-5"
              >
                {job.responsibilities[lang].map((r) => (
                  <motion.li
                    key={r}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-3"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                    {r}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="font-mono text-xs text-muted-foreground tracking-wide mb-5">{job.tech.join(" · ")}</p>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/[0.06] p-4"
              >
                <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <span className="text-primary font-medium">{t.experience.achievement[lang]}: </span>
                  {job.achievement[lang]}
                </p>
              </motion.div>
            </motion.article>
          </CarouselItem>
        ))}
        </CarouselContent>
        <div className="mt-4 flex justify-center gap-2">
          {portfolio.experience.map((job, index) => (
            <button
              key={job.company}
              type="button"
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`${t.experience.goToExperience[lang]} ${index + 1}`}
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
