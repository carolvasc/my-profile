import Link from "next/link";
import type { Dictionary, Language } from "../data/i18n";
import type { Project } from "../data/projects";
import { getLocalizedProject } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  lang: Language;
  dictionary: Dictionary;
};

export default function ProjectCard({
  project,
  lang,
  dictionary,
}: ProjectCardProps) {
  const localizedProject = getLocalizedProject(project, lang);

  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-6 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {dictionary.projects.cardEyebrow}
          </p>
          <h2 className="font-display text-2xl text-[var(--ink)]">
            {localizedProject.title}
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {localizedProject.summary}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          {localizedProject.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[rgba(27,27,27,0.12)] px-3 py-1"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
        <Link
          href={`/${lang}/projects/${localizedProject.slug}`}
          className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          {dictionary.projects.detailsLink}
        </Link>
        {localizedProject.links?.repo || localizedProject.links?.demo ? (
          <div className="flex gap-3">
            {localizedProject.links?.repo ? (
              <a
                href={localizedProject.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {dictionary.labels.repo}
              </a>
            ) : null}
            {localizedProject.links?.demo ? (
              <a
                href={localizedProject.links.demo}
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
            {dictionary.projects.privateLinks}
          </span>
        )}
      </div>
    </article>
  );
}
