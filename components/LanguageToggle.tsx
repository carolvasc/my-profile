"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Language } from "../data/i18n";

type LanguageToggleProps = {
  currentLang: Language;
  label: string;
  languageLabels: Record<Language, string>;
};

const languages: Language[] = ["pt", "en"];

const replaceLangInPath = (pathname: string, lang: Language) => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 3 && segments[1] === "t") {
    return `/${[lang, ...segments.slice(1)].join("/")}`;
  }
  return `/${lang}/t/classic`;
};

export default function LanguageToggle({
  currentLang,
  label,
  languageLabels,
}: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (lang: Language) => {
    if (lang === currentLang) return;
    const nextPath = replaceLangInPath(pathname, lang);
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
    router.push(nextPath);
  };

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
      <span className="sr-only">{label}</span>
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => handleSwitch(lang)}
          className={`cursor-pointer rounded-full border px-3 py-1 transition ${
            lang === currentLang
              ? "border-[var(--ink)] text-[var(--ink)]"
              : "border-[var(--border)] hover:text-[var(--ink)]"
          }`}
          aria-pressed={lang === currentLang}
        >
          {languageLabels[lang]}
        </button>
      ))}
    </div>
  );
}
