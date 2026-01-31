import Link from "next/link";
import type { Dictionary, Language } from "../data/i18n";
import LanguageToggle from "./LanguageToggle";
import ThemeSwitcher from "./ThemeSwitcher";
import type { ThemeId } from "../themes/types";

type HeaderProps = {
  lang: Language;
  dictionary: Dictionary;
  theme: ThemeId;
};

export default function Header({ lang, dictionary, theme }: HeaderProps) {
  const navItems = [
    { href: `/${lang}/t/${theme}`, label: dictionary.nav.home },
    { href: `/${lang}/t/${theme}/about`, label: dictionary.nav.about },
    { href: `/${lang}/t/${theme}/projects`, label: dictionary.nav.projects },
    { href: `/${lang}/t/${theme}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="border-b border-[var(--border)] backdrop-blur">
      <div className="page-container flex flex-wrap items-center justify-between gap-4 py-6">
        <Link
          href={`/${lang}/t/${theme}`}
          className="font-display text-lg tracking-wide text-[var(--ink)]"
        >
          {dictionary.identity.name}
        </Link>
        <div className="flex flex-wrap items-center gap-6">
          <nav aria-label={dictionary.header.navLabel}>
            <ul className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle
            currentLang={lang}
            label={dictionary.header.toggleLabel}
            languageLabels={{
              pt: dictionary.header.languagePt,
              en: dictionary.header.languageEn,
            }}
          />
          <ThemeSwitcher
            currentTheme={theme}
            locale={lang}
            label={dictionary.header.themeLabel}
            themeLabels={{
              classic: dictionary.header.themeClassic,
              minimalist: dictionary.header.themeMinimalist,
            }}
          />
        </div>
      </div>
    </header>
  );
}
