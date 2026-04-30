import { useEffect, useState } from "react";
import { Code2, Moon, Sun, Download, ChevronDown, Menu } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import { t } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
          {/* Resume download */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full px-2.5 py-1 transition-colors duration-200"
              aria-label="Download resume"
            >
              <Download className="h-3.5 w-3.5" />
              CV
              <ChevronDown className="h-3 w-3 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/cv/Carlos_Caceres_CV_EN.pdf" download className="cursor-pointer">
                  {t.hero.resumeEn[lang]}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/cv/Carlos_Caceres_HV_ES.pdf" download className="cursor-pointer">
                  {t.hero.resumeEs[lang]}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-7 w-7 inline-flex items-center justify-center text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full transition-colors duration-200"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="font-mono text-xs text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full px-2.5 py-1 transition-colors duration-200"
          >
            <span className={lang === "en" ? "text-foreground" : ""}>EN</span>
            <span className="mx-1 text-border">/</span>
            <span className={lang === "es" ? "text-foreground" : ""}>ES</span>
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
                    href="/cv/Carlos_Caceres_CV_EN.pdf"
                    download
                    className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-border/70 hover:border-primary/40 text-sm text-foreground/90 transition-colors duration-200"
                  >
                    {t.hero.resumeEn[lang]}
                    <Download className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                  <a
                    href="/cv/Carlos_Caceres_HV_ES.pdf"
                    download
                    className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-border/70 hover:border-primary/40 text-sm text-foreground/90 transition-colors duration-200"
                  >
                    {t.hero.resumeEs[lang]}
                    <Download className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button
                    onClick={toggle}
                    aria-label="Toggle language"
                    className="font-mono text-xs text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full px-3 py-1.5 transition-colors duration-200"
                  >
                    <span className={lang === "en" ? "text-foreground" : ""}>EN</span>
                    <span className="mx-1 text-border">/</span>
                    <span className={lang === "es" ? "text-foreground" : ""}>ES</span>
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
