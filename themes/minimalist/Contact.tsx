import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";

type MinimalistContactProps = {
  dictionary: Dictionary;
};

export default function MinimalistContact({ dictionary }: MinimalistContactProps) {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {getByKey(dictionary, content.contact.eyebrowKey)}
        </p>
        <h1 className="text-3xl font-semibold text-[var(--ink)]">
          {getByKey(dictionary, content.contact.titleKey)}
        </h1>
        <p className="text-sm text-[var(--muted)]">
          {getByKey(dictionary, content.contact.introKey)}
        </p>
      </header>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.contact.emailLabelKey)}
        </header>
        <a
          href={`mailto:${dictionary.identity.email}`}
          className="mt-4 block text-base font-semibold text-[var(--accent)]"
        >
          {dictionary.identity.email}
        </a>
      </section>
    </div>
  );
}
