import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ThemeProvider } from "@/i18n/ThemeProvider";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Carlos Cáceres — Full Stack Developer";
    const desc =
      "Full Stack Developer with 2+ years building scalable apps across JS/TS, .NET, Java, and PHP. Open to new opportunities.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="min-h-screen bg-background text-foreground">
          <Nav />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
