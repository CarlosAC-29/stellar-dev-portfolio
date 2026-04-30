import { useEffect, useState } from "react";
import { Code2, Moon, Sun, Download, ChevronDown } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import { t } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
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

        <div className="flex items-center gap-3 shrink-0">
          {/* Resume download */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary/40 rounded-full px-2.5 py-1 transition-colors duration-200"
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
            className="hidden sm:inline-flex text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-1.5 transition-colors duration-200"
          >
            {t.nav.cta[lang]}
          </a>
        </div>
      </nav>
    </header>
  );
};
