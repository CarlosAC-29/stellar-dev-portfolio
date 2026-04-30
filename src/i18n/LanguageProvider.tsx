import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Lang } from "@/i18n/translations";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const Ctx = createContext<LanguageCtx | null>(null);

/**
 * Default language detection:
 * - If user has a saved preference, use it.
 * - Otherwise default to Spanish, UNLESS the user is clearly outside Colombia
 *   (detected via browser timezone / language). In that case, fall back to English.
 */
const detectDefaultLang = (): Lang => {
  if (typeof window === "undefined") return "es";

  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved === "en" || saved === "es") return saved;

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const navLang = (navigator.language || "").toLowerCase();

    // Strong signal: Colombia timezone or es-CO locale
    if (tz === "America/Bogota" || navLang.startsWith("es-co")) return "es";

    // Any Spanish-speaking locale → Spanish
    if (navLang.startsWith("es")) return "es";

    // Otherwise (clearly non-Colombia / non-Spanish) → English
    return "en";
  } catch {
    return "es";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(detectDefaultLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, setLang, toggle: () => setLang(lang === "en" ? "es" : "en") }}>
      {children}
    </Ctx.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
