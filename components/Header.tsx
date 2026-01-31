import Link from "next/link";
import type { Dictionary, Language } from "../data/i18n";
import LanguageToggle from "./LanguageToggle";

type HeaderProps = {
  lang: Language;
  dictionary: Dictionary;
};

export default function Header({ lang, dictionary }: HeaderProps) {
  const navItems = [
    { href: `/${lang}`, label: dictionary.nav.home },
    { href: `/${lang}/about`, label: dictionary.nav.about },
    { href: `/${lang}/projects`, label: dictionary.nav.projects },
    { href: `/${lang}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="border-b border-[rgba(27,27,27,0.08)] backdrop-blur">
      <div className="page-container flex flex-wrap items-center justify-between gap-4 py-6">
        <Link
          href={`/${lang}`}
          className="font-display text-lg tracking-wide text-[var(--ink)]"
        >
          Carolina Vasconcelos
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
          />
        </div>
      </div>
    </header>
  );
}
