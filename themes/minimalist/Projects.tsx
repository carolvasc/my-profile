import Link from "next/link";
import type { Dictionary, Language } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";
import type { ThemeId } from "../types";

type MinimalistProjectsProps = {
  dictionary: Dictionary;
  locale: Language;
  theme: ThemeId;
};

export default function MinimalistProjects({
  dictionary,
  locale,
  theme,
}: MinimalistProjectsProps) {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="section_title">
          <h3>{dictionary.projects.eyebrow}</h3>
        </div>
        <h1 className="text-3xl font-semibold text-[var(--ink)]">
          {getByKey(dictionary, content.projects.sectionTitleKey)}
        </h1>
        <p className="text-base text-[var(--muted)]">
          {getByKey(dictionary, content.projects.sectionIntroKey)}
        </p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {content.projects.items.map((project) => (
          <article
            key={project.slug}
            className="rounded-[10px] border border-[var(--border)] bg-[var(--card-muted)] p-5 shadow-[var(--shadow)]"
          >
            <p className="text-base uppercase tracking-[0.2em] text-[var(--muted)]">
              {getByKey(dictionary, content.projects.cardEyebrowKey)}
            </p>
            <h2 className="mt-2 text-base font-semibold text-[var(--ink)]">
              {getByKey(dictionary, project.titleKey)}
            </h2>
            <p className="mt-2 text-base text-[var(--muted)]">
              {getByKey(dictionary, project.summaryKey)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-base uppercase tracking-[0.2em] text-[var(--muted)]">
              {project.stackKeys.map((key) => (
                <span
                  key={key}
                  className="rounded-[5px] border border-[var(--border)] px-2 py-1"
                >
                  {getByKey(dictionary, key)}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-base uppercase tracking-[0.2em] text-[var(--muted)]">
              <Link
                href={`/${locale}/t/${theme}/projects/${project.slug}`}
                className="transition hover:text-[var(--accent)]"
              >
                {getByKey(dictionary, content.projects.detailsLabelKey)}
              </Link>
              <span>{getByKey(dictionary, content.projects.privateLinksKey)}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
