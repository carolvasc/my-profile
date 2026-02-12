import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";

type ClassicContactProps = {
  dictionary: Dictionary;
};

export default function ClassicContact({ dictionary }: ClassicContactProps) {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="max-w-2xl space-y-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
          {getByKey(dictionary, content.contact.eyebrowKey)}
        </p>
        <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
          {getByKey(dictionary, content.contact.titleKey)}
        </h1>
        <p className="text-lg text-[var(--muted)]">
          {getByKey(dictionary, content.contact.introKey)}
        </p>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {getByKey(dictionary, content.contact.emailLabelKey)}
          </p>
          <a
            href={`mailto:${dictionary.identity.email}`}
            className="mt-4 block text-lg text-[var(--accent)] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            {dictionary.identity.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            <a
              href={content.links.github}
              className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dictionary.labels.github}
            </a>
            <a
              href={content.links.linkedin}
              className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dictionary.labels.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
