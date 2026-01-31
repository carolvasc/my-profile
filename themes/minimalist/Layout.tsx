import type { Dictionary, Language } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";
import LanguageToggle from "../../components/LanguageToggle";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import type { ThemeId } from "../types";

type MinimalistLayoutProps = {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Language;
  theme: ThemeId;
};

const splitName = (name: string) => {
  const [first, ...rest] = name.split(" ");
  return { first, rest: rest.join(" ") };
};

export default function MinimalistLayout({
  children,
  dictionary,
  locale,
  theme,
}: MinimalistLayoutProps) {
  const nameParts = splitName(dictionary.identity.name);

  return (
    <div className="min-h-screen bg-[var(--background)] py-10">
      <div className="flex w-full flex-col gap-8 px-6 lg:flex-row">
        <aside className="my-card lg:sticky lg:top-10 lg:w-[450px]">
          <div className="min-h-[calc(100vh-120px)] rounded-[10px] bg-[var(--card)] px-8 py-10 shadow-[var(--shadow-strong)]">
            <div className="mx-auto h-32 w-32 rounded-full border-4 border-[var(--accent)] bg-[var(--card-muted)]" />
            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">
                <span className="text-[var(--accent)]">{nameParts.first}</span>{" "}
                {nameParts.rest}
              </h2>
            </div>
            <div className="mt-6 border-l-2 border-[var(--accent)] bg-[var(--card-muted)] px-4 py-3 text-sm text-[var(--muted)]">
              {getByKey(dictionary, content.minimalist.sidebarBioKey)}
            </div>
            <div className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {[
                getByKey(dictionary, content.identity.locationKey),
                getByKey(dictionary, content.identity.phoneKey),
                getByKey(dictionary, content.identity.emailKey),
              ].map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-[5px] bg-[var(--card-muted)] px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={content.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[5px] border border-[var(--border)] text-xs font-semibold uppercase text-[var(--ink)] transition hover:text-[var(--accent)]"
              >
                {dictionary.labels.github.slice(0, 2)}
              </a>
              <a
                href={content.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[5px] border border-[var(--border)] text-xs font-semibold uppercase text-[var(--ink)] transition hover:text-[var(--accent)]"
              >
                {dictionary.labels.linkedin.slice(0, 2)}
              </a>
            </div>
          </div>
        </aside>
        <section className="flex-1">
          <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
            <LanguageToggle
              currentLang={locale}
              label={dictionary.header.toggleLabel}
              languageLabels={{
                pt: dictionary.header.languagePt,
                en: dictionary.header.languageEn,
              }}
            />
            <ThemeSwitcher
              currentTheme={theme}
              locale={locale}
              label={dictionary.header.themeLabel}
              themeLabels={{
                classic: dictionary.header.themeClassic,
                minimalist: dictionary.header.themeMinimalist,
              }}
            />
          </div>
          <div className="max-h-[calc(100vh-140px)] overflow-y-auto rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow-strong)] lg:p-8">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
