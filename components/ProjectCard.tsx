import Link from "next/link";
import type { Dictionary, Language } from "../data/i18n";
import type { Project } from "../data/projects";
import { content } from "../data/content";
import { getByKey } from "../lib/i18n";
import type { ThemeId } from "../themes/types";

type ProjectCardProps = {
  project: Project;
  locale: Language;
  theme: ThemeId;
  dictionary: Dictionary;
};

export default function ProjectCard({
  project,
  locale,
  theme,
  dictionary,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {getByKey(dictionary, content.projects.cardEyebrowKey)}
          </p>
          <h2 className="font-display text-2xl text-[var(--ink)]">
            {getByKey(dictionary, project.titleKey)}
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {getByKey(dictionary, project.summaryKey)}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          {project.stackKeys.map((key) => (
            <li
              key={key}
              className="rounded-full border border-[var(--border)] px-3 py-1"
            >
              {getByKey(dictionary, key)}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
        <Link
          href={`/${locale}/t/${theme}/projects/${project.slug}`}
          className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          {getByKey(dictionary, content.projects.detailsLabelKey)}
        </Link>
        {project.links?.repo || project.links?.demo ? (
          <div className="flex gap-3">
            {project.links?.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {dictionary.labels.repo}
              </a>
            ) : null}
            {project.links?.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {dictionary.labels.demo}
              </a>
            ) : null}
          </div>
        ) : (
          <span className="text-[var(--muted)]">
            {getByKey(dictionary, content.projects.privateLinksKey)}
          </span>
        )}
      </div>
    </article>
  );
}
