"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Language } from "../data/i18n";
import { themes } from "../themes/registry";
import type { ThemeId } from "../themes/types";

type ThemeSwitcherProps = {
  currentTheme: ThemeId;
  locale: Language;
  label: string;
  themeLabels: Record<ThemeId, string>;
};

const replaceThemeInPath = (pathname: string, theme: ThemeId, locale: Language) => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 3 && segments[1] === "t") {
    return `/${[segments[0], "t", theme, ...segments.slice(3)].join("/")}`;
  }
  return `/${locale}/t/${theme}`;
};

export default function ThemeSwitcher({
  currentTheme,
  locale,
  label,
  themeLabels,
}: ThemeSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (theme: ThemeId) => {
    if (theme === currentTheme) return;
    const nextPath = replaceThemeInPath(pathname, theme, locale);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    document.documentElement.dataset.theme = theme;
    router.push(nextPath);
  };

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
      <span className="sr-only">{label}</span>
      {themes.map((theme) => (
        <button
          key={theme}
          type="button"
          onClick={() => handleSwitch(theme)}
          className={`cursor-pointer rounded-full border px-3 py-1 transition ${
            theme === currentTheme
              ? "border-[var(--ink)] text-[var(--ink)]"
              : "border-[var(--border)] hover:text-[var(--ink)]"
          }`}
          aria-pressed={theme === currentTheme}
        >
          {themeLabels[theme]}
        </button>
      ))}
    </div>
  );
}
