import Image from "next/image";
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
      <div className="minimalist-shell flex w-full flex-col gap-8 px-6 lg:flex-row">
        <aside className="my-card lg:sticky lg:top-10 lg:w-[450px]">
          <div className="min-h-[calc(100vh-120px)] rounded-[10px] bg-[var(--card)] px-8 py-10 shadow-[var(--shadow-strong)]">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--accent)] bg-[var(--card-muted)]">
              <Image
                src="/assets/photo.jpg"
                alt={dictionary.identity.name}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3>
                <span className="first-name text-[var(--accent)]">{nameParts.first}</span>{" "}
                {nameParts.rest}
              </h3>
            </div>
            <div className="bio mt-6 border-l-2 border-[var(--accent)] bg-[var(--card-muted)] px-4 py-3 text-sm text-[var(--muted)]">
              {getByKey(dictionary, content.minimalist.sidebarBioKey)}
            </div>
            <div className="contact-info mt-6 space-y-3 text-sm text-[var(--muted)]">
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
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <a
                href={content.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dictionary.labels.github}
                className="flex h-9 w-9 items-center justify-center rounded-[5px] border border-[var(--border)] text-[var(--ink)] transition hover:text-[var(--accent)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.38-3.37-1.38-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.11-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.36c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.59 5.08.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2z" />
                </svg>
              </a>
              <a
                href={content.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dictionary.labels.linkedin}
                className="flex h-9 w-9 items-center justify-center rounded-[5px] border border-[var(--border)] text-[var(--ink)] transition hover:text-[var(--accent)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.71 4.77 6.23V21h-4v-5.47c0-1.3-.02-2.97-1.77-2.97-1.77 0-2.04 1.41-2.04 2.88V21H9z" />
                </svg>
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
          <div className="minimalist-content-panel max-h-[calc(100vh-140px)] overflow-y-auto rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow-strong)] lg:p-8">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
