import type { Dictionary } from "../../data/i18n";
import type { Project } from "../../data/projects";
import { getByKey } from "../../lib/i18n";

type MinimalistProjectDetailProps = {
  dictionary: Dictionary;
  project: Project;
};

export default function MinimalistProjectDetail({
  dictionary,
  project,
}: MinimalistProjectDetailProps) {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {dictionary.projectDetail.eyebrow}
        </p>
        <h1 className="text-3xl font-semibold text-[var(--ink)]">
          {getByKey(dictionary, project.titleKey)}
        </h1>
        <p className="text-sm text-[var(--muted)]">
          {getByKey(dictionary, project.summaryKey)}
        </p>
      </header>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {dictionary.projectDetail.problemTitle}
        </header>
        <p className="mt-4 text-sm text-[var(--muted)]">
          {getByKey(dictionary, project.problemKey)}
        </p>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {dictionary.projectDetail.decisionsTitle}
        </header>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {project.decisionsKeys.map((key) => (
            <li key={key}>{getByKey(dictionary, key)}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {dictionary.projectDetail.resultsTitle}
        </header>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {project.resultsKeys.map((key) => (
            <li key={key}>{getByKey(dictionary, key)}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {dictionary.projectDetail.stackTitle}
        </header>
        <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {project.stackKeys.map((key) => (
            <span
              key={key}
              className="rounded-[5px] border border-[var(--border)] px-2 py-1"
            >
              {getByKey(dictionary, key)}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
