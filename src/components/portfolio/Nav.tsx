import { useEffect, useState } from "react";
import { Code2, Moon, Sun, Download, Menu, Languages } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import { t } from "@/i18n/translations";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const cvHref = lang === "es" ? "/Carlos_Caceres_CV_ES.pdf" : "/Carlos_Caceres_CV_EN.pdf";
  const cvLabel = lang === "es" ? "HV" : "CV";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about[lang] },
    { href: "#experience", label: t.nav.experience[lang] },
    { href: "#skills", label: t.nav.skills[lang] },
    { href: "#projects", label: t.nav.projects[lang] },
    { href: "#education", label: t.nav.education[lang] },
    { href: "#contact", label: t.nav.contact[lang] },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 gap-8">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-foreground shrink-0">
          <span className="h-8 w-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
            <Code2 className="h-4 w-4 text-primary" />
          </span>
          carlos.dev
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Resume download (auto by language) */}
          <a
            href={cvHref}
            download
            aria-label="Download resume"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full px-2.5 py-1 transition-colors duration-200"
          >
            <Download className="h-3.5 w-3.5" />
            {cvLabel}
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-7 w-7 inline-flex items-center justify-center text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full transition-colors duration-200"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          {/* Language toggle - segmented switch */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
            className="relative inline-flex items-center gap-1 font-mono text-[11px] font-semibold border border-border/70 hover:border-primary/60 rounded-full p-0.5 bg-card/40 backdrop-blur-sm transition-colors duration-200"
          >
            <Languages className="h-3.5 w-3.5 ml-1.5 mr-0.5 text-primary" />
            <span
              className={`px-2 py-0.5 rounded-full transition-colors duration-200 ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              EN
            </span>
            <span
              className={`px-2 py-0.5 rounded-full transition-colors duration-200 ${
                lang === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              ES
            </span>
          </button>

          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-1.5 transition-colors duration-200"
          >
            {t.nav.cta[lang]}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-8 w-8 inline-flex items-center justify-center text-muted-foreground hover:text-foreground border border-border/70 rounded-full transition-colors duration-200"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="h-8 w-8 inline-flex items-center justify-center text-foreground border border-border/70 rounded-full transition-colors duration-200"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[82%] sm:w-80 bg-background border-border/60 flex flex-col">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 font-mono text-sm text-foreground">
                  <span className="h-8 w-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Code2 className="h-4 w-4 text-primary" />
                  </span>
                  carlos.dev
                </SheetTitle>
              </SheetHeader>

              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a
                        href={l.href}
                        className="block px-3 py-3 rounded-lg text-base text-foreground/90 hover:bg-accent hover:text-foreground transition-colors duration-200"
                      >
                        {l.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-border/60 space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-1">
                  {t.hero.resume[lang]}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={cvHref}
                    download
                    className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-border/70 hover:border-primary/40 text-sm text-foreground/90 transition-colors duration-200"
                  >
                    {lang === "es" ? t.hero.resumeEs[lang] : t.hero.resumeEn[lang]}
                    <Download className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button
                    onClick={toggle}
                    aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
                    className="relative inline-flex items-center gap-1 font-mono text-xs font-semibold border border-border/70 hover:border-primary/60 rounded-full p-0.5 bg-card/40 transition-colors duration-200"
                  >
                    <Languages className="h-3.5 w-3.5 ml-1.5 mr-0.5 text-primary" />
                    <span
                      className={`px-2 py-0.5 rounded-full transition-colors duration-200 ${
                        lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      EN
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full transition-colors duration-200 ${
                        lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      ES
                    </span>
                  </button>

                  <SheetClose asChild>
                    <a
                      href="#contact"
                      className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-1.5 transition-colors duration-200"
                    >
                      {t.nav.cta[lang]}
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
