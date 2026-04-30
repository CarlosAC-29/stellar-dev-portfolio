import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { t } from "@/i18n/translations";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();

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
      <nav className="container-narrow flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-foreground">
          <span className="h-8 w-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
            <Code2 className="h-4 w-4 text-primary" />
          </span>
          carlos.dev
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
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
