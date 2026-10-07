import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ThemeProvider } from "@/i18n/ThemeProvider";
import { t } from "@/i18n/translations";
import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageProvider";

const PortfolioPage = () => {
  const { lang } = useLang();

  useEffect(() => {
    const title = t.metadata.title[lang];
    const description = t.metadata.description[lang];

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [lang]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <BackToTop />
    </main>
  );
};

const Index = () => (
  <ThemeProvider>
    <LanguageProvider>
      <PortfolioPage />
    </LanguageProvider>
  </ThemeProvider>
);

export default Index;
