import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";
import type { Project } from "../../data/projects";

type ClassicProjectDetailProps = {
  dictionary: Dictionary;
  project: Project;
};

export default function ClassicProjectDetail({
  dictionary,
  project,
}: ClassicProjectDetailProps) {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {dictionary.projectDetail.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {getByKey(dictionary, project.titleKey)}
          </h1>
          <p className="text-lg text-[var(--muted)]">
            {getByKey(dictionary, project.summaryKey)}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.problemTitle}
              </h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {getByKey(dictionary, project.problemKey)}
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.decisionsTitle}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {project.decisionsKeys.map((key) => (
                  <li key={key}>{getByKey(dictionary, key)}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.resultsTitle}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {project.resultsKeys.map((key) => (
                  <li key={key}>{getByKey(dictionary, key)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.stackTitle}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
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
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.linksTitle}
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
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
                {!project.links?.repo && !project.links?.demo ? (
                  <span>{getByKey(dictionary, content.projects.privateLinksKey)}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
