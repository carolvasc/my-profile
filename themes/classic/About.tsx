import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";

type ClassicAboutProps = {
  dictionary: Dictionary;
};

export default function ClassicAbout({ dictionary }: ClassicAboutProps) {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-12">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {getByKey(dictionary, content.about.eyebrowKey)}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {getByKey(dictionary, content.about.titleKey)}
          </h1>
          {content.about.introKeys.map((key) => (
            <p key={key} className="text-lg text-[var(--muted)]">
              {getByKey(dictionary, key)}
            </p>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
            <h2 className="font-display text-2xl text-[var(--ink)]">
              {getByKey(dictionary, content.about.expertiseTitleKey)}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {content.about.expertiseKeys.map((key) => (
                <li
                  key={key}
                  className="border-b border-dashed border-[var(--border)] pb-3"
                >
                  {getByKey(dictionary, key)}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {getByKey(dictionary, content.about.waysTitleKey)}
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                {content.about.waysKeys.map((key) => (
                  <li key={key}>{getByKey(dictionary, key)}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {getByKey(dictionary, content.about.onlineTitleKey)}
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em]">
                <a
                  href={content.links.github}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dictionary.labels.github}
                </a>
                <a
                  href={content.links.linkedin}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dictionary.labels.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
